// Legal and privacy notice (English). Faithful translation of privacidad.es.js: same obligations, nothing added or removed.
// If the Spanish notice changes, change this one and its date in lib/revisiones.js.
// Data only: no functions.
const t = {
  metadata: {
    title: 'Legal and privacy notice | DASTAN X-TECH',
    description: 'Who is behind DASTAN X-TECH, what data this website collects, what it’s used for, who processes it and how to exercise your rights over it.',
  },
  actualizacion: 'Last updated:',
  titulo: 'Legal and privacy notice',
  intro: 'Here we explain who is behind this website, what data of yours it collects, what we use it for and how you can ask us to correct or delete it.',
  secciones: [
    {
      titulo: 'Who is responsible?',
      bloques: [
        { tipo: 'p', contenido: <>DASTAN X-TECH is the trade name of <strong>Dastan Tamayo</strong>, an individual with registered address in Puebla, Puebla, Mexico, who is responsible for this website and for processing your data.</> },
        { tipo: 'ul', contenido: [
          <>Email: <a href="mailto:supportdaelworld@gmail.com" className="text-link">supportdaelworld@gmail.com</a></>,
          <>WhatsApp: <a href="https://wa.me/16055003653" className="text-link">+1 605 500 3653</a></>,
        ] },
      ],
    },
    {
      titulo: 'What data do we collect?',
      bloques: [
        { tipo: 'p', contenido: 'Only what you give us when you use the chat on this website:' },
        { tipo: 'ul', contenido: [
          'Your name, your website or Instagram username and your WhatsApp number, when you fill in the chat form.',
          'The messages you write in the chat, so we can reply and understand what you need.',
        ] },
        { tipo: 'p', contenido: 'We don’t ask for sensitive data. To know how many people visit the website we use Vercel’s analytics, which doesn’t use cookies or tell us who you are: it only provides aggregate visit figures.' },
      ],
    },
    {
      titulo: 'What do we use it for?',
      bloques: [
        { tipo: 'ul', contenido: [
          'Answering your questions in the chat.',
          'Preparing and sending you on WhatsApp whatever you ask for, such as the report on your website.',
          'Contacting you about the service you asked about.',
        ] },
        { tipo: 'p', contenido: 'We don’t sell your data or use it for third-party advertising.' },
      ],
    },
    {
      titulo: 'Who processes it?',
      bloques: [
        { tipo: 'p', contenido: 'To run the website we use these providers, which process data on our behalf and only for that purpose:' },
        { tipo: 'ul', contenido: [
          <><strong>Supabase</strong>: stores the data from the chat form.</>,
          <><strong>Groq</strong>: processes chat messages to generate the AI assistant’s replies.</>,
          <><strong>Vercel</strong>: hosts the website and measures visits without cookies.</>,
        ] },
        { tipo: 'p', contenido: 'Their servers may be outside Mexico, for example in the United States.' },
      ],
    },
    {
      titulo: 'How long do we keep it?',
      bloques: [
        { tipo: 'p', contenido: 'For as long as we need it to serve you or for as long as our working relationship lasts, and until you ask us to delete it.' },
      ],
    },
    {
      titulo: 'How do you exercise your rights?',
      bloques: [
        { tipo: 'p', contenido: 'You can ask at any time to access your data, correct it, delete it or object to our using it, and withdraw your consent. Email us at the address above with your name, the WhatsApp number you gave us and what you want to do. We will reply through the same channel. These rights also apply if you contact us from Colombia, the United States or any other country.' },
      ],
    },
    {
      titulo: 'Changes to this notice',
      bloques: [
        { tipo: 'p', contenido: 'If we change the way we handle your data, we will update this page and its last-updated date.' },
      ],
    },
  ],
};

export default t;
