'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Link2, Sparkles, Compass } from 'lucide-react';
import { Article, ARTICLES } from '@/lib/data/articles';
import { useLanguage } from '@/lib/context/LanguageContext';
import { VerifiedBadge } from '@/components/VerifiedBadge';

interface CrossCategoryRelatedProps {
  currentArticle: Article;
  className?: string;
}

// Intelligent topical bridge map across categories
const TOPICAL_BRIDGES: Record<string, string[]> = {
  nadra: [
    '/passport/fee-calculator',
    '/tax/fbr-filer-status-check-cnic',
    '/welfare/bisp-eligibility-check-by-cnic',
    '/nadra/family-registration-certificate',
  ],
  passport: [
    '/nadra/cnic-kaise-banaye',
    '/nadra/nicop-fee-calculator',
    '/overseas/opf-scholarship-children-spouses-overseas-pakistanis-2026',
    '/traffic/driving-license-online-apply-renewal-dlims-2026',
  ],
  welfare: [
    '/nadra/b-form-frc-status-check',
    '/welfare/sehat-card-eligibility-checker-2026',
    '/loans/emi-calculator-2026',
    '/welfare/pser-survey-status-checker-2026',
  ],
  loans: [
    '/tax/withholding-tax-rates-filers-non-filers',
    '/bills/utility-bill-checker-2026',
    '/property/punjab-land-record-fard-verifier-2026',
    '/tax/fbr-active-taxpayer-status-helper-2026',
  ],
  bills: [
    '/tax/fbr-active-taxpayer-status-helper-2026',
    '/traffic/m-tag-motorway-registration-one-network',
    '/finance/pakistan-iban-number-check-validator-2026',
    '/bills/utility-bill-checker-2026',
  ],
  jobs: [
    '/education/hec-scholarship-status-2026',
    '/nadra/cnic-kaise-banaye',
    '/certificates/domicile-certificate-apply-online',
    '/tax/how-to-become-tax-filer-pakistan-2026',
  ],
  education: [
    '/welfare/laptop-scheme-registration',
    '/jobs/fpsc-online-apply-procedure',
    '/certificates/domicile-certificate-apply-online',
    '/nadra/b-form-frc-status-check',
  ],
  traffic: [
    '/nadra/cnic-kaise-banaye',
    '/tax/fbr-active-taxpayer-status-helper-2026',
    '/bills/utility-bill-checker-2026',
    '/traffic/token-tax-calculator-2026',
  ],
  tax: [
    '/tax/withholding-tax-rates-filers-non-filers',
    '/property/property-tax-calculator-pakistan-2026',
    '/business/secp-company-registration-online-2026',
    '/tax/income-tax-calculator-salaried-2026',
  ],
  property: [
    '/tax/fbr-active-taxpayer-status-helper-2026',
    '/property/punjab-land-record-fard-verifier-2026',
    '/property/e-stamping-challan-32a-online-guide-2026',
    '/certificates/domicile-certificate-apply-online',
  ],
  overseas: [
    '/passport/overseas-pakistani-passport-renewal',
    '/nadra/nicop-fee-calculator',
    '/mobile-pta/tax-calculator-2026',
    '/finance/pakistan-iban-number-check-validator-2026',
  ],
  'family-registration': [
    '/nadra/family-registration-certificate',
    '/nadra/b-form-frc-status-check',
    '/certificates/birth-certificate-union-council-online',
    '/passport/child-minor-passport-guide',
  ],
  business: [
    '/tax/ntn-registration-online-pakistan',
    '/finance/pakistan-iban-number-check-validator-2026',
    '/property/e-stamping-challan-32a-online-guide-2026',
    '/tax/fbr-active-taxpayer-status-helper-2026',
  ],
  certificates: [
    '/nadra/cnic-kaise-banaye',
    '/education/hec-scholarship-status-2026',
    '/certificates/police-character-certificate-online-apply-2026',
    '/family-registration/marriage-certificate-union-council-apply',
  ],
  'hajj-umrah': [
    '/passport/fee-calculator',
    '/nadra/cnic-kaise-banaye',
    '/welfare/sehat-card-eligibility-checker-2026',
    '/hajj-umrah/hajj-balloting-result-check-online',
  ],
  health: [
    '/welfare/bisp-eligibility-check-by-cnic',
    '/nadra/family-registration-certificate',
    '/welfare/sehat-card-eligibility-checker-2026',
    '/welfare/pser-survey-status-checker-2026',
  ],
  legal: [
    '/certificates/police-character-certificate-online-apply-2026',
    '/property/punjab-land-record-fard-verifier-2026',
    '/nadra/b-form-frc-status-check',
    '/tax/fbr-active-taxpayer-status-helper-2026',
  ],
  alerts: [
    '/welfare/ramzan-relief-package',
    '/welfare/sehat-card-eligibility-checker-2026',
    '/bills/utility-bill-checker-2026',
    '/traffic/m-tag-motorway-registration-one-network',
  ],
  'mobile-pta': [
    '/mobile-pta/tax-calculator-2026',
    '/tax/fbr-active-taxpayer-status-helper-2026',
    '/overseas/opf-scholarship-children-spouses-overseas-pakistanis-2026',
    '/nadra/cnic-kaise-banaye',
  ],
  'pakistan-post': [
    '/passport/tracking-status',
    '/nadra/cnic-kaise-banaye',
    '/bills/utility-bill-checker-2026',
    '/jobs/roll-number-slip-checker-2026',
  ],
  finance: [
    '/tax/income-tax-calculator-salaried-2026',
    '/loans/emi-calculator-2026',
    '/finance/pakistan-iban-number-check-validator-2026',
    '/property/property-tax-calculator-pakistan-2026',
  ],
};

