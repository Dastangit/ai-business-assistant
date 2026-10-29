'use client';

// Botón que abre el chat con una pregunta ya escrita, para usarlo en páginas que se generan en el servidor (como /servicios).
// Con «respuesta», el chat muestra ese texto fijo en lugar de preguntarle a la IA
export default function BotonChat({ mensaje, respuesta, className = 'btn btn-suave', children }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: respuesta ? { pregunta: mensaje, respuesta } : mensaje }))}
    >
      {children}
    </button>
  );
}
