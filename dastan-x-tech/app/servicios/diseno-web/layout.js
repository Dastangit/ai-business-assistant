export const metadata = {
  title: 'Diseño web para negocios y pymes | DASTAN X-TECH',
  description: 'Renovamos la web de tu negocio con tu marca real, tus servicios, tus precios y tu WhatsApp a un toque.',
  keywords: ['Diseño web para pymes', 'Diseño web para negocios locales', 'Diseño web profesional', 'Posicionamiento AEO'],
  alternates: {
    canonical: '/servicios/diseno-web',
  },
  openGraph: {
    title: 'Diseño web para negocios y pymes | DASTAN X-TECH',
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
  areaServed: ['Colombia', 'México', 'Estados Unidos'],
  offers: {
    '@type': 'Offer',
    priceSpecification: { '@type': 'PriceSpecification', minPrice: 100, priceCurrency: 'USD' },
  },
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