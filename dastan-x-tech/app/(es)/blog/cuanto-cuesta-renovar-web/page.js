'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { REVISIONES } from '@/lib/revisiones';
import { ruta } from '@/lib/i18n';

// Guía de precios: cada cifra sale de la FAQ de Diseño web (contenido/diseno-web.es.js) y de PRECIOS/OTROS
// de app/api/chat/route.js. Si cambia un precio o un plazo allí, cámbialo aquí, en la versión en inglés y en llms.txt.
const URL_ARTICULO = 'https://dastanxtech.com/blog/cuanto-cuesta-renovar-web';
const DESCRIPCION = 'Precios reales para renovar la web de un negocio en 2026: desde 100 USD y lista en menos de 48 horas, o 49 USD por arreglar lo más urgente. Qué incluye y qué cambia el precio.';

const faq = [
  { q: '¿Cuánto cuesta renovar la web de un negocio?', a: 'En DASTAN X-TECH, desde 100 USD. El precio final depende de cuántas páginas y servicios tenga tu web, y te lo confirmamos antes de empezar.' },
  { q: '¿Cuánto tarda la web nueva?', a: 'Menos de 48 horas desde que nos das tu marca y tus contenidos: logo, textos, servicios y precios.' },
  { q: '¿Hay una opción más barata que renovar toda la web?', a: 'Sí, el Arreglo exprés: por 49 USD aplicamos en 48 horas las 5 correcciones más urgentes de tu diagnóstico SEO. Si en los 30 días siguientes contratas el Diseño web, te lo descontamos.' },
  { q: '¿Puedo saber qué le falta a mi web antes de pagar nada?', a: 'Sí. El diagnóstico SEO es gratis: te mandamos por WhatsApp un PDF con tu puntuación de 0 a 100 y las 5 correcciones más urgentes, explicadas sin jerga.' },
  { q: '¿Y si no tengo web?', a: 'Te la creamos desde cero con el mismo precio de partida, desde 100 USD, incluso a partir de tu Instagram.' },
  { q: '¿Trabajan con negocios de cualquier país?', a: 'Sí. Trabajamos 100 % en remoto, sobre todo en Colombia, México y Estados Unidos, en español e inglés. Los precios están en dólares (USD).' },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: '¿Cuánto cuesta renovar una web en 2026?',
    author: { '@type': 'Person', name: 'Dastan Tamayo', jobTitle: 'Fundador', worksFor: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' } },
    publisher: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' },
    datePublished: '2026-10-06',
    dateModified: REVISIONES['/blog/cuanto-cuesta-renovar-web'],
    description: DESCRIPCION,
    mainEntityOfPage: URL_ARTICULO,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'es',
    mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
  },
];

