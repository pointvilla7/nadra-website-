'use client';

import React from 'react';
import { FileText } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function TermsPage() {
  const { t } = useLanguage();
  const breadcrumbs = [{ nameEn: 'Terms & Conditions', nameUr: 'شرائط و ضوابط' }];

  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto text-slate-800 dark:text-slate-200">
      <Breadcrumbs items={breadcrumbs} />

      <header className="rounded-3xl glass-card border border-emerald-500/30 p-8 space-y-3 bg-gradient-to-br from-slate-900 to-emerald-950 text-white">
        <FileText className="w-8 h-8 text-pakistan-gold-400" />
        <h1 className="text-3xl font-extrabold">{t('Terms & Conditions', 'شرائط و ضوابط')}</h1>
        <p className="text-xs text-slate-300">Last updated: August 10, 2026</p>
      </header>

      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 space-y-4 text-sm leading-relaxed">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
        <p>
          By accessing or using PakistanInfoHub.com, you agree to comply with these terms. This site provides free informational guides for Pakistani public services.
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Informational Purpose Only</h2>
        <p>
          All content, fee charts, procedure steps, and contact numbers are provided strictly for educational and informational purposes. Official transactions must be conducted directly on official government portals (such as id.nadra.gov.pk or dgip.gov.pk).
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Intellectual Property</h2>
        <p>
          Original article text, design components, and custom branding of PakistanInfoHub.com are protected by copyright. Uncredited commercial copying is prohibited.
        </p>
      </div>
    </div>
  );
}
