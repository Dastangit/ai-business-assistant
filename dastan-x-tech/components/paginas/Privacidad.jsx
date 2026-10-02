import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { REVISIONES } from '@/lib/revisiones';
import { ruta } from '@/lib/i18n';

// Aviso legal y de privacidad (/privacidad y /en/privacy): el diseño vive aquí y el texto en contenido/privacidad.<lang>.js
const h2 = { fontSize: '1.4rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' };
const p = { lineHeight: '1.8', marginBottom: '1rem' };
const lista = { lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '1.25rem' };

export default function Privacidad({ t, lang }) {
  const revision = REVISIONES[ruta('privacidad', lang)];
  const fecha = new Intl.DateTimeFormat(lang === 'es' ? 'es' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(revision));
  return (
    <div className="theme-light">
      <SiteHeader tone="light" lang={lang} />

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 5% 2rem' }}>
        <p className="label-mono" style={{ marginBottom: '1rem' }}>
          {t.actualizacion} <time dateTime={revision}>{fecha}</time>
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          {t.titulo}
        </h1>
        <p style={{ ...p, fontSize: '1.1rem' }}>
          {t.intro}
        </p>

        {t.secciones.map((s) => (
          <section key={s.titulo}>
            <h2 style={h2}>{s.titulo}</h2>
            {s.bloques.map((b, i) =>
              b.tipo === 'ul' ? (
                <ul key={i} style={lista}>
                  {b.contenido.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              ) : (
                <p key={i} style={p}>{b.contenido}</p>
              )
            )}
          </section>
        ))}
      </article>

      <SiteFooter tone="light" lang={lang} />
    </div>
  );
}
