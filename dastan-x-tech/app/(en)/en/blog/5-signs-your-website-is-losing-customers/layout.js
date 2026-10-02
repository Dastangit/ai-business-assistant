import { alternates } from '@/lib/i18n';

export const metadata = {
  title: '5 signs your website is losing you customers | DASTAN X-TECH',
  description: 'The 5 most common signs that make a visitor leave without booking or buying, with a real redesign that fixed all five.',
  keywords: ['Website not converting', 'Website redesign', 'Web design mistakes', 'Web design for small businesses'],
  alternates: alternates('blog5Senales', 'en'),
  openGraph: {
    title: '5 signs your website is losing you customers',
    description: 'The 5 most common signs that make a visitor leave without booking or buying, with a real redesign.',
    url: 'https://dastanxtech.com/en/blog/5-signs-your-website-is-losing-customers',
    siteName: 'DASTAN X-TECH',
    locale: 'en_US',
    type: 'article',
  },
};

export default function BlogPostLayout({ children }) {
  return children;
}
