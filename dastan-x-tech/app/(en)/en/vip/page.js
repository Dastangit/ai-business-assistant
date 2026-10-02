import Vip from '@/components/paginas/Vip';
import t from '@/contenido/vip.en';

// /en/vip: same layout and prices as /vip (components/paginas/Vip.jsx), copy in contenido/vip.en.js
export default function VIPPageEn() {
  return <Vip t={t} lang="en" />;
}
