import Inicio from '@/components/paginas/Inicio';
import t from '@/contenido/inicio.en';

// Portada en inglés: mismo diseño que la española (components/paginas/Inicio.jsx), textos en contenido/inicio.en.js
export default function HomeEn() {
  return <Inicio t={t} lang="en" />;
}
