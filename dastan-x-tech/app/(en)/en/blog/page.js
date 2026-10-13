import BlogIndice from '@/components/paginas/BlogIndice';
import t from '@/contenido/blog.en';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

const metadata = {
  title: t.metadata.title,
  description: t.metadata.description,
  alternates: alternates('blog', 'en'),
  // Own share title: without this it inherited the home page one
  openGraph: {
    title: t.metadata.title,
    description: t.metadata.description,
    url: 'https://dastanxtech.com/en/blog',
    siteName: 'DASTAN X-TECH',
    locale: 'en_US',
    type: 'website',
  },
};
export const generateMetadata = conImagenHeredada(metadata);

export default function BlogIndexPageEn() {
  return <BlogIndice t={t} lang="en" />;
}
