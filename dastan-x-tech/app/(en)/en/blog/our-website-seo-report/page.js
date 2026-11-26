'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { REVISIONES } from '@/lib/revisiones';
import { ruta } from '@/lib/i18n';

// Dated case study: figures come from the SEO reports of 24 September and 18 November 2026
// (~/Desktop/Prospect/Diagnosticos/dastanxtech-com/, not published) and PageSpeed Insights on 18 Nov.
// If you change something here, change the same thing in the Spanish version.
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'From 77 to 91: we ran our website through our SEO report',
  author: { '@type': 'Person', name: 'Dastan Tamayo', jobTitle: 'Founder', worksFor: { '@type': 'Organization', '@id': 'https://dastanxtech.com/#organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com/en' } },
  publisher: { '@type': 'Organization', '@id': 'https://dastanxtech.com/#organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com/en' },
  datePublished: '2026-11-18',
  dateModified: REVISIONES['/en/blog/our-website-seo-report'],
  description: 'We ran dastanxtech.com through our SEO report three times: what it found, what we fixed and how we went from 77 to 91 out of 100.',
  mainEntityOfPage: 'https://dastanxtech.com/en/blog/our-website-seo-report',
  image: 'https://dastanxtech.com/opengraph-image',
  inLanguage: 'en',
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

      <SiteHeader tone="light" lang="en" />
      <main id="contenido">

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 5% 2rem' }}>
        <p className="label-mono" style={{ marginBottom: '1rem' }}>
          Internal case study · November 18, 2026
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          From 77 to 91: we ran our website through our SEO report
        </h1>
        <div className="byline">
          <div className="byline-avatar" aria-hidden="true">DT</div>
          <p className="byline-text">
            <strong>Dastan Tamayo</strong>
            Founder of DASTAN X-TECH · 4 min read
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Our free SEO report gives a website a score from 0 to 100 and points out the 5 most urgent fixes. Before sending it to any business, we used it on <strong>dastanxtech.com</strong> (the Spanish home page is the one scored): three times, almost two months apart from the first to the last. These are the scores, what it found each time and what we fixed.
        </p>

        <h2 style={h2}>What the report checks</h2>
        <p style={parrafo}>
          It checks what Google looks at to understand a website and decide how to show it, in 8 sections weighted in the score: meta tags (20%), headings (15%), technical (15%), and 10% each for images, links, social previews, structured data and content. Every warning comes with the exact page, the measured value and how to fix it.
        </p>

        <h2 style={h2}>September 24: 77 out of 100</h2>
        <p style={parrafo}>
          No critical errors, but 9 warnings. The main ones:
        </p>
        <ul style={lista}>
          <li>The meta description was 193 characters long. Google cuts it at around 160, so the end didn&apos;t show.</li>
          <li>The report found no structured data saying who we are and what we offer.</li>
          <li>The <code>/favicon.ico</code> address returned a 404 error.</li>
          <li>All three links to our services said the same thing: “Saber más →” (“Learn more”).</li>
          <li>The home page had about 195 words, below the recommended 300.</li>
        </ul>

        <h2 style={h2}>What changed in two months</h2>
        <p style={parrafo}>
          The website grew from 8 to 32 pages, with an English version and a blog with 7 articles in each language. We added structured data to every page, links that say where they lead (“Learn more about Web Design”) and a home page of almost 600 words.
        </p>

        <h2 style={h2}>November 18: 88 out of 100</h2>
        <p style={parrafo}>
          The second pass found 10 warnings, almost all about length: as the site grew, some texts had become too long.
        </p>
        <ul style={lista}>
          <li>The home page title was 71 characters. Google cuts it at around 60, right where it said “pymes” (small businesses).</li>
          <li>The meta description was still long: 188 characters.</li>
          <li>The logo in the structured data was the rectangular social image, not a square logo.</li>
          <li>The main heading (H1) carried a hidden sentence with the brand and the countries: 209 characters in total, which looks like keyword stuffing.</li>
          <li><code>/favicon.ico</code> still returned a 404.</li>
        </ul>
        <p style={parrafo}>
          We fixed it that same morning: a 57-character title, a 147-character description, a square logo, an H1 with no hidden text (the countries moved to a visible sentence in “Who we are”) and a <code>favicon.ico</code>.
        </p>

        <h2 style={h2}>A few hours later: 91 out of 100</h2>
        <p style={parrafo}>
          We ran the report again with the changes live and the score rose to 91. What was left was on the inner pages: 6 long descriptions, a blog H1 that only said “Blog”, generic titles on Services and Our story, and a skipped heading level on the Web Design page. We fixed those the same day too, and added breadcrumbs (Home › Blog › article) to the structured data.
        </p>
        <p style={parrafo}>
          Finally, we measured speed with PageSpeed Insights, Google&apos;s tool: <strong>98 to 100 for performance on mobile, 100 on desktop</strong>, and 100 for accessibility, best practices and SEO.
        </p>

        <h2 style={h2}>What code can&apos;t fix</h2>
        <p style={parrafo}>
          One minor warning remains: a double redirect from <code>http://www</code>, which depends on the hosting and has almost no impact. What&apos;s really missing isn&apos;t on the website but outside it: links from other sites and client reviews. The report tells you whether Google can understand your website; whether it picks you over the competition also depends on what the internet says about you. That&apos;s why, after the report, comes <a href={ruta('aeo', 'en')} className="text-link">AI Search Optimization</a>.
        </p>
        <p style={parrafo}>
          Want to see what the report looks like inside? Here is an example with a fictional business (in Spanish):
        </p>
        <p style={parrafo}>
          <a href="/ejemplo-diagnostico-seo.html" className="text-link" target="_blank" rel="noopener">See an example SEO report →</a>
        </p>

        <div style={{ background: '#FAF9FC', border: '1px solid var(--line-light)', borderRadius: 'var(--radius-card)', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--ink)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            What score would your website get?
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
