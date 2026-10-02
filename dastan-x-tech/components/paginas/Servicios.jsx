import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import BotonChat from '@/components/BotonChat';
import { ruta } from '@/lib/i18n';

// /servicios y /en/services: el diseño vive aquí y los textos en contenido/servicios.<lang>.js
export default function Servicios({ t, lang }) {
  return (
    <div className="theme-light">
      <SiteHeader tone="light" lang={lang} />

      <header style={{ padding: '6rem 5% 3rem', textAlign: 'center' }}>
        <span className="label-mono">{t.etiqueta}</span>
        <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3rem)', fontWeight: '700', color: 'var(--ink)', margin: '1rem auto', letterSpacing: '-0.025em', lineHeight: '1.1', maxWidth: '900px' }}>
          {t.titulo}
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--ink-2)', maxWidth: '650px', margin: '0 auto' }}>
          {t.subtitulo}
        </p>
      </header>

      <section className="card-grid" style={{ padding: '2rem 5% 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        {t.tarjetas.map((s, i) => (
          <a key={s.clave} href={ruta(s.clave, lang)} className="service-card service-card--light">
            <span className="label-mono">{String(i + 1).padStart(2, '0')}</span>
            <h2 className="card-title">{s.title}</h2>
            <p className="card-text">{s.tagline}</p>
            <span className="card-link">{t.verDetalle}</span>
          </a>
        ))}
      </section>

      {/* PACK COMPLETO: los tres servicios juntos. Precio y ahorro deben coincidir con PRECIOS de app/api/chat/route.js */}
      <section style={{ padding: '0 5% 4rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div className="pack-block">
          <div className="pack-block-text">
            <span className="label-mono">{t.pack.etiqueta}</span>
            <h2>{t.pack.titulo}</h2>
            <p>{t.pack.texto}</p>
          </div>
          <BotonChat mensaje={t.pack.mensajeChat}>{t.pack.boton}</BotonChat>
        </div>
      </section>

      {/* BAJO PEDIDO: extras en texto pequeño, sin tarjetas ni precios, para no quitar peso a los tres servicios.
          Se piden sueltos o se eligen dentro de la Membresía; deben coincidir con el chat (app/api/chat/route.js) y public/llms.txt */}
      <section className="extras" style={{ padding: '0 5% 6rem', maxWidth: '1100px', margin: '0 auto' }}>
        <span className="label-mono">{t.extras.etiqueta}</span>
        <h2>{t.extras.titulo}</h2>
        <ul className="extras-list">
          {t.extras.items.map((e) => (
            <li key={e.title}><span><strong>{e.title}:</strong> {e.text}</span></li>
          ))}
        </ul>
        <p className="extras-note">{t.extras.nota}</p>
        <BotonChat mensaje={t.extras.mensajeChat} className="btn btn-outline-light">{t.extras.boton}</BotonChat>
      </section>

      <SiteFooter tone="light" lang={lang} />
    </div>
  );
}
