import MigasJsonLd from '@/components/MigasJsonLd';
import t from '@/contenido/diseno-web-abogados.en';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

const metadata = {
  title: t.metadata.title,
  description: t.metadata.description,
  alternates: alternates('disenoWebAbogados', 'en'),
  openGraph: {
    title: t.metadata.ogTitle,
    description: t.metadata.ogDescription,
    url: 'https://dastanxtech.com/en/services/web-design/lawyers',
    siteName: 'DASTAN X-TECH',
    locale: 'en_US',
    type: 'website',
  },
};
export const generateMetadata = conImagenHeredada(metadata);

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: t.servicioJsonLd.name,
  serviceType: t.servicioJsonLd.serviceType,
  provider: {
    '@type': 'Organization',
    '@id': 'https://dastanxtech.com/#organization',
    name: 'DASTAN X-TECH',
    url: 'https://dastanxtech.com/en',
  },
  areaServed: t.servicioJsonLd.areaServed,
  offers: {
    '@type': 'Offer',
    priceSpecification: { '@type': 'PriceSpecification', minPrice: 100, priceCurrency: 'USD' },
  },
  description: t.servicioJsonLd.description,
  url: 'https://dastanxtech.com/en/services/web-design/lawyers',
};

export default function WebDesignLawyersLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <MigasJsonLd lang="en" seccion="servicios" ruta={metadata.alternates.canonical} titulo={serviceJsonLd.name} />
      {children}
    </>
  );
}
