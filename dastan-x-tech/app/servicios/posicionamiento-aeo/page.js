'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const faqData = [
  {
    q: '¿Qué es exactamente el Posicionamiento AEO?',
    a: 'Answer Engine Optimization: preparar tu negocio para que asistentes de IA como ChatGPT, Gemini o Perplexity te recomienden directamente cuando alguien pregunta “¿cuál es la mejor opción cerca de mí?”, sin que la persona visite ninguna web.',
  },
  {
    q: '¿Reemplaza al SEO tradicional?',
    a: 'No, lo complementa. Sigues apareciendo en Google como siempre, y además en las respuestas que dan los motores de IA.',
  },
  {
    q: '¿Cuánto tarda en dar resultados?',
    a: 'Depende de cuánta información pública y consistente tenga tu negocio hoy — por eso empezamos ordenando tu ficha de Google y tus redes antes que nada.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'Desde 200 USD, e incluye el Diseño web y la Auditoría Completa de Negocio. El precio final depende de cuántas fichas, redes y páginas haya que ordenar, y te lo confirmamos antes de empezar.',
  },
  {
    q: '¿Funciona para cualquier tipo de negocio?',
    a: 'Sí. Funciona mejor cuando hay una base sólida por fuera, y por eso incluye el Diseño web y la Auditoría Completa de Negocio: primero dejamos esa base lista y después trabajamos para que la IA te recomiende.',
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

export default function PosicionamientoAeoPage() {
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
            <span className="label-mono">Servicio · Posicionamiento AEO</span>
          </div>
          <h1 className="servicio-hero-title" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)', fontWeight: '700', lineHeight: '1.08', color: 'var(--ink)', marginBottom: '1.5rem', letterSpacing: '-0.025em' }}>
            Que la IA te <span className="accent-light">recomiende</span>, no solo Google.
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--ink-2)', maxWidth: '600px', marginBottom: '2.5rem' }}>
            Cada vez más personas le preguntan directo a un asistente de IA «¿cuál es la mejor opción cerca de mí?» y confían en la respuesta sin visitar ninguna web. Preparamos tu negocio para ser esa respuesta.
          </p>
          <button type="button" className="btn btn-ink" onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: 'Quiero información sobre Posicionamiento AEO' }))}>
            Consultar Posicionamiento AEO
          </button>
        </div>

        {/* TARJETA DEL HERO */}
        <div className="servicio-hero-visual servicio-hero-card">
          <h3>Qué hacemos</h3>
          <ul className="dot-list">
            <li>Ficha de Google ordenada</li>
            <li>Contenido citable por IA</li>
            <li>Reseñas y señales de confianza</li>
          </ul>
        </div>
      </header>

      {/* SECCIÓN DE CARACTERÍSTICAS */}
      <section style={{ padding: '6rem 5%' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '5rem', color: 'var(--ink)' }}>
          Preparados para la <span className="accent-light">era de las respuestas</span>
        </h2>

        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

          <div className="feature-row">
            <div className="feature-number">01</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Consistencia en todas partes</h3>
              <p style={{ color: 'var(--ink-2)', lineHeight: '1.6' }}>Ordenamos y verificamos tu ficha de Google y tus redes para que la información sea clara y coherente — la base que usa la IA para confiar en un negocio.</p>
            </div>
          </div>

          <div className="feature-row">
            <div className="feature-number feature-number--brand">02</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Contenido que la IA puede citar</h3>
              <p style={{ color: 'var(--ink-2)', lineHeight: '1.6' }}>Estructuramos servicios, preguntas frecuentes, horarios y precios en un formato que los motores de IA pueden leer y citar directamente al recomendarte.</p>
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
          ¿Listo para que la IA recomiende tu negocio?
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--ink-2)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          Te adelantas a una tendencia que ya está en marcha, en lugar de reaccionar cuando tu competencia ya la domine.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <button type="button" className="btn btn-ink" onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: 'Quiero información sobre Posicionamiento AEO' }))}>
            Consultar Posicionamiento AEO
          </button>
          <a href="https://wa.me/16055003653?text=Hola,%20vi%20la%20p%C3%A1gina%20de%20Posicionamiento%20AEO%20y%20quiero%20mi%20diagn%C3%B3stico%20SEO%20gratis." target="_blank" rel="noopener noreferrer" className="text-link">
            o escríbenos por WhatsApp →
          </a>
        </div>
      </section>

      <SiteFooter tone="light" />
    </div>
  );
}
