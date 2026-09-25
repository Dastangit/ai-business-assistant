'use client'; // <-- ESTO ES VITAL

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { BrandMark } from '@/components/Brand';
import SiteFooter from '@/components/SiteFooter';

// Conexión a la base de datos para el panel de Admin
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

// Tarjetas de servicio del home (texto y enlaces de siempre, sin emojis)
const servicios = [
  {
    href: '/servicios/diseno-web',
    label: '01 · Diseño web',
    title: 'Cazador de Webs',
    text: 'Renovamos tu web actual con tu marca real, en tiempo récord.',
    items: ['Diagnóstico honesto de tu web actual.', 'Web nueva, responsive, lista para publicar.', 'WhatsApp y teléfono siempre visibles.'],
    link: 'Saber más sobre Cazador de Webs →',
  },
  {
    href: '/servicios/auditoria-360',
    label: '02 · Auditoría',
    title: 'Auditoría de Negocio 360°',
    text: 'Sabemos exactamente dónde tu negocio pierde tiempo y dinero, con evidencia, no suposiciones.',
    items: ['Presencia digital sobre 100.', 'Madurez tecnológica sobre 5.', 'Plan de acción por fases.'],
    link: 'Descubre la Auditoría de Negocio →',
  },
  {
    href: '/servicios/posicionamiento-aeo',
    label: '03 · IA y AEO',
    title: 'Posicionamiento AEO',
    text: 'Que la Inteligencia Artificial recomiende tu negocio, no solo las búsquedas en Google.',
    items: ['Ficha de Google y redes ordenadas.', 'Contenido citable por IA.', 'Reseñas y señales de confianza.'],
    link: 'Conoce el Posicionamiento AEO →',
  },
];

