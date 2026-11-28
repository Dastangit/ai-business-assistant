'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { ruta } from '@/lib/i18n';
import { serifEditorial } from '@/lib/fuente-editorial';
import fotoDastan from '@/public/equipo/dastan-tamayo-dastanxtech.webp';
import fotoIsdiel from '@/public/equipo/isdiel-martinez-dastanxtech.webp';
import capturaWeb from '@/public/inicio/muestra-diseno-web.jpg';
import capturaAuditoria from '@/public/inicio/muestra-auditoria.jpg';
import capturaAeo from '@/public/inicio/muestra-informe-aeo.jpg';

// Portada editorial, compartida por los dos idiomas: el diseño vive aquí y los textos en contenido/inicio.<lang>.js.
// Base clara como servicios y blog (crema + tinta); solo dos franjas oscuras: las pruebas y el cierre con el pie.
// Las clases propias van con el prefijo ed- (app/globals.css, bloque «Portada editorial») para no tocar las compartidas.
const FOTOS = [fotoDastan, fotoIsdiel];
// Captura de cada servicio del índice (mismo orden que t.servicios.tarjetas): solo en escritorio, al pasar el ratón
const CAPTURAS = { disenoWeb: capturaWeb, auditoria: capturaAuditoria, aeo: capturaAeo };

// Abre el chat con el formulario del diagnóstico SEO gratis desplegado
const pedirDiagnostico = () => {
  window.dispatchEvent(new CustomEvent('abrir-chat', { detail: { diagnostico: true } }));
};
// Abre el chat con una pregunta ya escrita (servicios de automatización, que no tienen página propia)
const preguntar = (mensaje) => {
  window.dispatchEvent(new CustomEvent('abrir-chat', { detail: mensaje }));
};

// Titular palabra a palabra (cada una entra con su retraso, --i). El lector de pantalla lee el h1 entero por aria-label
const enPalabras = (texto, desde, clase = '') =>
  texto.trim().split(/\s+/).map((p, i) => (
    <span key={i}><span className={`ed-palabra ${clase}`} style={{ '--i': desde + i }}>{p}</span>{' '}</span>
  ));

// Títulos h2: todos en la misma cursiva serif (un solo estilo por frase); la parte entre *asteriscos*
// solo cambia de color. Van palabra a palabra, como el h1, y entran cuando el título llega a la pantalla
const tituloEnPalabras = (texto) => {
  let n = 0;
  return texto.split('*').flatMap((trozo, t) =>
    trozo.split(/(\s+)/).filter(Boolean).map((p, k) =>
      /^\s+$/.test(p) ? ' ' : (
        <span key={`${t}-${k}`} className={`ed-palabra-r${t % 2 ? ' ed-marca' : ''}`} style={{ '--i': n++ }}>{p}</span>
      )));
};

// Aparición con el scroll en toda la portada: lo marcado con ed-revela entra (sube y se enfoca) la primera vez
// que se ve. El script en línea marca <html> antes de pintar (sin parpadeo); si React no llegara a montar,
// a los 4 s se quita la marca y todo queda visible
const MARCA_ANIMACION = "document.documentElement.classList.add('ed-anim');setTimeout(function(){if(!window.__edRevela)document.documentElement.classList.remove('ed-anim')},4000)";
function useRevelar() {
  useEffect(() => {
    window.__edRevela = true;
    const raiz = document.documentElement;
    raiz.classList.add('ed-anim');
    const elementos = document.querySelectorAll('.ed-revela');
    if (!('IntersectionObserver' in window)) {
      elementos.forEach((e) => e.classList.add('is-visto'));
      return undefined;
    }
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-visto');
        observador.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    elementos.forEach((e) => observador.observe(e));
    return () => observador.disconnect();
  }, []);
}

