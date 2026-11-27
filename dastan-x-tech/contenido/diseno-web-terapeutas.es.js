// Textos de /servicios/diseno-web/psicologos (español). Mismo diseño que /servicios/diseno-web (components/paginas/DisenoWeb.jsx).
// Si cambias algo aquí, cambia lo mismo en diseno-web-terapeutas.en.js.
// Mapa de palabras clave (26-nov-2026): «diseño web para psicólogos» (ES 210); la frase fuerte es la inglesa.
// Solo datos: nada de funciones (se pasan de servidor a cliente).
const t = {
  metadata: {
    title: 'Diseño web para psicólogos y terapeutas | DASTAN X-TECH',
    description: 'Diseño web para psicólogos: una web clara y tranquila que explica tu enfoque, tus tarifas y la primera sesión, con un contacto privado a un toque.',
    keywords: ['Diseño web para psicólogos', 'Página web para psicólogos', 'Diseño web para terapeutas', 'Web para consulta de psicología', 'Diseño web para pymes'],
    ogTitle: 'Diseño web para psicólogos y terapeutas | DASTAN X-TECH',
    ogDescription: 'Webs para psicólogos y terapeutas que hacen más fácil dar el primer paso.',
  },
  servicioJsonLd: {
    name: 'Diseño web para psicólogos',
    serviceType: 'Diseño de páginas web para psicólogos y terapeutas',
    description: 'Diseñamos o renovamos la web de psicólogos y terapeutas: tu enfoque en palabras sencillas, tarifas y formato de las sesiones, un primer contacto privado a un toque y una estructura que Google y los asistentes de IA entienden.',
    areaServed: ['Colombia', 'México', 'España', 'Estados Unidos'],
  },
  hero: {
    etiqueta: 'Servicio · Diseño web para psicólogos',
    titulo: <>Diseño web para psicólogos: una web que hace más fácil el <span className="accent-light">primer paso</span>.</>,
    texto: 'Escribirle a un psicólogo cuesta. Hacemos la web de tu consulta para que quien la visite entienda quién eres, cómo trabajas y cómo es la primera sesión, y pueda contactarte en privado con un toque.',
    mensajeChat: 'Quiero información sobre una web para mi consulta de psicología',
    boton: 'Consultar la web de mi consulta',
    tarjetaTitulo: 'Qué recibes',
    tarjetaItems: ['Diagnóstico de tu web actual', 'Tu enfoque, tarifas y primera sesión, bien explicados', 'Lista para Google y para la IA'],
    verCaso: 'Ver los 8 estilos ↓',
  },
  caso: {
    etiqueta: 'Muestrario',
    titulo: <>Una web, <span className="accent-light">ocho estilos</span></>,
    intro: 'Rehicimos nuestra propia web, dastanxtech.com, en ocho estilos distintos, de tranquilos y editoriales a llamativos. Elige el que va con tu consulta y lo convertimos en tu web.',
    items: [
      'Con tu nombre, tu enfoque y tus textos reales: no inventamos nada.',
      'Un contacto privado a un toque desde el primer segundo.',
      'Pruébalos también en el móvil: es donde la mayoría te va a encontrar.',
    ],
    boton: 'Ver muestrario ↗',
  },
  ventajas: {
    titulo: <>Lo que necesita la web de un <span className="accent-light">psicólogo</span></>,
    items: [
      { titulo: 'Tu enfoque, en palabras sencillas', texto: 'En qué ayudas (ansiedad, pareja, duelo…), cómo trabajas y con quién, escrito para que la gente se reconozca. Los asistentes de IA también lo necesitan para recomendarte cuando alguien les pide un psicólogo.' },
      { titulo: 'Un primer contacto privado y sencillo', texto: 'WhatsApp, teléfono o correo a un toque, y una explicación clara de qué pasa después de escribirte. Sin formularios largos que pidan datos personales.' },
      { titulo: 'Tarifas y formato, claros', texto: 'Duración de la sesión, tarifas, en línea o presencial y dónde estás: menos mensajes de ida y vuelta antes de la primera sesión.' },
      { titulo: 'Preparada para Google y la IA', texto: <>Estructuramos el código y el contenido para que Google y los asistentes de IA entiendan qué ofreces, dónde y cómo. Lo aplicamos primero a nuestra web: <a href="/blog/nuestra-web-diagnostico-seo" className="text-link">de 77 a 91 en nuestro diagnóstico SEO</a>.</> },
    ],
  },
  caminos: {
    titulo: <>Dos formas de <span className="accent-light">empezar</span></>,
    items: [
      { etiqueta: 'Web nueva', titulo: 'Renovamos la web de tu consulta o te la creamos desde cero', texto: 'Con tu nombre y tu marca reales, tu enfoque explicado y un primer contacto privado a un toque. Lista en menos de 48 horas desde que tenemos tus contenidos.', boton: 'Quiero una web nueva', mensajeChat: 'Quiero una web nueva para mi consulta de psicología', estilo: 'btn btn-suave' },
      { etiqueta: 'Arreglo exprés', titulo: '¿Ya tienes web? Arreglamos lo urgente', texto: 'Aplicamos en 48 horas las 5 correcciones más urgentes de tu diagnóstico SEO. Si después haces la web nueva, te lo descontamos.', boton: 'Quiero el arreglo exprés', mensajeChat: 'Quiero el Arreglo exprés para la web de mi consulta', estilo: 'btn btn-outline-light' },
    ],
  },
  faqTitulo: 'Preguntas frecuentes',
  faq: [
    { q: '¿Cuánto cuesta la web de un psicólogo?', a: '100 USD, precio cerrado, igual que nuestro Diseño web. Si necesitas algo que no está incluido (una tienda online o un sistema de citas a medida, por ejemplo), te lo decimos antes de empezar.' },
    { q: '¿Cuánto tarda?', a: 'Menos de 48 horas desde que nos das tus contenidos: tu nombre o la marca de tu consulta, tu enfoque, tarifas y formato de las sesiones, y una foto tuya si quieres.' },
    { q: '¿Se puede pedir la primera sesión desde la web?', a: 'Sí. El WhatsApp, el teléfono o el correo están a un toque en todas las páginas y, si ya usas una agenda online, la enlazamos para que reserven directamente.' },
    { q: '¿Sirve para terapia en línea?', a: 'Sí. Explicamos cómo son tus sesiones en línea y, si aplica, los países o husos horarios que atiendes, para que se sepa desde el principio si puedes atender a quien te escribe.' },
    { q: '¿La web recoge información sensible?', a: 'No. Te contactan por WhatsApp, teléfono o correo, y la web no pregunta por su situación ni por su salud. El chat 24 h, que es opcional, solo guarda el nombre y el WhatsApp de quien pregunta, y lo configuramos para dudas prácticas (tarifas, horarios, sesiones en línea), no para dar consejo clínico.' },
    { q: '¿Qué pasa si ya tengo una web?', a: 'La analizamos primero: te damos un diagnóstico honesto con problemas concretos y observables — cada uno con la razón por la que te cuesta pacientes — antes de tocar nada.' },
  ],
  cierre: {
    titulo: '¿Quieres saber qué le falta a la web de tu consulta?',
    texto: 'Pide el diagnóstico SEO gratis de tu web: tu puntuación de 0 a 100 y las 5 correcciones más urgentes, en un PDF por WhatsApp. ¿No tienes web? Te la creamos, incluso a partir de tu Instagram. Te respondemos lo antes posible.',
    botonDiagnostico: 'Pedir diagnóstico SEO gratis',
    whatsappTexto: 'Hola, vi la página de Diseño web para psicólogos y quiero mi diagnóstico SEO gratis.',
    whatsappEnlace: 'o escríbenos por WhatsApp →',
  },
};

export default t;
