'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, BookOpen, Compass, ShieldCheck } from 'lucide-react';
import { Article, ARTICLES } from '@/lib/data/articles';
import { useLanguage } from '@/lib/context/LanguageContext';
import { VerifiedBadge } from '@/components/VerifiedBadge';

export interface RelatedArticlesProps {
  currentSlug?: string;
  category?: string;
  explicitSlugs?: string[];
  currentArticle?: Article;
  titleEn?: string;
  titleUr?: string;
  subtitleEn?: string;
  subtitleUr?: string;
  className?: string;
}

// Sub-topic clusters for smart recommendation mapping
const SUBTOPIC_CLUSTERS: Record<string, string[]> = {
  // Police & Verification & Legal Records
  police_legal: [
    'police-character-certificate-tracking-status-2026',
    'police-character-certificate-online-apply-2026',
    'how-to-check-fir-status-online',
    'online-fir-registration-punjab-police',
    'how-to-get-fir-copy-online-pakistan-2026',
    'punjab-khidmat-markaz-police-services',
    'tenant-police-verification-online-2026',
  ],

  // NADRA, CNIC & Identity
  nadra_identity: [
    'cnic-kaise-banaye',
    'cnic-vs-nicop-vs-poc-comparison',
    'cnic-new-rules-2026',
    'lost-stolen-cnic-replacement-2026',
    'b-form-frc-status-check',
    'nadra-card-fee',
    'tracking-id',
    'nicop-fee-calculator',
    'senior-citizen-card-pakistan-explained-2026',
    'pta-sim-check-how-many-sims-on-cnic-2026',
    'voter-registration-check-cnic-ecp-2026',
  ],

  // Passport & Travel
  passport_travel: [
    'fee-2026',
    'fee-calculator',
    'tracking-status',
    'online-apply',
    'passport-new-rules-2026-cashless-epassport',
    'lost-passport-abroad-reissuance-process-2026',
    'renewal-documents',
  ],

  // Traffic & Vehicles
  traffic_vehicles: [
    'kpk-excise-vehicle-verification',
    'token-tax-calculator-2026',
    'vehicle-verification-online-2026',
    'driving-license-online-apply-renewal-dlims-2026',
    'challan-paid-but-showing-pending-2026',
    'e-challan-check-by-cnic',
    'islamabad-traffic-police-echallan',
    'm-tag-motorway-registration-one-network',
  ],

  // Utilities & Bills
  utilities_bills: [
    'wssp-peshawar-water-bill-guide',
    'utility-bill-checker-2026',
    'wapda-complaint-status-tracker-2026',
    'pesco-bill-check-online',
    'lesco-bill-check-online',
    'sngpl-bill-check-online',
    'net-metering-net-billing-change-2026',
    'smart-meter-pakistan-price-how-it-works-2026',
  ],

  // Tax & Filer Status
  tax_finance: [
    'fbr-filer-status-check-cnic',
    'fbr-active-taxpayer-status-helper-2026',
    'how-to-become-tax-filer-pakistan-2026',
    'how-to-file-income-tax-return-salaried-iris-2026',
    'income-tax-calculator-salaried-2026',
    'withholding-tax-rates-filers-non-filers',
    'pakistan-iban-number-check-validator-2026',
  ],

  // Health & Sehat Card
  health_welfare: [
    'sehat-card-eligibility-check-by-cnic',
    'sehat-card-eligibility-checker-2026',
    'sehat-card-active-status-by-province-2026',
    'sehat-card-hospital-list-lahore-2026',
    'bisp-kafaalat-vs-nashonuma-vs-taleemi-wazaif-explained-2026',
    'pser-survey-status-checker-2026',
    'eobi-pension-check-cnic-2026',
  ],

  // Jobs, Overseas & Public Service
  jobs_careers: [
    'verified-govt-jobs-sources-avoid-scams-2026',
    'beoe-protector-registration-overseas-employment-2026',
    'beoe-protector-fee-calculator-2026',
    'fpsc-ppsc-age-relaxation-quota-rules-2026',
    'roll-number-slip-checker-2026',
    'nts-result-scorecard-checker-2026',
    'fpsc-online-apply-procedure',
  ],

  // Loans & Fraud Prevention
  loans_scams: [
    'how-to-spot-fake-loan-scheme-scams-2026',
    'kamyab-jawan-pm-youth-loan-current-status-2026',
    'emi-calculator-2026',
    'loan-application-status-tracker-2026',
  ],
};

