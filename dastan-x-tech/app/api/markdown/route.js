import { htmlAMarkdown, tokensAproximados } from '@/lib/markdown';

// Versión en Markdown de cualquier página de la web, para los agentes de IA (Markdown bajo
// demanda). proxy.js desvía aquí las peticiones con «Accept: text/markdown»; esta ruta pide la
// misma página en HTML a la propia web y la convierte.
export async function GET(request) {
  const ruta = request.headers.get('x-ruta-markdown') ?? '/';
  // Solo rutas de esta web: nada de «//otro-dominio» ni URLs completas
  if (!ruta.startsWith('/') || ruta.startsWith('//')) {
    return new Response('Ruta no válida\n', { status: 400, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  }

  const origen = request.nextUrl.origin;
  const pagina = await fetch(new URL(ruta, origen), { headers: { Accept: 'text/html' } });
  const html = await pagina.text();
  const markdown = htmlAMarkdown(html, origen);

  return new Response(markdown, {
    status: pagina.status,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      Vary: 'Accept',
      'x-markdown-tokens': String(tokensAproximados(markdown)),
      'x-original-tokens': String(tokensAproximados(html)),
      // Las mismas preferencias que declara robots.txt (app/robots.js)
      'Content-Signal': 'search=yes, ai-input=yes, ai-train=yes',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
