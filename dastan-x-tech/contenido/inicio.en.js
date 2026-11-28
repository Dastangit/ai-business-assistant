// Home page copy (English). If you change something here, change the same thing in inicio.es.js.
// Data only: no functions (passed from server to client).

const t = {
  nav: {
    principal: 'Main',
    irInicio: 'DASTAN X-TECH, go to home page',
    servicios: 'Services',
    wa: 'Message us on WhatsApp at +1 605-500-3653',
  },
  etiqueta: 'Digital consulting, AI and automation',
  // The headline is split in two: the second part gets the brand violet
  titulo: 'Find out, with evidence, why your business ',
  tituloDestacado: 'is losing customers online.',
  subtitulo: 'Your score from 0 to 100 and the 5 most urgent fixes for your website.',
  botonDiagnostico: 'Get your free SEO report',
  puntos: ['Every issue comes with proof', 'We never ask for your passwords', '100% remote'],
  // Top line of the editorial home page (mono, above the headline)
  // No brand name: it is already in the site header
  cabecera: ['Digital consulting, AI and automation', 'United States · Mexico · Spain · Colombia · Rest of the world'],
  // Card to the right of the hero: an excerpt of public/ejemplo-diagnostico-seo.html (fictional business, in Spanish) and the real case from the blog
  muestra: {
    aria: 'Sample of the free SEO report',
    bajar: 'See a sample report',
    etiqueta: 'Sample · SEO report',
    nota: 32,
    deCien: 'out of 100',
    negocio: 'Clínica Dental Olmedo',
    aviso: 'Fictional business',
    urgentesTitulo: 'The 5 most urgent issues',
    urgentes: ['Google doesn’t know what the clinic does or where it is', 'Google doesn’t recognize it as a local business', 'On mobile, the page overflows the screen'],
    enlace: 'See the full sample (in Spanish) →',
    real: 'Real case: our own website, from 77 to 91 →',
  },
  quienes: {
    etiqueta: 'Team',
    titulo: 'Who we *are*',
    texto: <>We are <strong>Dastan Tamayo</strong>, founder of DASTAN X-TECH, and <strong>Isdiel Martínez</strong>, digital consultant and strategist. We work with small businesses in any industry —clinics, spas, salons, home services, shops, professional firms— that do great work but don&apos;t show it online: the website doesn&apos;t convince, the WhatsApp number is hard to find or answered late, and when someone asks an AI, it recommends the competition. We work 100% remotely with businesses in the United States, Mexico, Colombia, Spain and the rest of the world.</>,
    enlace: 'Our story →',
  },
  // Same order as the photos in components/paginas/Inicio.jsx: Dastan, Isdiel
  equipo: [
    { nombre: 'Dastan Tamayo', rol: 'Founder of DASTAN X-TECH', alt: 'Dastan Tamayo, founder of DASTAN X-TECH' },
    { nombre: 'Isdiel Martínez', rol: 'Digital consultant and strategist', alt: 'Isdiel Martínez, digital consultant and strategist at DASTAN X-TECH' },
  ],
  // Prices (fixed) must match PRECIOS in app/api/chat/route.js.
  // items isn't shown on the home page (cards without bullets): the /servicios page uses it
  servicios: {
    etiqueta: 'Services',
    // Doesn't repeat the hero headline (already about losing customers); /servicios keeps its own line
    titulo: 'What we do for your *business*',
    grupoWeb: 'Website and visibility',
    grupoIa: 'Automation and AI',
    cinta: 'Our services',
    cintaDiagnostico: 'Free SEO report',
    todos: 'See all services and prices →',
    // No page of their own: each row opens the chat with its question. Names follow what people search (Semrush and Google, 28-Nov-2026)
    ia: [
      { title: 'AI WhatsApp Assistant', cta: 'Check pricing', text: 'A virtual receptionist that answers your WhatsApp 24/7, on a secondary business number.', mensaje: 'I want information about the Virtual WhatsApp Receptionist' },
      { title: 'AI chatbot for your website', cta: 'Try it here', text: 'Answers your customers’ questions at any hour, using your business information.', mensaje: 'I want information about the 24/7 Automated Chat for my website' },
      { title: 'AI automation for small businesses', cta: 'Tell us your case', text: 'Appointment reminders, quote follow-ups and review requests that run on their own, built with n8n and Make.', mensaje: 'I want to automate processes in my business' },
      { title: 'CRM connected to WhatsApp', cta: 'See what’s included', text: 'Your contacts organized in a CRM, linked to your website and WhatsApp, so no customer slips through.', mensaje: 'I want information about a CRM for my business' },
    ],
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
  pruebas: {
    etiqueta: 'Proof',
    titulo: 'We tested it on *our own website* first',
    a: 'went to',
    items: [
      { clave: 'blogDiagnosticoSeo', etiqueta: 'SEO report', antes: 77, despues: 91, texto: 'We ran our website through the same report we send you for free, and fixed what it found.', enlace: 'Read the case →' },
      { clave: 'blogAuditorAeo', etiqueta: 'AEO auditor', antes: 94, despues: 97, texto: 'We measured whether AI understands and can quote our website, and tuned it up to 97 out of 100.', enlace: 'See how we measured it →' },
      { clave: 'blogConsultorAeo', etiqueta: 'Is It Agent Ready · level', antes: 4, despues: 5, texto: 'Cloudflare’s test for AI agents: we moved up to level 5, “Agent-Native”, the highest.', enlace: 'See the result →' },
    ],
  },
  pasos: {
    etiqueta: 'Method',
    titulo: 'How we *work*',
    items: [
      { titulo: 'Your website first', texto: 'We send you its free SEO report (your score from 0 to 100 and the 5 most urgent fixes, as a PDF) and, if needed, we rebuild it with your real brand. No website yet? We create one for you.' },
      { titulo: 'Then the whole business', texto: 'If you want the full picture, the Digital Business Audit looks at your whole business, inside and out, and gives you a clear plan. Unlike the free report, it goes beyond your website.' },
      { titulo: 'Recommended by Google and AI', texto: 'We sort out your business profile, your reviews and content AI can quote, checked with Is It Agent Ready, the Cloudflare tool. And we automate what repeats.' },
    ],
  },
  // Questions people type into Google (autocomplete and Semrush, 28-Nov-2026). Answers also go out as FAQPage:
  // plain text. Prices must match PRECIOS and OTROS in app/api/chat/route.js
  faq: {
    etiqueta: 'FAQ',
    titulo: 'What people *ask us* most',
    items: [
      { p: 'What does the free SEO report include?', r: 'Your score from 0 to 100 and the 5 most urgent fixes for your website, as a PDF, each with its evidence. We never ask for passwords: we work from what anyone can see online.', enlace: { clave: 'auditoriaGratis', texto: 'More about the free report →' } },
      { p: 'How much does a small business website cost?', r: 'Our Web Design costs 100 USD, one-time: we rebuild your website with your real brand, your services and your WhatsApp one tap away.', enlace: { clave: 'blogPrecioWeb', texto: 'How much does a website cost in 2026? →' } },
      { p: 'How much does an AI chatbot cost?', r: 'The AI WhatsApp Assistant costs 150 USD to set up and 39 USD a month; the 24/7 Automated Chat for your website, 15 USD a month. No lock-in: if you skip a month, the service pauses.' },
      { p: 'What can a small business automate?', r: 'Whatever repeats every day: appointment reminders, quote follow-ups, review requests, or moving contacts from your website and WhatsApp into a CRM. A one-off automation costs 100 USD, one-time, and is set up in your own accounts.' },
      { p: 'How do I get my business to show up in ChatGPT?', r: 'AI recommends businesses it understands and trusts: a clear website it can quote, a complete Google Business Profile and reviews. That is what we call AI Search Optimization (AEO).', enlace: { clave: 'blogChatgpt', texto: 'How to show up in ChatGPT →' } },
      { p: 'Do you work with businesses outside the United States?', r: 'Yes. We work 100% remotely with businesses in the United States, Mexico, Colombia, Spain and the rest of the world. Outside Mexico you pay by PayPal in USD or bank transfer.' },
    ],
  },
  cierre: {
    etiqueta: 'Start free',
    titulo: "Let's talk about *your business*",
    texto: 'Leave us your name, your website and your WhatsApp, and we will send you, for free, your SEO score from 0 to 100 and the 5 most urgent fixes, as a PDF. We reply as soon as possible.',
    boton: 'Send me my free report',
  },
};

export default t;
