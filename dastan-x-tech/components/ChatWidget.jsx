"use client";
import { useState, useEffect, useRef, useCallback } from 'react';

// Textos del chat por idioma. Un solo nombre para la asistente (Lex) en todo el chat.
// pedirDiagnostico y noTengoWebQuiero deben coincidir con BOTONES de app/api/chat/route.js (el prompt los nombra).
// origenDiagnostico y origenWebNueva van al panel de admin (en español en los dos idiomas).
const TEXTOS = {
  es: {
    nombre: 'Lex · DASTAN X-TECH',
    saludo: 'Hola, soy Lex, la asistente de DASTAN X-TECH. Ayudamos a negocios y pymes a conseguir más clientes por internet. Pregúntame lo que quieras o pide tu diagnóstico SEO gratis aquí abajo.',
    // Páginas de servicio, sin botón de diagnóstico en el chat: el saludo apunta al botón que sí hay
    saludoSinDiagnostico: 'Hola, soy Lex, la asistente de DASTAN X-TECH. Ayudamos a negocios y pymes a conseguir más clientes por internet. Pregúntame lo que quieras o, si aún no tienes web, pídela aquí abajo.',
    graciasWeb: 'Recibido, gracias. Revisaremos tu web y te contactaremos por WhatsApp lo antes posible con tu puntuación SEO y las 5 correcciones más urgentes en PDF. Mientras tanto, pregúntame lo que quieras.',
    graciasWebNueva: 'Recibido, gracias. Te contactaremos por WhatsApp lo antes posible para proponerte tu web: desde cero y pensada para tu negocio, o a partir de tu Instagram con los datos que quieras darnos. Mientras tanto, pregúntame lo que quieras.',
    sinConexion: 'No he podido conectar. Escríbenos por WhatsApp al +1 605-500-3653.',
    limpiar: 'Limpiar',
    escribiendo: 'Escribiendo...',
    grupoWeb: '¿Tienes página web?',
    tengoWeb: 'Tengo web',
    noTengoWeb: 'No tengo web',
    tituloDiagnostico: 'Tu diagnóstico SEO gratis',
    tituloWebNueva: 'Tu web nueva',
    textoDiagnostico: 'Tu puntuación SEO de 0 a 100 y las 5 correcciones más urgentes, en un PDF por WhatsApp.',
    textoWebNueva: 'Sin web no hay diagnóstico SEO. Te proponemos dos caminos: una web desde cero, pensada para tu negocio, o una web hecha a partir de tu Instagram con los datos que quieras darnos.',
    nombrePh: 'Tu nombre',
    webPh: 'Tu web (ej. minegocio.com)',
    webAria: 'Tu página web',
    instagramPh: 'Tu @ de Instagram (si tienes)',
    whatsappPh: 'WhatsApp (ej. +57 300 123 4567)',
    whatsappAria: 'Tu WhatsApp con código de país',
    errorDatos: 'Necesitamos tu nombre y un WhatsApp con el código de país.',
    errorWeb: 'El diagnóstico SEO revisa tu web: escribe su dirección. Si no tienes, elige «No tengo web».',
    errorEnvio: 'No se pudo enviar. Escríbenos por WhatsApp al +1 605-500-3653.',
    enviando: 'Enviando…',
    quieroDiagnostico: 'Quiero mi diagnóstico SEO',
    quieroWeb: 'Quiero mi web',
    preguntarPrimero: 'Prefiero preguntar primero',
    pedirDiagnostico: 'Pedir mi diagnóstico SEO gratis',
    noTengoWebQuiero: 'No tengo web: quiero una',
    mensajePh: 'Escribe tu mensaje...',
    mensajeAria: 'Escribe tu mensaje',
    enviarAria: 'Enviar mensaje',
    abrir: 'Abrir chat con Lex, la asistente',
    cerrar: 'Cerrar chat',
    origenDiagnostico: 'diagnóstico SEO',
    origenWebNueva: 'quiere web nueva',
  },
  en: {
    nombre: 'Lex · DASTAN X-TECH',
    saludo: "Hi, I'm Lex, DASTAN X-TECH's assistant. We help small businesses win more customers online. Ask me anything or get your free SEO report below.",
    saludoSinDiagnostico: "Hi, I'm Lex, DASTAN X-TECH's assistant. We help small businesses win more customers online. Ask me anything or, if you don't have a website yet, ask for one below.",
    graciasWeb: "Got it, thanks. We'll review your website and contact you on WhatsApp as soon as possible with your SEO score and the 5 most urgent fixes as a PDF. In the meantime, ask me anything.",
    graciasWebNueva: "Got it, thanks. We'll contact you on WhatsApp as soon as possible to propose your website: from scratch and designed for your business, or built from your Instagram with whatever details you want to give us. In the meantime, ask me anything.",
    sinConexion: "I couldn't connect. Message us on WhatsApp at +1 605-500-3653.",
    limpiar: 'Clear',
    escribiendo: 'Typing...',
    grupoWeb: 'Do you have a website?',
    tengoWeb: 'I have a website',
    noTengoWeb: 'No website',
    tituloDiagnostico: 'Your free SEO report',
    tituloWebNueva: 'Your new website',
    textoDiagnostico: 'Your SEO score from 0 to 100 and the 5 most urgent fixes, as a PDF on WhatsApp.',
    textoWebNueva: 'Without a website there’s no SEO report. We offer two paths: a website from scratch, designed for your business, or a website built from your Instagram with whatever details you want to give us.',
    nombrePh: 'Your name',
    webPh: 'Your website (e.g. mybusiness.com)',
    webAria: 'Your website',
    instagramPh: 'Your Instagram @ (if you have one)',
    whatsappPh: 'WhatsApp (e.g. +1 555 123 4567)',
    whatsappAria: 'Your WhatsApp with country code',
    errorDatos: 'We need your name and a WhatsApp number with the country code.',
    errorWeb: 'The SEO report reviews your website: enter its address. If you don’t have one, choose «No website».',
    errorEnvio: "It couldn't be sent. Message us on WhatsApp at +1 605-500-3653.",
    enviando: 'Sending…',
    quieroDiagnostico: 'Get my SEO report',
    quieroWeb: 'I want my website',
    preguntarPrimero: "I'd rather ask first",
    pedirDiagnostico: 'Get my free SEO report',
    noTengoWebQuiero: 'No website yet? I want one',
    mensajePh: 'Type your message...',
    mensajeAria: 'Type your message',
    enviarAria: 'Send message',
    abrir: 'Open chat with Lex, the assistant',
    cerrar: 'Close chat',
    origenDiagnostico: 'diagnóstico SEO',
    origenWebNueva: 'quiere web nueva',
  },
};

