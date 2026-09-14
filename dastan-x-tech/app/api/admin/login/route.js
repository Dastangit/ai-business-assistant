import { NextResponse } from 'next/server';
import { createSessionToken, isValidPassword, ADMIN_COOKIE_NAME, ADMIN_SESSION_TTL_MS } from '@/lib/adminSession';

export async function POST(request) {
  const body = await request.json().catch(() => null);
  const password = body?.password;

  if (!isValidPassword(password)) {
    // Respuesta genérica: no revela si el usuario/campo existe.
    return NextResponse.json({ ok: false, message: 'Acceso denegado' }, { status: 401 });
  }

  const token = createSessionToken();
  const response = NextResponse.json({ ok: true });

  response.cookies.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: ADMIN_SESSION_TTL_MS / 1000,
  });

  return response;
}
