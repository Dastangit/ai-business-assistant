export const metadata = {
  title: 'Diseño Web Profesional y Arquitectura SEO | DASTAN X-TECH',
  description: 'Diseño de páginas web para negocios y pymes, optimizadas para SEO local y motores de respuesta AEO. Convierte visitas en clientes.',
  keywords: ['Diseño web profesional', 'Arquitectura SEO', 'Posicionamiento AEO', 'Diseño web para pymes'],
  alternates: {
    canonical: '/servicios/diseno-web',
  },
  openGraph: {
    title: 'Diseño Web Profesional y Arquitectura SEO | DASTAN X-TECH',
    description: 'Diseño de páginas web para negocios y pymes, optimizadas para SEO local y motores de respuesta AEO.',
    url: 'https://dastanxtech.com/servicios/diseno-web',
    siteName: 'DASTAN X-TECH',
    locale: 'es_US',
    type: 'website',
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Diseño Web Profesional (Cazador de Webs)',
  serviceType: 'Diseño y desarrollo web para pymes',
  provider: {
    '@type': 'ProfessionalService',
    name: 'DASTAN X-TECH',
    url: 'https://dastanxtech.com',
  },
  areaServed: ['Colombia', 'México'],
  description: 'Renovamos la página web de negocios y pymes con arquitectura optimizada para SEO local y motores de respuesta de IA (AEO), manteniendo la marca real del cliente.',
  url: 'https://dastanxtech.com/servicios/diseno-web',
};

export default function DisenoWebLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {children}
    </>
  );
}