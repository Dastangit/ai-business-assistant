import { alternates } from '@/lib/i18n';

export const metadata = {
  title: 'How much does a website redesign cost in 2026? | DASTAN X-TECH',
  description: 'Real prices to redesign a small business website in 2026: from 100 USD and ready in under 48 hours, or 49 USD to fix the most urgent issues. What’s included and what changes the price.',
  keywords: ['Website redesign cost', 'How much does a website cost', 'Small business web design price', 'Website redesign price'],
  alternates: alternates('blogPrecioWeb', 'en'),
  openGraph: {
    title: 'How much does a website redesign cost in 2026?',
    description: 'From 100 USD and ready in under 48 hours, or 49 USD to fix the most urgent issues. What’s included and what changes the price.',
    url: 'https://dastanxtech.com/en/blog/how-much-does-a-website-redesign-cost',
    siteName: 'DASTAN X-TECH',
    locale: 'en_US',
    type: 'article',
  },
};

export default function BlogPostLayout({ children }) {
  return children;
}
