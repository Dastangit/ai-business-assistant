import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { INDEXNOW_KEY, cuerpoIndexNow, urlsRecientes } from '../lib/indexnow.js';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset>
<url><loc>https://dastanxtech.com</loc><lastmod>2026-10-06T00:00:00.000Z</lastmod></url>
<url><loc>https://dastanxtech.com/blog/que-es-aeo</loc><lastmod>2026-09-30T00:00:00.000Z</lastmod></url>
<url><loc>https://dastanxtech.com/blog/cuanto-cuesta-renovar-web</loc><lastmod>2026-10-06T00:00:00.000Z</lastmod></url>
<url><loc>https://dastanxtech.com/sin-fecha</loc></url>
</urlset>`;

test('solo avisa de las páginas revisadas en los últimos 2 días', () => {
  // Publicado por la tarde en México: en UTC ya es el día siguiente
  const ahora = new Date('2026-10-07T00:20:00Z');
  assert.deepEqual(urlsRecientes(sitemap, ahora), ['https://dastanxtech.com', 'https://dastanxtech.com/blog/cuanto-cuesta-renovar-web']);
});

test('sin cambios recientes no avisa de nada', () => {
  assert.deepEqual(urlsRecientes(sitemap, new Date('2026-10-20T00:00:00Z')), []);
});

test('la clave coincide con el archivo público que comprueban los buscadores', () => {
  const archivo = readFileSync(new URL(`../public/${INDEXNOW_KEY}.txt`, import.meta.url), 'utf8').trim();
  assert.equal(archivo, INDEXNOW_KEY);
  assert.equal(cuerpoIndexNow(['https://dastanxtech.com']).keyLocation, `https://dastanxtech.com/${INDEXNOW_KEY}.txt`);
});
