import t from '@/contenido/auditoria.en';
import { alternates } from '@/lib/i18n';

export const metadata = {
  title: t.metadata.title,
  description: t.metadata.description,
  keywords: t.metadata.keywords,
  alternates: alternates('auditoria', 'en'),
  openGraph: {
    title: t.metadata.ogTitle,
    description: t.metadata.ogDescription,
    url: 'https://dastanxtech.com/en/services/digital-business-audit',
    siteName: 'DASTAN X-TECH',
    locale: 'en_US',
    type: 'website',
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: t.servicioJsonLd.name,
  serviceType: t.servicioJsonLd.serviceType,
  provider: {
    '@type': 'ProfessionalService',
    name: 'DASTAN X-TECH',
    url: 'https://dastanxtech.com/en',
  },
  areaServed: t.servicioJsonLd.areaServed,
  offers: {
    '@type': 'Offer',
    priceSpecification: { '@type': 'PriceSpecification', minPrice: 200, priceCurrency: 'USD' },
  },
  description: t.servicioJsonLd.description,
  url: 'https://dastanxtech.com/en/services/digital-business-audit',
};

export default function DigitalBusinessAuditLayout({ children }) {
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
