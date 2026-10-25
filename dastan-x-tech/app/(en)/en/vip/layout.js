import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

// Private proposal: hidden from search engines, like /vip, but with its own canonical, hreflang and share preview
const metadata = {
  title: 'Private VIP Access | DASTAN X-TECH',
  description: 'Your private proposal from DASTAN X-TECH: web design, AI search optimization and a business audit.',
  alternates: alternates('vip', 'en'),
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  openGraph: {
    title: 'Your private access · DASTAN X-TECH',
    description: 'Your private proposal from DASTAN X-TECH: web design, AI search optimization and a business audit.',
    url: 'https://dastanxtech.com/en/vip',
    siteName: 'DASTAN X-TECH',
    locale: 'en_US',
    type: 'website',
  },
};
export const generateMetadata = conImagenHeredada(metadata);

export default function VipLayoutEn({ children }) {
  return children;
}
