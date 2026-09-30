import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import BotonChat from '@/components/BotonChat';

export const metadata = {
  title: 'Nuestros Servicios | DASTAN X-TECH',
  description: 'Diseño web, Auditoría Completa de Negocio y Posicionamiento AEO: tres servicios para que tu negocio no pierda ni un cliente.',
  keywords: ['Servicios DASTAN X-TECH', 'Diseño web profesional', 'Auditoría de negocio', 'Posicionamiento AEO'],
  alternates: {
    canonical: '/servicios',
  },
  openGraph: {
    title: 'Nuestros Servicios | DASTAN X-TECH',
    description: 'Diseño web, Auditoría Completa de Negocio y Posicionamiento AEO: tres servicios para que tu negocio no pierda ni un cliente.',
    url: 'https://dastanxtech.com/servicios',
    siteName: 'DASTAN X-TECH',
    locale: 'es_US',
    type: 'website',
  },
};

const services = [
  {
    href: '/servicios/diseno-web',
    title: 'Diseño web',
    tagline: 'Renovamos tu web actual con tu marca real, en menos de 48 horas.',
  },
  {
    href: '/servicios/auditoria-negocio',
    title: 'Auditoría Completa de Negocio',
    tagline: 'Sabemos exactamente dónde tu negocio pierde tiempo y dinero.',
  },
  {
    href: '/servicios/posicionamiento-aeo',
    title: 'Posicionamiento AEO',
    tagline: 'Que la Inteligencia Artificial recomiende tu negocio, no solo Google.',
  },
];

// Servicios bajo pedido: cada uno se hace con un kit ya preparado
const extras = [
  {
    title: 'Análisis de canal de YouTube',
    text: 'miniaturas, títulos, ganchos y los vídeos que mejor te funcionan; te decimos dónde se va la gente y qué grabar después.',
  },
  {
    title: 'Análisis de marca personal',
    text: 'tu perfil, tu contenido, tu autoridad y el camino hasta que te contratan, con qué hacer los próximos 30 días.',
  },
  {
    title: 'Análisis de tienda online',
    text: 'recorremos tu tienda como un comprador hasta el pago y te decimos por dónde se escapan las ventas y cuánto cuesta cada fuga.',
  },
  {
    title: 'Dashboard de facturas',
    text: 'leemos tus facturas en PDF y te damos un panel con ingresos, gastos, impuestos, balance y tus mejores clientes.',
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

      <section className="card-grid" style={{ padding: '2rem 5% 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        {services.map((s, i) => (
          <a key={s.href} href={s.href} className="service-card" style={{ background: 'var(--ink)', borderColor: 'var(--ink)' }}>
            <span className="label-mono" style={{ color: 'var(--brand)' }}>{String(i + 1).padStart(2, '0')}</span>
            <h2 className="card-title">{s.title}</h2>
            <p className="card-text">{s.tagline}</p>
            <span className="card-link">Ver detalle →</span>
          </a>
        ))}
      </section>

      {/* PACK COMPLETO: los tres servicios juntos. Precio y ahorro deben coincidir con PRECIOS de app/api/chat/route.js */}
      <section style={{ padding: '0 5% 4rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div className="pack-block">
          <div className="pack-block-text">
            <span className="label-mono">Pack completo</span>
            <h2>Los tres servicios juntos por 400 USD</h2>
            <p>Diseño web, Auditoría Completa de Negocio y Posicionamiento AEO: ahorras 50 USD frente a contratarlos por separado. ¿Ya contrataste alguno? Pagas solo la diferencia.</p>
          </div>
          <BotonChat mensaje="Quiero información sobre el Pack completo">Consultar el Pack completo</BotonChat>
        </div>
      </section>

      {/* BAJO PEDIDO: extras en texto pequeño, sin tarjetas ni precios, para no quitar peso a los tres servicios.
          Se piden sueltos o se eligen dentro de la Membresía; deben coincidir con el chat (app/api/chat/route.js) y public/llms.txt */}
      <section className="extras" style={{ padding: '0 5% 6rem', maxWidth: '1100px', margin: '0 auto' }}>
        <span className="label-mono">Bajo pedido</span>
        <h2>También hacemos</h2>
        <ul className="extras-list">
          {extras.map((e) => (
            <li key={e.title}><span><strong>{e.title}:</strong> {e.text}</span></li>
          ))}
        </ul>
        <p className="extras-note">Se piden sueltos, con precio según cada caso. Si tienes la Membresía de Implementación, los eliges dentro de tus horas del mes.</p>
        <BotonChat mensaje="Quiero información sobre los servicios bajo pedido" className="btn btn-outline-light">Preguntar por un servicio</BotonChat>
      </section>

      <SiteFooter tone="light" />
    </div>
  );
}