export default function Home() {
  // --- ESTADOS DEL PANEL SECRETO ---
  const [clickCount, setClickCount] = useState(0);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // --- ESTADOS DE LA BASE DE DATOS ---
  const [prospectos, setProspectos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // --- ESTADO PARA LEER LA IA ---
  const [auditoriaActiva, setAuditoriaActiva] = useState(null);
  const [copiado, setCopiado] = useState(false);

  // Reinicia el feedback "Copiado ✓" cada vez que se abre/cierra una auditoría distinta
  useEffect(() => {
    setCopiado(false);
  }, [auditoriaActiva]);

  // --- COPIA EL TEXTO COMPLETO DE LA AUDITORÍA CON UN SOLO CLIC ---
  const copiarAuditoria = async () => {
    const texto = auditoriaActiva?.auditoria_ai || '';
    if (!texto) return;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(texto);
      } else {
        // Fallback para navegadores viejos o contextos no seguros (http)
        const textarea = document.createElement('textarea');
        textarea.value = texto;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (error) {
      console.error('Error al copiar la auditoría:', error);
      alert('No se pudo copiar automáticamente. Selecciona el texto manualmente.');
    }
  };
 
  // --- BLOQUEA EL SCROLL DEL FONDO MIENTRAS EL PANEL/MODAL ESTÁ ABIERTO ---
  // (Evita que la página de atrás capture el scroll en vez del panel fijo)
  useEffect(() => {
    if (isAuthenticated || showAdminLogin) {
      const previousBodyOverflow = document.body.style.overflow;
      const previousHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previousBodyOverflow;
        document.documentElement.style.overflow = previousHtmlOverflow;
      };
    }
  }, [isAuthenticated, showAdminLogin]);

  // --- LÓGICA DE LOS 5 CLICS (TOTALMENTE CORREGIDA) ---
  useEffect(() => {
    // Si llegas a 5 clics, abre el candado y vuelve el contador a 0
    if (clickCount >= 5) {
      setShowAdminLogin(true);
      setClickCount(0); 
    } else if (clickCount > 0) {
      // Te da 2 segundos exactos de margen *entre cada clic* para seguir sumando.
      // Si te detienes, limpia la memoria y vuelve a 0 de forma segura.
      const timer = setTimeout(() => setClickCount(0), 2000);
      return () => clearTimeout(timer); 
    }
  }, [clickCount]);

  // Cada vez que tocas la X, solo suma 1. Nada más.
  const handleSecretClick = () => {
    setClickCount((prev) => prev + 1);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: adminPassword }),
      });
      if (!res.ok) {
        alert('Acceso denegado');
        setAdminPassword('');
        return;
      }
      setIsAuthenticated(true);
      setShowAdminLogin(false);
      setAdminPassword('');
      fetchProspectos(); // Carga los leads al entrar
    } catch (error) {
      console.error('Error al validar acceso:', error);
      alert('No se pudo validar el acceso. Intenta de nuevo.');
    }
  };

  // --- LÓGICA DE SUPABASE ---
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
      alert('No se pudo actualizar el estado. Revisa la consola para más detalles.');
    }
  };

  const eliminarLead = async (id, nombreAgencia) => {
    const confirmado = window.confirm(`¿Seguro que quieres eliminar "${nombreAgencia}"? Esta acción no se puede deshacer.`);
    if (!confirmado) return;
    try {
      const { error } = await supabase
        .from('agencias_prospectos')
        .delete()
        .eq('id', id);
      if (error) throw error;
      fetchProspectos();
    } catch (error) {
      console.error('Error al eliminar:', error);
      alert('No se pudo eliminar el lead. Revisa la consola para más detalles.');
    }
  };

  // Aquí termina tu función anterior de eliminarLead...

  const limpiarLeads = async () => {
    const confirmado = window.confirm("⚠️ ADVERTENCIA: ¿Estás seguro de que quieres ELIMINAR TODOS los prospectos? Esta acción vaciará toda tu base de datos y no se puede deshacer.");
    if (!confirmado) return;
    try {
      // Elimina todos los registros donde el ID no sea 0 (es decir, todos)
      const { error } = await supabase
        .from('agencias_prospectos')
        .delete()
        .neq('id', 0); 
      if (error) throw error;
      fetchProspectos();
    } catch (error) {
      console.error('Error al limpiar:', error);
      alert('No se pudo limpiar la base de datos. Revisa la consola.');
    }
  };

  // Abre el asistente de chat (mismo evento que ya escucha ChatWidget)
  const abrirChat = (mensaje) => {
    window.dispatchEvent(new CustomEvent('abrir-chat', mensaje ? { detail: mensaje } : undefined));
  };

  return (
    <>
      <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div className="glow-tl"></div>
      <div className="glow-br"></div>

      <nav className="nav" aria-label="Principal">
        {/* El acceso secreto al panel (5 toques seguidos) vive ahora en el logo */}
        <div className="brand nav-brand" onClick={handleSecretClick}>
          <BrandMark />
          <span>DASTAN X-TECH</span>
        </div>
        <div className="nav-links">
          <a href="#services">Servicios</a>
          <a href="/blog">Blog</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      {/* HERO: la propuesta de valor en la primera pantalla */}
      <main className="hero">
        <span className="label-mono">Consultoría de IA y automatización para pymes</span>
        <h1 className="hero-title">
          Deja de perder clientes si tu negocio no está a la altura.
          <span className="sr-only"> DASTAN X-TECH, consultores de IA para negocios y pymes en Colombia, México y el resto del mundo.</span>
        </h1>
        <p className="hero-sub">
          Web renovada, auditoría con datos reales y posicionamiento para que la IA también te recomiende.
        </p>

        <div className="hero-actions">
          <button type="button" className="btn btn-primary" onClick={() => abrirChat()}>
            Diagnóstico gratis
          </button>
          <a href="#services" className="btn btn-secondary">
            Ver servicios
          </a>
        </div>

        <ul className="hero-points">
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Automatización 24/7
          </li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Servicios en línea
          </li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.956 11.956 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Seguro y privado
          </li>
        </ul>
      </main>
      </div>

      {/* SECCIÓN QUIÉNES SOMOS */}
      <section id="about" className="section" style={{ maxWidth: '760px' }}>
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>
          Quiénes somos
        </h2>
        <p className="section-text">
          Soy <strong>Dastan Tamayo</strong>, fundador de DASTAN X-TECH. Al lado de <strong>Isdiel Martínez</strong>, consultor de IA y estratega digital. Ayudamos a los negocios privados y Pymes a dejar de perder clientes por una presencia digital que no está a la altura de lo que ofrecen: <strong>Web</strong> renovada, auditoría con datos reales <strong>SEO</strong>, y posicionamiento <strong>AEO</strong> para ser recomendados por la Inteligencia Artificial, no solo por Google. Todo esto con un enfoque en la automatización de procesos y la eficiencia operativa. Trabajamos con evidencia, no con suposiciones: cada proyecto arranca con un diagnóstico real de dónde se está perdiendo tiempo y dinero, y termina con acciones concretas, medibles y priorizadas por impacto.
          Hemos creado excelentes ofertas y servicios pensando siempre en los negocios más pequeños, para que compitan con las herramientas que antes solo tenían las grandes empresas.
        </p>
      </section>

      {/* SERVICIOS: cada tarjeta hace una sola cosa, llevar a su página */}
      <section id="services" className="section">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
          <span className="label-mono" style={{ color: 'var(--action)' }}>Servicios</span>
          <h2 className="section-title">Tres servicios para que tu negocio no pierda ni un cliente</h2>
        </div>

        <div className="card-grid">
          {servicios.map((s) => (
            <a key={s.href} href={s.href} className="service-card">
              <span className="label-mono">{s.label}</span>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-text">{s.text}</p>
              <ul className="dot-list card-list">
                {s.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <span className="card-link">{s.link}</span>
            </a>
          ))}
        </div>

        <p className="section-text" style={{ textAlign: 'center', fontSize: '15px', marginTop: '2rem', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.9' }}>
          También ofrecemos: Análisis de YouTube · Edición de Video · Marca Personal · Análisis de Ecommerce · Kits de IA a Medida · Instagram a Web · Web de Scroll · Auditoría de Meta Ads · Dashboard de Facturas · Extensiones de Chrome · Prospección de Clientes
        </p>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="section">
        <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>
          Un mismo objetivo: que ganes más y pierdas menos
        </h2>
        <div className="steps">
          <div>
            <div className="step-number">01</div>
            <p className="section-text" style={{ fontSize: '16px' }}>Auditamos tu negocio y encontramos dónde pierdes tiempo y clientes.</p>
          </div>
          <div>
            <div className="step-number">02</div>
            <p className="section-text" style={{ fontSize: '16px' }}>Renovamos tu web con tu marca real, lista para generar confianza.</p>
          </div>
          <div>
            <div className="step-number">03</div>
            <p className="section-text" style={{ fontSize: '16px' }}>Te posicionamos para que también te recomiende la IA, más allá de Google.</p>
          </div>
        </div>
      </section>

      {/* CIERRE / CTA FINAL */}
      <section className="section" style={{ paddingBottom: '5rem' }}>
        <div className="service-card" style={{ alignItems: 'flex-start', padding: '2.5rem' }}>
          <h2 className="section-title">
            Hablemos de tu negocio
          </h2>
          <p className="card-text" style={{ maxWidth: '520px' }}>
            Cuéntanos qué vendes y dónde — te decimos, sin costo, en qué estás perdiendo clientes.
          </p>
          <button type="button" className="btn btn-primary" onClick={() => abrirChat()}>
            Diagnóstico gratis
          </button>
        </div>
      </section>

      {/* FOOTER - MEDIOS DE CONTACTO */}
      <SiteFooter tone="dark" />

      {/* ================= MODAL DE CONTRASEÑA ================= */}
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

      {/* ================= DASHBOARD DE PROSPECTOS B2B ================= */}
      {isAuthenticated && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: '#07050A', zIndex: 10000, overflowY: 'auto', fontFamily: 'system-ui, sans-serif' }}>
          <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <button onClick={() => setIsAuthenticated(false)} style={{ background: 'transparent', color: '#A855F7', border: '1px solid #A855F7', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', marginBottom: '2rem' }}>← Cerrar Panel</button>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
              <div>
                <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 0.5rem 0', color: '#F5F4EF' }}>Leads <span style={{ color: '#2DD4BF' }}>B2B</span></h1>
                <p style={{ color: '#b0adc5', margin: 0 }}>Gestión de prospectos extraídos por Apify.</p>
              </div>
              
              {/* NUEVO CONTENEDOR DE TOTAL Y LIMPIEZA */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <button 
                  onClick={limpiarLeads}
                  style={{ 
                    background: 'transparent', 
                    border: '1px solid #EF4444', 
                    color: '#FCA5A5', 
                    padding: '0.8rem 1.5rem', 
                    borderRadius: '12px', 
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    transition: 'all 0.2s ease'
                  }}
                  title="Eliminar todos los leads"
                >
                  Limpiar Todo
                </button>
                <div style={{ background: '#120D1C', border: '1px solid #231B35', padding: '0.8rem 1.5rem', borderRadius: '12px', color: '#E9D5FF' }}>
                  <strong>Total:</strong> {prospectos.length} agencias
                </div>
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
                          
                          {/* ESTAS 4 CELDAS FALTABAN EN TU CÓDIGO */}
                          <td style={{ padding: '1.2rem' }}>{lead.nombre_agencia}</td>
                          {/* CELDA DEL SITIO WEB CORREGIDA */}
  <td style={{ 
    padding: '1.2rem', 
    maxWidth: '180px', 
    whiteSpace: 'nowrap', 
    overflow: 'hidden', 
    textOverflow: 'ellipsis' 
  }}>
    {lead.sitio_web ? (
      <a 
        href={lead.sitio_web} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ color: '#2DD4BF', textDecoration: 'none' }}
        title={lead.sitio_web}
      >
        {lead.sitio_web.replace(/^https?:\/\/(www\.)?/, '')} ↗
      </a>
    ) : (
      <span style={{ color: '#7c7694' }}>Sin registro web</span>
    )}
  </td>
                          <td style={{ padding: '1.2rem' }}>
  {lead.telefono ? (
    <a 
      href={`https://wa.me/${lead.telefono.replace(/[^0-9]/g, '')}`} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ color: '#25D366', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px' }}
    >
      {lead.telefono} 💬
    </a>
  ) : (
    <span style={{ color: '#7c7694' }}>Sin teléfono</span>
  )}
</td>
                          <td style={{ padding: '1.2rem' }}>
  <button 
    onClick={() => actualizarEstado(lead.id, lead.estado_calificacion)}
    style={{ 
      background: lead.estado_calificacion === 'contactado' ? 'rgba(45, 212, 191, 0.1)' : 'rgba(168, 85, 247, 0.1)',
      color: lead.estado_calificacion === 'contactado' ? '#2DD4BF' : '#A855F7',
      border: lead.estado_calificacion === 'contactado' ? '1px solid rgba(45, 212, 191, 0.3)' : '1px solid rgba(168, 85, 247, 0.3)',
      padding: '0.4rem 0.8rem',
      borderRadius: '8px',
      fontSize: '0.85rem',
      fontWeight: 'bold',
      textTransform: 'capitalize',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    }}
    title="Clic para cambiar estado"
  >
    {lead.estado_calificacion ? lead.estado_calificacion.replace('_', ' ') : 'sin auditar'}
  </button>
</td>

                          {/* TUS BOTONES (Ahora sí alineados en la última columna) */}
                          <td style={{ padding: '1.2rem', display: 'flex', gap: '10px' }}>
  <button 
    onClick={() => setAuditoriaActiva(lead)}
    style={{ 
      background: '#2DD4BF', 
      border: 'none', 
      color: '#07050A', 
      padding: '0.5rem 1rem', 
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 'bold'
    }}
  >
    Auditoría IA
  </button>
  <button 
    onClick={() => eliminarLead(lead.id, lead.nombre_agencia)}
    style={{ 
      background: 'transparent', 
      border: '1px solid #EF4444', 
      color: '#FCA5A5', 
      padding: '0.5rem 1rem', 
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    }}
  >
    Eliminar
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
          {/* ================= PANEL LATERAL DE AUDITORÍA ================= */}
      {auditoriaActiva && (
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '100%',
          maxWidth: '450px',
          height: '100vh',
          backgroundColor: '#F5F4EF',
          boxShadow: '-10px 0 30px rgba(0,0,0,0.8)',
          zIndex: 10005,
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'system-ui, sans-serif'
        }}>
          <div style={{ padding: '2rem', borderBottom: '2px solid #E5E5E5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ color: '#1C2624', margin: 0, fontSize: '1.5rem', fontWeight: '800' }}>
              Auditoría de IA
            </h2>
            <button 
              onClick={() => setAuditoriaActiva(null)}
              style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#1C2624' }}
            >
              ✕
            </button>
          </div>
          
          <div style={{ padding: '2rem', overflowY: 'auto', flex: 1 }}>
            <h3 style={{ color: '#A855F7', marginBottom: '0.5rem', fontWeight: 'bold' }}>{auditoriaActiva.nombre_agencia}</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.2rem' }}>
              {auditoriaActiva.sitio_web || 'Sin registro web'}
            </p>

            <button
              onClick={copiarAuditoria}
              disabled={!auditoriaActiva.auditoria_ai}
              style={{
                width: '100%',
                padding: '0.9rem',
                marginBottom: '1.5rem',
                background: copiado ? '#1C2624' : (auditoriaActiva.auditoria_ai ? '#2DD4BF' : '#E5E5E5'),
                color: copiado ? '#2DD4BF' : (auditoriaActiva.auditoria_ai ? '#07050A' : '#999'),
                border: 'none',
                borderRadius: '10px',
                fontWeight: 'bold',
                fontSize: '0.95rem',
                cursor: auditoriaActiva.auditoria_ai ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.2s ease',
              }}
            >
              {copiado ? '✓ Copiado al portapapeles' : '📋 Copiar auditoría completa'}
            </button>

            <div style={{ 
              color: '#1C2624', 
              fontSize: '1rem', 
              lineHeight: '1.7',
              whiteSpace: 'pre-wrap'
            }}>
              {auditoriaActiva.auditoria_ai || 'No se registró ninguna auditoría de IA para este negocio. Es probable que haya pasado por la ruta de venta directa de diseño web.'}
            </div>
          </div>
        </div>
      )}
        </div>
      )}
    </>
  );
}