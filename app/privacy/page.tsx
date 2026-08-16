'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function PrivacyPage() {
  const { t } = useLanguage();
  const breadcrumbs = [{ nameEn: 'Privacy Policy', nameUr: 'پرائیویسی پالیسی' }];

  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto text-slate-800 dark:text-slate-200">
      <Breadcrumbs items={breadcrumbs} />

      <header className="rounded-3xl glass-card border border-emerald-500/30 p-8 space-y-3 bg-gradient-to-br from-slate-900 to-emerald-950 text-white">
        <ShieldCheck className="w-8 h-8 text-emerald-400" />
        <h1 className="text-3xl font-extrabold">{t('Privacy Policy', 'پرائیویسی پالیسی')}</h1>
        <p className="text-xs text-slate-300">Effective Date: August 10, 2026</p>
      </header>

      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 space-y-4 text-sm leading-relaxed">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Information Collection</h2>
        <p>
          PakistanInfoHub.com does not require user registration or collection of personally identifiable information (PII) to access public information guides. Any reference numbers entered in utility bill tools remain client-side or transient for querying official servers.
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Analytics & Cookies</h2>
        <p>
          We use Google Analytics 4 (GA4) and standard HTTP cookies to understand general site traffic, page performance, and mobile device usability. No financial or identity data is stored.
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Third-Party Advertising</h2>
        <p>
          We display non-intrusive advertisements managed via Google AdSense or certified ad partners. Third-party vendors may use cookies to serve ads based on non-sensitive browser visit history.
        </p>
      </div>
    </div>
  );
}
