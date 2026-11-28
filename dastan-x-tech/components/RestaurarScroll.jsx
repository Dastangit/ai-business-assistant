'use client';
import { useEffect } from 'react';
import { CLAVE_SCROLL, ANCLAS_SCROLL } from '@/lib/i18n';

// Al cambiar de idioma (lib/i18n.js, conAncla) la otra versión abre por el mismo punto de lectura.
export default function RestaurarScroll() {
  useEffect(() => {
    let dato = null;
    try {
      dato = JSON.parse(sessionStorage.getItem(CLAVE_SCROLL) || 'null');
    } catch { return; }
    // Se borra al final (no al leerlo): en desarrollo React monta el efecto dos veces
    const olvidar = () => { try { sessionStorage.removeItem(CLAVE_SCROLL); } catch { /* nada */ } };
    if (!dato || dato.destino !== window.location.pathname || Date.now() - dato.hora > 15000) return olvidar();
    const colocar = () => {
      const bloques = [...document.querySelectorAll(ANCLAS_SCROLL)];
      let y;
      if (dato.i < 0) y = 0;
      else if (bloques.length === dato.total && bloques[dato.i]) {
        y = bloques[dato.i].getBoundingClientRect().top + window.scrollY - 90 + dato.dentro;
      } else {
        y = dato.proporcion * (document.documentElement.scrollHeight - window.innerHeight);
      }
      window.scrollTo({ top: Math.max(0, y), behavior: 'instant' });
    };
    // Fuentes, imágenes e hidratación pueden mover los bloques después: se recoloca al cargar, al tener las
    // fuentes y a los 0,3 y 1 s, salvo que la persona ya haya movido la página por su cuenta
    let movida = false;
    const parar = () => { movida = true; };
    const eventos = ['wheel', 'touchstart', 'keydown', 'pointerdown'];
    eventos.forEach((e) => window.addEventListener(e, parar, { passive: true, once: true }));
    const otraVez = () => { if (!movida) colocar(); };
    colocar();
    document.fonts?.ready.then(otraVez);
    window.addEventListener('load', otraVez, { once: true });
    const temporizadores = [300, 1000].map((ms) => setTimeout(otraVez, ms));
    const fin = setTimeout(olvidar, 1100);
    return () => {
      eventos.forEach((e) => window.removeEventListener(e, parar));
      window.removeEventListener('load', otraVez);
      [...temporizadores, fin].forEach(clearTimeout);
    };
  }, []);
  return null;
}
