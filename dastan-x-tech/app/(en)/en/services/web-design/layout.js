import t from '@/contenido/diseno-web.en';
import { alternates } from '@/lib/i18n';

export const metadata = {
  title: t.metadata.title,
  description: t.metadata.description,
  keywords: t.metadata.keywords,
  alternates: alternates('disenoWeb', 'en'),
  openGraph: {
    title: t.metadata.ogTitle,
    description: t.metadata.ogDescription,
    url: 'https://dastanxtech.com/en/services/web-design',
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
    priceSpecification: { '@type': 'PriceSpecification', minPrice: 100, priceCurrency: 'USD' },
  },
  description: t.servicioJsonLd.description,
  url: 'https://dastanxtech.com/en/services/web-design',
};

export default function WebDesignLayout({ children }) {
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
