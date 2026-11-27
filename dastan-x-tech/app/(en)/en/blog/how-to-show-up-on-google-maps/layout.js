import MigasJsonLd from '@/components/MigasJsonLd';
import { alternates } from '@/lib/i18n';
import { conImagenHeredada } from '@/lib/metadatos';

// English version of /blog/como-aparecer-en-google-maps. Title under 70 characters.
const metadata = {
  title: 'How to show up on Google Maps (for free) | DASTAN X-TECH',
  description: 'How to get your business on Google Maps for free: create and verify your Google Business Profile, what to fill in, how to get reviews and what to avoid.',
  alternates: alternates('blogGoogleMaps', 'en'),
  openGraph: {
    title: 'How to show up on Google Maps: a guide for local businesses',
    description: 'The 6 steps to get your business on Google Maps, for free.',
    url: 'https://dastanxtech.com/en/blog/how-to-show-up-on-google-maps',
    siteName: 'DASTAN X-TECH',
    locale: 'en_US',
    type: 'article',
  },
};
export const generateMetadata = conImagenHeredada(metadata);

export default function BlogPostLayout({ children }) {
  return (
    <>
      <MigasJsonLd lang="en" seccion="blog" ruta={metadata.alternates.canonical} titulo={metadata.title} />
      {children}
    </>
  );
}
