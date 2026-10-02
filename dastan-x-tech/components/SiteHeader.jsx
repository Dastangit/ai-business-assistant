import Brand from './Brand';
import SelectorIdioma from './SelectorIdioma';
import { ruta } from '@/lib/i18n';

const TEXTOS = {
  es: { servicios: 'Servicios', wa: 'Escríbenos por WhatsApp al +1 605-500-3653', principal: 'Principal' },
  en: { servicios: 'Services', wa: 'Message us on WhatsApp at +1 605-500-3653', principal: 'Main' },
};

// Cabecera compartida y fija: el logo enlaza al inicio, y desde cualquier página
// se puede ir a servicios, al blog, cambiar de idioma o escribir por WhatsApp sin bajar hasta el pie.
export default function SiteHeader({ tone = 'light', lang = 'es' }) {
  const t = TEXTOS[lang];
  return (
    <header className={`site-header site-header--${tone}`}>
      <Brand href={ruta('inicio', lang)} lang={lang} />
      <nav className="site-header-links" aria-label={t.principal}>
        <a href={ruta('servicios', lang)}>{t.servicios}</a>
        <a href={ruta('blog', lang)} className="site-header-blog">Blog</a>
        <SelectorIdioma />
        <a href="https://wa.me/16055003653" target="_blank" rel="noopener noreferrer" className="site-header-wa" aria-label={t.wa}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.8 8.8 0 0 1-4-.9L3 20l1.1-4.2A8.2 8.2 0 0 1 3 11.5 8.6 8.6 0 0 1 12 3a8.6 8.6 0 0 1 9 8.5Z" /></svg>
          WhatsApp
        </a>
      </nav>
    </header>
  );
}