// Estilos del formulario del diagnóstico (en línea para no tocar globals.css)
// Dentro del chat todo es neutro y solo el botón principal destaca: antes casi todo era turquesa.
// Los colores salen de variables: la versión clara del chat (.chat-widget--claro en globals.css) las cambia
const campo = {
  width: '100%', background: 'transparent', border: '1px solid var(--border-strong)', borderRadius: '10px',
  padding: '9px 12px', color: 'var(--text)', fontSize: '16px', outline: 'none', marginBottom: '6px',
};
const tarjeta = {
  background: 'var(--chat-tarjeta, rgba(255, 255, 255, 0.03))', border: '1px solid var(--border-strong)', borderRadius: '14px', padding: '14px',
};
const opcion = (activa) => ({
  flex: 1, padding: '8px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer',
  background: activa ? 'var(--chat-opcion-activa, var(--border-strong))' : 'transparent', color: activa ? 'var(--text)' : 'var(--text-2)',
  border: activa ? '1px solid var(--border-strong)' : '1px solid var(--border)',
});
const botonPrincipal = {
  width: '100%', background: 'var(--chat-primario, var(--text))', color: 'var(--chat-primario-texto, #07050A)',
  border: '1px solid var(--chat-primario-borde, transparent)', borderRadius: '10px',
  padding: '11px', fontWeight: 700, fontSize: '15px', cursor: 'pointer',
};
const botonSecundario = {
  width: '100%', background: 'transparent', color: 'var(--text)', border: '1px solid var(--border-strong)', borderRadius: '10px',
  padding: '10px', fontWeight: 600, fontSize: '14px', cursor: 'pointer',
};

