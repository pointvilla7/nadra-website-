'use client';

import React, { useState } from 'react';
import { Sparkles, BellRing, Smartphone, ShieldCheck, ArrowRight, CheckCircle2, Mail, Lock } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export const PremiumTrackerWaitlist: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setErrorMsg(t('Please enter a valid email address.', 'براہ کرم درست ای میل ایڈریس درج کریں۔'));
      return;
    }

    setIsSubmitting(true);

    // Simulate fast submission & store locally
    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('pih_pro_waitlist') || '[]');
        if (!existing.includes(email.trim())) {
          existing.push(email.trim());
          localStorage.setItem('pih_pro_waitlist', JSON.stringify(existing));
        }
      } catch {
        // Ignore
      }
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 450);
  };

  return (
    <section
      aria-label="Premium Tracker Waitlist"
      className="my-10 rounded-3xl border-2 border-doc-brass/40 bg-[#0B1120] text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden"
    >
      {/* Subtle Glow Background Elements */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        
        {/* Badge & Title */}
        <div className="space-y-2 text-center sm:text-start">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-doc-brass/20 text-doc-brass border border-doc-brass/40 text-xs font-mono font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('PRO UPGRADE TEASER', 'پریمیم فیچرز')}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-extrabold tracking-tight leading-tight">
            {t(
              'Pakistan Info Hub Pro: Priority Alerts & Automated Tracking',
              'پاکستان انفو ہب پرو: فوری ایس ایم ایس الرٹس اور لائیو ٹریکر'
            )}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-2xl leading-relaxed">
            {t(
              'Never miss a CNIC expiry, Passport delivery, FBR tax deadline, or challan fine. Get automated WhatsApp & SMS alerts the moment government records update.',
              'شناختی کارڈ، پاسپورٹ ڈلیوری، ٹوکن ٹیکس اور ایف بی آر ڈیڈ لائنز کے فوری واٹس ایپ و ایس ایم ایس الرٹس حاصل کریں۔'
            )}
          </p>
        </div>

        {/* 3 Premium Feature Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-doc-brass flex items-center justify-center shrink-0">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-serif font-bold text-white">
                {t('WhatsApp & SMS Alerts', 'واٹس ایپ و ایس ایم ایس الرٹس')}
              </h4>
              <p className="text-[11px] text-slate-400 font-sans mt-0.5">
                {t('Instant dispatch notifications for NADRA & DGIP.', 'درخواست پروسیسنگ کی فوری اطلاع۔')}
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <BellRing className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-serif font-bold text-white">
                {t('Expiry Radar', 'میعاد ختم ہونے سے قبل یاد دہانی')}
              </h4>
              <p className="text-[11px] text-slate-400 font-sans mt-0.5">
                {t('30-day advance warning for Driving License & Passports.', 'ڈرائیونگ لائسنس اور پاسپورٹ رینیول وارننگ۔')}
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-serif font-bold text-white">
                {t('Family Vault', 'فیملی ریکارڈز والٹ')}
              </h4>
              <p className="text-[11px] text-slate-400 font-sans mt-0.5">
                {t('Manage all household documents under one encrypted profile.', 'پورے خاندان کے کاغذات ایک جگہ محفوظ۔')}
              </p>
            </div>
          </div>
        </div>

        {/* Email Capture Form or Success State */}
        <div className="pt-2">
          {isSuccess ? (
            <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-fadeIn">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <h4 className="text-sm font-serif font-bold text-white">
                  {t("You're on the VIP Early Access List!", 'آپ کو وی آئی پی ارلی ایکسس لسٹ میں شامل کر لیا گیا ہے!')}
                </h4>
                <p className="text-xs text-emerald-300/80 font-sans mt-0.5">
                  {t(
                    "We'll notify you first when Pro Tracker launches with 3 months free trial.",
                    'پرو فیچرز لانچ ہونے پر آپ کو 3 ماہ کے لیے مفت رسائی کی اطلاع مل جائے گی۔'
                  )}
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2 max-w-xl">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('Enter your email for priority access...', 'ارلی ایکسس کے لیے ای میل درج کریں...')}
                    className="w-full h-12 pl-10 pr-4 rounded-xl bg-slate-900/90 border border-slate-700 text-sm font-sans text-white placeholder-slate-400 focus:outline-none focus:border-doc-brass transition"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 px-6 rounded-xl bg-doc-brass hover:bg-amber-600 active:scale-95 text-white text-xs font-bold font-sans flex items-center justify-center gap-2 transition-all shrink-0 disabled:opacity-50 shadow-md"
                >
                  <span>{isSubmitting ? t('Submitting...', 'شامل کیا جا رہا ہے...') : t('Join Pro Waitlist →', 'پرو ویٹ لسٹ جوائن کریں ←')}</span>
                </button>
              </div>

              {errorMsg && (
                <p className="text-xs text-rose-400 font-sans mt-1">{errorMsg}</p>
              )}

              <p className="text-[10px] text-slate-400 font-sans flex items-center gap-1">
                <Lock className="w-3 h-3 text-slate-500" />
                {t('Zero spam guarantee. Unsubscribe at any time.', 'ہم آپ کی پرائیویسی کا احترام کرتے ہیں۔ زیرو سپیم۔')}
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
