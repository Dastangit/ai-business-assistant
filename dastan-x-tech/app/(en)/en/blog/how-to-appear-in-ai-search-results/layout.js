import MigasJsonLd from '@/components/MigasJsonLd';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

// Semrush (Nov 22, 2026): «how to appear in ai search results», US 320/month, KD 19.
// Angle: what each AI search engine reads and how to check it; the common steps live in blogChatgpt.
const metadata = {
  title: 'How to appear in AI search results (2026 guide) | DASTAN X-TECH',
  description: 'Where Google AI Overviews, ChatGPT, Perplexity, Copilot and Gemini get their answers, how to check whether your business appears in each one and what to set up.',
  alternates: alternates('blogResultadosIa', 'en'),
  openGraph: {
    title: 'How to appear in AI search results',
    description: 'Where each AI search engine gets its answers and how to check whether your business appears.',
    url: 'https://dastanxtech.com/en/blog/how-to-appear-in-ai-search-results',
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
