import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import GlobalChatWidget from "../components/GlobalChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  themeColor: '#07050A',
};

export const metadata = {
  metadataBase: new URL('https://dastanxtech.com'),
  title: 'DASTAN X-TECH | Consultoría digital e IA para clínicas estéticas, spas y salones',
  description: 'Te decimos, con pruebas, por qué tu clínica, spa o salón pierde clientes por internet: diagnóstico gratis, auditoría de negocio, diseño web y posicionamiento para que Google y la IA te recomienden.',
  keywords: [
    'Marketing digital para clínicas estéticas',
    'Diseño web para spas',
    'Diseño web para salones de belleza',
    'Auditoría de negocio',
    'Posicionamiento AEO',
    'Consultoría de IA para negocios',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DASTAN X-TECH | Consultoría digital e IA para clínicas estéticas, spas y salones',
    description: 'Diagnóstico gratis con 3 fallos reales de tu web o tu Instagram. Auditoría de negocio, diseño web y posicionamiento AEO para clínicas estéticas, spas y salones.',
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
  description: 'Consultoría digital e IA para clínicas estéticas, spas y salones de belleza, en remoto. Diagnóstico gratis, Auditoría de Negocio 360°, diseño web y posicionamiento AEO para que Google y los asistentes de IA recomienden el negocio.',
  areaServed: [
    { '@type': 'Country', name: 'Colombia' },
    { '@type': 'Country', name: 'México' },
    { '@type': 'Country', name: 'Estados Unidos' },
  ],
  knowsLanguage: ['es', 'en'],
  serviceType: ['Auditoría de negocio', 'Diseño web', 'Posicionamiento AEO', 'Consultoría de IA'],
  email: 'xtech.ai.development@gmail.com',
  telephone: '+1-605-500-3653',
  founder: { '@type': 'Person', name: 'Dastan Tamayo' },
  sameAs: [
    'https://www.instagram.com/dastan.xtech/',
    'https://www.linkedin.com/in/dastantech',
  ],
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
      <body>
        {children}
        <GlobalChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
