import { SERVIDOR } from '@/lib/mcp';

// Estado del servidor MCP, enlazado como «status» en /.well-known/api-catalog (RFC 9727)
export function GET() {
  return Response.json({ status: 'ok', server: SERVIDOR.name, version: SERVIDOR.version }, { headers: { 'Cache-Control': 'no-store' } });
}
