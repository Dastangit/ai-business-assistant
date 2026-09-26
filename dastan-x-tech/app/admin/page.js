'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

// Panel privado. No habla con la base de datos: todo pasa por /api/admin/datos,
// que comprueba la cookie de sesión en el servidor antes de leer o tocar nada.

const ESTADOS_LEAD = {
  nuevo: 'Nuevo',
  contactado: 'Contactado',
  diagnostico_enviado: 'Diagnóstico enviado',
  cliente: 'Cliente',
  descartado: 'Descartado',
};

const c = {
  fondo: '#07050A', panel: '#120D1C', borde: '#231B35', texto: '#F5F4EF', suave: '#b0adc5',
  apagado: '#7c7694', turquesa: '#2DD4BF', morado: '#A855F7', rojo: '#EF4444', rojoSuave: '#FCA5A5',
};

const celda = { padding: '1rem 1.2rem', verticalAlign: 'top' };
const cabecera = { padding: '1rem 1.2rem', color: '#9d98b8', fontWeight: '600', textAlign: 'left' };

async function llamar(metodo, cuerpo) {
  const res = await fetch('/api/admin/datos', {
    method: metodo,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cuerpo),
  });
  if (res.status === 401) throw new Error('sesion');
  if (!res.ok) throw new Error('fallo');
  return res.json();
}

// El chat guarda en "origen" la página y el interés: "/ · diagnóstico SEO" o "/ · quiere web nueva"
function interesDe(origen) {
  if (!origen) return '—';
  if (origen.includes('quiere web')) return 'Quiere web nueva';
  if (origen.includes('diagnóstico SEO')) return 'Diagnóstico SEO';
  return origen;
}

// Lee las dos tablas. Devuelve null si falla la red (se conserva lo que haya en pantalla).
async function leerDatos() {
  try {
    const [rp, rl] = await Promise.all([
      fetch('/api/admin/datos?tabla=prospectos'),
      fetch('/api/admin/datos?tabla=leads'),
    ]);
    if (rp.status === 401 || rl.status === 401) return { autenticado: false, prospectos: [], leads: [] };
    return {
      autenticado: true,
      prospectos: rp.ok ? (await rp.json()).filas : [],
      leads: rl.ok ? (await rl.json()).filas : [],
    };
  } catch (error) {
    console.error('Error al cargar el panel:', error);
    return null;
  }
}

