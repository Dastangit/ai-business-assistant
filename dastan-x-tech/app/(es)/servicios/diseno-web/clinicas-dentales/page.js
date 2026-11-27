import DisenoWeb from '@/components/paginas/DisenoWeb';
import t from '@/contenido/diseno-web-dentistas.es';

// /servicios/diseno-web/clinicas-dentales: same layout as /servicios/diseno-web (components/paginas/DisenoWeb.jsx), copy in contenido/diseno-web-dentistas.es.js
export default function DisenoWebDentistasPage() {
  return <DisenoWeb t={t} lang="es" />;
}
