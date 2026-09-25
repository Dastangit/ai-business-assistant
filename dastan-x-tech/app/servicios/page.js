import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Nuestros Servicios | DASTAN X-TECH',
  description: 'Cazador de Webs, Auditoría de Negocio 360° y Posicionamiento AEO: tres servicios para que tu negocio no pierda ni un cliente.',
  keywords: ['Servicios DASTAN X-TECH', 'Diseño web profesional', 'Auditoría de negocio', 'Posicionamiento AEO'],
  alternates: {
    canonical: '/servicios',
  },
  openGraph: {
    title: 'Nuestros Servicios | DASTAN X-TECH',
    description: 'Cazador de Webs, Auditoría de Negocio 360° y Posicionamiento AEO: tres servicios para que tu negocio no pierda ni un cliente.',
    url: 'https://dastanxtech.com/servicios',
    siteName: 'DASTAN X-TECH',
    locale: 'es_US',
    type: 'website',
  },
};

const services = [
  {
    href: '/servicios/diseno-web',
    title: 'Cazador de Webs',
    tagline: 'Renovamos tu web actual con tu marca real, en tiempo récord.',
  },
  {
    href: '/servicios/auditoria-360',
    title: 'Auditoría de Negocio 360°',
    tagline: 'Sabemos exactamente dónde tu negocio pierde tiempo y dinero.',
  },
  {
    href: '/servicios/posicionamiento-aeo',
    title: 'Posicionamiento AEO',
    tagline: 'Que la Inteligencia Artificial recomiende tu negocio, no solo Google.',
  },
];

export default function ServiciosPage() {
  return (
    <div className="theme-light">
      <SiteHeader tone="light" />

      <header style={{ padding: '6rem 5% 3rem', textAlign: 'center' }}>
        <span className="label-mono">Servicios</span>
        <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3rem)', fontWeight: '700', color: 'var(--ink)', margin: '1rem auto', letterSpacing: '-0.025em', lineHeight: '1.1', maxWidth: '900px' }}>
          Tres servicios pensados para que tu negocio <span className="accent-light">no pierda ni un cliente</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--ink-2)', maxWidth: '650px', margin: '0 auto' }}>
          Cada decisión, en cada servicio, parte de la misma pregunta: ¿esto ayuda de verdad a este negocio?
        </p>
      </header>

      <section className="card-grid" style={{ padding: '2rem 5% 6rem', maxWidth: '1100px', margin: '0 auto' }}>
        {services.map((s, i) => (
          <a key={s.href} href={s.href} className="service-card" style={{ background: 'var(--ink)', borderColor: 'var(--ink)' }}>
            <span className="label-mono" style={{ color: 'var(--brand)' }}>{String(i + 1).padStart(2, '0')}</span>
            <h2 className="card-title">{s.title}</h2>
            <p className="card-text">{s.tagline}</p>
            <span className="card-link">Ver detalle →</span>
          </a>
        ))}
      </section>

      <SiteFooter tone="light" />
    </div>
  );
}
