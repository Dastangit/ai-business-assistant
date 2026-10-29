'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { interesDe } from '@/lib/leads';

// Panel privado. No habla con la base de datos: todo pasa por /api/admin/datos,
// que comprueba la cookie de sesión en el servidor antes de leer o tocar nada.

// Estados de un lead con su color (en RGB), en la línea de los botones de estado de prospectos
const ESTADOS_LEAD = {
  nuevo: { texto: 'Nuevo', rgb: '45, 212, 191' },
  contactado: { texto: 'Contactado', rgb: '168, 85, 247' },
  diagnostico_enviado: { texto: 'Diagnóstico enviado', rgb: '96, 165, 250' },
  cliente: { texto: 'Cliente', rgb: '34, 197, 94' },
  descartado: { texto: 'Descartado', rgb: '124, 118, 148' },
};

// Selector de estado con aspecto de etiqueta: fondo suave del color del estado y flecha propia
function estiloEstado(estado) {
  const rgb = (ESTADOS_LEAD[estado] || ESTADOS_LEAD.nuevo).rgb;
  const flecha = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' fill='none' stroke='rgb(${rgb.replace(/ /g, '')})' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`;
  return {
    appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer',
    backgroundColor: `rgba(${rgb}, 0.1)`, color: `rgb(${rgb})`, border: `1px solid rgba(${rgb}, 0.35)`,
    borderRadius: '8px', padding: '0.4rem 2rem 0.4rem 0.8rem', fontSize: '0.85rem', fontWeight: 'bold',
    backgroundImage: flecha, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.7rem center',
  };
}

const c = {
  fondo: '#07050A', panel: '#120D1C', borde: '#231B35', texto: '#F5F4EF', suave: '#b0adc5',
  apagado: '#7c7694', turquesa: '#2DD4BF', morado: '#A855F7', rojo: '#EF4444', rojoSuave: '#FCA5A5',
};

// Qué tan seguro es que un teléfono de prospecto tenga WhatsApp (lo calcula el escenario de Make)
const TIPOS_TELEFONO = {
  movil: { texto: 'Móvil', rgb: '37, 211, 102' },
  sin_confirmar: { texto: 'Por confirmar', rgb: '176, 173, 197' },
  fijo: { texto: 'Fijo', rgb: '252, 165, 165' },
};

// Solo el dominio (sin https, www ni ruta), para que la columna de la web no se alargue
function dominioDe(url) {
  return url.replace(/^https?:\/\/(www\.)?/, '').split(/[/?#]/)[0];
}

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
                      <td style={{ ...celda, whiteSpace: 'nowrap', color: c.suave }}>{new Date(lead.fecha).toLocaleDateString('es')}</td>
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
                          aria-label={`Estado de ${lead.nombre}`}
                          style={estiloEstado(lead.estado)}
                        >
                          {Object.entries(ESTADOS_LEAD).map(([valor, { texto }]) => <option key={valor} value={valor} style={{ backgroundColor: c.panel, color: c.texto }}>{texto}</option>)}
                        </select>
                      </td>
                      <td style={{ ...celda, display: 'flex', gap: '8px' }}>
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
              <table style={{ width: '100%', minWidth: '820px', borderCollapse: 'collapse' }}>
                <thead style={{ background: 'rgba(255,255,255,0.03)', borderBottom: `1px solid ${c.borde}` }}>
                  <tr><th style={cabecera}>Negocio</th><th style={cabecera}>Sitio web</th><th style={cabecera}>Contacto</th><th style={cabecera}>Estado</th><th style={cabecera}>Acción</th></tr>
                </thead>
                <tbody>
                  {prospectos.map((lead) => {
                    const tipo = TIPOS_TELEFONO[lead.tipo_telefono];
                    const origen = [lead.categoria, lead.ciudad].filter(Boolean).join(' · ');
                    return (
                    <tr key={lead.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ ...celda, minWidth: '180px', maxWidth: '260px' }}>
                        <div style={{ fontWeight: '600' }}>{lead.nombre_agencia}</div>
                        {origen && <div style={{ color: c.suave, fontSize: '0.85rem', marginTop: '0.25rem' }}>{origen}</div>}
                      </td>
                      <td style={{ ...celda, minWidth: '150px', maxWidth: '220px', overflowWrap: 'anywhere' }}>
                        {lead.sitio_web ? (
                          <a href={lead.sitio_web} target="_blank" rel="noopener noreferrer" style={{ color: c.turquesa, textDecoration: 'none' }} title={lead.sitio_web}>
                            {dominioDe(lead.sitio_web)} ↗
                          </a>
                        ) : <span style={{ color: c.apagado }}>Sin registro web</span>}
                      </td>
                      <td style={{ ...celda, minWidth: '200px', maxWidth: '260px' }}>
                        {lead.telefono && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                            <a href={`https://wa.me/${lead.telefono.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: '600', whiteSpace: 'nowrap' }}>{lead.telefono}</a>
                            {tipo && (
                              <span style={{ background: `rgba(${tipo.rgb}, 0.1)`, color: `rgb(${tipo.rgb})`, border: `1px solid rgba(${tipo.rgb}, 0.35)`, borderRadius: '6px', padding: '0.1rem 0.45rem', fontSize: '0.75rem', fontWeight: 'bold', whiteSpace: 'nowrap' }}>{tipo.texto}</span>
                            )}
                          </div>
                        )}
                        {lead.email && (
                          <a href={`mailto:${lead.email}`} style={{ display: 'block', color: c.turquesa, textDecoration: 'none', fontSize: '0.9rem', marginTop: lead.telefono ? '0.4rem' : 0, overflowWrap: 'anywhere' }}>{lead.email}</a>
                        )}
                        {!lead.telefono && !lead.email && <span style={{ color: c.apagado }}>Sin contacto</span>}
                      </td>
                      <td style={celda}>
                        <button
                          onClick={() => alternarProspecto(lead)}
                          title="Clic para cambiar estado"
                          style={{
                            background: lead.estado_calificacion === 'contactado' ? 'rgba(45,212,191,0.1)' : 'rgba(168,85,247,0.1)',
                            color: lead.estado_calificacion === 'contactado' ? c.turquesa : c.morado,
                            border: `1px solid ${lead.estado_calificacion === 'contactado' ? 'rgba(45,212,191,0.3)' : 'rgba(168,85,247,0.3)'}`,
                            padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 'bold', cursor: 'pointer', textTransform: 'capitalize', whiteSpace: 'nowrap',
                          }}
                        >
                          {lead.estado_calificacion ? lead.estado_calificacion.replace('_', ' ') : 'sin auditar'}
                        </button>
                      </td>
                      <td style={celda}>
                        <button onClick={() => eliminar('prospectos', lead.id, lead.nombre_agencia)} style={{ ...botonPeligro, whiteSpace: 'nowrap' }}>Eliminar</button>
                      </td>
                    </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
