"use client";
import { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: '¡Hola! Soy la IA de DASTAN X-TECH. ¿En qué puedo ayudarte a automatizar tu negocio hoy?' }
  ]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Esta es la ruta de Node.js que crearemos en el siguiente paso
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

  const renderMessageWithLinks = (text) => {
    if (!text) return "";
    
    // El código separa el texto cada vez que encuentra tus usuarios
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
      // Si no es un usuario, simplemente devuelve el texto normal
      return part;
    });
  };

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-dot"></div>
            <div style={{ fontSize: '15px', fontWeight: '600' }}>DASTAN AI Assistant</div>
          </div>
          
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
          
          <div className="chat-input-area">
            <input 
              type="text" 
              className="chat-input" 
              placeholder="Escribe tu mensaje..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              disabled={isLoading}
            />
            <button className="chat-send" onClick={handleSend} disabled={isLoading}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>
        </div>
      )}
      
      <button className="chat-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 16.5a2.5 2.5 0 01-2.5 2.5H7l-4 4V6a2.5 2.5 0 012.5-2.5h14A2.5 2.5 0 0121 6v10.5z" />
          </svg>
        )}
      </button>
    </div>
  );
}