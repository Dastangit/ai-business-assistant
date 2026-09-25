import Brand from './Brand';

// Cabecera compartida: el logo enlaza al inicio y desde cualquier página
// se puede saltar a servicios, al blog o al contacto del pie.
export default function SiteHeader({ tone = 'light' }) {
  return (
    <header className={`site-header site-header--${tone}`}>
      <Brand href="/" />
      <nav className="site-header-links" aria-label="Principal">
        <a href="/servicios">Servicios</a>
        <a href="/blog">Blog</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
}
