// /en/free-website-audit copy (English). If you change something here, change the same thing in auditoria-gratis.es.js.
// Data only: no functions (passed from server to client). FAQ answers are plain text because they also go into the FAQPage structured data.
const t = {
  metadata: {
    title: 'Free website audit: your SEO score from 0 to 100 | DASTAN X-TECH',
    description: 'Free website audit for small businesses: we review your site the way Google sees it and send you a PDF with your SEO score from 0 to 100 and the 5 most urgent fixes.',
    keywords: ['Free website audit', 'Website audit free', 'Free SEO audit', 'Free SEO report'],
    ogTitle: 'Free website audit | DASTAN X-TECH',
    ogDescription: 'Your SEO score from 0 to 100 and the 5 most urgent fixes for your website, in plain language, as a PDF on WhatsApp.',
  },
  servicioJsonLd: {
    name: 'Free website audit',
    description: "Free SEO audit of a business's website: a score from 0 to 100, what already works and the 5 most urgent fixes, as a PDF on WhatsApp.",
    areaServed: ['United States', 'Mexico', 'Colombia', 'Spain'],
  },
  hero: {
    etiqueta: 'Free · Website audit',
    titulo: <>Free website <span className="accent-light">audit</span>: your site, from 0 to 100.</>,
    texto: 'We review your website the way Google sees it and send you a PDF with your SEO score from 0 to 100 and the 5 most urgent fixes, in plain language. No passwords, no access and no strings attached.',
    boton: 'Get my free audit',
    tarjetaTitulo: 'What you get',
    tarjetaItems: ['Your SEO score from 0 to 100', 'What your website already does well', 'The 5 most urgent fixes, and why they matter', 'All in one PDF on WhatsApp'],
    verEjemplo: 'See a sample (in Spanish) ↗',
  },
  revisamos: {
    titulo: <>What we <span className="accent-light">check</span></>,
    intro: 'What Google looks at before deciding whether to show your website, and what a customer looks at before deciding whether to contact you.',
    items: [
      { titulo: 'Whether Google understands what you do and where', texto: 'Your title, description and headings: whether they say your service and your city, or just your business name.' },
      { titulo: 'Whether it sees you as a local business', texto: 'The data Google reads to know your business type, address, hours and phone, so it can show you in "near me" searches.' },
      { titulo: 'How it looks on a phone', texto: 'Most of your customers open your site on their phone: we check that nothing spills off the screen and that WhatsApp is easy to find.' },
      { titulo: 'Security and speed', texto: 'The HTTPS padlock, when your certificate expires and how long your site takes to load.' },
      { titulo: 'Content', texto: 'Whether there is enough text for Google to rank you, and whether expired offers or old details make the business look abandoned.' },
    ],
  },
  pasos: {
    titulo: <>How it <span className="accent-light">works</span></>,
    items: [
      { titulo: 'Send us your website', texto: 'In the chat on this page: your website address, your name and your WhatsApp. That is all.' },
      { titulo: 'We review it', texto: 'We run your site through our SEO report and pick the 5 problems that cost you the most customers.' },
      { titulo: 'You get the PDF', texto: 'On WhatsApp, as soon as possible. It takes two minutes to read, and what you do with it is up to you.' },
    ],
  },
  caso: {
    etiqueta: 'Real case',
    titulo: 'We tried it on our own website first',
    texto: 'We ran dastanxtech.com through the same report three times: it started at 77 out of 100 and, after the fixes, reached 91.',
    enlace: 'Read how we went from 77 to 91 →',
  },
  faqTitulo: 'Frequently asked questions',
  faq: [
    { q: 'Is the website audit really free?', a: 'Yes. No card, no commitment. If you then want help fixing what we find, we give you a fixed price before we start.' },
    { q: 'Do you need access to my website or passwords?', a: 'No. We review your site from the outside, the way Google and your customers see it. We never ask for passwords or access.' },
    { q: 'How is it different from the Digital Business Audit?', a: 'The free website audit only reviews your website. The Digital Business Audit (200 USD) also covers your Google Business Profile, reviews, social media and competitors, plus how you attract, book and bill customers, with a phased action plan.' },
    { q: "What if I don't have a website?", a: "Then there is nothing to audit, but we can build one for you, even from your Instagram. Message us in the chat or on WhatsApp." },
    { q: 'What do I do with the PDF?', a: 'You can fix it yourself or hand it to whoever runs your website: each problem explains what is wrong and why it matters. If you would rather we do it, the 48-Hour Fix (49 USD) applies the 5 fixes in 48 hours, and Web Design (100 USD) solves everything with a new website.' },
    { q: 'Does the audit check whether I show up in ChatGPT?', a: 'No: the free audit is about SEO, meaning Google. Getting recommended by ChatGPT, Gemini and other AI assistants is our AI Search Optimization (AEO, also called GEO), which needs a website in good shape.' },
  ],
  cierre: {
    titulo: 'How does your website score?',
    texto: 'Get your free website audit and find out what your site is missing for Google to show it and for customers to contact you.',
    boton: 'Get my free audit',
    whatsappTexto: 'Hi, I would like the free website audit for my website.',
    whatsappEnlace: 'or message us on WhatsApp →',
  },
};

export default t;
