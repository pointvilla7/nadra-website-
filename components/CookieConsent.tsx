'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export const CookieConsent: React.FC = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('pih_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('pih_cookie_consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-slideUp">
      <div className="glass-card rounded-2xl p-4 shadow-2xl border border-emerald-500/30 flex items-start gap-3 bg-slate-900/95 text-white">
        <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div className="flex-1 text-xs space-y-1.5">
          <h4 className="font-bold text-slate-100">
            {t('Privacy & Cookie Notice', 'پرائیویسی اور کوکی نوٹس')}
          </h4>
          <p className="text-slate-300 leading-relaxed">
            {t(
              'We use cookies to analyze web traffic and deliver optimal bilingual user experience. No personal identification data is collected.',
              'ہم پورٹل کی بہتر کارکردگی کے لیے کوکیز کا استعمال کرتے ہیں۔'
            )}
          </p>
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={handleAccept}
              className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition"
            >
              {t('Accept & Continue', 'منظور ہے')}
            </button>
          </div>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="p-1 rounded-full text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
