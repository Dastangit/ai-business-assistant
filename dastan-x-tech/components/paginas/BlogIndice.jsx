import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { ruta } from '@/lib/i18n';

// Índice del blog (/blog y /en/blog): cada idioma lista sus propios artículos (contenido/blog.<lang>.js)
export default function BlogIndice({ t, lang }) {
  return (
    <div className="theme-light">
      <SiteHeader tone="light" lang={lang} />

      <header style={{ padding: '5rem 5% 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.6rem', fontWeight: '700', color: 'var(--ink)', letterSpacing: '-0.025em' }}>{t.titulo}</h1>
        <p style={{ color: 'var(--ink-2)', maxWidth: '550px', margin: '1rem auto 0' }}>
          {t.subtitulo}
        </p>
      </header>

      <section style={{ padding: '2rem 5% 6rem', maxWidth: '700px', margin: '0 auto' }}>
        {t.posts.map((post) => (
          <a
            key={post.clave}
            href={ruta(post.clave, lang)}
            style={{ display: 'block', padding: '2rem 0', borderTop: '1px solid var(--line-light)', textDecoration: 'none', color: 'inherit' }}
          >
            <p className="label-mono" style={{ marginBottom: '0.5rem' }}>{post.date}</p>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '0.6rem', color: 'var(--ink)', letterSpacing: '-0.01em' }}>{post.title}</h2>
            <p style={{ color: 'var(--ink-2)', lineHeight: '1.5', margin: 0 }}>{post.excerpt}</p>
          </a>
        ))}
      </section>

      <SiteFooter tone="light" lang={lang} />
    </div>
  );
}
