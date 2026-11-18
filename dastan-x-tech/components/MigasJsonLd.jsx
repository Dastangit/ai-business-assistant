// BreadcrumbList para Google y la IA: Inicio › Sección › Página. Solo datos estructurados: no se ve en la página.
// ruta: canonical relativo de la página (el de alternates()). titulo: su title; se quita el sufijo de la marca.
const BASE = 'https://dastanxtech.com';

const SECCIONES = {
  es: { inicio: ['Inicio', '/'], blog: ['Blog', '/blog'], servicios: ['Servicios', '/servicios'] },
  en: { inicio: ['Home', '/en'], blog: ['Blog', '/en/blog'], servicios: ['Services', '/en/services'] },
};

export default function MigasJsonLd({ lang, seccion, ruta, titulo }) {
  const s = SECCIONES[lang];
  const pasos = [s.inicio, s[seccion], [titulo.replace(/\s*\|\s*DASTAN X-TECH$/, ''), ruta]];
  const json = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: pasos.map(([name, url], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: BASE + url,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
