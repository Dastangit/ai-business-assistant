import { test } from 'node:test';
import assert from 'node:assert/strict';
import { htmlAMarkdown, tokensAproximados } from '../lib/markdown.js';

const pagina = `<!DOCTYPE html><html lang="es"><head><title>Posicionamiento AEO | DASTAN X-TECH</title><script>var x = 1;</script></head><body>
<header class="site-header site-header--light"><nav><a href="/">Inicio</a><a href="/blog">Blog</a></nav></header>
<header class="servicio-hero"><h1>Que la IA te <span class="accent-light">recomiende</span>, no solo Google.</h1>
<p>Preparamos tu negocio para ser <strong>esa respuesta</strong>.</p><button type="button" class="btn btn-suave">Consultar</button></header>
<section><h2>Preguntas frecuentes</h2><ul><li>Uno</li><li>Dos</li></ul><a href="/blog/que-es-aeo" class="text-link">Ver ejemplo</a></section>
<footer class="site-footer site-footer--light"><p>© 2026 DASTAN X-TECH</p></footer>
<div class="chat-widget chat-widget--claro"><p>Hola, ¿en qué te ayudo?</p></div>
</body></html>`;

test('convierte el contenido y deja fuera menú, pie, chat, scripts y botones', () => {
  const md = htmlAMarkdown(pagina);
  assert.match(md, /^# Que la IA te recomiende, no solo Google\./);
  assert.match(md, /\*\*esa respuesta\*\*/);
  assert.match(md, /## Preguntas frecuentes/);
  assert.match(md, /- Uno\n- Dos/);
  assert.match(md, /\[Ver ejemplo\]\(\/blog\/que-es-aeo\)/);
  for (const fuera of ['Inicio', '© 2026', 'Hola, ¿en qué te ayudo?', 'var x', 'Consultar']) {
    assert.ok(!md.includes(fuera), `no debería incluir «${fuera}»`);
  }
});

test('los enlaces internos salen con la dirección completa', () => {
  assert.match(htmlAMarkdown(pagina, 'https://dastanxtech.com'), /\[Ver ejemplo\]\(https:\/\/dastanxtech\.com\/blog\/que-es-aeo\)/);
});

test('el menú propio de la portada (<nav class="nav">) tampoco entra', () => {
  const md = htmlAMarkdown('<body><nav class="nav"><a href="/servicios">Servicios</a></nav><p class="eyebrow">Consultoría</p><h1>Hola</h1></body>');
  assert.equal(md, 'Consultoría\n\n# Hola\n');
});

test('sin H1, el título del documento hace de encabezado', () => {
  const md = htmlAMarkdown('<html><head><title>Blog &amp; notas</title></head><body><p>Texto.</p></body></html>');
  assert.equal(md, '# Blog & notas\n\nTexto.\n');
});

test('tokensAproximados: unos 4 caracteres por token', () => {
  assert.equal(tokensAproximados('a'.repeat(400)), 100);
});
