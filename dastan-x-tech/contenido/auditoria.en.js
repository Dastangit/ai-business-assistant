// /en/services/digital-business-audit copy (English). If you change something here, change the same thing in auditoria.es.js.
// Data only: no functions (passed from server to client).
const t = {
  metadata: {
    title: 'Digital Business Audit | DASTAN X-TECH',
    description: 'We find where your business is losing time and customers, with real evidence, not guesswork. A report with your digital presence, technology maturity and an action plan.',
    keywords: ['Digital business audit', 'Small business audit', 'SEO audit', 'Business diagnosis', 'AI consulting'],
    ogTitle: 'Digital Business Audit | DASTAN X-TECH',
    ogDescription: 'A complete review of your digital presence and internal processes, with real evidence and a phased action plan.',
  },
  servicioJsonLd: {
    name: 'Digital Business Audit',
    serviceType: 'Digital business audit and AI consulting',
    description: 'A complete audit of digital presence (website, social media, Google Business Profile, reviews, competitors) and internal processes (lead generation, scheduling, payments, tools). Delivers a digital presence score, a technology maturity level, the hours and money recoverable each month, and a phased action plan.',
    areaServed: ['United States', 'Mexico', 'Colombia'],
  },
  hero: {
    etiqueta: 'Service · Digital Business Audit',
    titulo: <>Find out where your business is <span className="accent-light">losing money</span>.</>,
    texto: 'We analyze your business from the outside (website, social media, Google, reviews, competitors) and from the inside (scheduling, payments, tools, lost hours), and we cross-check both halves to find the inconsistencies that cost you the most.',
    mensajeChat: "I'd like information about the Digital Business Audit",
    boton: 'Ask about the Digital Business Audit',
    tarjetaTitulo: 'What you get',
    tarjetaItems: ['Digital presence score out of 100', 'Technology maturity score out of 5', 'Process analysis', 'A phased action plan'],
  },
  ventajas: {
    titulo: <>Real evidence, not <span className="accent-light">guesswork</span></>,
    items: [
      { titulo: 'Outside and inside', texto: 'We review your website, social media, active ads, Google Business Profile, reviews and competitors — everything a customer sees before contacting you. Then we look at how you handle scheduling, payments and which tools you use behind the scenes.' },
      { titulo: 'A report with actionable numbers', texto: 'Every finding backed by real evidence — nothing made up — and a phased action plan with an estimate of the hours and money you could recover each month.' },
    ],
  },
  automatizar: {
    titulo: <>And then, we <span className="accent-light">automate it</span></>,
    intro: 'The process analysis in the audit shows you where your hours go. If you want, we take care of it afterwards: always in your own accounts, with free tools whenever possible.',
    items: [
      'A CRM so no customer goes unanswered: every contact from your website, logged and followed up.',
      'Appointment reminders, quote follow-ups and review requests, running on their own.',
      'Round-the-clock AI support, on your website and on your WhatsApp.',
    ],
    caminos: [
      { etiqueta: 'One-off automation', titulo: 'One thing, done', texto: 'For example, setting up your CRM and connecting it to your website form, or an automatic appointment reminder. One-time payment, no maintenance.', boton: 'I want an automation', mensajeChat: "I'd like information about a one-off automation for my business", estilo: 'btn btn-suave' },
      { etiqueta: 'Monthly Implementation Plan', titulo: 'Every month, whatever helps you most', texto: '24 hours of work a month applying your audit plan: we automate what saves you the most time, without you having to coordinate anything.', boton: 'I want the Implementation Plan', mensajeChat: "I'd like information about the Monthly Implementation Plan", estilo: 'btn btn-outline-light' },
    ],
  },
  faqTitulo: 'Frequently asked questions',
  faq: [
    { q: 'Do you need access to my systems or accounts to audit my business?', a: 'No. We audit what’s public (your website, social media, Google Business Profile, reviews, competitors) and what you tell us in a short form about how your business runs inside. We never ask to log into your software, dashboards or accounts.' },
    { q: 'What do I get at the end of the audit?', a: 'A single report with two clear numbers: your digital presence out of 100 and your technology maturity out of 5, every finding backed by real evidence, and a phased action plan with an estimate of how much time and money you could recover each month.' },
    { q: 'Is it a generic audit or tailored to my business?', a: 'Every finding comes with real evidence from your business — a sentence from your website, a dated review, one of your answers — never a template or a made-up figure.' },
    { q: 'How much does the Digital Business Audit cost?', a: 'From 200 USD. It’s our most complete service and it doesn’t include the website: if you also want a new website and to be recommended by AI, the All-in-One Package (Audit + Web Design + AEO) costs 400 USD. The final price depends on the size of your business and we confirm it before we start. The free SEO report is separate and only reviews your website.' },
    { q: 'Can you help me apply what the audit finds?', a: 'Yes, in two ways. With a one-off automation, for a one-time 100 USD: a single thing, like setting up a free CRM and connecting it to your website form, or an automatic appointment reminder. Or with the Monthly Implementation Plan, for 200 USD a month (2-month minimum): 24 hours of work a month applying the audit plan, with the automations that suit your business best. Everything is set up in your own accounts.' },
  ],
  cierre: {
    titulo: 'Want to know what’s costing you money?',
    texto: 'Message us and we’ll show you exactly where your business is losing time and customers. Not sure yet? Start with the free SEO report on your website: it’s the outside part of the audit.',
    botonAuditoria: 'Ask about the Digital Business Audit',
    mensajeChat: "I'd like information about the Digital Business Audit",
    botonDiagnostico: 'Get my free SEO report',
    whatsappTexto: "Hi, I saw the Digital Business Audit page and I'd like more information.",
    whatsappEnlace: 'or message us on WhatsApp →',
  },
};

export default t;
