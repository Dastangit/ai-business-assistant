'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { REVISIONES } from '@/lib/revisiones';

// English version of /blog/5-senales-web-cuesta-clientes. If the Spanish article changes, change this one too.
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  inLanguage: 'en',
  headline: '5 signs your website is losing you customers',
  author: { '@type': 'Person', name: 'Dastan Tamayo', jobTitle: 'Founder', worksFor: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com/en' } },
  publisher: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com/en' },
  datePublished: '2026-09-23',
  dateModified: REVISIONES['/en/blog/5-signs-your-website-is-losing-customers'],
  description: 'The 5 most common signs that make a visitor leave without booking or buying, with a real redesign that fixed all five.',
  mainEntityOfPage: 'https://dastanxtech.com/en/blog/5-signs-your-website-is-losing-customers',
};

const h2 = { fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' };
const p = { lineHeight: '1.8', marginBottom: '1rem' };

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
          Practical guide · September 23, 2026
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          5 signs your website is losing you customers
        </h1>
        <div className="byline">
          <div className="byline-avatar" aria-hidden="true">DT</div>
          <p className="byline-text">
            <strong>Dastan Tamayo</strong>
            Founder of DASTAN X-TECH · 5 min read
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Before we propose a Digital Business Audit, the first thing we review is the website. These five signs are the ones we see most often. We illustrate them with a real redesign we did for a small spa (we&apos;re keeping its name out of this for now, but you can see the result).
        </p>

        <h2 style={h2}>1. There&apos;s no clickable phone number or WhatsApp anywhere</h2>
        <p style={p}>
          If the only way to get in touch is a 6-field form, you&apos;ve already lost anyone who needs something sorted today or tomorrow. A form is a lot of friction for a decision made in seconds. The fix is simple: phone and WhatsApp visible and clickable from the first screen, and again at the end of the page.
        </p>

        <h2 style={h2}>2. Completely empty scroll sections</h2>
        <p style={p}>
          Whole blank screens between one section and the next make visitors think the page has ended or is broken, and they leave before reaching the real information. The page should always move on to new content, never to an empty gap.
        </p>

        <h2 style={h2}>3. Repeated banners that look like spam</h2>
        <p style={p}>
          The same promo notice repeated several times in a row (and sometimes cut off on mobile) reads like advertising spam and undermines professionalism right when the first impression is being formed. A clean header, with the business name and a direct way to get in touch, says much more.
        </p>

        <h2 style={h2}>4. No address, opening hours or way to find you</h2>
        <p style={p}>
          If your business depends on people showing up in person, not showing your address and hours in a fixed place (footer or contact bar) is a direct hit to bookings. That information has to be always visible and clickable, not hidden or missing.
        </p>

        <h2 style={h2}>5. Services aren&apos;t listed anywhere</h2>
        <p style={p}>
          Showing photos without explaining which specific treatments or products you offer leaves visitors not knowing what they can book or which one suits them, so they don&apos;t decide and they leave. Each service needs its own space, with a clear name and context, before the contact button.
        </p>

        <div style={{ background: 'var(--ink)', borderRadius: 'var(--radius-card)', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: '#F5F4EF', fontSize: '1.1rem', marginBottom: '1rem' }}>
            Here&apos;s what it looks like fixed in practice — this is the real redesign of the spa mentioned above:
          </p>
          <a
            href="https://rad-valkyrie-9cdd5a.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', color: '#2DD4BF', fontWeight: 'bold', textDecoration: 'none', marginBottom: '1.5rem' }}
          >
            See the live redesign ↗
          </a>
          <br />
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: 'I read the post about the 5 signs and I want to know how my website is doing' }))}
            type="button"
            className="btn btn-primary"
          >
            Check how my website is doing
          </button>
        </div>
      </article>

      <SiteFooter tone="light" lang="en" />
    </div>
  );
}
