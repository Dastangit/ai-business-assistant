'use client'; // <-- ESTO ES VITAL
import ChatWidget from '../components/ChatWidget';

export default function Home() {
  // Función para abrir el chat desde las tarjetas
  const openChatWithContext = (mensaje) => {
    window.dispatchEvent(new CustomEvent('abrir-chat', { detail: mensaje }));
  };

  // Estilo de los botones de marketing
  const buttonStyle = {
    width: '100%',
    padding: '0.6rem',
    marginTop: '1rem',
    backgroundColor: '#1C2624',
    color: '#F5F4EF',
    border: '1px solid #2DD4BF',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };
  
  return (
    <>
      <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div className="glow-tl"></div>
      <div className="glow-br"></div>
      
      <nav className="nav">
        <div className="nav-logo">
          <span className="nav-logo-icon">X</span> TECH
        </div>
        <div className="nav-links">
          <span>Solutions</span>
          <span className="dot">·</span>
          <span>Contact</span>
        </div>
      </nav>

      <main className="hero">
        <div className="orb-container">
          <div className="orb-glow"></div>
          <div className="orb">
            <span className="orb-x">X</span>
          </div>
        </div>
        
        <h1>DASTAN-X-TECH</h1>
        <p className="sub">
          AI & Automation Services.
        </p>
        
        <div className="btns">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Book a Demo</button>
        </div>

        <div className="badges">
          <div className="badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            24/7 Automation
          </div>
          <div className="badge">
            {/* Ícono de Globo Terráqueo para Online Services */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Online Services
          </div>
          <div className="badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.956 11.956 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Secure & Private
          </div>
        </div>
      </main>
      </div>
      
      {/* SECCIÓN DE TARJETAS INFORMATIVAS E INTERACTIVAS */}
      <section id="services" style={{ padding: '3rem 1rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          
          {/* Tarjeta 1: Suscripciones */}
          <div 
            className="service-card" 
            onClick={() => openChatWithContext("Quiero información sobre las Suscripciones Premium.")}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem' }}>
                <span style={{ fontSize: '1.5rem' }}>⚡</span>
                <h3 style={{ fontSize: '1.2rem', margin: 0, color: '#E9D5FF' }}>Suscripciones Premium</h3>
              </div>
              <p style={{ color: '#b0adc5', fontSize: '0.85rem', lineHeight: '1.5', margin: '0 0 1rem 0' }}>
                Acceso seguro y de alto rendimiento a herramientas de IA como <strong>Google Gemini Pro</strong>, VPNs empresariales y cuentas de streaming. 
              </p>
              <ul style={{ color: '#9d98b8', fontSize: '0.8rem', paddingLeft: '1.2rem', margin: 0, lineHeight: '1.4' }}>
                <li>Activación rápida y automatizada.</li>
                <li>Soporte continuo e inmediato.</li>
                <li>Gestión exclusiva vía Telegram.</li>
              </ul>
            </div>
            <div style={{ marginTop: '1.2rem', fontSize: '0.8rem', color: '#2DD4BF', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
              Solicitar catalogo →
            </div>
          </div>

          {/* Tarjeta 2: Números Privados */}
          <div 
            className="service-card" 
            onClick={() => openChatWithContext("Quiero saber cómo funcionan los Números Privados.")}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🛡️</span>
                <h3 style={{ fontSize: '1.2rem', margin: 0, color: '#E9D5FF' }}>Números Privados</h3>
              </div>
              <p style={{ color: '#b0adc5', fontSize: '0.85rem', lineHeight: '1.5', margin: '0 0 1rem 0' }}>
                Líneas virtuales exclusivas diseñadas para proteger tu identidad y verificar cuentas en plataformas digitales con total anonimato.
              </p>
              <ul style={{ color: '#9d98b8', fontSize: '0.8rem', paddingLeft: '1.2rem', margin: 0, lineHeight: '1.4' }}>
                <li>Ideales para Apple ID, Telegram, WhatsApp e Instagram.</li>
                <li>Control total de privacidad.</li>
                <li>Proceso guiado por nuestro bot.</li>
              </ul>
            </div>
            <div style={{ marginTop: '1.2rem', fontSize: '0.8rem', color: '#2DD4BF', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
              Consultar con el agente de IA →
            </div>
          </div>

          {/* Tarjeta 3: Crecimiento Pymes */}
          <div 
            className="service-card" 
            onClick={() => openChatWithContext("Necesito detalles sobre el servicio de Crecimiento para Pymes.")}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🚀</span>
                <h3 style={{ fontSize: '1.2rem', margin: 0, color: '#E9D5FF' }}>Crecimiento de Negocios y Pymes</h3>
              </div>
              <p style={{ color: '#b0adc5', fontSize: '0.85rem', lineHeight: '1.5', margin: '0 0 1rem 0' }}>
                Soluciones corporativas avanzadas para escalar ingresos, optimizar la presencia digital y automatizar la captación de clientes.
              </p>
              <ul style={{ color: '#9d98b8', fontSize: '0.8rem', paddingLeft: '1.2rem', margin: 0, lineHeight: '1.4' }}>
                <li>Auditorías SEO y arquitectura web.</li>
                <li>Desarrollo de Apps y sistemas a medida.</li>
                <li>Atención personalizada.</li>
              </ul>
            </div>
            <div style={{ marginTop: '1.2rem', fontSize: '0.8rem', color: '#2DD4BF', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
              Obtener contacto directo →
            </div>
          </div>

        </div>
      </section>
      <ChatWidget />
    </>
  );
}