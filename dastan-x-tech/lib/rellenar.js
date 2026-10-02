// Sustituye marcadores {nombre} de los textos de contenido/*.js (que no pueden llevar funciones)
export function rellenar(texto, valores) {
  return String(texto).replace(/\{(\w+)\}/g, (marca, nombre) => (nombre in valores ? String(valores[nombre]) : marca));
}
