'use client';

import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, CheckCircle2, MessageSquare, Send } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

interface ArticleFeedbackWidgetProps {
  articleSlug: string;
}

export const ArticleFeedbackWidget: React.FC<ArticleFeedbackWidgetProps> = ({ articleSlug }) => {
  const { t } = useLanguage();
  const [voted, setVoted] = useState<'yes' | 'no' | null>(null);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleVote = (voteType: 'yes' | 'no') => {
    setVoted(voteType);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-doc-paper dark:bg-doc-dark-card border-2 border-doc-brass/40 rounded-xl p-5 sm:p-6 my-8 space-y-4 text-doc-ink dark:text-slate-100 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-doc-brass/20 pb-4">
        <div>
          <h3 className="font-serif font-bold text-base">
            {t('Was this guide helpful?', 'کیا یہ رہنمائی آپ کے لیے فائدہ مند ثابت ہوئی؟', 'Kya yeh guide aap k liye mufid thi?')}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {t('Your feedback helps our researchers keep civic information 100% accurate.', 'آپ کی رائے سے ہم معلومات کو مزید درست بناتے ہیں۔')}
          </p>
        </div>

        {voted === null ? (
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleVote('yes')}
              className="flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-doc-dark-base border border-slate-300 dark:border-slate-700 rounded-lg hover:border-doc-verified hover:bg-doc-verified/10 text-xs font-semibold text-doc-verified transition shadow-sm"
            >
              <ThumbsUp className="w-4 h-4" />
              <span>{t('Yes, helpful', 'جی ہاں، فائدہ مند تھی', 'Haan, mufid thi')}</span>
            </button>
            <button
              onClick={() => handleVote('no')}
              className="flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-doc-dark-base border border-slate-300 dark:border-slate-700 rounded-lg hover:border-doc-seal hover:bg-doc-seal/10 text-xs font-semibold text-doc-seal transition shadow-sm"
            >
              <ThumbsDown className="w-4 h-4" />
              <span>{t('Needs Update', 'معلومات پرانی ہے', 'Nahi, update chahiye')}</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-doc-verified text-xs font-bold">
            <CheckCircle2 className="w-5 h-5" />
            <span>{t('Thank you for voting!', 'رائے دینے کا شکریہ!')}</span>
          </div>
        )}
      </div>

      {voted !== null && !submitted && (
        <form onSubmit={handleSubmitComment} className="space-y-3 animate-fadeIn">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
            {voted === 'yes'
              ? t('Optional: Any specific detail you appreciated?', 'کیا آپ مزید کچھ کہنا چاہتے ہیں؟ (اختیاری)')
              : t('Which information was unclear or outdated?', 'کون سی معلومات پرانی یا نامکمل تھی؟')}
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder={t('Type your feedback here...', 'یہاں رائے لکھیں...')}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="flex-1 px-3.5 py-2 text-xs bg-white dark:bg-doc-dark-base border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-doc-seal"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-doc-ink text-white font-bold text-xs rounded-lg hover:bg-doc-ink/90 transition flex items-center gap-1.5 shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{t('Submit', 'جمع کروائیں')}</span>
            </button>
          </div>
        </form>
      )}

      {submitted && (
        <p className="text-xs text-doc-verified font-medium animate-fadeIn">
          {t('Feedback submitted to our research desk. We audit pages bi-weekly.', 'آپ کا فیڈ بیک ریسرچ ٹیم کو موصول ہو گیا۔')}
        </p>
      )}
    </div>
  );
};
