// /en/services/web-design copy (English). If you change something here, change the same thing in diseno-web.es.js.
// Data only: no functions (passed from server to client).
const t = {
  metadata: {
    title: 'Web Design for Small Businesses | DASTAN X-TECH',
    description: 'We rebuild your business website with your real brand, your services, your prices and your WhatsApp one tap away.',
    keywords: ['Web design for small businesses', 'Web design for local businesses', 'Professional web design', 'AI search optimization'],
    ogTitle: 'Web Design for Small Businesses | DASTAN X-TECH',
    ogDescription: 'Website design for small businesses, optimized for local SEO and AI answer engines (AEO).',
  },
  servicioJsonLd: {
    name: 'Web Design',
    serviceType: 'Web design and development for small businesses',
    description: 'We rebuild small business websites with an architecture optimized for local SEO and AI answer engines (AEO), keeping the client’s real brand.',
    areaServed: ['United States', 'Mexico', 'Colombia'],
  },
  hero: {
    etiqueta: 'Service · Web Design',
    titulo: <>Your new website, with your brand and your <span className="accent-light">WhatsApp</span> one tap away.</>,
    texto: 'We rebuild your business website: your services explained, your prices clear and your WhatsApp always visible. With the structure Google and AI assistants need to understand what you offer.',
    mensajeChat: "I'd like information about Web Design for my business",
    boton: 'Discuss your project',
    tarjetaTitulo: 'What you get',
    tarjetaItems: ['A review of your current website', 'A new, fast, mobile-friendly website', 'Ready for Google and AI'],
    verCaso: 'See a real redesign ↓',
  },
  caso: {
    etiqueta: 'Real example',
    titulo: <>What a <span className="accent-light">real redesign</span> looks like</>,
    intro: "This is a redesign we did for a small spa (we're keeping its name private for now). The original website had no clickable WhatsApp, empty scroll sections and didn't list any of its services. Here's what we changed:",
    items: [
      'Clickable phone and WhatsApp from the very first second — before, there was only a 6-field form.',
      'Each service (massages, specific treatments, hot stone therapy...) with its own section, instead of unexplained photos.',
      'Continuous scrolling with no empty screens or repeated banners that looked like spam.',
    ],
    boton: 'See the live redesign ↗',
    demoTitulo: 'And this is how ours would look',
    demoTexto: 'We applied the same method to dastanxtech.com: diagnosis, branding and a new website.',
    demoEnlace: 'See the demo ↗',
  },
  ventajas: {
    titulo: <>More than a <span className="accent-light">pretty website</span></>,
    items: [
      { titulo: 'Ready for Google and AI', texto: 'We structure the code and content so Google and AI assistants understand what you offer, where and at what price: the foundation for being found and recommended.' },
      { titulo: 'And if you want, an assistant that never lets anyone slip away', texto: 'Optional: it answers your customers’ questions at any time and saves their name and WhatsApp so you can contact them the next day. Try it right here on this page.' },
    ],
  },
  caminos: {
    titulo: <>Two ways to <span className="accent-light">get started</span></>,
    items: [
      { etiqueta: 'New website', titulo: 'We rebuild your website or create one from scratch', texto: 'With your real brand, your services explained and your WhatsApp one tap away. Ready in under 48 hours once we have your brand and your content.', boton: 'I want a new website', mensajeChat: 'I want a new website for my business', estilo: 'btn btn-suave' },
      { etiqueta: '48-Hour Fix', titulo: 'Already have a website? We fix what’s urgent', texto: 'Within 48 hours we apply the 5 most urgent fixes from your SEO report. If you get the new website afterwards, we deduct it.', boton: 'I want the 48-Hour Fix', mensajeChat: 'I want the 48-Hour Fix for my website', estilo: 'btn btn-outline-light' },
    ],
  },
  faqTitulo: 'Frequently asked questions',
  faq: [
    { q: 'How long does the new website take?', a: 'Under 48 hours from when you give us your brand and your content (logo, copy, services and prices).' },
    { q: 'How much does it cost?', a: 'From 100 USD. The final price depends on how many pages and services your website has, and we confirm it before we start.' },
    { q: 'What do you need from my business to get started?', a: 'Your real brand: logo, colors, fonts, copy, prices and current reviews. We never make up content that isn’t yours.' },
    { q: 'What if I already have a website?', a: 'We analyze it first: we give you an honest review with concrete, observable problems — each with the reason it costs you customers — before touching anything.' },
    { q: 'What if I don’t want a new website?', a: 'If you already have a website and only want to fix the most urgent issues, there’s the 48-Hour Fix: for 49 USD we apply the 5 most urgent fixes from your SEO report within 48 hours. If you order Web Design within the next 30 days, we deduct it.' },
    { q: 'Does the website include the AI chat?', a: 'It’s optional: an assistant that answers questions at any time and saves the name and WhatsApp of whoever asks, so no one slips away. It costs 15 USD a month, or it’s included in the Monthly Implementation Plan if it fits your business. It’s the same one you can try on this page.' },
  ],
  cierre: {
    titulo: 'Want to know what your website is missing?',
    texto: 'Get a free SEO report on your website: your score from 0 to 100 and the 5 most urgent fixes, as a PDF on WhatsApp. No website yet? We create one for you, even from your Instagram.',
    botonDiagnostico: 'Get my free SEO report',
    whatsappTexto: "Hi, I saw the Web Design page and I'd like my free SEO report.",
    whatsappEnlace: 'or message us on WhatsApp →',
  },
};

export default t;
