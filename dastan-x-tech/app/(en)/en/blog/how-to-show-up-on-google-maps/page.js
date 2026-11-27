'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { REVISIONES } from '@/lib/revisiones';
import { ruta } from '@/lib/i18n';

// English version of /blog/como-aparecer-en-google-maps. The FAQ also goes in FAQPage.
// If you change something here, change the same thing in the Spanish version.
const DESCRIPCION = 'How to get your business on Google Maps for free: create and verify your Google Business Profile, what to fill in, how to get reviews and what to avoid.';

const FAQ = [
  {
    q: 'Does it cost money to show up on Google Maps?',
    a: 'No. Creating and verifying your Google Business Profile is free, and so is appearing in the regular Maps results. The only paid option is ads, which are labeled “Sponsored”.',
  },
  {
    q: 'How long does it take for my business to show up on Google Maps?',
    a: 'Once the profile is verified, it usually appears within a few days, although Google may review some changes before publishing them. Moving up against your competitors takes longer: it depends mostly on your reviews and on how complete your profile is.',
  },
  {
    q: 'Can I show up on Google Maps without a storefront?',
    a: 'Yes. If you serve customers at their location, you can hide your address and set the cities or neighborhoods you serve. What isn’t allowed is listing an address where you don’t serve customers, such as a PO box or a virtual office.',
  },
  {
    q: 'Why isn’t my business showing up on Google Maps?',
    a: 'The most common reasons are that the profile isn’t verified, the primary category doesn’t match what people search for, the profile is incomplete, or it was suspended for breaking Google’s guidelines (for example, by adding keywords to the business name). Distance matters too: Google shows the businesses closest to the searcher first.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'How to show up on Google Maps: a guide for local businesses',
    inLanguage: 'en',
    author: { '@type': 'Person', name: 'Dastan Tamayo', jobTitle: 'Founder', worksFor: { '@type': 'Organization', '@id': 'https://dastanxtech.com/#organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com/en' } },
    publisher: { '@type': 'Organization', '@id': 'https://dastanxtech.com/#organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com/en' },
    datePublished: '2026-11-26',
    dateModified: REVISIONES['/en/blog/how-to-show-up-on-google-maps'],
    description: DESCRIPCION,
    mainEntityOfPage: 'https://dastanxtech.com/en/blog/how-to-show-up-on-google-maps',
    image: 'https://dastanxtech.com/opengraph-image',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'en',
    mainEntity: FAQ.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  },
];

