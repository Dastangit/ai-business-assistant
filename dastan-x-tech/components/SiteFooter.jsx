import Brand from './Brand';

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

// Íconos de línea en lugar de emojis
const icons = {
  chat: (
    <svg {...iconProps}>
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.8 8.8 0 0 1-4-.9L3 20l1.1-4.2A8.2 8.2 0 0 1 3 11.5 8.6 8.6 0 0 1 12 3a8.6 8.6 0 0 1 9 8.5Z" />
    </svg>
  ),
  mail: (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  ),
  camera: (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
    </svg>
  ),
  briefcase: (
    <svg {...iconProps}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
    </svg>
  ),
};

const contactLinks = [
  { href: 'https://wa.me/16055003653', label: 'WhatsApp +1 605-500-3653', icon: icons.chat, external: true },
  { href: 'mailto:xtech.ai.development@gmail.com', label: 'xtech.ai.development@gmail.com', icon: icons.mail },
  { href: 'https://www.instagram.com/dastan.xtech/', label: 'Instagram', icon: icons.camera, external: true },
  { href: 'https://www.linkedin.com/in/dastantech', label: 'LinkedIn', icon: icons.briefcase, external: true },
];

// Pie compartido con los medios de contacto (id="contacto" para el enlace de la cabecera)
export default function SiteFooter({ tone = 'light' }) {
  return (
    <footer id="contacto" className={`site-footer site-footer--${tone}`}>
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <Brand href="/" />
          <p>Consultoría digital e IA para negocios privados y pymes. En remoto, para Colombia, México, Estados Unidos y el resto del mundo.</p>
        </div>
        <ul className="site-footer-links">
          {contactLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.icon}
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="site-footer-legal">© 2026 DASTAN X-TECH</p>
    </footer>
  );
}
