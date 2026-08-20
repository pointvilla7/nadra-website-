'use client';

import React from 'react';
import Link from 'next/link';
import { CreditCard, Plane, GraduationCap, FileText, Briefcase, ChevronRight, Landmark, HeartHandshake, Car, Sparkles, Calculator, Globe, Building, Users, Award, Compass, Activity, Scale, CloudLightning } from 'lucide-react';
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
    default:
      return <Sparkles {...props} />;
  }
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, articleCount = 8 }) => {
  const { t } = useLanguage();

  return (
    <div className="doc-card rounded-2xl p-6 transition-all duration-300 border border-doc-brass/30 border-t-4 border-t-doc-brass hover:border-doc-brass hover:shadow-doc-hover hover:-translate-y-1 flex flex-col justify-between group relative overflow-hidden bg-white dark:bg-doc-dark-card">
      <div>
        {/* Header Icon + Badge */}
        <div className="flex items-center justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border shadow-xs"
            style={{
              backgroundColor: `${category.accentColor}15`,
              borderColor: `${category.accentColor}35`,
            }}
          >
            {getCategoryIcon(category.iconName, category.accentColor)}
          </div>
          <VerifiedBadge variant="card" textEn={`${articleCount}+ GUIDES`} textUr={`${articleCount}+ گائیڈز`} />
        </div>

        {/* Title */}
        <Link href={`/${category.slug}`}>
          <h3 className="text-xl font-serif font-bold text-doc-ink dark:text-white group-hover:text-amber-800 dark:group-hover:text-amber-300 transition mb-1 leading-snug">
            {t(category.nameEn, category.nameUr)}
          </h3>
        </Link>
        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3 font-sans">
          {t(category.taglineEn, category.taglineUr)}
        </p>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6 line-clamp-3 font-sans">
          {t(category.descriptionEn, category.descriptionUr)}
        </p>

        {/* Popular Quick Links */}
        <div className="space-y-2 mb-6 pt-4 border-t border-doc-brass/20">
          <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
            {t('Popular Queries:', 'مقبول ترین رہنمائی:')}
          </p>
          {category.popularSearches.slice(0, 4).map((item, i) => (
            <Link
              key={i}
              href={item.slug}
              className="flex items-center justify-between text-xs font-medium text-slate-700 dark:text-slate-200 hover:text-amber-800 dark:hover:text-amber-300 transition py-0.5 group/link"
            >
              <span className="truncate group-hover/link:translate-x-0.5 transition-transform">• {t(item.en, item.ur)}</span>
              <ChevronRight className="w-3.5 h-3.5 text-doc-brass shrink-0 rtl:rotate-180 transition-transform group-hover/link:scale-110" />
            </Link>
          ))}
        </div>
      </div>

      {/* Explore Button — High Contrast 44px Accessible Navy & Gold CTA */}
      <Link
        href={`/${category.slug}`}
        className="w-full min-h-[44px] py-3 px-4 rounded-xl text-xs font-extrabold font-mono flex items-center justify-center gap-2 transition-all duration-200 bg-doc-ink hover:bg-slate-850 dark:bg-slate-800 dark:hover:bg-slate-750 text-white border border-doc-brass/40 hover:border-doc-brass shadow-xs hover:shadow-md hover:scale-[1.01] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-doc-brass"
      >
        <span>{t(`EXPLORE ${category.nameEn.toUpperCase()}`, `${category.nameUr} فائلز`)}</span>
        <ChevronRight className="w-4 h-4 text-doc-brass transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
      </Link>
    </div>
  );
};
