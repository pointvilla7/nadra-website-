'use client';

import React, { useState, useEffect } from 'react';
import { X, Mail, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

const POPUP_STORAGE_KEY = 'pih_newsletter_dismissed';
const FREQUENCY_CAP_MS = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

export const NewsletterExitPopup: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Check frequency cap
  useEffect(() => {
    try {
      const dismissedAt = localStorage.getItem(POPUP_STORAGE_KEY);
      if (dismissedAt) {
        const lastTime = parseInt(dismissedAt, 10);
        if (Date.now() - lastTime < FREQUENCY_CAP_MS) {
          return; // Frequency capped
        }
      }
    } catch {
      // Ignore
    }

    // 1. Desktop: Exit intent trigger (mouse moves out of viewport top)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        triggerPopup();
      }
    };

    // 2. Mobile: Scroll depth trigger (after 50% scroll)
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal > 0) {
        const currentScroll = window.scrollY;
        if (currentScroll / scrollTotal >= 0.5) {
          triggerPopup();
        }
      }
    };

    const triggerPopup = () => {
      setIsVisible((prev) => {
        if (!prev) {
          window.removeEventListener('scroll', handleScroll);
          document.removeEventListener('mouseleave', handleMouseLeave);
          return true;
        }
        return prev;
      });
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      localStorage.setItem(POPUP_STORAGE_KEY, Date.now().toString());
    } catch {
      // Ignore
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setErrorMsg(t('Please enter a valid email address.', 'براہ کرم درست ای میل ایڈریس درج کریں۔'));
      return;
    }

    try {
      const existing = JSON.parse(localStorage.getItem('pih_newsletter_subscribers') || '[]');
      if (!existing.includes(email.trim())) {
        existing.push(email.trim());
        localStorage.setItem('pih_newsletter_subscribers', JSON.stringify(existing));
      }
      localStorage.setItem(POPUP_STORAGE_KEY, (Date.now() + 30 * 24 * 60 * 60 * 1000).toString()); // Capped for 30 days after signup
    } catch {
      // Ignore
    }

    setIsSuccess(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 2800);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Civic Gazette Newsletter"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={handleDismiss}
    >
      <div
        className="w-full max-w-lg rounded-3xl border border-doc-brass/40 bg-[#0B1120] text-white p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition"
          aria-label="Close newsletter popup"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="space-y-2 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-doc-brass/20 text-doc-brass border border-doc-brass/30 text-[11px] font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('FREE 2026 CIVIC GAZETTE', 'مفت گزٹ الرٹس')}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-extrabold tracking-tight text-white leading-tight">
            {t(
              'Stay Ahead of Government Fee & Rule Changes',
              'سرکاری فیسوں اور پالیسی میں تبدیلیوں سے باخبر رہیں'
            )}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            {t(
              'Get weekly digest of newly published Gazette notifications, NADRA directives, e-Passport fee updates, and tax deadlines directly in your inbox.',
              'نادرا، پاسپورٹ اور ٹیکس سے متعلق تازہ ترین سرکاری نوٹیفکیشنز کا ہفتہ وار خلاصہ مفت حاصل کریں۔'
            )}
          </p>
        </div>

        {/* Form or Confirmation */}
        {isSuccess ? (
          <div className="p-4 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-fadeIn">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <h4 className="text-sm font-serif font-bold text-white">
                {t('Subscribed Successfully!', 'آپ کی سبسکرپشن مکمل ہو گئی ہے!')}
              </h4>
              <p className="text-xs text-emerald-300/80 font-sans mt-0.5">
                {t("You'll receive the next Gazette digest every Sunday.", 'اگلا گزٹ خلاصہ اتوار کو موصول ہوگا۔')}
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('Enter your email address...', 'اپنا ای میل درج کریں...')}
                  className="w-full h-11 pl-10 pr-4 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm font-sans text-white placeholder-slate-400 focus:outline-none focus:border-doc-brass transition"
                  required
                />
              </div>

              <button
                type="submit"
                className="h-11 px-5 rounded-xl bg-doc-brass hover:bg-amber-600 active:scale-95 text-white text-xs font-bold font-sans flex items-center justify-center gap-1.5 transition-all shrink-0 shadow-md"
              >
                <span>{t('Subscribe Free', 'مفت سبسکرائب کریں')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {errorMsg && <p className="text-xs text-rose-400 font-sans">{errorMsg}</p>}

            <div className="flex items-center justify-between text-[10px] text-slate-400 font-sans pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                {t('No spam, unsubscribe with 1-click.', 'کوئی سپیم نہیں۔ کسی بھی وقت کینسل کریں۔')}
              </span>
              <button
                type="button"
                onClick={handleDismiss}
                className="text-slate-400 hover:text-slate-200 underline"
              >
                {t('No thanks', 'شکریہ، پھر کبھی')}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
