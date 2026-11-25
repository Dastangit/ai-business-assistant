import { htmlAMarkdown } from './markdown.js';

// Servidor MCP (Model Context Protocol) de solo lectura para los agentes de IA. Lo sirve
// app/api/mcp/route.js en https://dastanxtech.com/mcp (transporte Streamable HTTP, sin estado y
// sin SSE: cada POST lleva un mensaje JSON-RPC y recibe la respuesta en JSON).
// Solo da información pública que ya está en la web: no guarda nada ni pide datos a nadie.

export const SERVIDOR = { name: 'dastan-x-tech', title: 'DASTAN X-TECH', version: '1.0.0' };
export const VERSIONES = ['2025-11-25', '2025-06-18', '2025-03-26', '2024-11-05'];

const INSTRUCCIONES =
  'DASTAN X-TECH is a remote digital consultancy for small businesses (web design, business audits, ' +
  'AEO / SEO for AI assistants). Use get_business_info for services, prices (USD) and contact details, ' +
  'and read_page to read any page of dastanxtech.com as Markdown. Everything is public; no account is needed.';

export const CONTACTO = {
  empresa: 'DASTAN X-TECH',
  web: 'https://dastanxtech.com',
  whatsapp: '+1 605-500-3653',
  whatsapp_url: 'https://wa.me/16055003653',
  email: 'dastanxtech.services@gmail.com',
  idiomas: ['es', 'en'],
  modalidad: '100 % remoto (Colombia, México, Estados Unidos y resto del mundo)',
  diagnostico_seo_gratis:
    'Para negocios con web: se explica en https://dastanxtech.com/auditoria-web-gratis, se pide desde el chat de la web y llega en PDF por WhatsApp.',
};

const HERRAMIENTAS = [
  {
    name: 'get_business_info',
    title: 'Servicios, precios y contacto',
    description:
      'Returns the full description of DASTAN X-TECH in Markdown (llms.txt): services with fixed prices in USD, ' +
      'add-ons, free SEO report, blog articles, English pages and contact. Mostly in Spanish, with an English section.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  {
    name: 'get_contact',
    title: 'Contacto',
    description: 'Returns how to contact DASTAN X-TECH (WhatsApp, email) and how to request the free SEO report, as JSON.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  {
    name: 'read_page',
    title: 'Leer una página de la web',
    description:
      'Returns a page of dastanxtech.com as clean Markdown. Pass the path, for example "/servicios/posicionamiento-aeo", ' +
      '"/en/services/aeo" or "/blog/que-es-aeo". The page list is in get_business_info.',
    inputSchema: {
      type: 'object',
      properties: { path: { type: 'string', description: 'Path on dastanxtech.com starting with "/".' } },
      required: ['path'],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
];

const RECURSOS = [
  {
    uri: 'https://dastanxtech.com/llms.txt',
    name: 'llms.txt',
    title: 'DASTAN X-TECH: servicios, precios y contacto',
    mimeType: 'text/markdown',
  },
];

// Rutas que read_page puede leer: solo páginas públicas de esta web
export function rutaPermitida(ruta) {
  if (typeof ruta !== 'string' || ruta.length > 200) return false;
  if (!ruta.startsWith('/') || ruta.startsWith('//') || ruta.includes('\\') || ruta.includes('..')) return false;
  return !/^\/(en\/)?(api|admin|vip|_next)(\/|$|\?)/.test(ruta);
}

const ok = (id, result) => ({ jsonrpc: '2.0', id, result });
const fallo = (id, code, message) => ({ jsonrpc: '2.0', id, error: { code, message } });
const texto = (t, isError = false) => ({ content: [{ type: 'text', text: t }], ...(isError ? { isError } : {}) });

// Atiende un mensaje JSON-RPC. Devuelve la respuesta, o null si era una notificación o una respuesta.
// pedir(url, init) es fetch; se inyecta para poder probarlo sin red.
export async function atenderMensaje(msg, { origen, pedir = fetch }) {
  if (!msg || typeof msg !== 'object' || msg.jsonrpc !== '2.0') return fallo(msg?.id ?? null, -32600, 'Invalid Request');
  const { id, method, params = {} } = msg;
  if (method === undefined) return null; // respuesta del cliente a algo que no pedimos
  if (id === undefined) return null; // notificación (notifications/initialized, cancelled…)

  switch (method) {
    case 'initialize': {
      const pedida = params.protocolVersion;
      return ok(id, {
        protocolVersion: VERSIONES.includes(pedida) ? pedida : VERSIONES[1],
        capabilities: { tools: { listChanged: false }, resources: { listChanged: false } },
        serverInfo: { ...SERVIDOR, websiteUrl: 'https://dastanxtech.com' },
        instructions: INSTRUCCIONES,
      });
    }
    case 'ping':
      return ok(id, {});
    case 'tools/list':
      return ok(id, { tools: HERRAMIENTAS });
    case 'resources/list':
      return ok(id, { resources: RECURSOS });
    case 'resources/templates/list':
      return ok(id, { resourceTemplates: [] });
    case 'resources/read': {
      if (params.uri !== RECURSOS[0].uri) return fallo(id, -32002, 'Resource not found');
      const llms = await leerLlms(origen, pedir);
      return ok(id, { contents: [{ uri: params.uri, mimeType: 'text/markdown', text: llms }] });
    }
    case 'tools/call':
      return ok(id, await llamarHerramienta(params.name, params.arguments ?? {}, { origen, pedir }));
    default:
      return fallo(id, -32601, `Method not found: ${method}`);
  }
}

async function llamarHerramienta(nombre, args, { origen, pedir }) {
  if (nombre === 'get_business_info') return texto(await leerLlms(origen, pedir));
  if (nombre === 'get_contact') return texto(JSON.stringify(CONTACTO, null, 2));
  if (nombre === 'read_page') {
    if (!rutaPermitida(args.path)) return texto('Invalid path: use a public path of dastanxtech.com that starts with "/".', true);
    const pagina = await pedir(new URL(args.path, origen), { headers: { Accept: 'text/html' } });
    if (!pagina.ok) return texto(`Page not found (${pagina.status}): ${args.path}`, true);
    return texto(htmlAMarkdown(await pagina.text(), origen));
  }
  return texto(`Unknown tool: ${nombre}`, true);
}

async function leerLlms(origen, pedir) {
  const r = await pedir(new URL('/llms.txt', origen));
  return r.text();
}
