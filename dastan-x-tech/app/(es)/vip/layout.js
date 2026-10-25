import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

// Propuesta privada: fuera de los buscadores, pero con canonical, hreflang y vista previa propios
// (sin esto heredaba los de la portada al compartir el enlace por WhatsApp)
const metadata = {
  title: 'Acceso Privado VIP | DASTAN X-TECH',
  description: 'Tu propuesta privada de DASTAN X-TECH: diseño web, posicionamiento en la IA y auditoría de negocio.',
  alternates: alternates('vip', 'es'),
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  openGraph: {
    title: 'Tu acceso privado · DASTAN X-TECH',
    description: 'Tu propuesta privada de DASTAN X-TECH: diseño web, posicionamiento en la IA y auditoría de negocio.',
    url: 'https://dastanxtech.com/vip',
    siteName: 'DASTAN X-TECH',
    locale: 'es_US',
    type: 'website',
  },
};
export const generateMetadata = conImagenHeredada(metadata);

export default function VipLayout({ children }) {
  return children;
}
