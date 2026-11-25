import AuditoriaGratis from '@/components/paginas/AuditoriaGratis';
import t from '@/contenido/auditoria-gratis.es';

// El diseño está en components/paginas/AuditoriaGratis.jsx y los textos en contenido/auditoria-gratis.es.js
export default function Page() {
  return <AuditoriaGratis t={t} lang="es" />;
}
