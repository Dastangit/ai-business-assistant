'use client';
import React from 'react';

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Posicionamiento AEO (Answer Engine Optimization)',
  provider: {
    '@type': 'Organization',
    name: 'DASTAN X-TECH',
    url: 'https://dastanxtech.com',
  },
  areaServed: ['Colombia', 'México'],
  description: 'Preparamos tu negocio para que motores de IA como ChatGPT, Gemini y Perplexity lo recomienden directamente: ficha de Google ordenada, contenido estructurado y señales de confianza.',
};

export default function PosicionamientoAeoPage() {
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
      <header style={{
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
          <h1 style={{ fontSize: '4.5rem', fontWeight: '900', lineHeight: '1.1', color: '#1C2624', marginBottom: '2rem', letterSpacing: '-1px' }}>
            Que la IA te <span style={{ color: '#A855F7' }}>recomiende</span>, no solo Google.
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#333', maxWidth: '600px', marginBottom: '3rem' }}>
            Cada vez más personas le preguntan directo a un asistente de IA "¿cuál es la mejor opción cerca de mí?" y confían en la respuesta sin visitar ninguna web. Preparamos tu negocio para ser esa respuesta.
          </p>
          <button onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: 'Quiero información sobre Posicionamiento AEO' }))}
            style={{
              background: '#1C2624', color: '#F5F4EF', padding: '1rem 2.5rem', borderRadius: '4px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', border: 'none', transition: 'all 0.3s ease'
            }}>
            Consultar Posicionamiento AEO
          </button>
        </div>

        {/* ELEMENTO VISUAL ABSTRACTO */}
        <div style={{ position: 'relative', height: '100%', minHeight: '400px' }}>
          <div style={{ position: 'absolute', top: '10%', right: '10%', width: '100%', height: '100%', background: '#2DD4BF', borderRadius: '2px', zIndex: 1 }}></div>
          <div style={{ position: 'absolute', top: '0', right: '0', width: '100%', height: '100%', background: '#1C2624', borderRadius: '2px', zIndex: 2, padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ color: '#F5F4EF', fontSize: '2rem', margin: '0 0 1rem 0' }}>Qué hacemos</h3>
            <ul style={{ color: '#b0adc5', listStyle: 'none', padding: 0, margin: 0, lineHeight: '2' }}>
              <li>✓ Ficha de Google ordenada</li>
              <li>✓ Contenido citable por IA</li>
              <li>✓ Reseñas y señales de confianza</li>
            </ul>
          </div>
        </div>
      </header>

      {/* SECCIÓN DE CARACTERÍSTICAS */}
      <section style={{ padding: '6rem 5%', background: '#07050A', color: '#F5F4EF' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '5rem', color: '#F5F4EF' }}>
          Preparados para la <span style={{ color: '#2DD4BF' }}>era de las respuestas</span>
        </h2>

        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

          <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', borderTop: '1px solid #1C2624', paddingTop: '3rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: '900', color: '#2DD4BF', minWidth: '80px' }}>01</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Consistencia en todas partes</h3>
              <p style={{ color: '#b0adc5', lineHeight: '1.6' }}>Ordenamos y verificamos tu ficha de Google y tus redes para que la información sea clara y coherente — la base que usa la IA para confiar en un negocio.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', borderTop: '1px solid #1C2624', paddingTop: '3rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: '900', color: '#A855F7', minWidth: '80px' }}>02</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Contenido que la IA puede citar</h3>
              <p style={{ color: '#b0adc5', lineHeight: '1.6' }}>Estructuramos servicios, preguntas frecuentes, horarios y precios en un formato que los motores de IA pueden leer y citar directamente al recomendarte.</p>
            </div>
          </div>

        </div>
      </section>

      {/* CIERRE CON LLAMADO A LA ACCIÓN */}
      <section style={{ padding: '6rem 5%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#1C2624', marginBottom: '1rem' }}>
          ¿Listo para que la IA recomiende tu negocio?
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#333', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          Te adelantas a una tendencia que ya está en marcha, en lugar de reaccionar cuando tu competencia ya la domine.
        </p>
        <a
          href="https://wa.me/16055003653?text=Hola,%20vi%20la%20p%C3%A1gina%20de%20Posicionamiento%20AEO%20y%20quiero%20una%20consultor%C3%ADa%20gratuita."
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
          Solicitar Consultoría Gratuita
        </a>
      </section>
    </div>
  );
}
