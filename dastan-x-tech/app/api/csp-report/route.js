import { NextResponse } from 'next/server';

// Recibe los avisos de la CSP en modo Report-Only (SEO-006) y los deja en los logs de Vercel.
// No bloquea nada: sirve para ver qué rompería la política antes de activarla de verdad.
// Es pública, así que solo registra tres campos recortados.
export async function POST(request) {
  const body = await request.json().catch(() => null);
  const informes = Array.isArray(body) ? body.map((r) => r?.body) : [body?.['csp-report']];
  for (const r of informes.filter(Boolean).slice(0, 10)) {
    const campo = (...claves) => String(claves.map((k) => r[k]).find(Boolean) ?? '').slice(0, 200);
    console.warn('CSP', JSON.stringify({
      directiva: campo('effectiveDirective', 'effective-directive', 'violated-directive'),
      bloqueado: campo('blockedURL', 'blocked-uri'),
      pagina: campo('documentURL', 'document-uri'),
    }));
  }
  return new NextResponse(null, { status: 204 });
}
