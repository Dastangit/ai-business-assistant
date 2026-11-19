import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { atenderMensaje, rutaPermitida, VERSIONES } from '../lib/mcp.js';
import { construirIndice } from './agent-skills.mjs';

const origen = 'https://dastanxtech.com';
const pedidas = [];
const pedir = async (url) => {
  pedidas.push(String(url));
  if (String(url).endsWith('/llms.txt')) return new Response('# DASTAN X-TECH\n');
  if (String(url).endsWith('/no-existe')) return new Response('no', { status: 404 });
  return new Response('<html><head><title>T</title></head><body><h1>Hola</h1><p>Texto</p></body></html>');
};
const llamar = (method, params, id = 1) => atenderMensaje({ jsonrpc: '2.0', id, method, params }, { origen, pedir });

test('initialize negocia la versión y declara herramientas y recursos', async () => {
  const r = await llamar('initialize', { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 't', version: '1' } });
  assert.equal(r.result.protocolVersion, '2025-06-18');
  assert.equal(r.result.serverInfo.name, 'dastan-x-tech');
  assert.ok(r.result.capabilities.tools && r.result.capabilities.resources);
  const vieja = await llamar('initialize', { protocolVersion: '1999-01-01' });
  assert.ok(VERSIONES.includes(vieja.result.protocolVersion));
});

test('las notificaciones no tienen respuesta', async () => {
  assert.equal(await atenderMensaje({ jsonrpc: '2.0', method: 'notifications/initialized' }, { origen, pedir }), null);
});

test('herramientas: lista, info, contacto y páginas', async () => {
  const lista = await llamar('tools/list');
  assert.deepEqual(lista.result.tools.map((t) => t.name), ['get_business_info', 'get_contact', 'read_page']);
  assert.match((await llamar('tools/call', { name: 'get_business_info' })).result.content[0].text, /DASTAN X-TECH/);
  assert.match((await llamar('tools/call', { name: 'get_contact' })).result.content[0].text, /wa\.me/);
  const pagina = await llamar('tools/call', { name: 'read_page', arguments: { path: '/servicios' } });
  assert.match(pagina.result.content[0].text, /^# Hola/);
  assert.equal(pedidas.at(-1), 'https://dastanxtech.com/servicios');
  assert.equal((await llamar('tools/call', { name: 'read_page', arguments: { path: '/no-existe' } })).result.isError, true);
});

test('read_page no sale de la web ni entra en zonas privadas', async () => {
  for (const ruta of ['https://otro.com', '//otro.com/x', '/admin', '/en/vip', '/api/leads', '/../etc', 'servicios', 42]) {
    assert.equal(rutaPermitida(ruta), false, String(ruta));
  }
  assert.equal(rutaPermitida('/blog/que-es-aeo'), true);
  const n = pedidas.length;
  const r = await llamar('tools/call', { name: 'read_page', arguments: { path: '//evil.com' } });
  assert.equal(r.result.isError, true);
  assert.equal(pedidas.length, n);
});

test('métodos desconocidos y mensajes inválidos', async () => {
  assert.equal((await llamar('prompts/list')).error.code, -32601);
  assert.equal((await atenderMensaje({ id: 1, method: 'ping' }, { origen, pedir })).error.code, -32600);
  assert.deepEqual((await llamar('ping')).result, {});
});

test('el índice de agent-skills publicado coincide con las skills (huellas sha256 al día)', () => {
  const publicado = JSON.parse(readFileSync(new URL('../public/.well-known/agent-skills/index.json', import.meta.url)));
  assert.deepEqual(publicado, construirIndice(), 'Ejecuta: node scripts/agent-skills.mjs');
});
