'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { REVISIONES } from '@/lib/revisiones';
import { ruta } from '@/lib/i18n';

// English version of /blog/como-aparecer-en-resultados-de-ia. If the Spanish article changes, change this one too.
const DESCRIPTION = 'Where Google AI Overviews, ChatGPT, Perplexity, Copilot and Gemini get their answers, how to check whether your business appears in each one and what to set up.';

const FAQ = [
  {
    q: 'Do I need a special file or tag to appear in AI Overviews?',
    a: 'No. Google says there are no extra requirements for AI Overviews or AI Mode: the page has to be indexed and eligible to appear in search with a snippet. A file like llms.txt doesn’t hurt, but Google doesn’t need it.',
  },
  {
    q: 'If I block GPTBot, do I disappear from ChatGPT?',
    a: 'No. GPTBot is the crawler OpenAI uses for training its models. The one that decides whether you appear in ChatGPT search is OAI-SearchBot. You can block the first and allow the second.',
  },
  {
    q: 'How do I know how many visits come from AI?',
    a: 'Google Search Console counts AI Overviews and AI Mode inside the normal Web results, without separating them. Visits from ChatGPT, Perplexity or Copilot show up in your analytics as referral traffic from chatgpt.com, perplexity.ai or copilot.microsoft.com.',
  },
  {
    q: 'Is appearing in AI search results the same as AEO or GEO?',
    a: 'Yes. AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) are the names for this work: getting AI search engines to read your business, understand it and cite it in their answers.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    inLanguage: 'en',
    headline: 'How to appear in AI search results',
    author: { '@type': 'Person', name: 'Dastan Tamayo', jobTitle: 'Founder', worksFor: { '@type': 'Organization', '@id': 'https://dastanxtech.com/#organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com/en' } },
    publisher: { '@type': 'Organization', '@id': 'https://dastanxtech.com/#organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com/en' },
    datePublished: '2026-11-24',
    dateModified: REVISIONES['/en/blog/how-to-appear-in-ai-search-results'],
    description: DESCRIPTION,
    mainEntityOfPage: 'https://dastanxtech.com/en/blog/how-to-appear-in-ai-search-results',
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
const paragraph = { lineHeight: '1.8', marginBottom: '1rem' };
const list = { lineHeight: '1.9', paddingLeft: '1.3rem', marginBottom: '1rem' };

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
          Practical guide · November 24, 2026
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          How to appear in AI search results
        </h1>
        <div className="byline">
          <div className="byline-avatar" aria-hidden="true">DT</div>
          <p className="byline-text">
            <strong>Dastan Tamayo</strong>
            Founder of DASTAN X-TECH · 7 min read
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          To appear in AI search results, your website has to be <strong>indexed by the search engine each AI relies on</strong>, open to that AI&apos;s crawler, and written so a sentence can be quoted as an answer. There&apos;s no single &quot;AI index&quot;: Google AI Overviews, ChatGPT, Perplexity, Copilot and Gemini each read from a different place. This guide shows where each one gets its answers and how to check whether your business is there.
        </p>

        <h2 style={h2}>Where each AI search engine gets its answers</h2>

        <h3 style={h3}>Google AI Overviews and AI Mode</h3>
        <p style={paragraph}>
          They use Google&apos;s own index. Google says there are no extra requirements: if a page is indexed and can appear in search with a snippet, it can be cited in an AI Overview. That means classic SEO is the entry ticket. Check your pages in Google Search Console (Pages report) and don&apos;t use <code>nosnippet</code> on the pages you want quoted, because it also keeps them out of AI answers.
        </p>

        <h3 style={h3}>ChatGPT search</h3>
        <p style={paragraph}>
          ChatGPT reads websites with its crawler OAI-SearchBot and also relies on third-party search providers, so being well indexed on Bing helps. If your robots.txt blocks OAI-SearchBot, ChatGPT won&apos;t show your pages in its answers. Blocking GPTBot, which is used for training, doesn&apos;t affect search.
        </p>

        <h3 style={h3}>Perplexity</h3>
        <p style={paragraph}>
          Perplexity has its own index, built by PerplexityBot. It cites its sources very visibly, with numbered links, so it&apos;s the easiest place to see which pages an AI trusts for your topic.
        </p>

        <h3 style={h3}>Microsoft Copilot</h3>
        <p style={paragraph}>
          Copilot answers from Bing. Add your website to Bing Webmaster Tools, submit your sitemap and use IndexNow so Bing learns about changes the same day. Bing Webmaster Tools also has an AI Performance report that shows how often Copilot cites your pages.
        </p>

        <h3 style={h3}>Gemini</h3>
        <p style={paragraph}>
          When Gemini looks things up, it uses Google Search. If you already appear on Google and your Google Business Profile is complete, you have most of the work done for Gemini.
        </p>

        <h2 style={h2}>How to check whether your business appears</h2>
        <ol style={list}>
          <li><strong>Ask like a customer.</strong> Type the need and the city, not your business name (&quot;family dentist in Austin open on Saturdays&quot;), in Google, ChatGPT, Perplexity, Copilot and Gemini. Write down who appears and which pages each answer cites.</li>
          <li><strong>Check the index.</strong> In Google Search Console and Bing Webmaster Tools, confirm that your important pages are indexed. A page that isn&apos;t indexed can&apos;t be cited.</li>
          <li><strong>Check your robots.txt.</strong> Open yourwebsite.com/robots.txt and make sure it doesn&apos;t block Googlebot, Bingbot, OAI-SearchBot or PerplexityBot.</li>
          <li><strong>Look at your traffic.</strong> In your analytics, look for visits referred by chatgpt.com, perplexity.ai and copilot.microsoft.com. In Search Console, AI Overviews are counted inside the normal Web results.</li>
          <li><strong>Repeat every month.</strong> AI answers change from one day to the next; what matters is the trend, not a single search.</li>
        </ol>

        <h2 style={h2}>What makes a page get cited</h2>
        <p style={paragraph}>
          Once an AI can read your page, it chooses what to quote. In our checks, the pages that get cited have three things in common:
        </p>
        <ul style={list}>
          <li><strong>A direct answer at the top.</strong> The first paragraph answers the question in two or three sentences, with concrete details: what, for whom, where and how much.</li>
          <li><strong>Text, not images.</strong> Prices, services and hours written as text, readable even without JavaScript.</li>
          <li><strong>Backing from other sites.</strong> Reviews, directories and mentions that confirm what your website says. The AI trusts what it can verify in several places.</li>
        </ul>
        <p style={paragraph}>
          We explain the full process in <a href={ruta('blogChatgpt', 'en')} className="text-link">7 steps to get your business to show up in ChatGPT</a>; they work the same for the other AI search engines. If you&apos;re new to the topic, start with <a href={ruta('blogAeo', 'en')} className="text-link">what is AEO (and GEO)</a>.
        </p>

        <h2 style={h2}>Frequently asked questions</h2>
        {FAQ.map(({ q, a }) => (
          <div key={q}>
            <h3 style={h3}>{q}</h3>
            <p style={paragraph}>{a}</p>
          </div>
        ))}

        <p style={{ ...paragraph, marginTop: '2rem' }}>
          If you&apos;d rather we do it for you, our <a href={ruta('aeo', 'en')} className="text-link">AI Search Optimization (AEO)</a> costs <strong>150 USD</strong>, fixed price, and covers Google, ChatGPT, Perplexity, Copilot and Gemini.
        </p>

        <div style={{ background: 'var(--ink)', borderRadius: 'var(--radius-card)', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: '#F5F4EF', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Want to know whether your business appears in AI search results?
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: 'I read the guide on appearing in AI search results and I want my business to show up' }))}
            type="button"
            className="btn btn-primary"
          >
            Check my business
          </button>
        </div>
      </article>

      </main>
      <SiteFooter tone="light" lang="en" />
    </div>
  );
}
