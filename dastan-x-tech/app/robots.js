export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/vip', '/api', '/admin'],
        // Preferencias de uso para la IA (contentsignals.org): aparecer en buscadores y en las
        // respuestas de los asistentes, y también permitir el entrenamiento, que es lo que ya
        // permitía este robots.txt al no bloquear a ningún crawler de entrenamiento.
        other: {
          'Content-Signal': 'search=yes, ai-input=yes, ai-train=yes',
        },
      },
    ],
    sitemap: 'https://dastanxtech.com/sitemap.xml',
  };
}