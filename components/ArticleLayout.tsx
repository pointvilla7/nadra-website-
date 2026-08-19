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
import { UtilityBillChecker } from '@/components/UtilityBillChecker';
import { WAPDAComplaintTracker } from '@/components/WAPDAComplaintTracker';
import { BoardResultWidget } from '@/components/BoardResultWidget';
import { LoanEligibilityWidget } from '@/components/LoanEligibilityWidget';
import { BispCheckWidget } from '@/components/BispCheckWidget';
import { TrafficLookupWidget } from '@/components/TrafficLookupWidget';
import { PassportFeeCalculator } from '@/components/PassportFeeCalculator';
import { NicopFeeCalculator } from '@/components/NicopFeeCalculator';
import { BFormFrcStatusChecker } from '@/components/BFormFrcStatusChecker';
import { StepByStepWizard } from '@/components/StepByStepWizard';
import { ArticleFeedbackWidget } from '@/components/ArticleFeedbackWidget';
import { AlertSubscriptionModal } from '@/components/AlertSubscriptionModal';
import { PdfChecklistGenerator } from '@/components/PdfChecklistGenerator';
import dynamic from 'next/dynamic';
import { PrivacyTrustBanner } from '@/components/PrivacyTrustBanner';
import { TextToSpeechButton } from '@/components/TextToSpeechButton';
import { ArticleFeaturedImage } from '@/components/ArticleFeaturedImage';
import { DocumentSampleMockup, DocumentType } from '@/components/DocumentSampleMockup';
import { ProcessFlowDiagram } from '@/components/ProcessFlowDiagram';
import { ComparisonInfographic } from '@/components/ComparisonInfographic';
import { EligibilityChecklistWidget } from '@/components/EligibilityChecklistWidget';
import { MarkdownContent } from '@/components/MarkdownContent';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { AuthorBio } from '@/components/AuthorBio';
import { CrossCategoryRelated } from '@/components/CrossCategoryRelated';
import { getAuthorForCategory } from '@/lib/data/authors';

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
  const isNicopPage = article.slug === 'nicop-apply-online';
  const isBFormPage = article.slug === 'b-form-kaise-banaye' || article.slug === 'family-registration-certificate';

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

  // Detect if article qualifies for a generic document specimen mockup
  const getDocumentMockupType = (): DocumentType | null => {
    const s = article.slug.toLowerCase();
    if (s.includes('cnic') || s.includes('nicop') || s.includes('b-form') || s.includes('poc-card') || s.includes('frc')) return 'cnic';
    if (s.includes('passport')) return 'passport';
    if (s.includes('nikah') || s.includes('marriage') || s.includes('divorce') || s.includes('single-status')) return 'nikahnama';
    if (s.includes('fard') || s.includes('intiqal') || s.includes('mutation') || s.includes('patwari')) return 'fard';
    if (s.includes('estamp') || s.includes('stamp-duty') || s.includes('challan-32a')) return 'estamp';
    if (s.includes('sehat-card')) return 'sehatcard';
    if (s.includes('domicile') || s.includes('prc')) return 'domicile';
    if (s.includes('ntn') || s.includes('tax-filer') || s.includes('income-tax') || s.includes('withholding-tax')) return 'ntn';
    return null;
  };
  const docType = getDocumentMockupType();

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
            className={`text-[11px] font-mono font-bold px-3 py-1 rounded border border-doc-brass/30 ${category.badgeBg} ${category.badgeText} hover:opacity-80 transition uppercase tracking-wider`}
          >
            {t(category.nameEn, category.nameUr)}
          </Link>
          <span className="text-xs text-slate-400 font-semibold">•</span>
          <VerifiedBadge variant="header" textEn="OFFICIAL VERIFIED RECORD 2026" textUr="مصدقہ ریکارڈ 2026" />
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

      {/* 1. AEO Featured Snippet Direct Answer Box (Always 1st Visible Content above the fold) */}
      <DirectAnswerBox
        answerEn={article.directAnswerEn}
        answerUr={article.directAnswerUr}
        topicTitleEn={article.titleEn}
        topicTitleUr={article.titleUr}
      />

      {/* 2. Custom Original Vector Topic Illustration / Graphic */}
      <ArticleFeaturedImage
        categoryId={article.categoryId}
        slug={article.slug}
        titleEn={t(article.titleEn, article.titleUr)}
      />

      {/* 3. Labeled Document Specimen Mockup (if page references official document) */}
      {docType && (
        <DocumentSampleMockup
          documentType={docType}
          captionEn={`Official ${docType.toUpperCase()} format reference under Government of Pakistan regulations.`}
          captionUr={`حکومت پاکستان کے قواعد کے تحت تصدیق شدہ سرکاری نمونہ۔`}
        />
      )}

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

      {/* Tasteful Top Ad Zone */}
      <AdPlacementZone slotId="top-article" format="horizontal" />

      {/* Interactive Portal Tools Mounts */}
      {isPassportFeePage && <PassportFeeCalculator />}

      {isBillPage && (
        article.slug.includes('wapda-bill-complaint') ? (
          <WAPDAComplaintTracker />
        ) : article.slug.includes('hazeco') ||
          article.slug.includes('gb-electric') ||
          article.slug.includes('wssp-peshawar') ||
          article.slug.includes('complaint-status-tracker') ? (
          /* Guide/Complaint page only, no portal exists */
          null
        ) : (
          <UtilityBillChecker
            initialProvider={
              article.slug.includes('lesco')
                ? 'lesco'
                : article.slug.includes('iesco')
                ? 'iesco'
                : article.slug.includes('fesco')
                ? 'fesco'
                : article.slug.includes('mepco')
                ? 'mepco'
                : article.slug.includes('gepco')
                ? 'gepco'
                : article.slug.includes('hesco')
                ? 'hesco'
                : article.slug.includes('sepco')
                ? 'sepco'
                : article.slug.includes('pesco')
                ? 'pesco'
                : article.slug.includes('qesco')
                ? 'qesco'
                : article.slug.includes('tesco')
                ? 'tesco'
                : article.slug.includes('ajk-electric')
                ? 'ajkelectric'
                : article.slug.includes('electric')
                ? 'kelectric'
                : article.slug.includes('ssgc')
                ? 'ssgc'
                : article.slug.includes('sngpl') || article.slug.includes('gas')
                ? 'sngpl'
                : article.slug.includes('wasa-lahore')
                ? 'wasal'
                : article.slug.includes('wasa-faisalabad')
                ? 'wasaf'
                : article.slug.includes('wasa-rawalpindi')
                ? 'wasar'
                : article.slug.includes('wasa-multan')
                ? 'wasam'
                : article.slug.includes('wasa-gujranwala')
                ? 'wasag'
                : article.slug.includes('wasa-sahiwal')
                ? 'wasas'
                : article.slug.includes('kwsc')
                ? 'kwsc'
                : 'lesco'
            }
          />
        )
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

      {isNicopPage && (
        <div className="my-8">
          <NicopFeeCalculator />
        </div>
      )}

      {isBFormPage && (
        <div className="my-8">
          <BFormFrcStatusChecker />
        </div>
      )}

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

          {/* Process Flow Diagram */}
          <ProcessFlowDiagram categorySlug={article.categoryId} />

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

      {/* Comparison Infographic for Comparative Guides */}
      {article.slug === 'lesco-vs-fesco-bill-comparison' && (
        <ComparisonInfographic
          titleEn="LESCO vs FESCO: Electricity Distribution Comparison 2026"
          titleUr="لیسکو بمقابلہ فیسکو بجلی ڈسٹری بیوشن موازنہ 2026"
          nameAEn="LESCO (Lahore Electric)"
          nameAUr="لیسکو (لاہور ریجن)"
          nameBEn="FESCO (Faisalabad Electric)"
          nameBUr="فیسکو (فیصل آباد ریجن)"
          rows={[
            {
              featureEn: 'Coverage Districts',
              featureUr: 'زیر انتظام اضلاع',
              itemAEn: 'Lahore, Kasur, Okara, Sheikhupura, Nankana',
              itemAUr: 'لاہور، قصور، اوکاڑہ، شیخوپورہ، ننکانہ',
              itemBEn: 'Faisalabad, Jhang, Toba Tek Singh, Chiniot, Sargodha',
              itemBUr: 'فیصل آباد، جھنگ، ٹوبہ ٹیک سنگھ، چنیوٹ، سرگودھا'
            },
            {
              featureEn: 'Reference Number',
              featureUr: 'ریفرنس نمبر فارمیٹ',
              itemAEn: '14 Digits + Batch Code (U/R)',
              itemAUr: '14 ہندسے مع بیچ کوڈ',
              itemBEn: '14 Digits + Batch Code (U/R)',
              itemBUr: '14 ہندسے مع بیچ کوڈ'
            },
            {
              featureEn: 'Tariff Rate Slabs',
              featureUr: 'یونٹ ریٹ سلیب',
              itemAEn: 'Standard NEPRA Uniform Tariff',
              itemAUr: 'نیپرا یکساں ریٹ',
              itemBEn: 'Standard NEPRA Uniform Tariff',
              itemBUr: 'نیپرا یکساں ریٹ'
            },
            {
              featureEn: 'Helpline & Complaints',
              featureUr: 'ہیلپ لائن و شکایات',
              itemAEn: '118 / 042-99204814',
              itemAUr: '118 / 042-99204814',
              itemBEn: '118 / 041-9220184',
              itemBUr: '118 / 041-9220184'
            }
          ]}
        />
      )}

      {article.slug === 'cnic-vs-nicop-vs-poc-comparison' && (
        <ComparisonInfographic
          titleEn="CNIC vs NICOP vs POC: Identity Card Comparison 2026"
          titleUr="شناختی کارڈ بمقابلہ نائیکوپ بمقابلہ پی او سی موازنہ"
          nameAEn="CNIC / Smart Card"
          nameAUr="قومی شناختی کارڈ (CNIC)"
          nameBEn="NICOP (Overseas Card)"
          nameBUr="نائیکوپ (اوورسیز کارڈ)"
          rows={[
            {
              featureEn: 'Target Citizens',
              featureUr: 'اہل شہری',
              itemAEn: 'Resident Pakistani Citizens (18+)',
              itemAUr: 'پاکستان میں مقیم شہری',
              itemBEn: 'Overseas Pakistanis & Dual Citizens',
              itemBUr: 'اوورسیز اور دوہری شہریت والے'
            },
            {
              featureEn: 'Visa-Free Pakistan Entry',
              featureUr: 'بغیر ویزا پاکستان آمد',
              itemAEn: 'Domestic ID (Requires Passport)',
              itemAUr: 'ملکی کارڈ (سفر پر پاسپورٹ درکار)',
              itemBEn: '100% Visa-Free Entry with Foreign Passport',
              itemBUr: 'غیر ملکی پاسپورٹ پر بغیر ویزا انٹری'
            },
            {
              featureEn: 'Official Fee',
              featureUr: 'سرکاری فیس',
              itemAEn: 'PKR 750 (Smart Normal)',
              itemAUr: '750 روپے',
              itemBEn: '$39 USD (Zone A) / $20 USD (Zone B)',
              itemBUr: '39 ڈالر (زون اے) / 20 ڈالر (زون بی)'
            },
            {
              featureEn: 'Validity Period',
              featureUr: 'میعاد',
              itemAEn: '10 Years / Lifetime (60+)',
              itemAUr: '10 سال یا تاحیات',
              itemBEn: '10 Years Renewable',
              itemBUr: '10 سال'
            }
          ]}
        />
      )}

      {article.slug === 'registry-vs-intiqal-difference' && (
        <ComparisonInfographic
          titleEn="Registry vs Intiqal: Property Legal Rights Comparison 2026"
          titleUr="رجسٹری بمقابلہ انتقال: ملکیتی حقوق کا قانونی موازنہ"
          nameAEn="Registry (Sale Deed / بیع نامہ)"
          nameAUr="رجسٹری (بیع نامہ)"
          nameBEn="Intiqal (Mutation / انتقال)"
          nameBUr="انتقال (میوٹیشن)"
          rows={[
            {
              featureEn: 'Governing Authority',
              featureUr: 'متعلقہ ادارہ',
              itemAEn: 'Sub-Registrar (Registration Act 1908)',
              itemAUr: 'سب رجسٹرار (رجسٹریشن ایکٹ)',
              itemBEn: 'Revenue Dept / PLRA (Land Revenue Act)',
              itemBUr: 'اراضی ریکارڈ سنٹر / پٹوار'
            },
            {
              featureEn: 'Legal Significance',
              featureUr: 'قانونی حیثیت',
              itemAEn: 'Registered Contractual Deed between Parties',
              itemAUr: 'فریقین کا تصدیق شدہ معاہدہ بیع',
              itemBEn: 'Government Fiscal Ownership Record Entry',
              itemBUr: 'سرکاری جمع بندی میں نام کی تبدیلی'
            },
            {
              featureEn: 'Court Evidentiary Value',
              featureUr: 'عدالتی ثبوت کی حیثیت',
              itemAEn: 'Strong Primary Legal Evidence of Title',
              itemAUr: 'ملکیت کا بنیادی اور مضبوط ثبوت',
              itemBEn: 'Rebuttable Fiscal Entry (Requires Valid Deed)',
              itemBUr: 'انتظامی اندراج (اصل بیع نامہ ضروری)'
            }
          ]}
        />
      )}

      {article.slug === 'withholding-tax-rates-filers-non-filers' && (
        <ComparisonInfographic
          titleEn="Withholding Tax Rates: Active Filer vs Non-Filer Slabs 2026"
          titleUr="ود ہولڈنگ ٹیکس سلیب: فائلر بمقابلہ نان فائلر تقابل 2026"
          nameAEn="Active Tax Filer (ATL)"
          nameAUr="ایکٹو ٹیکس فائلر"
          nameBEn="Non-Filer / Late Filer"
          nameBUr="نان فائلر"
          rows={[
            {
              featureEn: 'Bank Cash Withdrawal (>50K/Day)',
              featureUr: 'بینک کیش ودڈرال (50 ہزار سے زائد)',
              itemAEn: '0% Exemption (Zero Deduction)',
              itemAUr: '0% (کوئی کٹوتی نہیں)',
              itemBEn: '0.9% Advance Tax (Sec 231AB)',
              itemBUr: '0.9% ایڈوانس ٹیکس'
            },
            {
              featureEn: 'Property Purchase (Sec 236K)',
              featureUr: 'جائیداد خریداری پر ایڈوانس ٹیکس',
              itemAEn: '3% Standard Rate',
              itemAUr: '3% بنیادی ریٹ',
              itemBEn: '12% to 15% Surcharge Rate',
              itemBUr: '12% سے 15% بھاری ٹیکس'
            },
            {
              featureEn: 'Motor Vehicle Registration',
              featureUr: 'گاڑی کی رجسٹریشن ٹیکس',
              itemAEn: 'Standard Engine CC Base Rate',
              itemAUr: 'معیاری سی سی ریٹ',
              itemBEn: '100% to 200% Punitive Surcharge',
              itemBUr: 'ڈبل یا ٹرپل ٹیکس'
            },
            {
              featureEn: 'Bank Profit & Dividends',
              featureUr: 'بینک منافع و ڈیویڈنڈ',
              itemAEn: '15% Final Withholding',
              itemAUr: '15% فائنل ٹیکس',
              itemBEn: '30% Punitive Withholding Rate',
              itemBUr: '30% کٹوتی'
            }
          ]}
        />
      )}

      {/* Main Body Content Text with Premium Typography */}
      <section className="my-8">
        <div className="doc-card rounded-2xl p-6 sm:p-10 border border-doc-brass/40 space-y-6">
          <div className="flex items-center justify-between border-b border-doc-brass/30 pb-4">
            <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-doc-ink dark:text-white border-l-4 border-doc-seal pl-3.5 tracking-tight">
              {t('Detailed Guide & Verified Procedures', 'تفصیلی معلومات اور ہدایات')}
            </h2>
            <VerifiedBadge variant="card" textEn="GAZETTE VERIFIED" textUr="گزٹ مصدقہ" />
          </div>
          <div className="max-w-none text-slate-800 dark:text-slate-200">
            <MarkdownContent content={t(article.contentEn, article.contentUr)} />
          </div>
        </div>
      </section>

      {/* Cross-Category Topical Authority Linker */}
      <CrossCategoryRelated currentArticle={article} />

      {/* Structured Author Profile & E-E-A-T Verification */}
      <AuthorBio
        author={getAuthorForCategory(article.categoryId)}
        lastVerifiedDate={article.lastVerified}
      />

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
                    <span>{t('Read Full Guide', 'مکمل گائیڈ', 'Mukammal Guide Parhein')}</span>
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
