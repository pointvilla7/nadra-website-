'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, FileSearch, Scale, AlertTriangle, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { VerifiedSeal } from '@/components/VerifiedSeal';
import { SchemaInjector } from '@/components/SchemaInjector';

export default function HowWeVerifyPage() {
  const { t } = useLanguage();

  return (
    <>
      <SchemaInjector
        customSchema={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'How We Verify Information | Editorial Methodology - Pakistan Info Hub',
          url: 'https://pakistaninfohub.com/how-we-verify',
          description: 'Learn how Pakistan Info Hub rigorously fact-checks, audits, and verifies civic information, official portal links, fee schedules, and welfare programs.',
        }}
      />

      <div className="space-y-10">
        {/* Header */}
        <header className="bg-doc-paper dark:bg-doc-dark-card border-2 border-doc-brass/40 rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <VerifiedSeal size="lg" year="2026" />
              <span className="font-mono text-xs text-doc-seal uppercase tracking-widest font-bold">
                E-E-A-T AUTHORITATIVE METHODOLOGY
              </span>
            </div>
            <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-doc-ink dark:text-slate-100 tracking-tight leading-tight">
              {t('How We Verify Information', 'ہم معلومات کی تصدیق کیسے کرتے ہیں')}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              {t(
                'At Pakistan Info Hub (PakistanInfoHub.com), accuracy is our primary duty. Our editorial team follows a rigorous 4-step verification protocol before publishing any fee schedule, application guide, BISP portal procedure, or loan eligibility rule.',
                'پاکستان انفو ہب پر تمام مواد کو 4 مرحلہ وار تصدیقی عمل کے بعد ہی شائع کیا جاتا ہے تاکہ شہریوں کو 100٪ درست معلومات فراہم کی جا سکیں۔'
              )}
            </p>
          </div>
        </header>

        {/* 4 Pillars of Verification */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-doc-dark-base border border-slate-200 dark:border-slate-800 rounded-xl p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-doc-ink text-doc-paper flex items-center justify-center font-serif font-bold text-lg">
                1
              </div>
              <h2 className="font-serif font-bold text-lg text-doc-ink dark:text-slate-100">
                {t('Primary Source Auditing', 'بنیادی سرکاری دستاویزات کی منتقلی')}
              </h2>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {t(
                'We cross-reference all figures directly against official gazette notifications, government portals (nadra.gov.pk, dgip.gov.pk, bisp.gov.pk), and verified department spokespersons.',
                'تمام فیسوں اور شرائط کی تصدیق نادرا، پاسپورٹ ڈائریکٹوریٹ اور بی ایس پی کے آفیشل پورٹلز اور گزٹ نوٹیفکیشنز سے کی جاتی ہے۔'
              )}
            </p>
          </div>

          <div className="bg-white dark:bg-doc-dark-base border border-slate-200 dark:border-slate-800 rounded-xl p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-doc-seal text-white flex items-center justify-center font-serif font-bold text-lg">
                2
              </div>
              <h2 className="font-serif font-bold text-lg text-doc-ink dark:text-slate-100">
                {t('Anti-Phishing & Scam Screening', 'جعلی ویب سائٹس اور فراڈ سے بچاؤ')}
              </h2>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {t(
                'We continuously warn users against fake 8171 portals, unauthorized WhatsApp groups, and scam registration agents. We only link to verified .gov.pk endpoints.',
                'ہم جعلی ایجنٹوں اور دھوکہ دہی والی ویب سائٹس کے خلاف مسلسل آگاہی دیتے ہیں اور صرف سرکاری ڈومینز کا لنک دیتے ہیں۔'
              )}
            </p>
          </div>

          <div className="bg-white dark:bg-doc-dark-base border border-slate-200 dark:border-slate-800 rounded-xl p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-doc-brass text-white flex items-center justify-center font-serif font-bold text-lg">
                3
              </div>
              <h2 className="font-serif font-bold text-lg text-doc-ink dark:text-slate-100">
                {t('Bi-Weekly Freshness Audits', 'ہر دو ہفتے بعد پورٹل ریویو')}
              </h2>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {t(
                'Every guide carries an active "Last verified on [date]" timestamp. Our researchers re-test application links and fee structures every 14 days to prevent stale data.',
                'ہر آرٹیکل پر تصدیق کی تازہ ترین تاریخ درج ہوتی ہے، اور ہماری ٹیم ہر 14 دن بعد فیسوں اور لنکوں کا جائزہ لیتی ہے۔'
              )}
            </p>
          </div>

          <div className="bg-white dark:bg-doc-dark-base border border-slate-200 dark:border-slate-800 rounded-xl p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-doc-verified text-white flex items-center justify-center font-serif font-bold text-lg">
                4
              </div>
              <h2 className="font-serif font-bold text-lg text-doc-ink dark:text-slate-100">
                {t('Community & Legal Corrections', 'عوامی فیڈ بیک اور تصحیح کا عمل')}
              </h2>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {t(
                'If a reader reports a policy update or fee change, our desk reviews official gazettes within 6 hours and updates the live site with an editorial correction note.',
                'اگر کوئی نیا پالیسی آرڈر جاری ہوتا ہے تو ہماری ٹیم 6 گھنٹے کے اندر اندر خبر کی تصدیق کر کے پورٹل اپڈیٹ کرتی ہے۔'
              )}
            </p>
          </div>
        </section>

        {/* Editorial Team Link Banner */}
        <div className="bg-doc-ink text-white rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-lg">
              {t('Meet Our Editorial Research Board', 'ہماری ریسرچ اور فیکٹ چیکنگ ٹیم')}
            </h3>
            <p className="text-xs text-slate-300">
              {t('Read profiles of our civic researchers and policy reviewers.', 'ہماری تجربہ کار فیکٹ چیکنگ ٹیم کا پروفائل دیکھیں۔')}
            </p>
          </div>
          <Link
            href="/editorial-team"
            className="px-5 py-2.5 bg-doc-brass text-doc-ink font-bold text-xs rounded-lg hover:bg-doc-brass/90 transition shrink-0"
          >
            {t('View Editorial Team', 'ایڈیٹوریل ٹیم دیکھیں')}
          </Link>
        </div>
      </div>
    </>
  );
}
