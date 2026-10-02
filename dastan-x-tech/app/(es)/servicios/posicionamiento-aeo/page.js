import Aeo from '@/components/paginas/Aeo';
import t from '@/contenido/aeo.es';

// /servicios/posicionamiento-aeo: el diseño está en components/paginas/Aeo.jsx y los textos en contenido/aeo.es.js
export default function PosicionamientoAeoPage() {
  return <Aeo t={t} lang="es" />;
}
