'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Auditamos nuestra propia web con nuestra Auditoría Completa de Negocio',
  author: { '@type': 'Person', name: 'Dastan Tamayo', jobTitle: 'Fundador', worksFor: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' } },
  publisher: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' },
  datePublished: '2026-09-22',
  description: 'Le aplicamos nuestra propia Auditoría Completa de Negocio a dastanxtech.com. Esto fue lo que encontramos, lo que ya corregimos y lo que sigue pendiente.',
  mainEntityOfPage: 'https://dastanxtech.com/blog/auditamos-nuestra-propia-web',
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
          Caso de estudio interno · 22 de septiembre de 2026
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          Auditamos nuestra propia web con nuestra Auditoría Completa de Negocio
        </h1>
        <div className="byline">
          <div className="byline-avatar" aria-hidden="true">DT</div>
          <p className="byline-text">
            <strong>Dastan Tamayo</strong>
            Fundador de DASTAN X-TECH · 4 min de lectura
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Vendemos una Auditoría Completa de Negocio que revisa dónde un negocio pierde tiempo y clientes, con evidencia real, no suposiciones. Nos pareció justo aplicarnos el mismo estándar antes de pedírselo a nadie más. Esto es lo que encontramos en <strong>dastanxtech.com</strong>, sin adornar nada.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' }}>Lo que ya estaba bien</h2>
        <ul style={{ lineHeight: '1.9', paddingLeft: '1.3rem' }}>
          <li>Metadata completa (title, descripción, Open Graph, Twitter Card, canonical) en todas las páginas.</li>
          <li><code>sitemap.xml</code> y <code>robots.txt</code> configurados correctamente, HTTPS activo, diseño responsive.</li>
          <li>Propiedad de Google Search Console verificada.</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' }}>Lo que encontramos mal</h2>
        <ul style={{ lineHeight: '1.9', paddingLeft: '1.3rem' }}>
          <li>Cero presencia externa: ninguna mención de la marca en ningún directorio, red social indexada o sitio de terceros.</li>
          <li>Sin Perfil de Negocio de Google.</li>
          <li>Sin una sola reseña o testimonio publicado en ningún lado.</li>
          <li>Sin preguntas frecuentes ni schema <code>FAQPage</code> en las páginas de servicio.</li>
          <li>Textos en inglés sueltos en el home, rompiendo la coherencia del resto del sitio en español.</li>
          <li>El sitio, siendo nuevo, todavía no aparecía indexado en Google.</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' }}>Lo que ya corregimos</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Agregamos FAQ y schema <code>FAQPage</code> en las tres páginas de servicio, sumamos datos estructurados <code>Organization</code> a nivel de todo el sitio, tradujimos los textos en inglés que quedaban sueltos, y creamos una página de empresa en LinkedIn como primera señal externa.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' }}>Lo que sigue pendiente</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Conseguir las primeras reseñas reales de clientes, sumar más directorios y menciones externas, y seguir publicando contenido como este. La indexación en Google todavía no llegó — es esperable en un dominio de pocas semanas, y la estamos monitoreando.
        </p>

        <div style={{ background: 'var(--ink)', borderRadius: 'var(--radius-card)', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: '#F5F4EF', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            ¿Quieres saber qué encontraríamos en tu negocio?
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: { diagnostico: true } }))}
            type="button"
            className="btn btn-primary"
          >
            Pedir diagnóstico SEO gratis
          </button>
        </div>
      </article>

      <SiteFooter tone="light" />
    </div>
  );
}
