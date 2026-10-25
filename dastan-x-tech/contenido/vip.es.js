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
    // Con el enlace personal (/vip?para=Negocio) sustituye a la etiqueta
    para: 'Propuesta privada para {para}',
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
  // Todos los botones abren WhatsApp con este mensaje ya escrito (el cupón se añade si está aplicado)
  whatsapp: {
    servicio: 'Hola, vi la propuesta VIP y quiero contratar: {servicio} ({precio}).',
    cupon: ' Cupón: {cupon}.',
  },
  ariaPedir: 'Pedir {titulo} ({precio}) por WhatsApp',
  mes: '/mes',
  // Orden de la tabla: de menor a mayor precio (los precios están en Vip.jsx, por id)
  paquetes: [
    {
      id: 'web',
      titulo: 'Diseño web',
      texto: 'Una web profesional que transmite confianza, presenta tus trabajos y respalda precios más altos.',
      boton: 'Quiero mi web nueva',
      incluye: ['Elige entre 8 estilos de diseño, desde líneas limpias y corporativas hasta experiencias inmersivas en 3D con animación al desplazarte', 'Tu identidad de marca aplicada: logotipo, colores, fotografías y precios reales', 'Corrección de los 5 problemas detectados en tu web actual', 'Optimizada para móvil, preparada para Google y lista para publicar'],
    },
    {
      id: 'aeo',
      titulo: 'Posicionamiento AEO',
      texto: 'Preparamos tu negocio para que asistentes de IA como ChatGPT y Gemini recomienden tus servicios.',
      boton: 'Quiero aparecer en la IA',
      incluye: ['Ficha de Google ordenada', 'Contenido que la IA puede citar', 'Reseñas y señales de confianza', 'Revisamos y mejoramos tu nota en Is It Agent Ready, la prueba de Cloudflare para agentes de IA', 'Necesita una web en buen estado'],
    },
    {
      id: 'auditoria',
      titulo: 'Auditoría Completa',
      texto: 'Revisamos tu negocio por fuera y por dentro para ver dónde pierdes tiempo y dinero.',
      boton: 'Quiero mi auditoría',
      incluye: ['Por fuera: web, redes, anuncios, reseñas y competencia', 'Por dentro: procesos y herramientas, con un cuestionario breve o una entrevista de 20-30 minutos', 'Incoherencias costosas entre ambas mitades', 'Horas al mes recuperables y plan de acción por fases'],
    },
  ],
  pack: {
    titulo: 'Pack completo',
    texto: 'Los tres servicios juntos. ¿Ya contrataste alguno? Te cobramos solo la diferencia.',
    ahorro: 'Ahorras {monto} USD',
    ahorroCupon: 'Ahorras {monto} USD con tu cupón',
    boton: 'Quiero el pack completo',
    recomendado: 'Recomendado',
    auditoriaIncluye: ['Mapa de procesos con simbología BPMN', 'Oportunidades de IA y tecnología', 'Estudio de vulnerabilidades', 'Plan de implementación por fases'],
  },
  expres: {
    titulo: 'Arreglo exprés',
    texto: '¿Ya tienes web y quieres algo rápido? Aplicamos en 48 h las 5 correcciones más urgentes de tu diagnóstico. Si contratas el Diseño web en los 30 días siguientes, te descontamos lo que pagaste: pídelo por WhatsApp.',
    boton: 'Quiero el arreglo en 48 h',
  },
  // Pago en pesos: los datos (CLABE y titular) nunca van en la página, se mandan por WhatsApp
  mexico: {
    titulo: '¿Estás en México?',
    texto: 'Paga en pesos mexicanos (MXN) por transferencia SPEI:',
    recepcionista: 'Recepcionista virtual',
    recepcionistaPrecio: '$2,900 + $750/mes',
    chat: 'Chat automático 24 h',
    chatPrecio: '$300/mes',
    membresiaPrecio: '$3,800/mes',
    boton: 'Pedir datos de pago por WhatsApp',
    mensaje: 'Hola, vi la propuesta VIP. Estoy en México y quiero pagar en pesos por SPEI.',
  },
  dudas: '¿No sabes cuál elegir?',
  preguntaLex: 'Pregúntale a Lex',
  mensajeLex: 'No sé qué paquete elegir.',
  pago: 'Al pulsar el botón nos escribes por WhatsApp: resolvemos tus dudas y te mandamos los datos de pago, por transferencia SPEI en México o PayPal desde cualquier país. En cuanto se confirma el pago, empezamos y te enviamos el comprobante.',
  condiciones: { antes: 'Al contratar aceptas nuestras', enlace: 'condiciones de compra' },
  mensuales: 'Servicios mensuales',
  mensualidad: 'Sin permanencia ni cargos automáticos. Cada mes te enviamos el cobro por WhatsApp; si un mes no lo pagas, el servicio se pausa y listo.',
  pedirWhatsapp: 'Pedir por WhatsApp',
  // Se piden por WhatsApp porque se cobran cada mes
  complementos: [
    { titulo: 'Chat automático 24 h en tu web', precio: '15 USD/mes', texto: 'Responde dudas las 24 h y guarda el nombre y el WhatsApp de quien pregunta. Incluido en la Membresía si encaja con tu negocio.', mensaje: 'Hola, vi la propuesta VIP y me interesa el Chat automático 24 h para mi web.' },
    { titulo: 'Recepcionista virtual por WhatsApp', precio: '150 USD + 39 USD/mes', texto: 'Atiende tu WhatsApp las 24 h, resuelve dudas y guarda los datos de cada cliente. Se instala en un número secundario del negocio.', mensaje: 'Hola, vi la propuesta VIP y me interesa la Recepcionista virtual por WhatsApp.' },
  ],
  membresia: {
    titulo: 'Membresía de Implementación',
    texto: 'Aplicamos cada mes el plan de acción de tu Auditoría Completa, sin que tengas que coordinar nada.',
    requisito: <>Requiere haber hecho la <strong>Auditoría Completa</strong>: es el plan que aplicamos cada mes.</>,
    incluye: [
      '6 h de trabajo por semana',
      'Chat automático 24 h en tu web incluido, si encaja con tu negocio',
      'Automatizaciones: recordatorios, seguimiento de presupuestos y reseñas',
      'A elegir dentro de tus horas: análisis de YouTube, de marca personal o de tienda online, y dashboard de facturas',
      'Prioridad de respuesta sobre clientes sin membresía',
    ],
    boton: 'Quiero la membresía',
  },
  pie: ['Esta es una propuesta privada. Por favor, no compartas este enlace.', 'Dastan Tamayo e Isdiel Martínez · DASTAN X-TECH'],
};

export default t;
