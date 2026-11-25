import MigasJsonLd from '@/components/MigasJsonLd';
import t from '@/contenido/auditoria-gratis.es';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

const metadata = {
  title: t.metadata.title,
  description: t.metadata.description,
  keywords: t.metadata.keywords,
  alternates: alternates('auditoriaGratis', 'es'),
  openGraph: {
    title: t.metadata.ogTitle,
    description: t.metadata.ogDescription,
    url: 'https://dastanxtech.com/auditoria-web-gratis',
    siteName: 'DASTAN X-TECH',
    locale: 'es_US',
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
  url: 'https://dastanxtech.com/auditoria-web-gratis',
};

export default function AuditoriaGratisLayout({ children }) {
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
