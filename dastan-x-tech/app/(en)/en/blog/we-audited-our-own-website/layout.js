import { alternates } from '@/lib/i18n';

export const metadata = {
  // Under 70 characters so it isn't cut off in search results
  title: 'We audited our own website: what we found | DASTAN X-TECH',
  description: 'We applied our own Digital Business Audit to dastanxtech.com. Here’s what we found, what we’ve already fixed and what’s still pending.',
  keywords: ['Business audit', 'SEO case study', 'AEO', 'DASTAN X-TECH business audit'],
  alternates: alternates('blogAuditamos', 'en'),
};

export default function BlogPostLayout({ children }) {
  return children;
}
