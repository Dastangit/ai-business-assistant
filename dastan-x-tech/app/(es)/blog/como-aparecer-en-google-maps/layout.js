import MigasJsonLd from '@/components/MigasJsonLd';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

// Semrush (26-nov-2026): «cómo aparecer en google maps» MX 320 · global 1.000 · KD 30. Título de menos de 70 caracteres.
const metadata = {
  title: 'Cómo aparecer en Google Maps (gratis) | DASTAN X-TECH',
  description: 'Cómo hacer que tu negocio aparezca en Google Maps, gratis: crear y verificar tu ficha de Google, qué datos completar, cómo conseguir reseñas y qué evitar.',
  alternates: alternates('blogGoogleMaps', 'es'),
  openGraph: {
    title: 'Cómo aparecer en Google Maps (gratis) | DASTAN X-TECH',
    description: 'Los 6 pasos para que tu negocio aparezca en Google Maps, gratis.',
    url: 'https://dastanxtech.com/blog/como-aparecer-en-google-maps',
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
