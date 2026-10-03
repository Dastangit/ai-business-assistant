// Textos de /servicios (español). Si cambias algo aquí, cambia lo mismo en servicios.en.js.
// Solo datos: nada de funciones (se pasan de servidor a cliente).
const t = {
  metadata: {
    title: 'Nuestros Servicios | DASTAN X-TECH',
    description: 'Diseño web, Auditoría Completa de Negocio y Posicionamiento AEO: tres servicios para que tu negocio no pierda ni un cliente.',
    keywords: ['Servicios DASTAN X-TECH', 'Diseño web profesional', 'Auditoría de negocio', 'Posicionamiento AEO'],
    ogTitle: 'Nuestros Servicios | DASTAN X-TECH',
    ogDescription: 'Diseño web, Auditoría Completa de Negocio y Posicionamiento AEO: tres servicios para que tu negocio no pierda ni un cliente.',
  },
  etiqueta: 'Servicios',
  titulo: <>Tres servicios pensados para que tu negocio <span className="accent-light">no pierda ni un cliente</span></>,
  subtitulo: 'Cada decisión, en cada servicio, parte de la misma pregunta: ¿esto ayuda de verdad a este negocio?',
  tarjetas: [
    { clave: 'disenoWeb', title: 'Diseño web', tagline: 'Renovamos tu web actual con tu marca real, en menos de 48 horas.' },
    { clave: 'auditoria', title: 'Auditoría Completa de Negocio', tagline: 'Sabemos exactamente dónde tu negocio pierde tiempo y dinero.' },
    { clave: 'aeo', title: 'Posicionamiento AEO', tagline: 'Que la Inteligencia Artificial recomiende tu negocio, no solo Google.' },
  ],
  verDetalle: 'Ver detalle →',
  // Deben coincidir con el chat (app/api/chat/route.js) y public/llms.txt
  extras: {
    etiqueta: 'Bajo pedido',
    titulo: 'También hacemos',
    items: [
      { title: 'Análisis de canal de YouTube', text: 'miniaturas, títulos, ganchos y los vídeos que mejor te funcionan; te decimos dónde se va la gente y qué grabar después.' },
      { title: 'Análisis de marca personal', text: 'tu perfil, tu contenido, tu autoridad y el camino hasta que te contratan, con qué hacer los próximos 30 días.' },
      { title: 'Análisis de tienda online', text: 'recorremos tu tienda como un comprador hasta el pago y te decimos por dónde se escapan las ventas y cuánto cuesta cada fuga.' },
      { title: 'Dashboard de facturas', text: 'leemos tus facturas en PDF y te damos un panel con ingresos, gastos, impuestos, balance y tus mejores clientes.' },
    ],
    nota: 'Se piden sueltos, con precio según cada caso. Si tienes la Membresía de Implementación, los eliges dentro de tus horas del mes.',
    mensajeChat: 'Quiero información sobre los servicios bajo pedido',
    boton: 'Preguntar por un servicio',
  },
};

export default t;
