'use client';
import React, { useEffect, useRef, useState } from 'react';
import ChatWidget from '@/components/ChatWidget'; // Tu asistente de IA
import { BrandMark } from '@/components/Brand';
import { rellenar } from '@/lib/rellenar';
import SelectorIdioma from '@/components/SelectorIdioma';
import SiteFooter from '@/components/SiteFooter';
import { ruta } from '@/lib/i18n';

// Propuesta VIP (/vip y /en/vip): el diseño y los precios viven aquí; los textos en contenido/vip.<lang>.js.
// El código del cupón ya no vive aquí: se valida en /api/vip/cupon (servidor)
// No hay enlaces de pago: cada botón abre WhatsApp con el servicio, el precio y el cupón ya escritos,
// y por WhatsApp se mandan los datos de pago (SPEI en México, solicitud de PayPal en USD fuera)
const WHATSAPP = '16055003653';
const enlaceWhatsapp = (texto) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;

// Precios por servicio: deben coincidir con PRECIOS de app/api/chat/route.js y con las FAQ de /servicios.
// Cada servicio se contrata por separado (la auditoría es la de más valor) y el pack junta los tres con descuento.
const PRECIOS_VIP = {
  web: { precio: 100, precioCupon: 75 },
  aeo: { precio: 150, precioCupon: 125 },
  auditoria: { precio: 200, precioCupon: 175 },
};

// Los tres servicios juntos. El cupón quita 25 USD a cada servicio y 50 al pack frente a los tres con cupón
// (375 → 325). El ahorro y el tachado se miden siempre contra la suma de los tres al mismo precio
const PACK = { precio: 400, precioCupon: 325 };

// Arreglo exprés: entrada rápida para quien ya tiene web. Precio fijo, sin cupón (debe coincidir con OTROS.expres del chat)
const ARREGLO_EXPRES = 49;

// Membresía: se pide por WhatsApp (antes se comprueba que la Auditoría está hecha) y se cobra cada mes a mano
const MEMBRESIA = 200;

// Pesos por SPEI para clientes de México (a 19 MXN por dólar, redondeado). Deben coincidir con
// «precios» de marca/servicios.json del kit 360. El cupón quita $475 a cada servicio y el pack queda $950 por debajo de los tres con cupón
const MXN = { expres: 950, web: 1900, aeo: 2900, auditoria: 3800, pack: 7500 };
const MXN_CUPON = { web: 1425, aeo: 2425, auditoria: 3325, pack: 6225 };
const pesos = (n) => `$${n.toLocaleString('en-US')}`;

