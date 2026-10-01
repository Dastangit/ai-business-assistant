import { REVISIONES } from '@/lib/revisiones';

export default function sitemap() {
  const baseUrl = 'https://dastanxtech.com';
  const pagina = (ruta, changeFrequency, priority) => ({
    url: `${baseUrl}${ruta}`,
    lastModified: new Date(REVISIONES[ruta]),
    changeFrequency,
    priority,
  });

  return [
    pagina('/', 'weekly', 1),
    pagina('/servicios', 'monthly', 0.9),
    pagina('/servicios/diseno-web', 'monthly', 0.8),
    pagina('/servicios/auditoria-negocio', 'monthly', 0.8),
    pagina('/servicios/posicionamiento-aeo', 'monthly', 0.8),
    pagina('/blog', 'weekly', 0.6),
    pagina('/blog/auditamos-nuestra-propia-web', 'monthly', 0.6),
    pagina('/blog/5-senales-web-cuesta-clientes', 'monthly', 0.6),
    pagina('/blog/que-es-aeo', 'monthly', 0.6),
    pagina('/privacidad', 'yearly', 0.2),
  ];
}
