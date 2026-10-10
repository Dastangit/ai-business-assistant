'use client';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

// Auditoría (/servicios/auditoria-negocio y /en/services/digital-business-audit): el diseño vive aquí
// y los textos en contenido/auditoria.<lang>.js
const abrirChat = (detalle) => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: detalle }));

export default function Auditoria({ t, lang }) {
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
        padding: '3.5rem 5% 4.5rem',
        alignItems: 'center'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
            <span style={{ background: 'var(--brand-on-light)', width: '32px', height: '3px', display: 'block' }}></span>
            <span className="label-mono">{t.hero.etiqueta}</span>
          </div>
          <h1 className="servicio-hero-title" style={{ fontSize: 'clamp(2.5rem, 4.6vw, 3.5rem)', fontWeight: '700', lineHeight: '1.08', color: 'var(--ink)', marginBottom: '1.5rem', letterSpacing: '-0.025em' }}>
            {t.hero.titulo}
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--ink-2)', maxWidth: '600px', marginBottom: '2.5rem' }}>
            {t.hero.texto}
          </p>
          {/* Quien llega aquí busca la auditoría (de pago): el botón principal habla de ella, no del diagnóstico gratis */}
          <button type="button" className="btn btn-suave" onClick={() => abrirChat(t.hero.mensajeChat)}>
            {t.hero.boton}
          </button>
        </div>

        {/* TARJETA DEL HERO */}
        <div className="servicio-hero-visual servicio-hero-card">
          <h3>{t.hero.tarjetaTitulo}</h3>
          <ul className="dot-list">
            {t.hero.tarjetaItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </header>

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

      {/* EJEMPLO: la auditoría completa de un negocio ficticio, para que se vea qué se entrega (como el informe de AEO) */}
      <section style={{ padding: '2rem 5% 2rem' }}>
        <div className="aeo-informe">
          <span className="label-mono">{t.informe.etiqueta}</span>
          <h2>{t.informe.titulo}</h2>
          <p>{t.informe.texto}</p>
          <div className="aeo-informe-acciones">
            <a href="/ejemplo-auditoria-completa" className="btn btn-outline-light" target="_blank" rel="noopener">
              {t.informe.boton}
            </a>
            <a href="/ejemplo-diagnostico-seo" className="text-link" target="_blank" rel="noopener">
              {t.informe.enlaceSeo}
            </a>
          </div>
        </div>
      </section>

      {/* DESPUÉS DE LA AUDITORÍA: qué automatizamos y las dos formas de contratarlo */}
      <section style={{ padding: '6rem 5%' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--ink)' }}>
          {t.automatizar.titulo}
        </h2>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--ink-2)', maxWidth: '680px', margin: '0 auto 2rem' }}>
          {t.automatizar.intro}
        </p>
        <ul className="dot-list" style={{ maxWidth: '680px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
          {t.automatizar.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="caminos">
          {t.automatizar.caminos.map((c) => (
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

      {/* CIERRE: la Auditoría primero, como en el hero; el diagnóstico SEO gratis, de contorno, para quien aún duda
          (el chat de esta página manda a este botón), y WhatsApp como alternativa */}
      <section style={{ padding: '6rem 5%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--ink)', marginBottom: '1rem', letterSpacing: '-0.015em' }}>
          {t.cierre.titulo}
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--ink-2)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          {t.cierre.texto}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <button type="button" className="btn btn-suave" onClick={() => abrirChat(t.cierre.mensajeChat)}>
            {t.cierre.botonAuditoria}
          </button>
          <button type="button" className="btn btn-outline-light" onClick={() => abrirChat({ diagnostico: true })}>
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
