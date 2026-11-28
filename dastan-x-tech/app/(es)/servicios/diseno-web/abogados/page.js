import DisenoWeb from '@/components/paginas/DisenoWeb';
import t from '@/contenido/diseno-web-abogados.es';

// /servicios/diseno-web/abogados: same layout as /servicios/diseno-web (components/paginas/DisenoWeb.jsx), copy in contenido/diseno-web-abogados.es.js
export default function DisenoWebAbogadosPage() {
  return <DisenoWeb t={t} lang="es" />;
}
