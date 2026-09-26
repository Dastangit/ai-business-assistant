"use client";
import { useState, useEffect, useRef, useCallback } from 'react';

// Un solo nombre para el asistente en todo el chat
const NOMBRE_ASISTENTE = 'Asistente de DASTAN X-TECH';
const SALUDO_INICIAL = 'Hola, soy el asistente de DASTAN X-TECH. Ayudamos a negocios y pymes a conseguir más clientes por internet. Pregúntame lo que quieras o pide tu diagnóstico gratis aquí abajo.';
const GRACIAS = 'Recibido. Revisamos tu web o tu Instagram y te escribimos por WhatsApp con 3 fallos reales, cada uno con su prueba. Mientras tanto, pregúntame lo que quieras.';

// Estilos del formulario del diagnóstico (en línea para no tocar globals.css)
const campo = {
  width: '100%', background: 'transparent', border: '1px solid var(--border-strong)', borderRadius: '10px',
  padding: '10px 12px', color: 'var(--text)', fontSize: '16px', outline: 'none', marginBottom: '8px',
};
const tarjeta = {
  background: 'rgba(45, 212, 191, 0.07)', border: '1px solid rgba(45, 212, 191, 0.35)', borderRadius: '14px', padding: '14px',
};
const botonPrincipal = {
  width: '100%', background: 'var(--action)', color: '#07050A', border: 'none', borderRadius: '10px',
  padding: '11px', fontWeight: 700, fontSize: '15px', cursor: 'pointer',
};

