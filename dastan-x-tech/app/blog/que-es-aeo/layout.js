// Metadatos propios: sin este archivo el artículo heredaba el título y la descripción del home
export const metadata = {
  title: 'Qué es AEO, explicado con un ejemplo real | DASTAN X-TECH',
  description: 'Qué es el Answer Engine Optimization (AEO), por qué ya está pasando y qué tienen en común los negocios que la IA recomienda, con un ejemplo real de Gemini.',
  keywords: ['Qué es AEO', 'Answer Engine Optimization', 'Posicionamiento en IA', 'SEO para ChatGPT y Gemini'],
  alternates: {
    canonical: '/blog/que-es-aeo',
  },
  openGraph: {
    title: 'Qué es AEO, explicado con un ejemplo real',
    description: 'Qué es el Answer Engine Optimization, por qué ya está pasando y qué tienen en común los negocios que la IA recomienda.',
    url: 'https://dastanxtech.com/blog/que-es-aeo',
    siteName: 'DASTAN X-TECH',
    locale: 'es_US',
    type: 'article',
  },
};

export default function BlogPostLayout({ children }) {
  return children;
}
