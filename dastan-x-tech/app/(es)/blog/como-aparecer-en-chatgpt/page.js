'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { REVISIONES } from '@/lib/revisiones';
import { ruta } from '@/lib/i18n';

// Guía para «cómo aparecer en chatgpt» y variantes (autocompletado de Google, 17-nov-2026).
// Las preguntas frecuentes del final van también en FAQPage para que la IA las pueda citar.
// Si cambias algo aquí, cambia lo mismo en la versión en inglés.
const DESCRIPCION = 'Los 7 pasos para que ChatGPT, Gemini y Perplexity recomienden tu negocio: cómo comprobar si ya te nombran, qué revisar en tu web y qué no funciona.';

const FAQ = [
  {
    q: '¿Se puede pagar para que ChatGPT recomiende mi negocio?',
    a: 'No. ChatGPT ya muestra anuncios, pero van aparte, marcados como anuncio, y OpenAI dice que no influyen en sus respuestas. Lo que ChatGPT responde sale de la información pública que encuentra sobre tu negocio: tu web, tu ficha de Google, tus reseñas y lo que otros sitios dicen de ti. Por eso se trabaja esa información.',
  },
  {
    q: '¿Cuánto tarda en aparecer mi negocio en ChatGPT?',
    a: 'Depende de cada caso. Los cambios en la web y en la ficha de Google suelen notarse en semanas, cuando los buscadores vuelven a leerlas; las reseñas y las menciones en otros sitios se acumulan en meses. Nadie puede garantizar una fecha.',
  },
  {
    q: '¿Cómo se llama el SEO para IA?',
    a: 'Se usan sobre todo dos nombres: AEO (Answer Engine Optimization, optimización para motores de respuesta) y GEO (Generative Engine Optimization, optimización para motores generativos). En la práctica describen el mismo trabajo: que los asistentes de IA entiendan tu negocio y lo recomienden.',
  },
  {
    q: '¿Sirve lo mismo para Gemini, Perplexity y Claude?',
    a: 'Sí. Cada asistente usa sus propias fuentes, pero todos premian lo mismo: una web que se pueda leer, datos claros y coherentes, y señales de confianza que se puedan comprobar en varios sitios.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Cómo hacer que tu negocio aparezca en ChatGPT',
    author: { '@type': 'Person', name: 'Dastan Tamayo', jobTitle: 'Fundador', worksFor: { '@type': 'Organization', '@id': 'https://dastanxtech.com/#organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' } },
    publisher: { '@type': 'Organization', '@id': 'https://dastanxtech.com/#organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' },
    datePublished: '2026-11-18',
    dateModified: REVISIONES['/blog/como-aparecer-en-chatgpt'],
    description: DESCRIPCION,
    mainEntityOfPage: 'https://dastanxtech.com/blog/como-aparecer-en-chatgpt',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
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
          Guía práctica · 18 de noviembre de 2026
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          Cómo hacer que tu negocio aparezca en ChatGPT
        </h1>
        <div className="byline">
          <div className="byline-avatar" aria-hidden="true">DT</div>
          <p className="byline-text">
            <strong>Dastan Tamayo</strong>
            Fundador de DASTAN X-TECH · 6 min de lectura
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Para que ChatGPT recomiende tu negocio, tiene que poder <strong>encontrarlo, leerlo y fiarse de él</strong>. La respuesta no se compra: la IA nombra a los negocios cuya información pública es clara, coherente y está respaldada por otros sitios. Estos son los 7 pasos que seguimos, y sirven igual para Gemini, Perplexity y Claude.
        </p>

        <h2 style={h2}>Primero: comprueba si ChatGPT ya te nombra</h2>
        <p style={parrafo}>
          Antes de cambiar nada, pregunta lo que preguntaría un cliente. No escribas el nombre de tu negocio: escribe la necesidad y la ciudad.
        </p>
        <ul style={lista}>
          <li>«¿Cuál es el mejor dentista en Puebla?»</li>
          <li>«Recomiéndame un spa para una pareja en Medellín.»</li>
          <li>«¿Quién hace páginas web para restaurantes en Madrid?»</li>
        </ul>
        <p style={parrafo}>
          Hazlo en ChatGPT, Gemini y Perplexity, y apunta qué negocios salen y qué dice de cada uno. Si no apareces, ya tienes tu punto de partida; si aparece tu competencia, fíjate en qué destaca la IA de ella: eso es lo que encontró en su información pública.
        </p>

        <h2 style={h2}>Los 7 pasos para aparecer en las búsquedas de ChatGPT</h2>

        <h3 style={h3}>1. Deja entrar a los robots de la IA</h3>
        <p style={parrafo}>
          Cada asistente usa su propio robot para leer webs: OpenAI tiene OAI-SearchBot para las búsquedas de ChatGPT, Perplexity tiene PerplexityBot y Google usa Googlebot. Si el archivo robots.txt de tu web los bloquea —a veces lo hace una plantilla o un plugin de seguridad sin que lo sepas—, para ellos tu web no existe.
        </p>

        <h3 style={h3}>2. Que tu contenido se pueda leer sin JavaScript</h3>
        <p style={parrafo}>
          Google ejecuta el JavaScript de una página; la mayoría de los robots de IA, no. Si tus servicios o tus precios solo aparecen después de cargar el JavaScript, o están dentro de una imagen, la IA ve una página casi vacía.
        </p>

        <h3 style={h3}>3. Date de alta en Google y en Bing</h3>
        <p style={parrafo}>
          Los asistentes también se apoyan en los buscadores. Gemini usa lo que sabe Google, y en ChatGPT conviene estar bien indexado también en Bing. Registra tu web en Google Search Console y en Bing Webmaster Tools, y completa tu ficha de Google (Google Business Profile): categoría, horario, zona, fotos y servicios.
        </p>
        <p style={parrafo}>
          Desde noviembre de 2026, OpenAI también deja reclamar el negocio dentro de ChatGPT con su Business Hub (en beta): verificas que eres el dueño y mantienes tus datos al día. Por ahora, los negocios locales solo pueden reclamar fichas que ya existen en Estados Unidos; los negocios en línea pueden pedir que se añadan.
        </p>

        <h3 style={h3}>4. Escribe respuestas, no eslóganes</h3>
        <p style={parrafo}>
          La IA cita frases concretas. «Ofrecemos el mejor servicio» no le sirve; «Limpieza dental en Puebla, 45 minutos, 600 MXN, con cita el mismo día» sí. Pon en tu web, en texto, qué haces, para quién, dónde, a qué precio y en qué horario, y añade una sección de preguntas frecuentes con las dudas reales de tus clientes.
        </p>

        <h3 style={h3}>5. Los mismos datos en todas partes</h3>
        <p style={parrafo}>
          Nombre, dirección, teléfono y horario tienen que coincidir en tu web, tu ficha de Google, Instagram, Facebook y los directorios. Si la IA encuentra dos teléfonos o dos horarios distintos, duda, y cuando duda prefiere nombrar a otro.
        </p>

        <h3 style={h3}>6. Reseñas y menciones en otros sitios</h3>
        <p style={parrafo}>
          La IA recomienda lo que puede contrastar. Las reseñas en Google, las menciones en directorios de tu sector, en la prensa local o en webs de otros negocios le confirman que existes y que tus clientes están contentos. Es el paso más lento y el que más pesa.
        </p>

        <h3 style={h3}>7. Explícale a la máquina qué eres</h3>
        <p style={parrafo}>
          Los datos estructurados (schema.org) le dicen a los buscadores y a la IA, en un formato que leen sin interpretar, qué tipo de negocio eres, qué servicios ofreces, dónde estás y qué opinan tus clientes. No se ven en la página, pero evitan malentendidos.
        </p>

        <h2 style={h2}>Lo que no funciona</h2>
        <ul style={lista}>
          <li><strong>Repetir palabras clave</strong> por toda la web: la IA busca respuestas claras, no repeticiones.</li>
          <li><strong>Reseñas falsas o compradas:</strong> Google las retira y pueden costarte la ficha.</li>
          <li><strong>Páginas escritas solo para la IA,</strong> distintas de lo que ven tus clientes: si los datos no coinciden, pierdes confianza en vez de ganarla.</li>
          <li><strong>Esperar resultados de un día para otro:</strong> los buscadores tardan en volver a leer tu web, y las reseñas se acumulan con el tiempo.</li>
        </ul>

        <h2 style={h2}>Nuestro caso</h2>
        <p style={parrafo}>
          Aplicamos estos pasos a dastanxtech.com antes de hacerlo con ningún cliente: hoy está en el nivel 4 de Is It Agent Ready, la prueba gratuita de Cloudflare para agentes de IA, y en 97 sobre 100 en nuestro auditor AEO. Lo contamos con detalle en <a href={ruta('blogConsultorAeo', 'es')} className="text-link">qué hace un consultor AEO</a>. Y si quieres el concepto desde el principio, está en <a href={ruta('blogAeo', 'es')} className="text-link">qué es AEO</a>.
        </p>

        <h2 style={h2}>Preguntas frecuentes</h2>
        {FAQ.map(({ q, a }) => (
          <div key={q}>
            <h3 style={h3}>{q}</h3>
            <p style={parrafo}>{a}</p>
          </div>
        ))}

        <p style={{ ...parrafo, marginTop: '2rem' }}>
          Si prefieres que lo hagamos nosotros, nuestro <a href={ruta('aeo', 'es')} className="text-link">Posicionamiento AEO</a> cuesta <strong>150 USD</strong>, precio cerrado, y cubre estos 7 pasos.
        </p>

        <div style={{ background: 'var(--ink)', borderRadius: 'var(--radius-card)', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: '#F5F4EF', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            ¿Quieres saber qué le falta a tu negocio para que ChatGPT lo recomiende?
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: 'Leí la guía de cómo aparecer en ChatGPT y quiero que la IA recomiende mi negocio' }))}
            type="button"
            className="btn btn-primary"
          >
            Quiero aparecer en ChatGPT
          </button>
        </div>
      </article>

      </main>
      <SiteFooter tone="light" />
    </div>
  );
}
