'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '5 señales de que tu web te está costando clientes',
  author: { '@type': 'Person', name: 'Dastan Tamayo', jobTitle: 'Fundador', worksFor: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' } },
  publisher: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' },
  datePublished: '2026-09-23',
  description: 'Las 5 señales más comunes que hacen que un visitante se vaya sin reservar ni comprar, con un ejemplo real de rediseño que resolvió las cinco.',
  mainEntityOfPage: 'https://dastanxtech.com/blog/5-senales-web-cuesta-clientes',
};

export default function BlogPost() {
  return (
    <div className="theme-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* CABECERA CON ENLACES */}
      <SiteHeader tone="light" />

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 5% 2rem' }}>
        <p className="label-mono" style={{ marginBottom: '1rem' }}>
          Guía práctica · 23 de septiembre de 2026
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          5 señales de que tu web te está costando clientes
        </h1>
        <div className="byline">
          <div className="byline-avatar" aria-hidden="true">DT</div>
          <p className="byline-text">
            <strong>Dastan Tamayo</strong>
            Fundador de DASTAN X-TECH · 5 min de lectura
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Antes de proponerle una Auditoría 360° a un negocio, revisamos su web primero. Estas cinco señales son las que más se repiten. Las ilustramos con un rediseño real que hicimos para un pequeño spa (mantenemos su nombre fuera de esto por ahora, pero el resultado sí lo puedes ver).
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' }}>1. No hay un teléfono o WhatsApp clicable en ningún lado</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Si la única vía de contacto es un formulario de 6 campos, ya perdiste a quien necesita resolver algo hoy o mañana. Un formulario es fricción alta para una decisión que se toma en segundos. La solución es simple: teléfono y WhatsApp visibles y clicables desde el primer pantallazo, y de nuevo al cierre de la página.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Bloques de scroll completamente vacíos</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Pantallas enteras en blanco entre una sección y otra hacen que el visitante piense que la página terminó o se rompió, y se va antes de llegar a la información real. La página debe avanzar siempre a contenido nuevo, nunca a un hueco vacío.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' }}>3. Banners repetidos que parecen spam</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Un mismo aviso de oferta repetido varias veces seguidas (y a veces cortado en móvil) se lee como spam publicitario y resta profesionalismo justo cuando se forma la primera impresión. Una cabecera limpia, con el nombre del negocio y un acceso directo para contactar, comunica mucho más.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' }}>4. Sin dirección, horario ni forma de ubicarte</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Si tu negocio depende de que alguien llegue físicamente, no mostrar dirección y horario en un lugar fijo (footer o barra de contacto) es un golpe directo a las reservas. Esa información tiene que estar siempre visible y clicable, no escondida ni ausente.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' }}>5. Los servicios no aparecen listados en ningún punto</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Mostrar fotos sin explicar qué tratamientos o productos concretos ofreces deja al visitante sin saber qué puede reservar ni cuál le conviene, así que no decide y se va. Cada servicio necesita su propio espacio, con nombre claro y contexto, antes de llegar al botón de contacto.
        </p>

        <div style={{ background: 'var(--ink)', borderRadius: 'var(--radius-card)', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: '#F5F4EF', fontSize: '1.1rem', marginBottom: '1rem' }}>
            Así se ve resuelto en la práctica — este es el rediseño real del spa que mencionamos arriba:
          </p>
          <a
            href="https://rad-valkyrie-9cdd5a.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', color: '#2DD4BF', fontWeight: 'bold', textDecoration: 'none', marginBottom: '1.5rem' }}
          >
            Ver el rediseño en vivo ↗
          </a>
          <br />
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: 'Vi el post de las 5 señales y quiero saber cómo está mi web' }))}
            type="button"
            className="btn btn-primary"
          >
            Quiero saber cómo está mi web
          </button>
        </div>
      </article>

      <SiteFooter tone="light" />
    </div>
  );
}
