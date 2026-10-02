# Versión en inglés de dastanxtech.com — Diseño

Fecha: 2026-10-01 · Rama: `mejoras-auditoria-360` · Next.js 16.3.4

## Objetivo

Que una persona de habla inglesa entienda los servicios de DASTAN X-TECH y pueda contratarlos sin toparse con español: leer, preguntar a Lex, pedir el diagnóstico y pagar.

**Decidido con Dastan:**
- El servicio se entrega completo en inglés: informes, auditoría y conversaciones.
- Se traduce todo lo público: portada, servicios, las 3 páginas de servicio, el blog con sus 3 artículos, VIP, aviso legal y Lex. El panel de admin se queda solo en español.
- Detección: aviso suave y botón ES | EN. Nunca se redirige a nadie automáticamente.
- Enfoque A: el español no se mueve; el inglés va en `/en`, con direcciones en inglés. Cada página comparte un único diseño y tiene sus textos por idioma. No se instala ninguna librería.

**Éxito:**
- Las 11 páginas públicas existen en los dos idiomas y cada una enlaza con su pareja.
- Google las indexa como versiones de idioma de la misma página (hreflang).
- Un cliente en inglés completa el recorrido entero sin texto en español: portada → servicio → Lex o diagnóstico → VIP → PayPal.
- Las direcciones en español actuales siguen respondiendo exactamente igual.

## 1. Direcciones

| Clave | Español (no cambia) | Inglés |
|---|---|---|
| inicio | `/` | `/en` |
| servicios | `/servicios` | `/en/services` |
| disenoWeb | `/servicios/diseno-web` | `/en/services/web-design` |
| auditoria | `/servicios/auditoria-negocio` | `/en/services/digital-business-audit` |
| aeo | `/servicios/posicionamiento-aeo` | `/en/services/aeo` |
| blog | `/blog` | `/en/blog` |
| blogAuditamos | `/blog/auditamos-nuestra-propia-web` | `/en/blog/we-audited-our-own-website` |
| blog5Senales | `/blog/5-senales-web-cuesta-clientes` | `/en/blog/5-signs-your-website-is-losing-customers` |
| blogAeo | `/blog/que-es-aeo` | `/en/blog/what-is-aeo` |
| privacidad | `/privacidad` | `/en/privacy` |
| vip | `/vip` | `/en/vip` |

Esta tabla vive en código en un único sitio, `lib/i18n.js`. De ahí salen:
- el botón ES | EN;
- el aviso de idioma;
- las etiquetas hreflang;
- el sitemap;
- los enlaces internos de cada idioma.

## 2. Estructura

### Dos layouts raíz (route groups)

- `app/(es)/layout.js`: el `app/layout.js` actual, movido aquí. Lleva `<html lang="es">` y los datos estructurados de la organización en español.
- `app/(en)/layout.js`: nuevo. Lleva `<html lang="en">` y los datos estructurados en inglés.
- **Las rutas en español** se mueven a `app/(es)/…` con `git mv`. Los route groups no cambian la URL, así que las direcciones públicas quedan idénticas.
- **Las rutas en inglés** van en `app/(en)/en/…`.
- **Lo que se queda en la raíz de `app/`:** `api/`, `robots.js`, `sitemap.js`, `icon.png`, `apple-icon.png` y `globals.css`. Los dos layouts importan `globals.css`.
- **`admin/`** pasa a `app/(es)/admin`, con su URL sin cambios.
- **Cambiar de idioma** recarga la página entera, porque se pasa de un layout raíz a otro. Es el comportamiento documentado de Next y es aceptable.
- **404:** con dos layouts raíz no hay uno común. Se añade `app/global-not-found.js`, que necesita `experimental.globalNotFound` en `next.config.mjs`. Es una página 404 sencilla y bilingüe con enlaces a `/` y `/en`.

### Diseño compartido y textos por idioma

- **Cada página de servicio, la portada, `/servicios`, VIP y privacidad:**
  - El diseño pasa a un componente compartido, `components/paginas/<Pagina>.jsx`, que recibe `t` (los textos) y `lang`.
  - Los textos van en `contenido/<pagina>.es.js` y `contenido/<pagina>.en.js`.
  - La ruta de cada idioma (`page.js`) solo importa sus textos y renderiza el componente.
  - Las preguntas frecuentes y sus datos estructurados FAQPage salen del mismo texto, así que nunca se descuadran.
- **Metadatos:** título, descripción, canonical y Open Graph van en cada `layout.js` o `page.js` de cada idioma. En inglés, `locale: 'en_US'`.
- **Artículos del blog:** son casi solo texto, así que cada idioma tiene su propio `page.js` con el mismo formato y los mismos estilos. El índice `/blog` y `/en/blog` lista los artículos de su idioma.
- **Componentes comunes:** `SiteHeader`, `SiteFooter`, `Brand`, `ChatWidget` y `GlobalChatWidget` reciben `lang`. Sus textos cortos van en un diccionario dentro de cada componente.
- **Color de la barra del navegador:** los layouts de `servicios` y `blog` que lo fijan (`themeColor`) se replican en sus rutas en inglés.

## 3. Cambio de idioma

