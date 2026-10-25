// Condiciones de compra (español). Si cambias algo aquí, cambia lo mismo en condiciones.en.js y su fecha en lib/revisiones.js.
// Deben coincidir con lo que dicen /vip y Lex: pago por WhatsApp (SPEI o PayPal), revisiones, saldo a favor y cuotas sin cargos automáticos.
// Solo datos: nada de funciones.
const t = {
  metadata: {
    title: 'Condiciones de compra | DASTAN X-TECH',
    description: 'Cómo se contratan y se pagan los servicios de DASTAN X-TECH: plazos, revisiones incluidas, cancelaciones, saldo a favor y servicios mensuales sin permanencia.',
  },
  actualizacion: 'Última actualización:',
  titulo: 'Condiciones de compra',
  intro: 'Esto es lo que vale cada vez que contratas uno de nuestros servicios. Si algo no te queda claro, pregúntanos por WhatsApp antes de pagar.',
  secciones: [
    {
      titulo: '¿Quién vende?',
      bloques: [
        { tipo: 'p', contenido: <>DASTAN X-TECH, nombre comercial de <strong>Dastan Tamayo</strong>, con domicilio en Puebla, Puebla, México. Trabajamos en remoto con negocios de cualquier país.</> },
        { tipo: 'ul', contenido: [
          <>WhatsApp: <a href="https://wa.me/16055003653" className="text-link">+1 605 500 3653</a></>,
          <>Correo: <a href="mailto:dastanxtech.services@gmail.com" className="text-link">dastanxtech.services@gmail.com</a></>,
        ] },
      ],
    },
    {
      titulo: 'Cómo se contrata y se paga',
      bloques: [
        { tipo: 'ul', contenido: [
          'Todo se contrata por WhatsApp: te confirmamos el servicio, el precio y lo que necesitamos de ti antes de cobrar nada.',
          'Los precios están en dólares (USD). En México puedes pagar en pesos por transferencia SPEI; desde otros países, con PayPal en USD o por transferencia SPEI.',
          'Los datos de pago te los mandamos solo por WhatsApp. Nunca te pediremos que pagues a una cuenta que no te hayamos enviado nosotros.',
          'Diseño web y Pack completo: 50 % al empezar y 50 % al entregar. El resto de servicios se paga por adelantado.',
          'Empezamos en cuanto el pago llega a la cuenta, y te enviamos el comprobante por WhatsApp.',
        ] },
      ],
    },
    {
      titulo: 'Plazos de entrega',
      bloques: [
        { tipo: 'ul', contenido: [
          'Arreglo exprés: 48 horas desde que se confirma el pago y tenemos acceso a tu web.',
          'Diseño web: menos de 48 horas desde que tenemos tu marca y tus contenidos.',
          'Posicionamiento AEO y Auditoría Completa de Negocio: te confirmamos el plazo por WhatsApp antes de pagar, según el tamaño de tu negocio.',
        ] },
        { tipo: 'p', contenido: 'Si nos falta algo que depende de ti (accesos, fotos, textos o respuestas), el plazo empieza a contar cuando lo recibimos.' },
      ],
    },
    {
      titulo: 'Revisiones incluidas',
      bloques: [
        { tipo: 'ul', contenido: [
          'Diseño web: 2 rondas de cambios.',
          'Arreglo exprés, Posicionamiento AEO y Auditoría Completa de Negocio: 1 ronda de cambios.',
        ] },
        { tipo: 'p', contenido: 'Una ronda es una lista de cambios que nos envías de una vez. Lo que vaya más allá de lo acordado al contratar (páginas nuevas, otro estilo de diseño, otro servicio) se cotiza aparte.' },
      ],
    },
    {
      titulo: 'Cancelaciones y saldo a favor',
      bloques: [
        { tipo: 'ul', contenido: [
          'Si cancelas antes de que empecemos, no devolvemos el dinero: queda como saldo a favor durante 90 días para cualquiera de nuestros servicios.',
          'Una vez empezado o entregado el trabajo, lo pagado no se devuelve ni pasa a saldo a favor. En los trabajos de dos pagos, si cancelas a mitad, no se cobra el segundo.',
          'Si no podemos entregar lo acordado por causa nuestra, te devolvemos el 100 % de lo pagado.',
        ] },
      ],
    },
    {
      titulo: 'Servicios mensuales',
      bloques: [
        { tipo: 'ul', contenido: [
          'Chat automático 24 h, Recepcionista virtual y Membresía de Implementación no tienen permanencia ni cargos automáticos.',
          'Cada mes te enviamos el cobro por WhatsApp. Si un mes no lo pagas, el servicio se pausa y listo. El mes ya pagado no se devuelve.',
          'La Membresía de Implementación requiere haber hecho la Auditoría Completa de Negocio. Incluye 6 horas de trabajo por semana.',
        ] },
      ],
    },
    {
      titulo: 'Lo que no prometemos',
      bloques: [
        { tipo: 'p', contenido: 'Nadie controla Google ni los asistentes de IA: no garantizamos posiciones concretas, recomendaciones de una IA ni cifras de ventas. Sí garantizamos entregar lo acordado, en el plazo acordado.' },
      ],
    },
    {
      titulo: 'Cambios en estas condiciones',
      bloques: [
        { tipo: 'p', contenido: 'Si las cambiamos, actualizaremos esta página y su fecha. A cada compra se le aplican las condiciones vigentes el día en que la pagaste.' },
      ],
    },
  ],
};

export default t;
