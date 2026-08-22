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
    <footer className="bg-[#0B1120] text-slate-300 border-t border-[#1E2A3F] mt-auto transition-colors">
      {/* Official Government Disclaimer Banner — De-escalated Navy & Red Accent */}
      <div className="bg-[#111827] text-slate-300 border-b border-[#1E2A3F] border-s-4 border-s-[#C0362C] px-4 py-3 text-xs font-sans">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <ShieldAlert className="w-4 h-4 text-[#C0362C] shrink-0" />
            <span className="text-slate-300">
              {t(
                'IMPORTANT DISCLAIMER: PakistanInfoHub.com is an independent public information portal. It is NOT affiliated with NADRA, DGIP, BISP, or any Government of Pakistan entity.',
                'اہم اطلاع: پاکستان انفو ہب ایک آزاد عوامی معلوماتی پورٹل ہے۔ یہ نادرا، پاسپورٹ یا کسی بھی سرکاری ادارے کی آفیشل ویب سائٹ نہیں ہے۔'
              )}
            </span>
          </div>
          <Link
            href="/disclaimer"
            className="underline font-semibold text-[#D4A017] hover:text-white shrink-0 flex items-center gap-1 transition"
          >
            <span>{t('Read Full Disclaimer', 'مکمل ڈس کلیمر پڑھیں')}</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Main Footer Links Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <VerifiedSeal size="md" year="2026" />
              <div>
                <span className="font-serif font-extrabold text-2xl tracking-tight text-white block">
                  Pakistan Info Hub
                </span>
                <VerifiedBadge variant="inline" textEn="VERIFIED CIVIC DIRECTORY 2026" textUr="مصدقہ ڈائریکٹری 2026" className="mt-0.5" />
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {t(
                'Pakistan’s leading 100% original, verified information and utility portal. Dedicated to providing step-by-step guidance on NADRA identity cards, Passports, BISE Education results, Utility bills, Govt Loans, BISP 8171, and Traffic Services.',
                'پاکستان کا سب سے بااعتماد اور آسان معلومات پورٹل۔ نادرا، پاسپورٹ، تعلیمی بورڈز کے نتائج، بجلی و گیس کے بلز، قرضہ جات، بے نظیر 8171 اور ٹریفک سروسز۔'
              )}
            </p>
            <div className="flex flex-col gap-1.5 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-doc-brass shrink-0" />
                <span>Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-doc-brass shrink-0" />
                <a href="mailto:pakistaninfohub1@gmail.com" className="hover:text-doc-brass transition">
                  pakistaninfohub1@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Primary Portals Directory Column */}
          <div>
            <h3 className="text-white text-xs font-serif font-bold uppercase tracking-wider mb-4 border-s-2 border-doc-brass ps-2.5">
              {t('Portal Directory', 'اہم کیٹیگریز')}
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              {CATEGORIES.slice(0, 8).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/${cat.slug}`}
                    className="hover:text-doc-brass transition flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-doc-brass/60 shrink-0" />
                    <span>{t(cat.nameEn, cat.nameUr)}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/sitemap"
                  className="hover:text-amber-400 transition flex items-center gap-1.5 text-doc-brass font-bold pt-1"
                >
                  <span>→ {t('View All 19 Portals', 'تمام 19 پورٹلز دیکھیں')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Services & Tools Column */}
          <div>
            <h3 className="text-white text-xs font-serif font-bold uppercase tracking-wider mb-4 border-s-2 border-doc-brass ps-2.5">
              {t('Popular Verified Guides', 'مشہور معلومات')}
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/mobile-pta/tax-calculator-2026" className="hover:text-amber-400 transition text-amber-300 font-bold flex items-center gap-1.5">
                  <span>📱</span>
                  <span>{t('PTA Mobile Tax Calculator 2026', 'پی ٹی اے موبائل ٹیکس کیلکولیٹر')}</span>
                </Link>
              </li>
              <li>
                <Link href="/bills/utility-bill-checker-2026" className="hover:text-amber-400 transition text-slate-200 font-bold flex items-center gap-1.5">
                  <span>⚡</span>
                  <span>{t('Online Bill Checker 2026', 'آن لائن بجلی و گیس بل چیکر')}</span>
                </Link>
              </li>
              <li>
                <Link href="/tracker" className="hover:text-doc-brass transition flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-doc-brass/60 shrink-0" />
                  <span>{t('Unified Application Tracker', 'آل ان ون ٹریکنگ پورٹل')}</span>
                </Link>
              </li>
              <li>
                <Link href="/nadra/cnic-kaise-banaye" className="hover:text-doc-brass transition flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-doc-brass/60 shrink-0" />
                  <span>{t('CNIC Apply Guide 2026', 'شناختی کارڈ اپلائی')}</span>
                </Link>
              </li>
              <li>
                <Link href="/welfare/bisp-eligibility-check-by-cnic" className="hover:text-doc-brass transition flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-doc-brass/60 shrink-0" />
                  <span>{t('BISP 8171 CNIC Portal', 'بی ایس پی 8171 اہلیت')}</span>
                </Link>
              </li>
              <li>
                <Link href="/loans/apni-chhat-apna-ghar" className="hover:text-doc-brass transition flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-doc-brass/60 shrink-0" />
                  <span>{t('Apni Chhat Housing Loan', 'اپنی چھت اپنا گھر سکیم')}</span>
                </Link>
              </li>
              <li>
                <Link href="/passport/fee-2026" className="hover:text-doc-brass transition flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-doc-brass/60 shrink-0" />
                  <span>{t('Passport Fee Schedule', 'پاسپورٹ فیس شیڈول')}</span>
                </Link>
              </li>
              <li>
                <Link href="/traffic/e-challan-check-online" className="hover:text-doc-brass transition flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-doc-brass/60 shrink-0" />
                  <span>{t('E-Challan Online Check', 'ای چالان آن لائن چیک')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & About Column */}
          <div>
            <h3 className="text-white text-xs font-serif font-bold uppercase tracking-wider mb-4 border-s-2 border-doc-brass ps-2.5">
              {t('Trust & Legal', 'قانون و شفافیت')}
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/about" className="hover:text-doc-brass transition flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-doc-brass/60 shrink-0" />
                  <span>{t('About Us', 'ہمارے بارے میں')}</span>
                </Link>
              </li>
              <li>
                <Link href="/how-we-verify" className="hover:text-doc-brass transition flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-doc-brass/60 shrink-0" />
                  <span>{t('Verification Methodology', 'تصدیق کا طریقہ کار')}</span>
                </Link>
              </li>
              <li>
                <Link href="/editorial-team" className="hover:text-doc-brass transition flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-doc-brass/60 shrink-0" />
                  <span>{t('Editorial Board', 'ایڈیٹوریل ٹیم')}</span>
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-doc-brass transition flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-doc-brass/60 shrink-0" />
                  <span>{t('Government Disclaimer', 'دستبرداری نوٹس')}</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-doc-brass transition flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-doc-brass/60 shrink-0" />
                  <span>{t('Privacy Policy', 'پرائیویسی پالیسی')}</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-doc-brass transition flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-doc-brass/60 shrink-0" />
                  <span>{t('Terms & Conditions', 'شرائط و ضوابط')}</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-doc-brass transition flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-doc-brass/60 shrink-0" />
                  <span>{t('Contact Us', 'رابطہ فارم')}</span>
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-amber-400 transition font-bold text-doc-brass flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span>{t('HTML Site Sitemap', 'سائٹ میپ ڈائریکٹری')}</span>
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
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t('ALL SYSTEMS NOMINAL', 'تمام سروسز فعال')}</span>
            </span>
            <Link href="/sitemap" className="hover:text-white transition">
              HTML SITEMAP
            </Link>
            <span className="text-slate-600">|</span>
            <a href="/sitemap.xml" className="hover:text-white transition" target="_blank">
              XML SITEMAP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
