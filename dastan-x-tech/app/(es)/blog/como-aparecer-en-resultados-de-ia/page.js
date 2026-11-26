'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { REVISIONES } from '@/lib/revisiones';
import { ruta } from '@/lib/i18n';

// Versión en inglés: /en/blog/how-to-appear-in-ai-search-results. Si cambias este artículo, cambia también ese.
const DESCRIPCION = 'De dónde sacan sus respuestas Google AI Overviews, ChatGPT, Perplexity, Copilot y Gemini, cómo comprobar si tu negocio sale en cada uno y qué ajustar. SEO para IA (GEO).';

const FAQ = [
  {
    q: '¿Necesito un archivo o una etiqueta especial para salir en AI Overviews?',
    a: 'No. Google dice que no hay requisitos adicionales para AI Overviews ni para el Modo IA: la página tiene que estar indexada y poder salir en la búsqueda con un fragmento. Un archivo como llms.txt no estorba, pero Google no lo necesita.',
  },
  {
    q: 'Si bloqueo GPTBot, ¿desaparezco de ChatGPT?',
    a: 'No. GPTBot es el robot que OpenAI usa para entrenar sus modelos. El que decide si sales en las búsquedas de ChatGPT es OAI-SearchBot. Puedes bloquear el primero y permitir el segundo.',
  },
  {
    q: '¿Cómo sé cuántas visitas me llegan desde la IA?',
    a: 'Google Search Console cuenta AI Overviews y el Modo IA dentro de los resultados web normales, sin separarlos. Las visitas desde ChatGPT, Perplexity o Copilot aparecen en tu analítica como tráfico de referencia de chatgpt.com, perplexity.ai o copilot.microsoft.com.',
  },
  {
    q: '¿Aparecer en los resultados de IA es lo mismo que el SEO para IA, el AEO o el GEO?',
    a: 'Sí. SEO para IA, GEO (Generative Engine Optimization) y AEO (Answer Engine Optimization) son nombres para el mismo trabajo: que los buscadores con IA lean tu negocio, lo entiendan y lo citen en sus respuestas. En España se usa más GEO; en Latinoamérica, AEO o SEO para IA.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    inLanguage: 'es',
    headline: 'Cómo aparecer en los resultados de búsqueda con IA',
    author: { '@type': 'Person', name: 'Dastan Tamayo', jobTitle: 'Fundador', worksFor: { '@type': 'Organization', '@id': 'https://dastanxtech.com/#organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' } },
    publisher: { '@type': 'Organization', '@id': 'https://dastanxtech.com/#organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' },
    datePublished: '2026-11-24',
    dateModified: REVISIONES['/blog/como-aparecer-en-resultados-de-ia'],
    description: DESCRIPCION,
    mainEntityOfPage: 'https://dastanxtech.com/blog/como-aparecer-en-resultados-de-ia',
    image: 'https://dastanxtech.com/opengraph-image',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'es',
    mainEntity: FAQ.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  },
];

