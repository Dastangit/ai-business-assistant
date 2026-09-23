'use client';
import React from 'react';

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '5 señales de que tu web te está costando clientes',
  author: { '@type': 'Organization', name: 'DASTAN X-TECH' },
  publisher: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' },
  datePublished: '2026-09-23',
  description: 'Las 5 señales más comunes que hacen que un visitante se vaya sin reservar ni comprar, con un ejemplo real de rediseño que resolvió las cinco.',
  mainEntityOfPage: 'https://dastanxtech.com/blog/5-senales-web-cuesta-clientes',
};

export default function BlogPost() {
  return (
    <div style={{ backgroundColor: '#F5F4EF', color: '#07050A', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* NAVEGACIÓN MINIMALISTA */}
      <nav style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(28, 38, 36, 0.1)' }}>
        <div style={{ fontWeight: '900', fontSize: '1.2rem', color: '#1C2624' }}>
          <span style={{ color: '#A855F7' }}>X</span> TECH
        </div>
        <a href="/blog" style={{ color: '#1C2624', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>
          ← Volver al blog
        </a>
      </nav>

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 5% 2rem' }}>
        <p style={{ color: '#2DD4BF', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
          Guía práctica · 23 de septiembre de 2026
        </p>
        <h1 style={{ fontSize: '2.4rem', fontWeight: '900', color: '#1C2624', lineHeight: '1.2', marginBottom: '2rem' }}>
          5 señales de que tu web te está costando clientes
        </h1>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Antes de proponerle una Auditoría 360° a un negocio, revisamos su web primero. Estas cinco señales son las que más se repiten. Las ilustramos con un rediseño real que hicimos para un pequeño spa (mantenemos su nombre fuera de esto por ahora, pero el resultado sí lo puedes ver).
        </p>

        <h2 style={{ fontSize: '1.5rem', color: '#1C2624', marginTop: '2.5rem', marginBottom: '1rem' }}>1. No hay un teléfono o WhatsApp clicable en ningún lado</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Si la única vía de contacto es un formulario de 6 campos, ya perdiste a quien necesita resolver algo hoy o mañana. Un formulario es fricción alta para una decisión que se toma en segundos. La solución es simple: teléfono y WhatsApp visibles y clicables desde el primer pantallazo, y de nuevo al cierre de la página.
        </p>

        <h2 style={{ fontSize: '1.5rem', color: '#1C2624', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Bloques de scroll completamente vacíos</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Pantallas enteras en blanco entre una sección y otra hacen que el visitante piense que la página terminó o se rompió, y se va antes de llegar a la información real. La página debe avanzar siempre a contenido nuevo, nunca a un hueco vacío.
        </p>

        <h2 style={{ fontSize: '1.5rem', color: '#1C2624', marginTop: '2.5rem', marginBottom: '1rem' }}>3. Banners repetidos que parecen spam</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Un mismo aviso de oferta repetido varias veces seguidas (y a veces cortado en móvil) se lee como spam publicitario y resta profesionalismo justo cuando se forma la primera impresión. Una cabecera limpia, con el nombre del negocio y un acceso directo para contactar, comunica mucho más.
        </p>

        <h2 style={{ fontSize: '1.5rem', color: '#1C2624', marginTop: '2.5rem', marginBottom: '1rem' }}>4. Sin dirección, horario ni forma de ubicarte</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Si tu negocio depende de que alguien llegue físicamente, no mostrar dirección y horario en un lugar fijo (footer o barra de contacto) es un golpe directo a las reservas. Esa información tiene que estar siempre visible y clicable, no escondida ni ausente.
        </p>

        <h2 style={{ fontSize: '1.5rem', color: '#1C2624', marginTop: '2.5rem', marginBottom: '1rem' }}>5. Los servicios no aparecen listados en ningún punto</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Mostrar fotos sin explicar qué tratamientos o productos concretos ofreces deja al visitante sin saber qué puede reservar ni cuál le conviene, así que no decide y se va. Cada servicio necesita su propio espacio, con nombre claro y contexto, antes de llegar al botón de contacto.
        </p>

        <div style={{ background: '#1C2624', borderRadius: '12px', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
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
            style={{ background: '#2DD4BF', color: '#07050A', padding: '1rem 2.5rem', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', border: 'none' }}
          >
            Quiero saber cómo está mi web
          </button>
        </div>
      </article>
    </div>
  );
}
