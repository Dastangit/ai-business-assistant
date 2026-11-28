import MigasJsonLd from '@/components/MigasJsonLd';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

const metadata = {
  title: 'How much does a website cost in 2026? | DASTAN X-TECH',
  description: 'How much a small business website costs in the US in 2026: DIY builders, freelancers and agencies, what changes the price, and our fixed 100 USD rate.',
  alternates: alternates('blogPrecioWeb', 'en'),
  openGraph: {
    title: 'How much does a website cost in 2026?',
    description: 'US market prices for freelancers, agencies and DIY builders, what changes the price, and our fixed rate: 100 USD, ready in under 48 hours.',
    url: 'https://dastanxtech.com/en/blog/how-much-does-a-website-cost',
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
