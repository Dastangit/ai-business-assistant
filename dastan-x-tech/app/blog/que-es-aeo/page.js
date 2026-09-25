'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Qué es AEO, explicado con un ejemplo real',
  author: { '@type': 'Person', name: 'Dastan Tamayo', jobTitle: 'Fundador', worksFor: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' } },
  publisher: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' },
  datePublished: '2026-09-23',
  description: 'Qué es el Answer Engine Optimization (AEO), por qué ya está pasando y qué tienen en común los negocios que la IA recomienda, con un ejemplo real de Gemini.',
  mainEntityOfPage: 'https://dastanxtech.com/blog/que-es-aeo',
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
          Qué es AEO, explicado con un ejemplo real
        </h1>
        <div className="byline">
          <div className="byline-avatar" aria-hidden="true">DT</div>
          <p className="byline-text">
            <strong>Dastan Tamayo</strong>
            Fundador de DASTAN X-TECH · 4 min de lectura
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Cada vez más gente no busca en Google — le pregunta directo a ChatGPT, Gemini o Perplexity. Según la encuesta BrightLocal 2026 de reseñas de consumidores, un 45% de las personas ya usó ese tipo de herramientas de IA para encontrar negocios locales. AEO (Answer Engine Optimization) es preparar tu negocio para que esas IAs te recomienden a ti primero.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' }}>AEO no reemplaza al SEO, lo complementa</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          El SEO tradicional busca que Google te muestre en una lista de diez resultados azules para que el usuario elija. El AEO busca algo distinto: que la IA lea, entienda y cite tu negocio como LA respuesta, sin que el usuario tenga que comparar nada. Son juegos relacionados, pero con reglas distintas.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' }}>Lo probamos en vivo</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Le preguntamos a Gemini: <em>"¿Cuál es el mejor spa en Medellín?"</em>. La respuesta no fue una lista genérica — fueron 5 negocios reales, cada uno con su calificación de Google (todos entre 4.4★ y 4.9★), su horario de atención, su categoría de negocio, y 2 o 3 líneas muy específicas sobre qué los hace distintos: uno por su circuito de hidroterapia, otro por sus masajes de tejido profundo y sound healing, otro por su chocolaterapia.
        </p>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Ninguno de esos negocios "pagó" por aparecer ahí. La IA los citó porque su información pública ya estaba lista para ser citada.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' }}>Qué tienen en común los negocios que la IA recomienda</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Al revisar esos 5 resultados, se repite siempre el mismo patrón:
        </p>
        <ul style={{ lineHeight: '1.9', paddingLeft: '1.3rem', marginBottom: '1rem' }}>
          <li><strong>Ficha de Google completa</strong> — categoría correcta, horario actualizado, reseñas reales y una calificación alta y consistente.</li>
          <li><strong>Contenido específico, no genérico</strong> — la IA no dijo "buen servicio y buena atención" de ninguno; dijo qué tratamiento exacto ofrece cada uno.</li>
          <li><strong>Señales de confianza visibles</strong> — la cantidad y calidad de reseñas es lo primero que la IA usa para decidir a quién citar primero.</li>
        </ul>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Es exactamente lo que trabajamos en nuestro servicio de Posicionamiento AEO: ordenar tu ficha de Google y redes, dejar contenido citable sobre lo que realmente ofreces, y reforzar las señales de confianza que la IA usa para elegir.
        </p>

        <div style={{ background: 'var(--ink)', borderRadius: 'var(--radius-card)', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: '#F5F4EF', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            ¿Quieres saber si la IA ya te está recomendando a ti, o a tu competencia?
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: 'Vi el post sobre AEO y quiero saber si la IA me está recomendando' }))}
            type="button"
            className="btn btn-primary"
          >
            Quiero saber si la IA me recomienda
          </button>
        </div>
      </article>

      <SiteFooter tone="light" />
    </div>
  );
}
