export const metadata = {
  title: 'Blog | DASTAN X-TECH',
  description: 'Artículos sobre SEO, AEO, diseño web y auditoría de negocio para pequeños negocios y pymes.',
};

const posts = [
  {
    href: '/blog/5-senales-web-cuesta-clientes',
    title: '5 señales de que tu web te está costando clientes',
    excerpt: 'Las 5 señales más comunes que hacen que un visitante se vaya sin reservar ni comprar, con un ejemplo real de rediseño que resolvió las cinco.',
    date: '23 de septiembre de 2026',
  },
  {
    href: '/blog/auditamos-nuestra-propia-web',
    title: 'Auditamos nuestra propia web con nuestro método de Auditoría 360°',
    excerpt: 'Le aplicamos nuestra propia Auditoría de Negocio 360° a dastanxtech.com. Esto fue lo que encontramos, lo que ya corregimos y lo que sigue pendiente.',
    date: '22 de septiembre de 2026',
  },
];

export default function BlogIndexPage() {
  return (
    <div style={{ backgroundColor: '#F5F4EF', color: '#07050A', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <nav style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(28, 38, 36, 0.1)' }}>
        <div style={{ fontWeight: '900', fontSize: '1.2rem', color: '#1C2624' }}>
          <span style={{ color: '#A855F7' }}>X</span> TECH
        </div>
        <a href="/" style={{ color: '#1C2624', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>
          ← Volver al inicio
        </a>
      </nav>

      <header style={{ padding: '5rem 5% 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.6rem', fontWeight: '900', color: '#1C2624' }}>Blog</h1>
        <p style={{ color: '#333', maxWidth: '550px', margin: '1rem auto 0' }}>
          Notas honestas sobre SEO, AEO, diseño web y auditoría de negocio.
        </p>
      </header>

      <section style={{ padding: '2rem 5% 6rem', maxWidth: '700px', margin: '0 auto' }}>
        {posts.map((post) => (
          <a
            key={post.href}
            href={post.href}
            style={{ display: 'block', padding: '2rem 0', borderTop: '1px solid rgba(28, 38, 36, 0.1)', textDecoration: 'none', color: 'inherit' }}
          >
            <p style={{ color: '#2DD4BF', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{post.date}</p>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '0.6rem', color: '#1C2624' }}>{post.title}</h2>
            <p style={{ color: '#555', lineHeight: '1.5', margin: 0 }}>{post.excerpt}</p>
          </a>
        ))}
      </section>
    </div>
  );
}
