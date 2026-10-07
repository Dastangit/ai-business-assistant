// Uso: node scripts/indexnow.mjs [url ...]
// Sin URLs, avisa de las páginas del sitemap en vivo revisadas en los últimos 2 días.
// Lo lanza solo .github/workflows/indexnow.yml cuando Vercel termina de publicar en producción.
import { ENDPOINT, HOST, cuerpoIndexNow, urlsRecientes } from '../lib/indexnow.js';

let urls = process.argv.slice(2);
if (urls.length === 0) {
  const sitemap = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  urls = urlsRecientes(sitemap);
}
if (urls.length === 0) {
  console.log('IndexNow: ninguna página revisada en los últimos 2 días, nada que avisar.');
  process.exit(0);
}

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(cuerpoIndexNow(urls)),
});
// 200 = recibido; 202 = recibido, la clave se validará después
console.log(`IndexNow ${res.status}: ${urls.length} URL(s)\n${urls.join('\n')}`);
if (res.status !== 200 && res.status !== 202) {
  console.log(await res.text());
  process.exit(1);
}
