import Historia from '@/components/paginas/Historia';
import t from '@/contenido/historia.en';
import inicio from '@/contenido/inicio.en';

// /en/our-story: the design lives in components/paginas/Historia.jsx and the copy in contenido/historia.en.js
export default function HistoriaPage() {
  return <Historia t={t} equipo={inicio.equipo} lang="en" />;
}
