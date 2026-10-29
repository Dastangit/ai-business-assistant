import Historia from '@/components/paginas/Historia';
import t from '@/contenido/historia.es';
import inicio from '@/contenido/inicio.es';

// /nuestra-historia: el diseño está en components/paginas/Historia.jsx y el texto en contenido/historia.es.js
export default function HistoriaPage() {
  return <Historia t={t} equipo={inicio.equipo} lang="es" />;
}
