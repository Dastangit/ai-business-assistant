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
  openGraph: {
    title: 'DASTAN X-TECH | Ecosistema Digital Corporativo',
    description: 'Transformamos negocios y Pymes con arquitecturas web de alto impacto, SEO local y agentes de Inteligencia Artificial.',
    url: 'https://dastanxtech.com',
    siteName: 'DASTAN X-TECH',
    locale: 'es_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