export const CrossCategoryRelated: React.FC<CrossCategoryRelatedProps> = ({
  currentArticle,
  className = '',
}) => {
  const { t } = useLanguage();

  // Pick cross-category suggestions based on category bridge mapping
  const bridgePaths = TOPICAL_BRIDGES[currentArticle.categoryId] || [];
  
  // Resolve article objects from paths
  let suggestedArticles: Article[] = bridgePaths
    .map((path) => {
      const slug = path.split('/').pop() || '';
      return ARTICLES[slug];
    })
    .filter(Boolean)
    .filter((art) => art.slug !== currentArticle.slug);

  // Automatically backfill from the same category to guarantee 5-8 high-relevance links
  if (suggestedArticles.length < 6) {
    const sameCategory = Object.values(ARTICLES)
      .filter((art) => art.categoryId === currentArticle.categoryId && art.slug !== currentArticle.slug);
    suggestedArticles = [...suggestedArticles, ...sameCategory];
  }

  // Filter unique items and slice to 5-8 (7 is the sweet spot)
  suggestedArticles = suggestedArticles
    .filter((art, index, self) => self.findIndex((a) => a.slug === art.slug) === index)
    .slice(0, 7);

  if (suggestedArticles.length === 0) return null;

  return (
    <section className={`my-10 rounded-2xl doc-card border border-doc-brass/40 p-6 sm:p-8 bg-white dark:bg-doc-dark-card space-y-6 ${className}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-doc-brass/20 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-doc-ink text-doc-paper dark:bg-slate-900 border border-doc-brass/30">
            <Compass className="w-5 h-5 text-doc-brass" />
          </div>
          <div>
            <h3 className="font-serif font-extrabold text-lg text-doc-ink dark:text-white">
              {t('Prerequisite & Related Civic Services', 'لازمی متعلقہ اور ضروری سرکاری سہولیات')}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              {t('Civic documents and portals citizens frequently require alongside this process', 'اس کارروائی کے ساتھ دیگر اہم دستاویزات اور خدمات جن کی ضرورت پڑ سکتی ہے')}
            </p>
          </div>
        </div>
        <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded bg-doc-brass/15 text-doc-brass-dark dark:text-doc-brass-light border border-doc-brass/30 uppercase">
          {t('Cross-Directory Bridge', 'مربوط سروسز')}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {suggestedArticles.map((art) => (
          <Link
            key={art.slug}
            href={art.fullPath}
            className="p-4 rounded-xl border border-doc-brass/20 hover:border-doc-brass/60 hover:bg-doc-paper/60 dark:hover:bg-slate-900/60 transition flex flex-col justify-between group space-y-2 shadow-2xs"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {art.categoryId}
              </span>
              <VerifiedBadge variant="card" />
            </div>

            <h4 className="font-serif font-bold text-sm text-doc-ink dark:text-white group-hover:text-doc-seal dark:group-hover:text-red-400 transition line-clamp-2">
              {t(art.titleEn, art.titleUr)}
            </h4>

            <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
              {t(art.directAnswerEn, art.directAnswerUr)}
            </p>

            <div className="pt-2 flex items-center justify-between text-xs font-mono font-bold text-doc-seal dark:text-red-400">
              <span>{t('View Service Details', 'رہنمائی دیکھیں')}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