export default function AdminPage() {
  const [autenticado, setAutenticado] = useState(null); // null = comprobando
  const [password, setPassword] = useState('');
  const [prospectos, setProspectos] = useState([]);
  const [leads, setLeads] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [auditoriaActiva, setAuditoriaActiva] = useState(null);
  const [copiado, setCopiado] = useState(false);

  const aplicar = useCallback((resultado) => {
    if (resultado) {
      setAutenticado(resultado.autenticado);
      setProspectos(resultado.prospectos);
      setLeads(resultado.leads);
    }
    setCargando(false);
  }, []);

  const cargar = useCallback(() => leerDatos().then(aplicar), [aplicar]);

  // Si la cookie de sesión sigue viva, entra directo
  useEffect(() => {
    let activo = true;
    leerDatos().then((resultado) => {
      if (activo) aplicar(resultado);
    });
    return () => {
      activo = false;
    };
  }, [aplicar]);

  const abrirPanel = (registro) => {
    setCopiado(false);
    setAuditoriaActiva(registro);
  };

  const entrar = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    }).catch(() => null);
    setPassword('');
    if (!res?.ok) {
      alert('Acceso denegado');
      return;
    }
    setCargando(true);
    cargar();
  };

  const salir = async () => {
    await fetch('/api/admin/logout', { method: 'POST' }).catch(() => null);
    setAutenticado(false);
    setProspectos([]);
    setLeads([]);
  };

  const accion = async (metodo, cuerpo, mensajeError) => {
    try {
      await llamar(metodo, cuerpo);
      cargar();
    } catch (error) {
      if (error.message === 'sesion') setAutenticado(false);
      else alert(mensajeError);
    }
  };

  const alternarProspecto = (lead) =>
    accion('PATCH', {
      tabla: 'prospectos',
      id: lead.id,
      estado: lead.estado_calificacion === 'contactado' ? 'sin_auditar' : 'contactado',
    }, 'No se pudo actualizar el estado.');

  const eliminar = (tabla, id, nombre) => {
    if (!window.confirm(`¿Seguro que quieres eliminar "${nombre}"? Esta acción no se puede deshacer.`)) return;
    accion('DELETE', { tabla, id }, 'No se pudo eliminar.');
  };

  const vaciarProspectos = () => {
    if (!window.confirm('¿ELIMINAR TODOS los prospectos? Descarga antes la copia (botón "Descargar copia"). Esta acción no se puede deshacer.')) return;
    accion('DELETE', { tabla: 'prospectos', todos: true }, 'No se pudo vaciar la tabla.');
  };

  const copiarAuditoria = async () => {
    const texto = auditoriaActiva?.auditoria_ai || '';
    if (!texto) return;
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      alert('No se pudo copiar automáticamente. Selecciona el texto manualmente.');
    }
  };

  if (autenticado === null) {
    return <div style={{ minHeight: '100vh', background: c.fondo, color: c.suave, display: 'grid', placeItems: 'center' }}>Comprobando sesión…</div>;
  }

  if (!autenticado) {
    return (
      <div style={{ minHeight: '100vh', background: c.fondo, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
        <form onSubmit={entrar} style={{ background: '#1C2624', padding: '2rem', borderRadius: '16px', border: `1px solid ${c.turquesa}`, textAlign: 'center', width: '100%', maxWidth: '360px' }}>
          <h1 style={{ color: c.texto, marginBottom: '1rem', fontSize: '1.3rem' }}>Acceso restringido</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            aria-label="Contraseña"
            autoFocus
            style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', background: c.fondo, border: `1px solid ${c.borde}`, color: c.texto, borderRadius: '8px' }}
          />
          <button type="submit" style={{ width: '100%', padding: '0.8rem', background: c.turquesa, color: c.fondo, fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Entrar</button>
        </form>
      </div>
    );
  }

  const botonSecundario = { background: 'transparent', border: `1px solid ${c.borde}`, color: c.texto, padding: '0.6rem 1rem', borderRadius: '10px', cursor: 'pointer', textDecoration: 'none', fontSize: '0.9rem' };
  const botonPeligro = { ...botonSecundario, border: `1px solid ${c.rojo}`, color: c.rojoSuave };

  return (
    <div style={{ minHeight: '100vh', background: c.fondo, color: c.texto, fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', margin: 0 }}>Panel <span style={{ color: c.turquesa }}>DASTAN X-TECH</span></h1>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <Link href="/" style={botonSecundario}>Ir a la web</Link>
            <button onClick={salir} style={{ ...botonSecundario, color: c.morado, borderColor: c.morado }}>Cerrar sesión</button>
          </div>
        </div>

        {/* ================= LEADS QUE LLEGAN SOLOS POR EL CHAT ================= */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Leads de la web <span style={{ color: c.turquesa }}>({leads.length})</span></h2>
              <p style={{ color: c.suave, margin: '0.3rem 0 0' }}>Personas que pidieron el diagnóstico SEO gratis o una web nueva desde el chat.</p>
            </div>
            <a href="/api/admin/datos?tabla=leads&formato=csv" style={botonSecundario}>Descargar copia (CSV)</a>
          </div>
          <div style={{ background: c.panel, border: `1px solid ${c.borde}`, borderRadius: '16px', overflowX: 'auto' }}>
            {cargando ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: c.suave }}>Cargando…</div>
            ) : leads.length === 0 ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: c.suave }}>Todavía no ha llegado ninguno.</div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ background: 'rgba(255,255,255,0.03)', borderBottom: `1px solid ${c.borde}` }}>
                  <tr><th style={cabecera}>Fecha</th><th style={cabecera}>Nombre</th><th style={cabecera}>Interés</th><th style={cabecera}>Web o Instagram</th><th style={cabecera}>WhatsApp</th><th style={cabecera}>Estado</th><th style={cabecera}>Acción</th></tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ ...celda, whiteSpace: 'nowrap', color: c.suave }}>{new Date(lead.fecha).toLocaleString('es')}</td>
                      <td style={celda}>{lead.nombre}</td>
                      <td style={celda}>{interesDe(lead.origen)}</td>
                      <td style={{ ...celda, maxWidth: '220px', overflowWrap: 'anywhere' }}>{lead.web || <span style={{ color: c.apagado }}>—</span>}</td>
                      <td style={celda}>
                        <a href={`https://wa.me/${lead.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: '600', textDecoration: 'none' }}>{lead.whatsapp}</a>
                      </td>
                      <td style={celda}>
                        <select
                          value={lead.estado}
                          onChange={(e) => accion('PATCH', { tabla: 'leads', id: lead.id, estado: e.target.value }, 'No se pudo actualizar el estado.')}
                          style={{ background: c.fondo, color: c.texto, border: `1px solid ${c.borde}`, borderRadius: '8px', padding: '0.4rem' }}
                        >
                          {Object.entries(ESTADOS_LEAD).map(([valor, texto]) => <option key={valor} value={valor}>{texto}</option>)}
                        </select>
                      </td>
                      <td style={{ ...celda, display: 'flex', gap: '8px' }}>
                        <button onClick={() => abrirPanel({ nombre_agencia: lead.nombre, sitio_web: lead.web, auditoria_ai: lead.conversacion, titulo: 'Conversación del chat' })} style={{ background: c.turquesa, border: 'none', color: c.fondo, padding: '0.5rem 0.9rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Ver chat</button>
                        <button onClick={() => eliminar('leads', lead.id, lead.nombre)} style={botonPeligro}>Eliminar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </section>

        {/* ================= PROSPECTOS QUE BUSCAMOS NOSOTROS ================= */}
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Prospectos <span style={{ color: c.turquesa }}>({prospectos.length})</span></h2>
              <p style={{ color: c.suave, margin: '0.3rem 0 0' }}>Negocios extraídos por la búsqueda automática.</p>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <a href="/api/admin/datos?tabla=prospectos&formato=csv" style={botonSecundario}>Descargar copia (CSV)</a>
              <button onClick={vaciarProspectos} style={botonPeligro}>Limpiar todo</button>
            </div>
          </div>
          <div style={{ background: c.panel, border: `1px solid ${c.borde}`, borderRadius: '16px', overflowX: 'auto' }}>
            {cargando ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: c.suave }}>Cargando…</div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ background: 'rgba(255,255,255,0.03)', borderBottom: `1px solid ${c.borde}` }}>
                  <tr><th style={cabecera}>Negocio</th><th style={cabecera}>Sitio web</th><th style={cabecera}>Teléfono</th><th style={cabecera}>Estado</th><th style={cabecera}>Acción</th></tr>
                </thead>
                <tbody>
                  {prospectos.map((lead) => (
                    <tr key={lead.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={celda}>{lead.nombre_agencia}</td>
                      <td style={{ ...celda, maxWidth: '180px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {lead.sitio_web ? (
                          <a href={lead.sitio_web} target="_blank" rel="noopener noreferrer" style={{ color: c.turquesa, textDecoration: 'none' }} title={lead.sitio_web}>
                            {lead.sitio_web.replace(/^https?:\/\/(www\.)?/, '')} ↗
                          </a>
                        ) : <span style={{ color: c.apagado }}>Sin registro web</span>}
                      </td>
                      <td style={celda}>
                        {lead.telefono ? (
                          <a href={`https://wa.me/${lead.telefono.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: '600' }}>{lead.telefono}</a>
                        ) : <span style={{ color: c.apagado }}>Sin teléfono</span>}
                      </td>
                      <td style={celda}>
                        <button
                          onClick={() => alternarProspecto(lead)}
                          title="Clic para cambiar estado"
                          style={{
                            background: lead.estado_calificacion === 'contactado' ? 'rgba(45,212,191,0.1)' : 'rgba(168,85,247,0.1)',
                            color: lead.estado_calificacion === 'contactado' ? c.turquesa : c.morado,
                            border: `1px solid ${lead.estado_calificacion === 'contactado' ? 'rgba(45,212,191,0.3)' : 'rgba(168,85,247,0.3)'}`,
                            padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 'bold', cursor: 'pointer', textTransform: 'capitalize',
                          }}
                        >
                          {lead.estado_calificacion ? lead.estado_calificacion.replace('_', ' ') : 'sin auditar'}
                        </button>
                      </td>
                      <td style={{ ...celda, display: 'flex', gap: '8px' }}>
                        <button onClick={() => abrirPanel({ ...lead, titulo: 'Auditoría de IA' })} style={{ background: c.turquesa, border: 'none', color: c.fondo, padding: '0.5rem 0.9rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Auditoría IA</button>
                        <button onClick={() => eliminar('prospectos', lead.id, lead.nombre_agencia)} style={botonPeligro}>Eliminar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </section>
      </div>

      {/* ================= PANEL LATERAL: AUDITORÍA O CONVERSACIÓN ================= */}
      {auditoriaActiva && (
        <div style={{ position: 'fixed', top: 0, right: 0, width: '100%', maxWidth: '450px', height: '100vh', backgroundColor: '#F5F4EF', boxShadow: '-10px 0 30px rgba(0,0,0,0.8)', zIndex: 10, display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '1.5rem 2rem', borderBottom: '2px solid #E5E5E5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ color: '#1C2624', margin: 0, fontSize: '1.4rem', fontWeight: '800' }}>{auditoriaActiva.titulo}</h2>
            <button onClick={() => setAuditoriaActiva(null)} aria-label="Cerrar" style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#1C2624' }}>✕</button>
          </div>
          <div style={{ padding: '2rem', overflowY: 'auto', flex: 1 }}>
            <h3 style={{ color: c.morado, marginBottom: '0.5rem' }}>{auditoriaActiva.nombre_agencia}</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.2rem' }}>{auditoriaActiva.sitio_web || 'Sin registro web'}</p>
            <button
              onClick={copiarAuditoria}
              disabled={!auditoriaActiva.auditoria_ai}
              style={{ width: '100%', padding: '0.9rem', marginBottom: '1.5rem', background: copiado ? '#1C2624' : (auditoriaActiva.auditoria_ai ? c.turquesa : '#E5E5E5'), color: copiado ? c.turquesa : (auditoriaActiva.auditoria_ai ? c.fondo : '#999'), border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: auditoriaActiva.auditoria_ai ? 'pointer' : 'not-allowed' }}
            >
              {copiado ? 'Copiado' : 'Copiar texto completo'}
            </button>
            <div style={{ color: '#1C2624', fontSize: '1rem', lineHeight: '1.7', whiteSpace: 'pre-wrap' }}>
              {auditoriaActiva.auditoria_ai || 'No hay texto guardado para este registro.'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
