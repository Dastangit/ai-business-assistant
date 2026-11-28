import MigasJsonLd from '@/components/MigasJsonLd';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

const metadata = {
  title: '¿Cuánto cuesta una página web en México y España? | DASTAN X-TECH',
  description: 'Cuánto cuesta hacer una página web en 2026 en México (pesos) y España (euros): lo que cobra el mercado, qué cambia el precio y nuestra tarifa de 100 USD.',
  alternates: alternates('blogPrecioWeb', 'es'),
  openGraph: {
    title: '¿Cuánto cuesta una página web en 2026?',
    description: 'Precios de mercado en México y España, qué cambia el precio y nuestra tarifa cerrada: 100 USD (1,900 MXN) y lista en menos de 48 horas.',
    url: 'https://dastanxtech.com/blog/cuanto-cuesta-una-pagina-web',
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
