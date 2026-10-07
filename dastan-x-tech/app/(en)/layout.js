import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import GlobalChatWidget from "@/components/GlobalChatWidget";
import AvisoIdioma from "@/components/AvisoIdioma";
import { alternates } from "@/lib/i18n";

// Layout raíz de la versión en inglés (/en/…): <html lang="en">. El español tiene el suyo en app/(es)/layout.js
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  themeColor: '#13101A',
};

export const metadata = {
  metadataBase: new URL('https://dastanxtech.com'),
  title: 'DASTAN X-TECH | Digital & AI Consulting for Small Businesses',
  description: 'We show you, with evidence, why your business is losing customers online: free SEO report, digital business audit, web design and AI search optimization so Google and AI assistants recommend you.',
  alternates: alternates('inicio', 'en'),
  openGraph: {
    title: 'DASTAN X-TECH | Digital & AI Consulting for Small Businesses',
    description: 'Free SEO report for your website: your score from 0 to 100 and the 5 most urgent fixes. Digital business audit, web design and AI search optimization for small businesses.',
    url: 'https://dastanxtech.com/en',
    siteName: 'DASTAN X-TECH',
    locale: 'en_US',
    type: 'website',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'Organization'],
  name: 'DASTAN X-TECH',
  url: 'https://dastanxtech.com/en',
  logo: 'https://dastanxtech.com/opengraph-image',
  image: 'https://dastanxtech.com/opengraph-image',
  description: 'Digital and AI consulting for small businesses, fully remote. Free SEO report, Digital Business Audit, web design and AI search optimization (AEO) so Google and AI assistants recommend the business.',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Mexico' },
    { '@type': 'Country', name: 'Colombia' },
  ],
  knowsLanguage: ['en', 'es'],
  serviceType: ['Digital Business Audit', 'Web Design', 'AI Search Optimization (AEO)', 'AI Consulting'],
  email: 'supportdaelworld@gmail.com',
  telephone: '+1-605-500-3653',
  founder: { '@type': 'Person', name: 'Dastan Tamayo' },
  sameAs: [
    'https://www.instagram.com/dastan.xtech/',
    'https://www.linkedin.com/in/dastantech',
  ],
};

export default function RootLayoutEn({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "if(/FBAN|FBAV|FB_IAB|Instagram/.test(navigator.userAgent))document.documentElement.classList.add('fb-iab')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <AvisoIdioma />
        {children}
        <GlobalChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
