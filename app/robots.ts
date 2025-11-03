import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: 'https://beautysanctuarybymarin.com/sitemap.xml',
    host: 'https://beautysanctuarybymarin.com',
  };
}
