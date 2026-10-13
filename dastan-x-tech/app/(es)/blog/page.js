import BlogIndice from '@/components/paginas/BlogIndice';
import t from '@/contenido/blog.es';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

const metadata = {
  title: t.metadata.title,
  description: t.metadata.description,
  alternates: alternates('blog', 'es'),
  // Título propio al compartir: sin esto heredaba el de la portada
  openGraph: {
    title: t.metadata.title,
    description: t.metadata.description,
    url: 'https://dastanxtech.com/blog',
    siteName: 'DASTAN X-TECH',
    locale: 'es_US',
    type: 'website',
  },
};
export const generateMetadata = conImagenHeredada(metadata);

export default function BlogIndexPage() {
  return <BlogIndice t={t} lang="es" />;
}
