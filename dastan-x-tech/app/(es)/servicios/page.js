import Servicios from '@/components/paginas/Servicios';
import t from '@/contenido/servicios.es';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

const metadata = {
  title: t.metadata.title,
  description: t.metadata.description,
  keywords: t.metadata.keywords,
  alternates: alternates('servicios', 'es'),
  openGraph: {
    title: t.metadata.ogTitle,
    description: t.metadata.ogDescription,
    url: 'https://dastanxtech.com/servicios',
    siteName: 'DASTAN X-TECH',
    locale: 'es_US',
    type: 'website',
  },
};
export const generateMetadata = conImagenHeredada(metadata);

// /servicios: el diseño está en components/paginas/Servicios.jsx y los textos en contenido/servicios.es.js
export default function ServiciosPage() {
  return <Servicios t={t} lang="es" />;
}
