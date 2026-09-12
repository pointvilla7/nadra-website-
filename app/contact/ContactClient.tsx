'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const breadcrumbs = [{ nameEn: 'Contact Us', nameUr: 'رابطہ فارم' }];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-3xl mx-auto">
      <Breadcrumbs items={breadcrumbs} />

      <header className="rounded-3xl glass-card border border-emerald-500/30 p-8 text-center space-y-3 bg-gradient-to-br from-emerald-950 to-slate-950 text-white">
        <div className="inline-flex p-3 rounded-2xl bg-emerald-500/20 text-emerald-400">
          <MessageSquare className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-extrabold">{t('Contact Pakistan Info Hub', 'ہم سے رابطہ کریں')}</h1>
        <p className="text-sm text-slate-300">
          {t('Have a question, feedback, or content update request?', 'کوئی سوال، تجاویز یا معلوماتی اصلاح بھیجیں')}
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-doc-paper dark:bg-doc-dark-card border border-doc-brass/30 flex items-center gap-3">
          <div className="p-3 rounded-xl bg-doc-seal text-white shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold text-doc-brass uppercase block">
              {t('Official Email', 'آفیشل ای میل', 'Official Email')}
            </span>
            <a
              href="mailto:pakistaninfohub1@gmail.com"
              className="text-xs font-bold text-doc-ink dark:text-white hover:text-doc-seal transition"
            >
              pakistaninfohub1@gmail.com
            </a>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-doc-paper dark:bg-doc-dark-card border border-doc-brass/30 flex items-center gap-3">
          <div className="p-3 rounded-xl bg-emerald-700 text-white shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold text-doc-brass uppercase block">
              {t('Headquarters Location', 'دفتر کا پتہ', 'Location')}
            </span>
            <span className="text-xs font-bold text-doc-ink dark:text-white leading-tight block">
              Blue Area, Sector G-7/2, Islamabad
            </span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-doc-paper dark:bg-doc-dark-card border border-doc-brass/30 flex items-center gap-3">
          <div className="p-3 rounded-xl bg-doc-ink text-doc-brass shrink-0">
            <Send className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold text-doc-brass uppercase block">
              {t('Editorial & Fact-Check Desk', 'ایڈیٹوریل ہیلپ لائن', 'Helpline')}
            </span>
            <a
              href="tel:+92518439200"
              className="text-xs font-bold text-doc-ink dark:text-white hover:text-doc-seal transition"
            >
              +92 (51) 843-9200
            </a>
          </div>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800">
        {submitted ? (
          <div className="py-12 text-center space-y-3 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-500" />
            <h3 className="text-xl font-bold">{t('Thank You! Message Received.', 'شکریہ! آپ کا پیغام موصول ہو گیا ہے۔')}</h3>
            <p className="text-xs text-slate-500">
              {t('Our editorial team will review your query shortly.', 'ہماری ٹیم جلد آپ سے رابطہ کرے گی۔')}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                {t('Your Full Name', 'آپ کا پورا نام')}
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                {t('Email Address', 'ای میل ایڈریس')}
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                {t('Message / Inquiry', 'پیغام')}
              </label>
              <textarea
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl bg-doc-seal hover:bg-doc-seal/90 text-white font-bold text-sm flex items-center justify-center gap-2 transition shadow-md"
            >
              <Send className="w-4 h-4 text-doc-paper" />
              <span>{t('Send Message', 'پیغام بھیجیں')}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
