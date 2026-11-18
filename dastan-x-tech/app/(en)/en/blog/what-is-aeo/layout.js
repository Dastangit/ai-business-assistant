import MigasJsonLd from '@/components/MigasJsonLd';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

const metadata = {
  title: 'What is AEO (and GEO)? AEO vs SEO, with a real example | DASTAN X-TECH',
  description: 'What AEO is, how it differs from GEO and SEO, and what the businesses AI recommends have in common, with a real example from Gemini.',
  alternates: alternates('blogAeo', 'en'),
  openGraph: {
    title: 'What is AEO (and GEO)? AEO vs SEO, with a real example',
    description: 'What Answer Engine Optimization is, why it’s already happening and what the businesses AI recommends have in common.',
    url: 'https://dastanxtech.com/en/blog/what-is-aeo',
    siteName: 'DASTAN X-TECH',
    locale: 'en_US',
    type: 'article',
  },
};
export const generateMetadata = conImagenHeredada(metadata);

export default function BlogPostLayout({ children }) {
  return (
    <>
      <MigasJsonLd lang="en" seccion="blog" ruta={metadata.alternates.canonical} titulo={metadata.title} />
      {children}
    </>
  );
}
