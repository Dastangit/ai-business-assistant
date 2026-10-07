// Home page copy (English). If you change something here, change the same thing in inicio.es.js.
// Data only: no functions (passed from server to client).
const t = {
  nav: {
    principal: 'Main',
    irInicio: 'DASTAN X-TECH, go to home page',
    servicios: 'Services',
    wa: 'Message us on WhatsApp at +1 605-500-3653',
  },
  etiqueta: 'Digital and AI consulting for small businesses',
  titulo: 'Find out, with evidence, why your business is losing customers online.',
  tituloSr: ' DASTAN X-TECH, digital and AI consulting for small businesses in the United States, Mexico, Colombia and the rest of the world.',
  subtitulo: 'A free SEO report on your website: your score from 0 to 100 and the 5 most urgent fixes, as a PDF on WhatsApp. If you want, we fix them with you afterwards.',
  botonDiagnostico: 'Get your free SEO report',
  puntos: ['Every issue comes with proof', 'We never ask for your passwords', '100% remote'],
  quienes: {
    titulo: 'Who we are',
    parrafos: [
      <>We are <strong>Dastan Tamayo</strong>, founder of DASTAN X-TECH, and <strong>Isdiel Martínez</strong>, AI consultant and digital strategist. We work with small businesses in any industry —clinics, spas, salons, home services, shops, professional firms— that do great work but don&apos;t show it online: the website doesn&apos;t convince, the WhatsApp number is hard to find or answered late, and when someone asks an AI, it recommends the competition.</>,
      <>We always start with an evidence-based diagnosis —a sentence from your website, a dated review, a screenshot— and finish with concrete actions, ranked by what pays you back the most.</>,
    ],
  },
  // Same order as the photos in components/paginas/Inicio.jsx: Dastan, Isdiel
  equipo: [
    { nombre: 'Dastan Tamayo', rol: 'Founder of DASTAN X-TECH', alt: 'Dastan Tamayo, founder of DASTAN X-TECH' },
    { nombre: 'Isdiel Martínez', rol: 'AI consultant and digital strategist', alt: 'Isdiel Martínez, AI consultant and digital strategist at DASTAN X-TECH' },
  ],
  // Starting prices must match PRECIOS in app/api/chat/route.js
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
        price: 'From 100 USD',
      },
      {
        clave: 'auditoria',
        label: '02 · Audit',
        title: 'Digital Business Audit',
        text: 'We pinpoint exactly where your business is losing time and money, with evidence, not guesswork.',
        items: ['Digital presence score out of 100.', 'Technology maturity score out of 5.', 'Process analysis.', 'A phased action plan.'],
        link: 'Discover the Digital Business Audit →',
        price: 'From 200 USD',
      },
      {
        clave: 'aeo',
        label: '03 · AI & AEO',
        title: 'AI Search Optimization (AEO)',
        text: 'Get your business recommended by AI, not just found in Google searches.',
        items: ['Google Business Profile and social media in order.', 'Content AI can quote.', 'Reviews and trust signals.'],
        link: 'Explore AI Search Optimization →',
        price: 'From 150 USD',
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
    texto: 'Leave us your name, your website and your WhatsApp, and we will send you, for free, your SEO score from 0 to 100 and the 5 most urgent fixes, as a PDF.',
    boton: 'Get your free SEO report',
  },
};

export default t;