export default function Vip({ t, lang }) {
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [para, setPara] = useState('');
  const timerRef = useRef(null);
  const lastRequestRef = useRef(0);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const paquetes = t.paquetes.map((p) => ({ ...p, ...PRECIOS_VIP[p.id] }));

  // Mensaje de WhatsApp de cada botón; el cupón solo se añade en los servicios que lo admiten
  const cupon = couponApplied ? couponCode.trim().toUpperCase() : '';
  const conCupon = (texto) => texto + (cupon ? rellenar(t.whatsapp.cupon, { cupon }) : '');
  const mensajeServicio = (servicio, precio) => rellenar(t.whatsapp.servicio, { servicio, precio });
  const mxn = couponApplied ? MXN_CUPON : MXN;

  // Se valida contra el servidor mientras escribes (con una pequeña espera para no disparar una petición por tecla)
  const validarCupon = (value, espera = 350) => {
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
    }, espera);
  };
  const handleCouponChange = (e) => validarCupon(e.target.value);

  // Enlace personal que va al final del diagnóstico SEO: /vip?para=Spa%20Lumi&cupon=VIP2026
  // pone el nombre del negocio en la cabecera y deja el cupón ya aplicado (se valida igual en el servidor)
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const nombre = (q.get('para') || '').trim().slice(0, 60);
    const codigo = (q.get('cupon') || q.get('coupon') || '').trim().slice(0, 40);
    if (nombre) setPara(nombre); // eslint-disable-line react-hooks/set-state-in-effect
    if (codigo) validarCupon(codigo, 0);
  }, []);

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
          {para ? rellenar(t.hero.para, { para }) : t.hero.etiqueta}
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
              <span className="vip-card-price">{ARREGLO_EXPRES} USD</span>
            </div>
            <p className="vip-card-text">{t.expres.texto}</p>
          </div>
          <a
            href={enlaceWhatsapp(mensajeServicio(t.expres.titulo, `${ARREGLO_EXPRES} USD`))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            aria-label={rellenar(t.ariaPedir, { titulo: t.expres.titulo, precio: `${ARREGLO_EXPRES} USD` })}
          >
            {t.expres.boton}
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

        {/* Tarjetas compactas: sin onClick en la tarjeta; el botón abre WhatsApp y nada más */}
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
                    <div className="vip-card-cabecera">
                      <div className="vip-card-head">
                        <h3 className="vip-card-title">{p.titulo}</h3>
                        <span className="vip-card-price">{precio} USD</span>
                      </div>
                      <p className="vip-card-text">{p.texto}</p>
                    </div>
                    <div className="vip-card-list">
                      <span className="vip-card-list-title">{t.recibes}</span>
                      <ul>
                        {p.incluye.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                    <a
                      href={enlaceWhatsapp(conCupon(mensajeServicio(p.titulo, `${precio} USD`)))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm btn-block"
                      aria-label={rellenar(t.ariaPedir, { titulo: p.titulo, precio: `${precio} USD` })}
                      style={{ marginTop: '4px' }}
                    >
                      {p.boton}
                    </a>
                  </div>
                );
              })}

              {/* PACK COMPLETO: cuarta columna, la opción recomendada.
                  El ahorro y el precio tachado salen de los precios, para que siempre cuadren con las tarjetas
                  (contra la suma de los tres, con o sin cupón) */}
              <div className="vip-card vip-card--pack">
                <span className="vip-badge">
                  {couponApplied
                    ? rellenar(t.pack.ahorroCupon, { monto: suma - precioPack })
                    : rellenar(t.pack.ahorro, { monto: suma - precioPack })}
                </span>
                {/* Título, precio y texto en un solo bloque: así el pack tiene las mismas 3 filas que las otras tarjetas */}
                <div className="vip-card-cabecera">
                  <div className="vip-card-head">
                    <h3 className="vip-card-title">{t.pack.titulo}</h3>
                    <span className="vip-chip">{t.pack.recomendado}</span>
                  </div>
                  <div className="vip-pack-precios">
                    <span className="vip-pack-precio">{precioPack} USD</span>
                    <s className="vip-pack-antes">{suma} USD</s>
                  </div>
                  <p className="vip-card-text">{t.pack.texto}</p>
                </div>
                <div className="vip-card-list">
                  <span className="vip-card-list-title">{t.incluye}</span>
                  <ul>
                    {/* Tras los tres servicios, lo que entrega la Auditoría, al mismo nivel: es lo que más valor añade al pack */}
                    {paquetes.map((p) => <li key={p.id}>{p.titulo}</li>)}
                    {t.pack.auditoriaIncluye.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <a
                  href={enlaceWhatsapp(conCupon(mensajeServicio(t.pack.titulo, `${precioPack} USD`)))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm btn-block"
                  aria-label={rellenar(t.ariaPedir, { titulo: t.pack.titulo, precio: `${precioPack} USD` })}
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

        {/* MÉXICO: los mismos servicios en pesos por SPEI; los datos de la cuenta se mandan por WhatsApp */}
        <div className="vip-card" style={{ maxWidth: '760px', margin: '2rem auto 0', textAlign: 'center', alignItems: 'center' }}>
          <h3 className="vip-card-title">{t.mexico.titulo}</h3>
          <p className="vip-card-text">{t.mexico.texto}</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '6px 18px', fontSize: '14px', color: 'var(--text-2)', padding: 0, margin: 0 }}>
            <li>{t.expres.titulo} <strong style={{ color: 'var(--text)' }}>{pesos(MXN.expres)}</strong></li>
            {paquetes.map((p) => <li key={p.id}>{p.titulo} <strong style={{ color: 'var(--text)' }}>{pesos(mxn[p.id])}</strong></li>)}
            <li>{t.pack.titulo} <strong style={{ color: 'var(--text)' }}>{pesos(mxn.pack)}</strong></li>
            <li>{t.mexico.recepcionista} <strong style={{ color: 'var(--text)' }}>{t.mexico.recepcionistaPrecio}</strong></li>
            <li>{t.mexico.chat} <strong style={{ color: 'var(--text)' }}>{t.mexico.chatPrecio}</strong></li>
            <li>{t.membresia.titulo} <strong style={{ color: 'var(--text)' }}>{t.mexico.membresiaPrecio}</strong></li>
          </ul>
          <a
            href={enlaceWhatsapp(conCupon(t.mexico.mensaje))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            {t.mexico.boton}
          </a>
        </div>

        {/* Una sola pregunta al asistente para las tres tarjetas */}
        <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', fontSize: '15px', color: 'var(--text-2)' }}>
          <span>{t.dudas}</span>
          <button type="button" className="vip-ask" onClick={() => openChatWithContext(t.mensajeLex)}>
            {t.preguntaLex}
          </button>
        </div>

        {/* Qué pasa al pulsar un botón, cómo se paga y las condiciones */}
        <p style={{ margin: '1rem auto 0', maxWidth: '680px', fontSize: '15px', lineHeight: 1.6, color: 'var(--text-2)', textAlign: 'center' }}>
          {t.pago}{' '}
          {t.condiciones.antes} <a href={ruta('condiciones', lang)} className="text-link">{t.condiciones.enlace}</a>.
        </p>

        {/* SERVICIOS MENSUALES: de izquierda a derecha y de menor a mayor precio.
            Los dos complementos, pequeños y apilados; la Membresía, más completa, a su lado */}
        <div style={{ marginTop: '4rem' }}>
          <span className="label-mono" style={{ color: 'var(--text-2)', display: 'block', textAlign: 'center', marginBottom: '8px' }}>
            {t.mensuales}
          </span>
          {/* Vale para las tres cuotas: nada se cobra solo */}
          <p style={{ margin: '0 auto 20px', maxWidth: '620px', fontSize: '14px', lineHeight: 1.6, color: 'var(--text-2)', textAlign: 'center' }}>
            {t.mensualidad}
          </p>
          <div className="vip-mensuales">
            <div className="vip-mensuales-col">
              {/* Complementos: se piden por WhatsApp porque se cobran cada mes */}
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
                <span className="vip-card-price" style={{ fontSize: '17px' }}>{MEMBRESIA} USD{t.mes}</span>
              </div>
              <p className="vip-card-text">{t.membresia.texto}</p>
              <p className="vip-card-text" style={{ color: 'var(--text)' }}>{t.membresia.requisito}</p>
              <div className="vip-card-list">
                <span className="vip-card-list-title">{t.incluye}</span>
                <ul>
                  {t.membresia.incluye.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              {/* Por WhatsApp: antes de cobrar se comprueba que la Auditoría está hecha */}
              <a
                href={enlaceWhatsapp(mensajeServicio(t.membresia.titulo, `${MEMBRESIA} USD${t.mes}`))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm btn-block"
                aria-label={rellenar(t.ariaPedir, { titulo: t.membresia.titulo, precio: `${MEMBRESIA} USD${t.mes}` })}
                style={{ marginTop: '4px' }}
              >
                {t.membresia.boton}
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* PIE VIP: aviso de propuesta privada y quién está detrás, y después el pie de la web principal
          (contacto, redes, aviso legal y condiciones): es la página donde se pide dinero */}
      <div style={{ position: 'relative', zIndex: 10, padding: '0 1rem 2rem', textAlign: 'center', color: 'var(--text-2)', fontSize: '14px' }}>
        {t.pie.map((linea) => <p key={linea}>{linea}</p>)}
      </div>
      <div style={{ position: 'relative', zIndex: 10 }}>
        <SiteFooter tone="dark" lang={lang} />
      </div>

      {/* Widget de Asistente IA Flotante */}
      <ChatWidget couponApplied={couponApplied} lang={lang} />
    </main>
  );
}
