import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Blog | DASTAN X-TECH',
  description: 'Artículos sobre SEO, AEO, diseño web y auditoría de negocio para pequeños negocios y pymes.',
  alternates: {
    canonical: '/blog',
  },
};

const posts = [
  {
    href: '/blog/que-es-aeo',
    title: 'Qué es AEO, explicado con un ejemplo real',
    excerpt: 'Qué es el Answer Engine Optimization, por qué ya está pasando y qué tienen en común los negocios que la IA recomienda, con un ejemplo real de Gemini.',
    date: '23 de septiembre de 2026',
  },
  {
    href: '/blog/5-senales-web-cuesta-clientes',
    title: '5 señales de que tu web te está costando clientes',
    excerpt: 'Las 5 señales más comunes que hacen que un visitante se vaya sin reservar ni comprar, con un ejemplo real de rediseño que resolvió las cinco.',
    date: '23 de septiembre de 2026',
  },
  {
    href: '/blog/auditamos-nuestra-propia-web',
    title: 'Auditamos nuestra propia web con nuestra Auditoría Completa de Negocio',
    excerpt: 'Le aplicamos nuestra propia Auditoría Completa de Negocio a dastanxtech.com. Esto fue lo que encontramos, lo que ya corregimos y lo que sigue pendiente.',
    date: '22 de septiembre de 2026',
  },
];

export default function BlogIndexPage() {
  return (
    <div className="theme-light">
      <SiteHeader tone="light" />

      <header style={{ padding: '5rem 5% 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.6rem', fontWeight: '700', color: 'var(--ink)', letterSpacing: '-0.025em' }}>Blog</h1>
        <p style={{ color: 'var(--ink-2)', maxWidth: '550px', margin: '1rem auto 0' }}>
          Notas honestas sobre SEO, AEO, diseño web y auditoría de negocio.
        </p>
      </header>

      <section style={{ padding: '2rem 5% 6rem', maxWidth: '700px', margin: '0 auto' }}>
        {posts.map((post) => (
          <a
            key={post.href}
            href={post.href}
            style={{ display: 'block', padding: '2rem 0', borderTop: '1px solid var(--line-light)', textDecoration: 'none', color: 'inherit' }}
          >
            <p className="label-mono" style={{ marginBottom: '0.5rem' }}>{post.date}</p>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '0.6rem', color: 'var(--ink)', letterSpacing: '-0.01em' }}>{post.title}</h2>
            <p style={{ color: 'var(--ink-2)', lineHeight: '1.5', margin: 0 }}>{post.excerpt}</p>
          </a>
        ))}
      </section>

      <SiteFooter tone="light" />
    </div>
  );
}
