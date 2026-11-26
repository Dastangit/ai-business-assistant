import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import GlobalChatWidget from "@/components/GlobalChatWidget";
import AvisoIdioma from "@/components/AvisoIdioma";
import { alternates } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  themeColor: '#0A090E',
};

export const metadata = {
  metadataBase: new URL('https://dastanxtech.com'),
  title: 'DASTAN X-TECH | Consultoría digital para negocios y pymes',
  description: 'Te decimos, con pruebas, por qué tu negocio pierde clientes por internet. Diagnóstico SEO gratis, diseño web y posicionamiento para Google y la IA.',
  alternates: alternates('inicio', 'es'),
  // Verificación del dominio en Trustpilot (perfil de reseñas). Es pública: no es una clave secreta
  other: {
    'trustpilot-one-time-domain-verification-id': 'b2716753-f0f4-4a03-a2f7-16cba20f6ad7',
  },
  openGraph: {
    title: 'DASTAN X-TECH | Consultoría digital para negocios y pymes',
    description: 'Diagnóstico SEO gratis de tu web: tu puntuación de 0 a 100 y las 5 correcciones más urgentes. Auditoría de negocio, diseño web y posicionamiento AEO para negocios privados y pymes.',
    url: 'https://dastanxtech.com',
    // La imagen vive en app/opengraph-image.jsx (fuera del route group, para conservar la URL /opengraph-image)
    // ?v=: LinkedIn y WhatsApp guardan la imagen por su URL; súbelo cada vez que cambie el diseño de la imagen
    images: [{ url: '/opengraph-image?v=3', type: 'image/png', width: 1200, height: 630, alt: 'DASTAN X-TECH | Consultoría digital de alto nivel, diseño web y posicionamiento para pymes' }],
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
  '@id': 'https://dastanxtech.com/#organization',
  logo: 'https://dastanxtech.com/icon.png',
  image: 'https://dastanxtech.com/opengraph-image',
  description: 'Consultoría digital de alto nivel para negocios privados y pymes, en remoto. Diagnóstico SEO gratis, Auditoría Completa de Negocio, diseño web y posicionamiento AEO para que Google y los asistentes de IA recomienden el negocio.',
  areaServed: [
    { '@type': 'Country', name: 'Colombia' },
    { '@type': 'Country', name: 'México' },
    { '@type': 'Country', name: 'Estados Unidos' },
    { '@type': 'Country', name: 'España' },
  ],
  knowsLanguage: ['es', 'en'],
  knowsAbout: ['Auditoría de negocio', 'Diseño web', 'Posicionamiento AEO', 'Consultoría digital'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Puebla',
    addressRegion: 'Puebla',
    addressCountry: 'MX',
  },
  email: 'dastanxtech.services@gmail.com',
  telephone: '+1-605-500-3653',
  founder: { '@type': 'Person', name: 'Dastan Tamayo' },
  sameAs: [
    'https://www.instagram.com/dastan.xtech/',
    'https://www.linkedin.com/in/dastantech',
    'https://www.youtube.com/@Dastanxtech',
    'https://www.trustpilot.com/review/dastanxtech.com',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: '+1-605-500-3653',
    email: 'dastanxtech.services@gmail.com',
    availableLanguage: ['es', 'en'],
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://dastanxtech.com/#website',
  name: 'DASTAN X-TECH',
  url: 'https://dastanxtech.com',
  inLanguage: 'es',
  publisher: { '@id': 'https://dastanxtech.com/#organization' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* El navegador interno de Facebook/Instagram agranda el texto: marcamos <html> para compensarlo en CSS */}
        <script dangerouslySetInnerHTML={{ __html: "if(/FBAN|FBAV|FB_IAB|Instagram/.test(navigator.userAgent))document.documentElement.classList.add('fb-iab')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
