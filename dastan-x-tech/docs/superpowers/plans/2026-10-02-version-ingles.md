# Versión en inglés — Plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publicar dastanxtech.com también en inglés en `/en`, con direcciones en inglés, sin cambiar ninguna dirección en español.

**Architecture:**
- Dos layouts raíz con route groups: `app/(es)` con `<html lang="es">` y `app/(en)/en` con `<html lang="en">`.
- Una tabla única de rutas en `lib/i18n.js` alimenta el selector ES | EN, el aviso de idioma, el hreflang y el sitemap.
- Cada página tiene un componente de diseño compartido (`components/paginas/`) que recibe sus textos (`contenido/<pagina>.<lang>.js`). Los artículos del blog son la excepción: un archivo por idioma.

**Tech Stack:** Next.js 16.3.4 (App Router, route groups, `global-not-found` experimental), React 19, Node 24 (`node:test` para pruebas unitarias), Python Playwright para capturas. Sin dependencias nuevas.

**Spec:** `docs/superpowers/specs/2026-10-01-version-ingles-design.md` (aprobado el 2026-10-01).

## Global Constraints

- **Sin dependencias nuevas:** `package.json` solo gana el script `test`.
- **URLs en español intactas.** Las 11 públicas (más `/admin` y la redirección `/servicios/auditoria-360`) deben responder igual que antes del cambio.
- **Tabla de URLs en inglés, copiada del spec:**
  - `/en`
  - `/en/services`
  - `/en/services/web-design`
  - `/en/services/digital-business-audit`
  - `/en/services/aeo`
  - `/en/blog`
  - `/en/blog/we-audited-our-own-website`
  - `/en/blog/5-signs-your-website-is-losing-customers`
  - `/en/blog/what-is-aeo`
  - `/en/privacy`
  - `/en/vip`
- **Nombres en inglés** (del spec, literales):

  | Español | Inglés |
  |---|---|
  | Diagnóstico SEO gratis | Free SEO Report |
  | Diseño web | Web Design |
  | Auditoría Completa de Negocio | Digital Business Audit |
  | Posicionamiento AEO | AI Search Optimization (AEO) |
  | Pack completo | All-in-One Package |
  | Membresía de Implementación | Monthly Implementation Plan |
  | Arreglo exprés | 48-Hour Fix |
  | Pymes | Small businesses |

- **No se traduce:** DASTAN X-TECH, Lex, `+1 605-500-3653` / `wa.me/16055003653` ni los precios en USD.
- **Traducción:** inglés natural de EE. UU., mismos datos, precios y promesas. No se añade nada que no diga el español.
- **Archivos `contenido/*.js`:** solo datos (strings, arrays, objetos, elementos JSX). Nunca funciones, porque se pasan de Server a Client Components. Los textos con números usan marcadores `{nombre}` y el componente los rellena con `rellenar()`.
- **Archivos CRLF:** varios archivos del proyecto lo son. Para ediciones con script, conserva el final de línea; la herramienta Edit ya lo respeta.
- **Commits:** cada tarea termina en un commit en la rama `mejoras-auditoria-360`. No se publica en `main` hasta la tarea 14, con la revisión de Dastan.

## Review Focus

- **Enlace con ancla o query** (`/servicios/diseno-web#caso-real`, `/?utm=x`): el selector ES | EN y el aviso deben llevar a la página equivalente, sin 404. Lo prueba `rutaEquivalente` (tarea 1).
- **Barra final** (`/en/services/`): Next redirige a la versión sin barra, pero `claveDeRuta` debe resolverla igual. Tarea 1.
- **Navegador con `localStorage` bloqueado** (ventana privada de Safari): el aviso de idioma no debe romper la página. Si no puede recordar el cierre, vuelve a salir. Tarea 4.
- **Lead desde `/en`:** el `origen` debe acabar en ` · EN` y el aviso de Telegram debe salir igual. Tarea 12.
- **Persona que escribe en español en `/en`:** Lex responde en español. Persona que escribe en inglés en `/`: Lex responde en inglés (comportamiento actual). Tarea 12.

---

## Mapa de archivos

**Nuevos:**
- `lib/i18n.js`: tabla de rutas y funciones de idioma. Es lo único que conoce las URLs de los dos idiomas.
- `lib/rellenar.js`: `rellenar(texto, valores)` para los marcadores `{x}`.
- `scripts/i18n.test.mjs`: pruebas unitarias de `lib/i18n.js` y `lib/rellenar.js`.
- `scripts/instantanea-rutas.mjs`: guarda y compara el título, el h1, el canonical y el lang de las URLs en español (protección del paso 2).
- `scripts/verificar-idiomas.mjs`: verificación de extremo a extremo de los dos idiomas.
- `components/SelectorIdioma.jsx` y `components/AvisoIdioma.jsx`.
- `components/paginas/Inicio.jsx`, `Servicios.jsx`, `DisenoWeb.jsx`, `Auditoria.jsx`, `Aeo.jsx`, `Privacidad.jsx` y `Vip.jsx`.
- `contenido/inicio.{es,en}.js`, `servicios.{es,en}.js`, `diseno-web.{es,en}.js`, `auditoria.{es,en}.js`, `aeo.{es,en}.js`, `blog.{es,en}.js`, `privacidad.{es,en}.js` y `vip.{es,en}.js`.
- `app/(en)/layout.js`, `app/(en)/en/**`, `app/global-not-found.js` y `app/(en)/en/opengraph-image.jsx`.

**Movidos con `git mv`** (sin cambio de URL):
- `app/layout.js` → `app/(es)/layout.js`
- `app/page.js` → `app/(es)/page.js`
- `app/opengraph-image.jsx` → `app/(es)/opengraph-image.jsx`
- `app/{servicios,blog,privacidad,vip,admin}` → `app/(es)/…`

**Se quedan en `app/`:** `api/`, `globals.css`, `icon.png`, `apple-icon.png`, `robots.js` y `sitemap.js`.

**Modificados:**
- `components/SiteHeader.jsx`, `SiteFooter.jsx`, `Brand.jsx`, `ChatWidget.jsx` y `GlobalChatWidget.jsx`
- `app/api/chat/route.js`
- `app/globals.css`
- `app/robots.js` y `app/sitemap.js`
- `lib/revisiones.js`
- `public/llms.txt`
- `next.config.mjs`
- `package.json`

---

### Task 1: Tabla de rutas e idiomas (`lib/i18n.js`)

**Files:**
- Create: `lib/i18n.js`, `lib/rellenar.js`, `scripts/i18n.test.mjs`
- Modify: `package.json` (script `test`)

**Interfaces:**
- Produces:
  - `IDIOMAS: ['es','en']`
  - `RUTAS: Record<clave, {es: string, en: string}>`
  - `NO_INDEXABLES: string[]`
  - `ruta(clave: string, lang: 'es'|'en'): string`
  - `idiomaDeRuta(pathname: string): 'es'|'en'`
  - `claveDeRuta(pathname: string): string|null`
  - `rutaEquivalente(pathname: string): string`
  - `alternates(clave: string, lang: 'es'|'en'): {canonical: string, languages: {es, en, 'x-default'}}`
  - `rellenar(texto: string, valores: Record<string, string|number>): string`

- [ ] **Step 1: Escribir la prueba que falla**

`scripts/i18n.test.mjs`:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { RUTAS, ruta, idiomaDeRuta, claveDeRuta, rutaEquivalente, alternates } from '../lib/i18n.js';
import { rellenar } from '../lib/rellenar.js';

