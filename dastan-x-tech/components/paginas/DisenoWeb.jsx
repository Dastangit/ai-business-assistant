'use client';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

// Diseño web (/servicios/diseno-web y /en/services/web-design): el diseño vive aquí
// y los textos en contenido/diseno-web.<lang>.js
const abrirChat = (detalle) => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: detalle }));

export default function DisenoWeb({ t, lang }) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: t.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <div className="theme-light">

      {/* CABECERA CON ENLACES (logo al inicio, servicios, blog, idioma y WhatsApp) */}
      <SiteHeader tone="light" lang={lang} />

      {/* HERO ASIMÉTRICO */}
      <header className="servicio-hero" style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '4rem',
        padding: '6rem 5%',
        alignItems: 'center'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
            <span style={{ background: 'var(--brand-on-light)', width: '32px', height: '3px', display: 'block' }}></span>
            <span className="label-mono">{t.hero.etiqueta}</span>
          </div>
          <h1 className="servicio-hero-title" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)', fontWeight: '700', lineHeight: '1.08', color: 'var(--ink)', marginBottom: '1.5rem', letterSpacing: '-0.025em' }}>
            {t.hero.titulo}
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--ink-2)', maxWidth: '600px', marginBottom: '2.5rem' }}>
            {t.hero.texto}
          </p>
          <button type="button" className="btn btn-ink" onClick={() => abrirChat(t.hero.mensajeChat)}>
            {t.hero.boton}
          </button>
        </div>

        {/* TARJETA DEL HERO */}
        <div className="servicio-hero-visual servicio-hero-card">
          <h3>{t.hero.tarjetaTitulo}</h3>
          <ul className="dot-list">
            {t.hero.tarjetaItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <a href="#caso-real" className="text-link" style={{ color: 'var(--action)' }}>{t.hero.verCaso}</a>
        </div>
      </header>

      {/* CASO REAL: EJEMPLO DE REDISEÑO */}
      <section id="caso-real" style={{ padding: '5rem 5%', scrollMarginTop: '1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', justifyContent: 'center' }}>
            <span style={{ background: 'var(--brand-on-light)', width: '32px', height: '3px', display: 'block' }}></span>
            <span className="label-mono">{t.caso.etiqueta}</span>
          </div>
          <h2 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: '700', color: 'var(--ink)', marginBottom: '1rem', letterSpacing: '-0.015em' }}>
            {t.caso.titulo}
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--ink-2)', maxWidth: '650px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
            {t.caso.intro}
          </p>

          <ul style={{ color: 'var(--ink)', maxWidth: '650px', margin: '0 auto 2.5rem', lineHeight: '1.9', paddingLeft: '1.3rem' }}>
            {t.caso.items.map((item) => <li key={item}>{item}</li>)}
          </ul>

          <div style={{ textAlign: 'center' }}>
            <a href="https://rad-valkyrie-9cdd5a.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
              {t.caso.boton}
            </a>
          </div>

          {/* Segundo ejemplo: el mismo método aplicado a nuestra propia web. No es un caso de cliente y se dice así */}
          <div className="demo-propia">
            <p className="demo-propia-titulo">{t.caso.demoTitulo}</p>
            <p>{t.caso.demoTexto}</p>
            <a href="https://fancy-river-d053.paypaldastan.workers.dev" target="_blank" rel="noopener noreferrer" className="text-link">
              {t.caso.demoEnlace}
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CARACTERÍSTICAS */}
      <section style={{ padding: '6rem 5%' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '5rem', color: 'var(--ink)' }}>
          {t.ventajas.titulo}
        </h2>

        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {t.ventajas.items.map((v, i) => (
            <div key={v.titulo} className="feature-row">
              <div className={i === 0 ? 'feature-number' : 'feature-number feature-number--brand'}>{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{v.titulo}</h3>
                <p style={{ color: 'var(--ink-2)', lineHeight: '1.6' }}>{v.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DOS FORMAS DE EMPEZAR: web nueva o Arreglo exprés. Sin precios, como el resto de la página (van en las preguntas frecuentes) */}
      <section style={{ padding: '6rem 5%' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--ink)' }}>
          {t.caminos.titulo}
        </h2>
        <div className="caminos">
          {t.caminos.items.map((c) => (
            <div key={c.etiqueta} className="camino">
              <span className="label-mono">{c.etiqueta}</span>
              <h3>{c.titulo}</h3>
              <p>{c.texto}</p>
              <button type="button" className={c.estilo} onClick={() => abrirChat(c.mensajeChat)}>
                {c.boton}
              </button>
            </div>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* SECCIÓN DE PREGUNTAS FRECUENTES */}
      <section style={{ padding: '5rem 5%' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem', color: 'var(--ink)' }}>
          {t.faqTitulo}
        </h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {t.faq.map((item, i) => (
            <div key={i} className="faq-item">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.6rem', color: 'var(--ink)' }}>{item.q}</h3>
              <p style={{ color: 'var(--ink-2)', lineHeight: '1.6', margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CIERRE: el diagnóstico SEO gratis se pide aquí (el chat de esta página no repite el botón), con WhatsApp como alternativa */}
      <section style={{ padding: '6rem 5%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--ink)', marginBottom: '1rem', letterSpacing: '-0.015em' }}>
          {t.cierre.titulo}
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--ink-2)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          {t.cierre.texto}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <button type="button" className="btn btn-ink" onClick={() => abrirChat({ diagnostico: true })}>
            {t.cierre.botonDiagnostico}
          </button>
          <a href={`https://wa.me/16055003653?text=${encodeURIComponent(t.cierre.whatsappTexto)}`} target="_blank" rel="noopener noreferrer" className="text-link">
            {t.cierre.whatsappEnlace}
          </a>
        </div>
      </section>

      <SiteFooter tone="light" lang={lang} />
    </div>
  );
}
