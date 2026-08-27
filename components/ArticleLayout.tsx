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
import {
  ProcessStepsDiagram,
  ComparisonVisual,
  FeeTableVisual,
  FAQAccordionVisual,
  CategoryHeroIllustration
} from '@/components/visuals';
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
import { RecommendedServices } from '@/components/RecommendedServices';
import { PremiumTrackerWaitlist } from '@/components/PremiumTrackerWaitlist';
import { ArticleRatingWidget } from '@/components/ArticleRatingWidget';
import { ReportErrorModal } from '@/components/ReportErrorModal';
import { CommunityCommentSection } from '@/components/CommunityCommentSection';
import { VideoGuideSection } from '@/components/VideoGuideSection';

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

        {/* GEO Trust & EEAT Verification Bar with Rating Widget */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <GeoTrustBadge
            lastVerified={article.lastVerified || 'August 19, 2026'}
            officialSource={article.officialSource}
            author={article.author}
          />
          <ArticleRatingWidget slug={article.slug} />
        </div>
      </header>

      {/* One-Tap High-Intent Action Bar */}
      <div className="flex flex-wrap items-center gap-2 bg-doc-paper dark:bg-doc-dark-card border border-doc-brass/40 rounded-xl p-3 shadow-sm">
        <button
          onClick={handleShareWhatsApp}
          className="flex items-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold rounded-lg transition-all duration-150 shadow-sm"
        >
          <Share2 className="w-3.5 h-3.5 shrink-0" />
          <span>{t('Share on WhatsApp', 'واٹس ایپ پر شیئر کریں', 'WhatsApp Share')}</span>
        </button>

        <button
          onClick={handleCopyLink}
          className="flex items-center gap-1.5 px-3 py-2 bg-white dark:bg-doc-dark-base border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-lg hover:border-doc-brass active:scale-95 transition-all duration-150 min-w-[110px] justify-center"
        >
          {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500 animate-checkmarkPop shrink-0" /> : <Copy className="w-3.5 h-3.5 text-doc-brass shrink-0" />}
          <span className={copiedLink ? 'text-emerald-500 font-bold' : ''}>{copiedLink ? t('Link Copied!', 'لنک کاپی ہو گیا!') : t('Copy Link', 'لنک کاپی کریں', 'Copy Link')}</span>
        </button>

        <ReportErrorModal
          slug={article.slug}
          articleTitle={t(article.titleEn, article.titleUr)}
          category={category.nameEn}
        />

        <button
          onClick={() => setIsAlertModalOpen(true)}
          className="flex items-center gap-1.5 px-3 py-2 bg-slate-850 hover:bg-slate-800 active:scale-95 border border-doc-brass/40 text-slate-100 text-xs font-bold rounded-lg transition-all duration-150 shadow-xs"
        >
          <Bell className="w-3.5 h-3.5 text-doc-brass shrink-0" />
          <span>{t('Get Update Alerts', 'نوٹیفکیشن آن کریں', 'Get Alerts')}</span>
        </button>

        <PdfChecklistGenerator
          slug={article.slug}
          title={t(article.titleEn, article.titleUr)}
          category={category.nameEn}
          feeStructure={article.feeStructure}
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
          className="flex items-center gap-1.5 px-3 py-2 bg-doc-ink text-white text-xs font-mono font-bold rounded-lg hover:bg-slate-850 border border-doc-brass/40 transition ms-auto"
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
            <Eye className="w-4 h-4 text-doc-brass" />
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
                  ? 'bg-doc-brass text-doc-ink font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-doc-brass'
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
        <FeeTableVisual rows={article.feeStructure} />
      )}

      {/* Interactive Step-by-Step Wizard View */}
      {viewMode === 'wizard' && article.steps && article.steps.length > 0 && (
        <StepByStepWizard steps={article.steps} articleTitle={t(article.titleEn, article.titleUr)} />
      )}

      {/* Official Video Guide Embed if available */}
      {article.videoGuide && <VideoGuideSection videoGuide={article.videoGuide} />}

      {/* Standard Step-by-Step Instructions View */}
      {viewMode === 'standard' && article.steps && article.steps.length > 0 && (
        <ProcessStepsDiagram
          steps={article.steps}
          titleEn="Step-by-Step Application Process"
          titleUr="مرحلہ وار طریقہ کار"
          subtitleEn="Official step sequence under 2026 civic regulations"
          subtitleUr="سال 2026 کے سرکاری ضوابط کے تحت تصدیق شدہ مراحل"
        />
      )}

      {/* Comparison Visual for Comparative Guides */}
      {article.slug === 'lesco-vs-fesco-bill-comparison' && (
        <ComparisonVisual
          titleEn="LESCO vs FESCO: Electricity Distribution Comparison 2026"
          titleUr="لیسکو بمقابلہ فیسکو بجلی ڈسٹری بیوشن موازنہ 2026"
          subtitleEn="Service area coverage, consumer tariff slabs, reference numbers & helpline contacts"
          subtitleUr="علاقائی دائرہ کار، ٹیرف سلیب اور ہیلپ لائن کا تقابلی جائزہ"
          items={[
            {
              titleEn: 'LESCO (Lahore Electric)',
              titleUr: 'لیسکو (لاہور ریجن)',
              subtitleEn: 'Lahore Division & Surroundings',
              subtitleUr: 'لاہور ڈویژن اور ملحقہ اضلاع',
              badgeEn: 'Central Punjab',
              badgeUr: 'وسطی پنجاب',
              badgeVariant: 'navy',
              pointsEn: [
                'Covers Lahore, Kasur, Okara, Sheikhupura & Nankana Sahib',
                '14-Digit consumer reference number + batch code (U/R)',
                'NEPRA Uniform Multi-Year Tariff with fuel price adjustments (FPA)',
                'Helpline: 118 or 042-99204814 (24/7 centralized dispatch)'
              ],
              recommendedForEn: 'Residents & commercial businesses in Lahore & Kasur circle',
              recommendedForUr: 'لاہور اور قصور سرکل کے رہائشی و کمرشل صارفین'
            },
            {
              titleEn: 'FESCO (Faisalabad Electric)',
              titleUr: 'فیسکو (فیصل آباد ریجن)',
              subtitleEn: 'Faisalabad, Sargodha & Jhang',
              subtitleUr: 'فیصل آباد، سرگودھا اور جھنگ سرکل',
              badgeEn: 'Industrial Hub',
              badgeUr: 'صنعتی ریجن',
              badgeVariant: 'brass',
              isPopular: true,
              pointsEn: [
                'Covers Faisalabad, Jhang, Toba Tek Singh, Chiniot, Sargodha & Mianwali',
                '14-Digit reference number format for instant duplicate bill downloads',
                'Dedicated textile industrial tariff and agricultural tube-well subsidies',
                'Helpline: 118 or 041-9220184'
              ],
              recommendedForEn: 'Domestic, textile & agricultural consumers in Faisalabad region',
              recommendedForUr: 'فیصل آباد، سرگودھا اور جھنگ کے تمام صارفین'
            }
          ]}
        />
      )}

      {article.slug === 'cnic-vs-nicop-vs-poc-comparison' && (
        <ComparisonVisual
          titleEn="CNIC vs NICOP vs POC: Complete Identity Card Comparison 2026"
          titleUr="شناختی کارڈ بمقابلہ نائیکوپ بمقابلہ پی او سی موازنہ 2026"
          subtitleEn="Official NADRA eligibility parameters, fee tiers, visa-free travel & domestic civil rights"
          subtitleUr="اہلیت، فیس شیڈول، بغیر ویزا پاکستان آمد اور ملکی حقوق کا تقابلی جائزہ"
          items={[
            {
              titleEn: 'CNIC (National Identity Card)',
              titleUr: 'قومی شناختی کارڈ (CNIC)',
              subtitleEn: 'Resident Pakistani Citizens (18+)',
              subtitleUr: 'پاکستان میں مقیم شہری',
              badgeEn: 'Resident Citizens',
              badgeUr: 'پاکستانی شہری',
              badgeVariant: 'emerald',
              pointsEn: [
                'Issued to Pakistani citizens aged 18+ living in Pakistan',
                'Mandatory for domestic banking, property registry, SIMs & voting',
                'Linked to NADRA Family Tree (FRC) & Union Council records',
                'Fee: Smart Normal PKR 750 | Urgent PKR 1,500 | Executive PKR 2,500'
              ],
              recommendedForEn: 'All resident citizens living permanently in Pakistan',
              recommendedForUr: 'پاکستان میں مستقل مقیم تمام شہری'
            },
            {
              titleEn: 'NICOP (Overseas Identity Card)',
              titleUr: 'نائیکوپ (اوورسیز شناختی کارڈ)',
              subtitleEn: 'Overseas Pakistanis & Dual Citizens',
              subtitleUr: 'بیرون ملک مقیم و دوہری شہریت والے',
              badgeEn: 'Overseas Card',
              badgeUr: 'اوورسیز کارڈ',
              badgeVariant: 'brass',
              isPopular: true,
              pointsEn: [
                'For Pakistani passport holders living or working abroad',
                'Grants 100% Visa-Free Entry into Pakistan with foreign passport',
                'Dual citizenship recognized for 22 bilateral treaty countries',
                'Fee: Zone A (USA/UK/EU) $39 USD | Zone B (Gulf/Saudia) $20 USD'
              ],
              recommendedForEn: 'Pakistani expatriates, overseas students, Gulf workers & dual nationals',
              recommendedForUr: 'اوورسیز پاکستانی، گلف ورکرز، طلبہ اور دوہری شہریت والے'
            },
            {
              titleEn: 'POC (Pakistan Origin Card)',
              titleUr: 'پی او سی (پاکستان اوریجن کارڈ)',
              subtitleEn: 'Foreign Spouses & Former Citizens',
              subtitleUr: 'غیر ملکی شریک حیات و سابق شہری',
              badgeEn: 'Foreign Origin',
              badgeUr: 'غیر ملکی اوریجن',
              badgeVariant: 'seal',
              pointsEn: [
                'For foreign spouses of Pakistani nationals or former citizens',
                'Provides Visa-Free entry & indefinite legal stay in Pakistan',
                'Cannot hold Pakistani passport, vote, or hold government jobs',
                'Fee: Standard 5-Year Application $100–$150 USD via Pak-ID'
              ],
              recommendedForEn: 'Foreign spouses married to Pakistani citizens & ex-nationals',
              recommendedForUr: 'پاکستانی شہریوں کے غیر ملکی شریک حیات اور سابق پاکستانی'
            }
          ]}
        />
      )}

      {article.slug === 'registry-vs-intiqal-difference' && (
        <ComparisonVisual
          titleEn="Registry vs Intiqal: Property Legal Rights Comparison 2026"
          titleUr="رجسٹری بمقابلہ انتقال: ملکیتی حقوق کا قانونی موازنہ"
          subtitleEn="Contractual title deeds vs land revenue fiscal records under Pakistani law"
          subtitleUr="بیع نامہ رجسٹری اور اراضی ریکارڈ انتقال کا تفصیلی قانونی فرق"
          items={[
            {
              titleEn: 'Registry (Sale Deed / بیع نامہ)',
              titleUr: 'رجسٹری (بیع نامہ)',
              subtitleEn: 'Registered Contractual Title Deed',
              subtitleUr: 'فریقین کے درمیان تصدیق شدہ معاہدہ بیع',
              badgeEn: 'Primary Legal Title',
              badgeUr: 'بنیادی قانونی ثبوت',
              badgeVariant: 'seal',
              isPopular: true,
              pointsEn: [
                'Executed under the Registration Act 1908 before the Sub-Registrar',
                'Strongest primary legal evidence of ownership in civil courts',
                'Requires non-judicial e-Stamp paper (Challan 32-A) and official registration fee',
                'Protects buyer against fraud, third-party claims, and illegal resale'
              ],
              recommendedForEn: 'Urban plots, commercial plazas, residential houses & high-value real estate',
              recommendedForUr: 'شہری پلاٹس، کمرشل جائیداد اور رہائشی مکانات کی خریداری'
            },
            {
              titleEn: 'Intiqal (Mutation / انتقال)',
              titleUr: 'انتقال (اراضی ریکارڈ میوٹیشن)',
              subtitleEn: 'Revenue Fiscal Record Entry',
              subtitleUr: 'سرکاری جمع بندی میں نام کا اندراج',
              badgeEn: 'Fiscal Revenue Record',
              badgeUr: 'محصولاتی ریکارڈ',
              badgeVariant: 'navy',
              pointsEn: [
                'Entered in Punjab Land Record Authority (PLRA) / Patwari records under Land Revenue Act',
                'Updates government fiscal tax records to indicate who pays land revenue',
                'Does NOT independently create conclusive legal title without underlying deed',
                'Can be sanctioned on the spot at Arazi Record Centers (ARC) upon biometric verification'
              ],
              recommendedForEn: 'Agricultural land, rural acreage & fiscal tax record updating after Registry',
              recommendedForUr: 'زرعی اراضی اور رجسٹری کے بعد سرکاری ریکارڈ میں نام کی منتقلی'
            }
          ]}
        />
      )}

      {article.slug === 'withholding-tax-rates-filers-non-filers' && (
        <ComparisonVisual
          titleEn="Withholding Tax Rates: Active Filer vs Non-Filer Slabs 2026"
          titleUr="ود ہولڈنگ ٹیکس سلیب: فائلر بمقابلہ نان فائلر تقابل 2026"
          subtitleEn="FBR Active Taxpayer List (ATL) tax exemptions vs punitive non-filer surcharges"
          subtitleUr="ایف بی آر ایکٹو ٹیکس فائلر کی چھوٹ اور نان فائلر پر لاگو اضافی کٹوتیاں"
          items={[
            {
              titleEn: 'Active Tax Filer (ATL)',
              titleUr: 'ایکٹو ٹیکس فائلر (ATL)',
              subtitleEn: 'Compliant Taxpayer on FBR List',
              subtitleUr: 'ایف بی آر لسٹ میں شامل شہری',
              badgeEn: 'Lowest Standard Rates',
              badgeUr: 'کم ترین ٹیکس شرح',
              badgeVariant: 'emerald',
              isPopular: true,
              pointsEn: [
                '0% Tax on bank cash withdrawals exceeding PKR 50,000 per day',
                '3% Standard Advance Tax on immovable property purchase (Section 236K)',
                '15% Final Withholding Tax on bank profit, dividends & savings schemes',
                'Standard engine CC vehicle registration & token tax without punitive multipliers'
              ],
              recommendedForEn: 'Salaried individuals, business owners, freelancers & property investors',
              recommendedForUr: 'تنخواہ دار، تاجر، فری لانسرز اور جائیداد خریدار'
            },
            {
              titleEn: 'Non-Filer / Late Filer',
              titleUr: 'نان فائلر / غیر ایکٹو افراد',
              subtitleEn: 'Subject to 100% to 200% Punitive Tax',
              subtitleUr: 'دگنا اور تین گنا اضافی ٹیکس',
              badgeEn: 'Punitive Surcharges',
              badgeUr: 'بھاری کٹوتی',
              badgeVariant: 'seal',
              pointsEn: [
                '0.9% Advance Withholding Tax on bank cash withdrawals (Section 231AB)',
                '12% to 15% Heavy Surcharge on immovable property purchase transactions',
                '30% Doubled Withholding Tax on bank profit and savings returns',
                'Double/Triple registration tax on motor vehicles and mobile imports'
              ],
              recommendedForEn: 'Urged to file annual income tax return on Iris 2.0 to restore ATL status',
              recommendedForUr: 'فوری طور پر انکم ٹیکس گوشوارہ جمع کروا کے فائلر بنیں'
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

      {/* FAQ Accordion Visual Section */}
      <FAQAccordionVisual items={article.faqs || []} />

      {/* Recommended Verified Affiliate & Partner Services */}
      <RecommendedServices categoryId={article.categoryId} />

      {/* Interactive Was This Helpful Feedback Widget */}
      <ArticleFeedbackWidget articleSlug={article.slug} />

      {/* Citizen Community Discussions & Moderated Comments */}
      <CommunityCommentSection
        slug={article.slug}
        articleTitle={t(article.titleEn, article.titleUr)}
      />

      {/* Premium Tracker Waitlist Teaser */}
      <PremiumTrackerWaitlist />

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
