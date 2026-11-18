import MigasJsonLd from '@/components/MigasJsonLd';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

const metadata = {
  // Under 70 characters so it isn't cut off in search results
  title: 'From 77 to 91: our website through our SEO report | DASTAN X-TECH',
  description: 'We ran dastanxtech.com through our SEO report three times: what it found, what we fixed and how we went from 77 to 91 out of 100.',
  alternates: alternates('blogDiagnosticoSeo', 'en'),
  openGraph: {
    title: 'From 77 to 91: our website through our SEO report',
    description: 'Three passes of our SEO report on dastanxtech.com: what it found each time and what we fixed.',
    url: 'https://dastanxtech.com/en/blog/our-website-seo-report',
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
