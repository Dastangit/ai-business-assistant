'instances'
import React from 'react';
import ChatWidget from '@/components/ChatWidget'; // Asegúrate de ajustar la ruta si tu widget está en otra carpeta

export default function Home() {
  return (
    <main style={{ backgroundColor: '#07050A', color: '#F5F4EF', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', overflowX: 'hidden' }}>
      
      {/* 1. SECCIÓN HERO (PRINCIPAL) */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '90vh', textAlign: 'center', padding: '2rem 1rem' }}>
        <div style={{ width: '90px', height: '90px', borderRadius: '24px', background: 'linear-gradient(135deg, #A855F7, #2DD4BF)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)' }}>
          <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#07050A' }}>X</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '1rem' }}>
          DASTAN <span style={{ color: '#A855F7' }}>X-TECH</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#b0adc5', maxWidth: '600px', marginBottom: '2.5rem' }}>
          Soluciones avanzadas de automatización, inteligencia artificial y servicios digitales de alto rendimiento para impulsar tu negocio al siguiente nivel.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'center', justifyContent: 'center' }}>
          <a href="#services" style={{ background: '#F5F4EF', color: '#07050A', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', textDecoration: 'none', transition: 'transform 0.2s' }}>
            Explorar Servicios
          </a>
          <a href="https://t.me/Datspro" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', border: '2px solid #A855F7', color: '#F5F4EF', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', textDecoration: 'none' }}>
            Contacto Directo
          </a>
        </div>
      </section>

      {/* 2. SECCIÓN DE TARJETAS DE MARKETING (SERVICIOS) */}
      <section id="services" style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>Nuestros Pilares Tecnológicos</h2>
          <p style={{ color: '#b0adc5', fontSize: '1.1rem' }}>Diseñados para garantizar seguridad, velocidad y escalabilidad total.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* Tarjeta 1 */}
          <div style={{ background: '#120D1C', border: '1px solid #231B35', borderRadius: '20px', padding: '2.5rem', transition: 'transform 0.3s ease, border-color 0.3s ease' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#E9D5FF' }}>Suscripciones Premium</h3>
            <p style={{ color: '#b0adc5', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Acceso inmediato y seguro a plataformas de alta gama y herramientas de inteligencia artificial como Google Gemini Pro, VPNs empresariales y streaming sin interrupciones.
            </p>
            <span style={{ color: '#2DD4BF', fontWeight: '600', fontSize: '0.9rem' }}>Soporte vía Telegram / WhatsApp</span>
          </div>

          {/* Tarjeta 2 */}
          <div style={{ background: '#120D1C', border: '1px solid #231B35', borderRadius: '20px', padding: '2.5rem', transition: 'transform 0.3s ease, border-color 0.3s ease' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛡️</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#E9D5FF' }}>Números Privados</h3>
            <p style={{ color: '#b0adc5', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Líneas exclusivas y verificadas ideales para validar cuentas de Apple ID, Telegram, Instagram, WhatsApp y redes corporativas con total privacidad y control.
            </p>
            <span style={{ color: '#2DD4BF', fontWeight: '600', fontSize: '0.9rem' }}>Activación inmediata</span>
          </div>

          {/* Tarjeta 3 */}
          <div style={{ background: '#120D1C', border: '1px solid #231B35', borderRadius: '20px', padding: '2.5rem', transition: 'transform 0.3s ease, border-color 0.3s ease' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚀</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#E9D5FF' }}>Crecimiento de Pymes</h3>
            <p style={{ color: '#b0adc5', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Auditorías SEO exhaustivas, arquitectura web moderna optimizada para conversión y desarrollo de aplicaciones a medida para escalar tus ingresos.
            </p>
            <span style={{ color: '#2DD4BF', fontWeight: '600', fontSize: '0.9rem' }}>Consultoría personalizada</span>
          </div>

        </div>
      </section>

      {/* 3. FOOTER */}
      <footer style={{ borderTop: '1px solid #1c152a', padding: '3rem 2rem', textAlign: 'center', color: '#7c7694' }}>
        <p>© 2026 DASTAN X-TECH. Online Services Platform</p>
      </footer>

      {/* Widget de Asistente IA Flotante */}
      <ChatWidget />

    </main>
  );
}