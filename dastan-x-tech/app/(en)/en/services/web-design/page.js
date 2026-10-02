import DisenoWeb from '@/components/paginas/DisenoWeb';
import t from '@/contenido/diseno-web.en';

// /en/services/web-design: same layout as /servicios/diseno-web (components/paginas/DisenoWeb.jsx), copy in contenido/diseno-web.en.js
export default function WebDesignPage() {
  return <DisenoWeb t={t} lang="en" />;
}
