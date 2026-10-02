import './globals.css';
import Link from 'next/link';
import { Geist } from 'next/font/google';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

export const metadata = {
  title: 'Página no encontrada · Page not found | DASTAN X-TECH',
  robots: { index: false },
};

// 404 para cualquier URL que no exista, en los dos idiomas (no hay un layout raíz común)
export default function GlobalNotFound() {
  return (
    <html lang="es" className={geistSans.variable}>
      <body style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh', display: 'grid', placeItems: 'center', textAlign: 'center', padding: '24px' }}>
        <main>
          <p className="label-mono" style={{ marginBottom: '1rem' }}>404</p>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Esta página no existe</h1>
          <p lang="en" style={{ color: 'var(--text-2)', marginBottom: '2rem' }}>This page doesn&apos;t exist</p>
          <p style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
            <Link href="/" className="text-link">Ir al inicio</Link>
            <Link href="/en" lang="en" className="text-link">Go to the English site</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
