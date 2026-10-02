import { test } from 'node:test';
import assert from 'node:assert/strict';
import { interesDe } from '../lib/leads.js';

test('interesDe resume el interés y conserva la marca de idioma EN', () => {
  assert.equal(interesDe('/ · diagnóstico SEO'), 'Diagnóstico SEO');
  assert.equal(interesDe('/servicios · quiere web nueva'), 'Quiere web nueva');
  assert.equal(interesDe('/en · diagnóstico SEO · EN'), 'Diagnóstico SEO · EN');
  assert.equal(interesDe('/en/services · quiere web nueva · EN'), 'Quiere web nueva · EN');
  assert.equal(interesDe(''), '—');
  assert.equal(interesDe('otro origen'), 'otro origen');
});
