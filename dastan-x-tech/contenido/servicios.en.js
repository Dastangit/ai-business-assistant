// /en/services copy (English). If you change something here, change the same thing in servicios.es.js.
// Data only: no functions (passed from server to client).
const t = {
  metadata: {
    title: 'Our Services | DASTAN X-TECH',
    description: 'Web Design, Digital Business Audit and AI Search Optimization (AEO): three services so your business never loses a customer.',
    keywords: ['DASTAN X-TECH services', 'Professional web design', 'Digital business audit', 'AI search optimization'],
    ogTitle: 'Our Services | DASTAN X-TECH',
    ogDescription: 'Web Design, Digital Business Audit and AI Search Optimization (AEO): three services so your business never loses a customer.',
  },
  etiqueta: 'Services',
  titulo: <>Three services designed so your business <span className="accent-light">never loses a customer</span></>,
  subtitulo: 'Every decision, in every service, starts with the same question: does this really help this business?',
  tarjetas: [
    { clave: 'disenoWeb', title: 'Web Design', tagline: 'We rebuild your current website with your real brand, in under 48 hours.' },
    { clave: 'auditoria', title: 'Digital Business Audit', tagline: 'We pinpoint exactly where your business is losing time and money.' },
    { clave: 'aeo', title: 'AI Search Optimization (AEO)', tagline: 'Get your business recommended by AI, not just Google.' },
  ],
  verDetalle: 'See details →',
  // Price and savings must match PRECIOS in app/api/chat/route.js
  pack: {
    etiqueta: 'All-in-One Package',
    titulo: 'All three services for 400 USD',
    texto: 'Web Design, Digital Business Audit and AI Search Optimization (AEO): you save 50 USD compared to buying them separately. Already bought one? You only pay the difference.',
    mensajeChat: "I'd like information about the All-in-One Package",
    boton: 'Ask about the All-in-One Package',
  },
  // Must match the chat (app/api/chat/route.js) and public/llms.txt
  extras: {
    etiqueta: 'On request',
    titulo: 'We also do',
    items: [
      { title: 'YouTube channel analysis', text: 'thumbnails, titles, hooks and your best-performing videos; we show you where viewers drop off and what to film next.' },
      { title: 'Personal brand analysis', text: 'your profile, your content, your authority and the path to getting hired, with what to do over the next 30 days.' },
      { title: 'Online store analysis', text: 'we go through your store like a shopper all the way to checkout and show you where sales slip away and what each leak costs.' },
      { title: 'Invoice dashboard', text: 'we read your PDF invoices and give you a dashboard with income, expenses, taxes, balance and your best customers.' },
    ],
    nota: 'Ordered individually, priced case by case. With the Monthly Implementation Plan, you choose them within your monthly hours.',
    mensajeChat: "I'd like information about the on-request services",
    boton: 'Ask about a service',
  },
};

export default t;
