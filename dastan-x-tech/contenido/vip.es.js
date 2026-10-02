// Textos de /vip (español). Si cambias algo aquí, cambia lo mismo en vip.en.js.
// Solo datos: nada de funciones. Las cifras van como marcadores {x} y las rellena components/paginas/Vip.jsx;
// los precios viven en ese componente (deben coincidir con PRECIOS de app/api/chat/route.js).
const t = {
  hero: {
    etiqueta: 'Acceso privado · DASTAN X-TECH',
    titulo: <>Presencia digital <br/> <span style={{ color: 'var(--brand)' }}>en tu área local</span></>,
    texto: <>Cada vez más clientes buscan en Google o le preguntan a una IA antes de contratar un servicio. Si tu negocio no tiene una presencia digital de autoridad, <strong style={{ color: 'var(--text)' }}>tu competencia se está quedando con tus clientes.</strong> Esta es nuestra propuesta exclusiva para blindar tu negocio.</>,
    whatsappDiagnostico: 'Hola, recibí la invitación VIP y quiero mi diagnóstico SEO gratis.',
    botonDiagnostico: 'Pedir diagnóstico SEO gratis',
  },
  plan: <>Plan de <span style={{ color: 'var(--brand)' }}>implementación</span></>,
  cupon: {
    etiqueta: 'Introducir Cupón de descuento',
    placeholder: 'Código',
    nota: 'Solo para usuarios VIP',
    aplicado: '✓ Cupón aplicado',
    conDescuento: 'Precios con descuento VIP incluido.',
  },
  recibes: 'Recibes',
  incluye: 'Incluye',
  contratar: 'Contratar',
  ariaContratar: 'Contratar {titulo} por ${precio} USD',
  // Orden de la tabla: de menor a mayor precio (los precios están en Vip.jsx, por id)
  paquetes: [
    {
      id: 'web',
      titulo: 'Diseño web',
      texto: 'Una web que proyecta confianza, muestra tus trabajos y justifica precios más altos.',
      incluye: ['Tu web reconstruida como experiencia 3D de scroll inmersivo', 'Con tu branding real: logo, colores, fotos y precios', 'Diagnóstico de 5 problemas de tu web actual', 'Entrega lista para publicar'],
    },
    {
      id: 'aeo',
      titulo: 'Posicionamiento AEO',
      texto: 'Preparamos tu negocio para que asistentes de IA como ChatGPT y Gemini recomienden tus servicios.',
      incluye: ['Ficha de Google ordenada', 'Contenido que la IA puede citar', 'Reseñas y señales de confianza', 'Necesita una web en buen estado'],
    },
    {
      id: 'auditoria',
      titulo: 'Auditoría Completa de Negocio',
      texto: 'Revisamos tu negocio por fuera y por dentro para ver dónde pierdes tiempo y dinero.',
      incluye: ['Por fuera: web, redes, anuncios, reseñas y competencia', 'Por dentro: procesos y herramientas (36 preguntas)', 'Incoherencias costosas entre ambas mitades', 'Horas al mes recuperables y plan de acción por fases'],
    },
  ],
  pack: {
    titulo: 'Pack completo',
    texto: 'Los tres servicios juntos. ¿Ya contrataste alguno? Pagas solo la diferencia.',
    ahorro: 'Ahorras ${monto}',
    ahorroCupon: 'Ahorras ${monto} con tu cupón',
    boton: 'Contratar el pack',
    aria: 'Contratar el Pack completo por ${precio} USD',
  },
  expres: {
    titulo: 'Arreglo exprés',
    texto: '¿Ya tienes web y quieres algo rápido? Aplicamos en 48 h las 5 correcciones más urgentes de tu diagnóstico. Si contratas el Diseño web en los 30 días siguientes, te lo descontamos.',
    aria: 'Contratar el Arreglo exprés por ${precio} USD',
  },
  dudas: '¿No sabes cuál elegir?',
  preguntaLex: 'Pregúntale a Lex',
  mensajeLex: 'No sé qué paquete elegir.',
  otroPago: 'Si necesita otro método de pago, contáctenos por',
  mensuales: 'Servicios mensuales',
  pedirWhatsapp: 'Pedir por WhatsApp',
  // Se piden por WhatsApp porque se facturan cada mes
  complementos: [
    { titulo: 'Chat IA en tu web', precio: '$15/mes', texto: 'Responde dudas las 24 h y guarda el nombre y el WhatsApp de quien pregunta. Incluido en la Membresía si encaja con tu negocio.', mensaje: 'Hola, vi la propuesta VIP y me interesa el Chat IA para mi web.' },
    { titulo: 'Recepcionista IA por WhatsApp', precio: '$150 + $39/mes', texto: 'Atiende tu WhatsApp las 24 h, resuelve dudas y guarda los datos de cada cliente. Se instala en un número secundario del negocio.', mensaje: 'Hola, vi la propuesta VIP y me interesa la Recepcionista IA por WhatsApp.' },
  ],
  membresia: {
    titulo: 'Membresía de Implementación',
    precio: '$200/mes',
    texto: 'Aplicamos cada mes el plan de acción de tu Auditoría Completa, sin que tengas que coordinar nada. Mínimo 2 meses.',
    incluye: [
      '24 h de desarrollo al mes',
      'Chat IA en tu web incluido, si encaja con tu negocio',
      'Automatizaciones: recordatorios, seguimiento de presupuestos y reseñas',
      'A elegir dentro de tus horas: análisis de YouTube, de marca personal o de tienda online, y dashboard de facturas',
      'Prioridad de respuesta sobre clientes sin membresía',
    ],
    boton: 'Pagar el primer mes',
    aria: 'Pagar el primer mes de la Membresía de Implementación por ${precio} USD',
    nota: 'Los meses siguientes te los cobramos cada mes.',
  },
  pie: ['Esta es una propuesta privada. Por favor, no comparta este enlace.', '© 2026 DASTAN X-TECH'],
};

export default t;
