'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Article, ARTICLES } from '@/lib/data/articles';
import { CATEGORIES } from '@/lib/data/categories';
import { useLanguage } from '@/lib/context/LanguageContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { GeoTrustBadge } from '@/components/GeoTrustBadge';
import { FeeTable } from '@/components/FeeTable';
import { FAQAccordion } from '@/components/FAQAccordion';
import { SchemaInjector } from '@/components/SchemaInjector';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { BillLookupWidget } from '@/components/BillLookupWidget';
import { BoardResultWidget } from '@/components/BoardResultWidget';
import { LoanEligibilityWidget } from '@/components/LoanEligibilityWidget';
import { BispCheckWidget } from '@/components/BispCheckWidget';
import { TrafficLookupWidget } from '@/components/TrafficLookupWidget';
import { PassportFeeCalculator } from '@/components/PassportFeeCalculator';
import { StepByStepWizard } from '@/components/StepByStepWizard';
import { ArticleFeedbackWidget } from '@/components/ArticleFeedbackWidget';
import { AlertSubscriptionModal } from '@/components/AlertSubscriptionModal';
import { PdfChecklistGenerator } from '@/components/PdfChecklistGenerator';
import dynamic from 'next/dynamic';
import { PrivacyTrustBanner } from '@/components/PrivacyTrustBanner';
import { TextToSpeechButton } from '@/components/TextToSpeechButton';
import { ArticleFeaturedImage } from '@/components/ArticleFeaturedImage';
import { EligibilityChecklistWidget } from '@/components/EligibilityChecklistWidget';

const NadraTrackingWidget = dynamic(
  () => import('@/components/NadraTrackingWidget').then((mod) => mod.NadraTrackingWidget),
  { ssr: false }
);

const PassportTrackingWidget = dynamic(
  () => import('@/components/PassportTrackingWidget').then((mod) => mod.PassportTrackingWidget),
  { ssr: false }
);
import { ArrowRight, ShieldCheck, BookOpen, Sparkles, Share2, PhoneCall, Bell, Copy, Check, Eye } from 'lucide-react';

interface ArticleLayoutProps {
  article: Article;
}

