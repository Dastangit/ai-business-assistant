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
    { clave: 'auditoria', title: 'Auditoría Completa', tagline: 'Sabemos exactamente dónde tu negocio pierde tiempo y dinero.' },
    { clave: 'aeo', title: 'Posicionamiento AEO', tagline: 'Que la Inteligencia Artificial recomiende tu negocio, no solo Google.' },
  ],
  verDetalle: 'Ver detalle →',
  // Deben coincidir con el chat (app/api/chat/route.js) y public/llms.txt
  extras: {
    etiqueta: 'Bajo pedido',
    titulo: 'También ofrecemos',
    // Agrupados como en la carta de servicios. Lo que ya tiene precio en otra parte (Recepcionista, Instagram a Web) no va aquí
    grupos: [
      {
        titulo: 'Automatización e IA',
        items: [
          { title: 'Automatizaciones con n8n y Make', text: 'conectamos tus herramientas para que las tareas repetidas (avisos, registros, seguimientos) se hagan solas.' },
          { title: 'Chatbots y agentes de IA', text: 'asistentes para tu web o tu equipo que responden y ejecutan tareas con tu información.' },
          { title: 'CRM y prospección', text: 'ordenamos tus contactos en un CRM y montamos la búsqueda de clientes nuevos.' },
          { title: 'Dashboard de facturas', text: 'leemos tus facturas en PDF y te damos un panel con ingresos, gastos, impuestos, balance y tus mejores clientes.' },
        ],
      },
      {
        titulo: 'Redes y contenido',
        items: [
          { title: 'Análisis de marca personal', text: 'revisamos tu marca en cuatro fases (¿te encuentran, te entienden, te creen, te contratan?), te decimos dónde se te escapa la gente y qué hacer los próximos 30 días.' },
          { title: 'Auditoría de Meta Ads', text: 'revisamos tus anuncios activos de Facebook e Instagram y las páginas a las que llevan, y te damos correcciones concretas de texto, oferta y seguimiento.' },
          { title: 'Edición de video', text: 'editamos tus vídeos para redes sociales, con subtítulos y animaciones, listos para publicar.' },
          { title: 'Análisis de canal de YouTube', text: 'miniaturas, títulos, ganchos y los vídeos que mejor te funcionan; te decimos dónde se va la gente y qué grabar después.' },
        ],
      },
      {
        titulo: 'E-commerce',
        items: [
          { title: 'Análisis de tienda online', text: 'recorremos tu tienda como un comprador hasta el pago y te decimos por dónde se escapan las ventas y cuánto cuesta cada fuga.' },
        ],
      },
    ],
    nota: 'Se piden sueltos, con precio según cada caso. Si tienes la Membresía de Implementación, los eliges dentro de tus horas del mes.',
    mensajeChat: 'Quiero información sobre los servicios bajo pedido',
    // Respuesta fija del chat a ese botón (no pasa por la IA): no repite la lista que la persona acaba de ver
    respuestaChat: 'Los servicios bajo pedido son tareas concretas que puedes elegir dentro de una membresía o contratar de forma puntual. Si quieres saber más sobre alguno de estos, envíanos un mensaje al WhatsApp +1 605-500-3653 y con gusto te explicamos los detalles.',
    boton: 'Preguntar por un servicio',
  },
};

export default t;
