"use client";
import { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Saludo oficial inicial
  const [messages, setMessages] = useState([
    { 
      role: 'bot', 
      text: '¡Hola! Soy la IA de DASTAN X-TECH. Nos especializamos en servicios online. ¿Cómo puedo ayudarte?' 
    }
  ]);

  // Función para limpiar el chat visualmente
  const handleClearChat = () => {
    setMessages([
      { 
        role: 'bot', 
        text: '¡Hola! Soy la IA de DASTAN X-TECH. Nos especializamos en servicios online. ¿Cómo puedo ayudarte?' 
      }
    ]);
  };

  // Función de envío de mensajes al servidor
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });
      
      const data = await response.json();
      setMessages([...newMessages, { role: 'bot', text: data.reply }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'bot', text: 'Error de conexión. Nuestro sistema está en mantenimiento.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Lupa inteligente para transformar texto en enlaces interactivos (Telegram y WhatsApp)
  const renderMessageWithLinks = (text) => {
    if (!text) return "";
    const parts = text.split(/(@lexdats_bot|@Datspro|\+16055003653)/g);
    
    return parts.map((part, index) => {
      if (part === '@lexdats_bot') {
        return (
          <a key={index} href="https://t.me/lexdats_bot" target="_blank" rel="noopener noreferrer" style={{ color: '#0088cc', textDecoration: 'underline', fontWeight: 'bold' }}>
            {part}
          </a>
        );
      }
      if (part === '@Datspro') {
        return (
          <a key={index} href="https://t.me/Datspro" target="_blank" rel="noopener noreferrer" style={{ color: '#0088cc', textDecoration: 'underline', fontWeight: 'bold' }}>
            {part}
          </a>
        );
      }
      if (part === '+16055003653') {
        return (
          <a key={index} href="https://wa.me/16055003653" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'underline', fontWeight: 'bold' }}>
            WhatsApp (+1 605-500-3653)
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-window">
          
          {/* Cabecera del chat con título y botón de limpiar */}
          <div className="chat-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="chat-header-dot"></div>
              <div style={{ fontSize: '15px', fontWeight: '600' }}>DASTAN AI Assistant</div>
            </div>
            <button 
              onClick={handleClearChat}
              className="chat-clear-btn"
            >
              Limpiar
            </button>
          </div>
          
          {/* Contenedor de mensajes con soporte de saltos de línea */}
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={msg.role === 'bot' ? 'msg-bot' : 'msg-user'}
                style={{ whiteSpace: 'pre-wrap' }}
              >
                {renderMessageWithLinks(msg.text)}
              </div>
            ))}
            {isLoading && (
              <div className="msg-bot" style={{ opacity: 0.5 }}>Escribiendo...</div>
            )}
          </div>
          
          {/* Área de escritura y envío */}
          <div className="chat-input-area">
            <input 
              type="text"
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe tu mensaje..."
            />
            <button onClick={handleSend} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '0 8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
          
        </div>
      )}
      
      {/* Botón flotante para abrir y cerrar el widget */}
      <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
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
  );
}