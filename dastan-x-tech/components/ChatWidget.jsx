"use client";
import { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // 1. Estado inicial con tu saludo oficial
  const [messages, setMessages] = useState([
    { 
      role: 'bot', 
      text: '¡Hola! En X-TECH nos especializamos en servicios online, Crecimiento de Negocios privados y Pymes, Suscripciones Premium, Números Privados y más. ¿Qué área te interesa explorar hoy?' 
    }
  ]);

  // 2. Función para limpiar el chat (solo frontend)
  const handleClearChat = () => {
    setMessages([
      { 
        role: 'bot', 
        text: '¡Hola! En X-TECH nos especializamos en servicios online, Crecimiento de Negocios privados y Pymes, Suscripciones Premium, Números Privados y más. ¿Qué área te interesa explorar hoy?' 
      }
    ]);
  };

  // 3. Función de envío de mensajes
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

  // 4. Lupa detectora de enlaces de Telegram
  const renderMessageWithLinks = (text) => {
    if (!text) return "";
    const parts = text.split(/(@lexdats_bot|@Datspro)/g);
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
      return part;
    });
  };

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-window">
          
          {/* CABECERA CON EL BOTÓN DE LIMPIAR */}
          <div className="chat-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="chat-header-dot"></div>
              <div style={{ fontSize: '15px', fontWeight: '600' }}>DASTAN AI Assistant</div>
            </div>
            <button 
              onClick={handleClearChat}
              style={{
                backgroundColor: '#F5F4EF',
                color: '#1C2624',
                border: '1px solid #1C2624',
                borderRadius: '4px',
                padding: '4px 8px',
                fontSize: '12px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              🗑️ Limpiar
            </button>
          </div>
          
          {/* ZONA DE MENSAJES CON SALTOS DE LÍNEA */}
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
          
          {/* ÁREA DE ENTRADA DE TEXTO */}
          <div className="chat-input-area">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe tu mensaje..."
            />
            <button onClick={handleSend}>Enviar</button>
          </div>
          
        </div>
      )}
      
      {/* BOTÓN FLOTANTE PARA ABRIR/CERRAR EL CHAT */}
      <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>
    </div>
  );
}