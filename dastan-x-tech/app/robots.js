export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/vip', '/api'],
      },
    ],
    sitemap: 'https://dastanxtech.com/sitemap.xml',
  };
}