'use client';

import React from 'react';
import Link from 'next/link';
import {
  CreditCard,
  Plane,
  GraduationCap,
  FileText,
  Briefcase,
  ChevronRight,
  Landmark,
  HeartHandshake,
  Car,
  Sparkles,
  Calculator,
  Globe,
  Building,
  Users,
  Award,
  Compass,
  Activity,
  Scale,
  CloudLightning,
  CheckCircle2,
  Smartphone,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { Category } from '@/lib/data/categories';
import { useLanguage } from '@/lib/context/LanguageContext';

interface CategoryCardProps {
  category: Category;
  articleCount?: number;
}

interface CategoryCtaConfig {
  ctaEn: string;
  ctaUr: string;
}

const CATEGORY_CTA_MAP: Record<string, CategoryCtaConfig> = {
  nadra: {
    ctaEn: 'Check CNIC Status',
    ctaUr: 'شناختی کارڈ سٹیٹس دیکھیں',
  },
  passport: {
    ctaEn: 'Track My Passport',
    ctaUr: 'پاسپورٹ ٹریک کریں',
  },
  tax: {
    ctaEn: 'Check Filer Status (ATL)',
    ctaUr: 'ایکٹو ٹیکس فائلر سٹیٹس',
  },
  bills: {
    ctaEn: 'Check Electricity & Gas Bills',
    ctaUr: 'بجلی و گیس بل چیک کریں',
  },
  welfare: {
    ctaEn: 'Check 8171 & BISP Funds',
    ctaUr: '8171 بے نظیر رقم چیک کریں',
  },
  traffic: {
    ctaEn: 'Check My E-Challan',
    ctaUr: 'ای چالان و لائسنس چیک کریں',
  },
  jobs: {
    ctaEn: 'Browse Latest Vacancies',
    ctaUr: 'سرکاری نوکریاں دیکھیں',
  },
  health: {
    ctaEn: 'Check Sehat Card Eligibility',
    ctaUr: 'صحت کارڈ اہلیت دیکھیں',
  },
  education: {
    ctaEn: 'Check BISE & Merit Lists',
    ctaUr: 'بورڈ رزلٹ و میرٹ لسٹ',
  },
  loans: {
    ctaEn: 'Check Loan Eligibility',
    ctaUr: 'قرضہ اہلیت چیک کریں',
  },
  overseas: {
    ctaEn: 'Verify Protector & OPF',
    ctaUr: 'پروٹیکٹر و اوورسیز سہولیات',
  },
  property: {
    ctaEn: 'Verify Land Record (Fard)',
    ctaUr: 'فرد و اراضی ریکارڈ تصدیق',
  },
  'family-registration': {
    ctaEn: 'Check B-Form & FRC',
    ctaUr: 'بی فارم و ایف آر سی سرٹیفکیٹ',
  },
  business: {
    ctaEn: 'Check SECP & NTN Registry',
    ctaUr: 'کمپنی رجسٹریشن و این ٹی این',
  },
  certificates: {
    ctaEn: 'Verify Domicile & Police NOC',
    ctaUr: 'ڈومیسائل و تصدیق نامہ',
  },
  'hajj-umrah': {
    ctaEn: 'Check Balloting Results',
    ctaUr: 'حج قرعہ اندازی نتائج',
  },
  legal: {
    ctaEn: 'Find Legal Aid Helplines',
    ctaUr: 'مفت قانونی ہیلپ لائن',
  },
  alerts: {
    ctaEn: 'Get 2026 Policy Alerts',
    ctaUr: 'مفت حکومتی الرٹس',
  },
  'mobile-pta': {
    ctaEn: 'Check Device DIRBS Status',
    ctaUr: 'پی ٹی اے ڈیوائس تصدیق',
  },
  'pakistan-post': {
    ctaEn: 'Track Postal Parcel & UMS',
    ctaUr: 'ڈاک پارسل ٹریک کریں',
  },
  finance: {
    ctaEn: 'Check Withholding Tax Rates',
    ctaUr: 'بینک ٹیکس و پرافٹ ریٹس',
  },
};

const getCategoryIcon = (iconName: string) => {
  const props = { className: 'w-6 h-6 sm:w-7 sm:h-7 text-[#1E2A3F] dark:text-slate-200' };
  switch (iconName) {
    case 'CreditCard':
      return <CreditCard {...props} />;
    case 'Plane':
      return <Plane {...props} />;
    case 'GraduationCap':
      return <GraduationCap {...props} />;
    case 'FileText':
      return <FileText {...props} />;
    case 'Briefcase':
      return <Briefcase {...props} />;
    case 'Landmark':
      return <Landmark {...props} />;
    case 'HeartHandshake':
      return <HeartHandshake {...props} />;
    case 'Car':
      return <Car {...props} />;
    case 'Calculator':
      return <Calculator {...props} />;
    case 'Globe':
      return <Globe {...props} />;
    case 'Building':
      return <Building {...props} />;
    case 'Users':
      return <Users {...props} />;
    case 'Award':
      return <Award {...props} />;
    case 'Compass':
      return <Compass {...props} />;
    case 'Activity':
      return <Activity {...props} />;
    case 'Scale':
      return <Scale {...props} />;
    case 'CloudLightning':
      return <CloudLightning {...props} />;
    case 'Smartphone':
      return <Smartphone {...props} />;
    case 'Mail':
      return <Mail {...props} />;
    default:
      return <Sparkles {...props} />;
  }
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, articleCount = 8 }) => {
  const { t } = useLanguage();

  const ctaConfig = CATEGORY_CTA_MAP[category.id] || {
    ctaEn: `Check ${category.nameEn} Guides`,
    ctaUr: `${category.nameUr} معلومات دیکھیں`,
  };

  const buttonText = t(ctaConfig.ctaEn, ctaConfig.ctaUr);
  const ariaLabelText = t(
    `${ctaConfig.ctaEn} for ${category.nameEn}`,
    `${category.nameUr} کے لیے ${ctaConfig.ctaUr}`
  );

  return (
    <div className="doc-card rounded-2xl p-4 sm:p-7 border border-[#F1F5F9] dark:border-slate-800 flex flex-col justify-between group relative overflow-hidden bg-[#FAF9F6] dark:bg-[#1E2A3F] w-[82vw] max-w-[310px] sm:w-auto sm:max-w-none shrink-0 sm:shrink snap-start transition-all duration-200">
      <div>
        {/* Header 56px Cream-100 Circular Icon + Quiet Emerald Border Badge */}
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F3F1EC] dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700 transition-transform duration-200 group-hover:scale-105">
            {getCategoryIcon(category.iconName)}
          </div>
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-[#0F9D6D] text-[#0F9D6D] text-xs font-mono font-bold tracking-tight bg-transparent">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>
              {articleCount}+ {t('GUIDES', 'گائیڈز')}
            </span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/${category.slug}`} className="focus:outline-none">
          <h3 className="text-lg sm:text-[22px] font-serif font-bold text-[#0B1120] dark:text-white group-hover:text-doc-brass transition mb-1 sm:mb-1.5 leading-snug">
            {t(category.nameEn, category.nameUr)}
          </h3>
        </Link>
        <p className="text-xs font-medium text-[#475569] dark:text-slate-400 mb-2 sm:mb-3 font-sans line-clamp-1">
          {t(category.taglineEn, category.taglineUr)}
        </p>
        <p className="text-xs text-[#475569] dark:text-slate-300 leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3 font-sans">
          {t(category.descriptionEn, category.descriptionUr)}
        </p>

        {/* Popular Quick Links */}
        <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 pt-3 sm:pt-4 border-t border-[#F1F5F9] dark:border-slate-800">
          <p className="text-[11px] font-sans font-semibold text-[#475569] dark:text-slate-400 uppercase tracking-wider">
            {t('Popular Queries:', 'مقبول ترین رہنمائی:')}
          </p>
          {category.popularSearches.slice(0, 3).map((item, i) => (
            <Link
              key={i}
              href={item.slug}
              className="flex items-center justify-between text-xs font-medium text-[#475569] dark:text-slate-200 hover:text-doc-brass dark:hover:text-doc-brass transition py-0.5 group/link"
            >
              <span className="truncate group-hover/link:translate-x-0.5 transition-transform">
                • {t(item.en, item.ur)}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-doc-brass shrink-0 rtl:rotate-180 transition-transform group-hover/link:scale-110" />
            </Link>
          ))}
        </div>
      </div>

      {/* ── Contextual Action-Specific CTA Button (Standardized across all 21 categories) ── */}
      <Link
        href={`/${category.slug}`}
        aria-label={ariaLabelText}
        className="w-full min-h-[44px] py-2.5 px-3.5 sm:px-4 rounded-xl text-xs font-bold font-sans flex items-center justify-between gap-2 transition-all duration-200 group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-doc-brass active:scale-[0.98] bg-[#0B1120] text-white hover:bg-[#1B2A4A] dark:bg-[#111C35] dark:hover:bg-[#1E2A3F] border border-[#1E2A3F] dark:border-slate-700 shadow-sm hover:shadow-md"
      >
        <span className="truncate">{buttonText}</span>
        <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-150 ease-out group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 rtl:rotate-180 text-doc-brass" />
      </Link>
    </div>
  );
};
