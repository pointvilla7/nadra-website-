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
    '/passport/fee-structure',
    '/passport/urgent-fast-track-passport',
    '/welfare/bisp-payment-check',
    '/loans/apni-chhat-apna-ghar-scheme',
  ],
  passport: [
    '/nadra/cnic-kaise-banaye',
    '/nadra/nicop-apply-online',
    '/nadra/family-registration-certificate',
    '/traffic/international-driving-permit',
  ],
  welfare: [
    '/nadra/b-form-kaise-banaye',
    '/nadra/cnic-name-address-modification',
    '/welfare/taleemi-wazaif',
    '/loans/kisan-card-interest-free-loan',
  ],
  loans: [
    '/nadra/family-registration-certificate',
    '/bills/iesco-bill-check-online',
    '/traffic/vehicle-verification-online',
    '/loans/punjab-e-bike-scheme-online',
  ],
  bills: [
    '/loans/solar-panel-financing-scheme',
    '/traffic/m-tag-recharge-online',
    '/nadra/cnic-name-address-modification',
    '/bills/lesco-duplicate-bill-online',
  ],
  jobs: [
    '/education/hec-degree-attestation-online',
    '/nadra/cnic-kaise-banaye',
    '/traffic/driving-license-online',
    '/jobs/fpsc-online-apply-guide',
  ],
  education: [
    '/welfare/taleemi-wazaif',
    '/welfare/laptop-scheme-registration',
    '/jobs/ppsc-challan-form-download',
    '/nadra/b-form-kaise-banaye',
  ],
  traffic: [
    '/nadra/cnic-kaise-banaye',
    '/loans/punjab-e-bike-scheme-online',
    '/bills/iesco-bill-check-online',
    '/traffic/vehicle-token-tax-online',
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
  const suggestedArticles: Article[] = bridgePaths
    .map((path) => {
      const slug = path.split('/').pop() || '';
      return ARTICLES[slug];
    })
    .filter(Boolean)
    .filter((art) => art.slug !== currentArticle.slug)
    .slice(0, 4);

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
