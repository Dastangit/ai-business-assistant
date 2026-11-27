'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { REVISIONES } from '@/lib/revisiones';
import { ruta } from '@/lib/i18n';

// Guía para «cómo aparecer en google maps» (Semrush, 26-nov-2026: MX 320 · CO 70 · ES 70 · global 1.000 · KD 30)
// y su variante «como aparecer en google maps gratis». Las preguntas frecuentes van también en FAQPage.
// Si cambias algo aquí, cambia lo mismo en la versión en inglés.
const DESCRIPCION = 'Cómo hacer que tu negocio aparezca en Google Maps, gratis: crear y verificar tu ficha de Google, qué datos completar, cómo conseguir reseñas y qué evitar.';

const FAQ = [
  {
    q: '¿Cuesta dinero aparecer en Google Maps?',
    a: 'No. Crear y verificar la ficha de tu negocio (Google Business Profile) es gratis, y aparecer en los resultados normales de Maps también. Lo único de pago son los anuncios, que salen marcados como «Patrocinado».',
  },
  {
    q: '¿Cuánto tarda mi negocio en aparecer en Google Maps?',
    a: 'Después de verificar la ficha, suele aparecer en pocos días, aunque Google puede revisar algunos cambios antes de publicarlos. Subir posiciones frente a la competencia lleva más: depende sobre todo de las reseñas y de lo completa que esté tu ficha.',
  },
  {
    q: '¿Puedo aparecer en Google Maps si no tengo local?',
    a: 'Sí. Si atiendes a domicilio o en la zona del cliente, puedes ocultar tu dirección y marcar las ciudades o barrios donde das servicio. Lo que no se permite es poner una dirección donde no atiendes, como un apartado postal o una oficina virtual.',
  },
  {
    q: '¿Por qué mi negocio no aparece en Google Maps?',
    a: 'Las causas más comunes son que la ficha no está verificada, que la categoría principal no corresponde a lo que la gente busca, que la ficha está incompleta o que está suspendida por incumplir las normas de Google (por ejemplo, por meter palabras clave en el nombre). También influye la distancia: Google muestra primero los negocios más cercanos a quien busca.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Cómo aparecer en Google Maps: guía para negocios locales',
    author: { '@type': 'Person', name: 'Dastan Tamayo', jobTitle: 'Fundador', worksFor: { '@type': 'Organization', '@id': 'https://dastanxtech.com/#organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' } },
    publisher: { '@type': 'Organization', '@id': 'https://dastanxtech.com/#organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' },
    datePublished: '2026-11-26',
    dateModified: REVISIONES['/blog/como-aparecer-en-google-maps'],
    description: DESCRIPCION,
    mainEntityOfPage: 'https://dastanxtech.com/blog/como-aparecer-en-google-maps',
    image: 'https://dastanxtech.com/opengraph-image',
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
          Guía práctica · 26 de noviembre de 2026
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          Cómo aparecer en Google Maps: guía para negocios locales
        </h1>
        <div className="byline">
          <div className="byline-avatar" aria-hidden="true">DT</div>
          <p className="byline-text">
            <strong>Dastan Tamayo</strong>
            Fundador de DASTAN X-TECH · 6 min de lectura
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Para que tu negocio aparezca en Google Maps necesitas una <strong>ficha de Google (Google Business Profile) verificada y completa</strong>. Es gratis y se hace en una tarde. Después, lo que decide si sales antes o después que tu competencia es lo bien que esa ficha responde a lo que busca la gente, lo cerca que estás y cuánta confianza transmite.
        </p>

        <h2 style={h2}>Primero: busca tu negocio como lo haría un cliente</h2>
        <p style={parrafo}>
          Abre Google Maps en el móvil y busca lo que ofreces y tu zona, sin escribir tu nombre: «dentista en Puebla», «spa cerca de mí», «taller mecánico en Chapinero». Fíjate en quién sale en los tres primeros puestos y qué tienen esas fichas: fotos, reseñas recientes, horario, respuestas del dueño. Luego busca el nombre exacto de tu negocio: si no aparece, todavía no tienes ficha o no está verificada.
        </p>

        <h2 style={h2}>Cómo decide Google quién sale primero</h2>
        <p style={parrafo}>
          Google explica que los resultados locales dependen de tres cosas:
        </p>
        <ul style={lista}>
          <li><strong>Relevancia:</strong> lo bien que tu ficha coincide con lo que se busca. Aquí pesan la categoría, los servicios y la descripción.</li>
          <li><strong>Distancia:</strong> lo lejos que estás de quien busca o del lugar que escribió. No la puedes cambiar.</li>
          <li><strong>Prominencia:</strong> lo conocido que es tu negocio. Google la mide con tus reseñas y tu nota, y con lo que dicen de ti otras webs.</li>
        </ul>
        <p style={parrafo}>
          Los 6 pasos siguientes trabajan las dos que sí dependen de ti.
        </p>

        <h2 style={h2}>Los 6 pasos para aparecer en Google Maps</h2>

        <h3 style={h3}>1. Crea o reclama tu ficha</h3>
        <p style={parrafo}>
          Entra en business.google.com con la cuenta de Google del negocio y busca su nombre. Si ya existe una ficha (a veces la crea Google o un cliente), reclámala; si no, créala. Usa el nombre real del negocio, el mismo de tu letrero y tu web.
        </p>

        <h3 style={h3}>2. Verifícala</h3>
        <p style={parrafo}>
          Hasta que Google comprueba que el negocio existe y es tuyo, la ficha no aparece o lo hace con limitaciones. Google te indica qué método usar: puede ser un vídeo del local, una videollamada, un código por teléfono o correo, o una carta postal. Si atiendes a domicilio, puedes ocultar la dirección y marcar tu zona de servicio.
        </p>

        <h3 style={h3}>3. Elige bien la categoría principal</h3>
        <p style={parrafo}>
          Es el dato que más pesa en la relevancia. Elige la que describe tu negocio tal como lo buscaría un cliente («Clínica dental», no «Empresa de salud») y añade categorías secundarias solo para lo que de verdad haces.
        </p>

        <h3 style={h3}>4. Completa todo lo demás</h3>
        <ul style={lista}>
          <li>Horario, incluido el de festivos, y teléfono que alguien conteste.</li>
          <li>Tu web, y en ella los mismos datos: nombre, dirección y teléfono idénticos.</li>
          <li>Servicios o productos, con precios si los publicas, y una descripción que diga qué haces, para quién y dónde.</li>
          <li>Fotos reales: la fachada para que te encuentren, el interior, tu equipo y tu trabajo. Súbelas con regularidad.</li>
        </ul>

        <h3 style={h3}>5. Pide reseñas y respóndelas todas</h3>
        <p style={parrafo}>
          Es el paso más lento y el que más diferencia marca frente a la competencia. Pide la reseña al terminar el servicio, con el enlace directo que te da la propia ficha (por WhatsApp funciona bien). Responde a todas, también a las malas, con calma y sin dar datos del cliente: quien lee las reseñas se fija en cómo respondes.
        </p>

        <h3 style={h3}>6. Mantén la ficha viva</h3>
        <p style={parrafo}>
          Actualiza el horario cuando cambie, publica novedades y ofertas desde la propia ficha y contesta las preguntas que te hagan. Una ficha que se mueve da más confianza que una abandonada, a Google y a tus clientes.
        </p>

        <h2 style={h2}>Lo que no funciona (y puede costarte la ficha)</h2>
        <ul style={lista}>
          <li><strong>Meter palabras clave en el nombre</strong> («Dentista Puebla Barato Juan Pérez»): va contra las normas de Google y es de las causas más comunes de suspensión.</li>
          <li><strong>Reseñas compradas, falsas o a cambio de un descuento:</strong> Google las retira y puede sancionar la ficha.</li>
          <li><strong>Direcciones donde no atiendes</strong>, como oficinas virtuales o apartados postales, o varias fichas para el mismo negocio.</li>
          <li><strong>Pagar a quien promete el primer puesto:</strong> nadie lo controla; Google decide con los tres criterios de arriba.</li>
        </ul>

        <h2 style={h2}>Google Maps también alimenta a la IA</h2>
        <p style={parrafo}>
          Cuando alguien le pregunta a Gemini o a las respuestas con IA de Google «¿qué dentista me recomiendas en Puebla?», buena parte de lo que responden sale de las fichas de Google: categoría, nota, reseñas y horario. Una ficha bien cuidada te ayuda en Maps y también en las búsquedas con IA. Lo contamos en <a href={ruta('blogChatgpt', 'es')} className="text-link">cómo hacer que tu negocio aparezca en ChatGPT</a> y en <a href={ruta('blogResultadosIa', 'es')} className="text-link">cómo aparecer en los resultados de búsqueda con IA</a>.
        </p>

        <h2 style={h2}>Preguntas frecuentes</h2>
        {FAQ.map(({ q, a }) => (
          <div key={q}>
            <h3 style={h3}>{q}</h3>
            <p style={parrafo}>{a}</p>
          </div>
        ))}

        <p style={{ ...parrafo, marginTop: '2rem' }}>
          Si quieres saber cómo está tu presencia en Google, nuestra <a href={ruta('auditoriaGratis', 'es')} className="text-link">auditoría web gratis</a> revisa tu web y te da las 5 correcciones más urgentes. Y si prefieres que lo hagamos nosotros, el <a href={ruta('aeo', 'es')} className="text-link">Posicionamiento AEO</a> incluye dejar tu ficha de Google y tus redes coherentes con tu web.
        </p>

        <div style={{ background: 'var(--ink)', borderRadius: 'var(--radius-card)', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: '#F5F4EF', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            ¿Quieres saber qué le falta a tu negocio para que te encuentren en Google?
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

      </main>
      <SiteFooter tone="light" />
    </div>
  );
}
