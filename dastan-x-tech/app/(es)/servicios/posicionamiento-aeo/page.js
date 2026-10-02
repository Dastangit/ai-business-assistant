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
    a: 'Desde 150 USD. Necesita una web en buen estado: si la tuya no lo está, el Pack completo (Diseño web + Auditoría Completa + AEO) cuesta 400 USD. El precio final depende de cuántas fichas, redes y páginas haya que ordenar, y te lo confirmamos antes de empezar.',
  },
  {
    q: '¿Funciona para cualquier tipo de negocio?',
    a: 'Sí, siempre que haya una base sólida por fuera: una web clara y una ficha de Google ordenada. Si todavía no la tienes, empezamos por ahí con el Diseño web o con el Pack completo.',
  },
];

// Por qué importa el AEO: sin prometer resultados, como el resto de la web.
// Las reservas y compras con agentes de IA no entran en el AEO: se hacen con la Membresía de Implementación
const razonesAeo = [
  {
    titulo: 'Recomendación directa',
    texto: 'Cuando un cliente potencial le pide a una IA las mejores empresas o servicios de tu sector, el AEO te prepara para ser la respuesta recomendada.',
  },
  {
    titulo: 'Adaptación a agentes de IA',
    texto: 'Ordenamos la estructura de tu web para que los asistentes entiendan con exactitud tu catálogo, tus precios y tus servicios, sin errores ni ambigüedades.',
  },
  {
    titulo: 'Reservas y compras desde el chat',
    etiqueta: 'Con la Membresía',
    texto: 'Preparamos tu negocio para que los agentes de IA puedan gestionar reservas o compras en nombre de tus clientes, directamente desde el chat. Esto se hace aparte, con la Membresía de Implementación.',
  },
  {
    titulo: 'Visibilidad a largo plazo',
    texto: 'A medida que más búsquedas se hacen preguntándole a una IA, el AEO ayuda a que tu marca siga siendo relevante y siga captando clientes.',
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

      {/* QUÉ ES EL AEO: para quien quiere entenderlo antes de consultar, con el ejemplo real del blog al final */}
      <section style={{ padding: '6rem 5%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', justifyContent: 'center' }}>
          <span style={{ background: 'var(--brand-on-light)', width: '32px', height: '3px', display: 'block' }}></span>
          <span className="label-mono">Qué es el AEO</span>
        </div>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2.5rem', color: 'var(--ink)' }}>
          ¿Qué es el <span className="accent-light">AEO</span>?
        </h2>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--ink-2)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            <p>
              La forma en que las personas buscan información, productos y servicios ha cambiado. Las listas de enlaces de siempre están dando paso a motores de respuesta y asistentes de inteligencia artificial como ChatGPT, Gemini, Perplexity o Claude. Si tu web no está preparada para que la IA la entienda, tu negocio corre el riesgo de quedar invisible para millones de personas.
            </p>
            <p>
              El AEO (Answer Engine Optimization, u optimización para motores de respuesta) es el siguiente paso después del SEO tradicional, sin sustituirlo. En lugar de optimizar tu web solo para aparecer en los buscadores y conseguir clics, ordena tu información para que los asistentes y agentes de IA la lean, la entiendan y recomienden tu marca cuando alguien les hace una pregunta directa.
            </p>
          </div>

          <h3 style={{ fontSize: '1.5rem', color: 'var(--ink)', margin: '3rem 0 1.25rem' }}>Por qué importa para tu negocio</h3>
          <div className="aeo-razones">
            {razonesAeo.map((r) => (
              <div key={r.titulo} className="aeo-razon">
                {r.etiqueta && <span className="label-mono aeo-razon-etiqueta">{r.etiqueta}</span>}
                <h4>{r.titulo}</h4>
                <p>{r.texto}</p>
              </div>
            ))}
          </div>

          <blockquote className="aeo-cita">
            En la web del futuro no basta con que te vean las personas: tu negocio tiene que ser comprendido y recomendado por las máquinas.
          </blockquote>

          <a href="/blog/que-es-aeo" className="text-link">
            Mira un ejemplo real: le preguntamos a Gemini por el mejor spa de Medellín →
          </a>
        </div>
      </section>

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
          <a href="https://wa.me/16055003653?text=Hola,%20vi%20la%20p%C3%A1gina%20de%20Posicionamiento%20AEO%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer" className="text-link">
            o escríbenos por WhatsApp →
          </a>
        </div>
      </section>

      <SiteFooter tone="light" />
    </div>
  );
}
