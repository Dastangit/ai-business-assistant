// Textos de /servicios/auditoria-negocio (español). Si cambias algo aquí, cambia lo mismo en auditoria.en.js.
// Solo datos: nada de funciones (se pasan de servidor a cliente).
const t = {
  metadata: {
    title: 'Auditoría Completa de Negocio | DASTAN X-TECH',
    description: 'Descubrimos dónde tu negocio pierde tiempo y clientes, con evidencia real, no suposiciones. Informe con presencia digital, madurez tecnológica y plan de acción.',
    keywords: ['Auditoría de negocio', 'Auditoría completa de negocio', 'Auditoría SEO', 'Diagnóstico de negocio', 'Consultoría de IA'],
    ogTitle: 'Auditoría Completa de Negocio | DASTAN X-TECH',
    ogDescription: 'Diagnóstico completo de presencia digital y procesos internos, con evidencia real y un plan de acción por fases.',
  },
  servicioJsonLd: {
    name: 'Auditoría Completa de Negocio',
    serviceType: 'Auditoría de negocio y consultoría de IA',
    description: 'Auditoría completa de presencia digital (web, redes, ficha de Google, reseñas, competencia) y procesos internos (captación, agenda, cobro, herramientas). Entrega una nota de presencia digital, nivel de madurez tecnológica, horas y dinero recuperable al mes, y un plan de acción por fases.',
    areaServed: ['Colombia', 'México', 'Estados Unidos'],
  },
  hero: {
    etiqueta: 'Servicio · Auditoría completa',
    titulo: <>Descubre dónde tu negocio <span className="accent-light">pierde dinero</span>.</>,
    texto: 'Analizamos tu negocio por fuera (web, redes, Google, reseñas, competencia) y por dentro (agenda, cobros, herramientas, horas perdidas), y cruzamos ambas mitades para encontrar las inconsistencias que más te cuestan.',
    mensajeChat: 'Quiero información sobre la Auditoría Completa de Negocio',
    boton: 'Consultar Auditoría Completa',
    tarjetaTitulo: 'Qué recibes',
    tarjetaItems: ['Presencia digital sobre 100', 'Madurez tecnológica sobre 5', 'Análisis de procesos', 'Plan de acción por fases'],
  },
  ventajas: {
    titulo: <>Evidencia real, no <span className="accent-light">suposiciones</span></>,
    items: [
      { titulo: 'Por fuera y por dentro', texto: 'Revisamos tu web, redes, anuncios activos, ficha de Google, reseñas y competencia — todo lo que un cliente ve antes de escribirte. Después miramos cómo gestionas la agenda, el cobro y qué herramientas usas por dentro.' },
      { titulo: 'Informe con cifras accionables', texto: 'Cada hallazgo respaldado por evidencia real — nada inventado — y un plan de acción por fases con una estimación de las horas y el dinero que podrías recuperar cada mes.' },
    ],
  },
  // Ejemplo completo (public/ejemplo-auditoria-completa.html): hecho con un negocio ficticio, por eso «Ejemplo» y no «Ejemplo real»
  informe: {
    etiqueta: 'Ejemplo',
    titulo: 'Así es el informe que recibes',
    texto: 'Hicimos una auditoría completa a una clínica dental inventada para que veas qué entregamos: las dos notas, lo que no cuadra entre lo que promete y lo que hace, sus procesos dibujados paso a paso, la revisión de seguridad y el plan por fases.',
    boton: 'Ver una auditoría de ejemplo',
    enlaceSeo: 'Ver también el diagnóstico SEO de ejemplo →',
  },
  // Después de la auditoría: sin precios en el cuerpo, como el resto de la página (van en las preguntas frecuentes).
  // Deben coincidir con OTROS de app/api/chat/route.js y public/llms.txt
  automatizar: {
    titulo: <>Y después, lo <span className="accent-light">automatizamos</span></>,
    intro: 'El análisis de procesos de la auditoría te dice dónde se te van las horas. Si quieres, después lo resolvemos nosotros: siempre en tus propias cuentas y con herramientas gratuitas siempre que se pueda.',
    items: [
      'Un CRM para que ningún cliente se quede sin respuesta: cada contacto de tu web, registrado y con su seguimiento.',
      'Recordatorios de citas, seguimiento de presupuestos y petición de reseñas, funcionando solos.',
      'Atención a cualquier hora con IA, en tu web y en tu WhatsApp.',
    ],
    caminos: [
      { etiqueta: 'Automatización puntual', titulo: 'Una sola cosa, resuelta', texto: 'Por ejemplo, instalar tu CRM y conectarlo al formulario de tu web, o un recordatorio automático de citas. Pago único y sin mantenimiento.', boton: 'Quiero una automatización', mensajeChat: 'Quiero información sobre una automatización puntual para mi negocio', estilo: 'btn btn-suave' },
      { etiqueta: 'Membresía de Implementación', titulo: 'Cada mes, lo que más te convenga', texto: '24 horas de trabajo al mes aplicando el plan de tu auditoría: automatizamos lo que más tiempo te ahorra, sin que tengas que coordinar nada.', boton: 'Quiero la Membresía', mensajeChat: 'Quiero información sobre la Membresía de Implementación', estilo: 'btn btn-outline-light' },
    ],
  },
  faqTitulo: 'Preguntas frecuentes',
  faq: [
    { q: '¿Necesitan acceso a mis sistemas o cuentas para auditar mi negocio?', a: 'No. Auditamos lo público (tu web, redes, ficha de Google, reseñas, competencia) y lo que nos cuentas en un formulario corto sobre cómo funciona tu negocio por dentro. Nunca pedimos entrar en tus programas, paneles ni cuentas.' },
    { q: '¿Qué recibo al final de la auditoría?', a: 'Un informe único con dos cifras claras: tu presencia digital sobre 100 y tu madurez tecnológica sobre 5, cada hallazgo respaldado por evidencia real, y un plan de acción por fases con una estimación de cuánto tiempo y dinero podrías recuperar cada mes.' },
    { q: '¿Es una auditoría genérica o hecha para mi negocio?', a: 'Cada hallazgo va acompañado de una evidencia real de tu negocio — una frase de tu web, una reseña con fecha, una respuesta tuya — nunca una plantilla ni un dato inventado.' },
    { q: '¿Cuánto cuesta la Auditoría Completa de Negocio?', a: 'Desde 200 USD. Es nuestro servicio más completo y no incluye la web: si además quieres web nueva y que la IA te recomiende, el Pack completo (Auditoría + Diseño web + AEO) cuesta 400 USD. El precio final depende del tamaño de tu negocio y te lo confirmamos antes de empezar. El diagnóstico SEO gratis es aparte y solo revisa tu web.' },
    { q: '¿Me ayudan a aplicar lo que encuentre la auditoría?', a: 'Sí, de dos formas. Con una automatización puntual, por 100 USD en un pago único: una sola cosa, como instalar un CRM gratuito y conectarlo al formulario de tu web, o un recordatorio automático de citas. O con la Membresía de Implementación, por 200 USD al mes (mínimo 2 meses): 24 horas de trabajo al mes aplicando el plan de la auditoría, con las automatizaciones que más convengan a tu negocio. Todo se instala en tus propias cuentas.' },
  ],
  cierre: {
    titulo: '¿Quieres saber qué te está costando dinero?',
    texto: 'Escríbenos y te mostramos exactamente dónde tu negocio está perdiendo tiempo y clientes. ¿Aún no lo tienes claro? Empieza por el diagnóstico SEO gratis de tu web: es la parte de fuera de la auditoría.',
    botonAuditoria: 'Consultar Auditoría Completa',
    mensajeChat: 'Quiero información sobre la Auditoría Completa de Negocio',
    botonDiagnostico: 'Pedir diagnóstico SEO gratis',
    whatsappTexto: 'Hola, vi la página de Auditoría Completa de Negocio y quiero más información.',
    whatsappEnlace: 'o escríbenos por WhatsApp →',
  },
};

export default t;
