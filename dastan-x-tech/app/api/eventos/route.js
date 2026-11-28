import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

// Recibe los clics en WhatsApp y en el correo (components/MedirContactos.jsx) y los guarda en eventos_web.
// Los leads del chat no pasan por aquí: los registra /api/leads al guardarlos, para contar solo los válidos.
// Es pública, así que solo acepta los tipos conocidos y recorta la página.
const TIPOS = ['click_whatsapp', 'click_email'];

export async function POST(request) {
  const body = await request.json().catch(() => null);
  const tipo = body?.tipo;
  const pagina = typeof body?.pagina === 'string' ? body.pagina.trim().slice(0, 200) : '';
  if (!TIPOS.includes(tipo) || !pagina.startsWith('/')) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const idioma = pagina === '/en' || pagina.startsWith('/en/') ? 'en' : 'es';

  const { error } = await getSupabaseAdmin().from('eventos_web').insert({ tipo, pagina, idioma });
  if (error) {
    console.error('Error al guardar el evento:', error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
