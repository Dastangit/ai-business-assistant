'use client';
import { usePathname } from 'next/navigation';
import ChatWidget from './ChatWidget';

// La página /vip ya monta su propio <ChatWidget couponApplied={...} /> para
// poder pasarle el estado del cupón VIP. Para no duplicar el widget ahí,
// este wrapper lo omite en /vip y lo monta en el resto del sitio
// (home, /servicios y /servicios/*), donde antes no existía ningún
// <ChatWidget /> y por eso los botones "Consultar..." no hacían nada.
// En /admin (panel privado) tampoco se monta: taparía los datos.
// En las páginas de servicio el chat no muestra el botón del diagnóstico: quien llega ahí busca ese servicio.
// Diseño web y Auditoría lo ofrecen con el botón del final de la página; AEO no tiene ese botón, se pide por WhatsApp.
export default function GlobalChatWidget() {
  const pathname = usePathname();
  if (pathname?.startsWith('/vip') || pathname?.startsWith('/admin')) return null;
  let diagnostico = 'chat';
  if (pathname?.startsWith('/servicios/posicionamiento-aeo')) diagnostico = 'whatsapp';
  else if (pathname?.startsWith('/servicios/')) diagnostico = 'final';
  return <ChatWidget diagnostico={diagnostico} />;
}
