'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  BellRing,
  ArrowRight,
  Sparkles,
  Smartphone,
  Lock,
  ExternalLink,
  Check,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { ALERT_TOPICS } from '@/lib/data/alerts';

export const WhatsAppAlertSignupForm: React.FC = () => {
  const { t } = useLanguage();
  const [phoneNumber, setPhoneNumber] = useState('+92 ');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([
    'cnic_status',
    'passport_ready',
    'tax_deadlines',
  ]);
  const [hasConsent, setHasConsent] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successData, setSuccessData] = useState<{
    phone: string;
    subscribedCategories: string[];
    managementUrl: string;
  } | null>(null);

  const toggleTopic = (id: string) => {
    setSelectedTopics((prev) =>
      prev.includes(id) ? prev.filter((tId) => tId !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selectedTopics.length === ALERT_TOPICS.length) {
      setSelectedTopics([]);
    } else {
      setSelectedTopics(ALERT_TOPICS.map((t) => t.id));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Format phone
    const cleaned = phoneNumber.replace(/[^0-9+]/g, '');
    const isValid = /^(\+92|0)?3[0-9]{9}$/.test(cleaned.replace('+', ''));

    if (!isValid) {
      setErrorMsg(
        t(
          'Please enter a valid Pakistani mobile number (e.g., +92 300 1234567 or 0300 1234567).',
          'براہ کرم درست پاکستانی موبائل نمبر درج کریں (مثال: 03001234567)'
        )
      );
      return;
    }

    if (selectedTopics.length === 0) {
      setErrorMsg(t('Please select at least one alert category topic.', 'براہ کرم کم از کم ایک الرٹ کیٹیگری منتخب کریں۔'));
      return;
    }

    if (!hasConsent) {
      setErrorMsg(t('Please accept the consent agreement to continue.', 'براہ کرم شرائط و پرائیویسی کو تسلیم کریں۔'));
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/alerts/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: phoneNumber,
          categories: selectedTopics,
          consent: hasConsent,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to activate subscription.');
      }

      // Save locally as well for offline dashboard lookup
      try {
        localStorage.setItem(
          `pih_active_alerts_${data.phone}`,
          JSON.stringify({
            phone: data.phone,
            categories: selectedTopics,
            subscribedAt: new Date().toISOString(),
          })
        );
      } catch {
        // Ignore
      }

      setSuccessData(data);
    } catch (err: any) {
      setErrorMsg(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl border-2 border-doc-brass/40 bg-[#FAF9F6] dark:bg-[#1E2A3F] p-6 sm:p-10 shadow-lg space-y-8">
      {/* Header */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold uppercase tracking-wider">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>{t('OFFICIAL SERVICE NOTIFICATIONS', 'آفیشل واٹس ایپ الرٹس')}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-slate-900 dark:text-white leading-tight">
          {t(
            'Instant WhatsApp & SMS Alerts for Government Services',
            'نادرا، پاسپورٹ اور ٹیکس کے فوری واٹس ایپ و ایس ایم ایس الرٹس'
          )}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans max-w-2xl leading-relaxed">
          {t(
            'Get direct verified notifications the moment your CNIC or Passport is dispatched, tax deadlines approach, or BISP quarterly payments are released.',
            'شناختی کارڈ و پاسپورٹ پرنٹنگ، انکم ٹیکس ڈیڈ لائنز اور بینظیر کفالت ادائیگیوں کے فوری تصدیق شدہ نوٹیفکیشنز حاصل کریں۔'
          )}
        </p>
      </div>

      {successData ? (
        /* Confirmation State */
        <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border-2 border-emerald-500/40 space-y-6 animate-fadeIn">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 dark:text-white">
                {t('WhatsApp Alerts Successfully Activated!', 'واٹس ایپ الرٹس کامیابی سے فعال ہو گئے!')}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 font-sans mt-1">
                {t('Subscribed Phone:', 'رجسٹرڈ موبائل نمبر:')}{' '}
                <span className="font-mono font-bold">{successData.phone}</span>
              </p>
            </div>
          </div>

          {/* Sample WhatsApp Dispatch Preview */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-sans text-xs space-y-2 text-slate-700 dark:text-slate-300">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2 text-[10px] font-mono text-slate-400">
              <span>WhatsApp Message Dispatch Preview</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓ Sent</span>
            </div>
            <p className="font-medium leading-relaxed">
              🔔 <strong>Pakistan Info Hub Verified Alert Service:</strong> You are now subscribed to verified civic alerts for{' '}
              <em>{successData.subscribedCategories.join(', ')}</em>.
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800">
              🛑 <em>Unsubscribe instruction:</em> Reply <strong>STOP</strong> at any time or manage active topics at:{' '}
              <a
                href={successData.managementUrl}
                className="text-doc-brass underline font-mono break-all"
              >
                {successData.managementUrl}
              </a>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Link
              href={`/alerts/manage?phone=${encodeURIComponent(successData.phone)}`}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-doc-brass text-white text-xs font-bold font-sans flex items-center justify-center gap-2 hover:bg-doc-brass transition shadow-sm"
            >
              <span>{t('Manage Active Subscriptions →', 'سبسکرپشن مینیج کریں ←')}</span>
            </Link>

            <button
              onClick={() => setSuccessData(null)}
              className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white underline"
            >
              {t('Register Another Number', 'نیا نمبر رجسٹر کریں')}
            </button>
          </div>
        </div>
      ) : (
        /* Signup Form */
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Phone Number Input */}
          <div className="space-y-2">
            <label className="block text-xs font-bold font-serif text-slate-800 dark:text-slate-200">
              {t('1. Enter Your WhatsApp / SMS Mobile Number:', '1. اپنا واٹس ایپ یا موبائل نمبر درج کریں:')}
            </label>
            <div className="relative max-w-md">
              <Smartphone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                inputMode="numeric"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+92 300 1234567"
                required
                className="w-full h-12 pl-10 pr-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:border-doc-brass transition shadow-2xs"
              />
            </div>
            <span className="text-[11px] text-slate-400 font-sans block">
              {t('Pakistani mobile format: +92 3XX XXXXXXX or 03XX XXXXXXX', 'پاکستانی نمبر فارمیٹ: 03001234567')}
            </span>
          </div>

          {/* Multi-Select Category Checkboxes */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold font-serif text-slate-800 dark:text-slate-200">
                {t('2. Select Alert Topics You Wish to Receive:', '2. مطلوبہ الرٹ کیٹیگریز منتخب کریں:')}
              </label>

              <button
                type="button"
                onClick={selectAll}
                className="text-xs font-mono text-doc-brass hover:underline"
              >
                {selectedTopics.length === ALERT_TOPICS.length
                  ? t('Deselect All', 'تمام غیر منتخب کریں')
                  : t('Select All Topics', 'تمام منتخب کریں')}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {ALERT_TOPICS.map((topic) => {
                const isSelected = selectedTopics.includes(topic.id);
                return (
                  <div
                    key={topic.id}
                    onClick={() => toggleTopic(topic.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-150 flex items-start justify-between gap-3 ${
                      isSelected
                        ? 'border-doc-brass bg-amber-500/10 dark:bg-amber-500/15 shadow-sm'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-slate-300'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase text-doc-brass bg-amber-500/15 px-2 py-0.5 rounded">
                          {topic.badge}
                        </span>
                        <span className="text-[10px] font-sans text-slate-400">{topic.frequency}</span>
                      </div>
                      <h4 className="text-xs font-serif font-bold text-slate-900 dark:text-white leading-snug">
                        {t(topic.titleEn, topic.titleUr)}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                        {t(topic.descriptionEn, topic.descriptionUr)}
                      </p>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-1 transition ${
                        isSelected
                          ? 'bg-doc-brass border-doc-brass text-white'
                          : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 space-y-2">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={hasConsent}
                onChange={(e) => setHasConsent(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded text-doc-brass focus:ring-doc-brass"
              />
              <span className="text-xs text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                {t(
                  'I agree to receive official civic service updates via WhatsApp/SMS. I understand I can unsubscribe anytime by replying STOP or via the online dashboard.',
                  'میں واٹس ایپ و ایس ایم ایس پر آفیشل سروس نوٹیفکیشنز وصول کرنے کی اجازت دیتا ہوں۔ کسی بھی وقت STOP لکھ کر منسوخ کیا جا سکتا ہے۔'
                )}
              </span>
            </label>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-sans">
              {errorMsg}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto h-12 px-8 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold font-sans flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-50"
          >
            <MessageSquare className="w-4 h-4" />
            <span>
              {isSubmitting
                ? t('Activating Subscription...', 'فعال کیا جا رہا ہے...')
                : t('Activate WhatsApp Alerts Free →', 'مفت واٹس ایپ الرٹس آن کریں ←')}
            </span>
          </button>
        </form>
      )}
    </div>
  );
};
