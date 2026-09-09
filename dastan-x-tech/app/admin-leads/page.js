'use client';
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Usamos las variables públicas para que el cliente pueda leer la base de datos
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function AdminLeads() {
  const [prospectos, setProspectos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetchProspectos();
  }, []);

  const fetchProspectos = async () => {
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

  return (
    <main style={{ backgroundColor: '#07050A', color: '#F5F4EF', minHeight: '100vh', padding: '3rem 2rem', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 0.5rem 0' }}>
              Leads <span style={{ color: '#2DD4BF' }}>B2B</span>
            </h1>
            <p style={{ color: '#b0adc5', margin: 0 }}>Gestión de prospectos extraídos por Apify.</p>
          </div>
          <div style={{ background: '#120D1C', border: '1px solid #231B35', padding: '0.8rem 1.5rem', borderRadius: '12px' }}>
            <strong style={{ color: '#E9D5FF' }}>Total:</strong> {prospectos.length} agencias
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
                    <tr key={lead.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
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
    </main>
  );
}