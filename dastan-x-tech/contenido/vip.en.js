// /en/vip copy (English). If you change something here, change the same thing in vip.es.js.
// Data only: no functions. Numbers are {x} placeholders filled in by components/paginas/Vip.jsx;
// prices live in that component (they must match PRECIOS in app/api/chat/route.js).
const t = {
  hero: {
    etiqueta: 'Private access · DASTAN X-TECH',
    titulo: <>Digital presence <br/> <span style={{ color: 'var(--brand)' }}>in your local area</span></>,
    texto: <>More and more customers search on Google or ask an AI before hiring a service. If your business doesn&apos;t have an authoritative digital presence, <strong style={{ color: 'var(--text)' }}>your competitors are taking your customers.</strong> This is our exclusive proposal to protect your business.</>,
    whatsappDiagnostico: "Hi, I got the VIP invitation and I'd like my free SEO report.",
    botonDiagnostico: 'Get my free SEO report',
  },
  plan: <>Implementation <span style={{ color: 'var(--brand)' }}>plan</span></>,
  cupon: {
    etiqueta: 'Enter discount code',
    placeholder: 'Code',
    nota: 'VIP users only',
    aplicado: '✓ Coupon applied',
    conDescuento: 'Prices include your VIP discount.',
  },
  recibes: 'You get',
  incluye: 'Includes',
  contratar: 'Buy now',
  ariaContratar: 'Buy {titulo} for ${precio} USD',
  // Table order: lowest to highest price (prices are in Vip.jsx, by id)
  paquetes: [
    {
      id: 'web',
      titulo: 'Web Design',
      texto: 'A website that builds trust, shows your work and justifies higher prices.',
      incluye: ['Your website rebuilt as an immersive 3D scrolling experience', 'With your real branding: logo, colors, photos and prices', 'A review of 5 problems on your current website', 'Delivered ready to publish'],
    },
    {
      id: 'aeo',
      titulo: 'AI Search Optimization (AEO)',
      texto: 'We prepare your business so AI assistants like ChatGPT and Gemini recommend your services.',
      incluye: ['Google Business Profile in order', 'Content AI can quote', 'Reviews and trust signals', 'Requires a website in good shape'],
    },
    {
      id: 'auditoria',
      titulo: 'Digital Business Audit',
      texto: 'We review your business inside and out to see where you’re losing time and money.',
      incluye: ['Outside: website, social media, ads, reviews and competitors', 'Inside: processes and tools (36 questions)', 'Costly inconsistencies between both halves', 'Recoverable hours per month and a phased action plan'],
    },
  ],
  pack: {
    titulo: 'All-in-One Package',
    texto: 'All three services together. Already bought one? You only pay the difference.',
    ahorro: 'You save ${monto}',
    ahorroCupon: 'You save ${monto} with your coupon',
    boton: 'Buy the package',
    aria: 'Buy the All-in-One Package for ${precio} USD',
  },
  expres: {
    titulo: '48-Hour Fix',
    texto: 'Already have a website and want something quick? Within 48 hours we apply the 5 most urgent fixes from your report. If you order Web Design within the next 30 days, we deduct it.',
    aria: 'Buy the 48-Hour Fix for ${precio} USD',
  },
  dudas: 'Not sure which one to choose?',
  preguntaLex: 'Ask Lex',
  mensajeLex: "I'm not sure which package to choose.",
  otroPago: 'If you need another payment method, contact us on',
  mensuales: 'Monthly services',
  pedirWhatsapp: 'Order on WhatsApp',
  // Ordered on WhatsApp because they are billed monthly
  complementos: [
    { titulo: 'AI chat on your website', precio: '$15/month', texto: 'Answers questions 24/7 and saves the name and WhatsApp of whoever asks. Included in the Monthly Implementation Plan if it fits your business.', mensaje: "Hi, I saw the VIP proposal and I'm interested in the AI chat for my website." },
    { titulo: 'AI WhatsApp Receptionist', precio: '$150 + $39/month', texto: 'Answers your WhatsApp 24/7, handles questions and saves each customer’s details. Installed on a secondary business number.', mensaje: "Hi, I saw the VIP proposal and I'm interested in the AI WhatsApp Receptionist." },
  ],
  membresia: {
    titulo: 'Monthly Implementation Plan',
    precio: '$200/month',
    texto: 'Every month we carry out the action plan from your Digital Business Audit, with nothing for you to coordinate. 2-month minimum.',
    incluye: [
      '24 hours of development per month',
      'AI chat on your website included, if it fits your business',
      'Automations: reminders, quote follow-ups and reviews',
      'Choose within your hours: YouTube, personal brand or online store analysis, and an invoice dashboard',
      'Priority response over clients without a plan',
    ],
    boton: 'Pay the first month',
    aria: 'Pay the first month of the Monthly Implementation Plan for ${precio} USD',
    nota: 'The following months are billed monthly.',
  },
  pie: ['This is a private proposal. Please do not share this link.', '© 2026 DASTAN X-TECH'],
};

export default t;
