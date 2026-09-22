'use client';
import React from 'react';

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Auditoría de Negocio 360°',
  provider: {
    '@type': 'Organization',
    name: 'DASTAN X-TECH',
    url: 'https://dastanxtech.com',
  },
  areaServed: ['Colombia', 'México'],
  description: 'Auditoría completa de negocio: presencia digital, redes, reseñas y competencia por fuera; agenda, cobros y herramientas por dentro. Informe con cifras y plan de acción.',
};

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
    q: '¿Cuánto cuesta la Auditoría de Negocio 360°?',
    a: 'Depende del alcance de tu negocio. Escríbenos por WhatsApp o email y te damos un número claro antes de empezar.',
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

export default function Auditoria360Page() {
  return (
    <div style={{ backgroundColor: '#F5F4EF', color: '#07050A', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* NAVEGACIÓN MINIMALISTA */}
      <nav style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(28, 38, 36, 0.1)' }}>
        <div style={{ fontWeight: '900', fontSize: '1.2rem', color: '#1C2624' }}>
          <span style={{ color: '#A855F7' }}>X</span> TECH
        </div>
        <a href="/" style={{ color: '#1C2624', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>
          ← Volver al inicio
        </a>
      </nav>

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
            <span style={{ background: '#2DD4BF', width: '40px', height: '4px', display: 'block' }}></span>
            <span style={{ fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.85rem', color: '#1C2624', textTransform: 'uppercase' }}>
              Servicio Especializado
            </span>
          </div>
          <h1 className="servicio-hero-title" style={{ fontSize: '4.5rem', fontWeight: '900', lineHeight: '1.1', color: '#1C2624', marginBottom: '2rem', letterSpacing: '-1px' }}>
            Descubre dónde tu negocio <span style={{ color: '#A855F7' }}>pierde dinero</span>.
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#333', maxWidth: '600px', marginBottom: '3rem' }}>
            Analizamos tu negocio por fuera (web, redes, Google, reseñas, competencia) y por dentro (agenda, cobros, herramientas, horas perdidas), y cruzamos ambas mitades para encontrar las inconsistencias que más te cuestan.
          </p>
          <button onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: 'Quiero información sobre la Auditoría de Negocio 360°' }))}
            style={{
              background: '#1C2624', color: '#F5F4EF', padding: '1rem 2.5rem', borderRadius: '4px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', border: 'none', transition: 'all 0.3s ease'
            }}>
            Consultar Auditoría SEO
          </button>
        </div>

        {/* ELEMENTO VISUAL ABSTRACTO */}
        <div className="servicio-hero-visual" style={{ position: 'relative', height: '100%', minHeight: '400px' }}>
          <div style={{ position: 'absolute', top: '10%', right: '10%', width: '100%', height: '100%', background: '#2DD4BF', borderRadius: '2px', zIndex: 1 }}></div>
          <div style={{ position: 'absolute', top: '0', right: '0', width: '100%', height: '100%', background: '#1C2624', borderRadius: '2px', zIndex: 2, padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ color: '#F5F4EF', fontSize: '2rem', margin: '0 0 1rem 0' }}>Qué recibes</h3>
            <ul style={{ color: '#b0adc5', listStyle: 'none', padding: 0, margin: 0, lineHeight: '2' }}>
              <li>✓ Presencia digital sobre 100</li>
              <li>✓ Madurez tecnológica sobre 5</li>
              <li>✓ Plan de acción por fases</li>
            </ul>
          </div>
        </div>
      </header>

      {/* SECCIÓN DE CARACTERÍSTICAS */}
      <section style={{ padding: '6rem 5%', background: '#07050A', color: '#F5F4EF' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '5rem', color: '#F5F4EF' }}>
          Evidencia real, no <span style={{ color: '#2DD4BF' }}>suposiciones</span>
        </h2>

        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

          <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', borderTop: '1px solid #1C2624', paddingTop: '3rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: '900', color: '#2DD4BF', minWidth: '80px' }}>01</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Por fuera y por dentro</h3>
              <p style={{ color: '#b0adc5', lineHeight: '1.6' }}>Revisamos tu web, redes, anuncios activos, ficha de Google, reseñas y competencia — todo lo que un cliente ve antes de escribirte. Después miramos cómo gestionas la agenda, el cobro y qué herramientas usas por dentro.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', borderTop: '1px solid #1C2624', paddingTop: '3rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: '900', color: '#A855F7', minWidth: '80px' }}>02</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Informe con cifras accionables</h3>
              <p style={{ color: '#b0adc5', lineHeight: '1.6' }}>Cada hallazgo respaldado por evidencia real — nada inventado — y un plan de acción por fases con una estimación de las horas y el dinero que podrías recuperar cada mes.</p>
            </div>
          </div>

        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* SECCIÓN DE PREGUNTAS FRECUENTES */}
      <section style={{ padding: '5rem 5%', background: '#07050A', color: '#F5F4EF' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem', color: '#F5F4EF' }}>
          Preguntas frecuentes
        </h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {faqData.map((item, i) => (
            <div key={i} style={{ borderTop: '1px solid #1C2624', paddingTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.6rem', color: '#2DD4BF' }}>{item.q}</h3>
              <p style={{ color: '#b0adc5', lineHeight: '1.6', margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CIERRE CON LLAMADO A LA ACCIÓN */}
      <section style={{ padding: '6rem 5%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#1C2624', marginBottom: '1rem' }}>
          ¿Quieres saber qué te está costando dinero?
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#333', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          Agenda una consultoría y te mostramos exactamente dónde tu negocio está perdiendo tiempo y clientes.
        </p>
        <a
          href="https://wa.me/16055003653?text=Hola,%20vi%20la%20p%C3%A1gina%20de%20Auditor%C3%ADa%20360%C2%B0%20y%20quiero%20una%20consultor%C3%ADa%20gratuita."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: '#1C2624',
            color: '#F5F4EF',
            padding: '1rem 2.5rem',
            borderRadius: '4px',
            fontSize: '1rem',
            fontWeight: 'bold',
            textDecoration: 'none',
          }}
        >
          Solicitar Auditoría Gratuita
        </a>
      </section>
    </div>
  );
}
