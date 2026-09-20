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
    <div style={{ backgroundColor: '#F5F4EF', color: '#07050A', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <nav style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(28, 38, 36, 0.1)' }}>
        <div style={{ fontWeight: '900', fontSize: '1.2rem', color: '#1C2624' }}>
          <span style={{ color: '#A855F7' }}>X</span> TECH
        </div>
        <a href="/" style={{ color: '#1C2624', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>
          ← Volver al inicio
        </a>
      </nav>

      <header style={{ padding: '6rem 5% 3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '900', color: '#1C2624', marginBottom: '1rem', letterSpacing: '-1px' }}>
          Tres servicios pensados para que tu negocio <span style={{ color: '#A855F7' }}>no pierda ni un cliente</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#333', maxWidth: '650px', margin: '0 auto' }}>
          Cada decisión, en cada servicio, parte de la misma pregunta: ¿esto ayuda de verdad a este negocio?
        </p>
      </header>

      <section style={{ padding: '2rem 5% 6rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
        {services.map((s) => (
          <a
            key={s.href}
            href={s.href}
            style={{
              display: 'block',
              background: '#1C2624',
              color: '#F5F4EF',
              padding: '2.5rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'transform 0.2s ease',
            }}
          >
            <h2 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: '#2DD4BF' }}>{s.title}</h2>
            <p style={{ color: '#b0adc5', lineHeight: '1.5', margin: '0 0 1.5rem 0' }}>{s.tagline}</p>
            <span style={{ color: '#A855F7', fontWeight: 'bold', fontSize: '0.9rem' }}>Saber más →</span>
          </a>
        ))}
      </section>
    </div>
  );
}
