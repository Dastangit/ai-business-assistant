-- ============================================================
-- DASTAN X-TECH · Importación diaria de prospectos (Make → Supabase)
-- Pegar entero en Supabase → SQL Editor → Run.
-- Se puede ejecutar más de una vez sin romper nada.
-- Requiere antes 2026-10-28-prospectos-google-maps.sql.
-- ============================================================

-- 1) IMPORTAR: Make manda el lote del scraper de Google Maps a POST /rest/v1/rpc/importar_prospectos.
--    Solo guarda negocios contactables sin llamar: con correo, o con teléfono que no sea fijo.
--    Los place_id ya guardados se ignoran para no pisar el estado de un prospecto ya trabajado.
create or replace function public.importar_prospectos(items jsonb)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  insertados integer;
begin
  with crudos as (
    select
      nullif(i->>'place_id', '')    as place_id,
      nullif(i->>'nombre', '')      as nombre,
      nullif(i->>'categoria', '')   as categoria,
      nullif(i->>'nicho', '')       as nicho,
      nullif(i->>'ciudad', '')      as ciudad,
      upper(nullif(i->>'pais', '')) as cod_pais,
      nullif(i->>'direccion', '')   as direccion,
      regexp_replace(coalesce(i->>'telefono', ''), '[^0-9+]', '', 'g') as tel,
      nullif(i->>'sitio_web', '')   as sitio_web,
      nullif(i->>'url_maps', '')    as url_maps,
      nullif(i->>'valoracion', '')::numeric(2,1) as valoracion,
      nullif(i->>'num_resenas', '')::integer     as num_resenas,
      lower(nullif(trim(i->>'email'), ''))       as email
    from jsonb_array_elements(items) i
  ),
  clasificados as (
    select c.*,
      case
        when c.tel = '' then null
        -- Móviles reconocibles por prefijo: CO 3, PE 9, CL 9, EC 9, PA 6, CR 5-8
        when c.tel ~ '^\+(573|519|569|5939|5076|506[5-8])' then 'movil'
        when c.tel ~ '^\+(57|51|56|593|507|506)' then 'fijo'
        -- MX, EE. UU. y RD no distinguen móvil de fijo por el número
        else 'sin_confirmar'
      end as tipo_telefono
    from crudos c
  ),
  ins as (
    insert into public.agencias_prospectos
      (place_id, nombre_agencia, categoria, nicho, ciudad, pais, direccion, telefono, tipo_telefono,
       sitio_web, url_maps, valoracion, num_resenas, email)
    select distinct on (place_id)
      place_id, nombre, categoria, nicho, ciudad,
      case cod_pais
        when 'MX' then 'México' when 'US' then 'Estados Unidos' when 'CO' then 'Colombia'
        when 'PA' then 'Panamá' when 'CR' then 'Costa Rica' when 'DO' then 'República Dominicana'
        when 'PE' then 'Perú' when 'CL' then 'Chile' when 'EC' then 'Ecuador'
        else cod_pais end,
      direccion, nullif(tel, ''), tipo_telefono, sitio_web, url_maps, valoracion, num_resenas, email
    from clasificados
    where place_id is not null and nombre is not null
      and (email is not null or tipo_telefono in ('movil', 'sin_confirmar'))
    on conflict (place_id) do nothing
    returning 1
  )
  select count(*) into insertados from ins;
  return insertados;
end;
$$;

-- Solo la clave service_role (la de Make) puede llamarla.
revoke all on function public.importar_prospectos(jsonb) from public, anon, authenticated;
grant execute on function public.importar_prospectos(jsonb) to service_role;

-- 2) SIN IA: no se usa ningún modelo, así que se quita la columna de auditoría de IA.
alter table public.agencias_prospectos drop column if exists auditoria_ai;
