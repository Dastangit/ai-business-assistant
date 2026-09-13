'use client';
import React from 'react';

export default function DisenoWebPage() {
  return (
    <div style={{ backgroundColor: '#F5F4EF', color: '#07050A', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* NAVEGACIÓN MINIMALISTA */}
      <nav style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(28, 38, 36, 0.1)' }}>
        <div style={{ fontWeight: '900', fontSize: '1.2rem', color: '#1C2624' }}>
          <span style={{ color: '#A855F7' }}>X</span> TECH
        </div>
        <a href="/" style={{ color: '#1C2624', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>
          ← Volver al inicio
        </a>
      </nav>

      {/* HERO ASIMÉTRICO */}
      <header style={{ 
        display: 'grid', 
        gridTemplateColumns: '1.2fr 0.8fr', 
        gap: '4rem', 
        padding: '6rem 5%',
        alignItems: 'center'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
            <span style={{ background: '#2DD4BF', width: '40px', height: '4px', display: 'block' }}></span>
            <span style={{ fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.85rem', color: '#1C2624', textTransform: 'uppercase' }}>
              Servicio Especializado
            </span>
          </div>
          <h1 style={{ fontSize: '4.5rem', fontWeight: '900', lineHeight: '1.1', color: '#1C2624', marginBottom: '2rem', letterSpacing: '-1px' }}>
            Diseño Web que <span style={{ color: '#A855F7' }}>Domina</span> Google.
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#333', maxWidth: '600px', marginBottom: '3rem' }}>
            No construimos simples folletos digitales. Desarrollamos plataformas corporativas con arquitectura SEO integrada, diseñadas para liderar las búsquedas B2B y posicionar tu marca en la era del AEO.
          </p>
          <button onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: 'Quiero información sobre Desarrollo Web B2B' }))} 
            style={{ 
              background: '#1C2624', color: '#F5F4EF', padding: '1rem 2.5rem', borderRadius: '4px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', border: 'none', transition: 'all 0.3s ease' 
            }}>
            Consultar Proyecto
          </button>
        </div>

        {/* ELEMENTO VISUAL ABSTRACTO */}
        <div style={{ position: 'relative', height: '100%', minHeight: '400px' }}>
          <div style={{ position: 'absolute', top: '10%', right: '10%', width: '100%', height: '100%', background: '#2DD4BF', borderRadius: '2px', zIndex: 1 }}></div>
          <div style={{ position: 'absolute', top: '0', right: '0', width: '100%', height: '100%', background: '#1C2624', borderRadius: '2px', zIndex: 2, padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ color: '#F5F4EF', fontSize: '2rem', margin: '0 0 1rem 0' }}>El Estándar Actual</h3>
            <ul style={{ color: '#b0adc5', listStyle: 'none', padding: 0, margin: 0, lineHeight: '2' }}>
              <li>✓ Arquitectura de Alta Velocidad</li>
              <li>✓ Indexación SEO Local</li>
              <li>✓ Preparado para IA (AEO)</li>
            </ul>
          </div>
        </div>
      </header>

      {/* SECCIÓN DE CARACTERÍSTICAS */}
      <section style={{ padding: '6rem 5%', background: '#07050A', color: '#F5F4EF' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '5rem', color: '#F5F4EF' }}>
          Más que diseño, es <span style={{ color: '#2DD4BF' }}>infraestructura corporativa</span>
        </h2>

        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', borderTop: '1px solid #1C2624', paddingTop: '3rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: '900', color: '#2DD4BF', minWidth: '80px' }}>01</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Arquitectura SEO y AEO</h3>
              <p style={{ color: '#b0adc5', lineHeight: '1.6' }}>Estructuramos el código y el contenido desde cero para garantizar la invisibilidad nula. Aseguramos tu posicionamiento en Google y en los nuevos motores de respuesta por Inteligencia Artificial.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', borderTop: '1px solid #1C2624', paddingTop: '3rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: '900', color: '#A855F7', minWidth: '80px' }}>02</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Chat de IA Integrado</h3>
              <p style={{ color: '#b0adc5', lineHeight: '1.6' }}>Tu plataforma no descansa. Implementamos un agente de IA conversacional para capturar, perfilar y retener a los prospectos que visitan tu web las 24 horas del día, los 7 días de la semana.</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}