'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BrandMark } from '@/components/Brand';
import SiteFooter from '@/components/SiteFooter';
import fotoDastan from '@/public/equipo/dastan-tamayo.jpg';
import fotoIsdiel from '@/public/equipo/isdiel-martinez.jpg';

// Equipo de «Quiénes somos»: fotos ya recortadas a 4:5 (Dastan 854×1067, Isdiel 1024×1280) en public/equipo; el CSS fija el 4:5
const equipo = [
  { foto: fotoDastan, nombre: 'Dastan Tamayo', rol: 'Fundador de DASTAN X-TECH', alt: 'Dastan Tamayo, fundador de DASTAN X-TECH' },
  { foto: fotoIsdiel, nombre: 'Isdiel Martínez', rol: 'Consultor de IA y estratega digital', alt: 'Isdiel Martínez, consultor de IA y estratega digital de DASTAN X-TECH' },
];

// Tarjetas de servicio del home, en el mismo orden que "Cómo trabajamos": web → auditoría → AEO.
// Cada una lleva a su página. El precio de partida se ve ya aquí (debe coincidir con PRECIOS de app/api/chat/route.js)
const servicios = [
  {
    href: '/servicios/diseno-web',
    label: '01 · Web',
    title: 'Diseño web',
    text: 'Renovamos tu web actual con tu marca real: tus servicios, tus precios y tu WhatsApp a un toque.',
    items: ['Diagnóstico honesto de tu web actual.', 'Web nueva, responsive, lista para publicar.', 'WhatsApp y teléfono siempre visibles.'],
    link: 'Saber más sobre Diseño web →',
    price: 'Desde 100 USD',
  },
  {
    href: '/servicios/auditoria-negocio',
    label: '02 · Auditoría',
    title: 'Auditoría Completa de Negocio',
    text: 'Sabemos exactamente dónde tu negocio pierde tiempo y dinero, con evidencia, no suposiciones.',
    items: ['Presencia digital sobre 100.', 'Madurez tecnológica sobre 5.', 'Plan de acción por fases.'],
    link: 'Descubre la Auditoría de Negocio →',
    price: 'Desde 200 USD',
  },
  {
    href: '/servicios/posicionamiento-aeo',
    label: '03 · IA y AEO',
    title: 'Posicionamiento AEO',
    text: 'Que la Inteligencia Artificial recomiende tu negocio, no solo las búsquedas en Google.',
    items: ['Ficha de Google y redes ordenadas.', 'Contenido citable por IA.', 'Reseñas y señales de confianza.'],
    link: 'Conoce el Posicionamiento AEO →',
    price: 'Desde 150 USD',
  },
];

// Abre el chat con el formulario del diagnóstico SEO gratis desplegado
const pedirDiagnostico = () => {
  window.dispatchEvent(new CustomEvent('abrir-chat', { detail: { diagnostico: true } }));
};

