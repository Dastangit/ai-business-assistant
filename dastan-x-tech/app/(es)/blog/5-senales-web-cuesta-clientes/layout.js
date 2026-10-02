// Metadatos propios: sin este archivo el artículo heredaba el título y la descripción del home
export const metadata = {
  title: '5 señales de que tu web te está costando clientes | DASTAN X-TECH',
  description: 'Las 5 señales más comunes que hacen que un visitante se vaya sin reservar ni comprar, con un ejemplo real de rediseño que resolvió las cinco.',
  keywords: ['Web que no convierte', 'Rediseño web', 'Errores de diseño web', 'Diseño web para pymes'],
  alternates: {
    canonical: '/blog/5-senales-web-cuesta-clientes',
  },
  openGraph: {
    title: '5 señales de que tu web te está costando clientes',
    description: 'Las 5 señales más comunes que hacen que un visitante se vaya sin reservar ni comprar, con un ejemplo real de rediseño.',
    url: 'https://dastanxtech.com/blog/5-senales-web-cuesta-clientes',
    siteName: 'DASTAN X-TECH',
    locale: 'es_US',
    type: 'article',
  },
};

export default function BlogPostLayout({ children }) {
  return children;
}
