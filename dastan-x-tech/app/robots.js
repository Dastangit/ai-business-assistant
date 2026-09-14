export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/vip'],
      },
    ],
    sitemap: 'https://dastanxtech.com/sitemap.xml',
  };
}
