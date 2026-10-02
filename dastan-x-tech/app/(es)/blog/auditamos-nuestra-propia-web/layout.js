import { alternates } from '@/lib/i18n';

export const metadata = {
  // Menos de 70 caracteres para que no se corte en los resultados de búsqueda
  title: 'Auditamos nuestra propia web: qué encontramos | DASTAN X-TECH',
  description: 'Le aplicamos nuestra propia Auditoría Completa de Negocio a dastanxtech.com. Esto fue lo que encontramos, lo que ya corregimos y lo que sigue pendiente.',
  keywords: ['Auditoría de negocio', 'Caso de estudio SEO', 'AEO', 'Auditoría de negocio DASTAN X-TECH'],
  // Sin canonical propio heredaba el del home ('/')
  alternates: alternates('blogAuditamos', 'es'),
};

export default function BlogPostLayout({ children }) {
  return children;
}
