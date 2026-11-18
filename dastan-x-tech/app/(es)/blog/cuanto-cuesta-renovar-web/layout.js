import MigasJsonLd from '@/components/MigasJsonLd';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

const metadata = {
  title: '¿Cuánto cuesta renovar una web en 2026? | DASTAN X-TECH',
  description: 'Precios reales para renovar la web de un negocio en 2026: 100 USD y lista en menos de 48 horas, o 49 USD por lo urgente. Qué incluye y qué se cobra aparte.',
  alternates: alternates('blogPrecioWeb', 'es'),
  openGraph: {
    title: '¿Cuánto cuesta renovar una web en 2026?',
    description: '100 USD y lista en menos de 48 horas, o 49 USD por arreglar lo más urgente. Qué incluye el precio y qué se cobra aparte.',
    url: 'https://dastanxtech.com/blog/cuanto-cuesta-renovar-web',
    siteName: 'DASTAN X-TECH',
    locale: 'es_US',
    type: 'article',
  },
};
export const generateMetadata = conImagenHeredada(metadata);

export default function BlogPostLayout({ children }) {
  return (
    <>
      <MigasJsonLd lang="es" seccion="blog" ruta={metadata.alternates.canonical} titulo={metadata.title} />
      {children}
    </>
  );
}
