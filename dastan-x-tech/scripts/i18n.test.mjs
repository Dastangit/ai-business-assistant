import { test } from 'node:test';
import assert from 'node:assert/strict';
import { RUTAS, ruta, idiomaDeRuta, claveDeRuta, rutaEquivalente, alternates } from '../lib/i18n.js';
import { rellenar } from '../lib/rellenar.js';

test('cada clave tiene ruta en los dos idiomas y el inglés vive en /en', () => {
  for (const [clave, r] of Object.entries(RUTAS)) {
    assert.ok(r.es.startsWith('/'), clave);
    assert.ok(r.en === '/en' || r.en.startsWith('/en/'), clave);
  }
  assert.equal(Object.keys(RUTAS).length, 13);
});

test('idiomaDeRuta', () => {
  assert.equal(idiomaDeRuta('/'), 'es');
  assert.equal(idiomaDeRuta('/servicios'), 'es');
  assert.equal(idiomaDeRuta('/en'), 'en');
  assert.equal(idiomaDeRuta('/en/services/aeo'), 'en');
  assert.equal(idiomaDeRuta('/enlaces'), 'es'); // no confundir prefijos
});

test('claveDeRuta normaliza barra final, query y ancla', () => {
  assert.equal(claveDeRuta('/servicios/diseno-web'), 'disenoWeb');
  assert.equal(claveDeRuta('/en/services/web-design/'), 'disenoWeb');
  assert.equal(claveDeRuta('/servicios/diseno-web#caso-real'), 'disenoWeb');
  assert.equal(claveDeRuta('/?utm_source=x'), 'inicio');
  assert.equal(claveDeRuta('/admin'), null);
});

test('rutaEquivalente lleva a la pareja y, si no hay, a la portada del otro idioma', () => {
  assert.equal(rutaEquivalente('/servicios/auditoria-negocio'), '/en/services/digital-business-audit');
  assert.equal(rutaEquivalente('/en/blog/what-is-aeo'), '/blog/que-es-aeo');
  assert.equal(rutaEquivalente('/servicios/diseno-web#caso-real'), '/en/services/web-design#caso-real');
  assert.equal(rutaEquivalente('/no-existe'), '/en');
  assert.equal(rutaEquivalente('/en/no-existe'), '/');
});

test('alternates da canonical propio y hreflang es/en/x-default', () => {
  assert.deepEqual(alternates('aeo', 'en'), {
    canonical: '/en/services/aeo',
    languages: { es: '/servicios/posicionamiento-aeo', en: '/en/services/aeo', 'x-default': '/servicios/posicionamiento-aeo' },
  });
  assert.equal(ruta('inicio', 'en'), '/en');
});

test('rellenar sustituye marcadores y deja intactos los desconocidos', () => {
  assert.equal(rellenar('Ahorras ${monto}', { monto: 50 }), 'Ahorras $50');
  assert.equal(rellenar('{a} y {b}', { a: 'x' }), 'x y {b}');
});
