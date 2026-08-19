'use client';

import React from 'react';
import Link from 'next/link';
import { CreditCard, Plane, GraduationCap, FileText, Briefcase, ChevronRight, Landmark, HeartHandshake, Car, Sparkles } from 'lucide-react';
import { Category } from '@/lib/data/categories';
import { useLanguage } from '@/lib/context/LanguageContext';
import { VerifiedBadge } from '@/components/VerifiedBadge';

interface CategoryCardProps {
  category: Category;
  articleCount?: number;
}

const getCategoryIcon = (iconName: string, color: string) => {
  const props = { className: "w-6 h-6", style: { color } };
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
    default:
      return <Sparkles {...props} />;
  }
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, articleCount = 8 }) => {
  const { t } = useLanguage();

  return (
    <div className="doc-card rounded-2xl p-6 transition-all duration-300 border border-doc-brass/30 border-t-4 border-t-doc-brass hover:border-doc-seal hover:scale-[1.01] hover:-translate-y-0.5 hover:shadow-xl flex flex-col justify-between group relative overflow-hidden">
      <div>
        {/* Header Icon + Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 border border-doc-brass/30 bg-doc-paper dark:bg-doc-dark-base">
            {getCategoryIcon(category.iconName, category.accentColor)}
          </div>
          <VerifiedBadge variant="card" textEn={`${articleCount}+ GUIDES`} textUr={`${articleCount}+ فائلز`} />
        </div>

        {/* Title */}
        <Link href={`/${category.slug}`}>
          <h3 className="text-xl font-serif font-extrabold text-doc-ink dark:text-white group-hover:text-doc-seal dark:group-hover:text-red-400 transition mb-1">
            {t(category.nameEn, category.nameUr)}
          </h3>
        </Link>
        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-3">
          {t(category.taglineEn, category.taglineUr)}
        </p>
        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-6 line-clamp-3">
          {t(category.descriptionEn, category.descriptionUr)}
        </p>

        {/* Popular Quick Links */}
        <div className="space-y-1.5 mb-6 pt-4 border-t border-doc-brass/20">
          <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
            {t('Popular Queries:', 'مقبول ترین تلاشیں:')}
          </p>
          {category.popularSearches.slice(0, 4).map((item, i) => (
            <Link
              key={i}
              href={item.slug}
              className="flex items-center justify-between text-xs font-medium text-slate-800 dark:text-slate-200 hover:text-doc-seal dark:hover:text-red-400 transition py-0.5"
            >
              <span className="truncate">• {t(item.en, item.ur)}</span>
              <ChevronRight className="w-3 h-3 text-doc-brass shrink-0" />
            </Link>
          ))}
        </div>
      </div>

      {/* Explore Button — High Contrast 44px Accessible CTA */}
      <Link
        href={`/${category.slug}`}
        className="w-full min-h-[44px] py-3 px-4 rounded-xl text-xs font-extrabold font-mono flex items-center justify-center gap-2 transition-all duration-200 bg-gradient-to-r from-[#A02334] to-[#C72C41] hover:from-[#881B2B] hover:to-[#A02334] text-white shadow-md shadow-doc-seal/20 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-doc-seal"
      >
        <span>{t(`EXPLORE ${category.nameEn.toUpperCase()}`, `${category.nameUr} فائلز`)}</span>
        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};
