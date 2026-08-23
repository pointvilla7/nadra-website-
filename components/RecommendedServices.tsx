'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, ExternalLink, CheckCircle2, Star, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { RECOMMENDED_SERVICES, RecommendedServiceItem } from '@/lib/data/affiliates';

interface RecommendedServicesProps {
  categoryId?: string;
  className?: string;
}

export const RecommendedServices: React.FC<RecommendedServicesProps> = ({
  categoryId,
  className = '',
}) => {
  const { t } = useLanguage();

  // Filter services relevant to the category, or default to all 3
  const matchedServices = categoryId
    ? RECOMMENDED_SERVICES.filter((s) => s.applicableCategoryIds.includes(categoryId))
    : RECOMMENDED_SERVICES;

  const servicesToRender = matchedServices.length > 0 ? matchedServices : RECOMMENDED_SERVICES;

  return (
    <section
      aria-label="Recommended Verified Services"
      className={`my-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-[#FAF9F6] dark:bg-[#1E2A3F] p-5 sm:p-7 space-y-6 ${className}`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-doc-brass" />
            <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 dark:text-white">
              {t('Recommended Civic & Professional Services', 'تجویز کردہ مصدقہ سروسز')}
            </h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-sans mt-0.5">
            {t(
              'Hand-picked, vetted tools and partner resources to accelerate your documentation.',
              'دستاویزات اور سرکاری امور میں آسانی کے لیے تصدیق شدہ ٹولز۔'
            )}
          </p>
        </div>

        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 bg-slate-200/60 dark:bg-slate-800/80 px-2.5 py-1 rounded-lg shrink-0 self-start sm:self-auto">
          {t('Vetted Resources', 'مصدقہ ذرائع')}
        </span>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {servicesToRender.map((service) => (
          <div
            key={service.id}
            className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-4 sm:p-5 flex flex-col justify-between space-y-4 hover:shadow-md hover:border-doc-brass/50 transition-all duration-200 group"
          >
            <div className="space-y-2.5">
              {/* Partner Badge & Rating */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-doc-brass bg-amber-500/10 dark:bg-amber-500/15 px-2 py-0.5 rounded border border-amber-500/20">
                  {service.partnerBadge}
                </span>
                <span className="flex items-center gap-1 text-xs font-mono font-bold text-amber-500">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  {service.rating}
                </span>
              </div>

              {/* Title & Tagline */}
              <h4 className="text-sm font-serif font-bold text-slate-900 dark:text-white group-hover:text-doc-brass transition leading-snug">
                {t(service.name, service.nameUr)}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-sans line-clamp-2 leading-relaxed">
                {t(service.descriptionEn, service.descriptionUr)}
              </p>

              {/* Bullet Benefits */}
              <ul className="space-y-1 pt-1 border-t border-slate-100 dark:border-slate-800">
                {service.benefitsEn.map((ben, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span className="truncate">{ben}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Link with proper sponsor rel tags */}
            <a
              href={service.destinationUrl}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="w-full min-h-[40px] py-2 px-3 rounded-lg bg-slate-900 dark:bg-slate-800 hover:bg-doc-brass hover:text-white dark:hover:bg-doc-brass text-white text-xs font-sans font-bold flex items-center justify-between transition-all duration-150 active:scale-[0.98] shadow-2xs"
            >
              <span>{t(service.ctaTextEn, service.ctaTextUr)}</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-80" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
