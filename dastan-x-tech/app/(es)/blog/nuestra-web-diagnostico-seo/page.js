'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { REVISIONES } from '@/lib/revisiones';
import { ruta } from '@/lib/i18n';

// Caso de estudio con fecha: las cifras salen de los diagnósticos SEO del 24 de septiembre y del 18 de noviembre
// de 2026 (~/Desktop/Prospect/Diagnosticos/dastanxtech-com/, no se publican) y de PageSpeed Insights del 18-nov.
// Si cambias algo aquí, cambia lo mismo en la versión en inglés.
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'De 77 a 91: pasamos nuestra web por nuestro diagnóstico SEO',
  author: { '@type': 'Person', name: 'Dastan Tamayo', jobTitle: 'Fundador', worksFor: { '@type': 'Organization', '@id': 'https://dastanxtech.com/#organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' } },
  publisher: { '@type': 'Organization', '@id': 'https://dastanxtech.com/#organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' },
  datePublished: '2026-11-18',
  dateModified: REVISIONES['/blog/nuestra-web-diagnostico-seo'],
  description: 'Pasamos dastanxtech.com tres veces por nuestro diagnóstico SEO: qué encontró, qué corregimos y cómo subimos de 77 a 91 sobre 100.',
  mainEntityOfPage: 'https://dastanxtech.com/blog/nuestra-web-diagnostico-seo',
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
      <main id="contenido">

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 5% 2rem' }}>
        <p className="label-mono" style={{ marginBottom: '1rem' }}>
          Caso de estudio interno · 18 de noviembre de 2026
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          De 77 a 91: pasamos nuestra web por nuestro diagnóstico SEO
        </h1>
        <div className="byline">
          <div className="byline-avatar" aria-hidden="true">DT</div>
          <p className="byline-text">
            <strong>Dastan Tamayo</strong>
            Fundador de DASTAN X-TECH · 4 min de lectura
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Nuestro diagnóstico SEO gratis le pone a una web una nota de 0 a 100 y señala las 5 correcciones más urgentes. Antes de mandárselo a ningún negocio, lo usamos con <strong>dastanxtech.com</strong>: tres veces, con casi dos meses entre la primera y la última. Estas son las notas, lo que encontró cada vez y lo que corregimos.
        </p>

        <h2 style={h2}>Qué revisa el diagnóstico</h2>
        <p style={parrafo}>
          Revisa lo mismo que mira Google para entender una web y decidir cómo mostrarla, en 8 apartados con su peso en la nota: etiquetas meta (20 %), encabezados (15 %), parte técnica (15 %), y con un 10 % cada uno imágenes, enlaces, vista previa en redes, datos estructurados y contenido. Cada aviso lleva la página exacta, el dato medido y cómo corregirlo.
        </p>

        <h2 style={h2}>24 de septiembre: 77 sobre 100</h2>
        <p style={parrafo}>
          Ningún error grave, pero sí 9 avisos. Los más importantes:
        </p>
        <ul style={lista}>
          <li>La meta descripción tenía 193 caracteres. Google la corta hacia los 160, así que el final no se veía.</li>
          <li>El diagnóstico no encontró datos estructurados que dijeran qué somos y qué ofrecemos.</li>
          <li>La dirección <code>/favicon.ico</code> daba error 404.</li>
          <li>Los tres enlaces a los servicios decían lo mismo: «Saber más →».</li>
          <li>La portada tenía unas 195 palabras, por debajo de las 300 recomendadas.</li>
        </ul>

        <h2 style={h2}>Lo que cambió en dos meses</h2>
        <p style={parrafo}>
          La web creció: pasó de 8 a 32 páginas, con versión en inglés y un blog con 7 artículos en cada idioma. Añadimos datos estructurados en todas las páginas, enlaces que dicen adónde llevan («Saber más sobre Diseño web») y una portada de casi 600 palabras.
        </p>

        <h2 style={h2}>18 de noviembre: 88 sobre 100</h2>
        <p style={parrafo}>
          La segunda pasada encontró 10 avisos, casi todos de longitud: al crecer, algunos textos se habían alargado de más.
        </p>
        <ul style={lista}>
          <li>El título de la portada tenía 71 caracteres. Google lo corta hacia los 60, justo donde decía «pymes».</li>
          <li>La meta descripción seguía larga: 188 caracteres.</li>
          <li>El logo de los datos estructurados era la imagen rectangular para redes, no un logo cuadrado.</li>
          <li>El título principal (H1) llevaba una frase oculta con la marca y los países: 209 caracteres en total, algo que se parece al relleno de palabras clave.</li>
          <li><code>/favicon.ico</code> seguía dando 404.</li>
        </ul>
        <p style={parrafo}>
          Lo corregimos esa misma mañana: un título de 57 caracteres, una descripción de 147, el logo cuadrado, el H1 sin texto oculto (los países pasaron a una frase visible en «Quiénes somos») y un <code>favicon.ico</code>.
        </p>

        <h2 style={h2}>Unas horas después: 91 sobre 100</h2>
        <p style={parrafo}>
          Repetimos el diagnóstico con los cambios ya publicados y subió a 91. Lo que quedaba estaba en las páginas internas: 6 descripciones largas, el H1 del blog, que solo decía «Blog», títulos genéricos en Servicios y en Nuestra historia, y un salto de encabezados en la página de Diseño web. También lo corregimos ese día, y de paso añadimos las «migas de pan» (Inicio › Blog › artículo) a los datos estructurados.
        </p>
        <p style={parrafo}>
          Para terminar medimos la velocidad con PageSpeed Insights, la herramienta de Google: <strong>98 a 100 de rendimiento en móvil, 100 en ordenador</strong>, y 100 en accesibilidad, buenas prácticas y SEO.
        </p>

        <h2 style={h2}>Lo que no se arregla con código</h2>
        <p style={parrafo}>
          Queda un aviso menor: una doble redirección desde <code>http://www</code>, que depende del alojamiento y casi no influye. Lo que de verdad falta no está en la web, sino fuera: enlaces desde otros sitios y reseñas de clientes. El diagnóstico dice si Google puede entender tu web; que te elija antes que a la competencia depende también de lo que se dice de ti en internet. Por eso, después del diagnóstico, viene el <a href={ruta('aeo', 'es')} className="text-link">Posicionamiento AEO</a>.
        </p>
        <p style={parrafo}>
          ¿Quieres ver cómo es el informe por dentro? Este es un ejemplo con un negocio ficticio:
        </p>
        <p style={parrafo}>
          <a href="/ejemplo-diagnostico-seo.html" className="text-link" target="_blank" rel="noopener">Ver un ejemplo del diagnóstico SEO →</a>
        </p>

        <div style={{ background: '#FAF9FC', border: '1px solid var(--line-light)', borderRadius: 'var(--radius-card)', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--ink)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            ¿Qué nota sacaría tu web?
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

      </main>
      <SiteFooter tone="light" />
    </div>
  );
}
