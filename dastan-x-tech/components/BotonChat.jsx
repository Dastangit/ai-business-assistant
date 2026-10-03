'use client';

// Botón que abre el chat con una pregunta ya escrita, para usarlo en páginas que se generan en el servidor (como /servicios)
export default function BotonChat({ mensaje, className = 'btn btn-suave', children }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: mensaje }))}
    >
      {children}
    </button>
  );
}
