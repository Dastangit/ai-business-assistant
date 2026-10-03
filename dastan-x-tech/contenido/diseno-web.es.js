// Textos de /servicios/diseno-web (español). Si cambias algo aquí, cambia lo mismo en diseno-web.en.js.
// Solo datos: nada de funciones (se pasan de servidor a cliente).
const t = {
  metadata: {
    title: 'Diseño web para negocios y pymes | DASTAN X-TECH',
    description: 'Renovamos la web de tu negocio con tu marca real, tus servicios, tus precios y tu WhatsApp a un toque.',
    keywords: ['Diseño web para pymes', 'Diseño web para negocios locales', 'Diseño web profesional', 'Posicionamiento AEO'],
    ogTitle: 'Diseño web para negocios y pymes | DASTAN X-TECH',
    ogDescription: 'Diseño de páginas web para negocios y pymes, optimizadas para SEO local y motores de respuesta AEO.',
  },
  servicioJsonLd: {
    name: 'Diseño web',
    serviceType: 'Diseño y desarrollo web para pymes',
    description: 'Renovamos la página web de negocios y pymes con arquitectura optimizada para SEO local y motores de respuesta de IA (AEO), manteniendo la marca real del cliente.',
    areaServed: ['Colombia', 'México', 'Estados Unidos'],
  },
  hero: {
    etiqueta: 'Servicio · Diseño web',
    titulo: <>Tu web nueva, con tu marca y tu <span className="accent-light">WhatsApp</span> a un toque.</>,
    texto: 'Renovamos la web de tu negocio: tus servicios explicados, tus precios claros y tu WhatsApp siempre visible. Con la estructura que Google y los asistentes de IA necesitan para entender qué ofreces.',
    mensajeChat: 'Quiero información sobre Diseño Web para mi negocio',
    boton: 'Consultar proyecto',
    tarjetaTitulo: 'Qué recibes',
    tarjetaItems: ['Diagnóstico de tu web actual', 'Web nueva, rápida y adaptada al móvil', 'Lista para Google y para la IA'],
    verCaso: 'Ver un rediseño real ↓',
  },
  caso: {
    etiqueta: 'Ejemplo real',
    titulo: <>Así se ve un <span className="accent-light">rediseño real</span></>,
    intro: 'Este es un rediseño que hicimos para un pequeño spa (mantenemos su nombre fuera por ahora). La web original no tenía WhatsApp clicable, tenía bloques de scroll vacíos y no listaba ninguno de sus servicios. Esto fue lo que cambiamos:',
    items: [
      'Teléfono y WhatsApp clicables desde el primer segundo — antes, solo un formulario de 6 campos.',
      'Cada servicio (masajes, tratamientos específicos, terapias con piedras calientes...) con su propio espacio, en vez de fotos sin explicar.',
      'Scroll continuo sin pantallas vacías ni banners repetidos que parecían spam.',
    ],
    boton: 'Ver el rediseño en vivo ↗',
    demoTitulo: 'Y así quedaría la nuestra',
    demoTexto: 'Le aplicamos el mismo método a dastanxtech.com: diagnóstico, branding y web nueva.',
    demoEnlace: 'Ver la demo ↗',
  },
  ventajas: {
    titulo: <>Más que una <span className="accent-light">web bonita</span></>,
    items: [
      { titulo: 'Preparada para Google y la IA', texto: 'Estructuramos el código y el contenido para que Google y los asistentes de IA entiendan qué ofreces, dónde y a qué precio: la base para que te encuentren y te recomienden.' },
      { titulo: 'Y si quieres, un asistente que no deja escapar a nadie', texto: 'Opcional: responde las dudas de tus clientes a cualquier hora y guarda su nombre y su WhatsApp para que los contactes al día siguiente. Pruébalo en esta misma página.' },
    ],
  },
  caminos: {
    titulo: <>Dos formas de <span className="accent-light">empezar</span></>,
    items: [
      { etiqueta: 'Web nueva', titulo: 'Renovamos tu web o te la creamos desde cero', texto: 'Con tu marca real, tus servicios explicados y tu WhatsApp a un toque. Lista en menos de 48 horas desde que tenemos tu marca y tus contenidos.', boton: 'Quiero una web nueva', mensajeChat: 'Quiero una web nueva para mi negocio', estilo: 'btn btn-suave' },
      { etiqueta: 'Arreglo exprés', titulo: '¿Ya tienes web? Arreglamos lo urgente', texto: 'Aplicamos en 48 horas las 5 correcciones más urgentes de tu diagnóstico SEO. Si después haces la web nueva, te lo descontamos.', boton: 'Quiero el arreglo exprés', mensajeChat: 'Quiero el Arreglo exprés para mi web', estilo: 'btn btn-outline-light' },
    ],
  },
  faqTitulo: 'Preguntas frecuentes',
  faq: [
    { q: '¿Cuánto tarda la entrega de la web nueva?', a: 'En menos de 48 horas desde que nos das tu marca y tus contenidos (logo, textos, servicios y precios).' },
    { q: '¿Cuánto cuesta?', a: 'Desde 100 USD. El precio final depende de cuántas páginas y servicios tenga tu web, y te lo confirmamos antes de empezar.' },
    { q: '¿Qué necesitan de mi negocio para empezar?', a: 'Tu marca real: logo, colores, tipografías, textos, precios y reseñas actuales. Nunca inventamos contenido que no sea tuyo.' },
    { q: '¿Qué pasa si ya tengo una web?', a: 'La analizamos primero: te damos un diagnóstico honesto con problemas concretos y observables — cada uno con la razón por la que te cuesta clientes — antes de tocar nada.' },
    { q: '¿Y si no quiero una web nueva?', a: 'Si ya tienes web y solo quieres arreglar lo más urgente, está el Arreglo exprés: por 49 USD aplicamos en 48 horas las 5 correcciones más urgentes de tu diagnóstico SEO. Si en los 30 días siguientes contratas el Diseño web, te lo descontamos.' },
    { q: '¿La web incluye el chat con Inteligencia Artificial?', a: 'Es opcional: un asistente que responde dudas a cualquier hora y guarda el nombre y el WhatsApp de quien pregunta, para que no se te escape nadie. Cuesta 15 USD al mes, o va incluido en la Membresía de Implementación si encaja con tu negocio. Es el mismo que puedes probar en esta página.' },
  ],
  cierre: {
    titulo: '¿Quieres saber qué le falta a tu web?',
    texto: 'Pide el diagnóstico SEO gratis de tu web: tu puntuación de 0 a 100 y las 5 correcciones más urgentes, en un PDF por WhatsApp. ¿No tienes web? Te la creamos, incluso a partir de tu Instagram.',
    botonDiagnostico: 'Pedir diagnóstico SEO gratis',
    whatsappTexto: 'Hola, vi la página de Diseño Web y quiero mi diagnóstico SEO gratis.',
    whatsappEnlace: 'o escríbenos por WhatsApp →',
  },
};

export default t;
