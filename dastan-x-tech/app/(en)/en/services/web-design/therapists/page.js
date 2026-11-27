import DisenoWeb from '@/components/paginas/DisenoWeb';
import t from '@/contenido/diseno-web-terapeutas.en';

// /en/services/web-design/therapists: same layout as /en/services/web-design (components/paginas/DisenoWeb.jsx), copy in contenido/diseno-web-terapeutas.en.js
export default function WebDesignTherapistsPage() {
  return <DisenoWeb t={t} lang="en" />;
}
