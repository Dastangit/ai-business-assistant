import Privacidad from '@/components/paginas/Privacidad';
import t from '@/contenido/privacidad.es';

// /privacidad: el diseño está en components/paginas/Privacidad.jsx y el texto en contenido/privacidad.es.js
export default function PrivacidadPage() {
  return <Privacidad t={t} lang="es" />;
}
