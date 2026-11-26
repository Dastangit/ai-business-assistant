'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { REVISIONES } from '@/lib/revisiones';
import { ruta } from '@/lib/i18n';

// English version of /blog/que-hace-un-consultor-aeo. If the Spanish article changes, change this one too.
// Is It Agent Ready result from isitagentready.com/dastanxtech.com on November 19, 2026:
// level 5 «Agent-Native», 60 points: Content 100, Bot Access Control 100, Discoverability 3/4,
// APIs/Auth/MCP/Skills 3/8 (API catalog, MCP Server Card and Agent Skills; not auth.md or OAuth).
// On October 29 it was level 4 «Agent-Integrated», 40 points, with APIs/MCP at 0/8.
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  inLanguage: 'en',
  headline: 'What does an AEO consultant do?',
  author: { '@type': 'Person', name: 'Dastan Tamayo', jobTitle: 'Founder', worksFor: { '@type': 'Organization', '@id': 'https://dastanxtech.com/#organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com/en' } },
  publisher: { '@type': 'Organization', '@id': 'https://dastanxtech.com/#organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com/en' },
  datePublished: '2026-10-29',
  dateModified: REVISIONES['/en/blog/what-does-an-aeo-consultant-do'],
  description: 'What an AEO consultant checks so ChatGPT, Gemini and Perplexity recommend your business, using our own website: level 5 on Cloudflare’s Is It Agent Ready.',
  mainEntityOfPage: 'https://dastanxtech.com/en/blog/what-does-an-aeo-consultant-do',
  image: 'https://dastanxtech.com/opengraph-image',
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
      <main id="contenido">

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 5% 2rem' }}>
        <p className="label-mono" style={{ marginBottom: '1rem' }}>
          Practical guide · October 29, 2026
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          What does an AEO consultant do?
        </h1>
        <div className="byline">
          <div className="byline-avatar" aria-hidden="true">DT</div>
          <p className="byline-text">
            <strong>Dastan Tamayo</strong>
            Founder of DASTAN X-TECH · 5 min read
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          An AEO consultant gets your business ready so AI assistants —ChatGPT, Gemini, Perplexity or Claude— understand it, trust it and recommend it when someone asks about a service like yours. It’s the work we do at DASTAN X-TECH. Here it is step by step, with our own website as the example.
        </p>

        <h2 style={h2}>AEO and SEO in one sentence</h2>
        <p style={parrafo}>
          SEO aims to get you into Google’s list of results. AEO (Answer Engine Optimization) aims to make you <strong>the answer</strong> when someone asks an AI “what’s the best option near me?”. One doesn’t replace the other: AEO builds on a website that already works well on Google. For the concept with an example, see <a href={ruta('blogAeo', 'en')} className="text-link">what is AEO</a>.
        </p>

        <h2 style={h2}>What an AEO consultant checks, step by step</h2>
        <ol style={lista}>
          <li><strong>That AI can get in.</strong> Your robots.txt doesn’t lock out the bots from ChatGPT, Claude, Perplexity or Google, and it says how they may use your content.</li>
          <li><strong>That it can read you.</strong> Google runs a website’s JavaScript; most AI assistants don’t. If your content only appears after the JavaScript loads, to them the page is empty.</li>
          <li><strong>That it understands what you are.</strong> Structured data that tells machines, in a format they read, what business you are, what you sell and where you work.</li>
          <li><strong>That it can quote you.</strong> Services, prices, hours and FAQs written as clear answers that AI can repeat word for word when it recommends you.</li>
          <li><strong>That it trusts you.</strong> A tidy Google Business Profile, social profiles with the same details as your website, a legal notice and real reviews. AI recommends what it can confirm in several places.</li>
          <li><strong>That your website is ready for AI agents.</strong> We measure it with <a href="https://isitagentready.com" target="_blank" rel="noopener noreferrer" className="text-link">Is It Agent Ready</a>, Cloudflare’s free test, and fix whatever lowers the score.</li>
        </ol>

        <h2 style={h2}>Our case: dastanxtech.com</h2>
        <p style={parrafo}>
          Before doing it for any client, we did it for our own website. On our AEO auditor, which answers the 8 questions AI asks before recommending a business, we went from 94 to 97 out of 100; the story is in <a href={ruta('blogAuditorAeo', 'en')} className="text-link">we perfected our website with our AEO auditor</a>.
        </p>
        <p style={parrafo}>
          On Is It Agent Ready, the website is now at <strong>level 5, “Agent-Native”</strong>, the highest, with 60 points (on October 29 it was level 4, with 40):
        </p>
        <ul style={lista}>
          <li><strong>Content: 100.</strong> Any page can be requested in Markdown, the text format AI agents prefer.</li>
          <li><strong>Bot Access Control: 100.</strong> The robots.txt has rules for AI bots and says how they may use the content (Content-Signal).</li>
          <li><strong>Discoverability: 3 of 4.</strong> robots.txt, sitemap and headers that tell agents where the website’s description lives.</li>
          <li><strong>APIs, MCP and skills: 3 of 8.</strong> A public, read-only MCP server with our services, prices and pages; its discovery card; a “skill” that tells agents how to answer questions about us; and an API catalog.</li>
        </ul>
        <p style={parrafo}>
          What’s missing we left out on purpose: agent registration with OAuth and auth.md is for websites where an agent logs into a private account —booking, buying, seeing a customer’s data—, and ours only offers public information. We’d rather say so than build a registration nobody needs just to raise the score.
        </p>
        <p style={parrafo}>
          <a href="https://isitagentready.com/dastanxtech.com" target="_blank" rel="noopener noreferrer" className="text-link">See the dastanxtech.com result on Is It Agent Ready →</a>
        </p>

        <h2 style={h2}>What an AEO consultant shouldn’t promise you</h2>
        <ul style={lista}>
          <li>That ChatGPT will recommend you no matter what, or a specific score: nobody controls what an AI answers.</li>
          <li>Results without real reviews: those aren’t fixed with code but with happy clients.</li>
          <li>Miracles on a broken website: if yours isn’t in good shape, fixing it comes first.</li>
        </ul>

        <h2 style={h2}>How much it costs</h2>
        <p style={parrafo}>
          If you want to <a href={ruta('aeo', 'en')} className="text-link">hire an AEO consultant</a>, our AI Search Optimization (AEO) costs <strong>150 USD</strong>, a fixed price. It needs a website in good shape: if yours isn’t, or you don’t have one, the first step is <a href={ruta('disenoWeb', 'en')} className="text-link">Web Design</a>, for <strong>100 USD</strong>. And if you want everything together, the All-in-One Package (Web Design + Digital Business Audit + AEO) costs 400 USD.
        </p>

        <div style={{ background: '#FAF9FC', border: '1px solid var(--line-light)', borderRadius: 'var(--radius-card)', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--ink)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Want AI to recommend your business?
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

      </main>
      <SiteFooter tone="light" lang="en" />
    </div>
  );
}
