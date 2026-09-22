'use client';
import { usePathname } from 'next/navigation';
import ChatWidget from './ChatWidget';

// La página /vip ya monta su propio <ChatWidget couponApplied={...} /> para
// poder pasarle el estado del cupón VIP. Para no duplicar el widget ahí,
// este wrapper lo omite en /vip y lo monta en el resto del sitio
// (home, /servicios y /servicios/*), donde antes no existía ningún
// <ChatWidget /> y por eso los botones "Consultar..." no hacían nada.
export default function GlobalChatWidget() {
  const pathname = usePathname();
  if (pathname?.startsWith('/vip')) return null;
  return <ChatWidget />;
}
