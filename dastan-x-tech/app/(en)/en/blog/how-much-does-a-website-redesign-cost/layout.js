import MigasJsonLd from '@/components/MigasJsonLd';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

const metadata = {
  title: 'How much does a website redesign cost in 2026? | DASTAN X-TECH',
  description: 'Real prices to redesign a small business website in 2026: 100 USD, ready in under 48 hours, or 49 USD for urgent fixes. What’s included and what’s extra.',
  alternates: alternates('blogPrecioWeb', 'en'),
  openGraph: {
    title: 'How much does a website redesign cost in 2026?',
    description: '100 USD and ready in under 48 hours, or 49 USD to fix the most urgent issues. What the price includes and what costs extra.',
    url: 'https://dastanxtech.com/en/blog/how-much-does-a-website-redesign-cost',
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
