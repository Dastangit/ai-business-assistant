'use client';
import { usePathname } from 'next/navigation';
import ChatWidget from './ChatWidget';
import { claveDeRuta, idiomaDeRuta } from '@/lib/i18n';

// La página /vip (y /en/vip) ya monta su propio <ChatWidget couponApplied={...} /> para
// poder pasarle el estado del cupón VIP. Para no duplicar el widget ahí,
// este wrapper lo omite en el VIP y lo monta en el resto del sitio, en los dos idiomas
// (el idioma y la página salen de la URL con lib/i18n).
// En /admin (panel privado) tampoco se monta: taparía los datos.
// En las páginas de servicio el chat no muestra el botón del diagnóstico: quien llega ahí busca ese servicio.
// Diseño web y Auditoría lo ofrecen con el botón del final de la página; AEO no lo ofrece.
// Fuera de la portada (oscura) las páginas son claras: ahí el chat va en su versión clara.
export default function GlobalChatWidget() {
  const pathname = usePathname() || '/';
  const clave = claveDeRuta(pathname);
  if (clave === 'vip' || pathname.startsWith('/admin')) return null;
  let diagnostico = 'chat';
  if (clave === 'aeo') diagnostico = 'ninguno';
  else if (clave === 'disenoWeb' || clave === 'auditoria') diagnostico = 'final';
  const tono = clave === 'inicio' ? 'oscuro' : 'claro';
  return <ChatWidget diagnostico={diagnostico} lang={idiomaDeRuta(pathname)} tono={tono} />;
}
