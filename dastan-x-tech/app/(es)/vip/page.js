import Vip from '@/components/paginas/Vip';
import t from '@/contenido/vip.es';

// /vip: el diseño y los precios están en components/paginas/Vip.jsx y los textos en contenido/vip.es.js
export default function VIPPage() {
  return <Vip t={t} lang="es" />;
}
