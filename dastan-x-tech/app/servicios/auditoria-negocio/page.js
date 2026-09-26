'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const faqData = [
  {
    q: '¿Necesitan acceso a mis sistemas o cuentas para auditar mi negocio?',
    a: 'No. Auditamos lo público (tu web, redes, ficha de Google, reseñas, competencia) y lo que nos cuentas en un formulario corto sobre cómo funciona tu negocio por dentro. Nunca pedimos entrar en tus programas, paneles ni cuentas.',
  },
  {
    q: '¿Qué recibo al final de la auditoría?',
    a: 'Un informe único con dos cifras claras: tu presencia digital sobre 100 y tu madurez tecnológica sobre 5, cada hallazgo respaldado por evidencia real, y un plan de acción por fases con una estimación de cuánto tiempo y dinero podrías recuperar cada mes.',
  },
  {
    q: '¿Es una auditoría genérica o hecha para mi negocio?',
    a: 'Cada hallazgo va acompañado de una evidencia real de tu negocio — una frase de tu web, una reseña con fecha, una respuesta tuya — nunca una plantilla ni un dato inventado.',
  },
  {
    q: '¿Cuánto cuesta la Auditoría Completa de Negocio?',
    a: 'Desde 150 USD. Es un servicio de pago; el precio final depende del tamaño de tu negocio y te lo confirmamos antes de empezar. El diagnóstico SEO gratis es aparte y solo revisa tu web.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function AuditoriaNegocioPage() {
  return (
    <div className="theme-light">

      {/* CABECERA CON ENLACES (logo al inicio, servicios, blog y contacto) */}
      <SiteHeader tone="light" />

      {/* HERO ASIMÉTRICO */}
      <header className="servicio-hero" style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '4rem',
        padding: '6rem 5%',
        alignItems: 'center'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
            <span style={{ background: 'var(--brand-on-light)', width: '32px', height: '3px', display: 'block' }}></span>
            <span className="label-mono">Servicio · Auditoría completa</span>
          </div>
          <h1 className="servicio-hero-title" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)', fontWeight: '700', lineHeight: '1.08', color: 'var(--ink)', marginBottom: '1.5rem', letterSpacing: '-0.025em' }}>
            Descubre dónde tu negocio <span className="accent-light">pierde dinero</span>.
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--ink-2)', maxWidth: '600px', marginBottom: '2.5rem' }}>
            Analizamos tu negocio por fuera (web, redes, Google, reseñas, competencia) y por dentro (agenda, cobros, herramientas, horas perdidas), y cruzamos ambas mitades para encontrar las inconsistencias que más te cuestan.
          </p>
          <button type="button" className="btn btn-ink" onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: { diagnostico: true } }))}>
            Pedir diagnóstico SEO gratis
          </button>
        </div>

        {/* TARJETA DEL HERO */}
        <div className="servicio-hero-visual servicio-hero-card">
          <h3>Qué recibes</h3>
          <ul className="dot-list">
            <li>Presencia digital sobre 100</li>
            <li>Madurez tecnológica sobre 5</li>
            <li>Plan de acción por fases</li>
          </ul>
        </div>
      </header>

      {/* SECCIÓN DE CARACTERÍSTICAS */}
      <section style={{ padding: '6rem 5%' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '5rem', color: 'var(--ink)' }}>
          Evidencia real, no <span className="accent-light">suposiciones</span>
        </h2>

        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

          <div className="feature-row">
            <div className="feature-number">01</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Por fuera y por dentro</h3>
              <p style={{ color: 'var(--ink-2)', lineHeight: '1.6' }}>Revisamos tu web, redes, anuncios activos, ficha de Google, reseñas y competencia — todo lo que un cliente ve antes de escribirte. Después miramos cómo gestionas la agenda, el cobro y qué herramientas usas por dentro.</p>
            </div>
          </div>

          <div className="feature-row">
            <div className="feature-number feature-number--brand">02</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Informe con cifras accionables</h3>
              <p style={{ color: 'var(--ink-2)', lineHeight: '1.6' }}>Cada hallazgo respaldado por evidencia real — nada inventado — y un plan de acción por fases con una estimación de las horas y el dinero que podrías recuperar cada mes.</p>
            </div>
          </div>

        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* SECCIÓN DE PREGUNTAS FRECUENTES */}
      <section style={{ padding: '5rem 5%' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem', color: 'var(--ink)' }}>
          Preguntas frecuentes
        </h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {faqData.map((item, i) => (
            <div key={i} className="faq-item">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.6rem', color: 'var(--ink)' }}>{item.q}</h3>
              <p style={{ color: 'var(--ink-2)', lineHeight: '1.6', margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CIERRE: el mismo camino principal que el hero, con WhatsApp como alternativa */}
      <section style={{ padding: '6rem 5%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--ink)', marginBottom: '1rem', letterSpacing: '-0.015em' }}>
          ¿Quieres saber qué te está costando dinero?
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--ink-2)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          Escríbenos y te mostramos exactamente dónde tu negocio está perdiendo tiempo y clientes. ¿Aún no lo tienes claro? Empieza por el diagnóstico SEO gratis de tu web: es la parte de fuera de la auditoría.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <button type="button" className="btn btn-ink" onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: { diagnostico: true } }))}>
            Pedir diagnóstico SEO gratis
          </button>
          <a href="https://wa.me/16055003653?text=Hola,%20vi%20la%20p%C3%A1gina%20de%20Auditor%C3%ADa%20Completa%20de%20Negocio%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer" className="text-link">
            o escríbenos por WhatsApp →
          </a>
        </div>
      </section>

      <SiteFooter tone="light" />
    </div>
  );
}
