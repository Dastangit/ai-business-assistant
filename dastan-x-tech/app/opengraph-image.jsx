import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
export const alt = 'DASTAN X-TECH | Agencia de IA y Servicios Digitales';
export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #07050A 0%, #1C2624 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Logotipo asimétrico */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
          <div 
            style={{ 
              width: '80px', 
              height: '80px', 
              background: 'linear-gradient(135deg, #A855F7, #2DD4BF)', 
              borderRadius: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: '#07050A', 
              fontSize: '50px', 
              fontWeight: 'bold' 
            }}
          >
            X
          </div>
          <h2 style={{ fontSize: '40px', color: '#F5F4EF', fontWeight: 'bold', margin: 0, letterSpacing: '2px' }}>
            TECH
          </h2>
        </div>
        
        {/* Título Principal */}
        <h1 style={{ fontSize: '70px', color: '#F5F4EF', fontWeight: '900', lineHeight: 1.1, marginBottom: '20px', maxWidth: '900px' }}>
          Ecosistema Digital <span style={{ color: '#2DD4BF' }}>Corporativo</span>
        </h1>
        
        {/* Catálogo Estricto de Servicios */}
        <p style={{ fontSize: '30px', color: '#b0adc5', maxWidth: '900px', marginBottom: '50px', lineHeight: 1.4 }}>
          Diseño Web Profesional • Auditoría SEO • Posicionamiento AEO • Chat de IA Integrado
        </p>
        
        {/* Badges Inferiores */}
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ background: '#2DD4BF', color: '#07050A', padding: '15px 30px', borderRadius: '12px', fontSize: '24px', fontWeight: 'bold' }}>
            Agencia B2B
          </div>
          <div style={{ border: '2px solid #A855F7', color: '#E9D5FF', padding: '15px 30px', borderRadius: '12px', fontSize: '24px', fontWeight: 'bold' }}>
            Automatización 24/7
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}