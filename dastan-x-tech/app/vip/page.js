'use client';
import React, { useEffect, useRef, useState } from 'react';
import ChatWidget from '@/components/ChatWidget'; // Tu asistente de IA
import { BrandMark } from '@/components/Brand';

// El código del cupón ya no vive aquí: se valida en /api/vip/cupon (servidor)
const PAYPAL_USER = 'Dastanpro98';

// Tabla de precios: los tres servicios de menor a mayor precio y el pack como cuarta columna destacada.
// Cada servicio se contrata por separado (la auditoría es la de más valor) y el pack junta los tres con descuento.
// Los precios deben coincidir con PRECIOS de app/api/chat/route.js y con las FAQ de /servicios.
const PAQUETES = [
  {
    titulo: 'Diseño web',
    texto: 'Una web que proyecta confianza, muestra tus trabajos y justifica precios más altos.',
    precio: 100,
    precioCupon: 50,
    incluye: [
      'Tu web reconstruida como experiencia 3D de scroll inmersivo',
      'Con tu branding real: logo, colores, fotos y precios',
      'Diagnóstico de 5 problemas de tu web actual',
      'Entrega lista para publicar',
    ],
  },
  {
    titulo: 'Posicionamiento AEO',
    texto: 'Preparamos tu negocio para que asistentes de IA como ChatGPT y Gemini recomienden tus servicios.',
    precio: 150,
    precioCupon: 100,
    incluye: [
      'Ficha de Google ordenada',
      'Contenido que la IA puede citar',
      'Reseñas y señales de confianza',
      'Necesita una web en buen estado',
    ],
  },
  {
    titulo: 'Auditoría Completa de Negocio',
    texto: 'Revisamos tu negocio por fuera y por dentro para ver dónde pierdes tiempo y dinero.',
    precio: 200,
    precioCupon: 150,
    incluye: [
      'Por fuera: web, redes, anuncios, reseñas y competencia',
      'Por dentro: procesos y herramientas (36 preguntas)',
      'Incoherencias costosas entre ambas mitades',
      'Horas al mes recuperables y plan de acción por fases',
    ],
  },
];

// Los tres servicios juntos. Sin cupón, el ahorro se calcula contra la suma de los tres (450 → 400).
// Con cupón, el pack cuesta lo mismo que los tres con cupón (300), así que el ahorro se mide contra el pack normal
const PACK = { precio: 400, precioCupon: 300 };

// Arreglo exprés: entrada rápida para quien ya tiene web. Precio fijo, sin cupón (debe coincidir con OTROS.expres del chat)
const ARREGLO_EXPRES = 49;

// Cuotas mensuales: no se pagan con paypal.me (solo pagos únicos), se piden por WhatsApp y se facturan cada mes.
// La Membresía es la excepción: su botón cobra el primer mes por PayPal y los siguientes se cobran cada mes
const COMPLEMENTOS = [
  {
    titulo: 'Chat IA en tu web',
    precio: '$15/mes',
    texto: 'Responde dudas las 24 h y guarda el nombre y el WhatsApp de quien pregunta. Incluido en la Membresía si encaja con tu negocio.',
    mensaje: 'Hola, vi la propuesta VIP y me interesa el Chat IA para mi web.',
  },
  {
    titulo: 'Recepcionista IA por WhatsApp',
    precio: '$150 + $39/mes',
    texto: 'Atiende tu WhatsApp las 24 h, resuelve dudas y guarda los datos de cada cliente. Se instala en un número secundario del negocio.',
    mensaje: 'Hola, vi la propuesta VIP y me interesa la Recepcionista IA por WhatsApp.',
  },
];

