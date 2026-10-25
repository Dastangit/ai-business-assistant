import Privacidad from '@/components/paginas/Privacidad';
import t from '@/contenido/condiciones.es';

// /condiciones: mismo diseño que /privacidad (components/paginas/Privacidad.jsx), texto en contenido/condiciones.es.js
export default function CondicionesPage() {
  return <Privacidad t={t} lang="es" clave="condiciones" />;
}
