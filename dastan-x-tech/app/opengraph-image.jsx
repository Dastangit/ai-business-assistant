import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
export const alt = 'DASTAN X-TECH | Consultoría de IA, diseño web y posicionamiento para pymes';
export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };

// Mismo dibujo que public/logo.svg y app/icon.png
const LOGO_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><defs><linearGradient id="x" x1="140" y1="0" x2="372" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#BA45FF"/><stop offset=".5" stop-color="#8B7FE0"/><stop offset="1" stop-color="#34DCAB"/></linearGradient><radialGradient id="bg" cx="50%" cy="38%" r="70%"><stop offset="0" stop-color="#17111F"/><stop offset="1" stop-color="#0B0810"/></radialGradient><linearGradient id="ring" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#A855F7" stop-opacity=".55"/><stop offset=".5" stop-color="#ffffff" stop-opacity=".06"/><stop offset="1" stop-color="#2DD4BF" stop-opacity=".5"/></linearGradient></defs><circle cx="256" cy="256" r="252" fill="url(#bg)"/><circle cx="256" cy="256" r="249" fill="none" stroke="url(#ring)" stroke-width="6"/><path fill="url(#x)" d="M146 138h70l40 70 40-70h70l-75 118 75 118h-70l-40-70-40 70h-70l75-118z"/></svg>';
const LOGO_DATA_URI = `data:image/svg+xml;base64,${btoa(LOGO_SVG)}`;

// Imagen al compartir el enlace (WhatsApp, LinkedIn…): mismo logo y mismo mensaje que el sitio
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#07050A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
          border: '2px solid #231D2E',
        }}
      >
        {/* Logo: el mismo orbe circular del ícono de pestaña + un solo nombre */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_DATA_URI} width={64} height={64} alt="" />
          <div style={{ fontSize: '32px', color: '#F5F4EF', fontWeight: 600, letterSpacing: '2px' }}>
            DASTAN X-TECH
          </div>
        </div>
        
        {/* Propuesta de valor */}
        <div style={{ display: 'flex', fontSize: '68px', color: '#F5F4EF', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-2px', maxWidth: '1000px' }}>
          Deja de perder clientes por una web que no está a la altura.
        </div>
        
        {/* Servicios */}
        <div style={{ display: 'flex', gap: '40px', fontSize: '30px', color: '#B7B3C7' }}>
          <div style={{ display: 'flex' }}>Diseño web</div>
          <div style={{ display: 'flex', color: '#2DD4BF' }}>·</div>
          <div style={{ display: 'flex' }}>Auditoría 360°</div>
          <div style={{ display: 'flex', color: '#2DD4BF' }}>·</div>
          <div style={{ display: 'flex' }}>Posicionamiento AEO</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
