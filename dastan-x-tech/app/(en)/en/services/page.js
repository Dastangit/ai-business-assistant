import Servicios from '@/components/paginas/Servicios';
import t from '@/contenido/servicios.en';
import { alternates } from '@/lib/i18n';

export const metadata = {
  title: t.metadata.title,
  description: t.metadata.description,
  keywords: t.metadata.keywords,
  alternates: alternates('servicios', 'en'),
  openGraph: {
    title: t.metadata.ogTitle,
    description: t.metadata.ogDescription,
    url: 'https://dastanxtech.com/en/services',
    siteName: 'DASTAN X-TECH',
    locale: 'en_US',
    type: 'website',
  },
};

// /en/services: same layout as /servicios (components/paginas/Servicios.jsx), copy in contenido/servicios.en.js
export default function ServicesPage() {
  return <Servicios t={t} lang="en" />;
}
