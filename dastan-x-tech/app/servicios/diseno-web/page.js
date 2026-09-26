'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const faqData = [
  {
    q: '¿Cuánto tarda la entrega de la web nueva?',
    a: 'En tiempo récord, sin comprometer la calidad. El plazo exacto depende del alcance de tu negocio y te lo confirmamos en la consultoría inicial.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'Desde 100 USD. El precio final depende de cuántas páginas y servicios tenga tu web, y te lo confirmamos antes de empezar.',
  },
  {
    q: '¿Qué necesitan de mi negocio para empezar?',
    a: 'Tu marca real: logo, colores, tipografías, textos, precios y reseñas actuales. Nunca inventamos contenido que no sea tuyo.',
  },
  {
    q: '¿Qué pasa si ya tengo una web?',
    a: 'La analizamos primero: te damos un diagnóstico honesto con problemas concretos y observables — cada uno con la razón por la que te cuesta clientes — antes de tocar nada.',
  },
  {
    q: '¿La web incluye el chat con Inteligencia Artificial?',
    a: 'Sí. Un asistente que responde dudas a cualquier hora y guarda el nombre y el WhatsApp de quien pregunta, para que no se te escape nadie. Es el mismo que puedes probar en esta página.',
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

export default function DisenoWebPage() {
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
            <span style={{ background: 'var(--action-on-light)', width: '32px', height: '3px', display: 'block' }}></span>
            <span className="label-mono">Servicio · Diseño web</span>
          </div>
          <h1 className="servicio-hero-title" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)', fontWeight: '700', lineHeight: '1.08', color: 'var(--ink)', marginBottom: '1.5rem', letterSpacing: '-0.025em' }}>
            Tu web nueva, con tu marca y tu <span className="accent-light">WhatsApp</span> a un toque.
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--ink-2)', maxWidth: '600px', marginBottom: '2.5rem' }}>
            Renovamos la web de tu negocio: tus servicios explicados, tus precios claros y tu WhatsApp siempre visible. Con la estructura que Google y los asistentes de IA necesitan para entender qué ofreces.
          </p>
          <button type="button" className="btn btn-ink" onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: 'Quiero información sobre Diseño Web para mi negocio' }))}>
            Consultar proyecto
          </button>
        </div>

        {/* TARJETA DEL HERO */}
        <div className="servicio-hero-visual servicio-hero-card">
          <h3>Qué recibes</h3>
          <ul className="dot-list">
            <li>Diagnóstico de tu web actual</li>
            <li>Web nueva, rápida y adaptada al móvil</li>
            <li>Lista para Google y para la IA</li>
          </ul>
          <a href="#caso-real" className="text-link" style={{ color: 'var(--action)' }}>Ver un rediseño real ↓</a>
        </div>
      </header>

      {/* CASO REAL: EJEMPLO DE REDISEÑO */}
      <section id="caso-real" style={{ padding: '5rem 5%', scrollMarginTop: '1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', justifyContent: 'center' }}>
            <span style={{ background: 'var(--brand-on-light)', width: '32px', height: '3px', display: 'block' }}></span>
            <span className="label-mono">Ejemplo real</span>
          </div>
          <h2 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: '700', color: 'var(--ink)', marginBottom: '1rem', letterSpacing: '-0.015em' }}>
            Así se ve un <span className="accent-light">rediseño real</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--ink-2)', maxWidth: '650px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
            Este es un rediseño que hicimos para un pequeño spa (mantenemos su nombre fuera por ahora). La web original no tenía WhatsApp clicable, tenía bloques de scroll vacíos y no listaba ninguno de sus servicios. Esto fue lo que cambiamos:
          </p>

          <ul style={{ color: 'var(--ink)', maxWidth: '650px', margin: '0 auto 2.5rem', lineHeight: '1.9', paddingLeft: '1.3rem' }}>
            <li>Teléfono y WhatsApp clicables desde el primer segundo — antes, solo un formulario de 6 campos.</li>
            <li>Cada servicio (masajes, tratamientos específicos, terapias con piedras calientes...) con su propio espacio, en vez de fotos sin explicar.</li>
            <li>Scroll continuo sin pantallas vacías ni banners repetidos que parecían spam.</li>
          </ul>

          <div style={{ textAlign: 'center' }}>
            <a href="https://rad-valkyrie-9cdd5a.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
              Ver el rediseño en vivo ↗
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CARACTERÍSTICAS */}
      <section style={{ padding: '6rem 5%', background: '#07050A', color: '#F5F4EF' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '5rem', color: '#F5F4EF' }}>
          Más que una <span style={{ color: '#2DD4BF' }}>web bonita</span>
        </h2>

        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          <div className="feature-row">
            <div className="feature-number">01</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Preparada para Google y la IA</h3>
              <p style={{ color: 'var(--text-2)', lineHeight: '1.6' }}>Estructuramos el código y el contenido para que Google y los asistentes de IA entiendan qué ofreces, dónde y a qué precio: la base para que te encuentren y te recomienden.</p>
            </div>
          </div>

          <div className="feature-row">
            <div className="feature-number feature-number--brand">02</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Un asistente que no deja escapar a nadie</h3>
              <p style={{ color: 'var(--text-2)', lineHeight: '1.6' }}>Responde las dudas de tus clientes a cualquier hora y guarda su nombre y su WhatsApp para que los contactes al día siguiente. Pruébalo en esta misma página.</p>
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
            <div key={i} className="faq-item">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.6rem', color: '#2DD4BF' }}>{item.q}</h3>
              <p style={{ color: 'var(--text-2)', lineHeight: '1.6', margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CIERRE: el mismo camino principal que el hero, con WhatsApp como alternativa */}
      <section style={{ padding: '6rem 5%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--ink)', marginBottom: '1rem', letterSpacing: '-0.015em' }}>
          ¿Quieres saber qué le falta a tu web?
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--ink-2)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          Pide el diagnóstico SEO gratis de tu web: tu puntuación de 0 a 100 y las 5 correcciones más urgentes, en un PDF por WhatsApp. ¿No tienes web? Te la creamos, incluso a partir de tu Instagram.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <button type="button" className="btn btn-ink" onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: 'Quiero información sobre Diseño Web para mi negocio' }))}>
            Consultar proyecto
          </button>
          <a href="https://wa.me/16055003653?text=Hola,%20vi%20la%20p%C3%A1gina%20de%20Dise%C3%B1o%20Web%20y%20quiero%20mi%20diagn%C3%B3stico%20SEO%20gratis." target="_blank" rel="noopener noreferrer" className="text-link">
            o escríbenos por WhatsApp →
          </a>
        </div>
      </section>

      <SiteFooter tone="light" />
    </div>
  );
}