import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/_next/static/css/',
        '/_next/static/chunks/',
      ],
      disallow: [
        '/api/',
        '/_next/static/media/',
        '/manifest.json',
        '/site.webmanifest',
        '/opengraph-image',
      ],
    },
    sitemap: 'https://www.pakistaninfohub.com/sitemap.xml',
  };
}
