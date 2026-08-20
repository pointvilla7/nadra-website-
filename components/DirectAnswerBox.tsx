'use client';

import React from 'react';
import { ShieldCheck, Copy, Check, Zap } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { TextToSpeechButton } from './TextToSpeechButton';

interface DirectAnswerBoxProps {
  answerEn: string;
  answerUr: string;
  topicTitleEn?: string;
  topicTitleUr?: string;
}

export const DirectAnswerBox: React.FC<DirectAnswerBoxProps> = ({
  answerEn,
  answerUr,
  topicTitleEn,
  topicTitleUr,
}) => {
  const { t } = useLanguage();
  const [copied, setCopied] = React.useState(false);

  const currentAnswer = t(answerEn, answerUr);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentAnswer);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      aria-label="Direct Answer Summary"
      className="answer-box relative overflow-hidden rounded-2xl bg-doc-ink text-white p-6 shadow-xl border-2 border-doc-brass/40 my-6 space-y-4"
    >
      {/* Decorative Stamp Watermark */}
      <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 rounded-full border-4 border-dashed border-doc-brass/20 pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-doc-brass/30 pb-3">
        <div className="flex items-center gap-2">
          <div className="px-2.5 py-0.5 rounded bg-doc-seal text-white font-mono text-[10px] font-bold tracking-widest uppercase flex items-center gap-1">
            <Zap className="w-3 h-3 fill-current" />
            <span>{t('In Short', 'مختصر خلاصہ', 'Mukhtasar Khulasa')}</span>
          </div>
          <span className="text-xs uppercase font-extrabold tracking-wider text-doc-brass font-mono">
            {t('Verified Summary', 'مجموعی خلاصہ و فوری جواب', 'Verified Summary')}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Read Aloud Button */}
          <TextToSpeechButton textToRead={currentAnswer} title={topicTitleEn ? t(topicTitleEn, topicTitleUr) : undefined} />

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1.5 rounded bg-slate-800 hover:bg-slate-700 border border-doc-brass/40 text-doc-paper transition"
            title="Copy Answer Summary"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span>{t('Copied!', 'کاپی ہو گیا!', 'Copied!')}</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-doc-brass" />
                <span>{t('Copy Answer', 'کاپی کریں', 'Copy')}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Core Answer Content */}
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-6 h-6 text-doc-brass shrink-0 mt-0.5" />
        <div className="space-y-1">
          {topicTitleEn && (
            <h3 className="text-sm sm:text-base font-serif font-extrabold text-doc-brass tracking-wide mb-1 leading-snug">
              {t(`How to Check or Verify: ${topicTitleEn}`, `${topicTitleUr} کو کیسے چیک اور تصدیق کریں؟`)}
            </h3>
          )}
          <p className="text-sm md:text-base font-medium text-slate-100 leading-relaxed">
            {currentAnswer}
          </p>
        </div>
      </div>
    </section>
  );
};