**Botón ES | EN:**
- Va en la cabecera de la portada (`.nav`) y en `SiteHeader`, junto a WhatsApp, en ordenador y en móvil.
- Es un enlace `<a href={equivalente} hrefLang lang>` a la página equivalente en el otro idioma.
- El idioma actual se marca y no es un enlace.
- En móvil, el botón es compacto, de dos letras.

**Aviso de idioma** (`components/AvisoIdioma.jsx`, client):
- Si el primer idioma del navegador (`navigator.languages[0]`) es inglés y la página está en español, muestra una barra fina: «This page is also in English → View in English ✕».
- Al revés igual: «Esta página también está en español → Ver en español ✕».
- Al cerrarlo se guarda en `localStorage`, envuelto en try/catch; si falla, el aviso simplemente vuelve a salir.
- Nunca redirige.
- No se muestra en `/vip` ni en `/en/vip`: el cliente llega ahí con un enlace en su idioma.

**No se traduce:** DASTAN X-TECH, Lex, el número de WhatsApp ni los precios en USD.

## 4. Lex, contactos y pagos

**Lex:**
- `ChatWidget` recibe `lang` y muestra en inglés el saludo, los botones, el formulario del diagnóstico y los errores.
- Envía `lang` a `/api/chat`.

**`/api/chat`:**
- Con `lang: 'en'`, el prompt indica responder en inglés por defecto (si el usuario escribe en español, responde en español) y usar los nombres en inglés y las URLs `/en/...`.
- Precios y reglas: los mismos que hoy.

**Contactos:**
- `/api/leads` no cambia.
- El widget envía `origen` con el sufijo ` · EN` desde las páginas en inglés, y así se ve en el admin.
- No hay cambios en la base de datos.

**WhatsApp:**
- Los mensajes prellenados (`wa.me/...?text=`) salen en inglés en las páginas en inglés.
- El enlace del pie y de la cabecera no lleva texto y no cambia.

**VIP:**
- `/en/vip` usa el mismo componente con textos en inglés.
- Mismos botones y cuenta de PayPal, mismos precios y mismo `/api/vip/cupon`.
- Los mensajes de WhatsApp de las tarjetas, en inglés.

## 5. Google y las IAs

- **hreflang:** cada página declara `alternates.canonical` (ella misma) y `alternates.languages` con `es`, `en` y `x-default` (que apunta al español). Lo genera un helper de `lib/i18n.js`.
- **Sitemap:** cada entrada lleva `alternates.languages`. Se añaden las 10 URLs en inglés indexables; `/en/vip` queda fuera, como `/vip`.
- **`robots.js`:** añade `/en/vip` a `disallow`. `/en/vip` lleva además `robots: noindex`.
- **`lib/revisiones.js`:** añade las fechas de las rutas en inglés.
- **Datos estructurados** (Organization, Service, FAQPage, BlogPosting) en inglés en las páginas en inglés, con `inLanguage`.
- **`public/llms.txt`:** añade una sección «English» con resumen y URLs `/en`.
- **Imagen al compartir:** `app/(en)/en/opengraph-image.jsx` con el mismo diseño y el texto en inglés. La española pasa a `app/(es)/opengraph-image.jsx`.

## 6. Traducción

- En inglés natural para un cliente de EE. UU., no palabra por palabra. Mismos datos, precios y promesas; no se añade nada que no diga la versión en español.
- Dastan revisa los textos en inglés antes de publicar.

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

## 7. Pruebas antes de enseñarlo

1. `npm run lint` y `npm run build` sin errores.
2. Las 11 rutas en español y las 11 en inglés responden 200. Una URL inventada da 404 con la página bilingüe.
3. Las direcciones en español devuelven el mismo contenido que antes del cambio (comparación de títulos y h1).
4. Cada página tiene el `lang` correcto en `<html>`, su canonical y sus tres hreflang.
5. El botón ES | EN de cada página lleva a su pareja.
6. Búsqueda automática de restos de español en el HTML de las páginas en inglés: `¿`, `ñ`, `á é í ó ú` y palabras comunes (`para`, `nuestro`, `negocio`), con revisión manual de los positivos.
7. Capturas de cada página en inglés en ordenador (1280) y en móvil (390 y 320) sin scroll lateral, más el botón y el aviso de idioma.
8. Lex en `/en`: el saludo en inglés y una pregunta respondida en inglés con nombres y URLs en inglés.
9. VIP en inglés: el cupón se aplica y los botones de PayPal llevan los mismos importes.
10. El sitemap y `llms.txt` incluyen las URLs en inglés.

## Fuera de alcance

- Traducir el panel de admin.
- Traducir la caza del Escritorio o la demo de Cloudflare.
- Más idiomas. La tabla de `lib/i18n.js` lo permitiría más adelante.
- Detectar el país o cambiar la moneda.

## Riesgos

- **Mover las rutas en español a `(es)`** toca muchos archivos. Se hace con `git mv` en un paso aparte y se comprueba que las URLs y su HTML no cambian antes de añadir el inglés.
- **`global-not-found` es experimental en Next 16.** Si diera problemas en el build, la alternativa es un `not-found.js` en cada layout raíz.
- **Dos textos por página pueden desincronizarse** con el tiempo. Lo mitigan el diseño compartido y la regla de cambiar los dos archivos de textos a la vez, que queda en un comentario de cabecera de cada archivo de `contenido/`.