const h2 = { fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' };
const parrafo = { lineHeight: '1.8', marginBottom: '1rem' };
const lista = { lineHeight: '1.9', paddingLeft: '1.3rem', marginBottom: '1rem' };

export default function BlogPost() {
  return (
    <div className="theme-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* CABECERA CON ENLACES */}
      <SiteHeader tone="light" />

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 5% 2rem' }}>
        <p className="label-mono" style={{ marginBottom: '1rem' }}>
          Guía de precios · 6 de octubre de 2026
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          ¿Cuánto cuesta renovar una web en 2026?
        </h1>
        <div className="byline">
          <div className="byline-avatar" aria-hidden="true">DT</div>
          <p className="byline-text">
            <strong>Dastan Tamayo</strong>
            Fundador de DASTAN X-TECH · 3 min de lectura
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          En DASTAN X-TECH, renovar la web de un negocio cuesta <strong>desde 100 USD</strong> y está lista en <strong>menos de 48 horas</strong> desde que tenemos tu marca y tus contenidos. Si solo quieres arreglar lo más urgente, el Arreglo exprés cuesta <strong>49 USD</strong>. Y antes de pagar nada, puedes pedir gratis el diagnóstico SEO de tu web actual.
        </p>

        <h2 style={h2}>Nuestros precios, en una tabla</h2>
        <p style={parrafo}>
          Precios de partida en dólares, vigentes en octubre de 2026:
        </p>
        <div className="tabla-scroll">
          <table className="tabla-precios">
            <thead>
              <tr><th scope="col">Opción</th><th scope="col">Precio</th><th scope="col">Qué incluye</th></tr>
            </thead>
            <tbody>
              <tr><td>Diagnóstico SEO</td><td>Gratis</td><td>Tu puntuación de 0 a 100 y las 5 correcciones más urgentes de tu web, en un PDF por WhatsApp.</td></tr>
              <tr><td>Arreglo exprés</td><td>49 USD</td><td>Aplicamos esas 5 correcciones en 48 horas. Se descuenta si contratas el Diseño web en los 30 días siguientes.</td></tr>
              <tr><td>Diseño web</td><td>Desde 100 USD</td><td>Tu web renovada o creada desde cero, con tu marca real, adaptada al móvil, con el WhatsApp y el teléfono siempre visibles y lista para Google y la IA. En menos de 48 horas.</td></tr>
              <tr><td>Chat con IA (opcional)</td><td>15 USD al mes</td><td>Responde dudas a cualquier hora y guarda el nombre y el WhatsApp de quien pregunta.</td></tr>
            </tbody>
          </table>
        </div>

        <h2 style={h2}>Qué cambia el precio final</h2>
        <p style={parrafo}>
          El precio de partida cubre la web de un negocio pequeño. Lo que lo mueve es el tamaño: <strong>cuántas páginas y cuántos servicios</strong> hay que explicar. Una web de una página para un spa con cinco tratamientos no es lo mismo que la de una clínica con tres sedes y veinte especialidades.
        </p>
        <p style={parrafo}>
          Por eso no cobramos sorpresas: te confirmamos el precio final antes de empezar. Y el plazo de 48 horas empieza a contar cuando tenemos tu logo, tus textos, tus servicios y tus precios, así que tenerlos a mano es la forma más rápida de tener la web.
        </p>

        <h2 style={h2}>Qué recibes por ese precio</h2>
        <ul style={lista}>
          <li><strong>Un diagnóstico honesto antes de tocar nada:</strong> si ya tienes web, la analizamos primero y te decimos qué falla y por qué te cuesta clientes.</li>
          <li><strong>Tu marca real:</strong> tu logo, tus colores, tus textos, tus precios y tus reseñas. Nunca inventamos contenido que no sea tuyo.</li>
          <li><strong>El WhatsApp y el teléfono a un toque</strong>, visibles desde el primer segundo y en el móvil.</li>
          <li><strong>Una estructura que Google y la IA entienden:</strong> qué ofreces, dónde y a qué precio, la base para que te encuentren y te recomienden.</li>
        </ul>

        <h2 style={h2}>¿Renovar toda la web o solo arreglarla?</h2>
        <p style={parrafo}>
          Depende de lo que diga el diagnóstico. Si tu web ya explica bien lo que haces y solo tiene fallos puntuales (un título mal puesto, una página lenta, el WhatsApp escondido), el Arreglo exprés por 49 USD suele bastar. Si no se ve bien en el móvil, no explica tus servicios o nadie sabe cómo contactarte, sale más a cuenta renovarla.
        </p>
        <p style={parrafo}>
          Si no sabes en qué caso estás, empieza por las <a href={ruta('blog5Senales', 'es')} className="text-link">5 señales de que tu web te está costando clientes</a>, o mira el <a href={ruta('disenoWeb', 'es')} className="text-link">servicio de Diseño web</a> con un rediseño real.
        </p>

        <h2 style={h2}>Preguntas frecuentes</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {faq.map((item) => (
            <div key={item.q} className="faq-item">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.6rem', color: 'var(--ink)' }}>{item.q}</h3>
              <p style={{ color: 'var(--ink-2)', lineHeight: '1.6', margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#FAF9FC', border: '1px solid var(--line-light)', borderRadius: 'var(--radius-card)', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--ink)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            ¿Quieres saber cuánto te costaría a ti? Empieza por ver qué le falta a tu web, gratis.
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: { diagnostico: true } }))}
            type="button"
            className="btn btn-suave"
          >
            Pide tu diagnóstico SEO gratis
          </button>
        </div>
      </article>

      <SiteFooter tone="light" />
    </div>
  );
}