export default function Inicio({ t, lang }) {
  useRevelar();
  const palabrasTitulo = t.titulo.trim().split(/\s+/).length;
  // Cinta: los tres servicios con página propia, el diagnóstico gratis y los de IA (estos llevan a /servicios)
  const cinta = [
    ...t.servicios.tarjetas.map((s) => ({ texto: s.title, href: ruta(s.clave, lang) })),
    { texto: t.servicios.cintaDiagnostico, href: ruta('auditoriaGratis', lang) },
    ...t.servicios.ia.map((s) => ({ texto: s.title, href: ruta('servicios', lang) })),
  ];
  const equipo = FOTOS.map((foto, i) => ({ foto, ...t.equipo[i] }));
  // Preguntas frecuentes también como datos estructurados (FAQPage): mismas preguntas y respuestas que se ven
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.items.map((f) => ({
      '@type': 'Question',
      name: f.p,
      acceptedAnswer: { '@type': 'Answer', text: f.r },
    })),
  };

  return (
    <div className={`theme-light ed ${serifEditorial.variable}`}>
      <script dangerouslySetInnerHTML={{ __html: MARCA_ANIMACION }} />
      <SiteHeader tone="light" lang={lang} />
      <main id="contenido">

        {/* APERTURA: qué hacemos y qué recibe gratis, con la ficha del diagnóstico de ejemplo al lado */}
        <section className="ed-w ed-apertura" aria-labelledby="ed-h1">
          <p className="ed-cabecera label-mono">
            {t.cabecera.map((c) => <span key={c}>{c}</span>)}
          </p>
          <div className="ed-apertura-rejilla">
            <div className="ed-apertura-texto">
              <h1 id="ed-h1" className="ed-h1" aria-label={t.titulo + t.tituloDestacado}>
                <span aria-hidden="true">
                  {enPalabras(t.titulo, 0)}
                  {enPalabras(t.tituloDestacado, palabrasTitulo, 'ed-marca')}
                </span>
              </h1>
              <p className="ed-entradilla ed-entra" style={{ '--d': '0.55s' }}>{t.subtitulo}</p>
              <div className="ed-acciones ed-entra" style={{ '--d': '0.7s' }}>
                <button type="button" className="btn btn-primary" onClick={pedirDiagnostico}>{t.botonDiagnostico}</button>
                <a href="/ejemplo-diagnostico-seo" className="ed-enlace">{t.muestra.enlace}</a>
              </div>
              <ul className="ed-puntos label-mono ed-entra" style={{ '--d': '0.85s' }}>
                {t.puntos.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>

            {/* Ficha del diagnóstico de ejemplo (public/ejemplo-diagnostico-seo.html, negocio ficticio) */}
            <aside className="ed-ficha ed-entra" style={{ '--d': '0.4s' }} aria-label={t.muestra.aria}>
              <div className="ed-ficha-cabecera">
                <span className="label-mono">{t.muestra.etiqueta}</span>
                <span className="ed-ficha-aviso">{t.muestra.aviso}</span>
              </div>
              <div className="ed-ficha-nota">
                <div className="ed-anillo" style={{ '--n': t.muestra.nota }}>
                  <strong>{t.muestra.nota}</strong>
                  <small>{t.muestra.deCien}</small>
                </div>
                <strong className="ed-ficha-negocio">{t.muestra.negocio}</strong>
              </div>
              <p className="ed-ficha-sub">{t.muestra.urgentesTitulo}</p>
              <ol className="ed-ficha-lista">
                {t.muestra.urgentes.map((u) => <li key={u}>{u}</li>)}
              </ol>
              <Link href={ruta('blogDiagnosticoSeo', lang)} className="ed-enlace ed-enlace--suave">{t.muestra.real}</Link>
            </aside>
          </div>
        </section>

        {/* ÍNDICE DE SERVICIOS: filas numeradas, como el sumario de una revista. En escritorio, la captura de cada servicio */}
        <section id="services" className="ed-w ed-seccion" aria-labelledby="ed-servicios">
          <div className="ed-titulo-bloque">
            <span className="label-mono ed-revela">{t.servicios.etiqueta}</span>
            <h2 id="ed-servicios" className="ed-h2 ed-revela">{tituloEnPalabras(t.servicios.titulo)}</h2>
          </div>

          <h3 className="ed-grupo label-mono ed-revela">{t.servicios.grupoWeb}</h3>
          <ol className="ed-indice">
            {t.servicios.tarjetas.map((s, i) => (
              <li key={s.clave} className="ed-fila ed-revela">
                <a href={ruta(s.clave, lang)} className="ed-fila-enlace">
                  <span className="ed-num label-mono">{String(i + 1).padStart(2, '0')}</span>
                  <span className="ed-fila-cuerpo">
                    <span className="ed-fila-nombre">{s.title}</span>
                    <span className="ed-fila-texto">{s.text}</span>
                  </span>
                  <span className="ed-fila-ir" aria-hidden="true">→</span>
                </a>
                <Image src={CAPTURAS[s.clave]} alt="" aria-hidden="true" placeholder="blur" sizes="420px" quality={90} className="ed-fila-captura" />
              </li>
            ))}
          </ol>

          <h3 className="ed-grupo label-mono ed-revela">{t.servicios.grupoIa}</h3>
          <ol className="ed-indice ed-indice--ia" start={t.servicios.tarjetas.length + 1}>
            {t.servicios.ia.map((s, i) => (
              <li key={s.title} className="ed-fila ed-revela">
                <button type="button" className="ed-fila-enlace" onClick={() => preguntar(s.mensaje)}>
                  <span className="ed-num label-mono">{String(t.servicios.tarjetas.length + i + 1).padStart(2, '0')}</span>
                  <span className="ed-fila-cuerpo">
                    <span className="ed-fila-nombre">{s.title}</span>
                    <span className="ed-fila-texto">{s.text}</span>
                  </span>
                  <span className="ed-fila-ir ed-fila-ir--chat" aria-hidden="true">{s.cta}</span>
                </button>
              </li>
            ))}
          </ol>
          <Link href={ruta('servicios', lang)} className="ed-enlace ed-revela">{t.servicios.todos}</Link>
        </section>

        {/* PRUEBAS (franja oscura): sin reseñas todavía, las cifras reales de nuestra propia web */}
        <section className="ed-oscuro" aria-labelledby="ed-pruebas">
          <div className="ed-w ed-seccion">
            <div className="ed-titulo-bloque">
              <span className="label-mono ed-revela">{t.pruebas.etiqueta}</span>
              <h2 id="ed-pruebas" className="ed-h2 ed-revela">{tituloEnPalabras(t.pruebas.titulo)}</h2>
            </div>
            <div className="ed-cifras">
              {t.pruebas.items.map((p, i) => (
                <Link key={p.clave} href={ruta(p.clave, lang)} className="ed-cifra ed-revela" style={{ '--r': i }}>
                  <span className="label-mono">{p.etiqueta}</span>
                  <strong className="ed-cifra-num">{p.antes} <span aria-hidden="true">→</span><span className="sr-only">{t.pruebas.a}</span> {p.despues}</strong>
                  <span className="ed-cifra-texto">{p.texto}</span>
                  <span className="ed-enlace ed-enlace--oscuro">{p.enlace}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* MÉTODO: tres columnas numeradas */}
        <section className="ed-w ed-seccion" aria-labelledby="ed-metodo">
          <div className="ed-titulo-bloque">
            <span className="label-mono ed-revela">{t.pasos.etiqueta}</span>
            <h2 id="ed-metodo" className="ed-h2 ed-revela">{tituloEnPalabras(t.pasos.titulo)}</h2>
          </div>
          <ol className="ed-pasos">
            {t.pasos.items.map((paso, i) => (
              <li key={i} className="ed-revela" style={{ '--r': i }}>
                <span className="ed-num label-mono">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="ed-paso-titulo">{paso.titulo}</h3>
                <p>{paso.texto}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* CINTA (entre el método y el equipo): los servicios pasan en una banda inclinada. Dos copias iguales para que el bucle no tenga corte;
            la segunda queda fuera del lector de pantalla y del tabulador. Se para al pasar el ratón o al enfocarla */}
        <nav className="ed-cinta ed-revela" aria-label={t.servicios.cinta}>
          <div className="ed-cinta-banda">
            <div className="ed-cinta-pista">
              {[0, 1].map((copia) => (
                <ul key={copia} className="ed-cinta-grupo" aria-hidden={copia === 1 || undefined}>
                  {cinta.map((c) => (
                    <li key={c.texto}>
                      <Link href={c.href} tabIndex={copia === 1 ? -1 : undefined}>{c.texto}</Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </nav>

        {/* QUIÉNES SOMOS: texto a la izquierda, retratos pequeños a la derecha */}
        <section id="about" className="ed-w ed-seccion ed-nosotros" aria-labelledby="ed-quienes">
          <div>
            <span className="label-mono ed-revela">{t.quienes.etiqueta}</span>
            <h2 id="ed-quienes" className="ed-h2 ed-revela">{tituloEnPalabras(t.quienes.titulo)}</h2>
            <p className="ed-texto ed-revela">{t.quienes.texto}</p>
            <Link href={ruta('historia', lang)} className="ed-enlace ed-revela">{t.quienes.enlace}</Link>
          </div>
          <div className="ed-equipo">
            {equipo.map((p, i) => (
              <figure key={p.nombre} className="ed-revela" style={{ '--r': i }}>
                {/* Marco con el mismo encuadre para los dos: las fotos originales no tienen la cabeza a la misma escala */}
                <div className={`ed-retrato-marco ed-retrato-marco--${i}`}>
                  {/* sizes por encima del marco: la foto cuadrada se dibuja a la altura del 4:5 (y la de Dastan ×1,16),
                      así que ocupa ~350 px; con «240px» el navegador bajaba la de 384 px y la estiraba (se veían los píxeles) */}
                  <Image src={p.foto} alt={p.alt} placeholder="blur" sizes="(max-width: 640px) 60vw, 360px" quality={90} className="ed-retrato" />
                </div>
                <figcaption>
                  <strong>{p.nombre}</strong>
                  <span>{p.rol}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* PREGUNTAS FRECUENTES: las que la gente escribe en Google (autocompletado y Semrush, 28-nov-2026) */}
        <section className="ed-w ed-seccion" aria-labelledby="ed-faq">
          <div className="ed-titulo-bloque">
            <span className="label-mono ed-revela">{t.faq.etiqueta}</span>
            <h2 id="ed-faq" className="ed-h2 ed-revela">{tituloEnPalabras(t.faq.titulo)}</h2>
          </div>
          <div className="ed-faq">
            {t.faq.items.map((f) => (
              <details key={f.p} className="ed-revela">
                <summary>{f.p}</summary>
                <p>{f.r}</p>
                {f.enlace && <Link href={ruta(f.enlace.clave, lang)} className="ed-enlace">{f.enlace.texto}</Link>}
              </details>
            ))}
          </div>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

        {/* CIERRE (franja oscura, continúa en el pie) */}
        <section className="ed-oscuro ed-cierre" aria-labelledby="ed-cierre">
          <div className="ed-w">
            <span className="label-mono ed-revela">{t.cierre.etiqueta}</span>
            <h2 id="ed-cierre" className="ed-h2 ed-revela">{tituloEnPalabras(t.cierre.titulo)}</h2>
            <p className="ed-texto ed-revela">{t.cierre.texto}</p>
            <button type="button" className="btn btn-primary ed-revela" onClick={pedirDiagnostico}>{t.cierre.boton}</button>
          </div>
        </section>
      </main>
      <div className="ed-pie">
        <SiteFooter tone="dark" lang={lang} />
      </div>
    </div>
  );
}
