// /en/services/web-design/lawyers copy (English). Same layout as /en/services/web-design (components/paginas/DisenoWeb.jsx).
// If you change something here, change the same thing in diseno-web-abogados.es.js.
// Keyword map: the target is the Spanish page («diseño web para abogados», Spain). This one is its English pair; «law firm web design» is very competitive in the US.
// Data only: no functions (passed from server to client).
const t = {
  metadata: {
    title: 'Web Design for Lawyers and Law Firms | DASTAN X-TECH',
    description: 'Web design for lawyers: a clean, trustworthy website that explains your practice areas, the first consultation and your fees, with discreet contact in one tap.',
    keywords: ['Web design for lawyers', 'Law firm website design', 'Website for attorneys', 'Lawyer website', 'Web design for small businesses'],
    ogTitle: 'Web Design for Lawyers and Law Firms | DASTAN X-TECH',
    ogDescription: 'Websites for lawyers and law firms that build trust before the first consultation.',
  },
  servicioJsonLd: {
    name: 'Web Design for Lawyers',
    serviceType: 'Website design for lawyers and law firms',
    description: 'We design or rebuild websites for lawyers and law firms: practice areas explained without jargon, what the first consultation involves and its fees, discreet contact in one tap, and a structure Google and AI assistants understand.',
    areaServed: ['United States', 'Spain', 'Mexico', 'Colombia'],
  },
  hero: {
    etiqueta: 'Service · Web Design for Lawyers',
    titulo: <>Web design for lawyers: a website that builds <span className="accent-light">trust</span> before the first consultation.</>,
    texto: 'People looking for a lawyer are usually in a hurry and full of questions. We build your firm’s website so they understand in seconds how you can help, what the first consultation involves and how to reach you discreetly.',
    mensajeChat: "I'd like information about a website for my law firm",
    boton: 'Discuss your firm’s website',
    tarjetaTitulo: 'What you get',
    tarjetaItems: ['A review of your current website', 'Your practice areas and first consultation, clearly explained', 'Ready for Google and AI'],
    verCaso: 'See the 8 styles ↓',
  },
  caso: {
    etiqueta: 'Showcase',
    titulo: <>One website, <span className="accent-light">eight styles</span></>,
    intro: 'We rebuilt our own website, dastanxtech.com, in eight different styles, from understated and editorial to bold. Pick the one that suits your firm and we turn it into your website. (The showcase is in Spanish; your website can be in English, Spanish or both.)',
    items: [
      'With your name, your bar number if you want to show it, and your real copy: we never make anything up.',
      'A discreet way to reach you, one tap away from the very first second.',
      'Try them on your phone too: that’s where most people will find you.',
    ],
    boton: 'See the showcase ↗',
  },
  ventajas: {
    titulo: <>What a lawyer’s website <span className="accent-light">needs</span></>,
    items: [
      { titulo: 'Your practice areas, without jargon', texto: 'Divorce, estates, employment, claims: each area with the cases you handle and what the client can expect, written for people who aren’t lawyers. AI assistants need this too, to recommend you when someone asks them for a lawyer.' },
      { titulo: 'Discreet, simple contact', texto: 'WhatsApp, phone or email one tap away, and a clear explanation of what happens after they write to you. The website doesn’t ask for case details: that conversation happens with you, not in a form.' },
      { titulo: 'First consultation and fees, clear', texto: <>Whether the first consultation is free or paid, how long it lasts, whether you meet online or at your office, and where you are. Fewer calls asking the same thing. For a sense of prices, see <a href="/en/blog/how-much-does-a-website-cost" className="text-link">how much a website costs</a>.</> },
      { titulo: 'Ready for Google and AI', texto: <>We structure the code and content so Google and AI assistants understand which areas you handle and where you practice. We did it to our own website first: <a href="/en/blog/our-website-seo-report" className="text-link">from 77 to 91 on our SEO report</a>.</> },
    ],
  },
  caminos: {
    titulo: <>Two ways to <span className="accent-light">get started</span></>,
    items: [
      { etiqueta: 'New website', titulo: 'We rebuild your firm’s website or create one from scratch', texto: 'With your real name and brand, your practice areas explained and discreet contact one tap away. Ready in under 48 hours once we have your content.', boton: 'I want a new website', mensajeChat: 'I want a new website for my law firm', estilo: 'btn btn-suave' },
      { etiqueta: '48-Hour Fix', titulo: 'Already have a website? We fix what’s urgent', texto: 'Within 48 hours we apply the 5 most urgent fixes from your SEO report. If you get the new website afterwards, we deduct it.', boton: 'I want the 48-Hour Fix', mensajeChat: 'I want the 48-Hour Fix for my law firm’s website', estilo: 'btn btn-outline-light' },
    ],
  },
  faqTitulo: 'Frequently asked questions',
  faq: [
    { q: 'How much does a website for a lawyer cost?', a: '100 USD, fixed price, the same as our Web Design service. If you need something that isn’t included (a client portal or a custom booking system, for example), we tell you before we start.' },
    { q: 'How long does it take?', a: 'Under 48 hours from when you give us your content: your name or firm’s brand, your practice areas, what the first consultation involves, and a photo of you or your team if you want one.' },
    { q: 'Does it work for a solo lawyer or a firm with several lawyers?', a: 'Both. If you practice alone, the website focuses on you and your areas; if there are several of you, each lawyer can have a profile with their specialty.' },
    { q: 'Can I advertise my services on the website?', a: 'Yes, and we do it in a measured tone: we explain what you do without promising outcomes or comparing you with other firms. You review all the copy before it goes live and decide what is shown.' },
    { q: 'Does the website ask for case details?', a: 'No. People contact you by WhatsApp, phone or email, and the website doesn’t ask about their matter. The optional 24/7 chat only saves the name and WhatsApp of whoever asks, and we set it up for practical questions (areas, hours, first consultation), not legal advice.' },
    { q: 'Does it include the legal notice and privacy policy?', a: 'We link the legal notice, privacy policy and cookie policy from the footer of every page, with your firm’s details. You write or review the legal text yourself, since you know it best.' },
  ],
  cierre: {
    titulo: 'Want to know what your firm’s website is missing?',
    texto: 'Get a free SEO report on your website: your score from 0 to 100 and the 5 most urgent fixes, as a PDF on WhatsApp. No website yet? We create one for you, even from your Instagram. We reply as soon as possible.',
    botonDiagnostico: 'Get my free SEO report',
    whatsappTexto: "Hi, I saw the Web Design for Lawyers page and I'd like my free SEO report.",
    whatsappEnlace: 'or message us on WhatsApp →',
  },
};

export default t;
