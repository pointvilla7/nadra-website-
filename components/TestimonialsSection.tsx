'use client';

import React from 'react';
import { Star, ShieldCheck, MapPin, CheckCircle2, MessageSquareQuote, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { TESTIMONIALS, TRUSTED_COMMUNITIES } from '@/lib/data/trust';

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section aria-label="User Reviews and Trust Proof" className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <MessageSquareQuote className="w-5 h-5 text-doc-brass" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#0B1120] dark:text-white leading-tight">
              {t('Trusted by Pakistani Citizens & Overseas Diaspora', 'شہریوں کا بااعتماد عوامی پورٹل')}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans max-w-2xl">
            {t(
              'Real experiences from citizens across Pakistan and overseas communities using our verified civic directories.',
              'پاکستان اور دنیا بھر میں مقیم پاکستانیوں کے حقیقی تاثرات اور تجربات۔'
            )}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-200">
            5.0 / 5.0 Rating
          </span>
        </div>
      </div>

      {/* 4 Testimonial Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {TESTIMONIALS.map((item) => (
          <div
            key={item.id}
            className="doc-card rounded-2xl p-5 sm:p-6 border border-[#F1F5F9] dark:border-slate-800 bg-[#FAF9F6] dark:bg-[#1E2A3F] flex flex-col justify-between space-y-4 hover:shadow-md transition-all duration-200"
          >
            <div className="space-y-3">
              {/* Star Rating & Verified Badge */}
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" />
                  {t('Verified Citizen', 'مصدقہ صارف')}
                </span>
              </div>

              {/* Quote */}
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans italic">
                &ldquo;{t(item.quoteEn, item.quoteUr)}&rdquo;
              </p>
            </div>

            {/* Author Profile Footer */}
            <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
              {/* Avatar Initial Circle */}
              <div className="w-9 h-9 rounded-full bg-doc-ink dark:bg-slate-700 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-slate-300 dark:border-slate-600">
                {item.initials}
              </div>

              <div className="min-w-0">
                <h4 className="text-xs font-serif font-bold text-slate-900 dark:text-white truncate">
                  {t(item.name, item.nameUr)}
                </h4>
                <div className="flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400 font-sans truncate">
                  <MapPin className="w-2.5 h-2.5 shrink-0 text-doc-brass" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── As Referenced By / Trusted Resource For ── */}
      <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 shrink-0">
            {t('Trusted Public Services Reference For:', 'معلومات کے بااعتماد ذرائع برائے:')}
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 flex-1">
            {TRUSTED_COMMUNITIES.map((comm, idx) => (
              <div
                key={idx}
                className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 text-center"
              >
                <span className="text-[11px] font-sans font-bold text-slate-800 dark:text-slate-200 block truncate">
                  {comm.name}
                </span>
                <span className="text-[9px] font-mono text-doc-brass truncate block">
                  {comm.tagline}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
