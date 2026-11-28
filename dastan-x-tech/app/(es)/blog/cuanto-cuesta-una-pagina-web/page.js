'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { REVISIONES } from '@/lib/revisiones';
import { ruta } from '@/lib/i18n';

// Guía de precios: nuestras cifras salen de la FAQ de Diseño web (contenido/diseno-web.es.js) y de PRECIOS/OTROS/MXN
// de app/api/chat/route.js. Si cambia un precio o un plazo allí, cámbialo aquí, en la versión en inglés y en llms.txt.
// Apunta a «cuánto cuesta una página web» (con y sin tildes, «crear» y «hacer») en México y España: una sola página
// con una sección por país, para que no compitan entre sí (decidido el 27-nov-2026). Antes era «cuánto cuesta renovar
// una web» en /blog/cuanto-cuesta-renovar-web, que redirige aquí (next.config.mjs).
// Las cifras de mercado son de las guías enlazadas (consultadas el 27-nov-2026): son orientativas, no nuestras.
const URL_ARTICULO = 'https://dastanxtech.com/blog/cuanto-cuesta-una-pagina-web';
const DESCRIPCION = 'Cuánto cuesta crear o hacer una página web en 2026, en México (pesos) y en España (euros): lo que cobra el mercado, qué cambia el precio y nuestra tarifa cerrada de 100 USD.';

const faq = [
  { q: '¿Cuánto cuesta una página web para un negocio pequeño?', a: 'Depende de quién la haga y de lo que necesite. En DASTAN X-TECH cuesta 100 USD (1,900 MXN en México), precio cerrado, y está lista en menos de 48 horas. Si necesitas algo que no está incluido, como una tienda online, te lo decimos antes de empezar.' },
  { q: '¿Cuánto cuesta hacer una página web en México?', a: 'Con nosotros, 1,900 MXN por transferencia SPEI. En el mercado, una web sencilla suele costar desde unos pocos miles de pesos, y una tienda online con plantilla puede ir de 18,000 a 40,000 MXN.' },
  { q: '¿Cuánto cuesta una página web en España?', a: 'Con nosotros, 100 USD (menos de 100 € al cambio), pagados con PayPal o por transferencia. En el mercado español, un diseñador independiente suele cobrar entre 300 y 600 € por una web sencilla, y una web corporativa en WordPress ronda los 1.500 a 2.000 €.' },
  { q: '¿Cuánto cuesta renovar la web que ya tengo?', a: 'Lo mismo que crearla: 100 USD. Si solo quieres arreglar lo más urgente, el Arreglo exprés cuesta 49 USD (950 MXN) y aplica en 48 horas las 5 correcciones más urgentes de tu diagnóstico SEO.' },
  { q: '¿Cuánto tarda la web nueva?', a: 'Menos de 48 horas desde que nos das tu marca y tus contenidos: logo, textos, servicios y precios.' },
  { q: '¿Y si no tengo web?', a: 'Te la creamos desde cero por el mismo precio, 100 USD, incluso a partir de tu Instagram.' },
  { q: '¿Puedo saber qué le falta a mi web antes de pagar nada?', a: 'Sí. El diagnóstico SEO es gratis: te mandamos por WhatsApp un PDF con tu puntuación de 0 a 100 y las 5 correcciones más urgentes, explicadas sin jerga.' },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: '¿Cuánto cuesta una página web en 2026?',
    author: { '@type': 'Person', name: 'Dastan Tamayo', jobTitle: 'Fundador', worksFor: { '@type': 'Organization', '@id': 'https://dastanxtech.com/#organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' } },
    publisher: { '@type': 'Organization', '@id': 'https://dastanxtech.com/#organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com' },
    datePublished: '2026-10-06',
    dateModified: REVISIONES['/blog/cuanto-cuesta-una-pagina-web'],
    description: DESCRIPCION,
    mainEntityOfPage: URL_ARTICULO,
    image: 'https://dastanxtech.com/opengraph-image',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'es',
    mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
  },
];