export const ArticleLayout: React.FC<ArticleLayoutProps> = ({ article }) => {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'standard' | 'wizard'>('standard');
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const category = CATEGORIES.find((c) => c.id === article.categoryId) || CATEGORIES[0];

  const breadcrumbs = [
    { nameEn: category.nameEn, nameUr: category.nameUr, url: `/${category.slug}` },
    { nameEn: article.titleEn, nameUr: article.titleUr },
  ];

  const isBillPage = article.categoryId === 'bills';
  const isLoansPage = article.categoryId === 'loans';
  const isWelfarePage = article.categoryId === 'welfare';
  const isTrafficPage = article.categoryId === 'traffic';
  const isPassportFeePage = article.slug === 'fee-2026';
  const isEducationBoardPage = article.slug === 'bise-lahore-result-2026' || article.slug === 'bise-result-check-2026';
  const isNadraTrackingPage = article.slug === 'tracking-id';
  const isPassportTrackingPage = article.slug === 'tracking-status';

  // Determine appropriate helpline based on category
  const helplineNumber = 
    article.categoryId === 'nadra' ? '1777' :
    article.categoryId === 'welfare' ? '8171' :
    article.categoryId === 'passport' ? '0800-00000' :
    article.categoryId === 'bills' ? '118' : '051-111-111-786';

  const handleShareWhatsApp = () => {
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      const text = encodeURIComponent(`*${t(article.titleEn, article.titleUr)}*\nRead verified guide on Pakistan Info Hub:\n${url}`);
      window.open(`https://wa.me/?text=${text}`, '_blank');
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <article className="space-y-8 animate-fadeIn">
      {/* Schema Injection */}
      <SchemaInjector
        article={article}
        breadcrumbs={breadcrumbs}
        faqs={article.faqs}
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Article Main Hero Header */}
      <header className="space-y-4 pb-6 border-b border-doc-brass/30">
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={`/${category.slug}`}
            className={`text-[10px] font-mono font-bold px-3 py-1 rounded ${category.badgeBg} ${category.badgeText} hover:opacity-80 transition uppercase tracking-wider`}
          >
            {t(category.nameEn, category.nameUr)}
          </Link>
          <span className="text-xs text-slate-400 font-semibold">•</span>
          <span className="text-xs text-doc-seal dark:text-red-400 font-bold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            {t('Official Information Directory 2026', 'آفیشل معلومات پورٹل 2026', 'Official Info Directory 2026')}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-doc-ink dark:text-white leading-tight tracking-tight">
          {t(article.titleEn, article.titleUr)}
        </h1>

        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl font-medium">
          {t(article.metaDescriptionEn, article.metaDescriptionUr)}
        </p>

        {/* GEO Trust & EEAT Verification Bar */}
        <GeoTrustBadge
          lastVerified={article.lastVerified}
          officialSource={article.officialSource}
          author={article.author}
        />
      </header>

      {/* One-Tap High-Intent Action Bar */}
      <div className="flex flex-wrap items-center gap-2 bg-doc-paper dark:bg-doc-dark-card border border-doc-brass/40 rounded-xl p-3 shadow-sm">
        <button
          onClick={handleShareWhatsApp}
          className="flex items-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition shadow-sm"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>{t('Share on WhatsApp', 'واٹس ایپ پر شیئر کریں', 'WhatsApp Share')}</span>
        </button>

        <button
          onClick={handleCopyLink}
          className="flex items-center gap-1.5 px-3 py-2 bg-white dark:bg-doc-dark-base border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-lg hover:border-doc-brass transition"
        >
          {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-doc-brass" />}
          <span>{copiedLink ? t('Link Copied!', 'لنک کاپی ہو گیا!') : t('Copy Link', 'لنک کاپی کریں', 'Copy Link')}</span>
        </button>

        <button
          onClick={() => setIsAlertModalOpen(true)}
          className="flex items-center gap-1.5 px-3 py-2 bg-doc-seal text-white text-xs font-bold rounded-lg hover:bg-doc-seal/90 transition shadow-sm"
        >
          <Bell className="w-3.5 h-3.5" />
          <span>{t('Get Update Alerts', 'نوٹیفکیشن آن کریں', 'Get Alerts')}</span>
        </button>

        <PdfChecklistGenerator
          title={t(article.titleEn, article.titleUr)}
          category={category.nameEn}
          items={
            article.steps
              ? article.steps.map((st) => t(st.titleEn, st.titleUr))
              : ['Original B-Form / CNIC', 'Father/Mother CNIC Copy', 'Recent Passport Photographs', 'Bank Fee Slip']
          }
        />

        <TextToSpeechButton
          title={t(article.titleEn, article.titleUr)}
          textToRead={`${t(article.directAnswerEn, article.directAnswerUr)}. ${t(article.contentEn, article.contentUr)}`}
        />

        <a
          href={`tel:${helplineNumber.replace(/[^0-9]/g, '')}`}
          className="flex items-center gap-1.5 px-3 py-2 bg-doc-ink text-white text-xs font-mono font-bold rounded-lg hover:bg-doc-ink/90 transition ml-auto"
        >
          <PhoneCall className="w-3.5 h-3.5 text-doc-brass" />
          <span>{t(`Helpline: ${helplineNumber}`, `ہیلپ لائن: ${helplineNumber}`)}</span>
        </a>
      </div>

      {/* View Mode Toggle Bar (Full Article vs Interactive Step Wizard) */}
      {article.steps && article.steps.length > 0 && (
        <div className="flex items-center justify-between bg-doc-ink/5 dark:bg-slate-800/80 border border-doc-brass/30 p-2.5 rounded-xl">
          <div className="flex items-center gap-2 text-xs font-serif font-bold text-doc-ink dark:text-slate-200">
            <Eye className="w-4 h-4 text-doc-seal" />
            <span>{t('Choose View Format:', 'پڑھنے کا انداز منتخب کریں:')}</span>
          </div>
          <div className="flex items-center gap-1 bg-white dark:bg-doc-dark-base border border-slate-300 dark:border-slate-700 rounded-lg p-1">
            <button
              onClick={() => setViewMode('standard')}
              className={`px-3 py-1 text-xs font-bold rounded-md transition ${
                viewMode === 'standard'
                  ? 'bg-doc-ink text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-doc-ink'
              }`}
            >
              📄 {t('Full Article', 'مکمل گائیڈ')}
            </button>
            <button
              onClick={() => setViewMode('wizard')}
              className={`px-3 py-1 text-xs font-bold rounded-md transition ${
                viewMode === 'wizard'
                  ? 'bg-doc-seal text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-doc-seal'
              }`}
            >
              🧙‍♂️ {t('Step Wizard', 'مرحلہ وار وزرڈ')}
            </button>
          </div>
        </div>
      )}

      {/* Custom Original Vector Topic Illustration / Graphic */}
      <ArticleFeaturedImage
        categoryId={article.categoryId}
        slug={article.slug}
        titleEn={t(article.titleEn, article.titleUr)}
      />

      {/* AEO Featured Snippet Direct Answer Box (Summary Box at top) */}
      <DirectAnswerBox
        answerEn={article.directAnswerEn}
        answerUr={article.directAnswerUr}
        topicTitleEn={article.titleEn}
        topicTitleUr={article.titleUr}
      />

      {/* Tasteful Top Ad Zone */}
      <AdPlacementZone slotId="top-article" format="horizontal" />

      {/* Interactive Portal Tools Mounts */}
      {isPassportFeePage && <PassportFeeCalculator />}

      {isBillPage && (
        <BillLookupWidget
          providerId={
            article.slug.includes('lesco')
              ? 'lesco'
              : article.slug.includes('electric')
              ? 'kelectric'
              : article.slug.includes('gas')
              ? 'suigas'
              : 'wapda'
          }
        />
      )}

      {isWelfarePage && (
        <>
          <BispCheckWidget />
          <EligibilityChecklistWidget programId="bisp-8171" />
        </>
      )}

      {isLoansPage && (
        <>
          <LoanEligibilityWidget
            schemeNameEn={article.titleEn}
            schemeNameUr={article.titleUr}
          />
          <EligibilityChecklistWidget programId="apni-chhat-loan" />
        </>
      )}

      {article.slug === 'hec-scholarship-pakistan' && (
        <EligibilityChecklistWidget programId="hec-scholarships" />
      )}

      {isTrafficPage && <TrafficLookupWidget />}

      {isEducationBoardPage && <BoardResultWidget />}

      {isNadraTrackingPage && <NadraTrackingWidget />}

      {isPassportTrackingPage && <PassportTrackingWidget />}

      {/* Fee Table Section if available */}
      {article.feeStructure && article.feeStructure.length > 0 && (
        <FeeTable feeItems={article.feeStructure} />
      )}

      {/* Interactive Step-by-Step Wizard View */}
      {viewMode === 'wizard' && article.steps && article.steps.length > 0 && (
        <StepByStepWizard steps={article.steps} articleTitle={t(article.titleEn, article.titleUr)} />
      )}

      {/* Standard Step-by-Step Instructions View */}
      {viewMode === 'standard' && article.steps && article.steps.length > 0 && (
        <section className="my-10 space-y-6">
          <div className="flex items-center gap-2 border-b border-doc-brass/30 pb-3">
            <div className="p-2 rounded-xl bg-doc-paper dark:bg-slate-800 text-doc-seal dark:text-red-400 border border-doc-brass/30">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-serif font-extrabold text-doc-ink dark:text-white">
              {t('Step-by-Step Application Process', 'مرحلہ وار طریقہ کار')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {article.steps.map((st) => (
              <div
                key={st.stepNumber}
                className="doc-card rounded-2xl p-5 border border-doc-brass/30 space-y-2 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-doc-ink text-doc-brass font-mono font-extrabold text-sm flex items-center justify-center shadow">
                    {st.stepNumber}
                  </span>
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-400">
                    Step {st.stepNumber} of {article.steps?.length}
                  </span>
                </div>
                <h3 className="text-base font-serif font-bold text-doc-ink dark:text-white">
                  {t(st.titleEn, st.titleUr)}
                </h3>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {t(st.detailEn, st.detailUr)}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Main Body Content Text */}
      <section className="prose dark:prose-invert max-w-none space-y-4 my-8 text-slate-800 dark:text-slate-200 leading-relaxed text-sm md:text-base font-sans">
        <div className="doc-card rounded-2xl p-6 md:p-8 border border-doc-brass/30 space-y-4">
          <h2 className="text-xl font-serif font-bold text-doc-ink dark:text-white border-l-4 border-doc-seal pl-3">
            {t('Detailed Guide & Guidelines', 'تفصیلی معلومات اور ہدایات')}
          </h2>
          <div className="whitespace-pre-line">
            {t(article.contentEn, article.contentUr)}
          </div>
        </div>
      </section>

      {/* Privacy & Safety Guarantee */}
      <PrivacyTrustBanner />

      {/* FAQ Accordion Section */}
      <FAQAccordion faqs={article.faqs} />

      {/* Interactive Was This Helpful Feedback Widget */}
      <ArticleFeedbackWidget articleSlug={article.slug} />

      {/* Mid-Article Ad Placement */}
      <AdPlacementZone slotId="bottom-article" format="horizontal" />

      {/* Related Articles Navigation */}
      {article.relatedSlugs && article.relatedSlugs.length > 0 && (
        <section className="my-10 pt-8 border-t border-doc-brass/30 space-y-4">
          <h3 className="text-lg font-serif font-bold text-doc-ink dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-doc-seal" />
            <span>{t('Related Verified Records', 'متعلقہ اہم معلومات')}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {article.relatedSlugs.map((relPath) => {
              const cleanSlug = relPath.split('/').pop() || '';
              const relArt = ARTICLES[cleanSlug];
              if (!relArt) return null;

              return (
                <Link
                  key={relArt.slug}
                  href={relArt.fullPath}
                  className="p-4 rounded-xl doc-card border border-doc-brass/30 hover:border-doc-seal transition group space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-doc-seal dark:text-red-400 uppercase">
                      {relArt.categoryId}
                    </span>
                    <h4 className="text-xs font-serif font-bold text-doc-ink dark:text-white group-hover:text-doc-seal transition line-clamp-2 mt-1">
                      {t(relArt.titleEn, relArt.titleUr)}
                    </h4>
                  </div>
                  <div className="flex items-center text-[11px] font-mono font-bold text-slate-500 group-hover:text-doc-seal transition pt-2">
                    <span>{t('READ FILE', 'مطالعہ کریں')}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Real-time Alert Subscription Modal Mount */}
      <AlertSubscriptionModal
        pageTitle={t(article.titleEn, article.titleUr)}
        categoryName={category.nameEn}
        isOpen={isAlertModalOpen}
        onClose={() => setIsAlertModalOpen(false)}
      />
    </article>
  );
};
