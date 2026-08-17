'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldAlert, ExternalLink, Globe, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { CATEGORIES } from '@/lib/data/categories';
import { VerifiedSeal } from './VerifiedSeal';
import { VerifiedBadge } from './VerifiedBadge';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-doc-ink text-slate-300 border-t-2 border-doc-brass mt-auto transition-colors">
      {/* Official Government Disclaimer Banner */}
      <div className="bg-doc-seal text-white border-b border-doc-brass/40 px-4 py-3 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <ShieldAlert className="w-4 h-4 text-doc-paper shrink-0" />
            <span>
              {t(
                'IMPORTANT DISCLAIMER: PakistanInfoHub.com is an independent public information portal. It is NOT affiliated with NADRA, DGIP, BISP, or any Government of Pakistan entity.',
                'اہم اطلاع: پاکستان انفو ہب ایک آزاد عوامی معلوماتی پورٹل ہے۔ یہ نادرا، پاسپورٹ یا کسی بھی سرکاری ادارے کی آفیشل ویب سائٹ نہیں ہے۔'
              )}
            </span>
          </div>
          <Link
            href="/disclaimer"
            className="underline font-bold text-doc-paper hover:text-white shrink-0 flex items-center gap-1"
          >
            <span>{t('Read Full Disclaimer', 'مکمل ڈس کلیمر پڑھیں')}</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Main Footer Links Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <VerifiedSeal size="md" year="2026" />
              <div>
                <span className="font-serif font-extrabold text-2xl tracking-tight text-white block">
                  Pakistan Info Hub
                </span>
                <VerifiedBadge variant="inline" textEn="VERIFIED CIVIC DIRECTORY 2026" textUr="مصدقہ ڈائریکٹری 2026" className="mt-0.5" />
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              {t(
                'Pakistan’s leading 100% original, verified information and utility portal. Dedicated to providing step-by-step guidance on NADRA identity cards, Passports, BISE Education results, Utility bills, Govt Loans, BISP 8171, and Traffic Services.',
                'پاکستان کا سب سے بااعتماد اور آسان معلومات پورٹل۔ نادرا، پاسپورٹ، تعلیمی بورڈز کے نتائج، بجلی و گیس کے بلز، قرضہ جات، بے نظیر 8171 اور ٹریفک سروسز۔'
              )}
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-doc-brass" />
                <span>Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-doc-brass" />
                <a href="mailto:pakistaninfohub1@gmail.com" className="hover:text-doc-brass transition">
                  pakistaninfohub1@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Categories Column */}
          <div>
            <h3 className="text-white text-xs font-serif font-bold uppercase tracking-wider mb-4 border-l-2 border-doc-brass pl-2">
              {t('Portal Directory', 'اہم کیٹیگریز')}
            </h3>
            <ul className="space-y-2 text-xs font-medium">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/${cat.slug}`}
                    className="hover:text-doc-brass transition flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-doc-brass/60" />
                    <span>{t(cat.nameEn, cat.nameUr)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services Column */}
          <div>
            <h3 className="text-white text-xs font-serif font-bold uppercase tracking-wider mb-4 border-l-2 border-doc-brass pl-2">
              {t('Popular Verified Guides', 'مشہور معلومات')}
            </h3>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/tracker" className="hover:text-doc-brass transition text-doc-brass font-bold">
                  {t('Unified Application Tracker', 'آل ان ون ٹریکنگ پورٹل')}
                </Link>
              </li>
              <li>
                <Link href="/nadra/cnic-kaise-banaye" className="hover:text-doc-brass transition">
                  {t('CNIC Apply Guide 2026', 'شناختی کارڈ اپلائی')}
                </Link>
              </li>
              <li>
                <Link href="/welfare/bisp-eligibility-check-by-cnic" className="hover:text-doc-brass transition">
                  {t('BISP 8171 CNIC Portal', 'بی ایس پی 8171 اہلیت')}
                </Link>
              </li>
              <li>
                <Link href="/loans/apni-chhat-apna-ghar" className="hover:text-doc-brass transition">
                  {t('Apni Chhat Housing Loan', 'اپنی چھت اپنا گھر سکیم')}
                </Link>
              </li>
              <li>
                <Link href="/passport/fee-2026" className="hover:text-doc-brass transition">
                  {t('Passport Fee Schedule', 'پاسپورٹ فیس شیڈول')}
                </Link>
              </li>
              <li>
                <Link href="/traffic/e-challan-check-online" className="hover:text-doc-brass transition">
                  {t('E-Challan Online Check', 'ای چالان آن لائن چیک')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & About Column */}
          <div>
            <h3 className="text-white text-xs font-serif font-bold uppercase tracking-wider mb-4 border-l-2 border-doc-brass pl-2">
              {t('Trust & Legal', 'قانون و شفافیت')}
            </h3>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/about" className="hover:text-doc-brass transition">
                  {t('About Us', 'ہمارے بارے میں')}
                </Link>
              </li>
              <li>
                <Link href="/how-we-verify" className="hover:text-doc-brass transition">
                  {t('Verification Methodology', 'تصدیق کا طریقہ کار')}
                </Link>
              </li>
              <li>
                <Link href="/editorial-team" className="hover:text-doc-brass transition">
                  {t('Editorial Board', 'ایڈیٹوریل ٹیم')}
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-doc-brass transition">
                  {t('Government Disclaimer', 'دستبرداری نوٹس')}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-doc-brass transition">
                  {t('Privacy Policy', 'پرائیویسی پالیسی')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-doc-brass transition">
                  {t('Terms & Conditions', 'شرائط و ضوابط')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-doc-brass transition">
                  {t('Contact Us', 'رابطہ فارم')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-12 pt-6 border-t border-doc-brass/20 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 PakistanInfoHub.com. All rights reserved. Registered Public Information Directory 🇵🇰</p>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span className="flex items-center gap-1 text-doc-brass">
              <Globe className="w-3.5 h-3.5" />
              <span>Domain: PakistanInfoHub.com</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
