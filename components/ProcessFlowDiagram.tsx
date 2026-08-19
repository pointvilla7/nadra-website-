'use client';

import React from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { FileCheck, Fingerprint, Banknote, Award, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProcessFlowDiagramProps {
  categorySlug?: string;
  step1Title?: string;
  step2Title?: string;
  step3Title?: string;
  step4Title?: string;
}

export const ProcessFlowDiagram: React.FC<ProcessFlowDiagramProps> = ({
  categorySlug,
  step1Title = 'Document Preparation',
  step2Title = 'Biometric & Data Entry',
  step3Title = 'Fee Challan & Verification',
  step4Title = 'Certificate / Card Issuance'
}) => {
  const { t } = useLanguage();

  const steps = [
    {
      num: '01',
      icon: <FileCheck className="w-5 h-5 text-emerald-400" />,
      titleEn: step1Title,
      titleUr: 'دستاویزات کی تیاری',
      descEn: 'Gather CNIC, utility bills & verified affidavits',
      descUr: 'شناختی کارڈ اور بجلی کا بل تیار کریں'
    },
    {
      num: '02',
      icon: <Fingerprint className="w-5 h-5 text-sky-400" />,
      titleEn: step2Title,
      titleUr: 'بائیومیٹرک و اندراج',
      descEn: 'Online submission or facilitation center token',
      descUr: 'آن لائن پورٹل یا خدمت مرکز پر اندراج'
    },
    {
      num: '03',
      icon: <Banknote className="w-5 h-5 text-amber-400" />,
      titleEn: step3Title,
      titleUr: 'فیس چالان و تصدیق',
      descEn: 'Pay official fee via 1Link, ePay or Bank',
      descUr: '1Link یا بینک کے ذریعے سرکاری فیس ادائیگی'
    },
    {
      num: '04',
      icon: <Award className="w-5 h-5 text-purple-400" />,
      titleEn: step4Title,
      titleUr: 'سرٹیفکیٹ یا کارڈ کا حصول',
      descEn: 'SMS tracking & doorstep courier delivery',
      descUr: 'ایس ایم ایس ٹریکنگ اور ہوم ڈلیوری'
    }
  ];

  return (
    <figure className="my-6 p-4 sm:p-6 bg-slate-900/80 dark:bg-doc-dark-card/90 rounded-2xl border border-doc-brass/30 shadow-md">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <h3 className="text-sm font-bold font-serif text-slate-100 uppercase tracking-wider">
            {t('Official Workflow Process Diagram', 'سرکاری کارروائی اور طریقہ کار کا خاکہ')}
          </h3>
        </div>
        <span className="text-[11px] font-mono text-doc-brass bg-black/40 px-2.5 py-0.5 rounded-full border border-white/10 flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>4-STAGE FLOW</span>
        </span>
      </div>

      {/* Grid of 4 Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
        {steps.map((st, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between hover:border-doc-brass/50 transition-colors relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-700 shadow-inner">
                  {st.icon}
                </div>
                <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-doc-brass transition-colors">
                  {st.num}
                </span>
              </div>
              <div className="text-xs font-bold text-white font-serif mb-1">
                {t(st.titleEn, st.titleUr)}
              </div>
              <div className="text-[11px] text-slate-400 font-sans leading-relaxed">
                {t(st.descEn, st.descUr)}
              </div>
            </div>

            {idx < 3 && (
              <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
        ))}
      </div>

      <figcaption className="mt-3 text-center text-xs text-slate-400 font-sans italic">
        ℹ️ {t('Standard government processing sequence under 2026 regulations.', 'سال 2026 کے سرکاری قواعد کے تحت معیاری تصدیقی مراحل۔')}
      </figcaption>
    </figure>
  );
};
