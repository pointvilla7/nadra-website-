import { MetadataRoute } from 'next';
import { ARTICLES } from '@/lib/data/articles';
import { CATEGORIES } from '@/lib/data/categories';
import { AUTHORS } from '@/lib/data/authors';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pakistaninfohub.com';

  // Set of all article paths to guarantee no double-listing between static and dynamic articles
  const articlePathSet = new Set(Object.values(ARTICLES).map((art) => art.fullPath));

  // Static standalone pages, hubs, calculators, and board result pages that are NOT part of ARTICLES
  const rawStaticRoutes = [
    '',
    '/about',
    '/how-we-verify',
    '/editorial-team',
    '/tracker',
    '/education/9th-class-result-2026-lahore-board',
    '/education/9th-class-result-2026-faisalabad-board',
    '/education/9th-class-result-2026-rawalpindi-board',
    '/education/9th-class-result-2026-sargodha-board',
    '/education/9th-class-result-2026-gujranwala-board',
    '/education/9th-class-result-2026-multan-board',
    '/education/9th-class-result-2026-sahiwal-board',
    '/education/9th-class-result-2026-bahawalpur-board',
    '/education/9th-class-result-2026-federal-board',
    '/education/9th-class-result-2026-ajk-mirpur-board',
    '/education/9th-class-result-2026-peshawar-board',
    '/education/9th-class-result-2026-abbottabad-board',
    '/education/9th-class-result-2026-kohat-bannu-board',
    '/education/9th-class-result-2026-malakand-board',
    '/education/9th-class-result-2026-dikhan-board',
    '/education/9th-class-result-2026-sindh-board-general',
    '/education/9th-class-result-2026-hyderabad-board',
    '/education/9th-class-result-2026-sukkur-board',
    '/education/9th-class-result-2026-larkana-board',
    '/education/9th-class-result-2026-quetta-board',
    '/passport/urgent-passport-fee-and-time-in-pakistan-2026',
    '/traffic/driving-license-status-check-online-2026',
    '/traffic/international-driving-permit-pakistan-2026',
    '/traffic/vehicle-ownership-transfer-online-punjab-2026',
    '/traffic/mtmis-token-tax-check-online-punjab-karachi-islamabad-2026',
    '/property/government-employee-housing-schemes-pakistan-2026',
    '/property/property-tax-online-check-pay-2026',
    '/jobs/verified-govt-jobs-sources-avoid-scams-2026',
    '/jobs/fbr-jobs-syllabus-past-papers-test-prep-2026',
    '/traffic/punjab-excise-vehicle-verification-2026',
    '/traffic/sindh-excise-vehicle-verification-2026',
    '/traffic/islamabad-vehicle-verification-2026',
    '/legal/pakistan-court-case-status-check-online-2026',
    '/education/hec-degree-attestation-new-blockchain-system-2026',
    '/education/ibcc-matric-intermediate-attestation-guide-2026',
    '/welfare/pessi-sessi-vs-eobi-difference-registration-2026',
    '/welfare/benazir-taleemi-wazaif-check-online-registration-2026',
    '/overseas/overseas-pakistanis-voting-rights-current-status-2026',
    '/health/sehat-card-hospital-list-lahore-2026',
    '/tax/income-tax-on-salary-slabs-calculator-pakistan-2026',
    '/tax/fbr-active-taxpayer-atl-check-sim-block-2026',
    '/tax/fbr-pos-invoice-verification-prize-scheme-2026',
    '/tax/foreign-remittance-tax-pakistan-overseas-2026',
    '/education/pm-laptop-scheme-2026-eligibility-status-check',
    '/nadra/senior-citizen-card-pakistan-explained-2026',
    '/nadra/pta-sim-check-how-many-sims-on-cnic-2026',
    '/nadra/voter-registration-check-cnic-ecp-2026',
    '/traffic/arms-license-renewal-punjab-online-2026',
    '/legal/right-to-information-act-pakistan-how-to-file-2026',
    '/legal/consumer-court-complaint-how-to-file-pakistan-2026',
    '/legal/anti-encroachment-complaint-tribunal-pakistan-2026',
    '/legal/suthra-punjab-anti-littering-squad-fines-explained-2026',
    '/legal/tenant-police-verification-online-2026',
    '/legal/how-to-get-fir-copy-online-pakistan-2026',
    '/welfare/ehsaas-rashan-riayat-program-8123-2026',
    '/bills/fesco-bill-check-online-duplicate-2026',
    '/pakistan-post',
    '/finance',
    '/finance/roshan-digital-account-2026-eligibility-apply',
    '/offices/locator',
    '/alerts/subscribe',
    '/alerts/manage',
    '/contact',
    '/privacy',
    '/terms',
    '/disclaimer',
  ];

  // Strictly filter out any route that already exists in ARTICLES
  const staticPages = rawStaticRoutes
    .filter((route) => !articlePathSet.has(route))
    .map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date('2026-08-22'),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : (route.includes('/') ? 0.9 : 0.6),
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

  // Consolidate into a unique Map keyed by URL to ensure zero duplicate entries in sitemap.xml
  const sitemapMap = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const page of [...staticPages, ...categoryPages, ...authorPages, ...articlePages]) {
    if (!sitemapMap.has(page.url)) {
      sitemapMap.set(page.url, page);
    }
  }

  return Array.from(sitemapMap.values());
}
