import MigasJsonLd from '@/components/MigasJsonLd';
import { alternates } from '@/lib/i18n';

export const metadata = {
  // Menos de 70 caracteres para que no se corte en los resultados de búsqueda
  title: 'Perfeccionamos nuestra web con nuestro auditor AEO | DASTAN X-TECH',
  description: 'Pasamos dastanxtech.com por nuestro propio auditor AEO: qué mide, qué encontró, qué corregimos y cómo pasamos de 94 a 97 sobre 100.',
  alternates: alternates('blogAuditorAeo', 'es'),
};

export default function BlogPostLayout({ children }) {
  return (
    <>
      <MigasJsonLd lang="es" seccion="blog" ruta={metadata.alternates.canonical} titulo={metadata.title} />
      {children}
    </>
  );
}
