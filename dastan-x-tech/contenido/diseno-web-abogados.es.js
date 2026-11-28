// Textos de /servicios/diseno-web/abogados (español, mercado España). Mismo diseño que /servicios/diseno-web (components/paginas/DisenoWeb.jsx).
// Si cambias algo aquí, cambia lo mismo en diseno-web-abogados.en.js.
// Mapa de palabras clave: «diseño web para abogados» (ES 590, KD 15, CPC 3,81; global 770) y «diseño de páginas web para abogados» (ES 170, KD 12).
// Solo datos: nada de funciones (se pasan de servidor a cliente).
const t = {
  metadata: {
    title: 'Diseño web para abogados y despachos | DASTAN X-TECH',
    description: 'Diseño web para abogados: una web sobria que explica tus áreas de práctica, cómo es la primera consulta y cuánto cuesta, con contacto discreto a un toque.',
    keywords: ['Diseño web para abogados', 'Diseño de páginas web para abogados', 'Página web para abogados', 'Web para despacho de abogados', 'Diseño web para pymes'],
    ogTitle: 'Diseño web para abogados y despachos | DASTAN X-TECH',
    ogDescription: 'Webs para abogados y despachos que transmiten confianza antes de la primera consulta.',
  },
  servicioJsonLd: {
    name: 'Diseño web para abogados',
    serviceType: 'Diseño de páginas web para abogados y despachos',
    description: 'Diseñamos o renovamos la web de abogados y despachos: áreas de práctica explicadas sin jerga, cómo es la primera consulta y sus honorarios, un contacto discreto a un toque y una estructura que Google y los asistentes de IA entienden.',
    areaServed: ['España', 'México', 'Colombia', 'Estados Unidos'],
  },
  hero: {
    etiqueta: 'Servicio · Diseño web para abogados',
    titulo: <>Diseño web para abogados: una web que da <span className="accent-light">confianza</span> antes de la primera consulta.</>,
    texto: 'Quien busca un abogado suele tener prisa y dudas. Hacemos la web de tu despacho para que entienda en segundos en qué le puedes ayudar, cómo es la primera consulta y cómo contactarte de forma discreta.',
    mensajeChat: 'Quiero información sobre una web para mi despacho de abogados',
    boton: 'Consultar la web de mi despacho',
    tarjetaTitulo: 'Qué recibes',
    tarjetaItems: ['Diagnóstico de tu web actual', 'Tus áreas de práctica y la primera consulta, bien explicadas', 'Lista para Google y para la IA'],
    verCaso: 'Ver los 8 estilos ↓',
  },
  caso: {
    etiqueta: 'Muestrario',
    titulo: <>Una web, <span className="accent-light">ocho estilos</span></>,
    intro: 'Rehicimos nuestra propia web, dastanxtech.com, en ocho estilos distintos, de sobrios y editoriales a llamativos. Elige el que va con tu despacho y lo convertimos en tu web.',
    items: [
      'Con tu nombre, tu número de colegiado si quieres mostrarlo y tus textos reales: no inventamos nada.',
      'Un contacto discreto a un toque desde el primer segundo.',
      'Pruébalos también en el móvil: es donde la mayoría te va a encontrar.',
    ],
    boton: 'Ver muestrario ↗',
  },
  ventajas: {
    titulo: <>Lo que necesita la web de un <span className="accent-light">abogado</span></>,
    items: [
      { titulo: 'Tus áreas de práctica, sin jerga', texto: 'Divorcios, herencias, despidos, reclamaciones: cada área con los casos que llevas y lo que puede esperar el cliente, escrito para quien no es abogado. Los asistentes de IA también lo necesitan para recomendarte cuando alguien les pide un abogado.' },
      { titulo: 'Un contacto discreto y sencillo', texto: 'WhatsApp, teléfono o correo a un toque, y una explicación clara de qué pasa después de escribirte. La web no pide detalles del caso: eso se habla contigo, no en un formulario.' },
      { titulo: 'Primera consulta y honorarios, claros', texto: <>Si la primera consulta es gratuita o de pago, cuánto dura, si atiendes en línea o en el despacho y dónde estás. Menos llamadas para preguntar lo mismo. Si quieres orientarte con precios, mira <a href="/blog/cuanto-cuesta-una-pagina-web" className="text-link">cuánto cuesta una página web en España</a>.</> },
      { titulo: 'Preparada para Google y la IA', texto: <>Estructuramos el código y el contenido para que Google y los asistentes de IA entiendan qué áreas llevas y dónde ejerces. Lo aplicamos primero a nuestra web: <a href="/blog/nuestra-web-diagnostico-seo" className="text-link">de 77 a 91 en nuestro diagnóstico SEO</a>.</> },
    ],
  },
  caminos: {
    titulo: <>Dos formas de <span className="accent-light">empezar</span></>,
    items: [
      { etiqueta: 'Web nueva', titulo: 'Renovamos la web de tu despacho o te la creamos desde cero', texto: 'Con tu nombre y tu marca reales, tus áreas de práctica explicadas y un contacto discreto a un toque. Lista en menos de 48 horas desde que tenemos tus contenidos.', boton: 'Quiero una web nueva', mensajeChat: 'Quiero una web nueva para mi despacho de abogados', estilo: 'btn btn-suave' },
      { etiqueta: 'Arreglo exprés', titulo: '¿Ya tienes web? Arreglamos lo urgente', texto: 'Aplicamos en 48 horas las 5 correcciones más urgentes de tu diagnóstico SEO. Si después haces la web nueva, te lo descontamos.', boton: 'Quiero el arreglo exprés', mensajeChat: 'Quiero el Arreglo exprés para la web de mi despacho', estilo: 'btn btn-outline-light' },
    ],
  },
  faqTitulo: 'Preguntas frecuentes',
  faq: [
    { q: '¿Cuánto cuesta la web de un abogado?', a: '100 USD (menos de 100 € al cambio), precio cerrado, igual que nuestro Diseño web. Si necesitas algo que no está incluido (un área de clientes o un sistema de citas a medida, por ejemplo), te lo decimos antes de empezar.' },
    { q: '¿Cuánto tarda?', a: 'Menos de 48 horas desde que nos das tus contenidos: el nombre o la marca del despacho, tus áreas de práctica, cómo es la primera consulta y una foto tuya o del equipo si quieres.' },
    { q: '¿Sirve para un abogado que trabaja solo o para un despacho con varios abogados?', a: 'Para los dos. Si trabajas solo, la web se centra en ti y en tus áreas; si son varios, cada abogado puede tener su ficha con su especialidad.' },
    { q: '¿Puedo anunciar mis servicios en la web?', a: 'Sí, y lo hacemos con un tono sobrio: explicamos lo que haces sin prometer resultados ni compararte con otros despachos. Tú revisas todos los textos antes de publicar y decides qué se muestra.' },
    { q: '¿La web pide datos del caso?', a: 'No. Te contactan por WhatsApp, teléfono o correo, y la web no pregunta por su asunto. El chat 24 h, que es opcional, solo guarda el nombre y el WhatsApp de quien pregunta, y lo configuramos para dudas prácticas (áreas, horarios, primera consulta), no para dar asesoramiento jurídico.' },
    { q: '¿Incluye el aviso legal y la política de privacidad?', a: 'Enlazamos desde el pie de todas las páginas el aviso legal, la política de privacidad y la de cookies, con los datos de tu despacho. El texto legal lo pones o lo revisas tú, que eres quien mejor lo conoce.' },
  ],
  cierre: {
    titulo: '¿Quieres saber qué le falta a la web de tu despacho?',
    texto: 'Pide el diagnóstico SEO gratis de tu web: tu puntuación de 0 a 100 y las 5 correcciones más urgentes, en un PDF por WhatsApp. ¿No tienes web? Te la creamos, incluso a partir de tu Instagram. Te respondemos lo antes posible.',
    botonDiagnostico: 'Pedir diagnóstico SEO gratis',
    whatsappTexto: 'Hola, vi la página de Diseño web para abogados y quiero mi diagnóstico SEO gratis.',
    whatsappEnlace: 'o escríbenos por WhatsApp →',
  },
};

export default t;
