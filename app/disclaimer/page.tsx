'use client';

import React from 'react';
import { ShieldAlert, ExternalLink, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function DisclaimerPage() {
  const { t } = useLanguage();
  const breadcrumbs = [{ nameEn: 'Government Disclaimer', nameUr: 'حکومتی دستبرداری نوٹس' }];

  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto text-slate-800 dark:text-slate-200">
      <Breadcrumbs items={breadcrumbs} />

      <header className="rounded-3xl glass-card border border-amber-500/40 p-8 space-y-4 bg-gradient-to-br from-amber-950 via-slate-950 to-slate-950 text-white">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-8 h-8 text-amber-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
            {t('Official Notice', 'آفیشل قانونی نوٹس')}
          </span>
        </div>

        <h1 className="text-3xl font-extrabold">
          {t('Official Government Disclaimer', 'حکومتی نان-افلی ایشن دستبرداری نوٹس')}
        </h1>

        <p className="text-sm text-amber-100 leading-relaxed font-medium">
          {t(
            'PakistanInfoHub.com is an independent information portal. It is NOT affiliated with, authorized by, endorsed by, or in any way officially connected to the Government of Pakistan, National Database and Registration Authority (NADRA), Directorate General of Immigration & Passports (DGIP), WAPDA, or any provincial Education Board.',
            'پاکستان انفو ہب ایک خود مختار نجی پورٹل ہے۔ یہ نادرا، پاسپورٹ یا کسی بھی سرکاری ادارے کی آفیشل ویب سائٹ نہیں ہے۔'
          )}
        </p>
      </header>

      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 space-y-6 text-sm leading-relaxed">
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white border-l-4 border-amber-500 pl-3">
            {t('Independent Public Utility Portal', 'خود مختار عوامی معلوماتی سروس')}
          </h2>
          <p>
            The official domain name of this portal is <strong>PakistanInfoHub.com</strong>. Our objective is to assist citizens by aggregating publicly available information, statutory fee structures, and application guidelines into easy-to-read bilingual formats.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white border-l-4 border-amber-500 pl-3">
            {t('Official Government Web Links', 'آفیشل سرکاری ویب سائٹس')}
          </h2>
          <p>
            Citizens wishing to submit official document applications or make online fee payments must visit the respective official government portals:
          </p>
          <ul className="space-y-2 pt-2 text-xs font-semibold">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>NADRA Official Pak-ID Portal:</span>
              <a href="https://id.nadra.gov.pk/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline flex items-center gap-1">
                id.nadra.gov.pk <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Directorate General of Passports:</span>
              <a href="https://dgip.gov.pk/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline flex items-center gap-1">
                dgip.gov.pk <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>National Job Portal:</span>
              <a href="https://njp.gov.pk/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline flex items-center gap-1">
                njp.gov.pk <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
