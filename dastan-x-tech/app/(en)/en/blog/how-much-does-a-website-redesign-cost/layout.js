import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

const metadata = {
  title: 'How much does a website redesign cost in 2026? | DASTAN X-TECH',
  description: 'Real prices to redesign a small business website in 2026: 100 USD and ready in under 48 hours, or 49 USD to fix the most urgent issues. What the price includes and what costs extra.',
  keywords: ['Website redesign cost', 'How much does a website cost', 'Small business web design price', 'Website redesign price'],
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
  return children;
}
