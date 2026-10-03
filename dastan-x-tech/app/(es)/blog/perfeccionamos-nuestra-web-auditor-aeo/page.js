'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { REVISIONES } from '@/lib/revisiones';
import { ruta } from '@/lib/i18n';

// Caso de estudio con fecha: las cifras salen de las auditorías del 1 y el 2 de octubre de 2026
// (auditor AEO, carpeta del cliente «dastanxtech»). Si cambias algo aquí, cambia lo mismo en la versión en inglés.
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Perfeccionamos nuestra web con nuestro auditor AEO',
  author: { '@type': 'Person', name: 'Dastan Tamayo', jobTitle: 'Fundador', worksFor: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' } },
  publisher: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' },
  datePublished: '2026-10-03',
  dateModified: REVISIONES['/blog/perfeccionamos-nuestra-web-auditor-aeo'],
  description: 'Pasamos dastanxtech.com por nuestro propio auditor AEO: qué mide, qué encontró, qué corregimos y cómo pasamos de 94 a 97 sobre 100.',
  mainEntityOfPage: 'https://dastanxtech.com/blog/perfeccionamos-nuestra-web-auditor-aeo',
};

const h2 = { fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' };
const parrafo = { lineHeight: '1.8', marginBottom: '1rem' };
const lista = { lineHeight: '1.9', paddingLeft: '1.3rem', marginBottom: '1rem' };

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
          Caso de estudio interno · 3 de octubre de 2026
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          Perfeccionamos nuestra web con nuestro auditor AEO
        </h1>
        <div className="byline">
          <div className="byline-avatar" aria-hidden="true">DT</div>
          <p className="byline-text">
            <strong>Dastan Tamayo</strong>
            Fundador de DASTAN X-TECH · 4 min de lectura
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Para el Posicionamiento AEO construimos nuestro propio auditor: una herramienta que mide si ChatGPT, Perplexity, Claude y Gemini pueden leer, entender y citar una web. Antes de usarlo con ningún cliente, lo pasamos por <strong>dastanxtech.com</strong>. Esto es lo que encontró, lo que corregimos y el resultado.
        </p>

        <h2 style={h2}>Qué mide el auditor</h2>
        <p style={parrafo}>
          Google ejecuta el JavaScript de las páginas; la mayoría de los asistentes de IA, no. Por eso el auditor lee cada página dos veces, como la vería una persona y como la ve un asistente de IA, y compara las dos. Después responde a las 8 preguntas que se hace la IA antes de recomendar un negocio:
        </p>
        <ul style={lista}>
          <li>¿Puede entrar en la web, o el robots.txt le cierra la puerta?</li>
          <li>¿Puede leer el contenido sin ejecutar JavaScript?</li>
          <li>¿Entiende qué es el negocio y qué vende (datos estructurados)?</li>
          <li>¿Puede extraer y citar párrafos que respondan a una pregunta?</li>
          <li>¿Sabe quién está detrás y se fía (aviso legal, perfiles, reseñas)?</li>
          <li>¿Puede fechar el contenido y saber si sigue vigente?</li>
          <li>¿Está en orden la base del SEO (títulos, sitemap, idioma)?</li>
          <li>¿Responde la web rápido y sin errores?</li>
        </ul>
        <p style={parrafo}>
          Cada hallazgo lleva su prueba: la página exacta y el fragmento que falla. Y antes de enseñar un informe, revisamos cada hallazgo a mano contra la web real.
        </p>

        <h2 style={h2}>Lo que ya estaba bien</h2>
        <p style={parrafo}>
          La primera auditoría, el 1 de octubre, dio <strong>94 sobre 100</strong>. Lo más difícil estaba resuelto: ningún asistente de IA tenía la puerta cerrada, todas las páginas llegaban completas sin depender de JavaScript y los datos estructurados ya decían quiénes somos y qué ofrecemos. Es justo donde fallan muchas webs hechas con constructores visuales.
        </p>

        <h2 style={h2}>Lo que encontró</h2>
        <ul style={lista}>
          <li>No había aviso legal ni política de privacidad: nada decía qué empresa hay detrás de la web.</li>
          <li>Los artículos decían cuándo se publicaron, pero no cuándo se revisaron por última vez.</li>
          <li>El sitemap ponía la misma fecha a todas las páginas, así que no servía para saber qué había cambiado.</li>
          <li>El título de un artículo era demasiado largo y se cortaba en los resultados de búsqueda.</li>
          <li>No había reseñas ni testimonios de clientes.</li>
        </ul>

        <h2 style={h2}>Lo que corregimos</h2>
        <ul style={lista}>
          <li>Publicamos la <a href={ruta('privacidad', 'es')} className="text-link">página de privacidad</a>, con quién es el responsable y cómo tratamos los datos que llegan por el chat.</li>
          <li>Cada página guarda ahora la fecha real de su última revisión, y la usan tanto el sitemap como los datos estructurados de los artículos.</li>
          <li>Acortamos el título que se cortaba.</li>
          <li>Añadimos al robots.txt cómo pueden usar nuestro contenido los asistentes de IA (Content-Signal). Con eso subimos del nivel 1 al 2 en el escáner de agentes de Cloudflare.</li>
          <li>Después fuimos un paso más allá: la portada indica a los agentes de IA dónde está la descripción de la web (cabeceras Link), y cualquier página se puede pedir en Markdown, el formato de texto que prefieren los agentes.</li>
        </ul>

        <h2 style={h2}>El resultado</h2>
        <p style={parrafo}>
          La auditoría de hoy da <strong>97 sobre 100</strong>. De los cinco hallazgos queda uno: las reseñas. Es normal en un negocio que empieza, y no se arregla con código, sino con clientes contentos.
        </p>
        <p style={parrafo}>
          El informe completo es exactamente el que recibe un cliente, con la nota, las 8 preguntas, el antes y el después y las pruebas de cada hallazgo:
        </p>
        <p style={parrafo}>
          <a href="/ejemplo-informe-aeo" className="text-link" target="_blank" rel="noopener">Ver el informe completo de dastanxtech.com →</a>
        </p>

        <div style={{ background: '#FAF9FC', border: '1px solid var(--line-light)', borderRadius: 'var(--radius-card)', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--ink)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            ¿Quieres saber qué ve la IA cuando lee tu web?
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: 'Quiero información sobre Posicionamiento AEO' }))}
            type="button"
            className="btn btn-suave"
          >
            Consultar Posicionamiento AEO
          </button>
        </div>
      </article>

      <SiteFooter tone="light" />
    </div>
  );
}