const h2 = { fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' };
const h3 = { fontSize: '1.15rem', fontWeight: '600', color: 'var(--ink)', marginTop: '1.75rem', marginBottom: '0.5rem' };
const parrafo = { lineHeight: '1.8', marginBottom: '1rem' };
const lista = { lineHeight: '1.9', paddingLeft: '1.3rem', marginBottom: '1rem' };

export default function BlogPost() {
  return (
    <div className="theme-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER WITH LINKS */}
      <SiteHeader tone="light" lang="en" />
      <main id="contenido">

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 5% 2rem' }}>
        <p className="label-mono" style={{ marginBottom: '1rem' }}>
          Practical guide · November 26, 2026
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          How to show up on Google Maps: a guide for local businesses
        </h1>
        <div className="byline">
          <div className="byline-avatar" aria-hidden="true">DT</div>
          <p className="byline-text">
            <strong>Dastan Tamayo</strong>
            Founder of DASTAN X-TECH · 6 min read
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          To get your business on Google Maps you need a <strong>verified, complete Google Business Profile</strong>. It’s free and takes an afternoon. After that, whether you show up before or after your competitors depends on how well that profile matches what people search for, how close you are and how much trust it builds.
        </p>

        <h2 style={h2}>First: search for your business the way a customer would</h2>
        <p style={parrafo}>
          Open Google Maps on your phone and search for what you offer and your area, without typing your name: “dentist in Austin”, “spa near me”, “auto repair in Brooklyn”. Look at who shows up in the top three and what those profiles have: photos, recent reviews, opening hours, replies from the owner. Then search for your exact business name: if it doesn’t appear, you don’t have a profile yet or it isn’t verified.
        </p>

        <h2 style={h2}>How Google decides who shows up first</h2>
        <p style={parrafo}>
          Google explains that local results depend on three things:
        </p>
        <ul style={lista}>
          <li><strong>Relevance:</strong> how well your profile matches the search. Your category, services and description matter most here.</li>
          <li><strong>Distance:</strong> how far you are from the searcher or from the place they typed. You can’t change it.</li>
          <li><strong>Prominence:</strong> how well known your business is. Google measures it through your reviews and rating, and what other websites say about you.</li>
        </ul>
        <p style={parrafo}>
          The next 6 steps work on the two that are up to you.
        </p>

        <h2 style={h2}>6 steps to show up on Google Maps</h2>

        <h3 style={h3}>1. Create or claim your profile</h3>
        <p style={parrafo}>
          Go to business.google.com with your business’s Google account and search for its name. If a profile already exists (sometimes Google or a customer creates one), claim it; if not, create it. Use your real business name, the same one on your sign and your website.
        </p>

        <h3 style={h3}>2. Verify it</h3>
        <p style={parrafo}>
          Until Google confirms that the business exists and is yours, the profile doesn’t show up or shows up with limits. Google tells you which method to use: it can be a video of your premises, a video call, a code by phone or email, or a postcard. If you serve customers at their location, you can hide your address and set your service area.
        </p>

        <h3 style={h3}>3. Choose your primary category carefully</h3>
        <p style={parrafo}>
          It’s the detail that weighs most for relevance. Pick the one that describes your business the way a customer would search for it (“Dentist”, not “Health company”) and add secondary categories only for what you actually do.
        </p>

        <h3 style={h3}>4. Fill in everything else</h3>
        <ul style={lista}>
          <li>Opening hours, including holiday hours, and a phone number someone answers.</li>
          <li>Your website, with exactly the same name, address and phone number on it.</li>
          <li>Services or products, with prices if you publish them, and a description of what you do, for whom and where.</li>
          <li>Real photos: the storefront so people can find you, the inside, your team and your work. Add new ones regularly.</li>
        </ul>

        <h3 style={h3}>5. Ask for reviews and reply to all of them</h3>
        <p style={parrafo}>
          It’s the slowest step and the one that sets you apart most from your competitors. Ask for the review when you finish the job, with the direct link your profile gives you (a text or WhatsApp message works well). Reply to every review, the bad ones too, calmly and without sharing the customer’s details: people reading reviews pay attention to how you respond.
        </p>

        <h3 style={h3}>6. Keep the profile active</h3>
        <p style={parrafo}>
          Update your hours when they change, post news and offers from the profile itself and answer the questions people ask. An active profile earns more trust than an abandoned one, from Google and from your customers.
        </p>

        <h2 style={h2}>What doesn’t work (and can cost you the profile)</h2>
        <ul style={lista}>
          <li><strong>Stuffing keywords into the name</strong> (“Cheap Dentist Austin John Smith”): it breaks Google’s guidelines and is one of the most common reasons for suspension.</li>
          <li><strong>Bought, fake or incentivized reviews:</strong> Google removes them and can penalize the profile.</li>
          <li><strong>Addresses where you don’t serve customers</strong>, such as virtual offices or PO boxes, or several profiles for the same business.</li>
          <li><strong>Paying someone who promises the top spot:</strong> nobody controls it; Google decides with the three criteria above.</li>
        </ul>

        <h2 style={h2}>Google Maps feeds AI answers too</h2>
        <p style={parrafo}>
          When someone asks Gemini or Google’s AI answers “which dentist do you recommend in Austin?”, much of the answer comes from Google Business Profiles: category, rating, reviews and hours. A well-kept profile helps you on Maps and in AI search too. We cover it in <a href={ruta('blogChatgpt', 'en')} className="text-link">how to get your business to show up in ChatGPT</a> and <a href={ruta('blogResultadosIa', 'en')} className="text-link">how to appear in AI search results</a>.
        </p>

        <h2 style={h2}>Frequently asked questions</h2>
        {FAQ.map(({ q, a }) => (
          <div key={q}>
            <h3 style={h3}>{q}</h3>
            <p style={parrafo}>{a}</p>
          </div>
        ))}

        <p style={{ ...parrafo, marginTop: '2rem' }}>
          If you want to know where your business stands on Google, our <a href={ruta('auditoriaGratis', 'en')} className="text-link">free website audit</a> reviews your website and gives you the 5 most urgent fixes. And if you’d rather we do it for you, <a href={ruta('aeo', 'en')} className="text-link">AI Search Optimization</a> includes making your Google Business Profile and social media consistent with your website.
        </p>

        <div style={{ background: 'var(--ink)', borderRadius: 'var(--radius-card)', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: '#F5F4EF', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Want to know what your business is missing to be found on Google?
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: { diagnostico: true } }))}
            type="button"
            className="btn btn-primary"
          >
            Get my free SEO report
          </button>
        </div>
      </article>

      </main>
      <SiteFooter tone="light" lang="en" />
    </div>
  );
}