export default function Home() {
  return (
    <>
      {/* Cabecera fija: el WhatsApp, a mano en toda la página (el diagnóstico gratis ya está en el hero y en Lex).
          Va fuera del bloque de los brillos porque su overflow: hidden impedía que se quedara fija al bajar */}
      <nav className="nav" aria-label="Principal">
        <Link href="/" className="brand nav-brand" aria-label="DASTAN X-TECH, ir al inicio">
          <BrandMark />
          <span>DASTAN X-TECH</span>
        </Link>
        <div className="nav-links">
          <a href="/servicios" className="nav-link-texto">Servicios</a>
          <a href="/blog" className="nav-link-texto nav-link-blog">Blog</a>
          <a href="https://wa.me/16055003653" target="_blank" rel="noopener noreferrer" className="nav-wa" aria-label="Escríbenos por WhatsApp al +1 605-500-3653">
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
        <span className="label-mono">Consultoría digital e IA para negocios privados y pymes</span>
        <h1 className="hero-title">
          Descubre, con pruebas, por qué tu negocio pierde clientes por internet.
          <span className="sr-only"> DASTAN X-TECH, consultoría digital e IA para negocios privados y pymes en Colombia, México, Estados Unidos y el resto del mundo.</span>
        </h1>
        <p className="hero-sub">
          Diagnóstico SEO gratis de tu web: tu puntuación de 0 a 100 y las 5 correcciones más urgentes, en un PDF por WhatsApp. Si quieres, después las arreglamos contigo.
        </p>

        <div className="hero-actions">
          <button type="button" className="btn btn-primary" onClick={pedirDiagnostico}>
            Pide tu diagnóstico SEO gratis
          </button>
        </div>

        <ul className="hero-points">
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.956 11.956 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Cada fallo, con su prueba
          </li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Sin pedirte contraseñas
          </li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            100 % en remoto
          </li>
        </ul>
      </main>
      </div>

      {/* SECCIÓN QUIÉNES SOMOS */}
      <section id="about" className="section" style={{ maxWidth: '760px' }}>
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>
          Quiénes somos
        </h2>
        <p className="section-text">
          Somos <strong>Dastan Tamayo</strong>, fundador de DASTAN X-TECH, e <strong>Isdiel Martínez</strong>, consultor de IA y estratega digital. Trabajamos con negocios privados y pymes de cualquier sector —clínicas, spas, salones, servicios a domicilio, comercios, despachos— que hacen un buen trabajo pero no lo reflejan en internet: la web no convence, el WhatsApp no se ve o se contesta tarde, y cuando alguien le pregunta a una IA, recomienda a la competencia.
        </p>
        <p className="section-text">
          Empezamos siempre por un diagnóstico con evidencias —una frase de tu web, una reseña con fecha, una captura— y terminamos con acciones concretas, ordenadas por lo que más te devuelve.
        </p>

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

      {/* SERVICIOS: cada tarjeta hace una sola cosa, llevar a su página */}
      <section id="services" className="section">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
          <span className="label-mono" style={{ color: 'var(--action)' }}>Servicios</span>
          <h2 className="section-title">Tres servicios para que tu negocio no pierda ni un cliente</h2>
        </div>

        <div className="card-grid">
          {servicios.map((s) => (
            <a key={s.href} href={s.href} className="service-card">
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
          Cómo trabajamos
        </h2>
        <div className="steps">
          <div>
            <div className="step-number">01</div>
            <p className="section-text" style={{ fontSize: '16px' }}>Empezamos por tu web. Te mandamos gratis su diagnóstico SEO (tu puntuación de 0 a 100 y las 5 correcciones más urgentes, en PDF) y, si hace falta, la renovamos con tu marca real. ¿No tienes web? Te la creamos.</p>
          </div>
          <div>
            <div className="step-number">02</div>
            <p className="section-text" style={{ fontSize: '16px' }}>Si quieres verlo todo, la Auditoría Completa de Negocio analiza todo tu negocio, por fuera y por dentro, y te da un plan ordenado. A diferencia del diagnóstico gratis, no se queda en la web.</p>
          </div>
          <div>
            <div className="step-number">03</div>
            <p className="section-text" style={{ fontSize: '16px' }}>Te posicionamos para que Google y la IA te recomienden: tu ficha, tus reseñas y un contenido que la IA pueda citar.</p>
          </div>
        </div>
      </section>

      {/* CIERRE / CTA FINAL */}
      <section className="section" style={{ paddingBottom: '5rem' }}>
        <div className="service-card" style={{ alignItems: 'flex-start', padding: '2.5rem' }}>
          <h2 className="section-title">
            Hablemos de tu negocio
          </h2>
          <p className="card-text" style={{ maxWidth: '520px' }}>
            Déjanos tu nombre, tu web y tu WhatsApp, y te mandamos gratis tu puntuación SEO de 0 a 100 y las 5 correcciones más urgentes, en un PDF.
          </p>
          <button type="button" className="btn btn-primary" onClick={pedirDiagnostico}>
            Pide tu diagnóstico SEO gratis
          </button>
        </div>
      </section>

      {/* FOOTER - MEDIOS DE CONTACTO */}
      <SiteFooter tone="dark" />
    </>
  );
}
