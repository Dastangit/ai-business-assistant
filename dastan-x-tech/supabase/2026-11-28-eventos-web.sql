-- ============================================================
-- DASTAN X-TECH · Conversiones de la web (incidencia SEO-001, 28-nov-2026)
-- Una fila por clic en WhatsApp, clic en correo o lead del chat, con la página
-- donde ocurrió. La escribe solo el servidor (/api/eventos y /api/leads) con la
-- clave secreta, así que RLS queda activo y sin políticas.
-- Se puede ejecutar más de una vez sin romper nada.
-- ============================================================
create table if not exists public.eventos_web (
  id      bigint generated always as identity primary key,
  fecha   timestamptz not null default now(),
  tipo    text not null check (tipo in ('click_whatsapp', 'click_email', 'generate_lead')),
  pagina  text not null,
  idioma  text check (idioma in ('es', 'en'))
);

create index if not exists eventos_web_fecha_idx on public.eventos_web (fecha desc);

alter table public.eventos_web enable row level security;
revoke all on public.eventos_web from anon, authenticated;

-- Resumen por página (para consultarlo en el SQL Editor):
-- select pagina, tipo, count(*) from public.eventos_web
-- where fecha > now() - interval '30 days' group by 1, 2 order by 3 desc;
