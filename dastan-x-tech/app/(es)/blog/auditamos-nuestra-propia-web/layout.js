import MigasJsonLd from '@/components/MigasJsonLd';
import { alternates } from '@/lib/i18n';

export const metadata = {
  // Menos de 70 caracteres para que no se corte en los resultados de búsqueda
  title: 'Auditamos nuestra propia web: qué encontramos | DASTAN X-TECH',
  description: 'Le aplicamos nuestra propia Auditoría Completa de Negocio a dastanxtech.com. Esto fue lo que encontramos, lo que ya corregimos y lo que sigue pendiente.',
  // Sin canonical propio heredaba el del home ('/')
  alternates: alternates('blogAuditamos', 'es'),
};

export default function BlogPostLayout({ children }) {
  return (
    <>
      <MigasJsonLd lang="es" seccion="blog" ruta={metadata.alternates.canonical} titulo={metadata.title} />
      {children}
    </>
  );
}