test('cada clave tiene ruta en los dos idiomas y el inglés vive en /en', () => {
  for (const [clave, r] of Object.entries(RUTAS)) {
    assert.ok(r.es.startsWith('/'), clave);
    assert.ok(r.en === '/en' || r.en.startsWith('/en/'), clave);
  }
  assert.equal(Object.keys(RUTAS).length, 11);
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
```

En `package.json`, añade a `scripts`: `"test": "node --test scripts/"`.

- [ ] **Step 2: Ejecutar y ver que falla**

Ejecuta: `npm test`
Esperado: FAIL con `Cannot find module '…/lib/i18n.js'`.

- [ ] **Step 3: Implementar**

`lib/i18n.js`:

```js
// Tabla única de rutas por idioma. De aquí salen el selector ES | EN, el aviso de idioma,
// las etiquetas hreflang y el sitemap. Para añadir una página: una clave nueva con sus dos rutas.
export const IDIOMAS = ['es', 'en'];

export const RUTAS = {
  inicio: { es: '/', en: '/en' },
  servicios: { es: '/servicios', en: '/en/services' },
  disenoWeb: { es: '/servicios/diseno-web', en: '/en/services/web-design' },
  auditoria: { es: '/servicios/auditoria-negocio', en: '/en/services/digital-business-audit' },
  aeo: { es: '/servicios/posicionamiento-aeo', en: '/en/services/aeo' },
  blog: { es: '/blog', en: '/en/blog' },
  blogAuditamos: { es: '/blog/auditamos-nuestra-propia-web', en: '/en/blog/we-audited-our-own-website' },
  blog5Senales: { es: '/blog/5-senales-web-cuesta-clientes', en: '/en/blog/5-signs-your-website-is-losing-customers' },
  blogAeo: { es: '/blog/que-es-aeo', en: '/en/blog/what-is-aeo' },
  privacidad: { es: '/privacidad', en: '/en/privacy' },
  vip: { es: '/vip', en: '/en/vip' },
};

// Fuera del sitemap y de los buscadores (propuestas privadas)
export const NO_INDEXABLES = ['vip'];

export const ruta = (clave, lang) => RUTAS[clave][lang];

const limpiar = (pathname) => {
  const sinExtras = String(pathname || '/').split(/[?#]/)[0];
  return sinExtras.length > 1 ? sinExtras.replace(/\/+$/, '') : sinExtras;
};

export function idiomaDeRuta(pathname) {
  const p = limpiar(pathname);
  return p === '/en' || p.startsWith('/en/') ? 'en' : 'es';
}

export function claveDeRuta(pathname) {
  const p = limpiar(pathname);
  for (const [clave, r] of Object.entries(RUTAS)) {
    if (r.es === p || r.en === p) return clave;
  }
  return null;
}

// La misma página en el otro idioma (conserva el ancla); si no tiene pareja, la portada del otro idioma
export function rutaEquivalente(pathname) {
  const lang = idiomaDeRuta(pathname);
  const otro = lang === 'es' ? 'en' : 'es';
  const clave = claveDeRuta(pathname);
  if (!clave) return ruta('inicio', otro);
  const ancla = String(pathname).includes('#') ? '#' + String(pathname).split('#')[1] : '';
  return ruta(clave, otro) + ancla;
}

// Para metadata.alternates: canonical propio + hreflang (x-default = español)
export function alternates(clave, lang) {
  return {
    canonical: ruta(clave, lang),
    languages: { es: ruta(clave, 'es'), en: ruta(clave, 'en'), 'x-default': ruta(clave, 'es') },
  };
}
```

`lib/rellenar.js`:

```js
// Sustituye marcadores {nombre} de los textos de contenido/*.js (que no pueden llevar funciones)
export function rellenar(texto, valores) {
  return String(texto).replace(/\{(\w+)\}/g, (marca, nombre) => (nombre in valores ? String(valores[nombre]) : marca));
}
```

- [ ] **Step 4: Ejecutar y ver que pasa**

Ejecuta: `npm test`
Esperado: PASS en las 6 pruebas. Node avisa de `MODULE_TYPELESS_PACKAGE_JSON`; es esperable y no se toca `type` en package.json, porque cambiaría cómo Next lee el resto.

- [ ] **Step 5: Commit**

```bash
git add lib/i18n.js lib/rellenar.js scripts/i18n.test.mjs package.json
git commit -m "Tabla de rutas por idioma y pruebas"
```

---

### Task 2: Mover el español a `app/(es)` sin cambiar ninguna URL

**Files:**
- Create: `scripts/instantanea-rutas.mjs`, `app/global-not-found.js`
- Move: `app/layout.js`, `app/page.js`, `app/opengraph-image.jsx`, `app/servicios`, `app/blog`, `app/privacidad`, `app/vip` y `app/admin` → `app/(es)/`
- Modify: `next.config.mjs`, `app/(es)/layout.js` (ruta del import de `globals.css`)

**Interfaces:**
- Consumes: `RUTAS` (tarea 1).
- Produces: el layout raíz español en `app/(es)/layout.js`.

- [ ] **Step 1: Escribir el script de instantánea**

`scripts/instantanea-rutas.mjs`:

```js
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
```

Añade `scripts/.instantanea-es.json` a `.gitignore`.

- [ ] **Step 2: Guardar la instantánea ANTES de mover nada**

Ejecuta:
```bash
npm run build && (npx next start -p 3107 &) && node scripts/instantanea-rutas.mjs guardar
```
Esperado: `Guardadas 13 URLs`. Después cierra el servidor (`Get-NetTCPConnection -LocalPort 3107 | % { taskkill /F /PID $_.OwningProcess }`).

- [ ] **Step 3: Mover con git**

```bash
mkdir -p "app/(es)"
git mv app/layout.js "app/(es)/layout.js"
git mv app/page.js "app/(es)/page.js"
git mv app/opengraph-image.jsx "app/(es)/opengraph-image.jsx"
for d in servicios blog privacidad vip admin; do git mv "app/$d" "app/(es)/$d"; done
```

En `app/(es)/layout.js`, cambia `import "./globals.css";` por `import "../globals.css";`. Los imports con `@/` no cambian.

- [ ] **Step 4: 404 global**

Con dos layouts raíz no hay uno común para el 404. En `next.config.mjs`, añade dentro de `nextConfig`:

```js
  // Dos layouts raíz (español e inglés): el 404 de URLs inexistentes lo da app/global-not-found.js
  experimental: { globalNotFound: true },
```

`app/global-not-found.js`:

```js
import './globals.css';
import { Geist } from 'next/font/google';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

export const metadata = {
  title: 'Página no encontrada · Page not found | DASTAN X-TECH',
  robots: { index: false },
};

// 404 para cualquier URL que no exista, en los dos idiomas (no hay un layout raíz común)
export default function GlobalNotFound() {
  return (
    <html lang="es" className={geistSans.variable}>
      <body style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh', display: 'grid', placeItems: 'center', textAlign: 'center', padding: '24px' }}>
        <main>
          <p className="label-mono" style={{ marginBottom: '1rem' }}>404</p>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Esta página no existe</h1>
          <p lang="en" style={{ color: 'var(--text-2)', marginBottom: '2rem' }}>This page doesn&apos;t exist</p>
          <p style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
            <a href="/" className="text-link">Ir al inicio</a>
            <a href="/en" lang="en" className="text-link">Go to the English site</a>
          </p>
        </main>
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Build y comparación**

Ejecuta: `npm run build`, luego `npx next start -p 3107` y `node scripts/instantanea-rutas.mjs comparar`.
Esperado: build sin errores y `Sin diferencias`.

Comprueba además que una URL inventada da 404 con la página nueva:
```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:3107/no-existe
```
Esperado: `404`. Cierra el servidor.

Si `global-not-found` rompe el build, quítalo junto con el flag y crea `app/(es)/not-found.js` con el mismo contenido sin `<html>/<body>`, como dice el riesgo del spec. Vuelve a comparar.

- [ ] **Step 6: Commit**

```bash
git add -A app next.config.mjs scripts/instantanea-rutas.mjs .gitignore
git commit -m "Español en el route group (es) sin cambiar URLs y 404 global"
```

---

### Task 3: Componentes comunes con idioma (cabecera, pie, logo)

**Files:**
- Modify: `components/SiteHeader.jsx`, `components/SiteFooter.jsx`, `components/Brand.jsx`, `app/globals.css`
- Create: `components/SelectorIdioma.jsx`

**Interfaces:**
- Consumes: `idiomaDeRuta`, `rutaEquivalente`, `ruta` (tarea 1).
- Produces:
  - `<SiteHeader tone lang='es'|'en'>`
  - `<SiteFooter tone lang>`
  - `<Brand href lang>`: el `aria-label` va en el idioma
  - `<SelectorIdioma />`: client; deduce el idioma de la URL. Lleva `data-cambio-idioma` en el enlace, para que lo use la verificación.

- [ ] **Step 1: `components/SelectorIdioma.jsx`**

```jsx
'use client';
import { usePathname } from 'next/navigation';
import { idiomaDeRuta, rutaEquivalente } from '@/lib/i18n';

// ES | EN: lleva a la misma página en el otro idioma (cambia de layout raíz: recarga completa, es lo esperado)
export default function SelectorIdioma({ className = '' }) {
  const pathname = usePathname() || '/';
  const lang = idiomaDeRuta(pathname);
  const otra = rutaEquivalente(pathname);
  const opcion = (codigo) =>
    codigo === lang ? (
      <span aria-current="true">{codigo.toUpperCase()}</span>
    ) : (
      <a href={otra} hrefLang={codigo} lang={codigo} data-cambio-idioma>
        {codigo.toUpperCase()}
      </a>
    );
  return (
    <span className={`selector-idioma ${className}`} role="group" aria-label={lang === 'es' ? 'Idioma' : 'Language'}>
      {opcion('es')}
      <span aria-hidden="true">|</span>
      {opcion('en')}
    </span>
  );
}
```

- [ ] **Step 2: `SiteHeader` con `lang` y selector**

Sustituye el cuerpo de `components/SiteHeader.jsx` (mantén el comentario de cabecera):

```jsx
import Brand from './Brand';
import SelectorIdioma from './SelectorIdioma';
import { ruta } from '@/lib/i18n';

const TEXTOS = {
  es: { servicios: 'Servicios', wa: 'Escríbenos por WhatsApp al +1 605-500-3653' },
  en: { servicios: 'Services', wa: 'Message us on WhatsApp at +1 605-500-3653' },
};

export default function SiteHeader({ tone = 'light', lang = 'es' }) {
  const t = TEXTOS[lang];
  return (
    <header className={`site-header site-header--${tone}`}>
      <Brand href={ruta('inicio', lang)} lang={lang} />
      <nav className="site-header-links" aria-label={lang === 'es' ? 'Principal' : 'Main'}>
        <a href={ruta('servicios', lang)}>{t.servicios}</a>
        <a href={ruta('blog', lang)} className="site-header-blog">Blog</a>
        <SelectorIdioma />
        <a href="https://wa.me/16055003653" target="_blank" rel="noopener noreferrer" className="site-header-wa" aria-label={t.wa}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.8 8.8 0 0 1-4-.9L3 20l1.1-4.2A8.2 8.2 0 0 1 3 11.5 8.6 8.6 0 0 1 12 3a8.6 8.6 0 0 1 9 8.5Z" /></svg>
          WhatsApp
        </a>
      </nav>
    </header>
  );
}
```

- [ ] **Step 3: `Brand` con `lang`**

En `components/Brand.jsx`, cambia la firma a `export default function Brand({ href = '/', className = '', lang = 'es' })`. Cambia el aria-label por:

```jsx
aria-label={lang === 'es' ? `${BRAND_NAME}, ir al inicio` : `${BRAND_NAME}, go to home page`}
```

- [ ] **Step 4: `SiteFooter` con `lang`**

En `components/SiteFooter.jsx`:
- La firma pasa a `({ tone = 'light', lang = 'es' })`.
- Añade, después de `contactLinks`:

```jsx
const TEXTOS = {
  es: {
    lema: 'Consultoría digital e IA para negocios privados y pymes. En remoto, para Colombia, México, Estados Unidos y el resto del mundo.',
    servicios: 'Servicios', secciones: 'Secciones', privacidad: 'Aviso legal y de privacidad',
  },
  en: {
    lema: 'Digital and AI consulting for small businesses. Fully remote, serving the United States, Mexico, Colombia and the rest of the world.',
    servicios: 'Services', secciones: 'Sections', privacidad: 'Legal and privacy notice',
  },
};
```

Dentro del componente:
- Añade `const t = TEXTOS[lang];` e `import { ruta } from '@/lib/i18n';`.
- `<Brand href={ruta('inicio', lang)} lang={lang} />`.
- El `<p>` del lema pasa a `{t.lema}` y el `aria-label` del nav a `{t.secciones}`.
- Los enlaces pasan a `href={ruta('servicios', lang)}` (texto `{t.servicios}`) y `href={ruta('blog', lang)}`.
- El pie legal: `<a href={ruta('privacidad', lang)}>{t.privacidad}</a>`.

- [ ] **Step 5: Estilos del selector**

Añade en `app/globals.css`, después del bloque `.site-header-links a:hover`:

```css
/* Selector ES | EN: el idioma actual en negrita, el otro como enlace */
.selector-idioma { display: inline-flex; align-items: center; gap: 6px; font-size: 14px; font-family: var(--font-mono); letter-spacing: 0.04em; }
.selector-idioma [aria-current] { font-weight: 700; }
.selector-idioma a { opacity: 0.75; }
.selector-idioma a:hover { opacity: 1; }
```

- [ ] **Step 6: Comprobar**

Ejecuta: `npm run lint && npm run build`, arranca el servidor y lanza `node scripts/instantanea-rutas.mjs comparar`.
Esperado: el build pasa y `Sin diferencias`. El h1 y el título no cambian. Abre `/servicios` y comprueba que la cabecera muestra «ES | EN» con ES en negrita, y que EN enlaza a `/en/services` (aún da 404: se crea en la tarea 6).

- [ ] **Step 7: Commit**

```bash
git add components app/globals.css
git commit -m "Cabecera, pie y logo con idioma, y selector ES | EN"
```

---

### Task 4: Layout raíz inglés, aviso de idioma y portada en inglés

**Files:**
- Create: `app/(en)/layout.js`, `app/(en)/en/page.js`, `app/(en)/en/opengraph-image.jsx`, `components/AvisoIdioma.jsx`, `components/paginas/Inicio.jsx`, `contenido/inicio.es.js`, `contenido/inicio.en.js`
- Modify: `app/(es)/page.js` (pasa a envolver `Inicio`), `app/(es)/layout.js` (monta `AvisoIdioma` y `GlobalChatWidget` sin cambios), `app/globals.css`

**Interfaces:**
- Consumes: `SelectorIdioma`, `SiteFooter({lang})`, `ruta`, `alternates`.
- Produces:
  - `<Inicio t lang />`
  - `<AvisoIdioma />`: client; no se muestra en las rutas `vip`.
  - Patrón de página que siguen las tareas 5-12: `page.js` importa `contenido/<x>.<lang>.js` y renderiza `<Componente t={t} lang="…" />`.

- [ ] **Step 1: `components/AvisoIdioma.jsx`**

```jsx
'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { idiomaDeRuta, rutaEquivalente, claveDeRuta } from '@/lib/i18n';

const CLAVE = 'aviso-idioma-cerrado';
const TEXTOS = {
  en: { texto: 'This page is also in English.', enlace: 'View in English', cerrar: 'Close' },
  es: { texto: 'Esta página también está en español.', enlace: 'Ver en español', cerrar: 'Cerrar' },
};

// Si el navegador está en el otro idioma, una barra fina lo ofrece. Nunca redirige.
export default function AvisoIdioma() {
  const pathname = usePathname() || '/';
  const [destino, setDestino] = useState(null);

  useEffect(() => {
    if (claveDeRuta(pathname) === 'vip') return;
    let cerrado = false;
    try { cerrado = localStorage.getItem(CLAVE) === '1'; } catch { /* almacenamiento bloqueado: se vuelve a mostrar */ }
    if (cerrado) return;
    const prefiere = (navigator.languages?.[0] || navigator.language || '').toLowerCase().slice(0, 2);
    const lang = idiomaDeRuta(pathname);
    if ((prefiere === 'en' || prefiere === 'es') && prefiere !== lang) setDestino(prefiere);
  }, [pathname]);

  if (!destino) return null;
  const t = TEXTOS[destino];
  const cerrar = () => {
    try { localStorage.setItem(CLAVE, '1'); } catch { /* sin almacenamiento: solo se cierra ahora */ }
    setDestino(null);
  };
  return (
    <div className="aviso-idioma" lang={destino} role="region" aria-label={t.texto}>
      <span>{t.texto}</span>
      <a href={rutaEquivalente(pathname)} hrefLang={destino}>{t.enlace} →</a>
      <button type="button" onClick={cerrar} aria-label={t.cerrar}>✕</button>
    </div>
  );
}
```

CSS en `app/globals.css`:

```css
/* Aviso de idioma: barra fina encima de todo, sin tapar la cabecera fija */
.aviso-idioma { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 6px 14px; padding: 8px 44px 8px 16px; position: relative; font-size: 14px; background: #1A1424; color: var(--text); border-bottom: 1px solid var(--border); }
.aviso-idioma a { color: var(--action); font-weight: 600; text-decoration: none; }
.aviso-idioma button { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; color: var(--text-2); font-size: 16px; cursor: pointer; padding: 6px; }
```

En `app/(es)/layout.js`, importa `AvisoIdioma` y ponlo como primer hijo de `<body>`, antes de `{children}`.

- [ ] **Step 2: `app/(en)/layout.js`**

Copia `app/(es)/layout.js` y cambia:
- `<html lang="en" …>`.
- Monta `<AvisoIdioma />`, `<GlobalChatWidget />` y `<Analytics />` igual que en español.
- Quita `other` (Trustpilot) y `keywords`.
- Pon este `metadata`:

```js
export const metadata = {
  metadataBase: new URL('https://dastanxtech.com'),
  title: 'DASTAN X-TECH | Digital & AI Consulting for Small Businesses',
  description: 'We show you, with evidence, why your business is losing customers online: free SEO report, digital business audit, web design and AI search optimization so Google and AI assistants recommend you.',
  alternates: alternates('inicio', 'en'),
  openGraph: {
    title: 'DASTAN X-TECH | Digital & AI Consulting for Small Businesses',
    description: 'Free SEO report for your website: your score from 0 to 100 and the 5 most urgent fixes. Digital business audit, web design and AI search optimization for small businesses.',
    url: 'https://dastanxtech.com/en',
    siteName: 'DASTAN X-TECH',
    locale: 'en_US',
    type: 'website',
  },
};
```

En `organizationJsonLd`:
- `description: 'Digital and AI consulting for small businesses, fully remote. Free SEO report, Digital Business Audit, web design and AI search optimization (AEO) so Google and AI assistants recommend the business.'`
- `serviceType: ['Digital Business Audit', 'Web Design', 'AI Search Optimization (AEO)', 'AI Consulting']`
- `areaServed`: los mismos países, con `name` en inglés: United States, Mexico, Colombia.
- `url: 'https://dastanxtech.com/en'`

Importa `globals.css` como `import "../globals.css";`.

- [ ] **Step 3: Extraer los textos de la portada**

Crea `contenido/inicio.es.js` con todos los textos de `app/(es)/page.js`, **literales y sin cambiar ni una coma**. Cabecera obligatoria del archivo:

```js
// Textos de la portada (español). Si cambias algo aquí, cambia lo mismo en inicio.en.js.
// Solo datos: nada de funciones (se pasan de servidor a cliente).
```

Estructura (claves exactas):
- `etiqueta`, `titulo`, `tituloSr`, `subtitulo`, `botonDiagnostico`, `puntos: string[3]`
- `quienes: { titulo, parrafos: JSX[2] }`: los dos párrafos con sus `<strong>`, como elementos JSX.
- `equipo: [{ nombre, rol, alt }]`, en el mismo orden (Dastan, Isdiel).
- `servicios: { etiqueta, titulo, tarjetas: [{ clave: 'disenoWeb'|'auditoria'|'aeo', label, title, text, items: string[3], link, price }] }`
- `pasos: { titulo, items: string[3] }`
- `cierre: { titulo, texto, boton }`
- `nav: { servicios: 'Servicios', wa: 'Escríbenos por WhatsApp al +1 605-500-3653', principal: 'Principal', irInicio: 'DASTAN X-TECH, ir al inicio' }`

Crea `contenido/inicio.en.js` con las mismas claves en inglés, siguiendo los nombres y las reglas de Global Constraints. Por ejemplo:
- `titulo`: «Find out, with evidence, why your business is losing customers online.»
- `botonDiagnostico`: «Get your free SEO report».
- `price`: «From 100 USD».
- `equipo[].rol`: «Founder of DASTAN X-TECH» y «AI consultant and digital strategist».

- [ ] **Step 4: `components/paginas/Inicio.jsx`**

Mueve el JSX de `app/(es)/page.js` a `components/paginas/Inicio.jsx` (`'use client'`, `export default function Inicio({ t, lang })`) y sustituye cada texto por su clave de `t`. Además:
- **Imágenes:** `fotoDastan` y `fotoIsdiel` se importan en el componente. El array `equipo` se construye con `[fotoDastan, fotoIsdiel].map((foto, i) => ({ foto, ...t.equipo[i] }))`.
- **Enlaces:** se generan con `ruta(…, lang)`:
  - el logo, con `ruta('inicio', lang)`;
  - «Servicios», con `ruta('servicios', lang)`;
  - Blog, con `ruta('blog', lang)`;
  - cada tarjeta, con `ruta(s.clave, lang)`.
- **Selector:** `<SelectorIdioma />` va dentro de `.nav-links`, antes del enlace de WhatsApp.
- **Pie:** `<SiteFooter tone="dark" lang={lang} />`.

`app/(es)/page.js` queda así:

```js
import Inicio from '@/components/paginas/Inicio';
import t from '@/contenido/inicio.es';

export default function Home() {
  return <Inicio t={t} lang="es" />;
}
```

`app/(en)/en/page.js` es igual, con `inicio.en` y `lang="en"`.

- [ ] **Step 5: Imagen al compartir en inglés**

Copia `app/(es)/opengraph-image.jsx` a `app/(en)/en/opengraph-image.jsx` y cambia solo los textos:
- `alt = 'DASTAN X-TECH | AI consulting, web design and AI search optimization for small businesses'`
- Propuesta de valor: `Stop losing customers to a website that isn't good enough.`
- Servicios: `Web Design` · `Digital Business Audit` · `AI Search Optimization`

- [ ] **Step 6: Comprobar**

1. `npm run lint && npm run build`, arranca el servidor y lanza `node scripts/instantanea-rutas.mjs comparar` → `Sin diferencias`.
2. `curl -s localhost:3107/en | grep -o '<html[^>]*lang="en"'` → una coincidencia.
3. Captura de `/en` a 1280 px y a 390 px con Playwright (`page.goto`, `page.screenshot(full_page=True)`). Revísalas: mismo diseño que `/` y todo en inglés.
4. Con Playwright, crea un contexto con `locale='en-US'`, abre `/` y comprueba que existe `.aviso-idioma` con el enlace a `/en`. Pulsa ✕, recarga y comprueba que ya no aparece.
5. Abre `/vip` con `locale='en-US'` y comprueba que no hay `.aviso-idioma`.
6. Cabecera de la portada a 320 px: logo, «Servicios», ES | EN y WhatsApp en una línea, sin scroll lateral. Si no cabe, en `@media (max-width: 380px)` oculta `.nav-link-texto`, porque Servicios sigue en el pie. Comprueba lo mismo en `SiteHeader` (`/servicios` a 320 px).

- [ ] **Step 7: Commit**

```bash
git add -A app components contenido
git commit -m "Layout raíz inglés, aviso de idioma y portada en inglés"
```

---

### Task 5: Página de servicios en los dos idiomas

**Files:**
- Create: `components/paginas/Servicios.jsx`, `contenido/servicios.es.js`, `contenido/servicios.en.js`, `app/(en)/en/services/layout.js`, `app/(en)/en/services/page.js`
- Modify: `app/(es)/servicios/page.js`

**Interfaces:**
- Consumes: el patrón de la tarea 4; `BotonChat` (sin cambios); `alternates`.
- Produces: `<Servicios t lang />`.

- [ ] **Step 1: Contenido**

`contenido/servicios.es.js`: los textos actuales de `app/(es)/servicios/page.js`, literales, con la misma cabecera de la tarea 4.
- `metadata: { title, description, keywords, ogTitle, ogDescription }`
- `etiqueta`, `titulo: JSX` (con el `<span className="accent-light">`), `subtitulo`
- `tarjetas: [{ clave, title, tagline }]` (claves `disenoWeb`, `auditoria`, `aeo`) y `verDetalle`
- `pack: { etiqueta, titulo, texto, mensajeChat, boton }`
- `extras: { etiqueta, titulo, items: [{ title, text }], nota, mensajeChat, boton }`

`contenido/servicios.en.js`: las mismas claves en inglés. Ejemplos:
- `pack.titulo`: «All three services for 400 USD».
- `pack.texto`: «Web Design, Digital Business Audit and AI Search Optimization (AEO): you save 50 USD compared to buying them separately. Already bought one? You only pay the difference.»
- `extras.etiqueta`: «On request».

- [ ] **Step 2: Componente y rutas**

`components/paginas/Servicios.jsx` es un server component, sin `'use client'`: recibe `{ t, lang }` y devuelve el JSX actual con `t`. Los enlaces van a `ruta(s.clave, lang)` y la cabecera y el pie con `lang`.

`app/(es)/servicios/page.js`:

```js
import Servicios from '@/components/paginas/Servicios';
import t from '@/contenido/servicios.es';
import { alternates } from '@/lib/i18n';

export const metadata = {
  title: t.metadata.title,
  description: t.metadata.description,
  keywords: t.metadata.keywords,
  alternates: alternates('servicios', 'es'),
  openGraph: { title: t.metadata.ogTitle, description: t.metadata.ogDescription, url: 'https://dastanxtech.com/servicios', siteName: 'DASTAN X-TECH', locale: 'es_US', type: 'website' },
};

export default function ServiciosPage() {
  return <Servicios t={t} lang="es" />;
}
```

`app/(en)/en/services/page.js`: igual, con `servicios.en`, `alternates('servicios','en')`, `url: 'https://dastanxtech.com/en/services'`, `locale: 'en_US'` y `lang="en"`.

`app/(en)/en/services/layout.js`: copia exacta de `app/(es)/servicios/layout.js` (themeColor crema), con el comentario en inglés o igual.

- [ ] **Step 3: Comprobar**

1. Build, servidor y `node scripts/instantanea-rutas.mjs comparar` → `Sin diferencias`.
2. `/en/services` responde 200 con `lang="en"`. Sus tres tarjetas llevan a `/en/services/web-design`, `/en/services/digital-business-audit` y `/en/services/aeo`.
3. Capturas de `/en/services` a 1280 y 390 px.

- [ ] **Step 4: Commit**

```bash
git add -A app components contenido
git commit -m "Servicios en inglés"
```

---

### Task 6: Diseño web en los dos idiomas

**Files:**
- Create: `components/paginas/DisenoWeb.jsx`, `contenido/diseno-web.es.js`, `contenido/diseno-web.en.js`, `app/(en)/en/services/web-design/layout.js`, `app/(en)/en/services/web-design/page.js`
- Modify: `app/(es)/servicios/diseno-web/page.js`, `app/(es)/servicios/diseno-web/layout.js`

**Interfaces:**
- Consumes: el patrón de la tarea 4.
- Produces: `<DisenoWeb t lang />`. El FAQPage JSON-LD se genera dentro, a partir de `t.faq`.

- [ ] **Step 1: Contenido**

`contenido/diseno-web.es.js`, con los textos literales actuales:
- `metadata { title, description, keywords, ogTitle, ogDescription }`
- `servicioJsonLd { name, serviceType, description }`
- `hero { etiqueta, titulo: JSX, texto, boton, mensajeChat, tarjetaTitulo, tarjetaItems: string[3], verCaso }`
- `caso { etiqueta, titulo: JSX, intro, items: string[3], boton, demoTitulo, demoTexto, demoEnlace }`
- `ventajas { titulo: JSX, items: [{ titulo, texto }] }`
- `caminos { titulo: JSX, items: [{ etiqueta, titulo, texto, boton, mensajeChat, estilo: 'btn btn-ink'|'btn btn-outline-light' }] }`
- `faqTitulo`, `faq: [{ q, a }]` (las 6 actuales)
- `cierre { titulo, texto, botonDiagnostico, whatsappTexto, whatsappEnlace }`

`whatsappTexto` es el mensaje sin codificar: «Hola, vi la página de Diseño Web y quiero mi diagnóstico SEO gratis.». El componente lo codifica con `encodeURIComponent`.

`contenido/diseno-web.en.js`: las mismas claves en inglés. Por ejemplo:
- `whatsappTexto`: «Hi, I saw the Web Design page and I'd like my free SEO report.»
- La FAQ del Arreglo exprés: «… the 48-Hour Fix: for 49 USD we apply the 5 most urgent fixes from your SEO report within 48 hours. If you order Web Design within the next 30 days, we deduct it.»

- [ ] **Step 2: Componente y rutas**

`components/paginas/DisenoWeb.jsx`:
- Es `'use client'` y recibe `{ t, lang }`.
- Su JSX es el de la página actual con los textos de `t` y `<SiteHeader tone="light" lang={lang} />` / `<SiteFooter tone="light" lang={lang} />`.
- Construye el `faqJsonLd` desde `t.faq`, con `inLanguage: lang`.
- El enlace de WhatsApp es `https://wa.me/16055003653?text=${encodeURIComponent(t.cierre.whatsappTexto)}`.

Rutas:
- `app/(es)/servicios/diseno-web/page.js` queda como `return <DisenoWeb t={t} lang="es" />` con `diseno-web.es`.
- `layout.js` español: `metadata` sale de `t.metadata` con `alternates: alternates('disenoWeb','es')`, y `serviceJsonLd` usa `t.servicioJsonLd` (el resto del objeto no cambia).
- La pareja inglesa en `app/(en)/en/services/web-design/`: mismo código, con `en`, `url: 'https://dastanxtech.com/en/services/web-design'`, `locale: 'en_US'` y `areaServed: ['United States', 'Mexico', 'Colombia']`.

- [ ] **Step 3: Comprobar**

1. Comparación de la instantánea → `Sin diferencias`.
2. `/en/services/web-design` responde 200.
3. Comprueba que el JSON-LD FAQPage tiene 6 preguntas en inglés:
   ```bash
   curl -s localhost:3107/en/services/web-design | grep -o '"@type":"Question"' | wc -l
   ```
   Esperado: `6`.
4. Capturas a 1280 y 390 px.

- [ ] **Step 4: Commit**

```bash
git add -A app components contenido
git commit -m "Diseño web en inglés"
```

---

### Task 7: Auditoría en los dos idiomas

**Files:**
- Create: `components/paginas/Auditoria.jsx`, `contenido/auditoria.{es,en}.js`, `app/(en)/en/services/digital-business-audit/{layout,page}.js`
- Modify: `app/(es)/servicios/auditoria-negocio/{layout,page}.js`

**Interfaces:**
- Consumes: el patrón de la tarea 6.
- Produces: `<Auditoria t lang />`.

- [ ] **Step 1: Contenido**

Mismas claves de la tarea 6, salvo `caso` y `caminos`, que esta página no tiene. El hero no lleva `verCaso`, y `cierre` añade `botonAuditoria` y `mensajeChat`, porque la página tiene dos botones.

En inglés, el nombre es siempre «Digital Business Audit». Por ejemplo:
- hero: «Find out where your business is **losing money**.»
- `whatsappTexto`: «Hi, I saw the Digital Business Audit page and I'd like more information.»

- [ ] **Step 2: Componente y rutas**

Igual que la tarea 6, con la clave `auditoria` y la URL `https://dastanxtech.com/en/services/digital-business-audit`.

- [ ] **Step 3: Comprobar**

1. Instantánea → `Sin diferencias`.
2. `/en/services/digital-business-audit` responde 200 y tiene 4 preguntas en el JSON-LD.
3. Capturas a 1280 y 390 px.

- [ ] **Step 4: Commit**

```bash
git add -A app components contenido
git commit -m "Auditoría en inglés"
```

---

### Task 8: AEO en los dos idiomas

**Files:**
- Create: `components/paginas/Aeo.jsx`, `contenido/aeo.{es,en}.js`, `app/(en)/en/services/aeo/{layout,page}.js`
- Modify: `app/(es)/servicios/posicionamiento-aeo/{layout,page}.js`

**Interfaces:**
- Consumes: el patrón de la tarea 6.
- Produces: `<Aeo t lang />`.

- [ ] **Step 1: Contenido**

Lee `app/(es)/servicios/posicionamiento-aeo/page.js` entero. Extrae todos los textos con la estructura de la tarea 6:
- `hero`, `faq` (5 preguntas) y `cierre`;
- las secciones propias de esta página: `queEs { titulo: JSX, … }` con el explicador del AEO, `razones { titulo: JSX, items: [{ titulo, texto }] }` (de `razonesAeo`) y el enlace al artículo.

El enlace al artículo deja de ser fijo: va a `ruta('blogAeo', lang)`.

En inglés, el servicio es «AI Search Optimization (AEO)». Por ejemplo, el título del hero: «Get **recommended** by AI, not just Google.»

- [ ] **Step 2: Componente y rutas**

Igual que la tarea 6, con la clave `aeo` y la URL `https://dastanxtech.com/en/services/aeo`.

- [ ] **Step 3: Comprobar**

1. Instantánea → `Sin diferencias`.
2. `/en/services/aeo` responde 200, tiene 5 preguntas en el JSON-LD y el enlace del artículo va a `/en/blog/what-is-aeo`.
3. Capturas a 1280 y 390 px.

- [ ] **Step 4: Commit**

```bash
git add -A app components contenido
git commit -m "AEO en inglés"
```

---

### Task 9: Blog en los dos idiomas (índice y 3 artículos)

**Files:**
- Create: `contenido/blog.{es,en}.js`, `app/(en)/en/blog/{layout,page}.js` y, en `app/(en)/en/blog/`, las carpetas `what-is-aeo`, `5-signs-your-website-is-losing-customers` y `we-audited-our-own-website`, cada una con `{layout,page}.js`
- Modify: `app/(es)/blog/page.js` y los 3 `layout.js` de los artículos en español (solo `alternates`)

**Interfaces:**
- Consumes: `SiteHeader({lang})`, `SiteFooter({lang})`, `alternates`, `REVISIONES`.
- Produces: índices que listan los artículos de su idioma a partir de `contenido/blog.<lang>.js`.

- [ ] **Step 1: Índice**

`contenido/blog.es.js`: `{ metadata: { title, description }, titulo: 'Blog', subtitulo, posts: [{ clave, title, excerpt, date }] }`. Las claves son `blogAeo`, `blog5Senales` y `blogAuditamos`, y los textos los actuales.

`contenido/blog.en.js`: lo mismo en inglés. Las fechas van en formato de EE. UU. («September 23, 2026»).

El índice español toma los textos de `t` y `href: ruta(post.clave, 'es')`. El inglés es el mismo código con `blog.en`. `app/(en)/en/blog/layout.js` es una copia del `layout.js` de themeColor del blog español.

- [ ] **Step 2: Artículos en inglés**

Cada artículo en inglés es una copia del `page.js` y del `layout.js` españoles con todo el texto traducido. Son prosa, así que no usan archivo de contenido. En cada uno:
- `SiteHeader` y `SiteFooter` con `lang="en"`.
- JSON-LD `BlogPosting` con `headline` y `description` en inglés, `inLanguage: 'en'`, `mainEntityOfPage` con la URL inglesa y `dateModified: REVISIONES['<ruta en inglés>']`.
- `layout.js` con `alternates: alternates('<clave>', 'en')` y `openGraph.locale: 'en_US'`.
- Enlaces internos con `ruta(…, 'en')`, por ejemplo al servicio AEO.
- Los mensajes de `abrir-chat`, en inglés. Por ejemplo: «I read the post about AEO and I want to know if AI is recommending me».
- Firma: «Founder of DASTAN X-TECH · 4 min read».
- Etiqueta: «Practical guide · September 23, 2026».

En los 3 `layout.js` españoles, cambia solo `alternates: { canonical: … }` por `alternates: alternates('<clave>', 'es')`.

- [ ] **Step 3: Comprobar**

1. Instantánea → `Sin diferencias`.
2. Las 4 URLs del blog en inglés responden 200, y `/en/blog` enlaza a los 3 artículos en inglés.
3. Capturas de `/en/blog/what-is-aeo` a 390 px.

- [ ] **Step 4: Commit**

```bash
git add -A app contenido
git commit -m "Blog en inglés"
```

---

### Task 10: Aviso legal en los dos idiomas

**Files:**
- Create: `components/paginas/Privacidad.jsx`, `contenido/privacidad.{es,en}.js`, `app/(en)/en/privacy/{layout,page}.js`
- Modify: `app/(es)/privacidad/{layout,page}.js`

**Interfaces:**
- Consumes: el patrón de la tarea 5 (server component), `REVISIONES`.
- Produces: `<Privacidad t lang />`.

- [ ] **Step 1: Contenido y componente**

`contenido/privacidad.es.js`: el texto actual, con:
- `actualizacion: 'Última actualización:'`, `titulo` e `intro`;
- `secciones: [{ titulo, bloques: [ { tipo: 'p'|'ul', contenido: JSX|JSX[] } ] }]`.

`contenido/privacidad.en.js`: la traducción fiel. Es un texto legal: no se añaden ni se quitan obligaciones. La persona sigue siendo «Dastan Tamayo, an individual with registered address in Puebla, Puebla, Mexico». El correo es `supportdaelworld@gmail.com`.

En el componente, la fecha se formatea con `new Intl.DateTimeFormat(lang === 'es' ? 'es' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })`. La revisión de la versión inglesa usa `REVISIONES['/en/privacy']`.

- [ ] **Step 2: Rutas, comprobación y commit**

Rutas igual que en la tarea 5, con la clave `privacidad`.

Comprueba:
1. Instantánea → `Sin diferencias`.
2. `/en/privacy` responde 200 y muestra la fecha en inglés («October 1, 2026»).

```bash
git add -A app components contenido
git commit -m "Aviso legal en inglés"
```

---

### Task 11: VIP en los dos idiomas

**Files:**
- Create: `components/paginas/Vip.jsx`, `contenido/vip.{es,en}.js`, `app/(en)/en/vip/{layout,page}.js`
- Modify: `app/(es)/vip/page.js`, `components/ChatWidget.jsx` (solo si hace falta pasar `lang`; ver la tarea 12)

**Interfaces:**
- Consumes: `rellenar` (tarea 1), `ChatWidget({ couponApplied, lang })` (tarea 12: hasta entonces se monta sin `lang`).
- Produces: `<Vip t lang />`.

- [ ] **Step 1: Separar números y textos**

En `components/paginas/Vip.jsx` (`'use client'`, toda la lógica actual del cupón sin cambios), los números se quedan en el componente:

```js
const PRECIOS_VIP = { web: { precio: 100, precioCupon: 50 }, aeo: { precio: 150, precioCupon: 100 }, auditoria: { precio: 200, precioCupon: 150 } };
const PACK = { precio: 400, precioCupon: 300 };
const ARREGLO_EXPRES = 49;
const MEMBRESIA = 200;
```

`contenido/vip.es.js` lleva los textos literales actuales, con marcadores donde hay cifras:
- `paquetes: [{ id: 'web'|'aeo'|'auditoria', titulo, texto, incluye: string[] }]`
- `pack { titulo, texto, ahorro: 'Ahorras ${monto}', ahorroCupon: 'Ahorras ${monto} con tu cupón', boton, aria: 'Contratar el Pack completo por ${precio} USD' }`
- `contratar: 'Contratar'`, `ariaContratar: 'Contratar {titulo} por ${precio} USD'`
- `complementos: [{ titulo, precio, texto, mensaje }]`
- `membresia { titulo, precio: '$200/mes', texto, incluye: string[], boton, aria, nota }`
- `hero`, `cupon`, `preguntaLex`, `otroPago`, `pie`, `mensajeLex`
- `whatsappDiagnostico`: el texto sin codificar

`contenido/vip.en.js`: las mismas claves en inglés. Por ejemplo:
- `ahorro`: «You save ${monto}».
- `membresia.titulo`: «Monthly Implementation Plan».
- `membresia.precio`: «$200/month».
- `pack.titulo`: «All-in-One Package».

En el componente, cada cifra se pone con `rellenar(t.pack.ahorro, { monto: suma - precioPack })`. Los botones de PayPal no cambian: `https://paypal.me/Dastanpro98/${precio}USD`.

- [ ] **Step 2: Rutas**

- `app/(es)/vip/page.js` → `<Vip t={t} lang="es" />`.
- `app/(en)/en/vip/page.js` → igual, con `vip.en`.
- `app/(en)/en/vip/layout.js` → `metadata` con `title: 'Private VIP Access | DASTAN X-TECH'` y el mismo `robots` (noindex, nofollow, nocache).

- [ ] **Step 3: Comprobar**

1. Instantánea → `Sin diferencias`.
2. Con Playwright en `/en/vip`:
   - escribe el cupón real (pídeselo a Dastan o léelo de `/api/vip/cupon` en el servidor; no se escribe en el plan);
   - espera a «✓ Coupon applied»;
   - comprueba que los `href` de PayPal son `…/50USD`, `…/100USD`, `…/150USD` y `…/300USD`, y que el badge del pack dice «You save $100 with your coupon».
3. Sin cupón, los importes son `100`, `150`, `200`, `400`, `49` y `200`.
4. Capturas a 1280 y 390 px.

- [ ] **Step 4: Commit**

```bash
git add -A app components contenido
git commit -m "VIP en inglés"
```

---

### Task 12: Lex en los dos idiomas

**Files:**
- Modify: `components/ChatWidget.jsx`, `components/GlobalChatWidget.jsx`, `app/api/chat/route.js`, `components/paginas/Vip.jsx` (pasa `lang`)

**Interfaces:**
- Consumes: `idiomaDeRuta`, `claveDeRuta`.
- Produces:
  - `ChatWidget({ couponApplied, diagnostico, lang })`
  - cuerpo de `/api/chat`: `{ messages, couponApplied, diagnostico, lang }`
  - `origen` del lead con el sufijo ` · EN`

- [ ] **Step 1: `GlobalChatWidget` por clave de ruta**

```jsx
'use client';
import { usePathname } from 'next/navigation';
import ChatWidget from './ChatWidget';
import { claveDeRuta, idiomaDeRuta } from '@/lib/i18n';

// (mantener el comentario largo actual, añadiendo: funciona igual en /en/… gracias a lib/i18n)
export default function GlobalChatWidget() {
  const pathname = usePathname() || '/';
  const clave = claveDeRuta(pathname);
  if (clave === 'vip' || pathname.startsWith('/admin')) return null;
  let diagnostico = 'chat';
  if (clave === 'aeo') diagnostico = 'ninguno';
  else if (clave === 'disenoWeb' || clave === 'auditoria') diagnostico = 'final';
  return <ChatWidget diagnostico={diagnostico} lang={idiomaDeRuta(pathname)} />;
}
```

- [ ] **Step 2: Textos del widget por idioma**

En `components/ChatWidget.jsx`, sustituye las constantes de textos por un objeto `TEXTOS = { es: {…}, en: {…} }` con estas claves:
- `nombre`, `saludo`, `saludoSinDiagnostico`, `graciasWeb`, `graciasWebNueva`, `sinConexion`
- `limpiar`, `escribiendo`, `grupoWeb`, `tengoWeb`, `noTengoWeb`
- `tituloDiagnostico`, `tituloWebNueva`, `textoDiagnostico`, `textoWebNueva`
- `nombrePh`, `webPh`, `webAria`, `instagramPh`, `whatsappPh`, `whatsappAria`
- `errorDatos`, `errorWeb`, `errorEnvio`
- `enviando`, `quieroDiagnostico`, `quieroWeb`, `preguntarPrimero`, `pedirDiagnostico`, `noTengoWebQuiero`
- `mensajePh`, `mensajeAria`, `enviarAria`, `abrir`, `cerrar`, `origenDiagnostico`, `origenWebNueva`

`es` son los textos actuales, literales. Textos fijados para `en`, porque el prompt de Lex los nombra:
- `pedirDiagnostico: 'Get my free SEO report'`
- `noTengoWebQuiero: 'No website yet? I want one'`
- `saludo: 'Hi, I\'m Lex, DASTAN X-TECH\'s assistant. We help small businesses win more customers online. Ask me anything or get your free SEO report below.'`

Firma: `export default function ChatWidget({ couponApplied = false, diagnostico = 'chat', lang = 'es' } = {})` con `const t = TEXTOS[lang] ?? TEXTOS.es;`.

Al pedir a `/api/chat`, el cuerpo es `JSON.stringify({ messages: newMessages, couponApplied, diagnostico, lang })`.

El `origen` del lead pasa a:

```js
origen: `${window.location.pathname} · ${tieneWeb ? t.origenDiagnostico : t.origenWebNueva}${lang === 'en' ? ' · EN' : ''}`,
```

Los dos idiomas usan `origenDiagnostico: 'diagnóstico SEO'` y `origenWebNueva: 'quiere web nueva'`: es para el admin, que está en español.

En `Vip.jsx`, monta `<ChatWidget couponApplied={couponApplied} lang={lang} />`.

- [ ] **Step 3: Prompt por idioma**

En `app/api/chat/route.js`:

1. Añade, antes de `DIAGNOSTICO`:

```js
// Nombres de los botones del chat (deben coincidir con TEXTOS de components/ChatWidget.jsx)
const BOTONES = {
  es: { chat: 'Pedir mi diagnóstico SEO gratis', final: 'Pedir diagnóstico SEO gratis', sinWeb: 'No tengo web: quiero una' },
  en: { chat: 'Get my free SEO report', final: 'Get my free SEO report', sinWeb: 'No website yet? I want one' },
};
```

2. Convierte `DIAGNOSTICO` en una función `diagnosticoPara(b)`, que recibe `BOTONES[lang]`, para que los textos `oferta` y la regla 8 usen `b.chat`, `b.final` y `b.sinWeb` en lugar de los nombres fijos.

3. Cambia la firma a `construirPrompt(couponApplied, diagnostico, lang)` y, cuando `lang === 'en'`, añade al final del prompt:

```js
const BLOQUE_INGLES = `
IDIOMA: la persona está en la versión en inglés de la web. Responde en inglés salvo que te escriba en español. En inglés, los servicios se llaman: Free SEO Report (el diagnóstico SEO gratis), Web Design, Digital Business Audit, AI Search Optimization (AEO), All-in-One Package (el Pack completo), 48-Hour Fix (el Arreglo exprés), AI Chat for your website, AI WhatsApp Receptionist y Monthly Implementation Plan (la Membresía). Si das un enlace a una página, usa la versión en inglés: /en/services/web-design, /en/services/digital-business-audit, /en/services/aeo, /en/services.`;
```

4. En `POST`: `const { messages, couponApplied, diagnostico, lang } = await req.json();` y `construirPrompt(couponApplied === true, diagnostico, lang === 'en' ? 'en' : 'es')`.

- [ ] **Step 4: Comprobar** (necesita `GROQ_API_KEY` en `.env.local`)

1. Build y servidor.
2. Con Playwright en `/en`, abre el chat: el saludo empieza por «Hi, I'm Lex» y los botones dicen «Get my free SEO report» y «No website yet? I want one».
3. `curl -s -X POST localhost:3107/api/chat -H 'Content-Type: application/json' -d '{"messages":[{"role":"bot","text":"x"},{"role":"user","text":"How much is web design?"}],"lang":"en"}'` → respuesta en inglés que menciona «100 USD».
4. Lo mismo con `"text":"¿Cuánto cuesta la web?"` y `"lang":"en"` → respuesta en español.
5. En `/` (español), escribe en inglés → Lex responde en inglés (comportamiento actual).
6. **Lead desde `/en`:** no se envía a producción. En el navegador de pruebas, intercepta `/api/leads` con `page.route` y comprueba que el `origen` enviado acaba en ` · EN`.

- [ ] **Step 5: Commit**

```bash
git add components app/api/chat/route.js
git commit -m "Lex en inglés en las páginas en inglés"
```

---

### Task 13: Google y las IAs (hreflang, sitemap, robots, llms.txt)

**Files:**
- Modify: `app/sitemap.js`, `app/robots.js`, `lib/revisiones.js`, `public/llms.txt`, `app/(es)/layout.js` (`alternates` de la portada)
- Create: `scripts/verificar-idiomas.mjs`

**Interfaces:**
- Consumes: `RUTAS`, `NO_INDEXABLES`, `alternates`, `REVISIONES`.
- Produces: el sitemap con pares de idioma y el script de verificación final.

- [ ] **Step 1: Script de verificación (falla hasta terminar este paso)**

`scripts/verificar-idiomas.mjs`:

```js
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
```

Ejecuta: build, servidor y `node scripts/verificar-idiomas.mjs`.
Esperado: falla, al menos por el hreflang de las páginas que aún no lo tienen, el sitemap y el robots.

- [ ] **Step 2: Hreflang en todas las páginas**

Toda página indexable, en los dos idiomas, debe tener `alternates: alternates('<clave>', '<lang>')` en su `metadata`. Las tareas 5-10 ya lo pusieron en sus rutas. Aquí:
- Cambia la portada española en `app/(es)/layout.js`: `alternates: { canonical: '/' }` pasa a `alternates: alternates('inicio', 'es')`.
- Busca con `grep -rn "canonical:" app` y no debe quedar ningún `canonical` suelto.

Ten en cuenta que el `metadata` del layout raíz también se aplica a las páginas hijas sin `alternates` propio; por eso cada página debe declarar el suyo.

- [ ] **Step 3: Sitemap, robots y revisiones**

`app/sitemap.js`:

```js
import { REVISIONES } from '@/lib/revisiones';
import { RUTAS, NO_INDEXABLES } from '@/lib/i18n';

const baseUrl = 'https://dastanxtech.com';
const PRIORIDAD = {
  inicio: ['weekly', 1], servicios: ['monthly', 0.9], disenoWeb: ['monthly', 0.8], auditoria: ['monthly', 0.8], aeo: ['monthly', 0.8],
  blog: ['weekly', 0.6], blogAuditamos: ['monthly', 0.6], blog5Senales: ['monthly', 0.6], blogAeo: ['monthly', 0.6], privacidad: ['yearly', 0.2],
};
const absoluta = (ruta) => `${baseUrl}${ruta === '/' ? '' : ruta}`;

// Cada página aparece en los dos idiomas, y cada entrada declara su pareja (hreflang en el sitemap)
export default function sitemap() {
  return Object.entries(RUTAS)
    .filter(([clave]) => !NO_INDEXABLES.includes(clave))
    .flatMap(([clave, r]) => ['es', 'en'].map((lang) => ({
      url: absoluta(r[lang]),
      lastModified: new Date(REVISIONES[r[lang]]),
      changeFrequency: PRIORIDAD[clave][0],
      priority: PRIORIDAD[clave][1],
      alternates: { languages: { es: absoluta(r.es), en: absoluta(r.en) } },
    })));
}
```

Ojo: la entrada de `/` antes tenía la URL `https://dastanxtech.com`, sin barra. `absoluta('/')` mantiene ese formato.

En `app/robots.js`: `disallow: ['/vip', '/en/vip', '/api', '/admin']`.

En `lib/revisiones.js`, añade una entrada por cada URL en inglés, con la fecha del día en que se escribió su texto (`'2026-10-02'` o la real). La verificación usa `new Date(REVISIONES[…])` y un `undefined` daría `Invalid Date`.

- [ ] **Step 4: `public/llms.txt`**

Añade al final de la sección principal, antes de `## Optional`:

```markdown
## English

DASTAN X-TECH is also available in English. Digital and AI consulting for small businesses, fully remote, delivered in English or Spanish.

- [Web Design](https://dastanxtech.com/en/services/web-design): from 100 USD.
- [Digital Business Audit](https://dastanxtech.com/en/services/digital-business-audit): from 200 USD.
- [AI Search Optimization (AEO)](https://dastanxtech.com/en/services/aeo): from 150 USD.
- [All-in-One Package](https://dastanxtech.com/en/services): all three for 400 USD.
- [Free SEO Report](https://dastanxtech.com/en): score from 0 to 100 and the 5 most urgent fixes, as a PDF on WhatsApp.
- [What is AEO](https://dastanxtech.com/en/blog/what-is-aeo) · [5 signs your website is losing customers](https://dastanxtech.com/en/blog/5-signs-your-website-is-losing-customers)
```

- [ ] **Step 5: Ejecutar la verificación**

Ejecuta: build, servidor, `node scripts/verificar-idiomas.mjs` y `node scripts/instantanea-rutas.mjs comparar`.

Esperado: `Todo correcto`. La instantánea solo debe mostrar diferencias en `canonical` si el formato cambió. Si aparecen, se revisan una a una: el canonical del español no debe cambiar.

Si la búsqueda de español da positivos:
- si es texto sin traducir, se traduce;
- si es un nombre propio, se añade a `PERMITIDOS`, justificándolo en el commit.

- [ ] **Step 6: Commit**

```bash
git add -A app lib public scripts
git commit -m "Hreflang, sitemap, robots y llms.txt con la versión en inglés"
```

---

### Task 14: Comprobación final completa y revisión de Dastan

**Files:**
- Ninguno nuevo; solo correcciones que salgan de la revisión.

- [ ] **Step 1: Todo verde**

```bash
npm test && npm run lint && npm run build
```

Con el servidor arrancado:

```bash
node scripts/verificar-idiomas.mjs && node scripts/instantanea-rutas.mjs comparar
```

Esperado: todo pasa.

- [ ] **Step 2: Capturas de todas las páginas en inglés**

Con Python Playwright desde el scratchpad, captura las 11 URLs en inglés a 1280, 390 y 320 px de ancho, a página completa.

Para cada una, comprueba con `document.documentElement.scrollWidth <= innerWidth` que no hay scroll lateral.

Revisa las capturas: el diseño debe ser idéntico al español, sin textos cortados y con la cabecera en una línea en móvil, incluido el selector ES | EN.

- [ ] **Step 3: Recorrido completo como cliente en inglés**

Con Playwright y `locale='en-US'`, sigue este recorrido:
1. Abre `/` y comprueba que sale el aviso.
2. Pulsa «View in English» → `/en`.
3. Ve a `/en/services/web-design`.
4. Abre el chat: está en inglés.
5. Pulsa «Get my free SEO report»: el formulario sale en inglés. No lo envíes.
6. Pulsa ES en la cabecera → `/servicios/diseno-web`.

- [ ] **Step 4: Revisión de Dastan**

Prepara para Dastan:
- la lista de URLs en inglés;
- las capturas;
- un resumen de los nombres y frases clave.

Él revisa los textos en inglés en local, con `next start` en el puerto 3107. Aplica sus correcciones en los archivos `contenido/*.en.js` y en los artículos, y vuelve al paso 1.

- [ ] **Step 5: Publicar (solo con su visto bueno)**

```bash
git push origin mejoras-auditoria-360
git checkout main && git merge --ff-only mejoras-auditoria-360 && git push origin main && git checkout mejoras-auditoria-360
```

Después, con la web en vivo, ejecuta `node scripts/verificar-idiomas.mjs https://dastanxtech.com`. Recomienda a Dastan:
- enviar el sitemap de nuevo en Google Search Console y en Bing Webmaster;
- pedir la indexación de `/en`.
