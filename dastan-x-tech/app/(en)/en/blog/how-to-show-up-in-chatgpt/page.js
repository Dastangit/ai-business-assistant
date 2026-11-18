'use client';
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { REVISIONES } from '@/lib/revisiones';
import { ruta } from '@/lib/i18n';

// English version of /blog/como-aparecer-en-chatgpt. If the Spanish article changes, change this one too.
const DESCRIPTION = 'The 7 steps to get ChatGPT, Gemini and Perplexity to recommend your business: how to check whether they already mention you, what to fix and what doesn’t work.';

const FAQ = [
  {
    q: 'Can I pay to get ChatGPT to recommend my business?',
    a: 'No. ChatGPT now shows ads, but they appear separately, labeled as ads, and OpenAI says they don’t influence its answers. What ChatGPT answers comes from the public information it finds about your business: your website, your Google Business Profile, your reviews and what other sites say about you. That information is what you work on.',
  },
  {
    q: 'How long does it take for my business to show up in ChatGPT?',
    a: 'It depends on each case. Changes to your website and Google Business Profile usually show within weeks, once search engines read them again; reviews and mentions on other sites build up over months. Nobody can guarantee a date.',
  },
  {
    q: 'What is SEO for AI called?',
    a: 'Two names are used most: AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization). In practice they describe the same work: getting AI assistants to understand your business and recommend it.',
  },
  {
    q: 'Does the same work for Gemini, Perplexity and Claude?',
    a: 'Yes. Each assistant uses its own sources, but they all reward the same things: a website they can read, clear and consistent information, and trust signals they can verify on several sites.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    inLanguage: 'en',
    headline: 'How to get your business to show up in ChatGPT',
    author: { '@type': 'Person', name: 'Dastan Tamayo', jobTitle: 'Founder', worksFor: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com/en' } },
    publisher: { '@type': 'Organization', name: 'DASTAN X-TECH', url: 'https://dastanxtech.com/en' },
    datePublished: '2026-11-18',
    dateModified: REVISIONES['/en/blog/how-to-show-up-in-chatgpt'],
    description: DESCRIPTION,
    mainEntityOfPage: 'https://dastanxtech.com/en/blog/how-to-show-up-in-chatgpt',
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

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 5% 2rem' }}>
        <p className="label-mono" style={{ marginBottom: '1rem' }}>
          Practical guide · November 18, 2026
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          How to get your business to show up in ChatGPT
        </h1>
        <div className="byline">
          <div className="byline-avatar" aria-hidden="true">DT</div>
          <p className="byline-text">
            <strong>Dastan Tamayo</strong>
            Founder of DASTAN X-TECH · 6 min read
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          For ChatGPT to recommend your business, it has to be able to <strong>find it, read it and trust it</strong>. The answer can&apos;t be bought: AI names the businesses whose public information is clear, consistent and backed up by other sites. These are the 7 steps we follow, and they work the same for Gemini, Perplexity and Claude.
        </p>

        <h2 style={h2}>First: check whether ChatGPT already mentions you</h2>
        <p style={paragraph}>
          Before changing anything, ask what a customer would ask. Don&apos;t type your business name: type the need and the city.
        </p>
        <ul style={list}>
          <li>&quot;What&apos;s the best dentist in Austin?&quot;</li>
          <li>&quot;Recommend a couples spa in Miami.&quot;</li>
          <li>&quot;Who builds websites for restaurants in Chicago?&quot;</li>
        </ul>
        <p style={paragraph}>
          Do it in ChatGPT, Gemini and Perplexity, and write down which businesses come up and what each answer says about them. If you don&apos;t appear, that&apos;s your starting point; if your competitors do, look at what the AI highlights about them: that&apos;s what it found in their public information.
        </p>

        <h2 style={h2}>The 7 steps to show up in ChatGPT search</h2>

        <h3 style={h3}>1. Let AI crawlers in</h3>
        <p style={paragraph}>
          Each assistant uses its own crawler to read websites: OpenAI has OAI-SearchBot for ChatGPT search, Perplexity has PerplexityBot and Google uses Googlebot. If your website&apos;s robots.txt file blocks them —sometimes a template or a security plugin does it without you knowing— your website doesn&apos;t exist for them.
        </p>

        <h3 style={h3}>2. Make your content readable without JavaScript</h3>
        <p style={paragraph}>
          Google runs a page&apos;s JavaScript; most AI crawlers don&apos;t. If your services or prices only appear after the JavaScript loads, or sit inside an image, the AI sees an almost empty page.
        </p>

        <h3 style={h3}>3. Get listed on Google and Bing</h3>
        <p style={paragraph}>
          Assistants also rely on search engines. Gemini uses what Google knows, and for ChatGPT it pays to be well indexed on Bing too. Add your website to Google Search Console and Bing Webmaster Tools, and complete your Google Business Profile: category, hours, service area, photos and services.
        </p>
        <p style={paragraph}>
          Since November 2026, OpenAI also lets you claim your business inside ChatGPT through its Business Hub (in beta): you verify that you own it and keep your details up to date. For now, local businesses can only claim listings that already exist in the United States; online businesses can ask to be added.
        </p>

        <h3 style={h3}>4. Write answers, not slogans</h3>
        <p style={paragraph}>
          AI quotes specific sentences. &quot;We offer the best service&quot; is useless to it; &quot;Teeth cleaning in Austin, 45 minutes, $120, same-day appointments&quot; works. Put on your website, as text, what you do, for whom, where, at what price and when, and add an FAQ section with your customers&apos; real questions.
        </p>

        <h3 style={h3}>5. The same details everywhere</h3>
        <p style={paragraph}>
          Your name, address, phone number and hours must match on your website, Google Business Profile, Instagram, Facebook and directories. If the AI finds two phone numbers or two different opening hours, it hesitates, and when it hesitates it prefers to name someone else.
        </p>

        <h3 style={h3}>6. Reviews and mentions on other sites</h3>
        <p style={paragraph}>
          AI recommends what it can verify. Google reviews and mentions in industry directories, local press or other businesses&apos; websites confirm that you exist and that your customers are happy. It&apos;s the slowest step and the one that weighs the most.
        </p>

        <h3 style={h3}>7. Tell the machine what you are</h3>
        <p style={paragraph}>
          Structured data (schema.org) tells search engines and AI, in a format they read without guessing, what type of business you are, what services you offer, where you are and what your customers think. It isn&apos;t visible on the page, but it prevents misunderstandings.
        </p>

        <h2 style={h2}>What doesn&apos;t work</h2>
        <ul style={list}>
          <li><strong>Repeating keywords</strong> all over your website: AI looks for clear answers, not repetition.</li>
          <li><strong>Fake or bought reviews:</strong> Google removes them and they can cost you your profile.</li>
          <li><strong>Pages written only for AI</strong> that differ from what your customers see: if the details don&apos;t match, you lose trust instead of gaining it.</li>
          <li><strong>Expecting overnight results:</strong> search engines take time to read your website again, and reviews build up over time.</li>
        </ul>

        <h2 style={h2}>Our own case</h2>
        <p style={paragraph}>
          We applied these steps to dastanxtech.com before doing it for any client: today it&apos;s at level 4 on Is It Agent Ready, Cloudflare&apos;s free test for AI agents, and at 97 out of 100 in our AEO auditor. We explain it in detail in <a href={ruta('blogConsultorAeo', 'en')} className="text-link">what an AEO consultant does</a>. And if you want the concept from the start, it&apos;s in <a href={ruta('blogAeo', 'en')} className="text-link">what is AEO</a>.
        </p>

        <h2 style={h2}>Frequently asked questions</h2>
        {FAQ.map(({ q, a }) => (
          <div key={q}>
            <h3 style={h3}>{q}</h3>
            <p style={paragraph}>{a}</p>
          </div>
        ))}

        <p style={{ ...paragraph, marginTop: '2rem' }}>
          If you&apos;d rather we do it for you, our <a href={ruta('aeo', 'en')} className="text-link">AI Search Optimization (AEO)</a> costs <strong>150 USD</strong>, fixed price, and covers these 7 steps.
        </p>

        <div style={{ background: 'var(--ink)', borderRadius: 'var(--radius-card)', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: '#F5F4EF', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Want to know what your business is missing for ChatGPT to recommend it?
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('abrir-chat', { detail: 'I read the guide on showing up in ChatGPT and I want AI to recommend my business' }))}
            type="button"
            className="btn btn-primary"
          >
            I want to show up in ChatGPT
          </button>
        </div>
      </article>

      <SiteFooter tone="light" lang="en" />
    </div>
  );
}
