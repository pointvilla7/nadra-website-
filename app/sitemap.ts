import { MetadataRoute } from 'next';
import { ARTICLES } from '@/lib/data/articles';
import { CATEGORIES } from '@/lib/data/categories';
import { AUTHORS } from '@/lib/data/authors';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pakistaninfohub.com';

  const staticPages = [
    '',
    '/about',
    '/how-we-verify',
    '/editorial-team',
    '/tracker',
    '/nadra/nicop-fee-calculator',
    '/nadra/b-form-frc-status-check',
    '/passport/fee-calculator',
    '/passport/tracking-status',
    '/education/bise-result-checker-2026',
    '/education/university-merit-list-checker-2026',
    '/education/hec-scholarship-status-2026',
    '/bills/utility-bill-checker-2026',
    '/bills/wapda-complaint-status-tracker-2026',
    '/traffic/token-tax-calculator-2026',
    '/traffic/vehicle-verification-online-2026',
    '/loans/emi-calculator-2026',
    '/loans/loan-application-status-tracker-2026',
    '/welfare/sehat-card-eligibility-checker-2026',
    '/welfare/pser-survey-status-checker-2026',
    '/jobs/roll-number-slip-checker-2026',
    '/jobs/nts-result-scorecard-checker-2026',
    '/bills/sngpl-bill-check-online',
    '/bills/kelectric-duplicate-bill',
    '/contact',
    '/privacy',
    '/terms',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-08-20'),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : (route.includes('/nadra/') || route.includes('/passport/') || route.includes('/education/') || route.includes('/bills/') ? 0.9 : 0.6),
  }));

  const categoryPages = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/${cat.slug}`,
    lastModified: new Date('2026-08-20'),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  const authorPages = Object.keys(AUTHORS).map((slug) => ({
    url: `${baseUrl}/authors/${slug}`,
    lastModified: new Date('2026-08-20'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const articlePages = Object.values(ARTICLES).map((art) => {
    const verifiedDate = art.lastVerified ? new Date(art.lastVerified) : new Date('2026-08-20');
    const safeDate = !isNaN(verifiedDate.getTime()) ? verifiedDate : new Date('2026-08-20');

    return {
      url: `${baseUrl}${art.fullPath}`,
      lastModified: safeDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    };
  });

  return [...staticPages, ...categoryPages, ...authorPages, ...articlePages];
}
