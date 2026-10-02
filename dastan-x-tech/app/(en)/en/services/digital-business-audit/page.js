import Auditoria from '@/components/paginas/Auditoria';
import t from '@/contenido/auditoria.en';

// /en/services/digital-business-audit: same layout as /servicios/auditoria-negocio (components/paginas/Auditoria.jsx), copy in contenido/auditoria.en.js
export default function DigitalBusinessAuditPage() {
  return <Auditoria t={t} lang="en" />;
}
