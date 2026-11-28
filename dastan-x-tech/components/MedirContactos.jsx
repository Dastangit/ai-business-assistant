'use client';
import { useEffect } from 'react';

// Microconversiones (SEO-001): cuenta los clics en enlaces de WhatsApp y de correo de toda la web,
// con la página donde ocurrieron, en Supabase (eventos_web). Sin cookies ni datos de la persona.
// sendBeacon sigue enviando aunque el clic saque al usuario de la página.
export default function MedirContactos() {
  useEffect(() => {
    const alClic = (e) => {
      const enlace = e.target.closest?.('a[href]');
      if (!enlace) return;
      const href = enlace.getAttribute('href');
      const tipo = /^https?:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href) ? 'click_whatsapp'
        : href.startsWith('mailto:') ? 'click_email' : null;
      if (!tipo) return;
      const datos = JSON.stringify({ tipo, pagina: window.location.pathname });
      const blob = new Blob([datos], { type: 'application/json' });
      if (!navigator.sendBeacon?.('/api/eventos', blob)) {
        fetch('/api/eventos', { method: 'POST', body: datos, headers: { 'Content-Type': 'application/json' }, keepalive: true }).catch(() => {});
      }
    };
    document.addEventListener('click', alClic, { capture: true });
    return () => document.removeEventListener('click', alClic, { capture: true });
  }, []);
  return null;
}
