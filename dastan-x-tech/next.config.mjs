/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dos layouts raíz (español e inglés): el 404 de URLs inexistentes lo da app/global-not-found.js
  experimental: { globalNotFound: true },
  // Cabeceras Link (RFC 8288) en las portadas: les dicen a los agentes de IA dónde está la
  // descripción de la web (llms.txt) sin tener que leer el HTML. Las pide el escáner de agentes de Cloudflare.
  headers() {
    const enlaces = [
      '</llms.txt>; rel="describedby"; type="text/markdown"',
      '</sitemap.xml>; rel="sitemap"; type="application/xml"',
      // Descubrimiento para agentes (nivel 5 de Is It Agent Ready): catálogo de APIs (RFC 9727),
      // tarjeta del servidor MCP y descripción OpenAPI
      '</.well-known/api-catalog>; rel="api-catalog"',
      '</.well-known/mcp/server-card.json>; rel="service-desc"; type="application/json"',
      '</openapi.json>; rel="service-desc"; type="application/openapi+json"',
    ].join(', ');
    const markdown = [{ key: 'Content-Type', value: 'text/markdown; charset=utf-8' }];
    // Cabeceras de seguridad básicas para todo el sitio (SEO-006).
    // La CSP va de momento en modo Report-Only: no bloquea nada y manda los avisos a /api/csp-report
    // (logs de Vercel). Cuando pasen unos días sin avisos legítimos, cambiar la llave a
    // Content-Security-Policy. 'unsafe-inline' en scripts hace falta sin nonces (guía de CSP de Next).
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      'report-uri /api/csp-report',
    ].join('; ');
    const seguridad = [
      { key: 'Content-Security-Policy-Report-Only', value: csp },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
    ];
    return [
      { source: '/:ruta*', headers: seguridad },
      ...['/', '/en'].map((source) => ({ source, headers: [{ key: 'Link', value: enlaces }] })),
      // RFC 9727: el catálogo de APIs se sirve como linkset JSON (el archivo no tiene extensión)
      {
        source: '/.well-known/api-catalog',
        headers: [
          { key: 'Content-Type', value: 'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
      { source: '/.well-known/:ruta*', headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }] },
      { source: '/auth.md', headers: markdown },
      { source: '/.well-known/agent-skills/:skill/SKILL.md', headers: markdown },
      // El muestrario (public/muestrario) es nuestra propia web rehecha en ocho estilos: no debe
      // salir en Google ni en las respuestas de la IA confundido con la web real
      { source: '/muestrario/:ruta*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }] },
      // Las muestras para clientes usan un negocio ficticio: fuera de Google, como sus dos ejemplos
      ...['/muestras', '/muestras.html'].map((source) => ({ source, headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }] })),
      // El informe AEO real sí se indexa (está en el sitemap). El HTML lo genera el auditor y se
      // reemplaza entero al actualizarlo, así que el canonical va en cabecera y no en el archivo
      ...['/ejemplo-informe-aeo', '/ejemplo-informe-aeo.html'].map((source) => ({
        source,
        headers: [{ key: 'Link', value: '<https://dastanxtech.com/ejemplo-informe-aeo>; rel="canonical"' }],
      })),
    ];
  },
  // El informe AEO de ejemplo es el HTML que genera el auditor, tal cual (public/ejemplo-informe-aeo.html),
  // servido en una dirección limpia. Para actualizarlo, se copia encima el informe nuevo.
  rewrites() {
    // Lo mismo con las muestras para clientes (public/muestras.html) y sus dos ejemplos, hechos con
    // un negocio ficticio: el diagnóstico SEO y la Auditoría Completa que genera el kit.
    return [
      // Servidor MCP para agentes de IA (app/api/mcp/route.js)
      { source: '/mcp', destination: '/api/mcp' },
      { source: '/ejemplo-informe-aeo', destination: '/ejemplo-informe-aeo.html' },
      { source: '/muestras', destination: '/muestras.html' },
      { source: '/ejemplo-diagnostico-seo', destination: '/ejemplo-diagnostico-seo.html' },
      { source: '/ejemplo-auditoria-completa', destination: '/ejemplo-auditoria-completa.html' },
    ];
  },
  // Páginas que cambiaron de dirección: los enlaces antiguos (Instagram, Google) siguen funcionando
  redirects() {
    return [
      {
        source: '/servicios/auditoria-360',
        destination: '/servicios/auditoria-negocio',
        permanent: true,
      },
      // La guía de precios pasó de «renovar una web» a «cuánto cuesta una página web» (27-nov-2026)
      {
        source: '/blog/cuanto-cuesta-renovar-web',
        destination: '/blog/cuanto-cuesta-una-pagina-web',
        permanent: true,
      },
      // Y la versión en inglés, de «website redesign cost» a «website cost» (28-nov-2026)
      {
        source: '/en/blog/how-much-does-a-website-redesign-cost',
        destination: '/en/blog/how-much-does-a-website-cost',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
