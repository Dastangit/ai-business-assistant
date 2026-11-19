import { atenderMensaje } from '@/lib/mcp';

// Servidor MCP público y de solo lectura (lib/mcp.js), servido en /mcp por un rewrite de
// next.config.mjs. Transporte Streamable HTTP sin sesión: el cliente manda JSON-RPC por POST y
// recibe JSON. No abrimos flujo SSE (GET responde 405, como permite la especificación).
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept, Mcp-Protocol-Version, Mcp-Session-Id',
};

const json = (cuerpo, status = 200) =>
  new Response(JSON.stringify(cuerpo), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...CORS },
  });

export async function POST(request) {
  const cuerpo = await request.json().catch(() => undefined);
  if (cuerpo === undefined) return json({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } }, 400);

  const origen = request.nextUrl.origin;
  const lote = Array.isArray(cuerpo);
  const mensajes = (lote ? cuerpo : [cuerpo]).slice(0, 20);
  const respuestas = (await Promise.all(mensajes.map((m) => atenderMensaje(m, { origen })))).filter(Boolean);

  // Solo notificaciones o respuestas: se aceptan sin cuerpo
  if (respuestas.length === 0) return new Response(null, { status: 202, headers: CORS });
  return json(lote ? respuestas : respuestas[0]);
}

export function GET() {
  return new Response('This MCP server uses Streamable HTTP without SSE: send JSON-RPC messages with POST.\n', {
    status: 405,
    headers: { Allow: 'POST, OPTIONS', 'Content-Type': 'text/plain; charset=utf-8', ...CORS },
  });
}

export function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS });
}
