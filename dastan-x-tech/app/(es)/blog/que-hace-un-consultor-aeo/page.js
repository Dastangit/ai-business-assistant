'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { REVISIONES } from '@/lib/revisiones';
import { ruta } from '@/lib/i18n';

// Guía para la búsqueda «consultor aeo» (la que ya nos trae impresiones en Search Console, oct. 2026).
// El resultado de Is It Agent Ready es el de isitagentready.com/dastanxtech.com del 29 de octubre de 2026:
// nivel 4 «Agent-Integrated», Contenido 100, Control de acceso de bots 100, Descubrimiento 3/4, APIs/MCP 0/8.
// Si cambias algo aquí, cambia lo mismo en la versión en inglés.
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '¿Qué hace un consultor AEO?',
  author: { '@type': 'Person', name: 'Dastan Tamayo', jobTitle: 'Fundador', worksFor: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' } },
  publisher: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' },
  datePublished: '2026-10-29',
  dateModified: REVISIONES['/blog/que-hace-un-consultor-aeo'],
  description: 'Qué revisa un consultor AEO para que ChatGPT, Gemini y Perplexity recomienden tu negocio, con nuestra web de ejemplo: nivel 4 en Is It Agent Ready de Cloudflare.',
  mainEntityOfPage: 'https://dastanxtech.com/blog/que-hace-un-consultor-aeo',
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
          Guía práctica · 29 de octubre de 2026
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          ¿Qué hace un consultor AEO?
        </h1>
        <div className="byline">
          <div className="byline-avatar" aria-hidden="true">DT</div>
          <p className="byline-text">
            <strong>Dastan Tamayo</strong>
            Fundador de DASTAN X-TECH · 5 min de lectura
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Un consultor AEO prepara tu negocio para que los asistentes de IA —ChatGPT, Gemini, Perplexity o Claude— lo entiendan, se fíen de él y lo recomienden cuando alguien les pregunta por un servicio como el tuyo. Es el trabajo que hacemos en DASTAN X-TECH. Aquí lo contamos paso a paso, con nuestra propia web como ejemplo.
        </p>

        <h2 style={h2}>AEO y SEO, en una frase</h2>
        <p style={parrafo}>
          El SEO busca que aparezcas en la lista de resultados de Google. El AEO (Answer Engine Optimization) busca que seas <strong>la respuesta</strong> cuando alguien le pregunta a una IA «¿cuál es la mejor opción cerca de mí?». No se sustituyen: el AEO se apoya en una web que ya funciona bien en Google. Si quieres el concepto con un ejemplo, lo explicamos en <a href={ruta('blogAeo', 'es')} className="text-link">qué es AEO</a>.
        </p>

        <h2 style={h2}>Qué revisa un consultor AEO, paso a paso</h2>
        <ol style={lista}>
          <li><strong>Que la IA pueda entrar.</strong> Que el robots.txt no les cierre la puerta a los bots de ChatGPT, Claude, Perplexity o Google, y que diga cómo pueden usar tu contenido.</li>
          <li><strong>Que pueda leerte.</strong> Google ejecuta el JavaScript de una web; la mayoría de los asistentes de IA, no. Si tu contenido solo aparece después de cargar el JavaScript, para ellos la página está vacía.</li>
          <li><strong>Que entienda qué eres.</strong> Datos estructurados que dicen, en un formato que las máquinas leen, qué negocio eres, qué vendes y dónde trabajas.</li>
          <li><strong>Que pueda citarte.</strong> Servicios, precios, horarios y preguntas frecuentes escritos como respuestas claras, que la IA pueda copiar tal cual al recomendarte.</li>
          <li><strong>Que se fíe de ti.</strong> Ficha de Google ordenada, redes con los mismos datos que la web, aviso legal y reseñas reales. La IA recomienda lo que puede contrastar en varios sitios.</li>
          <li><strong>Que tu web esté lista para los agentes de IA.</strong> Lo medimos con <a href="https://isitagentready.com" target="_blank" rel="noopener noreferrer" className="text-link">Is It Agent Ready</a>, la prueba gratuita de Cloudflare, y corregimos lo que le baja la nota.</li>
        </ol>

        <h2 style={h2}>Nuestro caso: dastanxtech.com</h2>
        <p style={parrafo}>
          Antes de hacerlo con ningún cliente, lo hicimos con nuestra web. En nuestro auditor AEO, que responde a las 8 preguntas que se hace la IA antes de recomendar un negocio, pasamos de 94 a 97 sobre 100; lo contamos en <a href={ruta('blogAuditorAeo', 'es')} className="text-link">perfeccionamos nuestra web con nuestro auditor AEO</a>.
        </p>
        <p style={parrafo}>
          En Is It Agent Ready, la web está hoy en el <strong>nivel 4, «Agent-Integrated»</strong>:
        </p>
        <ul style={lista}>
          <li><strong>Contenido: 100.</strong> Cualquier página se puede pedir en Markdown, el formato de texto que prefieren los agentes de IA.</li>
          <li><strong>Control de acceso de bots: 100.</strong> El robots.txt tiene reglas para los bots de IA y dice cómo pueden usar el contenido (Content-Signal).</li>
          <li><strong>Descubrimiento: 3 de 4.</strong> robots.txt, sitemap y cabeceras que indican a los agentes dónde está la descripción de la web.</li>
        </ul>
        <p style={parrafo}>
          La categoría de APIs y servidores MCP sigue en 0. Es para webs que ofrecen un servicio al que un agente se puede conectar —reservar, comprar, consultar datos—, y la nuestra todavía no lo necesita. Preferimos decirlo a publicar algo vacío para subir la nota.
        </p>
        <p style={parrafo}>
          <a href="https://isitagentready.com/dastanxtech.com" target="_blank" rel="noopener noreferrer" className="text-link">Ver el resultado de dastanxtech.com en Is It Agent Ready →</a>
        </p>

        <h2 style={h2}>Lo que un consultor AEO no debería prometerte</h2>
        <ul style={lista}>
          <li>Que ChatGPT te recomiende sí o sí, o una nota concreta: nadie controla lo que responde una IA.</li>
          <li>Resultados sin reseñas reales: no se arreglan con código, sino con clientes contentos.</li>
          <li>Milagros sobre una web rota: si tu web no está en buen estado, el primer paso es arreglarla.</li>
        </ul>

        <h2 style={h2}>Cuánto cuesta</h2>
        <p style={parrafo}>
          Nuestro <a href={ruta('aeo', 'es')} className="text-link">Posicionamiento AEO</a> cuesta <strong>150 USD</strong>, precio cerrado. Necesita una web en buen estado: si la tuya no lo está o no tienes, el primer paso es el <a href={ruta('disenoWeb', 'es')} className="text-link">Diseño web</a>, por <strong>100 USD</strong>. Y si quieres todo junto, el Pack completo (Diseño web + Auditoría Completa + AEO) cuesta 400 USD.
        </p>

        <div style={{ background: '#FAF9FC', border: '1px solid var(--line-light)', borderRadius: 'var(--radius-card)', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--ink)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            ¿Quieres que la IA recomiende tu negocio?
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
