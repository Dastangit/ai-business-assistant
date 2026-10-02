// Uso: node scripts/verificar-idiomas.mjs [base]. Verifica los dos idiomas de punta a punta.
import { RUTAS, NO_INDEXABLES } from '../lib/i18n.js';

const base = process.argv[2] || 'http://localhost:3107';
let fallos = 0;
const mal = (m) => { fallos++; console.log('✗ ' + m); };

// Palabras que delatan español en una página en inglés (nombres propios permitidos aparte)
const PERMITIDOS = ['Isdiel Martínez', 'Puebla', 'Medellín', 'Español', 'español', 'Ver en español', 'Esta página también está en español', 'Página no encontrada'];
const ESPANOL = /[¿¡ñ]|\b(para|nuestro|nuestra|negocio|tu web|gratis|también|más|cómo|qué|página)\b/i;

const textoVisible = (html) => html
  .replace(/<script(?![^>]*ld\+json)[\s\S]*?<\/script>/g, ' ')
  .replace(/<style[\s\S]*?<\/style>/g, ' ')
  .replace(/<[^>]+>/g, ' ');

for (const [clave, r] of Object.entries(RUTAS)) {
  for (const lang of ['es', 'en']) {
    const url = r[lang];
    const res = await fetch(base + url);
    if (res.status !== 200) { mal(`${url} → ${res.status}`); continue; }
    const html = await res.text();
    if (!html.includes(`<html lang="${lang}"`)) mal(`${url} sin <html lang="${lang}">`);
    if (!NO_INDEXABLES.includes(clave)) {
      if (!html.includes(`rel="canonical" href="https://dastanxtech.com${url === '/' ? '' : url}"`)) mal(`${url} canonical`);
      // Busca cada <link rel="alternate">, sin depender del orden de los atributos
      const alternos = html.match(/<link[^>]*rel="alternate"[^>]*>/gi) || [];
      for (const [hl, destino] of [['es', r.es], ['en', r.en], ['x-default', r.es]]) {
        const href = `https://dastanxtech.com${destino === '/' ? '' : destino}`;
        if (!alternos.some((l) => l.toLowerCase().includes(`hreflang="${hl}"`) && l.includes(`href="${href}"`))) mal(`${url} sin hreflang ${hl}`);
      }
    }
    const otra = lang === 'es' ? r.en : r.es;
    if (!html.includes(`href="${otra}"`) || !html.includes('data-cambio-idioma')) mal(`${url} sin selector hacia ${otra}`);
    if (lang === 'en') {
      let texto = textoVisible(html);
      for (const p of PERMITIDOS) texto = texto.split(p).join(' ');
      const m = texto.match(ESPANOL);
      if (m) mal(`${url} posible español: «…${texto.slice(Math.max(0, m.index - 40), m.index + 40).replace(/\s+/g, ' ')}…»`);
    }
  }
}

const sitemap = await (await fetch(base + '/sitemap.xml')).text();
for (const [clave, r] of Object.entries(RUTAS)) {
  if (NO_INDEXABLES.includes(clave)) continue;
  if (!sitemap.includes(`https://dastanxtech.com${r.en}`)) mal(`sitemap sin ${r.en}`);
}
const robots = await (await fetch(base + '/robots.txt')).text();
if (!robots.includes('Disallow: /en/vip')) mal('robots sin /en/vip');
const no = await fetch(base + '/en/no-existe');
if (no.status !== 404) mal(`/en/no-existe → ${no.status}`);

console.log(fallos ? `${fallos} fallos` : 'Todo correcto');
process.exit(fallos ? 1 : 0);
