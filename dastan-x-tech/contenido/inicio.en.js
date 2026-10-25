// Home page copy (English). If you change something here, change the same thing in inicio.es.js.
// Data only: no functions (passed from server to client).
// Formatted paragraphs carry a key: they travel from server to client inside a list and React requires it
import { Fragment } from 'react';

const t = {
  nav: {
    principal: 'Main',
    irInicio: 'DASTAN X-TECH, go to home page',
    servicios: 'Services',
    wa: 'Message us on WhatsApp at +1 605-500-3653',
  },
  etiqueta: 'Digital consulting and high-level technology',
  // The headline is split in two: the second part gets the brand gradient
  titulo: 'Find out, with evidence, why your business ',
  tituloDestacado: 'is losing customers online.',
  tituloSr: ' DASTAN X-TECH, high-level digital consulting for small businesses in the United States, Mexico, Colombia and the rest of the world.',
  subtitulo: 'Your score from 0 to 100 and the 5 most urgent fixes for your website.',
  botonDiagnostico: 'Get your free SEO report',
  puntos: ['Every issue comes with proof', 'We never ask for your passwords', '100% remote'],
  // Card to the right of the hero: an excerpt of public/ejemplo-diagnostico-seo.html (fictional business, in Spanish) and the real case from the blog
  muestra: {
    aria: 'Sample of the free SEO report',
    etiqueta: 'Sample · SEO report',
    nota: 32,
    deCien: 'out of 100',
    negocio: 'Clínica Dental Olmedo',
    aviso: 'Fictional business',
    urgentesTitulo: 'The 5 most urgent issues',
    urgentes: ['Google doesn’t know what the clinic does or where it is', 'Google doesn’t recognize it as a local business', 'On mobile, the page overflows the screen'],
    enlace: 'See the full sample (in Spanish) →',
    real: 'Real case: our own website, from 94 to 97 →',
  },
  // Section after «How we work»: what we look at before proposing anything
  diagnostico: {
    titulo: 'Before touching anything, we diagnose your business',
    items: [
      { titulo: 'Online presence', texto: 'How a customer sees you today: website, Google, social media and reviews. Scored out of 100.' },
      { titulo: 'Process map', texto: 'How your business works today: bookings, payments, customer service and tools.' },
      { titulo: 'Security', texto: "Your website's weak spots, before they cause you trouble." },
      { titulo: 'Action plan', texto: 'What to do, step by step, starting with what pays you back the most.' },
    ],
  },
  quienes: {
    titulo: 'Who we are',
    parrafos: [
      <Fragment key="presentacion">We are <strong>Dastan Tamayo</strong>, founder of DASTAN X-TECH, and <strong>Isdiel Martínez</strong>, digital consultant and strategist. We work with small businesses in any industry —clinics, spas, salons, home services, shops, professional firms— that do great work but don&apos;t show it online: the website doesn&apos;t convince, the WhatsApp number is hard to find or answered late, and when someone asks an AI, it recommends the competition.</Fragment>,
    ],
    historia: {
      titulo: 'How DASTAN X-TECH started',
      parrafos: [
        "DASTAN X-TECH wasn't our first idea. It started with our own business: we did good work, but you could barely see it online, and we needed more visibility to grow.",
        'So we took a step forward. We studied how businesses earn visibility today —on Google, on social media and in AI answers— and along the way we saw that many businesses like ours were in the same spot. That is how this consultancy was born.',
        "That's why we know how it feels when your ideas are good and still don't reach the people they should. Our job is to make the internet reflect the work you already do.",
      ],
    },
  },
  // Same order as the photos in components/paginas/Inicio.jsx: Dastan, Isdiel
  equipo: [
    { nombre: 'Dastan Tamayo', rol: 'Founder of DASTAN X-TECH', alt: 'Dastan Tamayo, founder of DASTAN X-TECH' },
    { nombre: 'Isdiel Martínez', rol: 'Digital consultant and strategist', alt: 'Isdiel Martínez, digital consultant and strategist at DASTAN X-TECH' },
  ],
  // Prices (fixed) must match PRECIOS in app/api/chat/route.js
  servicios: {
    etiqueta: 'Services',
    titulo: 'Three services so your business never loses a customer',
    tarjetas: [
      {
        clave: 'disenoWeb',
        label: '01 · Web',
        title: 'Web Design',
        text: 'We rebuild your current website with your real brand: your services, your prices and your WhatsApp one tap away.',
        items: ['An honest review of your current website.', 'A new, responsive website, ready to publish.', 'WhatsApp and phone always visible.'],
        link: 'Learn more about Web Design →',
        price: '100 USD',
      },
      {
        clave: 'auditoria',
        label: '02 · Audit',
        title: 'Digital Business Audit',
        text: 'We pinpoint exactly where your business is losing time and money, with evidence, not guesswork.',
        items: ['Digital presence score out of 100.', 'Tech maturity score out of 5.', 'Process analysis.', 'A phased action plan.'],
        link: 'Discover the Digital Business Audit →',
        price: '200 USD',
      },
      {
        clave: 'aeo',
        label: '03 · AI & AEO',
        title: 'AI Search Optimization (AEO)',
        text: 'Get your business recommended by AI, not just found in Google searches.',
        items: ['Google Business Profile and social media in order.', 'Content AI can quote.', 'Reviews and trust signals.'],
        link: 'Explore AI Search Optimization →',
        price: '150 USD',
      },
    ],
  },
  pasos: {
    titulo: 'How we work',
    items: [
      'We start with your website. We send you its free SEO report (your score from 0 to 100 and the 5 most urgent fixes, as a PDF) and, if needed, we rebuild it with your real brand. No website yet? We create one for you.',
      'If you want the full picture, the Digital Business Audit looks at your whole business, inside and out, and gives you a clear plan. Unlike the free report, it goes beyond your website.',
      'We position you so Google and AI recommend you: your business profile, your reviews and content that AI can quote.',
    ],
  },
  cierre: {
    titulo: "Let's talk about your business",
    texto: 'Leave us your name, your website and your WhatsApp, and we will send you, for free, your SEO score from 0 to 100 and the 5 most urgent fixes, as a PDF. We reply as soon as possible.',
    boton: 'Get your free SEO report',
  },
};

export default t;
