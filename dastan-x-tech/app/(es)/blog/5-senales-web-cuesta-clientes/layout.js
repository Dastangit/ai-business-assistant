import MigasJsonLd from '@/components/MigasJsonLd';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

// Metadatos propios: sin este archivo el artículo heredaba el título y la descripción del home
const metadata = {
  title: '5 señales de que tu web te está costando clientes | DASTAN X-TECH',
  description: 'Las 5 señales más comunes que hacen que un visitante se vaya sin reservar ni comprar, y cómo se ven resueltas en nuestra propia web.',
  alternates: alternates('blog5Senales', 'es'),
  openGraph: {
    title: '5 señales de que tu web te está costando clientes',
    description: 'Las 5 señales más comunes que hacen que un visitante se vaya sin reservar ni comprar, y cómo se ven resueltas.',
    url: 'https://dastanxtech.com/blog/5-senales-web-cuesta-clientes',
    siteName: 'DASTAN X-TECH',
    locale: 'es_MX',
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
