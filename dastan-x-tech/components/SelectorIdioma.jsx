'use client';
import { usePathname } from 'next/navigation';
import { idiomaDeRuta, rutaEquivalente } from '@/lib/i18n';

// ES | EN: lleva a la misma página en el otro idioma (cambia de layout raíz: recarga completa, es lo esperado)
export default function SelectorIdioma({ className = '' }) {
  const pathname = usePathname() || '/';
  const lang = idiomaDeRuta(pathname);
  const otra = rutaEquivalente(pathname);
  const opcion = (codigo) =>
    codigo === lang ? (
      <span aria-current="true">{codigo.toUpperCase()}</span>
    ) : (
      <a href={otra} hrefLang={codigo} lang={codigo} data-cambio-idioma>
        {codigo.toUpperCase()}
      </a>
    );
  return (
    <span className={`selector-idioma ${className}`} role="group" aria-label={lang === 'es' ? 'Idioma' : 'Language'}>
      {opcion('es')}
      <span aria-hidden="true">|</span>
      {opcion('en')}
    </span>
  );
}
