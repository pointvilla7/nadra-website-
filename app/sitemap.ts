import { MetadataRoute } from 'next';
import { ARTICLES } from '@/lib/data/articles';
import { CATEGORIES } from '@/lib/data/categories';

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
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.6,
  }));

  const categoryPages = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  const articlePages = Object.values(ARTICLES).map((art) => ({
    url: `${baseUrl}${art.fullPath}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...articlePages];
}
