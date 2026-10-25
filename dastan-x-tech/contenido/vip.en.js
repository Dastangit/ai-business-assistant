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
    // With the personal link (/en/vip?para=Business) it replaces the label
    para: 'Private proposal for {para}',
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
  // Every button opens WhatsApp with this message already written (the coupon is added if applied)
  whatsapp: {
    servicio: "Hi, I saw the VIP proposal and I'd like to order: {servicio} ({precio}).",
    cupon: ' Coupon: {cupon}.',
  },
  ariaPedir: 'Order {titulo} ({precio}) on WhatsApp',
  mes: '/month',
  // Table order: lowest to highest price (prices are in Vip.jsx, by id)
  paquetes: [
    {
      id: 'web',
      titulo: 'Web Design',
      texto: 'A professional website that builds trust, showcases your work and supports higher prices.',
      boton: 'I want my new website',
      incluye: ['Choose from 8 design styles, from clean corporate layouts to immersive 3D scrolling experiences', 'Your brand identity applied: logo, colors, photos and real prices', 'The 5 issues found on your current website, fixed', 'Mobile-optimized, ready for Google and ready to publish'],
    },
    {
      id: 'aeo',
      titulo: 'AI Search Optimization (AEO)',
      texto: 'We prepare your business so AI assistants like ChatGPT and Gemini recommend your services.',
      boton: 'I want to show up in AI',
      incluye: ['Google Business Profile in order', 'Content AI can quote', 'Reviews and trust signals', 'We review and improve your score on Is It Agent Ready, Cloudflare’s AI agent readiness test', 'Requires a website in good shape'],
    },
    {
      id: 'auditoria',
      titulo: 'Digital Business Audit',
      texto: 'We review your business inside and out to see where you’re losing time and money.',
      boton: 'I want my audit',
      incluye: ['Outside: website, social media, ads, reviews and competitors', 'Inside: processes and tools, with a short questionnaire or a 20-30 minute interview', 'Costly inconsistencies between both halves', 'Recoverable hours per month and a phased action plan'],
    },
  ],
  pack: {
    titulo: 'All-in-One Package',
    texto: 'All three services together. Already bought one? You only pay the difference.',
    ahorro: 'You save {monto} USD',
    ahorroCupon: 'You save {monto} USD with your coupon',
    boton: 'I want the full package',
    recomendado: 'Recommended',
    auditoriaIncluye: ['Process map in BPMN notation', 'AI and technology opportunities', 'Vulnerability assessment', 'Phased implementation plan'],
  },
  expres: {
    titulo: '48-Hour Fix',
    texto: 'Already have a website and want something quick? Within 48 hours we apply the 5 most urgent fixes from your report. If you order Web Design within the next 30 days, we deduct what you paid: just ask on WhatsApp.',
    boton: 'I want the 48-hour fix',
  },
  // Paying in pesos: bank details are never on the page, they are sent on WhatsApp
  mexico: {
    titulo: 'In Mexico?',
    texto: 'Pay in Mexican pesos (MXN) by SPEI bank transfer:',
    recepcionista: 'Virtual Receptionist',
    recepcionistaPrecio: '$2,900 + $750/month',
    chat: '24/7 automated chat',
    chatPrecio: '$300/month',
    membresiaPrecio: '$3,800/month',
    boton: 'Ask for payment details on WhatsApp',
    mensaje: "Hi, I saw the VIP proposal. I'm in Mexico and I'd like to pay in pesos by SPEI.",
  },
  dudas: 'Not sure which one to choose?',
  preguntaLex: 'Ask Lex',
  mensajeLex: "I'm not sure which package to choose.",
  pago: 'The button opens a WhatsApp chat with us: we answer your questions and send you the payment details, by PayPal from any country or SPEI bank transfer in Mexico. As soon as the payment is confirmed, we get started and send you the receipt.',
  condiciones: { antes: 'By ordering you accept our', enlace: 'terms of purchase' },
  mensuales: 'Monthly services',
  mensualidad: 'No lock-in and no automatic charges. Each month we send you the invoice on WhatsApp; if you skip a month, the service simply pauses.',
  pedirWhatsapp: 'Order on WhatsApp',
  // Ordered on WhatsApp because they are billed monthly
  complementos: [
    { titulo: '24/7 automated chat on your website', precio: '15 USD/month', texto: 'Answers questions 24/7 and saves the name and WhatsApp of whoever asks. Included in the Monthly Implementation Plan if it fits your business.', mensaje: "Hi, I saw the VIP proposal and I'm interested in the 24/7 automated chat for my website." },
    { titulo: 'Virtual WhatsApp Receptionist', precio: '150 USD + 39 USD/month', texto: 'Answers your WhatsApp 24/7, handles questions and saves each customer’s details. Installed on a secondary business number.', mensaje: "Hi, I saw the VIP proposal and I'm interested in the Virtual WhatsApp Receptionist." },
  ],
  membresia: {
    titulo: 'Monthly Implementation Plan',
    texto: 'Every month we carry out the action plan from your Digital Business Audit, with nothing for you to coordinate.',
    requisito: <>Requires a completed <strong>Digital Business Audit</strong>: it is the plan we carry out each month.</>,
    incluye: [
      '6 hours of work per week',
      '24/7 automated chat on your website included, if it fits your business',
      'Automations: reminders, quote follow-ups and reviews',
      'Choose within your hours: YouTube, personal brand or online store analysis, and an invoice dashboard',
      'Priority response over clients without a plan',
    ],
    boton: 'I want the plan',
  },
  pie: ['This is a private proposal. Please do not share this link.', 'Dastan Tamayo and Isdiel Martínez · DASTAN X-TECH'],
};

export default t;
