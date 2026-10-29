import { alternates } from '@/lib/i18n';

export const metadata = {
  // «consultor aeo» es la búsqueda por la que ya salimos en Search Console (oct. 2026). Menos de 70 caracteres
  title: '¿Qué hace un consultor AEO? Guía con un caso real | DASTAN X-TECH',
  description: 'Qué revisa un consultor AEO para que ChatGPT, Gemini y Perplexity recomienden tu negocio, con nuestra web de ejemplo: nivel 4 en Is It Agent Ready de Cloudflare.',
  keywords: ['Consultor AEO', 'Qué hace un consultor AEO', 'Answer Engine Optimization', 'Is It Agent Ready', 'Cómo aparecer en ChatGPT'],
  alternates: alternates('blogConsultorAeo', 'es'),
};

export default function BlogPostLayout({ children }) {
  return children;
}
