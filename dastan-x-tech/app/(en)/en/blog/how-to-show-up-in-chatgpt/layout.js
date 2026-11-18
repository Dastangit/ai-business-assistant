import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

// Searches from Google autocomplete (Nov 17, 2026): «how to get your business to show up in chatgpt»,
// «aeo for small business». Title under 70 characters.
const metadata = {
  title: 'How to get your business to show up in ChatGPT | DASTAN X-TECH',
  description: 'The 7 steps to get ChatGPT, Gemini and Perplexity to recommend your business: how to check whether they already mention you, what to fix and what doesn’t work.',
  keywords: ['How to show up in ChatGPT', 'Get your business recommended by ChatGPT', 'SEO for ChatGPT', 'SEO for AI', 'AEO for small business'],
  alternates: alternates('blogChatgpt', 'en'),
  openGraph: {
    title: 'How to get your business to show up in ChatGPT',
    description: 'The 7 steps to get ChatGPT, Gemini and Perplexity to recommend your business.',
    url: 'https://dastanxtech.com/en/blog/how-to-show-up-in-chatgpt',
    siteName: 'DASTAN X-TECH',
    locale: 'en_US',
    type: 'article',
  },
};
export const generateMetadata = conImagenHeredada(metadata);

export default function BlogPostLayout({ children }) {
  return children;
}
