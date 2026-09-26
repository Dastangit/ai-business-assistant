import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

// Recibe los datos del formulario del chat ("Diagnóstico gratis") y los guarda en leads_web.
// Es pública a propósito, así que valida y recorta todo lo que entra.
const recortar = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export async function POST(request) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ ok: false }, { status: 400 });

  // Campo trampa: los humanos no lo ven; si viene relleno, es un bot. Respondemos ok sin guardar.
  if (recortar(body.empresa_web, 200)) return NextResponse.json({ ok: true });

  const nombre = recortar(body.nombre, 120);
  const web = recortar(body.web, 300);
  const whatsapp = recortar(body.whatsapp, 40);
  const soloDigitos = whatsapp.replace(/[^0-9]/g, '');

  if (!nombre || soloDigitos.length < 7) {
    return NextResponse.json({ ok: false, error: 'Faltan el nombre o un WhatsApp válido' }, { status: 400 });
  }

  const conversacion = Array.isArray(body.conversacion)
    ? body.conversacion
        .slice(-12)
        .map((m) => `${m?.role === 'user' ? 'Cliente' : 'Asistente'}: ${recortar(m?.text, 600)}`)
        .join('\n')
    : '';

  try {
    const { error } = await getSupabaseAdmin().from('leads_web').insert({
      nombre,
      web: web || null,
      whatsapp,
      origen: recortar(body.origen, 120) || null,
      conversacion: conversacion || null,
    });
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error al guardar el lead:', error);
    return NextResponse.json({ ok: false, error: 'No se pudo guardar' }, { status: 500 });
  }
}
