'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { idiomaDeRuta, rutaEquivalente, claveDeRuta, conAncla } from '@/lib/i18n';

const CLAVE = 'aviso-idioma-cerrado';
const TEXTOS = {
  en: { texto: 'This page is also in English.', enlace: 'View in English', cerrar: 'Close' },
  es: { texto: 'Esta página también está en español.', enlace: 'Ver en español', cerrar: 'Cerrar' },
};

// Si el navegador está en el otro idioma, una barra fina lo ofrece. Nunca redirige.
// En /vip no sale: a la propuesta se llega con un enlace ya en el idioma del cliente.
// Tampoco en páginas sin pareja en el otro idioma (/admin, 404).
// Ni en la portada: ahí el selector ES | EN de la cabecera basta y el aviso empujaba el hero hacia abajo.
export default function AvisoIdioma() {
  const pathname = usePathname() || '/';
  const [destino, setDestino] = useState(null);

  useEffect(() => {
    const clave = claveDeRuta(pathname);
    if (!clave || clave === 'vip' || clave === 'inicio') return;
    let cerrado = false;
    try { cerrado = localStorage.getItem(CLAVE) === '1'; } catch { /* almacenamiento bloqueado: se vuelve a mostrar */ }
    if (cerrado) return;
    const prefiere = (navigator.languages?.[0] || navigator.language || '').toLowerCase().slice(0, 2);
    const lang = idiomaDeRuta(pathname);
    // Se decide en el navegador (idioma y almacenamiento solo existen ahí); antes de montar no se pinta nada
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if ((prefiere === 'en' || prefiere === 'es') && prefiere !== lang) setDestino(prefiere);
  }, [pathname]);

  if (!destino) return null;
  const t = TEXTOS[destino];
  const cerrar = () => {
    try { localStorage.setItem(CLAVE, '1'); } catch { /* sin almacenamiento: solo se cierra ahora */ }
    setDestino(null);
  };
  return (
    <div className="aviso-idioma" lang={destino} role="region" aria-label={t.texto}>
      <span>{t.texto}</span>
      <a href={rutaEquivalente(pathname)} hrefLang={destino} onClick={conAncla}>{t.enlace} →</a>
      <button type="button" onClick={cerrar} aria-label={t.cerrar}>✕</button>
    </div>
  );
}
