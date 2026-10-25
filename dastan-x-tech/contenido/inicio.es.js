// Textos de la portada (español). Si cambias algo aquí, cambia lo mismo en inicio.en.js.
// Solo datos: nada de funciones (se pasan de servidor a cliente).
// Los párrafos con formato llevan key: viajan del servidor al cliente dentro de una lista y React la exige
import { Fragment } from 'react';

const t = {
  nav: {
    principal: 'Principal',
    irInicio: 'DASTAN X-TECH, ir al inicio',
    servicios: 'Servicios',
    wa: 'Escríbenos por WhatsApp al +1 605-500-3653',
  },
  etiqueta: 'Consultoría digital y tecnología de alto nivel',
  // El titular se parte en dos: la segunda parte va con el degradado de la marca
  titulo: 'Descubre, con pruebas, por qué tu negocio ',
  tituloDestacado: 'pierde clientes por internet.',
  tituloSr: ' DASTAN X-TECH, consultoría digital de alto nivel para negocios privados y pymes en Colombia, México, Estados Unidos y el resto del mundo.',
  subtitulo: 'Tu nota de 0 a 100 y las 5 correcciones más urgentes de tu web.',
  botonDiagnostico: 'Pide tu diagnóstico SEO gratis',
  puntos: ['Cada fallo, con su prueba', 'Sin pedirte contraseñas', '100 % en remoto'],
  // Tarjeta a la derecha del hero: un trozo de public/ejemplo-diagnostico-seo.html (negocio ficticio) y el caso real del blog
  muestra: {
    aria: 'Ejemplo del diagnóstico SEO gratis',
    etiqueta: 'Ejemplo · Diagnóstico SEO',
    nota: 32,
    deCien: 'de 100',
    negocio: 'Clínica Dental Olmedo',
    aviso: 'Negocio ficticio',
    urgentesTitulo: 'Los 5 problemas más urgentes',
    urgentes: ['Google no sabe qué hace la clínica ni dónde está', 'Google no la reconoce como negocio local', 'En el móvil, la web se sale de la pantalla'],
    enlace: 'Ver el ejemplo completo →',
    real: 'Caso real: nuestra propia web, de 94 a 97 →',
  },
  // Sección tras «Cómo trabajamos»: qué miramos antes de proponer nada
  diagnostico: {
    titulo: 'Antes de tocar nada, diagnosticamos tu negocio',
    items: [
      { titulo: 'Presencia digital', texto: 'Cómo te ve hoy un cliente: web, Google, redes y reseñas. Nota sobre 100.' },
      { titulo: 'Mapa de procesos', texto: 'Cómo trabaja hoy tu negocio: agenda, cobros, atención y herramientas.' },
      { titulo: 'Seguridad', texto: 'Los puntos débiles de tu web, antes de que te cuesten un disgusto.' },
      { titulo: 'Plan de acción', texto: 'Qué hacer, paso a paso, empezando por lo que más te devuelve.' },
    ],
  },
  quienes: {
    titulo: 'Quiénes somos',
    parrafos: [
      <Fragment key="presentacion">Somos <strong>Dastan Tamayo</strong>, fundador de DASTAN X-TECH, e <strong>Isdiel Martínez</strong>, consultor y estratega digital. Trabajamos con negocios privados y pymes de cualquier sector —clínicas, spas, salones, servicios a domicilio, comercios, despachos— que hacen un buen trabajo pero no lo reflejan en internet: la web no convence, el WhatsApp no se ve o se contesta tarde, y cuando alguien le pregunta a una IA, recomienda a la competencia.</Fragment>,
    ],
    historia: {
      titulo: 'Cómo nació DASTAN X-TECH',
      parrafos: [
        'DASTAN X-TECH no fue nuestra primera idea. Empezó con nuestro propio negocio: hacíamos un buen trabajo, pero en internet casi no se veía, y necesitábamos más visibilidad para crecer.',
        'Decidimos dar un paso adelante. Estudiamos cómo se gana visibilidad hoy —en Google, en las redes y en las respuestas de la IA— y por el camino vimos que muchos negocios como el nuestro estaban igual. Así nació esta consultora.',
        'Por eso sabemos lo que se siente cuando tus ideas son buenas y aun así no llegan a quien deberían. Nuestro trabajo es que internet refleje el que ya haces tú.',
      ],
    },
  },
  // Mismo orden que las fotos de components/paginas/Inicio.jsx: Dastan, Isdiel
  equipo: [
    { nombre: 'Dastan Tamayo', rol: 'Fundador de DASTAN X-TECH', alt: 'Dastan Tamayo, fundador de DASTAN X-TECH' },
    { nombre: 'Isdiel Martínez', rol: 'Consultor y estratega digital', alt: 'Isdiel Martínez, consultor y estratega digital de DASTAN X-TECH' },
  ],
  // Los precios (cerrados) deben coincidir con PRECIOS de app/api/chat/route.js
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
    texto: 'Déjanos tu nombre, tu web y tu WhatsApp, y te mandamos gratis tu puntuación SEO de 0 a 100 y las 5 correcciones más urgentes, en un PDF. Te respondemos lo antes posible.',
    boton: 'Pide tu diagnóstico SEO gratis',
  },
};

export default t;
