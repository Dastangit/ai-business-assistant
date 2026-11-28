import MigasJsonLd from '@/components/MigasJsonLd';
import t from '@/contenido/aeo.es';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

const metadata = {
  title: t.metadata.title,
  description: t.metadata.description,
  alternates: alternates('aeo', 'es'),
  openGraph: {
    title: t.metadata.ogTitle,
    description: t.metadata.ogDescription,
    url: 'https://dastanxtech.com/servicios/posicionamiento-aeo',
    siteName: 'DASTAN X-TECH',
    locale: 'es_MX',
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
    url: 'https://dastanxtech.com',
  },
  areaServed: t.servicioJsonLd.areaServed,
  offers: {
    '@type': 'Offer',
    priceSpecification: { '@type': 'PriceSpecification', minPrice: 150, priceCurrency: 'USD' },
  },
  description: t.servicioJsonLd.description,
  url: 'https://dastanxtech.com/servicios/posicionamiento-aeo',
};

export default function AeoLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <MigasJsonLd lang="es" seccion="servicios" ruta={metadata.alternates.canonical} titulo={serviceJsonLd.name} />
      {children}
    </>
  );
}
