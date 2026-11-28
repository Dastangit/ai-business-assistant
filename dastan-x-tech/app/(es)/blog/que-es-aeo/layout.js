import MigasJsonLd from '@/components/MigasJsonLd';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

// Metadatos propios: sin este archivo el artículo heredaba el título y la descripción del home
const metadata = {
  title: 'Qué es AEO (y GEO): el SEO para IA, con un ejemplo real',
  description: 'Qué es el AEO, en qué se diferencia del GEO y del SEO y qué tienen en común los negocios que la IA recomienda, con un ejemplo real de Gemini.',
  alternates: alternates('blogAeo', 'es'),
  openGraph: {
    title: 'Qué es AEO (y GEO): el SEO para IA, con un ejemplo real',
    description: 'Qué es el Answer Engine Optimization, por qué ya está pasando y qué tienen en común los negocios que la IA recomienda.',
    url: 'https://dastanxtech.com/blog/que-es-aeo',
    siteName: 'DASTAN X-TECH',
    locale: 'es_MX',
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
