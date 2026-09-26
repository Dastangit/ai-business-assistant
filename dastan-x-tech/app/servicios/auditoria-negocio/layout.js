export const metadata = {
  title: 'Auditoría Completa de Negocio | DASTAN X-TECH',
  description: 'Descubrimos dónde tu negocio pierde tiempo y clientes, con evidencia real, no suposiciones. Informe con presencia digital, madurez tecnológica y plan de acción.',
  keywords: ['Auditoría de negocio', 'Auditoría completa de negocio', 'Auditoría SEO', 'Diagnóstico de negocio', 'Consultoría de IA'],
  alternates: {
    canonical: '/servicios/auditoria-negocio',
  },
  openGraph: {
    title: 'Auditoría Completa de Negocio | DASTAN X-TECH',
    description: 'Diagnóstico completo de presencia digital y procesos internos, con evidencia real y un plan de acción por fases.',
    url: 'https://dastanxtech.com/servicios/auditoria-negocio',
    siteName: 'DASTAN X-TECH',
    locale: 'es_US',
    type: 'website',
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Auditoría Completa de Negocio',
  serviceType: 'Auditoría de negocio y consultoría de IA',
  provider: {
    '@type': 'ProfessionalService',
    name: 'DASTAN X-TECH',
    url: 'https://dastanxtech.com',
  },
  areaServed: ['Colombia', 'México', 'Estados Unidos'],
  offers: {
    '@type': 'Offer',
    priceSpecification: { '@type': 'PriceSpecification', minPrice: 150, priceCurrency: 'USD' },
  },
  description: 'Auditoría completa de presencia digital (web, redes, ficha de Google, reseñas, competencia) y procesos internos (captación, agenda, cobro, herramientas). Entrega una nota de presencia digital, nivel de madurez tecnológica, horas y dinero recuperable al mes, y un plan de acción por fases.',
  url: 'https://dastanxtech.com/servicios/auditoria-negocio',
};

export default function AuditoriaLayout({ children }) {
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
