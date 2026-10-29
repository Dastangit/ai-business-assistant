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
    { clave: 'aeo', title: 'AI Search (AEO)', tagline: 'Get your business recommended by AI, not just Google.' },
  ],
  verDetalle: 'See details →',
  // Must match the chat (app/api/chat/route.js) and public/llms.txt
  extras: {
    etiqueta: 'On request',
    titulo: 'We also offer',
    // Grouped as in the service menu. Anything already priced elsewhere (Receptionist, Instagram to Website) doesn't go here
    grupos: [
      {
        titulo: 'Automation and AI',
        items: [
          { title: 'Automations with n8n and Make', text: 'we connect your tools so repetitive tasks (notifications, records, follow-ups) run on their own.' },
          { title: 'AI chatbots and agents', text: 'assistants for your website or your team that answer and carry out tasks with your information.' },
          { title: 'CRM and prospecting', text: 'we organize your contacts in a CRM and set up the search for new customers.' },
          { title: 'Invoice dashboard', text: 'we read your PDF invoices and give you a dashboard with income, expenses, taxes, balance and your best customers.' },
        ],
      },
      {
        titulo: 'Social media and content',
        items: [
          { title: 'Personal brand analysis', text: 'we review your brand in four stages (are you found, understood, trusted, hired?), show you where people drop off and what to do over the next 30 days.' },
          { title: 'Meta Ads audit', text: 'we review your active Facebook and Instagram ads and the pages they lead to, and give you concrete fixes for copy, offer and tracking.' },
          { title: 'Video editing', text: 'we edit your videos for social media, with captions and animations, ready to publish.' },
          { title: 'YouTube channel analysis', text: 'thumbnails, titles, hooks and your best-performing videos; we show you where viewers drop off and what to film next.' },
        ],
      },
      {
        titulo: 'E-commerce',
        items: [
          { title: 'Online store analysis', text: 'we go through your store like a shopper all the way to checkout and show you where sales slip away and what each leak costs.' },
        ],
      },
    ],
    nota: 'Ordered individually, priced case by case. With the Monthly Implementation Plan, you choose them within your monthly hours.',
    mensajeChat: "I'd like information about the on-request services",
    // Fixed chat reply to that button (doesn't go through the AI): it doesn't repeat the list the visitor just saw
    respuestaChat: "On-request services are specific tasks you can choose within a membership or order on their own. If you'd like to know more about any of them, send us a message on WhatsApp at +1 605-500-3653 and we'll be happy to walk you through the details.",
    boton: 'Ask about a service',
  },
};

export default t;
