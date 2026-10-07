import { alternates } from '@/lib/i18n';

export const metadata = {
  title: '¿Cuánto cuesta renovar una web en 2026? | DASTAN X-TECH',
  description: 'Precios reales para renovar la web de un negocio en 2026: desde 100 USD y lista en menos de 48 horas, o 49 USD por arreglar lo más urgente. Qué incluye y qué cambia el precio.',
  keywords: ['Cuánto cuesta una página web', 'Precio de renovar una web', 'Precio diseño web para pymes', 'Rediseño web precio'],
  alternates: alternates('blogPrecioWeb', 'es'),
  openGraph: {
    title: '¿Cuánto cuesta renovar una web en 2026?',
    description: 'Desde 100 USD y lista en menos de 48 horas, o 49 USD por arreglar lo más urgente. Qué incluye y qué cambia el precio.',
    url: 'https://dastanxtech.com/blog/cuanto-cuesta-renovar-web',
    siteName: 'DASTAN X-TECH',
    locale: 'es_US',
    type: 'article',
  },
};

export default function BlogPostLayout({ children }) {
  return children;
}
