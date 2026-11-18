import MigasJsonLd from '@/components/MigasJsonLd';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

const metadata = {
  title: '5 signs your website is losing you customers | DASTAN X-TECH',
  description: 'The 5 most common signs that make a visitor leave without booking or buying, and what they look like fixed on our own website.',
  alternates: alternates('blog5Senales', 'en'),
  openGraph: {
    title: '5 signs your website is losing you customers',
    description: 'The 5 most common signs that make a visitor leave without booking or buying, and what they look like fixed.',
    url: 'https://dastanxtech.com/en/blog/5-signs-your-website-is-losing-customers',
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
