import { alternates } from '@/lib/i18n';

export const metadata = {
  // Under 70 characters so it isn't cut off in search results
  title: 'We perfected our website with our AEO auditor | DASTAN X-TECH',
  description: 'We ran dastanxtech.com through our own AEO auditor: what it measures, what it found, what we fixed and how we went from 94 to 97 out of 100.',
  keywords: ['AEO audit', 'Answer Engine Optimization', 'AEO case study', 'AI search optimization'],
  alternates: alternates('blogAuditorAeo', 'en'),
};

export default function BlogPostLayout({ children }) {
  return children;
}
