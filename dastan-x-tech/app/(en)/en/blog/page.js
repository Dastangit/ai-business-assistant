import BlogIndice from '@/components/paginas/BlogIndice';
import t from '@/contenido/blog.en';
import { alternates } from '@/lib/i18n';

export const metadata = {
  title: t.metadata.title,
  description: t.metadata.description,
  alternates: alternates('blog', 'en'),
};

export default function BlogIndexPageEn() {
  return <BlogIndice t={t} lang="en" />;
}
