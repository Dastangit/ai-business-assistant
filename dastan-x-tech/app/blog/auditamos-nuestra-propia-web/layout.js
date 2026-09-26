export const metadata = {
  title: 'Auditamos nuestra propia web con nuestra Auditoría Completa de Negocio | DASTAN X-TECH',
  description: 'Le aplicamos nuestra propia Auditoría Completa de Negocio a dastanxtech.com. Esto fue lo que encontramos, lo que ya corregimos y lo que sigue pendiente.',
  keywords: ['Auditoría de negocio', 'Caso de estudio SEO', 'AEO', 'Auditoría de negocio DASTAN X-TECH'],
  // Sin canonical propio heredaba el del home ('/')
  alternates: {
    canonical: '/blog/auditamos-nuestra-propia-web',
  },
};

export default function BlogPostLayout({ children }) {
  return children;
}
