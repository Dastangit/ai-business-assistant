// Uso: node scripts/instantanea-rutas.mjs guardar|comparar [base]
// Guarda (o compara con lo guardado) título, h1, canonical, lang y estado HTTP de las URLs en español.
import { readFileSync, writeFileSync } from 'node:fs';
import { RUTAS } from '../lib/i18n.js';

const [modo, base = 'http://localhost:3107'] = process.argv.slice(2);
const archivo = 'scripts/.instantanea-es.json';
const extra = ['/admin', '/servicios/auditoria-360'];
const urls = [...Object.values(RUTAS).map((r) => r.es), ...extra];

const sacar = (html, re) => (html.match(re)?.[1] ?? '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const datos = {};
for (const u of urls) {
  const res = await fetch(base + u, { redirect: 'manual' });
  const html = res.status === 200 ? await res.text() : '';
  datos[u] = {
    estado: res.status,
    destino: res.headers.get('location') || '',
    titulo: sacar(html, /<title>([\s\S]*?)<\/title>/),
    h1: sacar(html, /<h1[^>]*>([\s\S]*?)<\/h1>/),
    canonical: sacar(html, /<link rel="canonical" href="([^"]+)"/),
    lang: sacar(html, /<html[^>]*lang="([^"]+)"/),
  };
}
if (modo === 'guardar') {
  writeFileSync(archivo, JSON.stringify(datos, null, 2));
  console.log(`Guardadas ${urls.length} URLs`);
} else {
  const antes = JSON.parse(readFileSync(archivo, 'utf8'));
  let fallos = 0;
  for (const u of urls) {
    for (const k of Object.keys(antes[u])) {
      if (antes[u][k] !== datos[u][k]) { fallos++; console.log(`✗ ${u} ${k}: «${antes[u][k]}» → «${datos[u][k]}»`); }
    }
  }
  console.log(fallos ? `${fallos} diferencias` : 'Sin diferencias');
  process.exit(fallos ? 1 : 0);
}
