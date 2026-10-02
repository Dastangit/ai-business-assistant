'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { REVISIONES } from '@/lib/revisiones';

// English version of /blog/auditamos-nuestra-propia-web. If the Spanish article changes, change this one too.
// It's a dated case study: it describes the site as it was on September 22, 2026.
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  inLanguage: 'en',
  headline: 'We audited our own website with our Digital Business Audit',
  author: { '@type': 'Person', name: 'Dastan Tamayo', jobTitle: 'Founder', worksFor: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com/en' } },
  publisher: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com/en' },
  datePublished: '2026-09-22',
  dateModified: REVISIONES['/en/blog/we-audited-our-own-website'],
  description: 'We applied our own Digital Business Audit to dastanxtech.com. Here’s what we found, what we’ve already fixed and what’s still pending.',
  mainEntityOfPage: 'https://dastanxtech.com/en/blog/we-audited-our-own-website',
};

const h2 = { fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' };

export default function BlogPost() {
  return (
    <div className="theme-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* CABECERA CON ENLACES */}
      <SiteHeader tone="light" lang="en" />

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 5% 2rem' }}>
        <p className="label-mono" style={{ marginBottom: '1rem' }}>
          Internal case study · September 22, 2026
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          We audited our own website with our Digital Business Audit
        </h1>
        <div className="byline">
          <div className="byline-avatar" aria-hidden="true">DT</div>
          <p className="byline-text">
            <strong>Dastan Tamayo</strong>
            Founder of DASTAN X-TECH · 4 min read
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          We sell a Digital Business Audit that reviews where a business is losing time and customers, with real evidence, not guesswork. It seemed fair to hold ourselves to the same standard before asking anyone else to. This is what we found on <strong>dastanxtech.com</strong>, without dressing anything up.
        </p>

        <h2 style={h2}>What was already good</h2>
        <ul style={{ lineHeight: '1.9', paddingLeft: '1.3rem' }}>
          <li>Complete metadata (title, description, Open Graph, Twitter Card, canonical) on every page.</li>
          <li><code>sitemap.xml</code> and <code>robots.txt</code> set up correctly, HTTPS active, responsive design.</li>
          <li>Google Search Console property verified.</li>
        </ul>

        <h2 style={h2}>What we found wrong</h2>
        <ul style={{ lineHeight: '1.9', paddingLeft: '1.3rem' }}>
          <li>Zero external presence: no mention of the brand in any directory, indexed social network or third-party site.</li>
          <li>No Google Business Profile.</li>
          <li>Not a single review or testimonial published anywhere.</li>
          <li>No FAQs or <code>FAQPage</code> schema on the service pages.</li>
          <li>Stray English text on the home page, breaking consistency with the rest of the site, which was in Spanish.</li>
          <li>Being new, the site didn&apos;t show up in Google&apos;s index yet.</li>
        </ul>

        <h2 style={h2}>What we&apos;ve already fixed</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          We added FAQs and <code>FAQPage</code> schema to the three service pages, added site-wide <code>Organization</code> structured data, translated the stray English text, and created a company page on LinkedIn as a first external signal.
        </p>

        <h2 style={h2}>What&apos;s still pending</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Getting our first real customer reviews, adding more directories and external mentions, and keeping on publishing content like this. Google indexing hadn&apos;t arrived yet — that&apos;s expected for a domain only a few weeks old, and we&apos;re monitoring it.
        </p>

        <div style={{ background: 'var(--ink)', borderRadius: 'var(--radius-card)', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: '#F5F4EF', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Want to know what we&apos;d find in your business?
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

      <SiteFooter tone="light" lang="en" />
    </div>
  );
}
