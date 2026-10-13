'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BrandMark } from '@/components/Brand';
import SiteFooter from '@/components/SiteFooter';
import SelectorIdioma from '@/components/SelectorIdioma';
import { ruta } from '@/lib/i18n';
import fotoDastan from '@/public/equipo/dastan-tamayo.jpg';
import fotoIsdiel from '@/public/equipo/isdiel-martinez.jpg';

// Portada, compartida por los dos idiomas: el diseño vive aquí y los textos en contenido/inicio.<lang>.js.
// Equipo de «Quiénes somos»: fotos ya recortadas a 4:5 (Dastan 1003×1254, Isdiel 1024×1280) en public/equipo; el CSS fija el 4:5
const FOTOS = [fotoDastan, fotoIsdiel];

// Iconos de la sección Diagnóstico (mismo orden que t.diagnostico.items): web, procesos, escudo, ruta.
// Van en lugar de los números para no repetir el 01-02-03 de Cómo trabajamos
const ICONOS_DIAGNOSTICO = [
  <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" /></>,
  <><rect x="2.5" y="9.5" width="5" height="5" rx="1" /><rect x="16.5" y="4" width="5" height="5" rx="1" /><rect x="16.5" y="15" width="5" height="5" rx="1" /><path d="M7.5 12H12m0 0V6.5h4.5M12 12v5.5h4.5" /></>,
  <><path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z" /><path d="m8.8 12.2 2.2 2.2 4.2-4.4" /></>,
  <><circle cx="5" cy="18" r="1.8" /><circle cx="12" cy="13" r="1.8" /><path d="M6.6 17c1.4-1 2.8-2 3.9-3M13.6 12.2c1.6-.9 3-2.2 4.1-4.2" /><path d="M18 9V3l3.5 1.6L18 6.2" /></>,
];

// Abre el chat con el formulario del diagnóstico SEO gratis desplegado
const pedirDiagnostico = () => {
  window.dispatchEvent(new CustomEvent('abrir-chat', { detail: { diagnostico: true } }));
};

export default function Inicio({ t, lang }) {
  const equipo = FOTOS.map((foto, i) => ({ foto, ...t.equipo[i] }));
  return (
    <>
      {/* Cabecera fija: el WhatsApp, a mano en toda la página (el diagnóstico gratis ya está en el hero y en Lex).
          Va fuera del bloque de los brillos porque su overflow: hidden impedía que se quedara fija al bajar */}
      <nav className="nav" aria-label={t.nav.principal}>
        <Link href={ruta('inicio', lang)} className="brand nav-brand" aria-label={t.nav.irInicio}>
          <BrandMark />
          <span>DASTAN X-TECH</span>
        </Link>
        <div className="nav-links">
          <a href={ruta('servicios', lang)} className="nav-link-texto">{t.nav.servicios}</a>
          <a href={ruta('blog', lang)} className="nav-link-texto nav-link-blog">Blog</a>
          <SelectorIdioma />
          <a href="https://wa.me/16055003653" target="_blank" rel="noopener noreferrer" className="nav-wa" aria-label={t.nav.wa}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.8 8.8 0 0 1-4-.9L3 20l1.1-4.2A8.2 8.2 0 0 1 3 11.5 8.6 8.6 0 0 1 12 3a8.6 8.6 0 0 1 9 8.5Z" /></svg>
            <span className="nav-wa-texto">WhatsApp</span>
          </a>
        </div>
      </nav>

      <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div className="glow-tl"></div>
      <div className="glow-br"></div>

      {/* HERO: a quién ayudamos y qué recibe gratis, en la primera pantalla */}
      <main className="hero">
        <span className="label-mono">{t.etiqueta}</span>
        <h1 className="hero-title">
          {t.titulo}
          <span className="sr-only">{t.tituloSr}</span>
        </h1>
        <p className="hero-sub">{t.subtitulo}</p>

        <div className="hero-actions">
          <button type="button" className="btn btn-primary" onClick={pedirDiagnostico}>
            {t.botonDiagnostico}
          </button>
        </div>

        <ul className="hero-points">
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.956 11.956 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            {t.puntos[0]}
          </li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            {t.puntos[1]}
          </li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {t.puntos[2]}
          </li>
        </ul>
      </main>
      </div>

      {/* SERVICIOS: cada tarjeta hace una sola cosa, llevar a su página */}
      <section id="services" className="section">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
          <span className="label-mono" style={{ color: 'var(--action)' }}>{t.servicios.etiqueta}</span>
          <h2 className="section-title">{t.servicios.titulo}</h2>
        </div>

        <div className="card-grid">
          {t.servicios.tarjetas.map((s) => (
            <a key={s.clave} href={ruta(s.clave, lang)} className="service-card">
              <span className="label-mono">{s.label}</span>
              <h3 className="card-title">{s.title}</h3>
              <span className="card-price">{s.price}</span>
              <p className="card-text">{s.text}</p>
              <ul className="dot-list card-list">
                {s.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <span className="card-link">{s.link}</span>
            </a>
          ))}
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="section">
        <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>
          {t.pasos.titulo}
        </h2>
        <div className="steps">
          {t.pasos.items.map((paso, i) => (
            <div key={i}>
              <div className="step-number">{String(i + 1).padStart(2, '0')}</div>
              <p className="section-text" style={{ fontSize: '16px' }}>{paso}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIAGNÓSTICO: qué miramos antes de proponer nada; mismo diseño que Cómo trabajamos */}
      <section className="section">
        <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>
          {t.diagnostico.titulo}
        </h2>
        <div className="steps">
          {t.diagnostico.items.map((item, i) => (
            <div key={item.titulo}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="step-icono">
                {ICONOS_DIAGNOSTICO[i]}
              </svg>
              <h3 className="step-titulo">{item.titulo}</h3>
              <p className="section-text" style={{ fontSize: '16px' }}>{item.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN QUIÉNES SOMOS */}
      <section id="about" className="section" style={{ maxWidth: '760px' }}>
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>
          {t.quienes.titulo}
        </h2>
        {t.quienes.parrafos.map((parrafo, i) => (
          <p key={i} className="section-text">{parrafo}</p>
        ))}

        {/* Historia breve: por qué existe la consultora (nació de nuestro propio problema de visibilidad) */}
        <div className="historia">
          <h3 className="historia-titulo">{t.quienes.historia.titulo}</h3>
          {t.quienes.historia.parrafos.map((parrafo, i) => (
            <p key={i} className="section-text">{parrafo}</p>
          ))}
        </div>

        <div className="equipo">
          {equipo.map((p) => (
            <figure key={p.nombre} className="equipo-ficha">
              <Image src={p.foto} alt={p.alt} placeholder="blur" sizes="(max-width: 640px) 100vw, 360px" className="equipo-foto" />
              <figcaption>
                <strong>{p.nombre}</strong>
                <span>{p.rol}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CIERRE / CTA FINAL */}
      <section className="section cierre">
        <div className="service-card cierre-card">
          <h2 className="section-title">
            {t.cierre.titulo}
          </h2>
          <p className="card-text" style={{ maxWidth: '520px' }}>
            {t.cierre.texto}
          </p>
          <button type="button" className="btn btn-primary" onClick={pedirDiagnostico}>
            {t.cierre.boton}
          </button>
        </div>
      </section>

      {/* FOOTER - MEDIOS DE CONTACTO */}
      <SiteFooter tone="dark" lang={lang} />
    </>
  );
}