const h2 = { fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' };
const h3 = { fontSize: '1.15rem', fontWeight: '600', color: 'var(--ink)', marginTop: '1.5rem', marginBottom: '0.6rem' };
const parrafo = { lineHeight: '1.8', marginBottom: '1rem' };
const lista = { lineHeight: '1.9', paddingLeft: '1.3rem', marginBottom: '1rem' };
const fuente = { fontSize: '0.9rem', color: 'var(--ink-2)', lineHeight: '1.6', marginBottom: '1rem' };

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
          Guía de precios · actualizada el 27 de noviembre de 2026
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          ¿Cuánto cuesta una página web en 2026?
        </h1>
        <div className="byline">
          <div className="byline-avatar" aria-hidden="true">DT</div>
          <p className="byline-text">
            <strong>Dastan Tamayo</strong>
            Fundador de DASTAN X-TECH · 5 min de lectura
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Una página web para un negocio pequeño puede costar desde unos cientos hasta varios miles de dólares: depende de quién la haga y de lo que necesite. En DASTAN X-TECH, crear o renovar la web de un negocio cuesta <strong>100 USD</strong> (<strong>1,900 MXN</strong> en México), precio cerrado, y está lista en <strong>menos de 48 horas</strong> desde que tenemos tu marca y tus contenidos. Abajo tienes lo que cobra el mercado en México y en España, para que compares.
        </p>

        <h2 style={h2}>Qué hace que una web cueste más o menos</h2>
        <ul style={lista}>
          <li><strong>Quién la hace:</strong> hacerla tú con un creador de webs sale barato en dinero pero caro en horas; un diseñador independiente cobra por proyecto o por hora; una agencia suma diseño, textos y gestión, y su precio lo refleja.</li>
          <li><strong>Qué tipo de web es:</strong> una web de una sola página o de presentación del negocio cuesta mucho menos que una tienda online, una web con reservas y pagos o una plataforma a medida.</li>
          <li><strong>Cuántas páginas y textos lleva:</strong> cada servicio, cada idioma y cada texto que hay que escribir suman horas.</li>
          <li><strong>Lo que se paga después:</strong> dominio, alojamiento y mantenimiento. Hay quien cobra poco por el diseño y lo recupera con una cuota mensual.</li>
        </ul>

        <h2 style={h2}>Cuánto cuesta una página web en México</h2>
        <p style={parrafo}>
          En México, una web sencilla suele costar desde unos pocos miles de pesos, y una plataforma empresarial compleja puede llegar a cientos de miles. Una tienda online básica con plantilla se mueve, según GoDaddy, entre <strong>18,000 y 40,000 MXN</strong>, más el mantenimiento.
        </p>
        <p style={parrafo}>
          Con nosotros, la web de tu negocio cuesta <strong>1,900 MXN</strong>, que pagas en pesos por transferencia SPEI. Si solo quieres arreglar lo más urgente de la web que ya tienes, el Arreglo exprés cuesta <strong>950 MXN</strong>.
        </p>
        <p style={fuente}>
          Fuentes: <a href="https://www.godaddy.com/resources/latam/clientes/cuanto-cuesta-una-pagina-web-mexico" className="text-link" rel="noopener" target="_blank">GoDaddy, cuánto cuesta una página web en México</a> y <a href="https://blog.mercately.com/es/cuanto-cuesta-una-pagina-web-guia-de-precios-actualizada-year" className="text-link" rel="noopener" target="_blank">Mercately, guía de precios</a> (consultadas en noviembre de 2026).
        </p>

        <h2 style={h2}>Cuánto cuesta una página web en España</h2>
        <p style={parrafo}>
          En España, un diseñador web independiente suele cobrar entre <strong>300 y 600 €</strong> por una web sencilla, o entre 25 y 60 € la hora. Una web corporativa en WordPress ronda los <strong>1.500 a 2.000 €</strong>, y el mantenimiento de una web sencilla, entre 50 y 150 € al mes.
        </p>
        <p style={parrafo}>
          Con nosotros, la web cuesta <strong>100 USD</strong>, menos de 100 € al cambio del día, y la pagas con PayPal o por transferencia. Trabajamos en remoto, así que da igual en qué ciudad esté tu negocio.
        </p>
        <p style={fuente}>
          Fuentes: <a href="https://trustlocal.es/coste/diseno-web-coste/" className="text-link" rel="noopener" target="_blank">TrustLocal, cuánto cuesta hacer una página web</a> y <a href="https://www.godaddy.com/resources/es/crearweb/costes-de-una-pagina-web" className="text-link" rel="noopener" target="_blank">GoDaddy, costes de una página web</a> (consultadas en noviembre de 2026).
        </p>

        <h2 style={h2}>Nuestros precios, en una tabla</h2>
        <p style={parrafo}>
          Precios cerrados, vigentes en noviembre de 2026:
        </p>
        <div className="tabla-scroll">
          <table className="tabla-precios">
            <thead>
              <tr><th scope="col">Opción</th><th scope="col">Precio</th><th scope="col">Qué incluye</th></tr>
            </thead>
            <tbody>
              <tr><td>Diagnóstico SEO</td><td>Gratis</td><td>Tu puntuación de 0 a 100 y las 5 correcciones más urgentes de tu web, en un PDF por WhatsApp.</td></tr>
              <tr><td>Arreglo exprés</td><td>49 USD (950 MXN)</td><td>Aplicamos esas 5 correcciones en 48 horas. Se descuenta si contratas el Diseño web en los 30 días siguientes.</td></tr>
              <tr><td>Diseño web</td><td>100 USD (1,900 MXN)</td><td>Tu web creada desde cero o renovada, con tu marca real, adaptada al móvil, con el WhatsApp y el teléfono siempre visibles y lista para Google y la IA. En menos de 48 horas.</td></tr>
              <tr><td>Chat automático 24 h (opcional)</td><td>15 USD (300 MXN) al mes</td><td>Responde dudas a cualquier hora y guarda el nombre y el WhatsApp de quien pregunta.</td></tr>
            </tbody>
          </table>
        </div>

        <h3 style={h3}>Un precio cerrado, sin sorpresas</h3>
        <p style={parrafo}>
          Los 100 USD son el precio de la web, no un precio de partida: <strong>no sube a mitad del trabajo</strong>. Si tu negocio necesita algo que no está incluido, como una tienda online o reservas con pago, te lo decimos y te lo presupuestamos aparte antes de empezar, para que decidas tú.
        </p>
        <p style={parrafo}>
          El plazo de 48 horas empieza a contar cuando tenemos tu logo, tus textos, tus servicios y tus precios, así que tenerlos a mano es la forma más rápida de tener la web.
        </p>

        <h2 style={h2}>Qué recibes por ese precio</h2>
        <ul style={lista}>
          <li><strong>Un diagnóstico honesto antes de tocar nada:</strong> si ya tienes web, la analizamos primero y te decimos qué falla y por qué te cuesta clientes.</li>
          <li><strong>Tu marca real:</strong> tu logo, tus colores, tus textos, tus precios y tus reseñas. Nunca inventamos contenido que no sea tuyo.</li>
          <li><strong>El WhatsApp y el teléfono a un toque</strong>, visibles desde el primer segundo y en el móvil.</li>
          <li><strong>Una estructura que Google y la IA entienden:</strong> qué ofreces, dónde y a qué precio, la base para que te encuentren y te recomienden.</li>
        </ul>

        <h2 style={h2}>Qué preguntar antes de contratar a cualquiera</h2>
        <p style={parrafo}>
          Hagas la web con quien la hagas, estas preguntas evitan la mayoría de las sorpresas:
        </p>
        <ul style={lista}>
          <li><strong>¿El precio es cerrado o es «desde»?</strong> Un precio de partida suele subir a mitad del trabajo.</li>
          <li><strong>¿El dominio y el alojamiento van incluidos, cuánto cuestan al año y a nombre de quién quedan?</strong> El dominio debe ser tuyo.</li>
          <li><strong>¿Hay una cuota mensual obligatoria?</strong> Y si la dejas de pagar, ¿qué pasa con la web?</li>
          <li><strong>¿Cuántas rondas de cambios entran en el precio y en qué plazo la entregan?</strong></li>
        </ul>

        <h2 style={h2}>¿Web nueva o solo arreglar la que tienes?</h2>
        <p style={parrafo}>
          Si ya tienes web, depende de lo que diga el diagnóstico. Si ya explica bien lo que haces y solo tiene fallos puntuales (un título mal puesto, una página lenta, el WhatsApp escondido), el Arreglo exprés suele bastar. Si no se ve bien en el móvil, no explica tus servicios o nadie sabe cómo contactarte, sale más a cuenta renovarla.
        </p>
        <p style={parrafo}>
          Si no sabes en qué caso estás, empieza por las <a href={ruta('blog5Senales', 'es')} className="text-link">5 señales de que tu web te está costando clientes</a>, o mira el <a href={ruta('disenoWeb', 'es')} className="text-link">servicio de Diseño web</a> con nuestra web en ocho estilos.
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

      </main>
      <SiteFooter tone="light" />
    </div>
  );
}
