import MigasJsonLd from '@/components/MigasJsonLd';
import t from '@/contenido/auditoria-gratis.en';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

const metadata = {
  title: t.metadata.title,
  description: t.metadata.description,
  keywords: t.metadata.keywords,
  alternates: alternates('auditoriaGratis', 'en'),
  openGraph: {
    title: t.metadata.ogTitle,
    description: t.metadata.ogDescription,
    url: 'https://dastanxtech.com/en/free-website-audit',
    siteName: 'DASTAN X-TECH',
    locale: 'en_US',
    type: 'website',
  },
};
export const generateMetadata = conImagenHeredada(metadata);

// Servicio gratuito: oferta con precio 0
const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: t.servicioJsonLd.name,
  provider: {
    '@type': 'Organization',
    '@id': 'https://dastanxtech.com/#organization',
    name: 'DASTAN X-TECH',
    url: 'https://dastanxtech.com',
  },
  areaServed: t.servicioJsonLd.areaServed,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' },
  description: t.servicioJsonLd.description,
  url: 'https://dastanxtech.com/en/free-website-audit',
};

export default function FreeAuditLayout({ children }) {
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
