import { REVISIONES } from '@/lib/revisiones';
import { RUTAS, NO_INDEXABLES } from '@/lib/i18n';

const baseUrl = 'https://dastanxtech.com';
const PRIORIDAD = {
  inicio: ['weekly', 1], servicios: ['monthly', 0.9], disenoWeb: ['monthly', 0.8], auditoria: ['monthly', 0.8], aeo: ['monthly', 0.8],
  blog: ['weekly', 0.6], blogAuditamos: ['monthly', 0.6], blog5Senales: ['monthly', 0.6], blogAeo: ['monthly', 0.6], blogAuditorAeo: ['monthly', 0.6], blogPrecioWeb: ['monthly', 0.6], privacidad: ['yearly', 0.2],
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
