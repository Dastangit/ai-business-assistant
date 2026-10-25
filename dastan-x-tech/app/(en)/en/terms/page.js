import Privacidad from '@/components/paginas/Privacidad';
import t from '@/contenido/condiciones.en';

// /en/terms: same layout as /condiciones (components/paginas/Privacidad.jsx), text in contenido/condiciones.en.js
export default function TermsPage() {
  return <Privacidad t={t} lang="en" clave="condiciones" />;
}
