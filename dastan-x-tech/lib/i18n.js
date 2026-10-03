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
  blogAuditorAeo: { es: '/blog/perfeccionamos-nuestra-web-auditor-aeo', en: '/en/blog/our-website-through-our-aeo-auditor' },
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
