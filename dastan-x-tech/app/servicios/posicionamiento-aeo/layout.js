export const metadata = {
  title: 'Posicionamiento AEO (Answer Engine Optimization) | DASTAN X-TECH',
  description: 'Preparamos tu negocio para que ChatGPT, Gemini y Perplexity te recomienden directamente, no solo Google. Estructura, reseñas y señales de confianza para motores de IA.',
  keywords: ['Posicionamiento AEO', 'Answer Engine Optimization', 'SEO para IA', 'ChatGPT recomienda mi negocio', 'Posicionamiento en inteligencia artificial'],
  alternates: {
    canonical: '/servicios/posicionamiento-aeo',
  },
  openGraph: {
    title: 'Posicionamiento AEO | DASTAN X-TECH',
    description: 'Que ChatGPT, Gemini y Perplexity recomienden tu negocio directamente, no solo Google.',
    url: 'https://dastanxtech.com/servicios/posicionamiento-aeo',
    siteName: 'DASTAN X-TECH',
    locale: 'es_US',
    type: 'website',
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Posicionamiento AEO',
  serviceType: 'Answer Engine Optimization (posicionamiento para motores de IA)',
  provider: {
    '@type': 'ProfessionalService',
    name: 'DASTAN X-TECH',
    url: 'https://dastanxtech.com',
  },
  areaServed: ['Colombia', 'México', 'Estados Unidos'],
  offers: {
    '@type': 'Offer',
    priceSpecification: { '@type': 'PriceSpecification', minPrice: 200, priceCurrency: 'USD' },
  },
  description: 'Optimizamos la estructura, contenido y señales de confianza de tu negocio para que motores de respuesta de IA como ChatGPT, Gemini y Perplexity lo recomienden directamente a sus usuarios.',
  url: 'https://dastanxtech.com/servicios/posicionamiento-aeo',
};

export default function AeoLayout({ children }) {
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
