'use client';
import React, { useState, useEffect } from 'react';
import ChatWidget from '../components/ChatWidget';
import { createClient } from '@supabase/supabase-js';

// Configuración de Supabase para el panel de Admin
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Home() {
  // ==========================================
  // 1. ESTADOS DEL PANEL SECRETO
  // ==========================================
  const [clickCount, setClickCount] = useState(0);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // ==========================================
  // 2. ESTADOS DE LA BASE DE DATOS (Leads)
  // ==========================================
  const [prospectos, setProspectos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // ==========================================
  // 3. LÓGICA DEL CANDADO Y LOS 5 CLICS
  // ==========================================
  const handleSecretClick = () => {
    setClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 5) {
        setShowAdminLogin(true);
        return 0; // Reinicia el contador
      }
      return newCount;
    });
    // Si deja de hacer clic, se reinicia en 1 segundo
    setTimeout(() => setClickCount(0), 1000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (adminPassword === 'dastan2026') {
      setIsAuthenticated(true);
      setShowAdminLogin(false);
      fetchProspectos(); // Carga la bóveda al ingresar
    } else {
      alert('Acceso denegado');
      setAdminPassword('');
    }
  };

  // ==========================================
  // 4. LÓGICA DE SUPABASE 
  // ==========================================
  const fetchProspectos = async () => {
    setCargando(true);
    try {
      const { data, error } = await supabase
        .from('agencias_prospectos')
        .select('*')
        .order('fecha', { ascending: false });
      if (error) throw error;
      setProspectos(data || []);
    } catch (error) {
      console.error('Error al cargar prospectos:', error);
    } finally {
      setCargando(false);
    }
  };

  const actualizarEstado = async (id, estadoActual) => {
    const nuevoEstado = estadoActual === 'sin_auditar' ? 'contactado' : 'sin_auditar';
    try {
      const { error } = await supabase
        .from('agencias_prospectos')
        .update({ estado_calificacion: nuevoEstado })
        .eq('id', id);
      if (error) throw error;
      fetchProspectos();
    } catch (error) {
      console.error('Error al actualizar:', error);
    }
  };

  // ==========================================
  // 5. LÓGICA DE TARJETAS PÚBLICAS
  // ==========================================
  const openChatWithContext = (mensaje) => {
    window.dispatchEvent(new CustomEvent('abrir-chat', { detail: mensaje }));
  };

  return (
    <>
      <div className="glow-tl"></div>
      <div className="glow-br"></div>
      
      <nav className="nav">
        <div className="nav-logo">
          <span className="nav-logo-icon">X</span> TECH
        </div>
        <div className="nav-links">
          <span>Product</span><span className="dot">·</span>
          <span>Solutions</span><span className="dot">·</span>
          <span>Pricing</span><span className="dot">·</span>
          <span>Contact</span>
        </div>
      </nav>

      <main className="hero">
        {/* AQUÍ ESTÁ EL DISPARADOR DEL PANEL SECRETO */}
        <div className="orb-container" onClick={handleSecretClick} style={{ cursor: 'pointer' }}>
          <div className="orb-glow"></div>
          <div className="orb">
            <span className="orb-x">X</span>
          </div>
        </div>
        
        <h1>DASTAN-X-TECH</h1>
        <p className="sub">AI & Automation Services.</p>
        
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

      <section id="services" style={{ padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          
          <div className="service-card" onClick={() => openChatWithContext("¡Hola! Me gustaría recibir información sobre las Suscripciones Premium.")} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem' }}>
              <span style={{ fontSize: '1.5rem' }}>⚡</span>
              <h3 style={{ fontSize: '1.2rem', margin: 0, color: '#E9D5FF' }}>Suscripciones</h3>
            </div>
            <p style={{ color: '#b0adc5', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Acceso a Gemini Pro, VPNs empresariales y streaming sin interrupciones.</p>
          </div>

          <div className="service-card" onClick={() => openChatWithContext("¡Hola! Quiero saber cómo funcionan los Números Privados.")} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🛡️</span>
              <h3 style={{ fontSize: '1.2rem', margin: 0, color: '#E9D5FF' }}>Números Privados</h3>
            </div>
            <p style={{ color: '#b0adc5', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Líneas exclusivas para verificar Telegram, WhatsApp y Apple ID con privacidad.</p>
          </div>

        </div>
      </section>

      <ChatWidget />

      {/* ========================================= */}
      {/* CAPA 1: MODAL DE CONTRASEÑA */}
      {/* ========================================= */}
      {showAdminLogin && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(7, 5, 10, 0.9)', backdropFilter: 'blur(8px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <form onSubmit={handleLogin} style={{ background: '#1C2624', padding: '2rem', borderRadius: '16px', border: '1px solid #2DD4BF', textAlign: 'center' }}>
            <h3 style={{ color: '#F5F4EF', marginBottom: '1rem' }}>Acceso Restringido</h3>
            <input 
              type="password" 
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              placeholder="Firma de autorización"
              style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', background: '#07050A', border: '1px solid #231B35', color: '#F5F4EF', borderRadius: '8px' }}
              autoFocus
            />
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button type="button" onClick={() => setShowAdminLogin(false)} style={{ flex: 1, padding: '0.8rem', background: 'transparent', color: '#b0adc5', border: 'none', cursor: 'pointer' }}>Cancelar</button>
              <button type="submit" style={{ flex: 1, padding: '0.8rem', background: '#2DD4BF', color: '#07050A', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Ingresar</button>
            </div>
          </form>
        </div>
      )}

      {/* ========================================= */}
      {/* CAPA 2: DASHBOARD DE PROSPECTOS B2B */}
      {/* ========================================= */}
      {isAuthenticated && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: '#07050A', zIndex: 10000, overflowY: 'auto', fontFamily: 'system-ui, sans-serif' }}>
          <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            
            <button onClick={() => setIsAuthenticated(false)} style={{ background: 'transparent', color: '#A855F7', border: '1px solid #A855F7', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', marginBottom: '2rem' }}>
              ← Cerrar Panel
            </button>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
              <div>
                <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 0.5rem 0', color: '#F5F4EF' }}>
                  Leads <span style={{ color: '#2DD4BF' }}>B2B</span>
                </h1>
                <p style={{ color: '#b0adc5', margin: 0 }}>Gestión de prospectos extraídos por Apify.</p>
              </div>
              <div style={{ background: '#120D1C', border: '1px solid #231B35', padding: '0.8rem 1.5rem', borderRadius: '12px', color: '#E9D5FF' }}>
                <strong>Total:</strong> {prospectos.length} agencias
              </div>
            </div>

            <div style={{ background: '#120D1C', border: '1px solid #231B35', borderRadius: '16px', overflow: 'hidden' }}>
              {cargando ? (
                <div style={{ padding: '3rem', textAlign: 'center', color: '#b0adc5' }}>Cargando bóveda de datos...</div>
              ) : (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead style={{ background: 'rgba(255, 255, 255, 0.03)', borderBottom: '1px solid #231B35' }}>
                      <tr>
                        <th style={{ padding: '1.2rem', color: '#9d98b8', fontWeight: '600' }}>Agencia / Negocio</th>
                        <th style={{ padding: '1.2rem', color: '#9d98b8', fontWeight: '600' }}>Sitio Web</th>
                        <th style={{ padding: '1.2rem', color: '#9d98b8', fontWeight: '600' }}>Teléfono</th>
                        <th style={{ padding: '1.2rem', color: '#9d98b8', fontWeight: '600' }}>Estado</th>
                        <th style={{ padding: '1.2rem', color: '#9d98b8', fontWeight: '600' }}>Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {prospectos.map((lead) => (
                        <tr key={lead.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: '#F5F4EF' }}>
                          <td style={{ padding: '1.2rem', fontWeight: '500' }}>{lead.nombre_agencia}</td>
                          <td style={{ padding: '1.2rem' }}>
                            {lead.sitio_web ? (
                              <a href={lead.sitio_web} target="_blank" rel="noopener noreferrer" style={{ color: '#2DD4BF', textDecoration: 'none' }}>Visitar Web ↗</a>
                            ) : (
                              <span style={{ color: '#7c7694' }}>Sin web</span>
                            )}
                          </td>
                          <td style={{ padding: '1.2rem', color: '#e6edf3' }}>{lead.telefono || '-'}</td>
                          <td style={{ padding: '1.2rem' }}>
                            <span style={{ 
                              background: lead.estado_calificacion === 'contactado' ? 'rgba(45, 212, 191, 0.1)' : 'rgba(255, 255, 255, 0.05)', 
                              color: lead.estado_calificacion === 'contactado' ? '#2DD4BF' : '#b0adc5',
                              padding: '0.4rem 0.8rem', 
                              borderRadius: '99px', 
                              fontSize: '0.8rem', 
                              fontWeight: 'bold'
                            }}>
                              {lead.estado_calificacion.replace('_', ' ')}
                            </span>
                          </td>
                          <td style={{ padding: '1.2rem' }}>
                            <button 
                              onClick={() => actualizarEstado(lead.id, lead.estado_calificacion)}
                              style={{ 
                                background: 'transparent', 
                                border: '1px solid #A855F7', 
                                color: '#E9D5FF', 
                                padding: '0.5rem 1rem', 
                                borderRadius: '8px',
                                cursor: 'pointer'
                              }}
                            >
                              Cambiar Estado
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}