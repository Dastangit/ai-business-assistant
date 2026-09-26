'use client';
import React, { useEffect, useRef, useState } from 'react';
import ChatWidget from '@/components/ChatWidget'; // Tu asistente de IA
import { BrandMark } from '@/components/Brand';

// El código del cupón ya no vive aquí: se valida en /api/vip/cupon (servidor)
const PAYPAL_USER = 'Dastanpro98';

// Tarjetas compactas: precio junto al título, una frase y lo que recibe el cliente.
// Los paquetes 2 y 3 parten de "Todo lo de Diseño Web, más" para no repetir lo mismo en las tres.
const PAQUETES = [
  {
    titulo: 'Diseño Web Premium',
    texto: 'Una web que proyecta confianza, muestra tus trabajos y justifica precios más altos.',
    precio: 100,
    precioCupon: 50,
    listaTitulo: 'Recibes',
    incluye: [
      'Tu web reconstruida como experiencia 3D de scroll inmersivo',
      'Con tu branding real: logo, colores, fotos y precios',
      'Diagnóstico de 5 problemas de tu web actual',
      'Entrega lista para publicar (HTML + assets)',
    ],
  },
  {
    titulo: 'Auditoría de Negocio 360°',
    texto: 'Revisamos tu negocio por fuera y por dentro para ver dónde pierdes tiempo y dinero.',
    precio: 150,
    precioCupon: 100,
    listaTitulo: 'Todo lo de Diseño Web, más',
    incluye: [
      'Por fuera: web, redes, anuncios, reseñas y competencia',
      'Por dentro: procesos y herramientas (36 preguntas)',
      'Incoherencias costosas entre ambas mitades',
      'Horas al mes recuperables y recorrido del cliente antes/después',
    ],
  },
  {
    titulo: 'Ecosistema AEO',
    texto: 'Preparamos tu negocio para que modelos de IA como ChatGPT y Gemini recomienden tus servicios.',
    precio: 200,
    precioCupon: 150,
    listaTitulo: 'Todo lo de Diseño Web, más',
    incluye: ['SEO + posicionamiento AEO', 'Atención personalizada'],
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
          Dominando el Mercado <br/> <span style={{ color: 'var(--brand)' }}>En tu área local</span>
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
          El Plan de <span style={{ color: 'var(--brand)' }}>Rescate Digital</span>
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
        <div className="card-grid" style={{ gap: '16px', alignItems: 'stretch', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', maxWidth: '1040px', margin: '0 auto' }}>
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
                  <span className="vip-card-list-title">{p.listaTitulo}</span>
                  <ul>
                    {p.incluye.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <a
                  href={`https://paypal.me/${PAYPAL_USER}/${precio}USD`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm btn-block"
                  aria-label={`Contratar ${p.titulo} por $${precio} USD`}
                  style={{ marginTop: '4px' }}
                >
                  Contratar
                </a>
              </div>
            );
          })}
        </div>

        {/* El descuento se menciona una vez, debajo de las tarjetas */}
        {couponApplied && (
          <p style={{ marginTop: '1rem', textAlign: 'center', fontSize: '14px', color: 'var(--text-2)' }}>
            Precios con descuento VIP incluido.
          </p>
        )}

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

        {/* MEMBRESÍA DE IMPLEMENTACIÓN: una fila, botón secundario hacia PayPal */}
        <div className="vip-membership" style={{ marginTop: '2.5rem' }}>
          <div className="vip-membership-info">
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap' }}>
              <h3 className="vip-card-title">Membresía de Implementación</h3>
              <span style={{ fontSize: '13px', color: 'var(--text-2)' }}>2 meses · 24 h de desarrollo al mes</span>
            </div>
            <p className="vip-card-text">Aplicamos las mejoras detectadas en el diagnóstico hasta dejar tu negocio listo para crecer.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
            <span style={{ fontSize: '18px', fontWeight: 700 }}>$200<span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--text-2)' }}> /mes</span></span>
            <a
              href={`https://paypal.me/${PAYPAL_USER}/200USD`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              Iniciar membresía
            </a>
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
