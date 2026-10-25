// Terms of purchase (English). Faithful translation of condiciones.es.js: same terms, nothing added or removed.
// If the Spanish terms change, change these and their date in lib/revisiones.js.
// Data only: no functions.
const t = {
  metadata: {
    title: 'Terms of purchase | DASTAN X-TECH',
    description: 'How DASTAN X-TECH services are ordered and paid for: delivery times, included revisions, cancellations, store credit and monthly services with no lock-in.',
  },
  actualizacion: 'Last updated:',
  titulo: 'Terms of purchase',
  intro: 'These terms apply every time you order one of our services. If anything is unclear, ask us on WhatsApp before you pay.',
  secciones: [
    {
      titulo: 'Who is selling?',
      bloques: [
        { tipo: 'p', contenido: <>DASTAN X-TECH, the trade name of <strong>Dastan Tamayo</strong>, with registered address in Puebla, Puebla, Mexico. We work remotely with businesses in any country.</> },
        { tipo: 'ul', contenido: [
          <>WhatsApp: <a href="https://wa.me/16055003653" className="text-link">+1 605 500 3653</a></>,
          <>Email: <a href="mailto:dastanxtech.services@gmail.com" className="text-link">dastanxtech.services@gmail.com</a></>,
        ] },
      ],
    },
    {
      titulo: 'How to order and pay',
      bloques: [
        { tipo: 'ul', contenido: [
          'Everything is ordered on WhatsApp: we confirm the service, the price and what we need from you before charging anything.',
          'Prices are in US dollars (USD). In Mexico you can pay in pesos by SPEI bank transfer; from other countries, with PayPal in USD or by SPEI transfer.',
          'We only send payment details on WhatsApp. We will never ask you to pay into an account we have not sent you ourselves.',
          'Web Design and the All-in-One Package: 50% upfront and 50% on delivery. All other services are paid upfront.',
          'We start as soon as the payment reaches the account, and we send you the receipt on WhatsApp.',
        ] },
      ],
    },
    {
      titulo: 'Delivery times',
      bloques: [
        { tipo: 'ul', contenido: [
          '48-Hour Fix: 48 hours from payment confirmation and access to your website.',
          'Web Design: under 48 hours from when we have your brand and your content.',
          'AI Search Optimization (AEO) and Digital Business Audit: we confirm the timeline on WhatsApp before you pay, depending on the size of your business.',
        ] },
        { tipo: 'p', contenido: 'If we are missing something that depends on you (access, photos, copy or answers), the clock starts when we receive it.' },
      ],
    },
    {
      titulo: 'Included revisions',
      bloques: [
        { tipo: 'ul', contenido: [
          'Web Design: 2 rounds of changes.',
          '48-Hour Fix, AI Search Optimization (AEO) and Digital Business Audit: 1 round of changes.',
        ] },
        { tipo: 'p', contenido: 'A round is one list of changes sent all at once. Anything beyond what was agreed when ordering (new pages, another design style, another service) is quoted separately.' },
      ],
    },
    {
      titulo: 'Cancellations and store credit',
      bloques: [
        { tipo: 'ul', contenido: [
          'If you cancel before we start, we don’t refund the money: it stays as store credit for 90 days, valid for any of our services.',
          'Once the work has started or been delivered, what you paid is not refunded or turned into credit. For two-payment projects, if you cancel halfway, the second payment is not charged.',
          'If we cannot deliver what was agreed for reasons on our side, we refund 100% of what you paid.',
        ] },
      ],
    },
    {
      titulo: 'Monthly services',
      bloques: [
        { tipo: 'ul', contenido: [
          'The 24/7 automated chat, the Virtual WhatsApp Receptionist and the Monthly Implementation Plan have no lock-in and no automatic charges.',
          'Each month we send you the invoice on WhatsApp. If you skip a month, the service simply pauses. A month already paid is not refunded.',
          'The Monthly Implementation Plan requires a completed Digital Business Audit. It includes 6 hours of work per week.',
        ] },
      ],
    },
    {
      titulo: 'What we don’t promise',
      bloques: [
        { tipo: 'p', contenido: 'Nobody controls Google or AI assistants: we don’t guarantee specific rankings, AI recommendations or sales figures. We do guarantee delivering what was agreed, on the agreed timeline.' },
      ],
    },
    {
      titulo: 'Changes to these terms',
      bloques: [
        { tipo: 'p', contenido: 'If we change them, we will update this page and its date. Each purchase is governed by the terms in force on the day you paid.' },
      ],
    },
  ],
};

export default t;
