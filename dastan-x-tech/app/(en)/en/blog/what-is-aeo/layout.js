import { alternates } from '@/lib/i18n';

export const metadata = {
  title: 'What is AEO, explained with a real example | DASTAN X-TECH',
  description: 'What Answer Engine Optimization (AEO) is, why it’s already happening and what the businesses AI recommends have in common, with a real example from Gemini.',
  keywords: ['What is AEO', 'Answer Engine Optimization', 'AI search optimization', 'SEO for ChatGPT and Gemini'],
  alternates: alternates('blogAeo', 'en'),
  openGraph: {
    title: 'What is AEO, explained with a real example',
    description: 'What Answer Engine Optimization is, why it’s already happening and what the businesses AI recommends have in common.',
    url: 'https://dastanxtech.com/en/blog/what-is-aeo',
    siteName: 'DASTAN X-TECH',
    locale: 'en_US',
    type: 'article',
  },
};

export default function BlogPostLayout({ children }) {
  return children;
}
