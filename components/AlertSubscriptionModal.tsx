'use client';

import React, { useState } from 'react';
import { Bell, CheckCircle2, MessageSquare, Mail, X, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

interface AlertSubscriptionModalProps {
  pageTitle?: string;
  categoryName?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const AlertSubscriptionModal: React.FC<AlertSubscriptionModalProps> = ({
  pageTitle = 'Government Schemes & Fee Schedules',
  categoryName = 'Updates',
  isOpen,
  onClose,
}) => {
  const { t } = useLanguage();
  const [method, setMethod] = useState<'whatsapp' | 'email'>('whatsapp');
  const [contactInput, setContactInput] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All Critical Updates');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInput.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-doc-paper dark:bg-doc-dark-card border-2 border-doc-brass/60 rounded-xl shadow-2xl max-w-lg w-full p-6 relative text-doc-ink dark:text-slate-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-doc-ink dark:hover:text-white transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-doc-verified/15 text-doc-verified rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold">
              {t('Subscription Verified & Active!', 'سبسکرپشن کامیابی سے فعال ہو گئی!')}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
              {t(
                `You will receive verified alerts for ${selectedTopic} via ${method.toUpperCase()} (${contactInput}) as soon as official updates are announced.`,
                `آپ کو آفیشل اپڈیٹس جاری ہوتے ہی ${method.toUpperCase()} پر بلا تاخیر الرٹس موصول ہوں گے۔`
              )}
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-doc-ink text-white font-bold text-xs rounded-lg hover:bg-doc-ink/90 transition shadow-md"
              >
                {t('Close Window', 'ونڈو بند کریں')}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-doc-brass/20 pb-3">
              <div className="p-2.5 bg-doc-seal/10 text-doc-seal rounded-lg shrink-0">
                <Bell className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg leading-snug">
                  {t('Get Real-Time Official Alerts', 'آفیشل اپڈیٹس الرٹ آن کریں')}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {t(`Never miss changes to: ${pageTitle}`, `تمام اہم تبدیلیوں سے باخبر رہیں`)}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {t(
                'Subscribe to get instant alerts whenever fee schedules, BISP 8171 payment dates, or govt loan application terms are verified by our editorial desk.',
                'بی ایس پی ادائیگیوں، پاسپورٹ فیس یا حکومتی سکیموں میں تبدیلی کی فوری تصدیق شدہ خبریں حاصل کریں۔'
              )}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Channel Selector */}
              <div>
                <label className="block text-[11px] font-mono text-doc-brass uppercase font-semibold mb-1.5">
                  {t('Select Notification Channel', 'نوٹیفکیشن ذریعہ کا انتخاب کریں')}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setMethod('whatsapp')}
                    className={`flex items-center justify-center gap-2 p-2.5 rounded-lg border text-xs font-semibold transition ${
                      method === 'whatsapp'
                        ? 'border-doc-seal bg-doc-seal/10 text-doc-seal'
                        : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-doc-dark-base text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMethod('email')}
                    className={`flex items-center justify-center gap-2 p-2.5 rounded-lg border text-xs font-semibold transition ${
                      method === 'email'
                        ? 'border-doc-seal bg-doc-seal/10 text-doc-seal'
                        : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-doc-dark-base text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Digest</span>
                  </button>
                </div>
              </div>

              {/* Input */}
              <div>
                <label className="block text-[11px] font-mono text-doc-brass uppercase font-semibold mb-1.5">
                  {method === 'whatsapp' ? t('WhatsApp Mobile Number', 'واٹس ایپ نمبر') : t('Email Address', 'ای میل ایڈریس')}
                </label>
                <input
                  type={method === 'whatsapp' ? 'tel' : 'email'}
                  required
                  placeholder={method === 'whatsapp' ? '0300 1234567' : 'user@gmail.com'}
                  value={contactInput}
                  onChange={(e) => setContactInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-white dark:bg-doc-dark-base border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-doc-seal"
                />
              </div>

              {/* Topic Select */}
              <div>
                <label className="block text-[11px] font-mono text-doc-brass uppercase font-semibold mb-1.5">
                  {t('Alert Frequency & Scope', 'الرٹ قسم')}
                </label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-white dark:bg-doc-dark-base border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-doc-seal"
                >
                  <option value="All Critical Updates">All Government & Civic Updates</option>
                  <option value="BISP & Welfare News">BISP 8171 & Welfare Payment News Only</option>
                  <option value="Passport & NADRA Fees">Passport & NADRA Fee Schedule Changes</option>
                  <option value="Govt Housing & Business Loans">Govt Loans & Housing Schemes</option>
                </select>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                <ShieldCheck className="w-4 h-4 text-doc-verified shrink-0" />
                <span>
                  {t(
                    'No spam guaranteed. We only dispatch verified alerts backed by official government notices.',
                    'ہم کسی قسم کا سپیم نہیں بھیجتے۔ صرف آفیشل نوٹیفکیشن جاری ہونے پر ہی الرٹ بھیجا جاتا ہے۔'
                  )}
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-doc-seal text-white font-bold text-xs rounded-lg hover:bg-doc-seal/90 transition shadow-md uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Bell className="w-4 h-4" />
                <span>{t('Activate Verified Alerts', 'الرٹس فعال کریں')}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