const h2 = { fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' };
const h3 = { fontSize: '1.15rem', fontWeight: '600', color: 'var(--ink)', marginTop: '1.75rem', marginBottom: '0.5rem' };
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
      <main id="contenido">

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 5% 2rem' }}>
        <p className="label-mono" style={{ marginBottom: '1rem' }}>
          Guía práctica · 24 de noviembre de 2026
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          Cómo aparecer en los resultados de búsqueda con IA
        </h1>
        <div className="byline">
          <div className="byline-avatar" aria-hidden="true">DT</div>
          <p className="byline-text">
            <strong>Dastan Tamayo</strong>
            Fundador de DASTAN X-TECH · 7 min de lectura
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Para aparecer en los resultados de búsqueda con IA, tu web tiene que estar <strong>indexada en el buscador del que tira cada IA</strong>, abierta a su robot y escrita para que una frase se pueda citar como respuesta. No existe un único «índice de la IA»: Google AI Overviews, ChatGPT, Perplexity, Copilot y Gemini leen cada uno de un sitio distinto. En esta guía de SEO para IA (lo que en España llaman GEO) verás de dónde saca sus respuestas cada uno y cómo comprobar si tu negocio está ahí.
        </p>

        <h2 style={h2}>De dónde saca sus respuestas cada buscador con IA</h2>

        <h3 style={h3}>Google AI Overviews y Modo IA</h3>
        <p style={parrafo}>
          Usan el índice de Google. Google dice que no hay requisitos adicionales: si una página está indexada y puede salir en la búsqueda con un fragmento, puede citarse en una AI Overview. Es decir, el SEO de siempre es la entrada. Revisa tus páginas en Google Search Console (informe Páginas) y no uses <code>nosnippet</code> en las que quieras que se citen, porque también las deja fuera de las respuestas de IA.
        </p>

        <h3 style={h3}>Búsqueda de ChatGPT</h3>
        <p style={parrafo}>
          ChatGPT lee las webs con su robot OAI-SearchBot y además se apoya en buscadores externos, así que estar bien indexado en Bing ayuda. Si tu robots.txt bloquea OAI-SearchBot, ChatGPT no mostrará tus páginas en sus respuestas. Bloquear GPTBot, que sirve para entrenar, no afecta a la búsqueda.
        </p>

        <h3 style={h3}>Perplexity</h3>
        <p style={parrafo}>
          Perplexity tiene su propio índice, que construye PerplexityBot. Cita sus fuentes de forma muy visible, con enlaces numerados, así que es el lugar más fácil para ver de qué páginas se fía una IA en tu tema.
        </p>

        <h3 style={h3}>Microsoft Copilot</h3>
        <p style={parrafo}>
          Copilot responde con Bing. Da de alta tu web en Bing Webmaster Tools, envía tu sitemap y usa IndexNow para que Bing se entere de los cambios el mismo día. Bing Webmaster Tools tiene además un informe de AI Performance que muestra cuántas veces Copilot cita tus páginas.
        </p>

        <h3 style={h3}>Gemini</h3>
        <p style={parrafo}>
          Cuando Gemini busca información, usa la Búsqueda de Google. Si ya sales en Google y tu Perfil de Empresa está completo, tienes hecha la mayor parte del trabajo para Gemini.
        </p>

        <h2 style={h2}>Cómo comprobar si tu negocio aparece</h2>
        <ol style={lista}>
          <li><strong>Pregunta como un cliente.</strong> Escribe la necesidad y la ciudad, no el nombre de tu negocio («dentista familiar en Puebla abierto los sábados»), en Google, ChatGPT, Perplexity, Copilot y Gemini. Apunta quién sale y qué páginas cita cada respuesta.</li>
          <li><strong>Revisa el índice.</strong> En Google Search Console y Bing Webmaster Tools, confirma que tus páginas importantes están indexadas. Una página sin indexar no se puede citar.</li>
          <li><strong>Revisa tu robots.txt.</strong> Abre tuweb.com/robots.txt y comprueba que no bloquea Googlebot, Bingbot, OAI-SearchBot ni PerplexityBot.</li>
          <li><strong>Mira tu tráfico.</strong> En tu analítica, busca visitas que lleguen desde chatgpt.com, perplexity.ai y copilot.microsoft.com. En Search Console, las AI Overviews se cuentan dentro de los resultados web normales.</li>
          <li><strong>Repite cada mes.</strong> Las respuestas de la IA cambian de un día a otro; lo que importa es la tendencia, no una búsqueda suelta.</li>
        </ol>

        <h2 style={h2}>Qué hace que una página se cite</h2>
        <p style={parrafo}>
          Cuando la IA ya puede leer tu página, elige qué citar. En nuestras revisiones, las páginas que se citan tienen tres cosas en común:
        </p>
        <ul style={lista}>
          <li><strong>Una respuesta directa al principio.</strong> El primer párrafo responde la pregunta en dos o tres frases, con datos concretos: qué, para quién, dónde y cuánto cuesta.</li>
          <li><strong>Texto, no imágenes.</strong> Precios, servicios y horarios escritos como texto, legibles incluso sin JavaScript.</li>
          <li><strong>Respaldo de otros sitios.</strong> Reseñas, directorios y menciones que confirman lo que dice tu web. La IA se fía de lo que puede comprobar en varios lugares.</li>
        </ul>
        <p style={parrafo}>
          Explicamos el proceso completo en <a href={ruta('blogChatgpt', 'es')} className="text-link">los 7 pasos para que tu negocio aparezca en ChatGPT</a>; sirven igual para los demás buscadores con IA. Si el tema es nuevo para ti, empieza por <a href={ruta('blogAeo', 'es')} className="text-link">qué es AEO (y GEO)</a>.
        </p>

        <h2 style={h2}>Preguntas frecuentes</h2>
        {FAQ.map(({ q, a }) => (
          <div key={q}>
            <h3 style={h3}>{q}</h3>
            <p style={parrafo}>{a}</p>
          </div>
        ))}

        <p style={{ ...parrafo, marginTop: '2rem' }}>
          Si prefieres que lo hagamos nosotros, nuestro <a href={ruta('aeo', 'es')} className="text-link">Posicionamiento AEO</a> cuesta <strong>150 USD</strong>, precio cerrado, y cubre Google, ChatGPT, Perplexity, Copilot y Gemini.
        </p>

        <div style={{ background: 'var(--ink)', borderRadius: 'var(--radius-card)', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: '#F5F4EF', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            ¿Quieres saber si tu negocio aparece en los resultados de la IA?
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: 'Leí la guía de cómo aparecer en los resultados de IA y quiero que mi negocio salga' }))}
            type="button"
            className="btn btn-primary"
          >
            Revisar mi negocio
          </button>
        </div>
      </article>

      </main>
      <SiteFooter tone="light" />
    </div>
  );
}
