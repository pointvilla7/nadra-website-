'use client';

import React from 'react';
import Link from 'next/link';
import { CreditCard, Plane, GraduationCap, FileText, Briefcase, ChevronRight, Landmark, HeartHandshake, Car, Sparkles, Calculator, Globe, Building, Users, Award, Compass, Activity, Scale, CloudLightning, CheckCircle2, Smartphone, Mail } from 'lucide-react';
import { Category } from '@/lib/data/categories';
import { useLanguage } from '@/lib/context/LanguageContext';
import { VerifiedBadge } from '@/components/VerifiedBadge';

interface CategoryCardProps {
  category: Category;
  articleCount?: number;
}

const getCategoryIcon = (iconName: string) => {
  const props = { className: "w-7 h-7 text-[#1E2A3F] dark:text-slate-200" };
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

  return (
    <div className="doc-card rounded-[12px] p-5 sm:p-8 transition-all duration-200 border border-[#F1F5F9] dark:border-slate-800 hover:shadow-doc-hover hover:-translate-y-0.5 flex flex-col justify-between group relative overflow-hidden bg-[#FAF9F6] dark:bg-[#1E2A3F]">
      <div>
        {/* Header 56px Cream-100 Circular Icon + Quiet Emerald Border Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-14 h-14 rounded-full bg-[#F3F1EC] dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700 transition-transform duration-200 group-hover:scale-105">
            {getCategoryIcon(category.iconName)}
          </div>
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-[#0F9D6D] text-[#0F9D6D] text-xs font-mono font-bold tracking-tight bg-transparent">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>{articleCount}+ {t('GUIDES', 'گائیڈز')}</span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/${category.slug}`}>
          <h3 className="text-[22px] font-serif font-medium text-[#0B1120] dark:text-white group-hover:text-[#B8860B] dark:group-hover:text-[#D4A017] transition mb-1.5 leading-snug">
            {t(category.nameEn, category.nameUr)}
          </h3>
        </Link>
        <p className="text-xs font-medium text-[#475569] dark:text-slate-400 mb-3 font-sans">
          {t(category.taglineEn, category.taglineUr)}
        </p>
        <p className="text-xs text-[#475569] dark:text-slate-300 leading-relaxed mb-6 line-clamp-3 font-sans">
          {t(category.descriptionEn, category.descriptionUr)}
        </p>

        {/* Popular Quick Links */}
        <div className="space-y-2 mb-6 pt-4 border-t border-[#F1F5F9] dark:border-slate-800">
          <p className="text-[11px] font-sans font-semibold text-[#475569] dark:text-slate-400 uppercase tracking-wider">
            {t('Popular Queries:', 'مقبول ترین رہنمائی:')}
          </p>
          {category.popularSearches.slice(0, 4).map((item, i) => (
            <Link
              key={i}
              href={item.slug}
              className="flex items-center justify-between text-xs font-medium text-[#475569] dark:text-slate-200 hover:text-[#B8860B] dark:hover:text-[#D4A017] transition py-0.5 group/link"
            >
              <span className="truncate group-hover/link:translate-x-0.5 transition-transform">• {t(item.en, item.ur)}</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#B8860B] shrink-0 rtl:rotate-180 transition-transform group-hover/link:scale-110" />
            </Link>
          ))}
        </div>
      </div>

      {/* Explore Button — Solid Gold-600 CTA Button */}
      <Link
        href={`/${category.slug}`}
        className="w-full min-h-[44px] py-2.5 px-4 rounded-[8px] text-xs font-semibold font-sans flex items-center justify-center gap-2 transition-all duration-200 bg-[#B8860B] hover:bg-[#D4A017] text-white shadow-xs hover:shadow-md hover:scale-[1.01] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B8860B]"
      >
        <span>{t(`EXPLORE ${category.nameEn.toUpperCase()}`, `${category.nameUr} فائلز`)}</span>
        <ChevronRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
      </Link>
    </div>
  );
};
