-- ============================================================
-- DASTAN X-TECH · Seguridad del panel y tabla de leads de la web
-- Pegar entero en Supabase → SQL Editor → Run.
-- Se puede ejecutar más de una vez sin romper nada.
-- ============================================================

-- 1) PROSPECTOS: cerrar el acceso desde el navegador.
--    Activa RLS, borra cualquier política que permitiera leer/borrar con la clave pública
--    y retira los permisos de los roles públicos. La clave secreta (la que usan el
--    servidor de la web y Make) se salta RLS, así que sigue funcionando.
alter table public.agencias_prospectos enable row level security;

do $$
declare p record;
begin
  for p in
    select policyname from pg_policies
    where schemaname = 'public' and tablename = 'agencias_prospectos'
  loop
    execute format('drop policy %I on public.agencias_prospectos', p.policyname);
  end loop;
end $$;

revoke all on public.agencias_prospectos from anon, authenticated;

-- 2) LEADS DE LA WEB: lo que la gente deja en el chat ("Diagnóstico gratis").
create table if not exists public.leads_web (
  id           bigint generated always as identity primary key,
  fecha        timestamptz not null default now(),
  nombre       text not null,
  web          text,
  whatsapp     text not null,
  origen       text,
  conversacion text,
  estado       text not null default 'nuevo'
);

alter table public.leads_web enable row level security;
revoke all on public.leads_web from anon, authenticated;

-- 3) COMPROBACIÓN: las dos filas deben decir rls_activo = true y politicas = 0.
select c.relname as tabla,
       c.relrowsecurity as rls_activo,
       (select count(*) from pg_policies p where p.tablename = c.relname) as politicas
from pg_class c
where c.relname in ('agencias_prospectos', 'leads_web');
