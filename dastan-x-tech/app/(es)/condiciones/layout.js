import t from '@/contenido/condiciones.es';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

const metadata = {
  title: t.metadata.title,
  description: t.metadata.description,
  alternates: alternates('condiciones', 'es'),
  openGraph: {
    title: t.metadata.title,
    description: t.metadata.description,
    url: 'https://dastanxtech.com/condiciones',
    siteName: 'DASTAN X-TECH',
    locale: 'es_US',
    type: 'website',
  },
};
export const generateMetadata = conImagenHeredada(metadata);

export default function CondicionesLayout({ children }) {
  return children;
}
