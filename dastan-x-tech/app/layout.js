import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://dastanxtech.com'),
  title: 'DASTAN X-TECH | Agencia de IA y Servicios Digitales',
  description: 'Soluciones corporativas para Crecimiento de Negocios y Pymes. Especialistas en Diseño Web Profesional, Auditoría SEO, Posicionamiento AEO y Chat de IA integrado 24/7.',
  keywords: [
    'Agencia de IA', 
    'Automatización de negocios', 
    'Diseño web profesional', 
    'Auditoría SEO', 
    'Posicionamiento AEO', 
    'Chat de IA integrado'
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DASTAN X-TECH | Ecosistema Digital Corporativo',
    description: 'Transformamos negocios y Pymes con arquitecturas web de alto impacto, SEO local y agentes de Inteligencia Artificial.',
    url: 'https://dastanxtech.com',
    siteName: 'DASTAN X-TECH',
    locale: 'es_US',
    type: 'website',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DASTAN X-TECH',
  url: 'https://dastanxtech.com',
  logo: 'https://dastanxtech.com/opengraph-image',
  description: 'Agencia de IA y automatización de negocios. Diseño web profesional, auditoría SEO, posicionamiento AEO y chat de IA integrado 24/7 para pymes en Colombia y México.',
  areaServed: ['Colombia', 'México'],
  knowsLanguage: 'es',
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
