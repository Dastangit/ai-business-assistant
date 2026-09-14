import crypto from 'crypto';

const COOKIE_NAME = 'dastan_admin_session';
const SESSION_TTL_MS = 12 * 60 * 60 * 1000; // 12 horas

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error('ADMIN_SESSION_SECRET no está configurado en .env.local');
  }
  return secret;
}

function sign(payload) {
  return crypto.createHmac('sha256', getSecret()).update(payload).digest('hex');
}

/** Crea el valor de la cookie de sesión: "expiry.signature" */
export function createSessionToken() {
  const expiry = Date.now() + SESSION_TTL_MS;
  const payload = String(expiry);
  const signature = sign(payload);
  return `${payload}.${signature}`;
}

/** Verifica el token de la cookie. Devuelve true/false. */
export function isValidSessionToken(token) {
  if (!token || typeof token !== 'string' || !token.includes('.')) return false;

  const [payload, signature] = token.split('.');
  if (!payload || !signature) return false;

  const expected = sign(payload);
  const sigBuffer = Buffer.from(signature, 'hex');
  const expectedBuffer = Buffer.from(expected, 'hex');

  if (sigBuffer.length !== expectedBuffer.length) return false;
  if (!crypto.timingSafeEqual(sigBuffer, expectedBuffer)) return false;

  const expiry = Number(payload);
  if (!Number.isFinite(expiry) || Date.now() > expiry) return false;

  return true;
}

/** Compara la contraseña ingresada contra ADMIN_PASSWORD de forma segura (timing-safe). */
export function isValidPassword(candidate) {
  const real = process.env.ADMIN_PASSWORD;
  if (!real || typeof candidate !== 'string') return false;

  const candidateBuffer = Buffer.from(candidate);
  const realBuffer = Buffer.from(real);

  // Igualar longitudes evita filtrar el largo de la contraseña real por timing.
  if (candidateBuffer.length !== realBuffer.length) {
    crypto.timingSafeEqual(candidateBuffer, candidateBuffer);
    return false;
  }

  return crypto.timingSafeEqual(candidateBuffer, realBuffer);
}

export const ADMIN_COOKIE_NAME = COOKIE_NAME;
export const ADMIN_SESSION_TTL_MS = SESSION_TTL_MS;
