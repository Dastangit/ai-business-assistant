import DisenoWeb from '@/components/paginas/DisenoWeb';
import t from '@/contenido/diseno-web-dentistas.en';

// /en/services/web-design/dentists: same layout as /en/services/web-design (components/paginas/DisenoWeb.jsx), copy in contenido/diseno-web-dentistas.en.js
export default function WebDesignDentistsPage() {
  return <DisenoWeb t={t} lang="en" />;
}
