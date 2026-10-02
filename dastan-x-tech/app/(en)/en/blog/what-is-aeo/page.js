'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { REVISIONES } from '@/lib/revisiones';
import { ruta } from '@/lib/i18n';

// English version of /blog/que-es-aeo. If the Spanish article changes, change this one too.
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  inLanguage: 'en',
  headline: 'What is AEO, explained with a real example',
  author: { '@type': 'Person', name: 'Dastan Tamayo', jobTitle: 'Founder', worksFor: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com/en' } },
  publisher: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com/en' },
  datePublished: '2026-09-23',
  dateModified: REVISIONES['/en/blog/what-is-aeo'],
  description: 'What Answer Engine Optimization (AEO) is, why it’s already happening and what the businesses AI recommends have in common, with a real example from Gemini.',
  mainEntityOfPage: 'https://dastanxtech.com/en/blog/what-is-aeo',
};

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
          What is AEO, explained with a real example
        </h1>
        <div className="byline">
          <div className="byline-avatar" aria-hidden="true">DT</div>
          <p className="byline-text">
            <strong>Dastan Tamayo</strong>
            Founder of DASTAN X-TECH · 4 min read
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          More and more people don&apos;t search on Google — they ask ChatGPT, Gemini or Perplexity directly. According to BrightLocal&apos;s 2026 Local Consumer Review Survey, 45% of people have already used this kind of AI tool to find local businesses. AEO (Answer Engine Optimization) means preparing your business so those AIs recommend you first.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' }}>AEO doesn&apos;t replace SEO, it complements it</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Traditional SEO aims to get Google to show you in a list of ten blue links so the user can choose. AEO aims for something different: getting the AI to read, understand and cite your business as THE answer, without the user having to compare anything. They&apos;re related games, but with different rules.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' }}>We tested it live</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          We asked Gemini: <em>&quot;What&apos;s the best spa in Medellín?&quot;</em>. The answer wasn&apos;t a generic list — it was 5 real businesses, each with its Google rating (all between 4.4★ and 4.9★), its opening hours, its business category, and 2 or 3 very specific lines about what makes it different: one for its hydrotherapy circuit, another for its deep tissue massages and sound healing, another for its chocolate therapy.
        </p>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          None of those businesses &quot;paid&quot; to appear there. The AI cited them because their public information was already ready to be cited.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' }}>What the businesses AI recommends have in common</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Looking at those 5 results, the same pattern always repeats:
        </p>
        <ul style={{ lineHeight: '1.9', paddingLeft: '1.3rem', marginBottom: '1rem' }}>
          <li><strong>A complete Google Business Profile</strong> — the right category, up-to-date hours, real reviews and a high, consistent rating.</li>
          <li><strong>Specific content, not generic</strong> — the AI didn&apos;t say &quot;good service and friendly staff&quot; about any of them; it said exactly which treatment each one offers.</li>
          <li><strong>Visible trust signals</strong> — the number and quality of reviews is the first thing the AI uses to decide whom to cite first.</li>
        </ul>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          That&apos;s exactly what we work on in our <a href={ruta('aeo', 'en')} className="text-link">AI Search Optimization (AEO) service</a>: putting your Google Business Profile and social media in order, creating quotable content about what you really offer, and strengthening the trust signals AI uses to choose.
        </p>

        <div style={{ background: 'var(--ink)', borderRadius: 'var(--radius-card)', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: '#F5F4EF', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Want to know whether AI is already recommending you, or your competitors?
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: 'I read the post about AEO and I want to know if AI is recommending me' }))}
            type="button"
            className="btn btn-primary"
          >
            Find out if AI recommends me
          </button>
        </div>
      </article>

      <SiteFooter tone="light" lang="en" />
    </div>
  );
}
