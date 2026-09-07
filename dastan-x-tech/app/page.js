'use client';
import React from 'react';
import ChatWidget from '@/components/ChatWidget'; // Verifica que esta ruta coincida con la ubicación de tu componente

export default function Home() {
  // Función que dispara el evento para que el widget escuche y se abra
  const openChatWithContext = (mensaje) => {
    window.dispatchEvent(new CustomEvent('abrir-chat', { detail: mensaje }));
  };

  // Estilo reutilizable para los botones de las tarjetas
  const buttonStyle = {
    width: '100%',
    padding: '0.9rem',
    marginTop: '1.5rem',
    backgroundColor: '#1C2624',
    color: '#F5F4EF',
    border: '1px solid #2DD4BF',
    borderRadius: '10px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  return (
    <main style={{ backgroundColor: '#07050A', color: '#F5F4EF', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', overflowX: 'hidden' }}>
      
      {/* SECCIÓN HERO (ENCABEZADO PRINCIPAL) */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '90vh', textAlign: 'center', padding: '2rem 1rem' }}>
        <div style={{ width: '90px', height: '90px', borderRadius: '24px', background: 'linear-gradient(135deg, #A855F7, #2DD4BF)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)' }}>
          <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#07050A' }}>X</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '1rem' }}>
          DASTAN <span style={{ color: '#A855F7' }}>X-TECH</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#b0adc5', maxWidth: '600px', marginBottom: '2.5rem' }}>
          Soluciones avanzadas de automatización, inteligencia artificial y servicios digitales de alto rendimiento.
        </p>
      </section>

      {/* SECCIÓN DE TARJETAS DE MARKETING */}
      <section id="services" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* Tarjeta 1: Suscripciones */}
          <div style={{ background: '#120D1C', border: '1px solid #231B35', borderRadius: '20px', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#E9D5FF' }}>Suscripciones Premium</h3>
              <p style={{ color: '#b0adc5', lineHeight: '1.6', marginBottom: '1.5rem' }}>Acceso seguro a Google Gemini Pro, VPNs empresariales y streaming sin interrupciones.</p>
            </div>
            {/* Botón que abre el chat */}
            <button onClick={() => openChatWithContext("¡Hola! Me gustaría recibir información sobre las Suscripciones Premium.")} style={buttonStyle}>
              Consultar IA
            </button>
          </div>

          {/* Tarjeta 2: Números Privados */}
          <div style={{ background: '#120D1C', border: '1px solid #231B35', borderRadius: '20px', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛡️</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#E9D5FF' }}>Números Privados</h3>
              <p style={{ color: '#b0adc5', lineHeight: '1.6', marginBottom: '1.5rem' }}>Líneas exclusivas para verificar Telegram, WhatsApp y Apple ID con total privacidad.</p>
            </div>
            {/* Botón que abre el chat */}
            <button onClick={() => openChatWithContext("¡Hola! Quiero saber cómo funcionan los Números Privados.")} style={buttonStyle}>
              Consultar IA
            </button>
          </div>

          {/* Tarjeta 3: Crecimiento Pymes */}
          <div style={{ background: '#120D1C', border: '1px solid #231B35', borderRadius: '20px', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚀</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#E9D5FF' }}>Crecimiento Pymes</h3>
              <p style={{ color: '#b0adc5', lineHeight: '1.6', marginBottom: '1.5rem' }}>Auditorías SEO exhaustivas, diseño web y desarrollo de aplicaciones a medida.</p>
            </div>
            {/* Botón que abre el chat */}
            <button onClick={() => openChatWithContext("¡Hola! Necesito detalles sobre el servicio de Crecimiento para Pymes.")} style={buttonStyle}>
              Consultar IA
            </button>
          </div>

        </div>
      </section>

      {/* Renderizado del Widget de IA en la pantalla */}
      <ChatWidget />
    </main>
  );
}