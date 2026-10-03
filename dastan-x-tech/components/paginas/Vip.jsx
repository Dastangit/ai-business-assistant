'use client';
import React, { useEffect, useRef, useState } from 'react';
import ChatWidget from '@/components/ChatWidget'; // Tu asistente de IA
import { BrandMark } from '@/components/Brand';
import { rellenar } from '@/lib/rellenar';
import SelectorIdioma from '@/components/SelectorIdioma';

// Propuesta VIP (/vip y /en/vip): el diseño y los precios viven aquí; los textos en contenido/vip.<lang>.js.
// El código del cupón ya no vive aquí: se valida en /api/vip/cupon (servidor)
const PAYPAL_USER = 'Dastanpro98';

// Precios por servicio: deben coincidir con PRECIOS de app/api/chat/route.js y con las FAQ de /servicios.
// Cada servicio se contrata por separado (la auditoría es la de más valor) y el pack junta los tres con descuento.
const PRECIOS_VIP = {
  web: { precio: 100, precioCupon: 50 },
  aeo: { precio: 150, precioCupon: 100 },
  auditoria: { precio: 200, precioCupon: 150 },
};

// Los tres servicios juntos. Sin cupón, el ahorro se calcula contra la suma de los tres (450 → 400).
// Con cupón, el pack cuesta lo mismo que los tres con cupón (300), así que el ahorro se mide contra el pack normal
const PACK = { precio: 400, precioCupon: 300 };

// Arreglo exprés: entrada rápida para quien ya tiene web. Precio fijo, sin cupón (debe coincidir con OTROS.expres del chat)
const ARREGLO_EXPRES = 49;

// Membresía: su botón cobra el primer mes por PayPal y los siguientes se cobran cada mes
const MEMBRESIA = 200;