export default function ChatWidget({ couponApplied = false } = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', text: SALUDO_INICIAL }]);

  // Formulario del diagnóstico gratis
  const [formAbierto, setFormAbierto] = useState(false);
  const [datos, setDatos] = useState({ nombre: '', web: '', whatsapp: '', empresa_web: '' });
  const [enviando, setEnviando] = useState(false);
  const [errorForm, setErrorForm] = useState('');
  const [leadEnviado, setLeadEnviado] = useState(false);
  const finRef = useRef(null);

  useEffect(() => {
    finRef.current?.scrollIntoView({ block: 'end' });
  }, [messages, formAbierto, isLoading]);

  const handleSend = useCallback(async (textoDirecto = null) => {
    const textoAEnviar = typeof textoDirecto === 'string' ? textoDirecto : input;
    if (!textoAEnviar.trim() || isLoading) return;

    const newMessages = [...messages, { role: 'user', text: textoAEnviar }];
    setMessages(newMessages);
    if (typeof textoDirecto !== 'string') setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, couponApplied }),
      });
      const data = await response.json();
      setMessages([...newMessages, { role: 'bot', text: data.reply }]);
    } catch {
      setMessages([...newMessages, { role: 'bot', text: 'No he podido conectar. Escríbenos por WhatsApp al +1 605-500-3653.' }]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages, couponApplied]);

  // Otros botones de la web abren el chat: con { diagnostico: true } despliegan el formulario,
  // con un texto lo envían como primera pregunta
  useEffect(() => {
    const handleAbrirChat = (e) => {
      setIsOpen(true);
      const detalle = e.detail;
      if (detalle && typeof detalle === 'object' && detalle.diagnostico) {
        if (!leadEnviado) setFormAbierto(true);
        return;
      }
      if (typeof detalle === 'string') handleSend(detalle);
    };

    window.addEventListener('abrir-chat', handleAbrirChat);
    return () => window.removeEventListener('abrir-chat', handleAbrirChat);
  }, [handleSend, leadEnviado]);

  const handleClearChat = () => {
    setMessages([{ role: 'bot', text: SALUDO_INICIAL }]);
  };

  const enviarDiagnostico = async (e) => {
    e.preventDefault();
    setErrorForm('');
    if (!datos.nombre.trim() || datos.whatsapp.replace(/[^0-9]/g, '').length < 7) {
      setErrorForm('Necesitamos tu nombre y un WhatsApp con el código de país.');
      return;
    }
    setEnviando(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...datos,
          origen: typeof window !== 'undefined' ? window.location.pathname : '',
          conversacion: messages.slice(1),
        }),
      });
      if (!res.ok) throw new Error('fallo');
      setLeadEnviado(true);
      setFormAbierto(false);
      setMessages((prev) => [...prev, { role: 'bot', text: GRACIAS }]);
    } catch {
      setErrorForm('No se pudo enviar. Escríbenos por WhatsApp al +1 605-500-3653.');
    } finally {
      setEnviando(false);
    }
  };

  // Convierte el número de WhatsApp del texto en un enlace
  const renderMessageWithLinks = (text) => {
    if (!text) return '';
    const parts = text.split(/(\+1\s?605[- ]?500[- ]?3653|\+?16055003653)/g);
    return parts.map((part, index) => {
      const justNumbers = part.trim().replace(/[\s-]/g, '');
      if (justNumbers === '+16055003653' || justNumbers === '16055003653') {
        return (
          <a key={index} href="https://wa.me/16055003653" target="_blank" rel="noopener noreferrer">
            +1 605-500-3653
          </a>
        );
      }
      return part;
    });
  };

  return (
    <>
    {isOpen && <div className="chat-overlay" onClick={() => setIsOpen(false)}></div>}
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-window">

          <div className="chat-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="chat-header-dot"></div>
              <div style={{ fontSize: '15px', fontWeight: '600' }}>{NOMBRE_ASISTENTE}</div>
            </div>
            <button type="button" onClick={handleClearChat} className="chat-clear-btn">
              Limpiar
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={msg.role === 'bot' ? 'msg-bot' : 'msg-user'} style={{ whiteSpace: 'pre-wrap' }}>
                {renderMessageWithLinks(msg.text)}
              </div>
            ))}
            {isLoading && <div className="msg-bot" style={{ opacity: 0.5 }}>Escribiendo...</div>}

            {/* DIAGNÓSTICO GRATIS: los datos van al panel (tabla leads_web) */}
            {!leadEnviado && (formAbierto ? (
              <form onSubmit={enviarDiagnostico} style={tarjeta} noValidate>
                <div style={{ fontWeight: 700, marginBottom: '4px' }}>Tu diagnóstico gratis</div>
                <div style={{ fontSize: '14px', color: 'var(--text-2)', marginBottom: '10px', lineHeight: 1.45 }}>
                  Te mandamos por WhatsApp 3 fallos reales de tu web o tu Instagram, cada uno con su prueba.
                </div>
                <input style={campo} aria-label="Tu nombre" placeholder="Tu nombre" autoComplete="name"
                  value={datos.nombre} onChange={(e) => setDatos({ ...datos, nombre: e.target.value })} />
                <input style={campo} aria-label="Tu web o tu Instagram" placeholder="Tu web o tu @ de Instagram"
                  value={datos.web} onChange={(e) => setDatos({ ...datos, web: e.target.value })} />
                <input style={campo} aria-label="Tu WhatsApp con código de país" placeholder="WhatsApp (ej. +57 300 123 4567)" type="tel" autoComplete="tel"
                  value={datos.whatsapp} onChange={(e) => setDatos({ ...datos, whatsapp: e.target.value })} />
                {/* Campo trampa para bots: oculto a las personas */}
                <input tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                  value={datos.empresa_web} onChange={(e) => setDatos({ ...datos, empresa_web: e.target.value })} />
                {errorForm && <div role="alert" style={{ color: '#FCA5A5', fontSize: '14px', marginBottom: '8px' }}>{renderMessageWithLinks(errorForm)}</div>}
                <button type="submit" style={{ ...botonPrincipal, opacity: enviando ? 0.6 : 1 }} disabled={enviando}>
                  {enviando ? 'Enviando…' : 'Quiero mi diagnóstico'}
                </button>
                <button type="button" onClick={() => setFormAbierto(false)} style={{ background: 'none', border: 'none', color: 'var(--text-2)', fontSize: '13px', marginTop: '8px', cursor: 'pointer', width: '100%' }}>
                  Prefiero preguntar primero
                </button>
              </form>
            ) : (
              <button type="button" onClick={() => setFormAbierto(true)} style={{ ...botonPrincipal, alignSelf: 'stretch' }}>
                Pedir mi diagnóstico gratis
              </button>
            ))}
            <div ref={finRef} />
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              aria-label="Escribe tu mensaje"
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe tu mensaje..."
            />
            <button type="button" onClick={handleSend} className="chat-send-btn" aria-label="Enviar mensaje">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>

        </div>
      )}

      <button type="button" className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat con el asistente'}>
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>
    </div>
    </>
  );
}
