'use client';

import React from 'react';
import { ShieldCheck, UserX, FileCheck2, Globe2 } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export const AuthorityTrustBadges: React.FC = () => {
  const { t } = useLanguage();

  const badges = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      titleEn: '100% Free to Use',
      titleUr: 'مکمل مفت سروس',
      descEn: 'Zero hidden fees, zero paywalls. Free public information for all citizens.',
      descUr: 'تمام سرکاری معلومات بغیر کسی فیس یا چارجز کے دستیاب ہیں۔',
    },
    {
      icon: <UserX className="w-6 h-6 text-doc-brass" />,
      titleEn: 'No Registration Required',
      titleUr: 'رجسٹریشن کی ضرورت نہیں',
      descEn: 'Access all calculators, tracking tools, and fee tables instantly without account creation.',
      descUr: 'بغیر لاگ ان یا اکاؤنٹ بنائے تمام ٹولز اور گائیڈز فوری استعمال کریں۔',
    },
    {
      icon: <FileCheck2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      titleEn: 'Cross-Checked with Official Gazette',
      titleUr: 'سرکاری گزٹ سے تصدیق شدہ',
      descEn: 'Every fee figure and policy step is audited directly against government gazette notifications.',
      descUr: 'تمام فیس ریٹس اور طریقہ کار متعلقہ سرکاری نوٹیفکیشنز کے مطابق ہیں۔',
    },
    {
      icon: <Globe2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      titleEn: 'Independent Civic Directory',
      titleUr: 'خود مختار معلوماتی پورٹل',
      descEn: 'Eliminating middleman agent claims with neutral, verified procedural transparency.',
      descUr: 'ایجنٹ مافیا اور جعلی دعووں کے خاتمے کے لیے شفاف رہنمائی۔',
    },
  ];

  return (
    <section
      aria-label="Trust Guarantees"
      className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1120] shadow-sm"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {badges.map((b, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200/80 dark:border-slate-700">
              {b.icon}
            </div>
            <div>
              <h4 className="text-sm font-serif font-bold text-slate-900 dark:text-white">
                {t(b.titleEn, b.titleUr)}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sans mt-1 leading-relaxed">
                {t(b.descEn, b.descUr)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
