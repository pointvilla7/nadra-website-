'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, MessageCircleQuestion, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export interface FAQVisualItem {
  questionEn: string;
  questionUr?: string;
  answerEn: string;
  answerUr?: string;
  category?: string;
  icon?: React.ReactNode;
}

export interface FAQAccordionVisualProps {
  items: FAQVisualItem[];
  titleEn?: string;
  titleUr?: string;
  subtitleEn?: string;
  subtitleUr?: string;
  className?: string;
}

export const FAQAccordionVisual: React.FC<FAQAccordionVisualProps> = ({
  items,
  titleEn = 'Frequently Asked Questions (Citizen Guidance)',
  titleUr = 'عام طور پر پوچھے جانے والے ضروری سوالات',
  subtitleEn = 'Verified legal, operational & portal clarifications',
  subtitleUr = 'سرکاری و قانونی ضوابط کی روشنی میں تصدیق شدہ جوابات',
  className = '',
}) => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items || items.length === 0) return null;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={`my-10 space-y-4 ${className}`}>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-doc-brass/30 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-doc-paper dark:bg-slate-800 text-doc-seal dark:text-amber-400 border border-doc-brass/30 shadow-xs">
            <MessageCircleQuestion className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-serif font-extrabold text-doc-ink dark:text-white">
              {t(titleEn, titleUr)}
            </h3>
            {subtitleEn && (
              <p className="text-xs text-slate-600 dark:text-slate-400 font-sans">
                {t(subtitleEn, subtitleUr)}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-[11px] font-mono text-emerald-800 dark:text-emerald-300 self-start sm:self-auto">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span className="font-bold uppercase tracking-wider">{t('Verified Answers', 'مصدقہ جوابات')}</span>
        </div>
      </div>

      {/* Accordion Items List */}
      <div className="space-y-3 font-sans">
        {items.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const qText = t(faq.questionEn, faq.questionUr || '');
          const aText = t(faq.answerEn, faq.answerUr || '');
          const answerId = `faq-visual-answer-${idx}`;

          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'border-doc-brass bg-amber-50/20 dark:bg-slate-850 shadow-doc-card ring-1 ring-doc-brass/30'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass/50'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-serif font-bold text-xs sm:text-sm md:text-base text-doc-ink dark:text-white hover:text-doc-seal dark:hover:text-doc-brass transition cursor-pointer gap-3"
                aria-expanded={isOpen}
                aria-controls={answerId}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`text-xs font-mono font-black px-2 py-0.5 rounded-lg border shadow-xs transition-colors shrink-0 ${
                      isOpen
                        ? 'bg-doc-brass text-doc-ink border-amber-400'
                        : 'bg-doc-ink/5 dark:bg-slate-800 text-doc-seal dark:text-slate-300 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    Q{idx + 1}
                  </span>
                  <span className="leading-snug">{qText}</span>
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={`w-5 h-5 text-doc-brass transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 text-doc-seal' : ''
                  }`}
                />
              </button>

              {/* Collapsible Answer Body */}
              <div
                id={answerId}
                aria-hidden={!isOpen}
                className={`transition-all duration-300 ease-out overflow-hidden px-4 sm:px-5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans ${
                  isOpen
                    ? 'max-h-[800px] pb-5 pt-2 border-t border-slate-200/60 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/60 opacity-100'
                    : 'max-h-0 pb-0 pt-0 opacity-0 pointer-events-none'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                  <p className="grow leading-relaxed">{aText}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
