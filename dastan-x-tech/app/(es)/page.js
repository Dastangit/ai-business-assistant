import Inicio from '@/components/paginas/Inicio';
import t from '@/contenido/inicio.es';

// Portada en español: el diseño está en components/paginas/Inicio.jsx y los textos en contenido/inicio.es.js
export default function Home() {
  return <Inicio t={t} lang="es" />;
}
