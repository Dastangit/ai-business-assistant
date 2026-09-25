// Logo maestro: el orbe circular del ícono de pestaña (public/logo.svg, mismo dibujo que app/icon.png).
// Un solo logo en cabeceras, pie, VIP e imagen para redes.
export function BrandMark({ className = 'brand-mark', title, size }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.svg"
      className={className}
      alt={title || ''}
      aria-hidden={title ? undefined : true}
      width={size || 28}
      height={size || 28}
      decoding="async"
    />
  );
}

export const BRAND_NAME = 'DASTAN X-TECH';

// Un solo nombre en todo el sitio: DASTAN X-TECH
export default function Brand({ href = '/', className = '' }) {
  const content = (
    <>
      <BrandMark />
      <span>{BRAND_NAME}</span>
    </>
  );
  if (!href) return <span className={`brand ${className}`}>{content}</span>;
  return (
    <a href={href} className={`brand ${className}`} aria-label={`${BRAND_NAME}, ir al inicio`}>
      {content}
    </a>
  );
}
