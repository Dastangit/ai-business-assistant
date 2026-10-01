import Brand from './Brand';

// Cabecera compartida y fija: el logo enlaza al inicio, y desde cualquier página
// se puede ir a servicios, al blog o escribir por WhatsApp sin bajar hasta el pie.
export default function SiteHeader({ tone = 'light' }) {
  return (
    <header className={`site-header site-header--${tone}`}>
      <Brand href="/" />
      <nav className="site-header-links" aria-label="Principal">
        <a href="/servicios">Servicios</a>
        <a href="/blog" className="site-header-blog">Blog</a>
        <a href="https://wa.me/16055003653" target="_blank" rel="noopener noreferrer" className="site-header-wa" aria-label="Escríbenos por WhatsApp al +1 605-500-3653">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.8 8.8 0 0 1-4-.9L3 20l1.1-4.2A8.2 8.2 0 0 1 3 11.5 8.6 8.6 0 0 1 12 3a8.6 8.6 0 0 1 9 8.5Z" /></svg>
          WhatsApp
        </a>
      </nav>
    </header>
  );
}
