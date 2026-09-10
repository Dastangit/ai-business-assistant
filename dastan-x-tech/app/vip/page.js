'use client';
import React from 'react';
import ChatWidget from '@/components/ChatWidget'; // Tu asistente de IA

export default function VIPPage() {
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

        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', letterSpacing: '-1px', marginBottom: '1rem', lineHeight: '1.1' }}>
          Dominando el Mercado <br/> <span style={{ color: '#A855F7' }}>En tu área local</span>
        </h1>
        
        <p style={{ fontSize: '1.4rem', color: '#b0adc5', maxWidth: '650px', marginBottom: '2rem', lineHeight: '1.6' }}>
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
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🖥️</span>
                <h3 style={{ fontSize: '1.2rem', margin: 0, color: '#E9D5FF' }}>Diseño Web Premium</h3>
              </div>
              <p style={{ color: '#b0adc5', fontSize: '1rem', lineHeight: '1.5', margin: '0 0 1rem 0' }}>
                Tu negocio necesita dejar de ser invisible. Creamos una plataforma corporativa que proyecta confianza, muestra tus trabajos y justifica precios más altos (High-Ticket).
              </p>
            </div>
            <div style={{ marginTop: '1.2rem', fontSize: '0.85rem', color: '#2DD4BF', fontWeight: 'bold' }}>
              Contacta con nuestro agente →
            </div>
          </div>

          {/* Tarjeta 2: SEO Local */}
          <div className="service-card" onClick={() => openChatWithContext("¿Cómo funciona el SEO Local para salir en Google Maps?")}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem' }}>
                <span style={{ fontSize: '1.5rem' }}>📍</span>
                <h3 style={{ fontSize: '1.2rem', margin: 0, color: '#E9D5FF' }}>Dominio SEO Local</h3>
              </div>
              <p style={{ color: '#b0adc5', fontSize: '1rem', lineHeight: '1.5', margin: '0 0 1rem 0' }}>
                Interceptamos a los clientes que tienen emergencias. Posicionamos tu negocio en los primeros lugares de Google y Google Maps en tu ciudad para que el teléfono no deje de sonar.
              </p>
            </div>
            <div style={{ marginTop: '1.2rem', fontSize: '0.85rem', color: '#2DD4BF', fontWeight: 'bold' }}>
              Solicitar Auditoría →
            </div>
          </div>

          {/* Tarjeta 3: Posicionamiento AEO */}
          <div className="service-card" onClick={() => openChatWithContext("Quiero saber sobre el Posicionamiento en Inteligencia Artificial (AEO).")}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🤖</span>
                <h3 style={{ fontSize: '1.2rem', margin: 0, color: '#E9D5FF' }}>Ecosistema AEO</h3>
              </div>
              <p style={{ color: '#b0adc5', fontSize: '1rem', lineHeight: '1.5', margin: '0 0 1rem 0' }}>
                El futuro es hoy. Preparamos la estructura de tu negocio para que motores como ChatGPT y Gemini recomienden directamente tus servicios a los usuarios potenciales.
              </p>
            </div>
            <div style={{ marginTop: '1.2rem', fontSize: '0.85rem', color: '#2DD4BF', fontWeight: 'bold' }}>
              Posicionamiento AEO →
            </div>
          </div>

        </div>
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