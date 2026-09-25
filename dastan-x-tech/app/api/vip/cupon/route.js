import { NextResponse } from 'next/server';

// Validación del cupón VIP en el servidor.
// Antes el código estaba escrito en el JavaScript de la página y cualquiera podía leerlo.
// Para cambiarlo sin tocar código, define VIP_COUPON en las variables de entorno
// (Vercel → Settings → Environment Variables). Si no existe, se usa el código de siempre.
function codigoValido() {
  return (process.env.VIP_COUPON || 'VIP2026').replace(/['"]/g, '').trim().toUpperCase();
}

export async function POST(req) {
  try {
    const { code } = await req.json();
    const applied = typeof code === 'string' && code.trim().toUpperCase() === codigoValido();
    return NextResponse.json({ applied });
  } catch {
    return NextResponse.json({ applied: false }, { status: 400 });
  }
}
