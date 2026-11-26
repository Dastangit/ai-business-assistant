// /en/services/aeo copy (English). If you change something here, change the same thing in aeo.es.js.
// Data only: no functions (passed from server to client).
const t = {
  metadata: {
    // Keyword map (26-nov-2026): «generative engine optimization agency» (US 1,900, CPC 26 USD) and
    // «answer engine optimization services» (US 1,000) lead; «aeo consultant» (KD 6) stays in the copy.
    title: 'Generative Engine Optimization Agency (GEO & AEO) | DASTAN X-TECH',
    description: 'Generative engine optimization and answer engine optimization services: we prepare your business so ChatGPT, Gemini and Perplexity recommend it. Fixed price.',
    keywords: ['Generative engine optimization agency', 'GEO agency', 'Answer engine optimization services', 'AEO consultant', 'AI search optimization', 'SEO for AI', 'Get recommended by ChatGPT'],
    ogTitle: 'Generative Engine Optimization Agency (GEO & AEO) | DASTAN X-TECH',
    ogDescription: 'Get your business recommended directly by ChatGPT, Gemini and Perplexity, not just Google.',
  },
  servicioJsonLd: {
    name: 'AI Search Optimization (AEO)',
    serviceType: 'Generative Engine Optimization and Answer Engine Optimization (GEO & AEO)',
    description: 'We optimize your business’s structure, content and trust signals so AI answer engines like ChatGPT, Gemini and Perplexity recommend it directly to their users.',
    areaServed: ['United States', 'Spain', 'Mexico', 'Colombia'],
  },
  hero: {
    etiqueta: 'Service · Generative Engine Optimization (GEO & AEO)',
    titulo: <>Generative engine optimization: get <span className="accent-light">recommended</span> by AI, not just Google.</>,
    texto: 'More and more people ask an AI assistant directly “what’s the best option near me?” and trust the answer without visiting any website. As a generative engine optimization agency and AEO consultants, we prepare your business to be that answer.',
    mensajeChat: "I'd like information about AI Search Optimization (AEO)",
    boton: 'Ask about AI Search Optimization',
    tarjetaTitulo: 'What we do',
    tarjetaItems: ['Google Business Profile in order', 'Content AI can quote', 'Reviews and trust signals'],
  },
  // What AEO is: for people who want to understand it before asking, with the real example from the blog at the end
  queEs: {
    etiqueta: 'What GEO and AEO are',
    titulo: <>What is <span className="accent-light">GEO</span> and AEO?</>,
    parrafos: [
      'The way people search for information, products and services has changed. The familiar lists of links are giving way to answer engines and AI assistants like ChatGPT, Gemini, Perplexity or Claude. If your website isn’t ready for AI to understand it, your business risks becoming invisible to millions of people.',
      'GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) are two names for the same work, and the next step after traditional SEO, without replacing it. Instead of optimizing your website only to show up in search engines and get clicks, it organizes your information so AI assistants and agents can read it, understand it and recommend your brand when someone asks them a direct question.',
    ],
    razonesTitulo: 'Why it matters for your business',
    // No promised results, like the rest of the site.
    // Bookings and purchases through AI agents are not part of AEO: they come with the Monthly Implementation Plan
    razones: [
      { titulo: 'Direct recommendation', texto: 'When a potential customer asks an AI for the best companies or services in your industry, AEO prepares you to be the recommended answer.' },
      { titulo: 'Ready for AI agents', texto: 'We organize your website’s structure so assistants understand your catalog, your prices and your services exactly, with no errors or ambiguity.' },
      { titulo: 'Bookings and purchases from the chat', etiqueta: 'With the Monthly Plan', texto: 'We prepare your business so AI agents can handle bookings or purchases on behalf of your customers, right from the chat. This is done separately, with the Monthly Implementation Plan.' },
      { titulo: 'Long-term visibility', texto: 'As more searches happen by asking an AI, AEO helps your brand stay relevant and keep winning customers.' },
    ],
    cita: 'On the web of the future, being seen by people is not enough: your business has to be understood and recommended by machines.',
    enlaceArticulo: 'See a real example: we asked Gemini for the best spa in Medellín →',
    enlaceConsultor: 'What does an AEO consultant do? Step by step →',
  },
  ventajas: {
    titulo: <>Ready for the <span className="accent-light">age of answers</span></>,
    items: [
      { titulo: 'Consistency everywhere', texto: 'We organize and verify your Google Business Profile and social media so the information is clear and consistent — the foundation AI uses to trust a business.' },
      { titulo: 'Content AI can quote', texto: 'We structure services, FAQs, hours and prices in a format AI engines can read and quote directly when they recommend you.' },
      { titulo: 'Ready for AI agents', texto: <>We run your website through <a href="https://isitagentready.com" target="_blank" rel="noopener noreferrer" className="text-link">Is It Agent Ready</a>, Cloudflare’s free test that scores from 0 to 100 how well AI agents can find and read your website, and we fix what lowers the score: robots.txt, sitemap, a text version for AI and rules for its bots.</> },
    ],
  },
  // Real report: the auditor's report on our own website (public/ejemplo-informe-aeo.html)
  informe: {
    etiqueta: 'Real example',
    titulo: 'This is the report you get',
    texto: 'We ran our own website through the AEO auditor. This is the report exactly as a client receives it: the score, the 8 questions AI asks, the before and after, and the proof for every finding (in Spanish).',
    boton: 'See a real report',
    enlaceArticulo: 'Read how we went from 94 to 97 →',
  },
  faqTitulo: 'Frequently asked questions',
  faq: [
    { q: 'What exactly is AI Search Optimization (AEO)?', a: 'Answer Engine Optimization: preparing your business so AI assistants like ChatGPT, Gemini or Perplexity recommend you directly when someone asks “what’s the best option near me?”, without that person visiting any website.' },
    { q: 'Why hire an AEO consultant?', a: 'Because AI only recommends businesses whose information is clear and consistent everywhere, and learning what each assistant checks takes time. An AEO consultant does that work for you: puts your Google Business Profile and social media in order, prepares your website so AI can read it and tells you what’s missing, without promising results nobody can guarantee.' },
    { q: 'Does it replace traditional SEO?', a: 'No, it complements it. You keep showing up on Google as always, and also in the answers AI engines give.' },
    { q: 'How long does it take to see results?', a: 'It depends on how much public, consistent information your business has today — that’s why we start by putting your Google Business Profile and social media in order before anything else.' },
    { q: 'How much does it cost?', a: '150 USD, one payment and no monthly fee. It needs a website in good shape: if yours isn’t, the All-in-One Package (Web Design + Digital Business Audit + AEO) costs 400 USD. It’s a fixed price: if you need something that isn’t included, we tell you before we start.' },
    { q: 'Why a one-time payment instead of a monthly fee?', a: 'Many AEO consultancies charge a monthly fee: in November 2026 we saw published prices from about 200 to 5,000 USD a month. We get the groundwork done for a fixed price: a consistent Google Business Profile and social media, content AI can quote and a website ready for its crawlers. If you then want us to keep working with you every week, there’s the Implementation Membership, with no lock-in.' },
    { q: 'Can I claim my business inside ChatGPT?', a: 'Since November 2026, OpenAI lets businesses claim their listing in ChatGPT through its Business Hub, still in beta. For now, local businesses can only claim listings that already exist in the United States, and online businesses can ask to be added. When we review your case, we tell you whether yours can do it and how.' },
    { q: 'Is GEO the same as AEO or “SEO for AI”?', a: 'Yes. GEO (Generative Engine Optimization), AEO (Answer Engine Optimization) and “SEO for AI” are different names for the same work: getting AI assistants to find your business, understand it and recommend it.' },
    { q: 'What does a generative engine optimization agency do?', a: 'It makes sure the information AI assistants find about your business is clear, consistent and easy to quote: your website, your Google Business Profile, your reviews and what other sites say about you. We do that groundwork for a fixed price and check that AI crawlers can read your site, instead of charging a monthly retainer.' },
    { q: 'Does it work for any kind of business?', a: 'Yes, as long as there’s a solid foundation on the outside: a clear website and a well-organized Google Business Profile. If you don’t have that yet, we start there with Web Design or the All-in-One Package.' },
  ],
  cierre: {
    titulo: 'Ready for AI to recommend your business?',
    texto: 'Get ahead of a trend that’s already underway, instead of reacting once your competitors have mastered it. Message us and we’ll reply as soon as possible.',
    boton: 'Ask about AI Search Optimization',
    mensajeChat: "I'd like information about AI Search Optimization (AEO)",
    whatsappTexto: "Hi, I saw the AI Search Optimization page and I'd like more information.",
    whatsappEnlace: 'or message us on WhatsApp →',
  },
};

export default t;
