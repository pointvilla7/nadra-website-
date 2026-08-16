'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '@/lib/data/articles';
import { useLanguage } from '@/lib/context/LanguageContext';

interface FAQAccordionProps {
  faqs: FAQItem[];
  titleEn?: string;
  titleUr?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  titleEn = 'Frequently Asked Questions (FAQs)',
  titleUr = 'عام طور پر پوچھے جانے والے سوالات (FAQs)',
}) => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="my-10 space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
          <HelpCircle className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
          {t(titleEn, titleUr)}
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const qText = t(faq.questionEn, faq.questionUr);
          const aText = t(faq.answerEn, faq.answerUr);

          return (
            <div
              key={idx}
              className="glass-card rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-sm md:text-base text-slate-900 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                    Q{idx + 1}
                  </span>
                  <span>{qText}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-emerald-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/40 animate-fadeIn">
                  <p>{aText}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
