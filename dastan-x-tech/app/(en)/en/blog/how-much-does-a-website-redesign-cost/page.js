'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { REVISIONES } from '@/lib/revisiones';
import { ruta } from '@/lib/i18n';

// English version of /blog/cuanto-cuesta-renovar-web. If the Spanish article changes, change this one too.
// Every figure comes from the Web Design FAQ (contenido/diseno-web.en.js) and PRECIOS/OTROS in app/api/chat/route.js.
const URL_ARTICULO = 'https://dastanxtech.com/en/blog/how-much-does-a-website-redesign-cost';
const DESCRIPCION = 'Real prices to redesign a small business website in 2026: from 100 USD and ready in under 48 hours, or 49 USD to fix the most urgent issues. What’s included and what changes the price.';

const faq = [
  { q: 'How much does it cost to redesign a business website?', a: 'At DASTAN X-TECH, from 100 USD. The final price depends on how many pages and services your website has, and we confirm it before we start.' },
  { q: 'How long does the new website take?', a: 'Under 48 hours from the moment you send us your brand and your content: logo, copy, services and prices.' },
  { q: 'Is there a cheaper option than a full redesign?', a: 'Yes, the 48-Hour Fix: for 49 USD we apply the 5 most urgent fixes from your SEO report within 48 hours. If you book Web Design within the next 30 days, we deduct it.' },
  { q: 'Can I find out what my website is missing before paying anything?', a: 'Yes. The SEO report is free: we send you a PDF on WhatsApp with your score from 0 to 100 and the 5 most urgent fixes, in plain language.' },
  { q: 'What if I don’t have a website?', a: 'We build one from scratch at the same starting price, from 100 USD, even from your Instagram.' },
  { q: 'Do you work with businesses in any country?', a: 'Yes. We work fully remotely, mostly in Colombia, Mexico and the United States, in English and Spanish. Prices are in US dollars (USD).' },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    inLanguage: 'en',
    headline: 'How much does a website redesign cost in 2026?',
    author: { '@type': 'Person', name: 'Dastan Tamayo', jobTitle: 'Founder', worksFor: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com/en' } },
    publisher: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com/en' },
    datePublished: '2026-10-06',
    dateModified: REVISIONES['/en/blog/how-much-does-a-website-redesign-cost'],
    description: DESCRIPCION,
    mainEntityOfPage: URL_ARTICULO,
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

export default function BlogPost() {
  return (
    <div className="theme-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* CABECERA CON ENLACES */}
      <SiteHeader tone="light" lang="en" />

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 5% 2rem' }}>
        <p className="label-mono" style={{ marginBottom: '1rem' }}>
          Pricing guide · October 6, 2026
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          How much does a website redesign cost in 2026?
        </h1>
        <div className="byline">
          <div className="byline-avatar" aria-hidden="true">DT</div>
          <p className="byline-text">
            <strong>Dastan Tamayo</strong>
            Founder of DASTAN X-TECH · 3 min read
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          At DASTAN X-TECH, redesigning a small business website costs <strong>from 100 USD</strong> and it’s ready in <strong>under 48 hours</strong> once we have your brand and your content. If you only want the most urgent issues fixed, the 48-Hour Fix costs <strong>49 USD</strong>. And before you pay anything, you can get a free SEO report on your current website.
        </p>

        <h2 style={h2}>Our prices, in one table</h2>
        <p style={parrafo}>
          Starting prices in US dollars, as of October 2026:
        </p>
        <div className="tabla-scroll">
          <table className="tabla-precios">
            <thead>
              <tr><th scope="col">Option</th><th scope="col">Price</th><th scope="col">What’s included</th></tr>
            </thead>
            <tbody>
              <tr><td>SEO report</td><td>Free</td><td>Your score from 0 to 100 and the 5 most urgent fixes for your website, as a PDF on WhatsApp.</td></tr>
              <tr><td>48-Hour Fix</td><td>49 USD</td><td>We apply those 5 fixes within 48 hours. Deducted if you book Web Design within the next 30 days.</td></tr>
              <tr><td>Web Design</td><td>From 100 USD</td><td>Your website redesigned or built from scratch, with your real brand, mobile-friendly, WhatsApp and phone always visible, and ready for Google and AI. In under 48 hours.</td></tr>
              <tr><td>AI chat (optional)</td><td>15 USD a month</td><td>Answers questions at any hour and saves the name and WhatsApp of whoever asks.</td></tr>
            </tbody>
          </table>
        </div>

        <h2 style={h2}>What changes the final price</h2>
        <p style={parrafo}>
          The starting price covers a small business website. What moves it is size: <strong>how many pages and how many services</strong> need explaining. A one-page site for a spa with five treatments isn’t the same as one for a clinic with three locations and twenty specialties.
        </p>
        <p style={parrafo}>
          That’s why there are no surprises: we confirm the final price before we start. And the 48-hour clock starts once we have your logo, copy, services and prices, so having them ready is the fastest way to get your website.
        </p>

        <h2 style={h2}>What you get for that price</h2>
        <ul style={lista}>
          <li><strong>An honest review before we touch anything:</strong> if you already have a website, we analyze it first and tell you what’s broken and why it’s costing you customers.</li>
          <li><strong>Your real brand:</strong> your logo, colors, copy, prices and reviews. We never make up content that isn’t yours.</li>
          <li><strong>WhatsApp and phone one tap away</strong>, visible from the first second and on mobile.</li>
          <li><strong>A structure Google and AI understand:</strong> what you offer, where and at what price, the foundation for being found and recommended.</li>
        </ul>

        <h2 style={h2}>Redesign the whole website or just fix it?</h2>
        <p style={parrafo}>
          It depends on what the report says. If your website already explains what you do well and only has specific issues (a poor title, a slow page, a hidden WhatsApp button), the 49 USD 48-Hour Fix is usually enough. If it doesn’t work well on mobile, doesn’t explain your services or nobody can tell how to reach you, a redesign is the better deal.
        </p>
        <p style={parrafo}>
          Not sure which one you need? Start with the <a href={ruta('blog5Senales', 'en')} className="text-link">5 signs your website is losing you customers</a>, or see the <a href={ruta('disenoWeb', 'en')} className="text-link">Web Design service</a> with a real redesign.
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

      <SiteFooter tone="light" lang="en" />
    </div>
  );
}
