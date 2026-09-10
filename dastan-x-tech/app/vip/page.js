'use client';
import React, { useState } from 'react';
import ChatWidget from '@/components/ChatWidget'; // Tu asistente de IA

// 🎟️ Código de cupón válido (cámbialo aquí cuando definas el real)
const VALID_COUPON = 'VIP50';
const PAYPAL_USER = 'Dastanpro98';

export default function VIPPage() {
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  const handleCouponChange = (e) => {
    const value = e.target.value;
    setCouponCode(value);
    setCouponApplied(value.trim().toUpperCase() === VALID_COUPON);
  };

  const price1 = couponApplied ? 50 : 100;
  const price2 = couponApplied ? 100 : 150;
  const price3 = couponApplied ? 150 : 200;

  // Función para abrir el chat si el cliente prefiere hablar con la IA
  const openChatWithContext = (mensaje) => {
    window.dispatchEvent(new CustomEvent('abrir-chat', { detail: mensaje }));
  };

  return (
    <main style={{ backgroundColor: '#07050A', color: '#F5F4EF', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', overflowX: 'hidden' }}>
      
      {/* 🛑 ETIQUETA FANTASMA: Evita que Google indexe esta página */}
      <meta name="robots" content="noindex, nofollow" />

      {/* BRILLOS DE FONDO (Reutilizados de tu diseño principal) */}
      <div className="glow-tl"></div>
      <div className="glow-br"></div>

      {/* SECCIÓN HERO VIP */}
      <section style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center', padding: '4rem 1rem 2rem' }}>
        <div style={{ width: '70px', height: '70px', borderRadius: '16px', background: 'linear-gradient(135deg, #A855F7, #2DD4BF)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)' }}>
          <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#07050A' }}>X</span>
        </div>
        
        <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.4rem 1rem', borderRadius: '99px', border: '1px solid #2DD4BF', color: '#2DD4BF', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '1.5rem', letterSpacing: '1px' }}>
          ACCESO PRIVADO
        </div>

        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', letterSpacing: '-1px', marginBottom: '1rem', lineHeight: '1.1' }}>
          Dominando el Mercado <br/> <span style={{ color: '#A855F7' }}>En tu área local</span>
        </h1>
        
        <p style={{ fontSize: '1.25rem', color: '#b0adc5', maxWidth: '650px', marginBottom: '2rem', lineHeight: '1.6' }}>
          El 80% de los clientes buscan en Google o a través de modelos de IA antes de contratar un servicio. Si tu negocio no tiene una presencia digital de autoridad, <strong>tu competencia se está quedando con tus clientes.</strong> Esta es nuestra propuesta exclusiva para blindar tu negocio.
        </p>

        {/* Botón CTA Principal hacia WhatsApp */}
        <a 
          href="https://wa.me/16055003653?text=Hola,%20recibí%20la%20invitación%20VIP%20y%20quiero%20la%20auditoría%20gratuita%20de%20mi%20negocio." 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ background: '#2DD4BF', color: '#07050A', padding: '1rem 2.5rem', borderRadius: '12px', fontWeight: '800', fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 4px 20px rgba(45, 212, 191, 0.3)', transition: 'transform 0.2s' }}
        >
          Solicitar Consulta Gratuita
        </a>
      </section>

      {/* SECCIÓN DE SERVICIOS VIP (Tarjetas interactivas) */}
      <section style={{ padding: '3rem 1rem 6rem', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem', fontWeight: '800' }}>El Plan de <span style={{ color: '#E9D5FF' }}>Rescate Digital</span></h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          
          {/* Tarjeta 1: Diseño Web */}
          <div className="service-card" onClick={() => openChatWithContext("Quiero ver ejemplos de Diseño Web para mi negocio.")}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#E9D5FF" strokeWidth="1.5" style={{ width: '24px', height: '24px', flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>
                <h3 style={{ fontSize: '1.2rem', margin: 0, color: '#E9D5FF' }}>Diseño Web Premium</h3>
              </div>
              <p style={{ color: '#b0adc5', fontSize: '1.1rem', lineHeight: '1.5', margin: 0 }}>
                Tu negocio necesita dejar de ser invisible. Creamos una plataforma corporativa que proyecta confianza, muestra tus trabajos y justifica precios más altos (High-Ticket).
              </p>
            </div>
            <div style={{ margin: '1rem 0 0.2rem 0' }}>
              {couponApplied && <span style={{ textDecoration: 'line-through', color: '#7c7694', fontSize: '1rem', marginRight: '8px' }}>$100</span>}
              <span style={{ fontSize: '1.3rem', fontWeight: 900, color: '#2DD4BF' }}>Servicio - ${price1}</span>
            </div>
            <p style={{ color: '#2DD4BF', fontSize: '0.90rem', margin: '4px 0 0 0' }}>Incluye Diseño Web + Auditoría SEO gratuita</p>
            <div style={{ marginTop: '1.2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '0.90rem', color: '#A855F7', fontWeight: 'bold' }}>Contacta con nuestro agente →</span>
              <a
                href={`https://paypal.me/${PAYPAL_USER}/${price1}USD`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{ fontSize: '0.85rem', color: '#0070BA', fontWeight: 'bold', textDecoration: 'none', border: '1px solid #0070BA', borderRadius: '6px', padding: '4px 10px' }}
              >
                Pagar ahora
              </a>
            </div>
          </div>

          {/* Tarjeta 2: SEO Local */}
          <div className="service-card" onClick={() => openChatWithContext("¿Cómo funciona el SEO Local para salir en Google Maps?")}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#E9D5FF" strokeWidth="1.5" style={{ width: '24px', height: '24px', flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <h3 style={{ fontSize: '1.2rem', margin: 0, color: '#E9D5FF' }}>Dominio SEO Local</h3>
              </div>
              <p style={{ color: '#b0adc5', fontSize: '1.1rem', lineHeight: '1.5', margin: 0 }}>
                Interceptamos a los clientes que tienen emergencias. Posicionamos tu negocio en los primeros lugares de Google y Google Maps en tu ciudad para que el teléfono no deje de sonar.
              </p>
            </div>
            <div style={{ margin: '1rem 0 0.2rem 0' }}>
              {couponApplied && <span style={{ textDecoration: 'line-through', color: '#7c7694', fontSize: '1rem', marginRight: '8px' }}>$150</span>}
              <span style={{ fontSize: '1.3rem', fontWeight: 900, color: '#2DD4BF' }}>Auditoría - ${price2}</span>
            </div>
            <p style={{ color: '#2DD4BF', fontSize: '0.90rem', margin: '4px 0 0 0' }}>Incluye Auditoría SEO + AEO gratuito</p>
            <div style={{ marginTop: '1.2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '0.90rem', color: '#A855F7', fontWeight: 'bold' }}>Solicitar Auditoría →</span>
              <a
                href={`https://paypal.me/${PAYPAL_USER}/${price2}USD`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{ fontSize: '0.85rem', color: '#0070BA', fontWeight: 'bold', textDecoration: 'none', border: '1px solid #0070BA', borderRadius: '6px', padding: '4px 10px' }}
              >
                Pagar ahora
              </a>
            </div>
          </div>

          {/* Tarjeta 3: Posicionamiento AEO */}
          <div className="service-card" onClick={() => openChatWithContext("Quiero saber sobre el Posicionamiento en Inteligencia Artificial (AEO).")}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#E9D5FF" strokeWidth="1.5" style={{ width: '24px', height: '24px', flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                </svg>
                <h3 style={{ fontSize: '1.2rem', margin: 0, color: '#E9D5FF' }}>Ecosistema AEO</h3>
              </div>
              <p style={{ color: '#b0adc5', fontSize: '1.1rem', lineHeight: '1.5', margin: 0 }}>
                El futuro es hoy. Preparamos la estructura de tu negocio para que motores como ChatGPT y Gemini recomienden directamente tus servicios a los usuarios potenciales.
              </p>
            </div>
            <div style={{ margin: '1rem 0 0.2rem 0' }}>
              {couponApplied && <span style={{ textDecoration: 'line-through', color: '#7c7694', fontSize: '1rem', marginRight: '8px' }}>$200</span>}
              <span style={{ fontSize: '1.3rem', fontWeight: 900, color: '#2DD4BF' }}>Paquete Completo - ${price3}</span>
            </div>
            <p style={{ color: '#2DD4BF', fontSize: '0.90rem', margin: '4px 0 0 0' }}>Incluye Web + SEO + AEO + Atención personalizada</p>
            <div style={{ marginTop: '1.2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '0.90rem', color: '#A855F7', fontWeight: 'bold' }}>Posicionamiento AEO →</span>
              <a
                href={`https://paypal.me/${PAYPAL_USER}/${price3}USD`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{ fontSize: '0.85rem', color: '#0070BA', fontWeight: 'bold', textDecoration: 'none', border: '1px solid #0070BA', borderRadius: '6px', padding: '4px 10px' }}
              >
                Pagar ahora
              </a>
            </div>
          </div>

        </div>

        {/* CUPÓN DE DESCUENTO */}
        <div style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '12px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, color: '#E9D5FF' }}>Introducir Cupón de descuento</h3>
          <input
            type="text"
            value={couponCode}
            onChange={handleCouponChange}
            placeholder="Código"
            style={{ background: 'rgba(255,255,255,0.05)', border: couponApplied ? '1px solid #2DD4BF' : '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '0.5rem 1rem', color: '#F5F4EF', fontSize: '0.9rem', outline: 'none', width: '160px' }}
          />
          <span style={{ fontSize: '0.8rem', color: '#7c7694', fontStyle: 'italic' }}>Solo para usuarios VIP</span>
          {couponApplied && <span style={{ fontSize: '0.85rem', color: '#2DD4BF', fontWeight: 'bold' }}>✓ Cupón aplicado</span>}
        </div>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: '#7c7694' }}>
          Si necesita otro método de pago, contáctenos por{' '}
          <a href="https://wa.me/16055003653" target="_blank" rel="noopener noreferrer" style={{ color: '#2DD4BF', fontWeight: 'bold' }}>WhatsApp</a>.
        </p>
      </section>

      {/* FOOTER VIP */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '2rem', textAlign: 'center', color: '#7c7694', fontSize: '0.8rem' }}>
        <p>Esta es una propuesta privada. Por favor, no comparta este enlace.</p>
        <p>© 2026 DASTAN X-TECH</p>
      </footer>

      {/* Widget de Asistente IA Flotante */}
      <ChatWidget />
    </main>
  );
}