function getArticlesFromSlugs(slugs: string[]): Article[] {
  return slugs
    .map((slugOrPath) => {
      const cleanSlug = slugOrPath.replace(/^\//, '').split('/').pop() || '';
      return ARTICLES[cleanSlug];
    })
    .filter((a): a is Article => Boolean(a));
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  currentSlug,
  category,
  explicitSlugs,
  currentArticle,
  titleEn = 'Recommended Next Steps & Related Guides',
  titleUr = 'متعلقہ اہم معلومات اور ضروری گائیڈز',
  subtitleEn = 'Verified official procedures citizens frequently need next',
  subtitleUr = 'اس کارروائی کے بعد مطلوبہ مصدقہ سرکاری رہنمائی',
  className = '',
}) => {
  const { t } = useLanguage();

  const effectiveSlug = currentArticle?.slug || currentSlug || '';
  const effectiveCategory = currentArticle?.categoryId || category || '';

  let candidates: Article[] = [];

  // Priority 1: Explicit Slugs passed by page
  if (explicitSlugs && explicitSlugs.length > 0) {
    candidates = getArticlesFromSlugs(explicitSlugs);
  }

  // Priority 2: Article's own defined relatedSlugs
  if (candidates.length < 3 && currentArticle?.relatedSlugs && currentArticle.relatedSlugs.length > 0) {
    const fromArticle = getArticlesFromSlugs(currentArticle.relatedSlugs).filter(
      (a) => a.slug !== effectiveSlug
    );
    candidates = [...candidates, ...fromArticle];
  }

  // Priority 3: Sub-topic cluster matching
  if (candidates.length < 3 && effectiveSlug) {
    for (const clusterKey of Object.keys(SUBTOPIC_CLUSTERS)) {
      const cluster = SUBTOPIC_CLUSTERS[clusterKey];
      if (cluster.includes(effectiveSlug)) {
        const fromCluster = getArticlesFromSlugs(cluster).filter((a) => a.slug !== effectiveSlug);
        candidates = [...candidates, ...fromCluster];
        break;
      }
    }
  }

  // Priority 4: Sibling category articles
  if (candidates.length < 3 && effectiveCategory) {
    const fromCategory = Object.values(ARTICLES).filter(
      (a) => a.categoryId === effectiveCategory && a.slug !== effectiveSlug
    );
    candidates = [...candidates, ...fromCategory];
  }

  // Priority 5: Fallback general high-value articles
  if (candidates.length < 3) {
    const generalHighTraffic = [
      ARTICLES['cnic-kaise-banaye'],
      ARTICLES['fee-2026'],
      ARTICLES['fbr-filer-status-check-cnic'],
      ARTICLES['utility-bill-checker-2026'],
      ARTICLES['verified-govt-jobs-sources-avoid-scams-2026'],
      ARTICLES['police-character-certificate-tracking-status-2026'],
    ].filter((a): a is Article => Boolean(a) && a.slug !== effectiveSlug);
    candidates = [...candidates, ...generalHighTraffic];
  }

  // Deduplicate and pick exact 3
  const finalArticles = candidates
    .filter((art, idx, self) => self.findIndex((a) => a.slug === art.slug) === idx)
    .filter((art) => art.slug !== effectiveSlug)
    .slice(0, 3);

  if (finalArticles.length === 0) return null;

  return (
    <nav
      aria-label={t('Related Guides Navigation', 'متعلقہ اہم رہنمائی')}
      className={`my-8 sm:my-10 pt-6 sm:pt-8 border-t-2 border-doc-brass/30 space-y-4 sm:space-y-6 ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-doc-seal/15 text-doc-seal dark:text-red-300 border border-doc-brass/30">
              <Compass className="w-4 h-4 text-doc-seal" />
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-doc-ink dark:text-white tracking-tight">
              {t(titleEn, titleUr)}
            </h3>
          </div>
          {subtitleEn && (
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans">
              {t(subtitleEn, subtitleUr)}
            </p>
          )}
        </div>

        <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-doc-brass/15 text-amber-900 dark:text-amber-300 border border-doc-brass/40 self-start sm:self-auto">
          {t('Next Recommended Reads', 'اگلے مفید مراحل')}
        </span>
      </div>

      {/* 3-Column Responsive Card Grid (stacked on mobile, 44px min touch targets) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {finalArticles.map((art, idx) => (
          <Link
            key={art.slug}
            href={art.fullPath}
            className="p-5 rounded-2xl doc-card border-2 border-doc-brass/30 hover:border-doc-seal dark:hover:border-amber-400 bg-white dark:bg-doc-dark-card hover:bg-doc-paper/60 dark:hover:bg-slate-900/90 transition-all duration-200 flex flex-col justify-between group space-y-3 shadow-xs hover:shadow-md active:scale-[0.99] min-h-[160px]"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {art.categoryId} • STEP {idx + 1}
                </span>
                <VerifiedBadge variant="card" textEn="VERIFIED" textUr="مصدقہ" />
              </div>

              <h4 className="font-serif font-bold text-sm sm:text-base text-doc-ink dark:text-white group-hover:text-doc-seal dark:group-hover:text-amber-300 transition line-clamp-2 leading-snug">
                {t(art.titleEn, art.titleUr)}
              </h4>

              <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed font-sans">
                {t(art.directAnswerEn || art.metaDescriptionEn, art.directAnswerUr || art.metaDescriptionUr)}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono font-bold text-doc-seal dark:text-amber-300 group-hover:underline">
              <span>{t('Read Guide', 'مکمل گائیڈ دیکھیں')}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};