export default function VIPPage() {
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const timerRef = useRef(null);
  const lastRequestRef = useRef(0);

  useEffect(() => () => clearTimeout(timerRef.current), []);

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

      {/* SECCIÓN HERO VIP */}
      <section style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center', padding: '4rem 1rem 2rem' }}>
        {/* Logo único: el mismo orbe circular del ícono de pestaña */}
        <BrandMark className="vip-logo" title="DASTAN X-TECH" size={72} />
        <div style={{ height: '1.5rem' }} />
        
        <span className="label-mono" style={{ color: 'var(--action)', marginBottom: '1.25rem' }}>
          Acceso privado · DASTAN X-TECH
        </span>

        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '700', letterSpacing: '-0.03em', marginBottom: '1rem', lineHeight: '1.08' }}>
          Presencia digital <br/> <span style={{ color: 'var(--brand)' }}>en tu área local</span>
        </h1>

        <p style={{ fontSize: '1.125rem', color: 'var(--text-2)', maxWidth: '650px', marginBottom: '2rem', lineHeight: '1.6' }}>
          Cada vez más clientes buscan en Google o le preguntan a una IA antes de contratar un servicio. Si tu negocio no tiene una presencia digital de autoridad, <strong style={{ color: 'var(--text)' }}>tu competencia se está quedando con tus clientes.</strong> Esta es nuestra propuesta exclusiva para blindar tu negocio.
        </p>

        {/* Botón CTA Principal hacia WhatsApp */}
        <a
          href="https://wa.me/16055003653?text=Hola,%20recibí%20la%20invitación%20VIP%20y%20quiero%20mi%20diagnóstico%20SEO%20gratis."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Pedir diagnóstico SEO gratis
        </a>
      </section>

      {/* SECCIÓN DE SERVICIOS VIP */}
      <section style={{ padding: '3rem 1rem 6rem', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.75rem, 4vw, 2rem)', marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '-0.015em' }}>
          Plan de <span style={{ color: 'var(--brand)' }}>implementación</span>
        </h2>

        {/* CUPÓN DE DESCUENTO: antes de los precios, para verlos ya con descuento */}
        <div style={{ marginBottom: '2.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '12px', textAlign: 'center' }}>
          <label htmlFor="cupon-vip" style={{ fontSize: '16px', fontWeight: 600 }}>Introducir Cupón de descuento</label>
          <input
            id="cupon-vip"
            type="text"
            value={couponCode}
            onChange={handleCouponChange}
            placeholder="Código"
            autoComplete="off"
            style={{ background: 'rgba(255,255,255,0.05)', border: couponApplied ? '1px solid var(--action)' : '1px solid var(--border-strong)', borderRadius: '8px', padding: '0.6rem 1rem', color: 'var(--text)', fontSize: '16px', outline: 'none', width: '170px' }}
          />
          <span style={{ fontSize: '14px', color: 'var(--text-2)' }}>Solo para usuarios VIP</span>
          {couponApplied && <span style={{ fontSize: '15px', color: 'var(--action)', fontWeight: 600 }}>✓ Cupón aplicado</span>}
        </div>

        {/* Tarjetas compactas: sin onClick en la tarjeta; el botón paga y nada más */}
        {/* TABLA DE PRECIOS: servicios de contorno y el pack como única opción destacada (botón relleno) */}
        {(() => {
          const precioPack = couponApplied ? PACK.precioCupon : PACK.precio;
          const suma = PAQUETES.reduce((total, p) => total + (couponApplied ? p.precioCupon : p.precio), 0);
          return (
            <div className="vip-precios">
              {PAQUETES.map((p) => {
                const precio = couponApplied ? p.precioCupon : p.precio;
                return (
                  <div key={p.titulo} className="vip-card">
                    <div className="vip-card-head">
                      <h3 className="vip-card-title">{p.titulo}</h3>
                      <span className="vip-card-price">${precio}</span>
                    </div>
                    <p className="vip-card-text">{p.texto}</p>
                    <div className="vip-card-list">
                      <span className="vip-card-list-title">Recibes</span>
                      <ul>
                        {p.incluye.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                    <a
                      href={`https://paypal.me/${PAYPAL_USER}/${precio}USD`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm btn-block"
                      aria-label={`Contratar ${p.titulo} por $${precio} USD`}
                      style={{ marginTop: '4px' }}
                    >
                      Contratar
                    </a>
                  </div>
                );
              })}

              {/* PACK COMPLETO: el ahorro sale de los precios, para que siempre cuadre con las tarjetas */}
              <div className="vip-card vip-card--pack">
                <span className="vip-badge">
                  {couponApplied ? `Ahorras $${PACK.precio - PACK.precioCupon} con tu cupón` : `Ahorras $${suma - precioPack}`}
                </span>
                <div className="vip-card-head">
                  <h3 className="vip-card-title">Pack completo</h3>
                  <span className="vip-card-price">${precioPack}</span>
                </div>
                <p className="vip-card-text">Los tres servicios juntos. ¿Ya contrataste alguno? Pagas solo la diferencia.</p>
                <div className="vip-card-list">
                  <span className="vip-card-list-title">Incluye</span>
                  <ul>
                    {PAQUETES.map((p) => <li key={p.titulo}>{p.titulo}</li>)}
                  </ul>
                </div>
                <a
                  href={`https://paypal.me/${PAYPAL_USER}/${precioPack}USD`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm btn-block"
                  aria-label={`Contratar el Pack completo por $${precioPack} USD`}
                  style={{ marginTop: '4px' }}
                >
                  Contratar el pack
                </a>
              </div>
            </div>
          );
        })()}

        {/* El descuento se menciona una vez, debajo de las tarjetas */}
        {couponApplied && (
          <p style={{ marginTop: '1rem', textAlign: 'center', fontSize: '14px', color: 'var(--text-2)' }}>
            Precios con descuento VIP incluido.
          </p>
        )}

        {/* ARREGLO EXPRÉS: una tarjeta en fila bajo la tabla, para no romper las 4 columnas */}
        <div className="vip-card vip-card--fila">
          <div className="vip-fila-texto">
            <div className="vip-card-head">
              <h3 className="vip-card-title">Arreglo exprés</h3>
              <span className="vip-card-price">${ARREGLO_EXPRES}</span>
            </div>
            <p className="vip-card-text">¿Ya tienes web y quieres algo rápido? Aplicamos en 48 h las 5 correcciones más urgentes de tu diagnóstico. Si contratas el Diseño web en los 30 días siguientes, te lo descontamos.</p>
          </div>
          <a
            href={`https://paypal.me/${PAYPAL_USER}/${ARREGLO_EXPRES}USD`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            aria-label={`Contratar el Arreglo exprés por $${ARREGLO_EXPRES} USD`}
          >
            Contratar
          </a>
        </div>

        {/* Una sola pregunta al asistente para las tres tarjetas */}
        <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', fontSize: '15px', color: 'var(--text-2)' }}>
          <span>¿No sabes cuál elegir?</span>
          <button type="button" className="vip-ask" onClick={() => openChatWithContext('No sé qué paquete elegir.')}>
            Pregúntale al asistente
          </button>
        </div>

        <p style={{ marginTop: '1rem', fontSize: '15px', color: 'var(--text-2)', textAlign: 'center' }}>
          Si necesita otro método de pago, contáctenos por{' '}
          <a href="https://wa.me/16055003653" target="_blank" rel="noopener noreferrer" className="text-link">WhatsApp</a>.
        </p>

        {/* SERVICIOS MENSUALES: de izquierda a derecha y de menor a mayor precio.
            Los dos complementos, pequeños y apilados; la Membresía, más completa, a su lado */}
        <div style={{ marginTop: '4rem' }}>
          <span className="label-mono" style={{ color: 'var(--text-2)', display: 'block', textAlign: 'center', marginBottom: '14px' }}>
            Servicios mensuales
          </span>
          <div className="vip-mensuales">
            <div className="vip-mensuales-col">
              {/* Complementos: se piden por WhatsApp porque se facturan cada mes */}
              {COMPLEMENTOS.map((c) => (
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
                    Pedir por WhatsApp
                  </a>
                </div>
              ))}
            </div>

            {/* MEMBRESÍA DE IMPLEMENTACIÓN */}
            <div className="vip-card">
              <div className="vip-card-head">
                <h3 className="vip-card-title">Membresía de Implementación</h3>
                <span className="vip-card-price" style={{ fontSize: '17px' }}>$200/mes</span>
              </div>
              <p className="vip-card-text">Aplicamos cada mes el plan de acción de tu Auditoría Completa, sin que tengas que coordinar nada. Mínimo 2 meses.</p>
              <div className="vip-card-list">
                <span className="vip-card-list-title">Incluye</span>
                <ul>
                  <li>24 h de desarrollo al mes</li>
                  <li>Chat IA en tu web incluido, si encaja con tu negocio</li>
                  <li>Automatizaciones: recordatorios, seguimiento de presupuestos y reseñas</li>
                  <li>A elegir dentro de tus horas: análisis de YouTube, de marca personal o de tienda online, y dashboard de facturas</li>
                  <li>Prioridad de respuesta sobre clientes sin membresía</li>
                </ul>
              </div>
              {/* Es la única cuota mensual con PayPal: el botón cobra solo el primer mes (paypal.me no hace pagos recurrentes) */}
              <a
                href={`https://paypal.me/${PAYPAL_USER}/200USD`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm btn-block"
                aria-label="Pagar el primer mes de la Membresía de Implementación por $200 USD"
                style={{ marginTop: '4px' }}
              >
                Pagar el primer mes
              </a>
              <p style={{ fontSize: '13px', color: 'var(--text-2)', textAlign: 'center', margin: 0 }}>
                Los meses siguientes te los cobramos cada mes.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* FOOTER VIP */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem', textAlign: 'center', color: 'var(--text-2)', fontSize: '14px' }}>
        <p>Esta es una propuesta privada. Por favor, no comparta este enlace.</p>
        <p>© 2026 DASTAN X-TECH</p>
      </footer>

      {/* Widget de Asistente IA Flotante */}
      <ChatWidget couponApplied={couponApplied} />
    </main>
  );
}
