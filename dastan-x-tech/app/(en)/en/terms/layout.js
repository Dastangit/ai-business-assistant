import t from '@/contenido/condiciones.en';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

const metadata = {
  title: t.metadata.title,
  description: t.metadata.description,
  alternates: alternates('condiciones', 'en'),
  openGraph: {
    title: t.metadata.title,
    description: t.metadata.description,
    url: 'https://dastanxtech.com/en/terms',
    siteName: 'DASTAN X-TECH',
    locale: 'en_US',
    type: 'website',
  },
};
export const generateMetadata = conImagenHeredada(metadata);

export default function TermsLayout({ children }) {
  return children;
}
