'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { StepItem } from '@/lib/data/articles';

interface StepByStepWizardProps {
  steps: StepItem[];
  articleTitle: string;
}

export const StepByStepWizard: React.FC<StepByStepWizardProps> = ({ steps, articleTitle }) => {
  const { t } = useLanguage();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  if (!steps || steps.length === 0) return null;

  const currentStep = steps[currentStepIndex];
  const isLastStep = currentStepIndex === steps.length - 1;
  const isCompleted = currentStepIndex >= steps.length;
  const progressPercent = Math.min(100, Math.round(((currentStepIndex + 1) / steps.length) * 100));

  return (
    <div className="bg-doc-paper dark:bg-doc-dark-card border-2 border-doc-brass/50 rounded-2xl p-6 sm:p-8 my-8 space-y-6 shadow-md relative overflow-hidden">
      {/* Header & Mode Title */}
      <div className="flex items-center justify-between border-b border-doc-brass/20 pb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-doc-seal animate-pulse" />
          <h3 className="font-serif font-bold text-lg text-doc-ink dark:text-slate-100">
            {t('Interactive Step-by-Step Wizard', 'مرحلہ وار گائیڈ وزرڈ', 'Step-by-Step Wizard')}
          </h3>
        </div>
        <span className="font-mono text-xs font-bold text-doc-brass bg-doc-brass/10 px-3 py-1 rounded-full border border-doc-brass/30">
          {isCompleted
            ? t('Complete!', 'مکمل!')
            : t(`Step ${currentStepIndex + 1} of ${steps.length}`, `مرحلہ ${currentStepIndex + 1} از ${steps.length}`)}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
        <div
          className="bg-doc-seal h-full transition-all duration-300 ease-out rounded-full"
          style={{ width: `${isCompleted ? 100 : progressPercent}%` }}
        />
      </div>

      {!isCompleted ? (
        <div className="space-y-6 min-h-[180px]">
          {/* Step Card */}
          <div className="bg-white dark:bg-doc-dark-base border border-slate-200 dark:border-slate-800 rounded-xl p-6 space-y-3 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-lg bg-doc-ink text-doc-paper flex items-center justify-center font-serif font-bold text-base shrink-0">
                {currentStep.stepNumber}
              </span>
              <h4 className="font-serif font-bold text-xl text-doc-ink dark:text-slate-100">
                {t(currentStep.titleEn, currentStep.titleUr)}
              </h4>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-12 font-sans">
              {t(currentStep.detailEn, currentStep.detailUr)}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentStepIndex === 0}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-white dark:bg-doc-dark-base border border-slate-300 dark:border-slate-700 rounded-lg text-xs font-bold disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{t('Previous Step', 'پچھلا مرحلہ')}</span>
            </button>

            {isLastStep ? (
              <button
                onClick={() => setCurrentStepIndex(steps.length)}
                className="flex items-center gap-1.5 px-6 py-2.5 bg-doc-verified text-white rounded-lg text-xs font-bold hover:bg-doc-verified/90 transition shadow-md"
              >
                <span>{t('Finish Guide', 'عمل مکمل کریں')}</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setCurrentStepIndex((prev) => prev + 1)}
                className="flex items-center gap-1.5 px-6 py-2.5 bg-doc-seal text-white rounded-lg text-xs font-bold hover:bg-doc-seal/90 transition shadow-md"
              >
                <span>{t('Next Step', 'اگلا مرحلہ')}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Completion Card */
        <div className="text-center py-8 space-y-4 bg-white dark:bg-doc-dark-base border border-doc-verified/40 rounded-xl p-6">
          <div className="w-14 h-14 bg-doc-verified/15 text-doc-verified rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-serif font-bold text-2xl text-doc-ink dark:text-slate-100">
            {t('You Have Reviewed All Steps!', 'آپ تمام مراحل کا جائزہ لے چکے ہیں!')}
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
            {t(
              'Make sure you have all required original documents ready before visiting the official portal or office.',
              'دفتر جانے سے پہلے اپنے تمام ضروری اصل کاغذات ساتھ رکھنا نہ بھولیں۔'
            )}
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => setCurrentStepIndex(0)}
              className="flex items-center gap-2 px-5 py-2.5 bg-doc-ink text-white font-bold text-xs rounded-lg hover:bg-doc-ink/90 transition shadow-md"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t('Restart Wizard', 'دوبارہ دیکھیں')}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
