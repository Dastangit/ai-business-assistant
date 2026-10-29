-- ============================================================
-- DASTAN X-TECH · Prospectos desde Google Maps (Apify + Make)
-- Pegar entero en Supabase → SQL Editor → Run.
-- Se puede ejecutar más de una vez sin romper nada.
-- ============================================================

-- 1) COLUMNAS NUEVAS: lo que trae el scraper de Google Maps además de nombre, web y teléfono.
--    place_id es el identificador único del negocio en Google Maps: sirve para no duplicarlo.
alter table public.agencias_prospectos
  add column if not exists place_id    text,
  add column if not exists categoria   text,
  add column if not exists ciudad      text,
  add column if not exists pais        text,
  add column if not exists direccion   text,
  add column if not exists url_maps    text,
  add column if not exists valoracion  numeric(2,1),
  add column if not exists num_resenas integer,
  -- Contacto sin llamadas: correo (sacado de su web) y si el teléfono parece móvil (WhatsApp)
  add column if not exists email         text,
  add column if not exists tipo_telefono text;  -- 'movil', 'fijo' o 'sin_confirmar'

-- 2) SIN DUPLICADOS: un mismo place_id solo puede estar una vez.
--    Make usa esta restricción para "crear o actualizar" (upsert) en vez de insertar repetidos.
--    Las filas antiguas sin place_id no se ven afectadas (los NULL no chocan entre sí).
do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'agencias_prospectos_place_id_key'
      and conrelid = 'public.agencias_prospectos'::regclass
  ) then
    alter table public.agencias_prospectos
      add constraint agencias_prospectos_place_id_key unique (place_id);
  end if;
end $$;

-- 3) VALOR POR DEFECTO: un prospecto nuevo entra como "sin_auditar".
alter table public.agencias_prospectos alter column estado_calificacion set default 'sin_auditar';

-- 4) COMPROBACIÓN: deben salir las 10 columnas nuevas y la restricción única.
select column_name, data_type
from information_schema.columns
where table_schema = 'public' and table_name = 'agencias_prospectos'
order by ordinal_position;

select conname as restriccion
from pg_constraint
where conrelid = 'public.agencias_prospectos'::regclass and contype = 'u';