// diagnostico: dónde se pide el diagnóstico SEO gratis en la página actual.
// 'chat' = botón en el chat; 'final' = botón al final de la página; 'ninguno' = no se ofrece (AEO).
// tono: 'oscuro' (portada y VIP) o 'claro' (páginas de fondo claro: servicios, blog, privacidad).
export default function ChatWidget({ couponApplied = false, diagnostico = 'chat', lang = 'es', tono = 'oscuro' } = {}) {
  const t = TEXTOS[lang] ?? TEXTOS.es;
  const sinBotonDiagnostico = diagnostico !== 'chat';
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', text: t.saludo }]);

  // Formulario del diagnóstico SEO gratis (solo con web) o de web nueva (solo Instagram)
  const [formAbierto, setFormAbierto] = useState(false);
  const [tieneWeb, setTieneWeb] = useState(true);
  const [datos, setDatos] = useState({ nombre: '', web: '', whatsapp: '', empresa_web: '' });
  const [enviando, setEnviando] = useState(false);
  const [errorForm, setErrorForm] = useState('');
  const [leadEnviado, setLeadEnviado] = useState(false);
  const listaRef = useRef(null);
  const formRef = useRef(null);

  // Mensajes nuevos: baja al final de la conversación
  useEffect(() => {
    const lista = listaRef.current;
    if (lista) lista.scrollTop = lista.scrollHeight;
  }, [messages, isLoading]);

  // Al abrir el formulario: se muestra desde arriba, con "Tengo web / No tengo web" y el título a la vista
  useEffect(() => {
    const lista = listaRef.current;
    const form = formRef.current;
    if (!formAbierto || !lista || !form) return;
    // Si sobra sitio, aire debajo del formulario para que pueda subir hasta arriba: si no, asoma el borde del saludo
    form.style.marginBottom = '0px';
    const paddingLista = parseFloat(getComputedStyle(lista).paddingBottom);
    form.style.marginBottom = `${Math.max(0, lista.clientHeight - form.offsetHeight - 8 - paddingLista)}px`;
    lista.scrollTop += form.getBoundingClientRect().top - lista.getBoundingClientRect().top - 8;
  }, [formAbierto, tieneWeb]);

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
        body: JSON.stringify({ messages: newMessages, couponApplied, diagnostico, lang }),
      });
      // Si el servidor falla, su texto de error está en español: se muestra el del idioma de la página
      if (!response.ok) throw new Error('chat');
      const data = await response.json();
      setMessages([...newMessages, { role: 'bot', text: data.reply }]);
    } catch {
      setMessages([...newMessages, { role: 'bot', text: t.sinConexion }]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages, couponApplied, diagnostico, lang, t.sinConexion]);

  // Otros botones de la web abren el chat: con { diagnostico: true } despliegan el formulario,
  // con un texto lo envían como primera pregunta
  useEffect(() => {
    const handleAbrirChat = (e) => {
      setIsOpen(true);
      const detalle = e.detail;
      if (detalle && typeof detalle === 'object' && detalle.diagnostico) {
        if (!leadEnviado) {
          setTieneWeb(true);
          setFormAbierto(true);
        }
        return;
      }
      if (typeof detalle === 'string') handleSend(detalle);
    };

    window.addEventListener('abrir-chat', handleAbrirChat);
    return () => window.removeEventListener('abrir-chat', handleAbrirChat);
  }, [handleSend, leadEnviado]);

  const handleClearChat = () => {
    setMessages([{ role: 'bot', text: t.saludo }]);
  };

  const enviarDiagnostico = async (e) => {
    e.preventDefault();
    setErrorForm('');
    if (!datos.nombre.trim() || datos.whatsapp.replace(/[^0-9]/g, '').length < 7) {
      setErrorForm(t.errorDatos);
      return;
    }
    // Sin web no hay diagnóstico SEO: la web es obligatoria solo en ese caso (el Instagram es opcional)
    if (tieneWeb && !datos.web.trim()) {
      setErrorForm(t.errorWeb);
      return;
    }
    setEnviando(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...datos,
          origen: `${window.location.pathname} · ${tieneWeb ? t.origenDiagnostico : t.origenWebNueva}${lang === 'en' ? ' · EN' : ''}`,
          conversacion: messages.slice(1),
        }),
      });
      if (!res.ok) throw new Error('fallo');
      setLeadEnviado(true);
      setFormAbierto(false);
      setMessages((prev) => [...prev, { role: 'bot', text: tieneWeb ? t.graciasWeb : t.graciasWebNueva }]);
    } catch {
      setErrorForm(t.errorEnvio);
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
    {isOpen && <div className={tono === 'claro' ? 'chat-overlay chat-overlay--claro' : 'chat-overlay'} onClick={() => setIsOpen(false)}></div>}
    <div className={tono === 'claro' ? 'chat-widget chat-widget--claro' : 'chat-widget'}>
      {isOpen && (
        <div className="chat-window">

          <div className="chat-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="chat-header-dot"></div>
              <div style={{ fontSize: '15px', fontWeight: '600' }}>{t.nombre}</div>
            </div>
            <button type="button" onClick={handleClearChat} className="chat-clear-btn">
              {t.limpiar}
            </button>
          </div>

          <div className="chat-messages" ref={listaRef}>
            {messages.map((msg, index) => (
              <div key={index} className={msg.role === 'bot' ? 'msg-bot' : 'msg-user'} style={{ whiteSpace: 'pre-wrap' }}>
                {/* El saludo se elige según la página actual: la conversación se mantiene al cambiar de página */}
                {renderMessageWithLinks(index === 0 ? (sinBotonDiagnostico ? t.saludoSinDiagnostico : t.saludo) : msg.text)}
              </div>
            ))}
            {isLoading && <div className="msg-bot" style={{ opacity: 0.5 }}>{t.escribiendo}</div>}

            {/* DIAGNÓSTICO SEO GRATIS (solo con web) o WEB NUEVA (sin web): los datos van al panel (tabla leads_web) */}
            {!leadEnviado && (formAbierto ? (
              <form ref={formRef} onSubmit={enviarDiagnostico} style={tarjeta} noValidate>
                <div style={{ display: 'flex', gap: '6px', marginBottom: '10px' }} role="group" aria-label={t.grupoWeb}>
                  <button type="button" style={opcion(tieneWeb)} aria-pressed={tieneWeb} onClick={() => { setTieneWeb(true); setErrorForm(''); }}>{t.tengoWeb}</button>
                  <button type="button" style={opcion(!tieneWeb)} aria-pressed={!tieneWeb} onClick={() => { setTieneWeb(false); setErrorForm(''); }}>{t.noTengoWeb}</button>
                </div>
                <div style={{ fontWeight: 700, marginBottom: '4px' }}>{tieneWeb ? t.tituloDiagnostico : t.tituloWebNueva}</div>
                <div style={{ fontSize: '14px', color: 'var(--text-2)', marginBottom: '10px', lineHeight: 1.45 }}>
                  {tieneWeb ? t.textoDiagnostico : t.textoWebNueva}
                </div>
                <input style={campo} aria-label={t.nombrePh} placeholder={t.nombrePh} autoComplete="name"
                  value={datos.nombre} onChange={(e) => setDatos({ ...datos, nombre: e.target.value })} />
                <input style={campo} aria-label={tieneWeb ? t.webAria : t.instagramPh} placeholder={tieneWeb ? t.webPh : t.instagramPh}
                  value={datos.web} onChange={(e) => setDatos({ ...datos, web: e.target.value })} />
                <input style={campo} aria-label={t.whatsappAria} placeholder={t.whatsappPh} type="tel" autoComplete="tel"
                  value={datos.whatsapp} onChange={(e) => setDatos({ ...datos, whatsapp: e.target.value })} />
                {/* Campo trampa para bots: oculto a las personas */}
                <input tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                  value={datos.empresa_web} onChange={(e) => setDatos({ ...datos, empresa_web: e.target.value })} />
                {errorForm && <div role="alert" style={{ color: 'var(--chat-error, #FCA5A5)', fontSize: '14px', marginBottom: '8px' }}>{renderMessageWithLinks(errorForm)}</div>}
                <button type="submit" style={{ ...botonPrincipal, opacity: enviando ? 0.6 : 1 }} disabled={enviando}>
                  {enviando ? t.enviando : (tieneWeb ? t.quieroDiagnostico : t.quieroWeb)}
                </button>
                <button type="button" onClick={() => setFormAbierto(false)} style={{ background: 'none', border: 'none', color: 'var(--text-2)', fontSize: '13px', marginTop: '6px', cursor: 'pointer', width: '100%' }}>
                  {t.preguntarPrimero}
                </button>
              </form>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignSelf: 'stretch' }}>
                {!sinBotonDiagnostico && (
                  <button type="button" onClick={() => { setTieneWeb(true); setErrorForm(''); setFormAbierto(true); }} style={botonPrincipal}>
                    {t.pedirDiagnostico}
                  </button>
                )}
                <button type="button" onClick={() => { setTieneWeb(false); setErrorForm(''); setFormAbierto(true); }} style={botonSecundario}>
                  {t.noTengoWebQuiero}
                </button>
              </div>
            ))}
          </div>

          {/* Con el formulario abierto no se muestra: así cabe entero (botón incluido) y no hay dos sitios donde escribir.
              «Prefiero preguntar primero» lo cierra y vuelve la barra */}
          {!(formAbierto && !leadEnviado) && (
          <div className="chat-input-area">
            <input
              type="text"
              aria-label={t.mensajeAria}
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t.mensajePh}
            />
            <button type="button" onClick={handleSend} className="chat-send-btn" aria-label={t.enviarAria}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
          )}

        </div>
      )}

      <button type="button" className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? t.cerrar : t.abrir}>
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
