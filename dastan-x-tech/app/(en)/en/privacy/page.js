import Privacidad from '@/components/paginas/Privacidad';
import t from '@/contenido/privacidad.en';

// /en/privacy: same layout as /privacidad (components/paginas/Privacidad.jsx), text in contenido/privacidad.en.js
export default function PrivacyPage() {
  return <Privacidad t={t} lang="en" />;
}