export default function Vip({ t, lang }) {
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const timerRef = useRef(null);
  const lastRequestRef = useRef(0);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const paquetes = t.paquetes.map((p) => ({ ...p, ...PRECIOS_VIP[p.id] }));

  // Se valida contra el servidor mientras escribes (con una pequeña espera para no disparar una petición por tecla)
  const handleCouponChange = (e) => {
    const value = e.target.value;
    setCouponCode(value);
    setCouponApplied(false);
    clearTimeout(timerRef.current);
    const code = value.trim();
    if (!code) return;
    const requestId = ++lastRequestRef.current;
    timerRef.current = setTimeout(async () => {
      try {
        const res = await fetch('/api/vip/cupon', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code }),
        });
        const data = await res.json();
        if (requestId === lastRequestRef.current) setCouponApplied(Boolean(data.applied));
      } catch (error) {
        console.error('No se pudo validar el cupón:', error);
        if (requestId === lastRequestRef.current) setCouponApplied(false);
      }
    }, 350);
  };

  // Función para abrir el chat si el cliente prefiere hablar con la IA
  const openChatWithContext = (mensaje) => {
    window.dispatchEvent(new CustomEvent('abrir-chat', { detail: mensaje }));
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* position relative + overflow hidden: el brillo .glow-br ya no sobresale por debajo del pie ni alarga la página */}

      {/* BRILLOS DE FONDO (Reutilizados de tu diseño principal) */}
      <div className="glow-tl"></div>
      <div className="glow-br"></div>

      {/* El VIP no tiene cabecera: el cambio de idioma va discreto, arriba a la derecha */}
      <SelectorIdioma className="vip-idioma" />

      {/* SECCIÓN HERO VIP */}
      <section style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center', padding: '4rem 1rem 2rem' }}>
        {/* Logo único: el mismo orbe circular del ícono de pestaña */}
        <BrandMark className="vip-logo" title="DASTAN X-TECH" size={72} />
        <div style={{ height: '1.5rem' }} />

        <span className="label-mono" style={{ color: 'var(--action)', marginBottom: '1.25rem' }}>
          {t.hero.etiqueta}
        </span>

        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '700', letterSpacing: '-0.03em', marginBottom: '1rem', lineHeight: '1.08' }}>
          {t.hero.titulo}
        </h1>

        <p style={{ fontSize: '1.125rem', color: 'var(--text-2)', maxWidth: '650px', marginBottom: '2rem', lineHeight: '1.6' }}>
          {t.hero.texto}
        </p>

        {/* Botón CTA Principal hacia WhatsApp */}
        <a
          href={`https://wa.me/16055003653?text=${encodeURIComponent(t.hero.whatsappDiagnostico)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          {t.hero.botonDiagnostico}
        </a>
      </section>

      {/* SECCIÓN DE SERVICIOS VIP */}
      <section style={{ padding: '3rem 1rem 6rem', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.75rem, 4vw, 2rem)', marginBottom: '2.5rem', fontWeight: '700', letterSpacing: '-0.015em' }}>
          {t.plan}
        </h2>

        {/* ARREGLO EXPRÉS: la entrada más barata, primero y centrada, encima de las 4 tarjetas de servicios */}
        <div className="vip-card vip-card--fila">
          <div className="vip-fila-texto">
            <div className="vip-card-head">
              <h3 className="vip-card-title">{t.expres.titulo}</h3>
              <span className="vip-card-price">${ARREGLO_EXPRES}</span>
            </div>
            <p className="vip-card-text">{t.expres.texto}</p>
          </div>
          <a
            href={`https://paypal.me/${PAYPAL_USER}/${ARREGLO_EXPRES}USD`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            aria-label={rellenar(t.expres.aria, { precio: ARREGLO_EXPRES })}
          >
            {t.contratar}
          </a>
        </div>

        {/* CUPÓN DE DESCUENTO: solo rebaja los 4 servicios, así que va justo encima de ellos (después del Arreglo exprés, que no tiene cupón) */}
        <div style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '12px', textAlign: 'center' }}>
          <label htmlFor="cupon-vip" style={{ fontSize: '16px', fontWeight: 600 }}>{t.cupon.etiqueta}</label>
          <input
            id="cupon-vip"
            type="text"
            value={couponCode}
            onChange={handleCouponChange}
            placeholder={t.cupon.placeholder}
            autoComplete="off"
            style={{ background: 'rgba(255,255,255,0.05)', border: couponApplied ? '1px solid var(--action)' : '1px solid var(--border-strong)', borderRadius: '8px', padding: '0.6rem 1rem', color: 'var(--text)', fontSize: '16px', outline: 'none', width: '170px' }}
          />
          <span style={{ fontSize: '14px', color: 'var(--text-2)' }}>{t.cupon.nota}</span>
          {couponApplied && <span style={{ fontSize: '15px', color: 'var(--action)', fontWeight: 600 }}>{t.cupon.aplicado}</span>}
        </div>

        {/* Tarjetas compactas: sin onClick en la tarjeta; el botón paga y nada más */}
        {/* TABLA DE PRECIOS: servicios de contorno y el pack como única opción destacada (botón relleno) */}
        {(() => {
          const precioPack = couponApplied ? PACK.precioCupon : PACK.precio;
          const suma = paquetes.reduce((total, p) => total + (couponApplied ? p.precioCupon : p.precio), 0);
          return (
            <div className="vip-precios">
              {paquetes.map((p) => {
                const precio = couponApplied ? p.precioCupon : p.precio;
                return (
                  <div key={p.id} className="vip-card">
                    <div className="vip-card-head">
                      <h3 className="vip-card-title">{p.titulo}</h3>
                      <span className="vip-card-price">${precio}</span>
                    </div>
                    <p className="vip-card-text">{p.texto}</p>
                    <div className="vip-card-list">
                      <span className="vip-card-list-title">{t.recibes}</span>
                      <ul>
                        {p.incluye.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                    <a
                      href={`https://paypal.me/${PAYPAL_USER}/${precio}USD`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm btn-block"
                      aria-label={rellenar(t.ariaContratar, { titulo: p.titulo, precio })}
                      style={{ marginTop: '4px' }}
                    >
                      {t.contratar}
                    </a>
                  </div>
                );
              })}

              {/* PACK COMPLETO: el ahorro sale de los precios, para que siempre cuadre con las tarjetas */}
              <div className="vip-card vip-card--pack">
                <span className="vip-badge">
                  {couponApplied
                    ? rellenar(t.pack.ahorroCupon, { monto: PACK.precio - PACK.precioCupon })
                    : rellenar(t.pack.ahorro, { monto: suma - precioPack })}
                </span>
                <div className="vip-card-head">
                  <h3 className="vip-card-title">{t.pack.titulo}</h3>
                  <span className="vip-card-price">${precioPack}</span>
                </div>
                <p className="vip-card-text">{t.pack.texto}</p>
                <div className="vip-card-list">
                  <span className="vip-card-list-title">{t.incluye}</span>
                  <ul>
                    {paquetes.map((p) => <li key={p.id}>{p.titulo}</li>)}
                  </ul>
                </div>
                <a
                  href={`https://paypal.me/${PAYPAL_USER}/${precioPack}USD`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm btn-block"
                  aria-label={rellenar(t.pack.aria, { precio: precioPack })}
                  style={{ marginTop: '4px' }}
                >
                  {t.pack.boton}
                </a>
              </div>
            </div>
          );
        })()}

        {/* El descuento se menciona una vez, debajo de las tarjetas */}
        {couponApplied && (
          <p style={{ marginTop: '1rem', textAlign: 'center', fontSize: '14px', color: 'var(--text-2)' }}>
            {t.cupon.conDescuento}
          </p>
        )}

        {/* Una sola pregunta al asistente para las tres tarjetas */}
        <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', fontSize: '15px', color: 'var(--text-2)' }}>
          <span>{t.dudas}</span>
          <button type="button" className="vip-ask" onClick={() => openChatWithContext(t.mensajeLex)}>
            {t.preguntaLex}
          </button>
        </div>

        <p style={{ marginTop: '1rem', fontSize: '15px', color: 'var(--text-2)', textAlign: 'center' }}>
          {t.otroPago}{' '}
          <a href="https://wa.me/16055003653" target="_blank" rel="noopener noreferrer" className="text-link">WhatsApp</a>.
        </p>

        {/* SERVICIOS MENSUALES: de izquierda a derecha y de menor a mayor precio.
            Los dos complementos, pequeños y apilados; la Membresía, más completa, a su lado */}
        <div style={{ marginTop: '4rem' }}>
          <span className="label-mono" style={{ color: 'var(--text-2)', display: 'block', textAlign: 'center', marginBottom: '14px' }}>
            {t.mensuales}
          </span>
          <div className="vip-mensuales">
            <div className="vip-mensuales-col">
              {/* Complementos: se piden por WhatsApp porque se facturan cada mes */}
              {t.complementos.map((c) => (
                <div key={c.titulo} className="vip-card">
                  <div className="vip-card-head">
                    <h3 className="vip-card-title">{c.titulo}</h3>
                    <span className="vip-card-price" style={{ fontSize: '17px' }}>{c.precio}</span>
                  </div>
                  <p className="vip-card-text" style={{ flex: 1 }}>{c.texto}</p>
                  <a
                    href={`https://wa.me/16055003653?text=${encodeURIComponent(c.mensaje)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm btn-block"
                  >
                    {t.pedirWhatsapp}
                  </a>
                </div>
              ))}
            </div>

            {/* MEMBRESÍA DE IMPLEMENTACIÓN */}
            <div className="vip-card">
              <div className="vip-card-head">
                <h3 className="vip-card-title">{t.membresia.titulo}</h3>
                <span className="vip-card-price" style={{ fontSize: '17px' }}>{t.membresia.precio}</span>
              </div>
              <p className="vip-card-text">{t.membresia.texto}</p>
              <div className="vip-card-list">
                <span className="vip-card-list-title">{t.incluye}</span>
                <ul>
                  {t.membresia.incluye.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              {/* Es la única cuota mensual con PayPal: el botón cobra solo el primer mes (paypal.me no hace pagos recurrentes) */}
              <a
                href={`https://paypal.me/${PAYPAL_USER}/${MEMBRESIA}USD`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm btn-block"
                aria-label={rellenar(t.membresia.aria, { precio: MEMBRESIA })}
                style={{ marginTop: '4px' }}
              >
                {t.membresia.boton}
              </a>
              <p style={{ fontSize: '13px', color: 'var(--text-2)', textAlign: 'center', margin: 0 }}>
                {t.membresia.nota}
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* FOOTER VIP */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem', textAlign: 'center', color: 'var(--text-2)', fontSize: '14px' }}>
        {t.pie.map((linea) => <p key={linea}>{linea}</p>)}
      </footer>

      {/* Widget de Asistente IA Flotante */}
      <ChatWidget couponApplied={couponApplied} lang={lang} />
    </main>
  );
}
