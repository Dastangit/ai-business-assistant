import DisenoWeb from '@/components/paginas/DisenoWeb';
import t from '@/contenido/diseno-web.es';

// /servicios/diseno-web: el diseño está en components/paginas/DisenoWeb.jsx y los textos en contenido/diseno-web.es.js
export default function DisenoWebPage() {
  return <DisenoWeb t={t} lang="es" />;
}
