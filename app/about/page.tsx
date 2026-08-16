'use client';

import React from 'react';
import { ShieldCheck, Award, Users, CheckCircle2, Globe, Heart } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function AboutPage() {
  const { t } = useLanguage();
  const breadcrumbs = [{ nameEn: 'About Us', nameUr: 'ہمارے بارے میں' }];

  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
      <Breadcrumbs items={breadcrumbs} />

      <header className="rounded-3xl glass-card border border-emerald-500/30 p-8 md:p-10 space-y-4 bg-gradient-to-br from-emerald-950 via-pakistan-green-950 to-slate-950 text-white">
        <div className="flex items-center gap-2">
          <Award className="w-6 h-6 text-pakistan-gold-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
            {t('E-E-A-T & Editorial Policy', 'اعتماد اور صحافتی معیار')}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold">
          {t('About Pakistan Info Hub (PakistanInfoHub.com)', 'پاکستان انفو ہب کے بارے میں')}
        </h1>

        <p className="text-sm md:text-base text-slate-300 leading-relaxed">
          {t(
            'Pakistan Info Hub is an independent, 100% original public utility portal created to simplify official procedure guidance for citizens across Pakistan and overseas Pakistanis worldwide.',
            'پاکستان انفو ہب ایک خود مختار معلوماتی پورٹل ہے جو شہریوں کے لیے تمام سرکاری معلومات کو آسان زبان میں پیش کرتا ہے۔'
          )}
        </p>
      </header>

      <section className="glass-card rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 space-y-6 text-slate-800 dark:text-slate-200">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-3">
          {t('Our Mission & Editorial Rigor', 'ہمارا مقصد اور صحافتی اصول')}
        </h2>

        <p className="text-sm leading-relaxed">
          {t(
            'Navigating public services in Pakistan—such as obtaining CNICs, renewing passports, checking board examination results, or understanding utility bill charges—often involves conflicting information online. Our editorial desk verifies every fee, phone helpline, and step-by-step document requirement directly against official Gazette notifications and government web portals.',
            'پاکستان میں نادرا، پاسپورٹ اور تعلیمی بورڈز کے قوانین اور فیس میں تبدیلیاں آتی رہتی ہیں۔ ہماری ٹیم ہر خبر اور گائیڈ کی براہ راست سرکاری پورٹل سے تصدیق کرتی ہے۔'
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 space-y-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              {t('Strict Fact Verification', 'سخت ترین تصدیق')}
            </h3>
            <p className="text-xs text-slate-500">
              {t('Zero reliance on unverified rumors or agent claims.', 'غیر مصدقہ ایجنٹوں کی بات پر کوئی بھروسہ نہیں۔')}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 space-y-2">
            <Globe className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              {t('Bilingual Accessibility', 'آسان اردو و انگریزی')}
            </h3>
            <p className="text-xs text-slate-500">
              {t('Full Noto Nastaliq Urdu rendering for every guide.', 'ہر شہری کی آسانی کے لیے نستا علیق خط۔')}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 space-y-2">
            <Users className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              {t('AEO & AI Search Ready', 'فوری اور شفاف خلاصہ')}
            </h3>
            <p className="text-xs text-slate-500">
              {t('Direct Answer boxes for quick readability.', 'اہم معلومات کا 50 الفاظ میں آسان ترین خلاصہ۔')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
