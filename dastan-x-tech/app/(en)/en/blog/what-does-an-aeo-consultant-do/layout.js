import MigasJsonLd from '@/components/MigasJsonLd';
import { alternates } from '@/lib/i18n';

export const metadata = {
  // Under 70 characters so it isn't cut off in search results
  title: 'What does an AEO consultant do? A real example | DASTAN X-TECH',
  description: 'What an AEO consultant checks so ChatGPT, Gemini and Perplexity recommend your business, using our own website: level 5 on Cloudflare’s Is It Agent Ready.',
  alternates: alternates('blogConsultorAeo', 'en'),
};

export default function BlogPostLayout({ children }) {
  return (
    <>
      <MigasJsonLd lang="en" seccion="blog" ruta={metadata.alternates.canonical} titulo={metadata.title} />
      {children}
    </>
  );
}
