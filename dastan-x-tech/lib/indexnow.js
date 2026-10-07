// IndexNow: avisa a Bing (y a los demás buscadores que lo usan) de las páginas que cambian, sin esperar
// a que vuelvan a leer el sitemap. Google no lo usa. La clave es pública a propósito: los buscadores
// comprueban que es nuestra leyendo public/<clave>.txt. Si la cambias, renombra también ese archivo.
export const INDEXNOW_KEY = '602e583be173a80a1d7e2ed9ee81dce7';
export const HOST = 'dastanxtech.com';
export const ENDPOINT = 'https://api.indexnow.org/indexnow';

// URLs del sitemap revisadas en los últimos `dias` (su lastmod sale de lib/revisiones.js):
// así solo se avisa de lo que cambió de verdad, no de toda la web en cada publicación.
export function urlsRecientes(sitemapXml, ahora = new Date(), dias = 2) {
  const limite = ahora.getTime() - dias * 24 * 60 * 60 * 1000;
  const bloques = sitemapXml.match(/<url>[\s\S]*?<\/url>/g) || [];
  return bloques
    .map((b) => ({ url: b.match(/<loc>([^<]+)<\/loc>/)?.[1], fecha: b.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] }))
    .filter(({ url, fecha }) => url && fecha && new Date(fecha).getTime() >= limite)
    .map(({ url }) => url);
}

export function cuerpoIndexNow(urlList) {
  return {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlList,
  };
}
