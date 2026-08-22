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
    '/tax/fbr-active-taxpayer-status-helper-2026',
    '/property/punjab-land-record-fard-verifier-2026',
    '/hajj-umrah/hajj-application-eligibility-checker-2026',
    '/business/company-name-availability-checker-2026',
    '/certificates/police-character-certificate-online-apply-2026',
    '/certificates/police-character-certificate-tracking-status-2026',
    '/legal/succession-certificate-legal-heir-nadra-2026',
    '/nadra/cnic-new-rules-2026',
    '/passport/passport-new-rules-2026-cashless-epassport',
    '/bills/net-metering-net-billing-change-2026',
    '/traffic/challan-paid-but-showing-pending-2026',
    '/education/matric-40-percent-passing-marks-rule-2026',
    '/jobs/fpsc-ppsc-age-relaxation-quota-rules-2026',
    '/welfare/pmt-score-explained-bisp-eligibility-2026',
    '/loans/how-to-spot-fake-loan-scheme-scams-2026',
    '/overseas/nicop-mandatory-entry-rules-2026',
    '/marriage-family/nikah-nama-vs-marriage-certificate-mrc-2026',
    '/health/sehat-card-active-status-by-province-2026',
    '/disaster-alerts/ndma-flood-earthquake-sms-alert-setup-2026',
    '/traffic/driving-license-online-apply-renewal-dlims-2026',
    '/business/pseb-freelancer-registration-tax-benefits-2026',
    '/property/e-stamping-challan-32a-online-guide-2026',
    '/disaster-alerts/pakistan-emergency-helpline-numbers-directory-2026',
    '/jobs/beoe-protector-registration-overseas-employment-2026',
    '/nadra/lost-stolen-cnic-replacement-2026',
    '/loans/kamyab-jawan-pm-youth-loan-current-status-2026',
    '/certificates/death-certificate-registration-process-2026',
    '/education/bise-lahore-result-2026',
    '/business/secp-company-registration-online-2026',
    '/bills/sngpl-bill-check-online',
    '/bills/kelectric-duplicate-bill',
    '/contact',
    '/privacy',
    '/terms',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-08-22'),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : (route.includes('/nadra/') || route.includes('/passport/') || route.includes('/education/') || route.includes('/bills/') || route.includes('/tax/') || route.includes('/traffic/') || route.includes('/property/') || route.includes('/jobs/') || route.includes('/hajj-umrah/') || route.includes('/business/') || route.includes('/certificates/') || route.includes('/legal/') || route.includes('/overseas/') || route.includes('/marriage-family/') || route.includes('/welfare/') || route.includes('/loans/') || route.includes('/health/') || route.includes('/disaster-alerts/') || route.includes('/alerts/') ? 0.9 : 0.6),
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
