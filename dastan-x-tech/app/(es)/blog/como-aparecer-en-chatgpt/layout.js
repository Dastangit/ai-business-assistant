import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

// Búsquedas que salieron en el autocompletado de Google (17-nov-2026): «cómo aparecer en chatgpt»,
// «cómo aparecer en búsquedas de chatgpt», «seo para chatgpt». Título de menos de 70 caracteres.
const metadata = {
  title: 'Cómo hacer que tu negocio aparezca en ChatGPT | DASTAN X-TECH',
  description: 'Los 7 pasos para que ChatGPT, Gemini y Perplexity recomienden tu negocio: cómo comprobar si ya te nombran, qué revisar en tu web y qué no funciona.',
  keywords: ['Cómo aparecer en ChatGPT', 'Cómo aparecer en búsquedas de ChatGPT', 'SEO para ChatGPT', 'SEO para IA', 'Que ChatGPT recomiende mi negocio'],
  alternates: alternates('blogChatgpt', 'es'),
  openGraph: {
    title: 'Cómo hacer que tu negocio aparezca en ChatGPT',
    description: 'Los 7 pasos para que ChatGPT, Gemini y Perplexity recomienden tu negocio.',
    url: 'https://dastanxtech.com/blog/como-aparecer-en-chatgpt',
    siteName: 'DASTAN X-TECH',
    locale: 'es_US',
    type: 'article',
  },
};
export const generateMetadata = conImagenHeredada(metadata);

export default function BlogPostLayout({ children }) {
  return children;
}
