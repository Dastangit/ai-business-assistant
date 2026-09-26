export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/vip', '/api', '/admin'],
      },
    ],
    sitemap: 'https://dastanxtech.com/sitemap.xml',
  };
}