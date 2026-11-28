'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { REVISIONES } from '@/lib/revisiones';
import { ruta } from '@/lib/i18n';

// English counterpart of /blog/cuanto-cuesta-una-pagina-web: same topic (how much a website costs), with the
// US market instead of Mexico and Spain. Until 28-nov-2026 it was «How much does a website redesign cost?» at
// /en/blog/how-much-does-a-website-redesign-cost, which now redirects here (next.config.mjs).
// Our figures come from the Web Design FAQ (contenido/diseno-web.en.js) and PRECIOS/OTROS in app/api/chat/route.js.
// If our prices change, change both articles and llms.txt. Market figures come from the linked guides
// (checked 28-nov-2026): they are indicative, not ours.
const URL_ARTICULO = 'https://dastanxtech.com/en/blog/how-much-does-a-website-cost';
const DESCRIPCION = 'How much a small business website costs in the US in 2026: DIY builders, freelancers and agencies, what changes the price, and our fixed 100 USD rate.';

const faq = [
  { q: 'How much does a website cost for a small business?', a: 'It depends on who builds it and what you need. In the US, freelancers usually charge from about 2,000 USD and agencies from about 5,000 USD. At DASTAN X-TECH it costs 100 USD, fixed price, ready in under 48 hours. If you need something that isn’t included, like an online store, we tell you before we start.' },
  { q: 'Is it cheaper to build it myself with a website builder?', a: 'In money, yes: builder plans start at around 17 USD a month. In time, it costs you the hours to write, design and set it up, and the monthly plan never stops.' },
  { q: 'How much does it cost to redesign the website I already have?', a: 'The same as building one: 100 USD. If you only want the most urgent issues fixed, the 48-Hour Fix costs 49 USD and applies the 5 most urgent fixes from your SEO report within 48 hours.' },
  { q: 'How long does the new website take?', a: 'Under 48 hours from the moment you send us your brand and your content: logo, copy, services and prices.' },
  { q: 'What ongoing costs should I expect?', a: 'A domain (around 12 to 25 USD a year) and hosting (around 40 to 150 USD a year for shared hosting), plus maintenance if someone else looks after the site.' },
  { q: 'Can I find out what my website is missing before paying anything?', a: 'Yes. The SEO report is free: we send you a PDF on WhatsApp with your score from 0 to 100 and the 5 most urgent fixes, in plain language.' },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    inLanguage: 'en',
    headline: 'How much does a website cost in 2026?',
    author: { '@type': 'Person', name: 'Dastan Tamayo', jobTitle: 'Founder', worksFor: { '@type': 'Organization', '@id': 'https://dastanxtech.com/#organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com/en' } },
    publisher: { '@type': 'Organization', '@id': 'https://dastanxtech.com/#organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com/en' },
    datePublished: '2026-10-06',
    dateModified: REVISIONES['/en/blog/how-much-does-a-website-cost'],
    description: DESCRIPCION,
    mainEntityOfPage: URL_ARTICULO,
    image: 'https://dastanxtech.com/opengraph-image',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'en',
    mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
  },
];

