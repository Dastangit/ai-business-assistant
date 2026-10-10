/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dos layouts raíz (español e inglés): el 404 de URLs inexistentes lo da app/global-not-found.js
  experimental: { globalNotFound: true },
  // Cabeceras Link (RFC 8288) en las portadas: les dicen a los agentes de IA dónde está la
  // descripción de la web (llms.txt) sin tener que leer el HTML. Las pide el escáner de agentes de Cloudflare.
  headers() {
    const enlaces = '</llms.txt>; rel="describedby"; type="text/markdown", </sitemap.xml>; rel="sitemap"; type="application/xml"';
    return ['/', '/en'].map((source) => ({ source, headers: [{ key: 'Link', value: enlaces }] }));
  },
  // El informe AEO de ejemplo es el HTML que genera el auditor, tal cual (public/ejemplo-informe-aeo.html),
  // servido en una dirección limpia. Para actualizarlo, se copia encima el informe nuevo.
  rewrites() {
    // Lo mismo con las muestras para clientes (public/muestras.html) y sus dos ejemplos, hechos con
    // un negocio ficticio: el diagnóstico SEO y la Auditoría Completa que genera el kit.
    return [
      { source: '/ejemplo-informe-aeo', destination: '/ejemplo-informe-aeo.html' },
      { source: '/muestras', destination: '/muestras.html' },
      { source: '/ejemplo-diagnostico-seo', destination: '/ejemplo-diagnostico-seo.html' },
      { source: '/ejemplo-auditoria-completa', destination: '/ejemplo-auditoria-completa.html' },
    ];
  },
  // La página de la auditoría cambió de dirección: los enlaces antiguos (Instagram, Google) siguen funcionando
  redirects() {
    return [
      {
        source: '/servicios/auditoria-360',
        destination: '/servicios/auditoria-negocio',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
