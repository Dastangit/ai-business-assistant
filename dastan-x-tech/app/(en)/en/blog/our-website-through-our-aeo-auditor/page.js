'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { REVISIONES } from '@/lib/revisiones';
import { ruta } from '@/lib/i18n';

// English version of /blog/perfeccionamos-nuestra-web-auditor-aeo. If the Spanish article changes, change this one too.
// Dated case study: the figures come from the audits of October 1 and 2, 2026.
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  inLanguage: 'en',
  headline: 'We perfected our website with our AEO auditor',
  author: { '@type': 'Person', name: 'Dastan Tamayo', jobTitle: 'Founder', worksFor: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com/en' } },
  publisher: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com/en' },
  datePublished: '2026-10-03',
  dateModified: REVISIONES['/en/blog/our-website-through-our-aeo-auditor'],
  description: 'We ran dastanxtech.com through our own AEO auditor: what it measures, what it found, what we fixed and how we went from 94 to 97 out of 100.',
  mainEntityOfPage: 'https://dastanxtech.com/en/blog/our-website-through-our-aeo-auditor',
};

const h2 = { fontSize: '1.5rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' };
const parrafo = { lineHeight: '1.8', marginBottom: '1rem' };
const lista = { lineHeight: '1.9', paddingLeft: '1.3rem', marginBottom: '1rem' };

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
          Internal case study · October 3, 2026
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          We perfected our website with our AEO auditor
        </h1>
        <div className="byline">
          <div className="byline-avatar" aria-hidden="true">DT</div>
          <p className="byline-text">
            <strong>Dastan Tamayo</strong>
            Founder of DASTAN X-TECH · 4 min read
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          For our AI Search Optimization service we built our own auditor: a tool that measures whether ChatGPT, Perplexity, Claude and Gemini can read, understand and cite a website. Before using it with any client, we ran it on <strong>dastanxtech.com</strong>. Here’s what it found, what we fixed and the result.
        </p>

        <h2 style={h2}>What the auditor measures</h2>
        <p style={parrafo}>
          Google runs a page’s JavaScript; most AI assistants don’t. So the auditor reads every page twice, the way a person sees it and the way an AI assistant sees it, and compares them. Then it answers the 8 questions an AI asks before recommending a business:
        </p>
        <ul style={lista}>
          <li>Can it get into the site, or does robots.txt shut the door?</li>
          <li>Can it read the content without running JavaScript?</li>
          <li>Does it understand what the business is and what it sells (structured data)?</li>
          <li>Can it pull out and quote paragraphs that answer a question?</li>
          <li>Does it know who’s behind the site, and does it trust it (legal notice, profiles, reviews)?</li>
          <li>Can it date the content and tell whether it’s still current?</li>
          <li>Are the SEO basics in order (titles, sitemap, language)?</li>
          <li>Does the site respond quickly and without errors?</li>
        </ul>
        <p style={parrafo}>
          Every finding comes with proof: the exact page and the snippet that fails. And before showing anyone a report, we check every finding by hand against the real website.
        </p>

        <h2 style={h2}>What was already right</h2>
        <p style={parrafo}>
          The first audit, on October 1, scored <strong>94 out of 100</strong>. The hardest part was already solved: no AI assistant was locked out, every page arrived complete without depending on JavaScript, and the structured data already said who we are and what we offer. That’s exactly where many sites built with visual builders fail.
        </p>

        <h2 style={h2}>What it found</h2>
        <ul style={lista}>
          <li>There was no legal notice or privacy policy: nothing said which company is behind the site.</li>
          <li>Articles said when they were published, but not when they were last reviewed.</li>
          <li>The sitemap gave every page the same date, so it couldn’t tell what had actually changed.</li>
          <li>One article title was too long and got cut off in search results.</li>
          <li>There were no client reviews or testimonials.</li>
        </ul>

        <h2 style={h2}>What we fixed</h2>
        <ul style={lista}>
          <li>We published the <a href={ruta('privacidad', 'en')} className="text-link">privacy page</a>, saying who is responsible and how we handle the data that comes in through the chat.</li>
          <li>Every page now keeps the real date of its last review, used by both the sitemap and the articles’ structured data.</li>
          <li>We shortened the title that was getting cut off.</li>
          <li>We added to robots.txt how AI assistants may use our content (Content-Signal). That took us from level 1 to level 2 on Cloudflare’s agent readiness scanner.</li>
          <li>Then we went one step further: the homepage tells AI agents where the site’s description is (Link headers), and any page can be requested in Markdown, the plain-text format agents prefer.</li>
        </ul>

        <h2 style={h2}>The result</h2>
        <p style={parrafo}>
          Today’s audit scores <strong>97 out of 100</strong>. Of the five findings, one remains: reviews. That’s normal for a business that’s just starting, and it isn’t fixed with code but with happy clients.
        </p>
        <p style={parrafo}>
          The full report is exactly what a client receives, with the score, the 8 questions, the before and after, and the proof for every finding (in Spanish):
        </p>
        <p style={parrafo}>
          <a href="/ejemplo-informe-aeo" className="text-link" target="_blank" rel="noopener">See the full dastanxtech.com report →</a>
        </p>

        <div style={{ background: '#FAF9FC', border: '1px solid var(--line-light)', borderRadius: 'var(--radius-card)', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--ink)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Want to know what AI sees when it reads your website?
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: "I'd like information about AI Search Optimization (AEO)" }))}
            type="button"
            className="btn btn-suave"
          >
            Ask about AI Search Optimization
          </button>
        </div>
      </article>

      <SiteFooter tone="light" lang="en" />
    </div>
  );
}
