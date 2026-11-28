// Textos de la portada (español). Si cambias algo aquí, cambia lo mismo en inicio.en.js.
// Solo datos: nada de funciones (se pasan de servidor a cliente).

const t = {
  nav: {
    principal: 'Principal',
    irInicio: 'DASTAN X-TECH, ir al inicio',
    servicios: 'Servicios',
    wa: 'Escríbenos por WhatsApp al +1 605-500-3653',
  },
  etiqueta: 'Consultoría digital, IA y automatizaciones',
  // El titular se parte en dos: la segunda parte va en el violeta de la marca
  titulo: 'Descubre, con pruebas, por qué tu negocio ',
  tituloDestacado: 'pierde clientes por internet.',
  subtitulo: 'Tu nota de 0 a 100 y las 5 correcciones más urgentes de tu web.',
  botonDiagnostico: 'Pide tu diagnóstico SEO gratis',
  puntos: ['Cada fallo, con su prueba', 'Sin pedirte contraseñas', '100 % en remoto'],
  // Línea de cabecera de la portada editorial (mono, encima del titular)
  // Sin la marca: ya está en la cabecera de la web
  cabecera: ['Consultoría digital, IA y automatizaciones', 'México · España · EE. UU. · Colombia · Resto del mundo'],
  // Tarjeta a la derecha del hero: un trozo de public/ejemplo-diagnostico-seo.html (negocio ficticio) y el caso real del blog
  muestra: {
    aria: 'Ejemplo del diagnóstico SEO gratis',
    // Solo en móvil, al pie de la primera pantalla: el hueco no debe parecer el final de la página
    bajar: 'Mira un ejemplo del diagnóstico',
    etiqueta: 'Ejemplo · Diagnóstico SEO',
    nota: 32,
    deCien: 'de 100',
    negocio: 'Clínica Dental Olmedo',
    aviso: 'Negocio ficticio',
    urgentesTitulo: 'Los 5 problemas más urgentes',
    urgentes: ['Google no sabe qué hace la clínica ni dónde está', 'Google no la reconoce como negocio local', 'En el móvil, la web se sale de la pantalla'],
    enlace: 'Ver el ejemplo completo →',
    real: 'Caso real: nuestra propia web, de 77 a 91 →',
  },
  quienes: {
    etiqueta: 'Equipo',
    titulo: 'Quiénes *somos*',
    texto: <>Somos <strong>Dastan Tamayo</strong>, fundador de DASTAN X-TECH, e <strong>Isdiel Martínez</strong>, consultor y estratega digital. Trabajamos con negocios privados y pymes de cualquier sector —clínicas, spas, salones, servicios a domicilio, comercios, despachos— que hacen un buen trabajo pero no lo reflejan en internet: la web no convence, el WhatsApp no se ve o se contesta tarde, y cuando alguien le pregunta a una IA, recomienda a la competencia. Trabajamos 100 % en remoto con negocios de México, Colombia, Estados Unidos, España y el resto del mundo.</>,
    enlace: 'Nuestra historia →',
  },
  // Mismo orden que las fotos de components/paginas/Inicio.jsx: Dastan, Isdiel
  equipo: [
    { nombre: 'Dastan Tamayo', rol: 'Fundador de DASTAN X-TECH', alt: 'Dastan Tamayo, fundador de DASTAN X-TECH' },
    { nombre: 'Isdiel Martínez', rol: 'Consultor y estratega digital', alt: 'Isdiel Martínez, consultor y estratega digital de DASTAN X-TECH' },
  ],
  // Los precios (cerrados) deben coincidir con PRECIOS de app/api/chat/route.js.
  // price no sale en la portada (solo en /servicios); items sí, como lista de lo que incluye
  servicios: {
    etiqueta: 'Servicios',
    // No repite el titular del hero (que ya habla de perder clientes); /servicios conserva su frase
    titulo: 'Lo que hacemos por tu *negocio*',
    grupoWeb: 'Web y visibilidad',
    grupoIa: 'Automatización e IA',
    // Cinta móvil bajo la apertura: todos los servicios de un vistazo (la de IA lleva a /servicios)
    cinta: 'Nuestros servicios',
    cintaDiagnostico: 'Diagnóstico SEO gratis',
    todos: 'Ver todos los servicios y precios →',
    // Sin página propia: cada fila abre el chat con su pregunta. Nombres según lo que busca la gente (Semrush y Google, 28-nov-2026)
    ia: [
      { title: 'Asistente IA de WhatsApp', cta: 'Consultar precio', text: 'Una recepcionista virtual que contesta tu WhatsApp las 24 horas, en un número secundario de tu negocio.', mensaje: 'Quiero información sobre la recepcionista virtual por WhatsApp' },
      { title: 'Chatbot con IA para tu web', cta: 'Pruébalo aquí', text: 'Responde a cualquier hora las dudas de tus clientes con la información de tu negocio.', mensaje: 'Quiero información sobre el chat automático 24 h para mi web' },
      { title: 'Automatización de procesos con IA', cta: 'Cuéntanos tu caso', text: 'Recordatorios de citas, seguimiento de presupuestos y petición de reseñas que se hacen solos, con n8n y Make.', mensaje: 'Quiero automatizar procesos de mi negocio' },
      { title: 'CRM conectado a tu WhatsApp', cta: 'Ver qué incluye', text: 'Tus contactos ordenados en un CRM, unido a tu web y a tu WhatsApp, para no perder ningún cliente.', mensaje: 'Quiero información sobre un CRM para mi negocio' },
    ],
    tarjetas: [
      {
        clave: 'disenoWeb',
        label: '01 · Web',
        title: 'Diseño web',
        text: 'Renovamos tu web actual con tu marca real: tus servicios, tus precios y tu WhatsApp a un toque.',
        items: ['Diagnóstico honesto de tu web actual.', 'Web nueva, responsive, lista para publicar.', 'WhatsApp y teléfono siempre visibles.'],
        link: 'Saber más sobre Diseño web →',
        price: '100 USD',
      },
      {
        clave: 'auditoria',
        label: '02 · Auditoría',
        title: 'Auditoría Completa',
        text: 'Sabemos exactamente dónde tu negocio pierde tiempo y dinero, con evidencia, no suposiciones.',
        items: ['Presencia digital sobre 100.', 'Madurez tecnológica sobre 5.', 'Análisis de procesos.', 'Plan de acción por fases.'],
        link: 'Descubre la Auditoría de Negocio →',
        price: '200 USD',
      },
      {
        clave: 'aeo',
        label: '03 · IA y AEO',
        title: 'Posicionamiento AEO',
        text: 'Que la Inteligencia Artificial recomiende tu negocio, no solo las búsquedas en Google.',
        items: ['Ficha de Google y redes ordenadas.', 'Contenido citable por IA.', 'Reseñas y señales de confianza.'],
        link: 'Conoce el Posicionamiento AEO →',
        price: '150 USD',
      },
    ],
  },
  pruebas: {
    etiqueta: 'Pruebas',
    titulo: 'Lo probamos primero en *nuestra propia web*',
    a: 'pasó a',
    items: [
      { clave: 'blogDiagnosticoSeo', etiqueta: 'Diagnóstico SEO', antes: 77, despues: 91, texto: 'Pasamos nuestra web por el mismo diagnóstico que te mandamos gratis y corregimos lo que encontró.', enlace: 'Leer el caso →' },
      { clave: 'blogAuditorAeo', etiqueta: 'Auditor AEO', antes: 94, despues: 97, texto: 'Medimos si la IA entiende y puede citar nuestra web, y la ajustamos hasta 97 sobre 100.', enlace: 'Ver cómo lo medimos →' },
      { clave: 'blogConsultorAeo', etiqueta: 'Is It Agent Ready · nivel', antes: 4, despues: 5, texto: 'La prueba de Cloudflare para agentes de IA: subimos al nivel 5, «Agent-Native», el más alto.', enlace: 'Ver el resultado →' },
    ],
  },
  pasos: {
    etiqueta: 'Método',
    titulo: 'Cómo *trabajamos*',
    items: [
      { titulo: 'Primero, tu web', texto: 'Te mandamos gratis su diagnóstico SEO (tu puntuación de 0 a 100 y las 5 correcciones más urgentes, en PDF) y, si hace falta, la renovamos con tu marca real. ¿No tienes web? Te la creamos.' },
      { titulo: 'Luego, todo el negocio', texto: 'Si quieres verlo todo, la Auditoría Completa de Negocio analiza tu negocio por fuera y por dentro y te da un plan ordenado. A diferencia del diagnóstico gratis, no se queda en la web.' },
      { titulo: 'Que Google y la IA te recomienden', texto: 'Ordenamos tu ficha, tus reseñas y un contenido que la IA pueda citar, comprobado con Is It Agent Ready, la herramienta de Cloudflare. Y automatizamos lo que se repite.' },
    ],
  },
  // Preguntas que la gente escribe en Google (autocompletado y Semrush, 28-nov-2026). Las respuestas también van como FAQPage:
  // texto plano. Los precios deben coincidir con PRECIOS, MXN y OTROS de app/api/chat/route.js
  faq: {
    etiqueta: 'Preguntas frecuentes',
    titulo: 'Lo que más nos *preguntan*',
    items: [
      { p: '¿Qué incluye el diagnóstico SEO gratis?', r: 'Tu puntuación de 0 a 100 y las 5 correcciones más urgentes de tu web, en un PDF, cada una con su prueba. No te pedimos contraseñas: lo hacemos con lo que cualquiera ve en internet.', enlace: { clave: 'auditoriaGratis', texto: 'Más sobre el diagnóstico gratis →' } },
      { p: '¿Cuánto cuesta una página web?', r: 'Nuestro Diseño web cuesta 100 USD (1,900 MXN en México), pago único: renovamos tu web con tu marca real, tus servicios y tu WhatsApp a un toque.', enlace: { clave: 'blogPrecioWeb', texto: 'Cuánto cuesta una página web en 2026 →' } },
      { p: '¿Cuánto cuesta un chatbot para WhatsApp?', r: 'El Asistente IA de WhatsApp cuesta 150 USD de instalación y 39 USD al mes; el chat automático 24 h para tu web, 15 USD al mes. Sin permanencia: si un mes no pagas, el servicio se pausa.' },
      { p: '¿Qué se puede automatizar en un negocio pequeño?', r: 'Lo que se repite cada día: recordatorios de citas, seguimiento de presupuestos, petición de reseñas o pasar los contactos de tu web y tu WhatsApp a un CRM. Una automatización puntual cuesta 100 USD, pago único, y se instala en tus propias cuentas.' },
      { p: '¿Cómo hago que mi negocio aparezca en ChatGPT?', r: 'La IA recomienda a los negocios que entiende y en los que confía: una web clara que pueda citar, una ficha de Google completa y reseñas. A eso lo llamamos Posicionamiento AEO.', enlace: { clave: 'blogChatgpt', texto: 'Cómo aparecer en ChatGPT →' } },
      { p: '¿Trabajan con negocios fuera de México?', r: 'Sí. Trabajamos 100 % en remoto con negocios de México, Colombia, Estados Unidos, España y el resto del mundo. En México pagas en pesos por SPEI; fuera, por PayPal en USD o transferencia.' },
    ],
  },
  cierre: {
    etiqueta: 'Empieza gratis',
    titulo: 'Hablemos de *tu negocio*',
    texto: 'Déjanos tu nombre, tu web y tu WhatsApp, y te mandamos gratis tu puntuación SEO de 0 a 100 y las 5 correcciones más urgentes, en un PDF. Te respondemos lo antes posible.',
    boton: 'Quiero mi diagnóstico gratis',
  },
};

export default t;
