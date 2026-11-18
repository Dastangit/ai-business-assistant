import MigasJsonLd from '@/components/MigasJsonLd';
import { alternates } from '@/lib/i18n';

export const metadata = {
  // Under 70 characters so it isn't cut off in search results
  title: 'We audited our own website: what we found | DASTAN X-TECH',
  description: 'We applied our own Digital Business Audit to dastanxtech.com. Here’s what we found, what we’ve already fixed and what’s still pending.',
  alternates: alternates('blogAuditamos', 'en'),
};

export default function BlogPostLayout({ children }) {
  return (
    <>
      <MigasJsonLd lang="en" seccion="blog" ruta={metadata.alternates.canonical} titulo={metadata.title} />
      {children}
    </>
  );
}
