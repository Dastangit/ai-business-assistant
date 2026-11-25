'use client';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { ruta } from '@/lib/i18n';

// Auditoría web gratis (/auditoria-web-gratis y /en/free-website-audit): la página propia del
// diagnóstico SEO gratis, que antes solo se pedía desde el chat. El diseño vive aquí y los textos
// en contenido/auditoria-gratis.<lang>.js. Todos los botones abren el chat con el formulario desplegado.
const pedirDiagnostico = () => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: { diagnostico: true } }));

export default function AuditoriaGratis({ t, lang }) {
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

      <SiteHeader tone="light" lang={lang} />
      <main id="contenido">

      {/* HERO: qué es y qué recibes, con el ejemplo ficticio a mano */}
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
          <button type="button" className="btn btn-suave" onClick={pedirDiagnostico}>
            {t.hero.boton}
          </button>
        </div>

        <div className="servicio-hero-visual servicio-hero-card">
          {/* p y no h3: va antes del primer h2 y rompería la jerarquía de encabezados */}
          <p className="servicio-hero-card-titulo">{t.hero.tarjetaTitulo}</p>
          <ul className="dot-list">
            {t.hero.tarjetaItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <a href="/ejemplo-diagnostico-seo.html" target="_blank" rel="noopener" className="text-link">{t.hero.verEjemplo}</a>
        </div>
      </header>

      {/* QUÉ REVISAMOS */}
      <section style={{ padding: '5rem 5%' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--ink)' }}>
          {t.revisamos.titulo}
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--ink-2)', maxWidth: '650px', margin: '0 auto 4rem', lineHeight: '1.6' }}>
          {t.revisamos.intro}
        </p>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {t.revisamos.items.map((v, i) => (
            <div key={v.titulo} className="feature-row">
              <div className={i === 0 ? 'feature-number' : 'feature-number feature-number--brand'}>{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>{v.titulo}</h3>
                <p style={{ color: 'var(--ink-2)', lineHeight: '1.6' }}>{v.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CÓMO FUNCIONA: tres pasos */}
      <section style={{ padding: '5rem 5%' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--ink)' }}>
          {t.pasos.titulo}
        </h2>
        <div className="caminos">
          {t.pasos.items.map((p, i) => (
            <div key={p.titulo} className="camino">
              <span className="label-mono">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CASO REAL: nuestra propia web en el blog */}
      <section style={{ padding: '4rem 5%', textAlign: 'center' }}>
        <div style={{ maxWidth: '650px', margin: '0 auto' }}>
          <span className="label-mono">{t.caso.etiqueta}</span>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--ink)', margin: '1rem 0', letterSpacing: '-0.015em' }}>
            {t.caso.titulo}
          </h2>
          <p style={{ color: 'var(--ink-2)', lineHeight: '1.6', marginBottom: '1.5rem' }}>{t.caso.texto}</p>
          <Link href={ruta('blogDiagnosticoSeo', lang)} className="text-link">{t.caso.enlace}</Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* PREGUNTAS FRECUENTES */}
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

      {/* CIERRE */}
      <section style={{ padding: '6rem 5%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--ink)', marginBottom: '1rem', letterSpacing: '-0.015em' }}>
          {t.cierre.titulo}
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--ink-2)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          {t.cierre.texto}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <button type="button" className="btn btn-suave" onClick={pedirDiagnostico}>
            {t.cierre.boton}
          </button>
          <a href={`https://wa.me/16055003653?text=${encodeURIComponent(t.cierre.whatsappTexto)}`} target="_blank" rel="noopener noreferrer" className="text-link">
            {t.cierre.whatsappEnlace}
          </a>
        </div>
      </section>

      </main>
      <SiteFooter tone="light" lang={lang} />
    </div>
  );
}
