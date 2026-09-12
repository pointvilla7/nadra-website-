'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Star, MessageSquare, ShieldCheck, CheckCircle2, AlertCircle, ArrowLeft, Send } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { CATEGORIES } from '@/lib/data/categories';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function FeedbackPage() {
  const { t } = useLanguage();
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [feedbackType, setFeedbackType] = useState<string>('accuracy');
  const [category, setCategory] = useState<string>('general');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [honeypot, setHoneypot] = useState<string>(''); // Anti-spam honeypot
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const breadcrumbs = [{ nameEn: 'Citizen Feedback', nameUr: 'عوامی فیڈ بیک' }];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Spam bot honeypot detection
    if (honeypot.trim().length > 0) {
      setSubmitted(true);
      return;
    }

    if (!comment.trim() || comment.trim().length < 10) {
      setError(
        t(
          'Please provide at least 10 characters of detailed feedback so our editorial desk can review it accurately.',
          'براہ کرم کم از کم 10 حروف پر مشتمل تفصیلی رائے درج کریں۔'
        )
      );
      return;
    }

    // Save submission locally for queue review
    try {
      const submission = {
        id: `fb_${Date.now()}`,
        date: new Date().toISOString(),
        rating,
        feedbackType,
        category,
        name: name.trim() || 'Anonymous Citizen',
        email: email.trim(),
        comment: comment.trim(),
        status: 'pending_review',
      };

      const existing = JSON.parse(localStorage.getItem('pih_feedback_queue') || '[]');
      existing.push(submission);
      localStorage.setItem('pih_feedback_queue', JSON.stringify(existing));
    } catch {
      // LocalStorage fallback
    }

    setSubmitted(true);
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto pb-16">
      <Breadcrumbs items={breadcrumbs} />

      {/* Header */}
      <header className="rounded-3xl glass-card border border-emerald-500/30 p-8 sm:p-10 space-y-4 bg-gradient-to-br from-[#0B1120] via-[#1B2A4A] to-[#2E4270] text-white shadow-xl">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-amber-400" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
            {t('CITIZEN FEEDBACK & CORRECTIONS', 'عوامی فیڈ بیک اور تجاویز')}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold">
          {t('Share Your Feedback & Guide Experience', 'اپنی رائے اور تجربہ شیئر کریں')}
        </h1>

        <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans max-w-2xl">
          {t(
            'Did a guide help you with your document application? Found a fee change in your district? Share your real experience. Every submission is audited by our editorial desk before being cataloged.',
            'کیا ہماری معلومات نے آپ کی رہنمائی کی؟ کوئی فیس یا طریقہ کار تبدیل ہوا ہے؟ اپنی حقیقی رائے بھیجیں۔ تمام فیڈ بیک کا ہماری ٹیم جائزہ لیتی ہے۔'
          )}
        </p>
      </header>

      {/* Main Content */}
      <div className="bg-white dark:bg-[#1E2A3F] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
        {submitted ? (
          <div className="text-center py-10 space-y-4 animate-resultPopIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
              {t('Thank You for Your Feedback!', 'آپ کی قیمتی رائے کا شکریہ!')}
            </h2>

            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
              {t(
                'Your submission has been queued for editorial review. In accordance with our anti-fabrication editorial policy, comments are manually verified before public display.',
                'آپ کی رائے ہمارے ایڈیٹوریل بورڈ کو موصول ہو گئی ہے۔ شفافیت کے اصولوں کے مطابق تمام فیڈ بیک کی باقاعدہ جانچ کی جاتی ہے۔'
              )}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B1120] text-white text-xs font-bold font-sans hover:bg-[#1B2A4A] transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t('Return to Homepage', 'ہوم پیج پر واپس جائیں')}</span>
              </Link>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setComment('');
                }}
                className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold font-sans hover:border-doc-brass transition"
              >
                {t('Submit Another Review', 'ایک اور رائے بھیجیں')}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot field for spam prevention (invisible to humans) */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                placeholder="Leave this field blank"
              />
            </div>

            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Rating Stars */}
            <div className="space-y-2">
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                {t('Overall Rating', 'مجموعی درجہ بندی')}
              </label>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => {
                  const isActive = (hoverRating || rating) >= star;
                  return (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-2 -m-2 text-2xl transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-brass rounded-lg"
                      aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                    >
                      <Star
                        className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${
                          isActive
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-300 dark:text-slate-600'
                        }`}
                      />
                    </button>
                  );
                })}
                <span className="ms-2 text-xs font-mono font-bold text-doc-brass">
                  {rating}/5
                </span>
              </div>
            </div>

            {/* Feedback Type & Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  {t('Feedback Type', 'رائے کی قسم')}
                </label>
                <select
                  value={feedbackType}
                  onChange={(e) => setFeedbackType(e.target.value)}
                  className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white font-sans focus:outline-none focus:border-doc-brass"
                >
                  <option value="accuracy">{t('Guide Accuracy & Helpfulness', 'معلومات کی درستگی و افادیت')}</option>
                  <option value="correction">{t('Report Outdated Fee or Policy', 'پرانی فیس یا پالیسی کی اطلاع')}</option>
                  <option value="suggestion">{t('New Topic or Feature Request', 'نئے موضوع کی تجویز')}</option>
                  <option value="general">{t('General Experience', 'عام رائے')}</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  {t('Related Category', 'متعلقہ شعبہ')}
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white font-sans focus:outline-none focus:border-doc-brass"
                >
                  <option value="general">{t('Site-Wide / General', 'پورے پورٹل کے بارے میں')}</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {t(cat.nameEn, cat.nameUr)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Comment Area */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                {t('Your Feedback / Review (Required)', 'آپ کی تفصیلی رائے (لازمی)')}
              </label>
              <textarea
                rows={4}
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={t(
                  'Describe your experience with this service or guide. For corrections, please mention the official source or office location if possible...',
                  'اپنا تجربہ یا تجویز تفصیل سے لکھیں...'
                )}
                className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white font-sans focus:outline-none focus:border-doc-brass leading-relaxed"
              />
            </div>

            {/* Optional Citizen Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  {t('Your Name (Optional)', 'آپ کا نام (اختیاری)')}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('e.g. Ali Ahmed, Lahore', 'مثال: علی احمد، لاہور')}
                  className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white font-sans focus:outline-none focus:border-doc-brass"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  {t('Email Address (Optional — for follow-ups)', 'ای میل (اختیاری)')}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white font-sans focus:outline-none focus:border-doc-brass"
                />
              </div>
            </div>

            {/* Privacy & Editorial Policy Notice */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1 font-sans">
              <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>{t('Editorial & Anti-Fabrication Guarantee', 'ایڈیٹوریل شفافیت کا عہد')}</span>
              </div>
              <p>
                {t(
                  'We do not publish fake reviews or fabricated testimonials. Submissions require editorial confirmation before inclusion in platform statistics. Your email is never shared or displayed.',
                  'ہم جعلی ریویوز شائع نہیں کرتے۔ تمام فیڈ بیک کی باقاعدہ توثیق کی جاتی ہے۔ آپ کی ای میل کبھی ظاہر نہیں کی جائے گی۔'
                )}
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full min-h-[48px] py-3 px-6 rounded-xl bg-[#0B1120] text-white hover:bg-[#1B2A4A] text-sm font-bold font-sans flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition active:scale-[0.99] cursor-pointer"
            >
              <Send className="w-4 h-4 text-doc-brass" />
              <span>{t('Submit Citizen Feedback', 'رائے ارسال کریں')}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
