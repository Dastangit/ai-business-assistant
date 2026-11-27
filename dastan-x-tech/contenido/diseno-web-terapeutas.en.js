// /en/services/web-design/therapists copy (English). Same layout as /en/services/web-design (components/paginas/DisenoWeb.jsx).
// If you change something here, change the same thing in diseno-web-terapeutas.es.js.
// Keyword map (26-nov-2026): «web design for therapists» (US 480, global 900, KD 18, CPC 11.5 USD).
// Data only: no functions (passed from server to client).
const t = {
  metadata: {
    title: 'Web Design for Therapists and Counselors | DASTAN X-TECH',
    description: 'Web design for therapists: a clear, calm website that explains your approach, fees and first session, with a private way to reach you in one tap.',
    keywords: ['Web design for therapists', 'Therapist website design', 'Website for counselors', 'Website for psychologists', 'Web design for small businesses'],
    ogTitle: 'Web Design for Therapists and Counselors | DASTAN X-TECH',
    ogDescription: 'Websites for therapists, counselors and psychologists that make the first step easier.',
  },
  servicioJsonLd: {
    name: 'Web Design for Therapists',
    serviceType: 'Website design for therapists, counselors and psychologists',
    description: 'We design or rebuild websites for therapists, counselors and psychologists: your approach in plain words, fees and session format, a private first contact in one tap, and a structure Google and AI assistants understand.',
    areaServed: ['United States', 'Mexico', 'Colombia'],
  },
  hero: {
    etiqueta: 'Service · Web Design for Therapists',
    titulo: <>Web design for therapists: a website that makes the <span className="accent-light">first step</span> easier.</>,
    texto: 'Reaching out to a therapist is hard. We build your practice’s website so a potential client understands who you are, how you work and what a first session involves, and can contact you privately in one tap.',
    mensajeChat: "I'd like information about a website for my therapy practice",
    boton: 'Discuss your practice’s website',
    tarjetaTitulo: 'What you get',
    tarjetaItems: ['A review of your current website', 'Your approach, fees and first session, clearly explained', 'Ready for Google and AI'],
    verCaso: 'See the 8 styles ↓',
  },
  caso: {
    etiqueta: 'Showcase',
    titulo: <>One website, <span className="accent-light">eight styles</span></>,
    intro: 'We rebuilt our own website, dastanxtech.com, in eight different styles, from calm and editorial to bold. Pick the one that suits your practice and we turn it into your website. (The showcase is in Spanish; your website can be in English, Spanish or both.)',
    items: [
      'With your name, your approach and your real copy: we never make anything up.',
      'A private way to reach you, one tap away from the very first second.',
      'Try them on your phone too: that’s where most people will find you.',
    ],
    boton: 'See the showcase ↗',
  },
  ventajas: {
    titulo: <>What a therapist’s website <span className="accent-light">needs</span></>,
    items: [
      { titulo: 'Your approach, in plain words', texto: 'What you help with (anxiety, couples, grief…), how you work and who you work with, written so people recognize themselves. AI assistants need this too, to recommend you when someone asks them for a therapist.' },
      { titulo: 'A private, simple first contact', texto: 'WhatsApp, phone or email one tap away, and a clear explanation of what happens after they write to you. No long forms asking for personal details.' },
      { titulo: 'Fees and format, clear', texto: 'Session length, fees, online or in person, and where you are: fewer back-and-forth messages before the first session.' },
      { titulo: 'Ready for Google and AI', texto: <>We structure the code and content so Google and AI assistants understand what you offer, where and how. We did it to our own website first: <a href="/en/blog/our-website-seo-report" className="text-link">from 77 to 91 on our SEO report</a>.</> },
    ],
  },
  caminos: {
    titulo: <>Two ways to <span className="accent-light">get started</span></>,
    items: [
      { etiqueta: 'New website', titulo: 'We rebuild your practice’s website or create one from scratch', texto: 'With your real name and brand, your approach explained and a private first contact one tap away. Ready in under 48 hours once we have your content.', boton: 'I want a new website', mensajeChat: 'I want a new website for my therapy practice', estilo: 'btn btn-suave' },
      { etiqueta: '48-Hour Fix', titulo: 'Already have a website? We fix what’s urgent', texto: 'Within 48 hours we apply the 5 most urgent fixes from your SEO report. If you get the new website afterwards, we deduct it.', boton: 'I want the 48-Hour Fix', mensajeChat: 'I want the 48-Hour Fix for my therapy practice’s website', estilo: 'btn btn-outline-light' },
    ],
  },
  faqTitulo: 'Frequently asked questions',
  faq: [
    { q: 'How much does a website for a therapist cost?', a: '100 USD, fixed price, the same as our Web Design service. If you need something that isn’t included (an online store or a custom booking system, for example), we tell you before we start.' },
    { q: 'How long does it take?', a: 'Under 48 hours from when you give us your content: your name or practice’s brand, your approach, fees and session format, and a photo of you if you want one.' },
    { q: 'Can clients book a first session from the website?', a: 'Yes. WhatsApp, phone or email are one tap away on every page, and if you already use an online booking tool, we link it so clients can book directly.' },
    { q: 'Does it work for online therapy?', a: 'Yes. We explain how your online sessions work and, if it applies, the places or time zones you cover, so people know from the start whether you can see them.' },
    { q: 'Does the website collect sensitive information?', a: 'No. People contact you by WhatsApp, phone or email, and the website doesn’t ask about their situation or health. The optional 24/7 chat only saves the name and WhatsApp of whoever asks, and we set it up for practical questions (fees, hours, online sessions), not clinical advice.' },
    { q: 'What if I already have a website?', a: 'We analyze it first: we give you an honest review with concrete, observable problems — each with the reason it costs you clients — before touching anything.' },
  ],
  cierre: {
    titulo: 'Want to know what your practice’s website is missing?',
    texto: 'Get a free SEO report on your website: your score from 0 to 100 and the 5 most urgent fixes, as a PDF on WhatsApp. No website yet? We create one for you, even from your Instagram. We reply as soon as possible.',
    botonDiagnostico: 'Get my free SEO report',
    whatsappTexto: "Hi, I saw the Web Design for Therapists page and I'd like my free SEO report.",
    whatsappEnlace: 'or message us on WhatsApp →',
  },
};

export default t;