const h2 = { fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' };
const parrafo = { lineHeight: '1.8', marginBottom: '1rem' };
const lista = { lineHeight: '1.9', paddingLeft: '1.3rem', marginBottom: '1rem' };
const fuente = { fontSize: '0.9rem', color: 'var(--ink-2)', lineHeight: '1.6', marginBottom: '1rem' };

export default function BlogPost() {
  return (
    <div className="theme-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* CABECERA CON ENLACES */}
      <SiteHeader tone="light" lang="en" />
      <main id="contenido">

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 5% 2rem' }}>
        <p className="label-mono" style={{ marginBottom: '1rem' }}>
          Pricing guide · updated November 28, 2026
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          How much does a website cost in 2026?
        </h1>
        <div className="byline">
          <div className="byline-avatar" aria-hidden="true">DT</div>
          <p className="byline-text">
            <strong>Dastan Tamayo</strong>
            Founder of DASTAN X-TECH · 4 min read
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          A small business website can cost anything from a few hundred to several thousand dollars: it depends on who builds it and what it needs. At DASTAN X-TECH, building or redesigning a small business website costs <strong>100 USD</strong>, fixed price, and it’s ready in <strong>under 48 hours</strong> once we have your brand and your content. Below is what the US market charges, so you can compare.
        </p>

        <h2 style={h2}>What makes a website cost more or less</h2>
        <ul style={lista}>
          <li><strong>Who builds it:</strong> doing it yourself with a website builder is cheap in money but expensive in hours; a freelancer charges by project or by the hour; an agency adds strategy, copywriting and project management, and its price shows it.</li>
          <li><strong>What kind of website it is:</strong> a one-page or brochure site costs far less than an online store, a site with bookings and payments, or a custom platform.</li>
          <li><strong>How many pages and how much copy:</strong> every service, every language and every text that has to be written adds hours.</li>
          <li><strong>What you pay afterwards:</strong> domain, hosting and maintenance. Some charge little for the design and make it back with a monthly fee.</li>
        </ul>

        <h2 style={h2}>How much a website costs in the US</h2>
        <p style={parrafo}>
          Typical 2026 ranges for a small business website, according to the guides below:
        </p>
        <div className="tabla-scroll">
          <table className="tabla-precios">
            <thead>
              <tr><th scope="col">Who builds it</th><th scope="col">Typical price</th><th scope="col">Notes</th></tr>
            </thead>
            <tbody>
              <tr><td>You, with a website builder</td><td>17 to 120 USD a month</td><td>200 to 800 USD the first year; the plan renews every year.</td></tr>
              <tr><td>A freelancer</td><td>2,000 to 7,600 USD</td><td>50 to 95 USD an hour, 40 to 80 hours of work.</td></tr>
              <tr><td>An agency</td><td>5,000 to 15,000 USD</td><td>Strategy, design, development and copy. Bigger projects go past 30,000 USD.</td></tr>
            </tbody>
          </table>
        </div>
        <p style={parrafo}>
          On top of that you pay a domain (around <strong>12 to 25 USD a year</strong>) and hosting (around <strong>40 to 150 USD a year</strong> for shared hosting).
        </p>
        <p style={fuente}>
          Sources: <a href="https://websitesetup.org/website-cost/" className="text-link" rel="noopener" target="_blank">WebsiteSetup, small business website costs</a> and <a href="https://www.webfx.com/web-design/pricing/website-costs/" className="text-link" rel="noopener" target="_blank">WebFX, how much does a website cost</a> (checked in November 2026). Both are vendors in the industry, so treat the ranges as a guide.
        </p>

        <h2 style={h2}>Our prices, in one table</h2>
        <p style={parrafo}>
          Fixed prices in US dollars, as of November 2026:
        </p>
        <div className="tabla-scroll">
          <table className="tabla-precios">
            <thead>
              <tr><th scope="col">Option</th><th scope="col">Price</th><th scope="col">What’s included</th></tr>
            </thead>
            <tbody>
              <tr><td>SEO report</td><td>Free</td><td>Your score from 0 to 100 and the 5 most urgent fixes for your website, as a PDF on WhatsApp.</td></tr>
              <tr><td>48-Hour Fix</td><td>49 USD</td><td>We apply those 5 fixes within 48 hours. Deducted if you book Web Design within the next 30 days.</td></tr>
              <tr><td>Web Design</td><td>100 USD</td><td>Your website built from scratch or redesigned, with your real brand, mobile-friendly, WhatsApp and phone always visible, and ready for Google and AI. In under 48 hours.</td></tr>
              <tr><td>24/7 automated chat (optional)</td><td>15 USD a month</td><td>Answers questions at any hour and saves the name and WhatsApp of whoever asks.</td></tr>
            </tbody>
          </table>
        </div>

        <h2 style={h2}>A fixed price, no surprises</h2>
        <p style={parrafo}>
          The 100 USD is the price of the website, not a starting price: <strong>it doesn’t go up halfway through</strong>. If your business needs something that isn’t included, like an online store or paid bookings, we tell you and quote it separately before we start, so you decide.
        </p>
        <p style={parrafo}>
          The 48-hour clock starts once we have your logo, copy, services and prices, so having them ready is the fastest way to get your website.
        </p>

        <h2 style={h2}>What you get for that price</h2>
        <ul style={lista}>
          <li><strong>An honest review before we touch anything:</strong> if you already have a website, we analyze it first and tell you what’s broken and why it’s costing you customers.</li>
          <li><strong>Your real brand:</strong> your logo, colors, copy, prices and reviews. We never make up content that isn’t yours.</li>
          <li><strong>WhatsApp and phone one tap away</strong>, visible from the first second and on mobile.</li>
          <li><strong>A structure Google and AI understand:</strong> what you offer, where and at what price, the foundation for being found and recommended.</li>
        </ul>

        <h2 style={h2}>What to ask before you hire anyone</h2>
        <p style={parrafo}>
          Whoever builds your website, these questions prevent most surprises:
        </p>
        <ul style={lista}>
          <li><strong>Is the price fixed, or is it a “starting at” price?</strong> A starting price tends to go up halfway through.</li>
          <li><strong>Are the domain and hosting included, how much are they a year, and whose name are they in?</strong> The domain should be yours.</li>
          <li><strong>Is there a mandatory monthly fee?</strong> And if you stop paying it, what happens to the website?</li>
          <li><strong>How many rounds of changes does the price include, and when will it be delivered?</strong></li>
        </ul>

        <h2 style={h2}>A new website or just fix the one you have?</h2>
        <p style={parrafo}>
          If you already have a website, it depends on what the report says. If it already explains what you do well and only has specific issues (a poor title, a slow page, a hidden WhatsApp button), the 49 USD 48-Hour Fix is usually enough. If it doesn’t work well on mobile, doesn’t explain your services or nobody can tell how to reach you, a redesign is the better deal.
        </p>
        <p style={parrafo}>
          Not sure which one you need? Start with the <a href={ruta('blog5Senales', 'en')} className="text-link">5 signs your website is losing you customers</a>, or see the <a href={ruta('disenoWeb', 'en')} className="text-link">Web Design service</a> with our own website in eight styles.
        </p>

        <h2 style={h2}>Frequently asked questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {faq.map((item) => (
            <div key={item.q} className="faq-item">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.6rem', color: 'var(--ink)' }}>{item.q}</h3>
              <p style={{ color: 'var(--ink-2)', lineHeight: '1.6', margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#FAF9FC', border: '1px solid var(--line-light)', borderRadius: 'var(--radius-card)', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--ink)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Want to know what it would cost you? Start by seeing what your website is missing, for free.
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: { diagnostico: true } }))}
            type="button"
            className="btn btn-suave"
          >
            Get your free SEO report
          </button>
        </div>
      </article>

      </main>
      <SiteFooter tone="light" lang="en" />
    </div>
  );
}
