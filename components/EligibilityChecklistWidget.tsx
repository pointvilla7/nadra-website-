'use client';

import React, { useState } from 'react';
import { ELIGIBILITY_PROGRAMS, EligibilityProgram } from '@/lib/data/checklists';
import { useLanguage } from '@/lib/context/LanguageContext';
import { CheckSquare, Square, CheckCircle2, AlertTriangle, ExternalLink, ShieldCheck, Lock, ChevronDown } from 'lucide-react';

interface EligibilityChecklistWidgetProps {
  programId?: string;
}

export const EligibilityChecklistWidget: React.FC<EligibilityChecklistWidgetProps> = ({
  programId = 'bisp-8171',
}) => {
  const { t } = useLanguage();
  const [selectedProgId, setSelectedProgId] = useState<string>(programId);
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});

  const program: EligibilityProgram =
    ELIGIBILITY_PROGRAMS[selectedProgId] || ELIGIBILITY_PROGRAMS['bisp-8171'];

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const mandatoryCriteria = program.criteria.filter((c) => c.isMandatory);
  const allMandatoryChecked = mandatoryCriteria.every((c) => checkedIds[c.id]);
  const checkedCount = program.criteria.filter((c) => checkedIds[c.id]).length;
  const isFullyEligible = allMandatoryChecked && checkedCount >= mandatoryCriteria.length;

  return (
    <div className="my-8 rounded-2xl doc-card border border-doc-brass/40 p-6 md:p-8 shadow-md bg-white dark:bg-doc-dark-card space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-doc-brass/30">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-doc-seal/10 text-doc-seal dark:text-red-400 font-mono text-[11px] font-extrabold uppercase tracking-wider">
              {t('Interactive Eligibility Checklist', 'انٹرایکٹو اہلیت گائیڈ', 'Interactive Eligibility Checklist')}
            </span>
            <span className="text-xs text-slate-400 font-bold">•</span>
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              {t('Verified 2026 Criteria', 'مصدقہ 2026 شرائط', 'Verified 2026 Criteria')}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-serif font-extrabold text-doc-ink dark:text-white mt-1.5">
            {t(program.titleEn, program.titleUr)}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 font-semibold px-3 py-1.5 rounded-lg bg-doc-paper dark:bg-slate-800 border border-doc-brass/30 shrink-0">
          <Lock className="w-3.5 h-3.5 text-doc-seal" />
          <span>{t('100% Free Verification', '100٪ مفت جانچ', '100% Free Check')}</span>
        </div>
      </div>

      {/* Program Selector */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-doc-ink dark:text-slate-200 mb-1.5">
          {t('Select Welfare / Loan Program:', 'پروگرام منتخب کریں:')}
        </label>
        <div className="relative">
          <select
            value={selectedProgId}
            onChange={(e) => {
              setSelectedProgId(e.target.value);
              setCheckedIds({});
            }}
            className="w-full px-4 py-3 rounded-xl bg-doc-paper dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-doc-ink dark:text-white font-bold text-sm focus:outline-none focus:border-doc-seal appearance-none cursor-pointer pr-10"
          >
            {Object.values(ELIGIBILITY_PROGRAMS).map((prog) => (
              <option key={prog.id} value={prog.id}>
                {t(prog.titleEn, prog.titleUr)} ({prog.category})
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-3.5 pointer-events-none" />
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
          {t(program.descriptionEn, program.descriptionUr)}
        </p>
      </div>

      {/* Interactive Criteria Checkboxes */}
      <div className="space-y-3 pt-2">
        <span className="block text-xs font-bold uppercase tracking-wider text-doc-ink dark:text-slate-200">
          {t('Check All Conditions That Apply To You:', 'ان تمام شرائط پر نشان لگائیں جو آپ پر لاگو ہوتی ہیں:')}
        </span>

        <div className="space-y-2.5">
          {program.criteria.map((c) => {
            const isChecked = !!checkedIds[c.id];
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => toggleCheck(c.id)}
                className={`w-full text-left p-4 rounded-xl border transition flex items-start gap-3 min-h-[52px] ${
                  isChecked
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500/60 text-slate-900 dark:text-white'
                    : 'bg-doc-paper dark:bg-slate-800/80 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-doc-brass'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-400" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                    {t(c.questionEn, c.questionUr)}
                  </p>
                  {c.isMandatory && (
                    <span className="inline-block text-[10px] font-mono font-bold uppercase text-doc-seal dark:text-red-400 mt-1">
                      * {t('Mandatory Requirement', 'لازمی شرط')}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Result Outcome Box */}
      <div className="pt-2">
        {isFullyEligible ? (
          <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/50 text-emerald-900 dark:text-emerald-200 text-xs space-y-3 animate-fadeIn">
            <div className="flex items-center gap-2 font-bold text-sm text-emerald-800 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>{t('Fully Eligible for Application!', 'آپ تمام بنیادی شرائط پر پورا اترتے ہیں!')}</span>
            </div>
            <p className="leading-relaxed">
              {t(program.eligibleMessageEn, program.eligibleMessageUr)}
            </p>
            <a
              href={program.nextStepUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs shadow-md transition"
            >
              <span>{t(program.nextStepTextEn, program.nextStepTextUr)}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 text-xs flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-medium">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>
                {t(
                  `Check all mandatory requirements (${checkedCount}/${mandatoryCriteria.length} completed) to view eligibility result.`,
                  `اہلیت معلوم کرنے کے لیے تمام لازمی شرائط پر نشان لگائیں۔`
                )}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Privacy Disclaimer */}
      <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
        <p className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
          <ShieldCheck className="w-3.5 h-3.5 text-doc-seal" />
          <span>{t('Independent Verification Notice', 'غیر جانبدار معلوماتی نوٹس', 'Independent Notice')}</span>
        </p>
        <p className="leading-relaxed">
          {t(
            'This checklist provides general eligibility guidance based on official gazette notifications. Final eligibility is determined strictly by the managing government authority.',
            'یہ آن لائن گائیڈ سرکاری پالیسی کے مطابق بنائی گئی ہے۔ حتمی اہلیت کا فیصلہ متعلقہ سرکاری ادارہ کرتا ہے۔'
          )}
        </p>
      </div>
    </div>
  );
};
