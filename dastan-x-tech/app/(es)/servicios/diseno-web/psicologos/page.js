import DisenoWeb from '@/components/paginas/DisenoWeb';
import t from '@/contenido/diseno-web-terapeutas.es';

// /servicios/diseno-web/psicologos: same layout as /servicios/diseno-web (components/paginas/DisenoWeb.jsx), copy in contenido/diseno-web-terapeutas.es.js
export default function DisenoWebPsicologosPage() {
  return <DisenoWeb t={t} lang="es" />;
}
