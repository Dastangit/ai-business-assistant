'use client';
import React from 'react';

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Auditamos nuestra propia web con nuestro método de Auditoría 360°',
  author: { '@type': 'Organization', name: 'DASTAN X-TECH' },
  publisher: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' },
  datePublished: '2026-09-22',
  description: 'Le aplicamos nuestra propia Auditoría de Negocio 360° a dastanxtech.com. Esto fue lo que encontramos, lo que ya corregimos y lo que sigue pendiente.',
  mainEntityOfPage: 'https://dastanxtech.com/blog/auditamos-nuestra-propia-web',
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
          Caso de estudio interno · 22 de septiembre de 2026
        </p>
        <h1 style={{ fontSize: '2.4rem', fontWeight: '900', color: '#1C2624', lineHeight: '1.2', marginBottom: '2rem' }}>
          Auditamos nuestra propia web con nuestro método de Auditoría 360°
        </h1>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Vendemos una Auditoría de Negocio 360° que revisa dónde un negocio pierde tiempo y clientes, con evidencia real, no suposiciones. Nos pareció justo aplicarnos el mismo estándar antes de pedírselo a nadie más. Esto es lo que encontramos en <strong>dastanxtech.com</strong>, sin adornar nada.
        </p>

        <h2 style={{ fontSize: '1.5rem', color: '#1C2624', marginTop: '2.5rem', marginBottom: '1rem' }}>Lo que ya estaba bien</h2>
        <ul style={{ lineHeight: '1.9', paddingLeft: '1.3rem' }}>
          <li>Metadata completa (title, descripción, Open Graph, Twitter Card, canonical) en todas las páginas.</li>
          <li><code>sitemap.xml</code> y <code>robots.txt</code> configurados correctamente, HTTPS activo, diseño responsive.</li>
          <li>Propiedad de Google Search Console verificada.</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', color: '#1C2624', marginTop: '2.5rem', marginBottom: '1rem' }}>Lo que encontramos mal</h2>
        <ul style={{ lineHeight: '1.9', paddingLeft: '1.3rem' }}>
          <li>Cero presencia externa: ninguna mención de la marca en ningún directorio, red social indexada o sitio de terceros.</li>
          <li>Sin Perfil de Negocio de Google.</li>
          <li>Sin una sola reseña o testimonio publicado en ningún lado.</li>
          <li>Sin preguntas frecuentes ni schema <code>FAQPage</code> en las páginas de servicio.</li>
          <li>Textos en inglés sueltos en el home, rompiendo la coherencia del resto del sitio en español.</li>
          <li>El sitio, siendo nuevo, todavía no aparecía indexado en Google.</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', color: '#1C2624', marginTop: '2.5rem', marginBottom: '1rem' }}>Lo que ya corregimos</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Agregamos FAQ y schema <code>FAQPage</code> en las tres páginas de servicio, sumamos datos estructurados <code>Organization</code> a nivel de todo el sitio, tradujimos los textos en inglés que quedaban sueltos, y creamos una página de empresa en LinkedIn como primera señal externa.
        </p>

        <h2 style={{ fontSize: '1.5rem', color: '#1C2624', marginTop: '2.5rem', marginBottom: '1rem' }}>Lo que sigue pendiente</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Conseguir las primeras reseñas reales de clientes, sumar más directorios y menciones externas, y seguir publicando contenido como este. La indexación en Google todavía no llegó — es esperable en un dominio de pocas semanas, y la estamos monitoreando.
        </p>

        <div style={{ background: '#1C2624', borderRadius: '12px', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: '#F5F4EF', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            ¿Querés saber qué encontraríamos en tu negocio?
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: 'Vi el caso de estudio del blog y quiero mi Auditoría 360°' }))}
            style={{ background: '#2DD4BF', color: '#07050A', padding: '1rem 2.5rem', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', border: 'none' }}
          >
            Pedir mi Auditoría 360°
          </button>
        </div>
      </article>
    </div>
  );
}
