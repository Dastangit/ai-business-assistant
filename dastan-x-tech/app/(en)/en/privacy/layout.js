import t from '@/contenido/privacidad.en';
import { alternates } from '@/lib/i18n';

export const metadata = {
  title: t.metadata.title,
  description: t.metadata.description,
  alternates: alternates('privacidad', 'en'),
};

export default function PrivacyLayout({ children }) {
  return children;
}
