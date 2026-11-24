import MigasJsonLd from '@/components/MigasJsonLd';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

// Semrush (19-22 nov 2026): «seo para ia» ES 480, «posicionamiento en ia» ES 140. En España se dice GEO.
// Enfoque: qué lee cada buscador con IA y cómo comprobarlo; los pasos comunes están en blogChatgpt.
const metadata = {
  title: 'Cómo aparecer en los resultados de búsqueda con IA | DASTAN X-TECH',
  description: 'De dónde sacan sus respuestas Google AI Overviews, ChatGPT, Perplexity, Copilot y Gemini, cómo comprobar si tu negocio sale en cada uno y qué ajustar. SEO para IA (GEO).',
  alternates: alternates('blogResultadosIa', 'es'),
  openGraph: {
    title: 'Cómo aparecer en los resultados de búsqueda con IA',
    description: 'De dónde saca sus respuestas cada buscador con IA y cómo comprobar si tu negocio aparece.',
    url: 'https://dastanxtech.com/blog/como-aparecer-en-resultados-de-ia',
    siteName: 'DASTAN X-TECH',
    locale: 'es_US',
    type: 'article',
  },
};
export const generateMetadata = conImagenHeredada(metadata);

export default function BlogPostLayout({ children }) {
  return (
    <>
      <MigasJsonLd lang="es" seccion="blog" ruta={metadata.alternates.canonical} titulo={metadata.title} />
      {children}
    </>
  );
}
