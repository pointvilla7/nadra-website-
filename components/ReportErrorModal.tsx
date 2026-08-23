'use client';

import React, { useState } from 'react';
import { Flag, X, CheckCircle2, AlertTriangle, Send } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { submitErrorReport } from '@/lib/utils/feedbackStore';

interface ReportErrorModalProps {
  slug: string;
  articleTitle: string;
  category: string;
}

export const ReportErrorModal: React.FC<ReportErrorModalProps> = ({
  slug,
  articleTitle,
  category,
}) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [issueType, setIssueType] = useState('fee_update');
  const [description, setDescription] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    const pageUrl = typeof window !== 'undefined' ? window.location.href : `/${category}/${slug}`;
    submitErrorReport(slug, pageUrl, category, `[${issueType}] ${description.trim()}`, userEmail);

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      setDescription('');
      setUserEmail('');
    }, 2400);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-sans font-medium transition shadow-2xs"
      >
        <Flag className="w-3.5 h-3.5 text-doc-seal" />
        <span>{t('Report an Error / Outdated Info', 'غلطی یا پرانی معلومات کی نشاندہی کریں')}</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Report an Error Modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <h3 className="font-serif font-bold text-base sm:text-lg">
                  {t('Report Outdated or Incorrect Information', 'معلومات کی درستگی کی نشاندہی')}
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Page Context */}
            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-0.5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                {t('Reporting for guide:', 'متعلقہ گائیڈ:')}
              </span>
              <p className="font-serif font-bold truncate">{articleTitle}</p>
            </div>

            {isSubmitted ? (
              <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-center space-y-2 animate-fadeIn">
                <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                <h4 className="font-serif font-bold text-sm">
                  {t('Thank you for helping keep civic data accurate!', 'شکریہ! رپورٹ موصول ہو گئی۔')}
                </h4>
                <p className="text-xs text-emerald-700 dark:text-emerald-400/90 font-sans">
                  {t(
                    'Our editorial desk reviews reports within 24 hours against official Gazette notifications.',
                    'ہماری ریسرچ ٹیم 24 گھنٹے میں سرکاری گزٹ سے تصدیق کر کے اپڈیٹ کر دے گی۔'
                  )}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Issue Type Select */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {t('What is the issue?', 'مسئلہ کی نوعیت کیا ہے؟')}
                  </label>
                  <select
                    value={issueType}
                    onChange={(e) => setIssueType(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-sans text-slate-900 dark:text-white focus:outline-none focus:border-doc-brass"
                  >
                    <option value="fee_update">{t('Government fee has changed', 'سرکاری فیس تبدیل ہو گئی ہے')}</option>
                    <option value="step_change">{t('Procedure/document requirements modified', 'طریقہ کار یا کاغذات میں تبدیلی ہوئی ہے')}</option>
                    <option value="link_broken">{t('Official portal link is broken/offline', 'سرکاری ویب سائٹ کا لنک کام نہیں کر رہا')}</option>
                    <option value="other">{t('Other editorial issue', 'دیگر مسئلہ')}</option>
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {t('Please describe the correction (and cite official notification if known):', 'درستگی کی تفصیل درج کریں:')}
                  </label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={t('e.g. New passport urgent fee is now PKR 5,000 according to August 2026 notification...', 'مثال: اگست 2026 کے نوٹیفکیشن کے مطابق نئی فیس...')}
                    required
                    className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-sans text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-doc-brass resize-none"
                  />
                </div>

                {/* Optional Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                    {t('Your Email (Optional, if you want confirmation of update):', 'ای میل (اختیاری، تصدیقی اطلاع کے لیے):')}
                  </label>
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="citizen@example.com"
                    className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-sans text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-doc-brass"
                  />
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                  >
                    {t('Cancel', 'کینسل')}
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-doc-ink dark:bg-doc-brass hover:bg-doc-brass dark:hover:bg-amber-600 text-white text-xs font-bold font-sans flex items-center gap-1.5 transition shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t('Submit Report', 'رپورٹ بھیجیں')}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
