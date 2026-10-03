import TurndownService from 'turndown';

// Versión en Markdown de una página, para los agentes de IA que la piden con
// «Accept: text/markdown» (la sirve app/api/markdown/route.js, a la que desvía proxy.js).
// Solo el contenido: fuera el menú, el pie, el chat, los scripts y los botones.
const FUERA = ['site-header', 'site-footer', 'chat-widget', 'chat-toggle-btn', 'aviso-idioma'];

const conversor = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-', codeBlockStyle: 'fenced' });
// En esta web los <nav> son siempre menús (la portada tiene el suyo propio, sin site-header)
conversor.remove(['script', 'style', 'noscript', 'svg', 'button', 'form', 'iframe', 'template', 'nav']);
conversor.remove((nodo) => {
  const clases = String(nodo.getAttribute?.('class') ?? '');
  return FUERA.some((c) => clases.split(/\s+/).includes(c));
});

// base: origen de la web, para que los enlaces internos salgan completos («/blog» → «https://…/blog»)
export function htmlAMarkdown(html, base = '') {
  const titulo = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim();
  const cuerpo = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? html;
  const texto = conversor
    .turndown(cuerpo)
    .replace(/^(\s*)-\s{2,}/gm, '$1- ')
    .replace(/\]\(\//g, `](${base}/`)
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  // Si la página no tiene H1, el título del documento hace de encabezado
  return (titulo && !/^# /m.test(texto) ? `# ${desescapar(titulo)}\n\n` : '') + texto + '\n';
}

// Estimación de tokens que usan los agentes para decidir si les cabe la página (≈ 4 caracteres por token)
export const tokensAproximados = (texto) => Math.ceil(texto.length / 4);

function desescapar(texto) {
  return texto.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'");
}
