// /en/services/web-design/dentists copy (English). Same layout as /en/services/web-design (components/paginas/DisenoWeb.jsx).
// If you change something here, change the same thing in diseno-web-dentistas.es.js.
// Keyword map (26-nov-2026): «web design for dentists» (US 590, global 1,900, KD 29, CPC 17 USD).
// Data only: no functions (passed from server to client).
const t = {
  metadata: {
    title: 'Web Design for Dentists and Dental Clinics | DASTAN X-TECH',
    description: 'Web design for dentists: your treatments explained, appointments by WhatsApp or phone in one tap and a website Google and AI understand. Fixed price.',
    keywords: ['Web design for dentists', 'Dental website design', 'Website for dental clinics', 'Dentist website', 'Web design for small businesses'],
    ogTitle: 'Web Design for Dentists and Dental Clinics | DASTAN X-TECH',
    ogDescription: 'Websites for dentists and dental clinics: treatments, team and reviews on one fast page, with booking one tap away.',
  },
  servicioJsonLd: {
    name: 'Web Design for Dentists',
    serviceType: 'Website design for dentists and dental clinics',
    description: 'We design or rebuild websites for dentists and dental clinics: each treatment explained, the team and real reviews, booking by WhatsApp or phone in one tap, and a structure Google and AI assistants understand.',
    areaServed: ['United States', 'Mexico', 'Colombia'],
  },
  hero: {
    etiqueta: 'Service · Web Design for Dentists',
    titulo: <>Web design for dentists, with <span className="accent-light">appointments</span> one tap away.</>,
    texto: 'Patients compare dental clinics on their phone before they call. We build your clinic’s website with your treatments explained, your team and your reviews, and WhatsApp or phone one tap away to book.',
    mensajeChat: "I'd like information about a website for my dental clinic",
    boton: 'Discuss your clinic’s website',
    tarjetaTitulo: 'What you get',
    tarjetaItems: ['A review of your current website', 'Treatments, team and reviews on one fast website', 'Ready for Google, Maps and AI'],
    verCaso: 'See the 8 styles ↓',
  },
  caso: {
    etiqueta: 'Showcase',
    titulo: <>One website, <span className="accent-light">eight styles</span></>,
    intro: 'We rebuilt our own website, dastanxtech.com, in eight different styles. Pick the one that suits your clinic and we turn it into your website, with your colors, your photos and your treatments. (The showcase is in Spanish; your website can be in English, Spanish or both.)',
    items: [
      'With your brand, your treatments and your real copy: we never make anything up.',
      'Phone and WhatsApp one tap away from the very first second.',
      'Try them on your phone too: that’s where most patients will see your website.',
    ],
    boton: 'See the showcase ↗',
  },
  ventajas: {
    titulo: <>What a dental website <span className="accent-light">needs</span></>,
    items: [
      { titulo: 'Every treatment explained', texto: 'Cleanings, whitening, orthodontics, implants: each treatment with what it involves and, if you choose to publish them, its prices or starting prices. That’s what patients look for before they call, and what AI assistants quote when someone asks them for a dentist.' },
      { titulo: 'Booking without friction', texto: 'WhatsApp and phone visible from the first second on mobile, plus your opening hours and your address with a map. If you already use an online booking tool, we link it from every page.' },
      { titulo: 'Trust before the first visit', texto: 'Your team and your clinic with your own photos, and your real reviews. We never pass off stock photos as yours or make up testimonials.' },
      { titulo: 'Ready for Google and AI', texto: <>We structure the code and content so Google and AI assistants understand which treatments you offer, where and at what price. We did it to our own website first: <a href="/en/blog/our-website-seo-report" className="text-link">from 77 to 91 on our SEO report</a>.</> },
    ],
  },
  caminos: {
    titulo: <>Two ways to <span className="accent-light">get started</span></>,
    items: [
      { etiqueta: 'New website', titulo: 'We rebuild your clinic’s website or create one from scratch', texto: 'With your real brand, your treatments explained and booking one tap away. Ready in under 48 hours once we have your brand and your content.', boton: 'I want a new website', mensajeChat: 'I want a new website for my dental clinic', estilo: 'btn btn-suave' },
      { etiqueta: '48-Hour Fix', titulo: 'Already have a website? We fix what’s urgent', texto: 'Within 48 hours we apply the 5 most urgent fixes from your SEO report. If you get the new website afterwards, we deduct it.', boton: 'I want the 48-Hour Fix', mensajeChat: 'I want the 48-Hour Fix for my dental clinic’s website', estilo: 'btn btn-outline-light' },
    ],
  },
  faqTitulo: 'Frequently asked questions',
  faq: [
    { q: 'How much does a website for a dental clinic cost?', a: '100 USD, fixed price, the same as our Web Design service. If you need something that isn’t included (an online store or a custom booking system, for example), we tell you before we start.' },
    { q: 'How long does it take?', a: 'Under 48 hours from when you give us your brand and your content: logo, treatments, prices if you want to publish them, team photos and current reviews.' },
    { q: 'Can patients book appointments from the website?', a: 'Yes. WhatsApp and phone are one tap away on every page, and if you already use an online booking tool, we link it so patients can book directly.' },
    { q: 'Should I publish my prices?', a: 'It’s your call. Prices or starting prices for common treatments help patients decide and give AI assistants something concrete to quote. If you prefer not to, we explain each treatment and invite patients to ask.' },
    { q: 'Does the website collect patients’ medical information?', a: 'No. Patients contact you by WhatsApp or phone, and the website doesn’t ask for any medical details. The optional 24/7 chat only saves the name and WhatsApp of whoever asks.' },
    { q: 'What if I already have a website?', a: 'We analyze it first: we give you an honest review with concrete, observable problems — each with the reason it costs you patients — before touching anything.' },
  ],
  cierre: {
    titulo: 'Want to know what your clinic’s website is missing?',
    texto: 'Get a free SEO report on your website: your score from 0 to 100 and the 5 most urgent fixes, as a PDF on WhatsApp. No website yet? We create one for you, even from your Instagram. We reply as soon as possible.',
    botonDiagnostico: 'Get my free SEO report',
    whatsappTexto: "Hi, I saw the Web Design for Dentists page and I'd like my free SEO report.",
    whatsappEnlace: 'or message us on WhatsApp →',
  },
};

export default t;
