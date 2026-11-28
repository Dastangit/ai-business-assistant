import DisenoWeb from '@/components/paginas/DisenoWeb';
import t from '@/contenido/diseno-web-abogados.en';

// /en/services/web-design/lawyers: same layout as /en/services/web-design (components/paginas/DisenoWeb.jsx), copy in contenido/diseno-web-abogados.en.js
export default function WebDesignLawyersPage() {
  return <DisenoWeb t={t} lang="en" />;
}
