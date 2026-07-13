import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Never block /_next/ — it serves the CSS, JS, and the image optimizer
        // that every next/image goes through. Blocking it hides the site's
        // styling and all images from Googlebot.
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: 'https://beautysanctuarybymarin.com/sitemap.xml',
    host: 'https://beautysanctuarybymarin.com',
  };
}
