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
  title: 'DASTAN X-TECH | Consultores de IA para Negocios y Pymes',
  description: 'Consultoría de Inteligencia Artificial para negocios privados y pymes en Colombia y México. Auditoría SEO, posicionamiento AEO, diseño web y agentes de IA a la medida.',
  keywords: [
    'Consultoría de IA para negocios', 
    'Consultores de Inteligencia Artificial', 
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
    title: 'DASTAN X-TECH | Consultores de IA para Negocios y Pymes',
    description: 'Asesoría y consultoría de IA para negocios privados y pymes: arquitecturas web de alto impacto, SEO local, posicionamiento AEO y agentes de Inteligencia Artificial.',
    url: 'https://dastanxtech.com',
    siteName: 'DASTAN X-TECH',
    locale: 'es_US',
    type: 'website',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'Organization'],
  name: 'DASTAN X-TECH',
  url: 'https://dastanxtech.com',
  logo: 'https://dastanxtech.com/opengraph-image',
  image: 'https://dastanxtech.com/opengraph-image',
  description: 'Consultores de Inteligencia Artificial para negocios privados y pymes en Colombia y México. Ofrecemos consultoría y auditoría de IA, diseño web profesional, posicionamiento SEO y AEO, y agentes de IA a la medida.',
  areaServed: ['Colombia', 'México'],
  knowsLanguage: 'es',
  serviceType: ['Consultoría de Inteligencia Artificial', 'Auditoría SEO', 'Posicionamiento AEO', 'Diseño Web'],
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
