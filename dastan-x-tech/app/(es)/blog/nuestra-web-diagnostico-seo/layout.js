import MigasJsonLd from '@/components/MigasJsonLd';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

const metadata = {
  // Menos de 70 caracteres para que no se corte en los resultados de búsqueda
  title: 'De 77 a 91: nuestra web en nuestro diagnóstico SEO | DASTAN X-TECH',
  description: 'Pasamos dastanxtech.com tres veces por nuestro diagnóstico SEO: qué encontró, qué corregimos y cómo subimos de 77 a 91 sobre 100.',
  alternates: alternates('blogDiagnosticoSeo', 'es'),
  openGraph: {
    title: 'De 77 a 91: nuestra web en nuestro diagnóstico SEO',
    description: 'Tres pasadas de nuestro diagnóstico SEO por dastanxtech.com: qué encontró cada vez y qué corregimos.',
    url: 'https://dastanxtech.com/blog/nuestra-web-diagnostico-seo',
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
