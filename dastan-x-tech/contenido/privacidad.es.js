// Aviso legal y de privacidad (español). Describe el tratamiento real de esta web: si cambia lo que recoge
// el chat, los proveedores o la analítica, hay que actualizar este texto, privacidad.en.js y sus fechas en lib/revisiones.js.
// Solo datos: nada de funciones.
const t = {
  metadata: {
    title: 'Aviso legal y de privacidad | DASTAN X-TECH',
    description: 'Quién está detrás de DASTAN X-TECH, qué datos recoge esta web, para qué los usa, con quién los trata y cómo ejercer tus derechos sobre ellos.',
  },
  actualizacion: 'Última actualización:',
  titulo: 'Aviso legal y de privacidad',
  intro: 'Aquí explicamos quién está detrás de esta web, qué datos tuyos recoge, para qué los usamos y cómo puedes pedir que los corrijamos o los borremos.',
  secciones: [
    {
      titulo: '¿Quién es el responsable?',
      bloques: [
        { tipo: 'p', contenido: <>DASTAN X-TECH es el nombre comercial de <strong>Dastan Tamayo</strong>, persona física con domicilio en Puebla, Puebla, México, responsable de esta web y del tratamiento de tus datos.</> },
        { tipo: 'ul', contenido: [
          <>Correo: <a href="mailto:supportdaelworld@gmail.com" className="text-link">supportdaelworld@gmail.com</a></>,
          <>WhatsApp: <a href="https://wa.me/16055003653" className="text-link">+1 605 500 3653</a></>,
        ] },
      ],
    },
    {
      titulo: '¿Qué datos recogemos?',
      bloques: [
        { tipo: 'p', contenido: 'Solo los que tú nos das al usar el chat de esta web:' },
        { tipo: 'ul', contenido: [
          'Tu nombre, tu página web o tu usuario de Instagram y tu número de WhatsApp, cuando rellenas el formulario del chat.',
          'Los mensajes que escribes en el chat, para poder responderte y entender qué necesitas.',
        ] },
        { tipo: 'p', contenido: 'No pedimos datos sensibles. Para saber cuántas personas visitan la web usamos la analítica de Vercel, que no usa cookies ni nos dice quién eres: solo da cifras agregadas de visitas.' },
      ],
    },
    {
      titulo: '¿Para qué los usamos?',
      bloques: [
        { tipo: 'ul', contenido: [
          'Responder a tus preguntas en el chat.',
          'Preparar y enviarte por WhatsApp lo que nos pidas, como el diagnóstico de tu web.',
          'Contactarte sobre el servicio por el que preguntaste.',
        ] },
        { tipo: 'p', contenido: 'No vendemos tus datos ni los usamos para publicidad de terceros.' },
      ],
    },
    {
      titulo: '¿Con quién se tratan?',
      bloques: [
        { tipo: 'p', contenido: 'Para que la web funcione usamos estos proveedores, que tratan los datos por encargo nuestro y solo para ese fin:' },
        { tipo: 'ul', contenido: [
          <><strong>Supabase</strong>: guarda los datos del formulario del chat.</>,
          <><strong>Groq</strong>: procesa los mensajes del chat para generar las respuestas del asistente de IA.</>,
          <><strong>Vercel</strong>: aloja la web y mide las visitas sin cookies.</>,
        ] },
        { tipo: 'p', contenido: 'Sus servidores pueden estar fuera de México, por ejemplo en Estados Unidos.' },
      ],
    },
    {
      titulo: '¿Cuánto tiempo los guardamos?',
      bloques: [
        { tipo: 'p', contenido: 'Mientras los necesitemos para atenderte o mientras dure la relación de trabajo contigo, y hasta que nos pidas que los borremos.' },
      ],
    },
    {
      titulo: '¿Cómo ejerces tus derechos?',
      bloques: [
        { tipo: 'p', contenido: 'Puedes pedir en cualquier momento acceder a tus datos, corregirlos, borrarlos u oponerte a que los usemos, y retirar tu consentimiento. Escríbenos al correo de arriba con tu nombre, el número de WhatsApp que nos diste y qué quieres hacer. Te responderemos por el mismo medio. Estos derechos valen también si nos escribes desde Colombia, Estados Unidos o cualquier otro país.' },
      ],
    },
    {
      titulo: 'Cambios en este aviso',
      bloques: [
        { tipo: 'p', contenido: 'Si cambiamos la forma de tratar tus datos, actualizaremos esta página y su fecha de última actualización.' },
      ],
    },
  ],
};

export default t;
