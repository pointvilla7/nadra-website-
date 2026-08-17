import { MetadataRoute } from 'next';
import { ARTICLES } from '@/lib/data/articles';
import { CATEGORIES } from '@/lib/data/categories';
import { AUTHORS } from '@/lib/data/authors';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pakistaninfohub.com';

  const staticPages = [
    '',
    '/about',
    '/how-we-verify',
    '/editorial-team',
    '/tracker',
    '/contact',
    '/privacy',
    '/terms',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-08-17'),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.6,
  }));

  const categoryPages = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/${cat.slug}`,
    lastModified: new Date('2026-08-17'),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  const authorPages = Object.keys(AUTHORS).map((slug) => ({
    url: `${baseUrl}/authors/${slug}`,
    lastModified: new Date('2026-08-17'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const articlePages = Object.values(ARTICLES).map((art) => {
    const verifiedDate = art.lastVerified ? new Date(art.lastVerified) : new Date('2026-08-17');
    const safeDate = !isNaN(verifiedDate.getTime()) ? verifiedDate : new Date('2026-08-17');

    return {
      url: `${baseUrl}${art.fullPath}`,
      lastModified: safeDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    };
  });

  return [...staticPages, ...categoryPages, ...authorPages, ...articlePages];
}
