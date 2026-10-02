import Auditoria from '@/components/paginas/Auditoria';
import t from '@/contenido/auditoria.es';

// /servicios/auditoria-negocio: el diseño está en components/paginas/Auditoria.jsx y los textos en contenido/auditoria.es.js
export default function AuditoriaNegocioPage() {
  return <Auditoria t={t} lang="es" />;
}
