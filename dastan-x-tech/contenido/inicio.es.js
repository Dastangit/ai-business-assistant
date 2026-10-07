// Textos de la portada (español). Si cambias algo aquí, cambia lo mismo en inicio.en.js.
// Solo datos: nada de funciones (se pasan de servidor a cliente).
const t = {
  nav: {
    principal: 'Principal',
    irInicio: 'DASTAN X-TECH, ir al inicio',
    servicios: 'Servicios',
    wa: 'Escríbenos por WhatsApp al +1 605-500-3653',
  },
  etiqueta: 'Consultoría digital e IA para negocios privados y pymes',
  titulo: 'Descubre, con pruebas, por qué tu negocio pierde clientes por internet.',
  tituloSr: ' DASTAN X-TECH, consultoría digital e IA para negocios privados y pymes en Colombia, México, Estados Unidos y el resto del mundo.',
  subtitulo: 'Diagnóstico SEO gratis de tu web: tu puntuación de 0 a 100 y las 5 correcciones más urgentes, en un PDF por WhatsApp. Si quieres, después las arreglamos contigo.',
  botonDiagnostico: 'Pide tu diagnóstico SEO gratis',
  puntos: ['Cada fallo, con su prueba', 'Sin pedirte contraseñas', '100 % en remoto'],
  quienes: {
    titulo: 'Quiénes somos',
    parrafos: [
      <>Somos <strong>Dastan Tamayo</strong>, fundador de DASTAN X-TECH, e <strong>Isdiel Martínez</strong>, consultor de IA y estratega digital. Trabajamos con negocios privados y pymes de cualquier sector —clínicas, spas, salones, servicios a domicilio, comercios, despachos— que hacen un buen trabajo pero no lo reflejan en internet: la web no convence, el WhatsApp no se ve o se contesta tarde, y cuando alguien le pregunta a una IA, recomienda a la competencia.</>,
      <>Empezamos siempre por un diagnóstico con evidencias —una frase de tu web, una reseña con fecha, una captura— y terminamos con acciones concretas, ordenadas por lo que más te devuelve.</>,
    ],
  },
  // Mismo orden que las fotos de components/paginas/Inicio.jsx: Dastan, Isdiel
  equipo: [
    { nombre: 'Dastan Tamayo', rol: 'Fundador de DASTAN X-TECH', alt: 'Dastan Tamayo, fundador de DASTAN X-TECH' },
    { nombre: 'Isdiel Martínez', rol: 'Consultor de IA y estratega digital', alt: 'Isdiel Martínez, consultor de IA y estratega digital de DASTAN X-TECH' },
  ],
  // El precio de partida debe coincidir con PRECIOS de app/api/chat/route.js
  servicios: {
    etiqueta: 'Servicios',
    titulo: 'Tres servicios para que tu negocio no pierda ni un cliente',
    tarjetas: [
      {
        clave: 'disenoWeb',
        label: '01 · Web',
        title: 'Diseño web',
        text: 'Renovamos tu web actual con tu marca real: tus servicios, tus precios y tu WhatsApp a un toque.',
        items: ['Diagnóstico honesto de tu web actual.', 'Web nueva, responsive, lista para publicar.', 'WhatsApp y teléfono siempre visibles.'],
        link: 'Saber más sobre Diseño web →',
        price: 'Desde 100 USD',
        // Responde a «barato = malo» con datos de la FAQ de Diseño web (no prometer nada que no esté ahí)
        precioNota: 'Precio confirmado antes de empezar. Lista en menos de 48 h desde que tenemos tus contenidos.',
      },
      {
        clave: 'auditoria',
        label: '02 · Auditoría',
        title: 'Auditoría Completa de Negocio',
        text: 'Sabemos exactamente dónde tu negocio pierde tiempo y dinero, con evidencia, no suposiciones.',
        items: ['Presencia digital sobre 100.', 'Madurez tecnológica sobre 5.', 'Análisis de procesos.', 'Plan de acción por fases.'],
        link: 'Descubre la Auditoría de Negocio →',
        price: 'Desde 200 USD',
      },
      {
        clave: 'aeo',
        label: '03 · IA y AEO',
        title: 'Posicionamiento AEO',
        text: 'Que la Inteligencia Artificial recomiende tu negocio, no solo las búsquedas en Google.',
        items: ['Ficha de Google y redes ordenadas.', 'Contenido citable por IA.', 'Reseñas y señales de confianza.'],
        link: 'Conoce el Posicionamiento AEO →',
        price: 'Desde 150 USD',
      },
    ],
  },
  pasos: {
    titulo: 'Cómo trabajamos',
    items: [
      'Empezamos por tu web. Te mandamos gratis su diagnóstico SEO (tu puntuación de 0 a 100 y las 5 correcciones más urgentes, en PDF) y, si hace falta, la renovamos con tu marca real. ¿No tienes web? Te la creamos.',
      'Si quieres verlo todo, la Auditoría Completa de Negocio analiza todo tu negocio, por fuera y por dentro, y te da un plan ordenado. A diferencia del diagnóstico gratis, no se queda en la web.',
      'Te posicionamos para que Google y la IA te recomienden: tu ficha, tus reseñas y un contenido que la IA pueda citar.',
    ],
  },
  cierre: {
    titulo: 'Hablemos de tu negocio',
    texto: 'Déjanos tu nombre, tu web y tu WhatsApp, y te mandamos gratis tu puntuación SEO de 0 a 100 y las 5 correcciones más urgentes, en un PDF.',
    boton: 'Pide tu diagnóstico SEO gratis',
  },
};

export default t;
