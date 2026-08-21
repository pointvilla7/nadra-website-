'use client';

import React, { useState } from 'react';
import {
  Scale,
  Building,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Coins,
  FileText,
  Globe2,
  AlertCircle,
  Sparkles,
  Users,
  Check,
  Copy,
  Info,
  Layers,
  ArrowRight,
  Gavel,
  Landmark
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

export type RouteType = 'nadra' | 'court';

export const SuccessionCertificateHelper: React.FC = () => {
  const { t } = useLanguage();
  const [activeRoute, setActiveRoute] = useState<RouteType>('nadra');
  const [assetValueTier, setAssetValueTier] = useState<'below100k' | 'above100k'>('above100k');

  return (
    <div className="my-8 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-doc-ink overflow-hidden shadow-xl font-sans">
      {/* Header Bar */}
      <div className="px-5 py-4 bg-doc-ink text-white flex items-center justify-between gap-3 border-b border-doc-brass/20">
        <div className="flex items-center gap-2.5">
          <Scale className="w-5 h-5 text-doc-brass shrink-0" />
          <div>
            <h3 className="font-serif font-bold text-sm text-white leading-tight">
              {t(
                'NADRA vs Civil Court Succession Certificate Navigator (2026)',
                'نادرا بمقابلہ سول کورٹ جانشینی سرٹیفکیٹ و وراثت نامہ گائیڈ'
              )}
            </h3>
            <p className="text-[10px] text-slate-400 font-mono">
              {t(
                'Letters of Administration & Succession Act 2021 (Amended 2025) • succession.nadra.gov.pk',
                'سکسیشن ایکٹ 2021 (ترمیم 2025) • نادرا فیس شیڈول و مکمل تصدیقی مراحل'
              )}
            </p>
          </div>
        </div>
        <InteractiveToolBadge labelEn="SUCCESSION ADVISOR" labelUr="جانشینی گائیڈ" variant="gold" />
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* 2025 Amendment Callout Banner */}
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold font-serif text-sm block">
              {t('2025 Legal Amendment Update: Free Choice of Route', '2025 قانونی ترمیم: نادرا یا عدالت کے آزادانہ انتخاب کی اجازت')}
            </span>
            <p className="text-[11px] leading-relaxed">
              {t(
                'Under the Letters of Administration and Succession Certificates (Amendment) Act 2025, legal heirs have equal concurrent jurisdiction to apply directly through NADRA or through the Civil Court. You are no longer required to obtain a "Decline Certificate" from NADRA before approaching a court.',
                'سکسیشن ترمیمی ایکٹ 2025 کے تحت ورثاء کو مکمل اختیار حاصل ہے کہ وہ بغیر کسی رکاوٹ کے نادرا یا سول کورٹ میں سے کسی ایک کا انتخاب کر سکتے ہیں۔ اب عدالت جانے کے لیے نادرا کے ڈیکلائن سرٹیفکیٹ کی ضرورت ختم کر دی گئی ہے۔'
              )}
            </p>
          </div>
        </div>

        {/* Step 1: Interactive Route Switcher */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-doc-seal dark:text-red-400" />
            <span>{t('1. Select Your Preferred Legal Route:', '1. اپنا طریقہ کار منتخب کریں:')}</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setActiveRoute('nadra')}
              className={`p-4 rounded-xl border text-left flex flex-col justify-between transition min-h-[90px] ${
                activeRoute === 'nadra'
                  ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-serif font-bold text-sm leading-tight flex items-center gap-1.5">
                    <Building className="w-4 h-4 text-emerald-400" />
                    <span>{t('NADRA Facilitation Unit (Fast-Track)', 'نادرا فیسیلیٹیشن یونٹ (فاسٹ ٹریک)')}</span>
                  </span>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    15 – 25 DAYS
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 font-sans">
                  {t(
                    'Administrative digital issuance for undisputed inheritance among legal heirs.',
                    'باہمی رضامندی والے تمام قانونی ورثاء کے لیے تیز ترین ڈیجیٹل سرٹیفکیٹ۔'
                  )}
                </p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveRoute('court')}
              className={`p-4 rounded-xl border text-left flex flex-col justify-between transition min-h-[90px] ${
                activeRoute === 'court'
                  ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-serif font-bold text-sm leading-tight flex items-center gap-1.5">
                    <Gavel className="w-4 h-4 text-amber-400" />
                    <span>{t('Civil Court Route (Judicial Litigation)', 'سول کورٹ طریقہ کار (عدالتی کارروائی)')}</span>
                  </span>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    6 – 18 MONTHS
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 font-sans">
                  {t(
                    'Formal judicial trial required when there are family disputes, minor heirs, or contested titles.',
                    'خاندانی تنازعات، نابالغ ورثاء کے گارڈین شپ یا متنازعہ جائیداد کے لیے ضروری۔'
                  )}
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Step 2: Route Detail Card */}
        {activeRoute === 'nadra' ? (
          <div className="p-5 sm:p-6 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/60 space-y-5 animate-fadeIn font-sans shadow-2xl relative">
            <div aria-hidden="true" className="absolute top-0 right-0 w-48 h-48 bg-doc-brass/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-doc-brass/30 pb-4">
              <div>
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-emerald-500/30">
                  ADMINISTRATIVE PROCESS
                </span>
                <h4 className="text-xl sm:text-2xl font-serif font-extrabold text-white mt-1.5">
                  {t('NADRA Succession Certificate & Letters of Administration', 'نادرا جانشینی سرٹیفکیٹ و ایڈمنسٹریشن لیٹر')}
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  {t('Standard processing timeline: 15 to 25 calendar days across Pakistan', 'معمول کا پروسیسنگ وقت: 15 تا 25 دن')}
                </p>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">{t('Statutory Fee (Assets ≥ 100k)', 'سرکاری فیس')}</span>
                <span className="text-xl sm:text-2xl font-mono font-extrabold text-doc-brass">PKR 20,000</span>
              </div>
            </div>

            {/* NADRA 5-Step Process Pipeline */}
            <div className="space-y-2.5">
              <p className="font-bold text-white text-xs flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-doc-brass" />
                <span>{t('5-Stage NADRA Verification Lifecycle:', 'نادرا جانشینی سرٹیفکیٹ کے 5 مراحل:')}</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="w-5 h-5 rounded bg-doc-brass text-doc-ink font-mono font-bold text-[10px] flex items-center justify-center">1</span>
                  <p className="font-bold text-white text-xs mt-1">Application</p>
                  <p className="text-[10px] text-slate-400 leading-snug">
                    Submit death certificate, CNIC cancellation, FRC &amp; asset details.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="w-5 h-5 rounded bg-doc-brass text-doc-ink font-mono font-bold text-[10px] flex items-center justify-center">2</span>
                  <p className="font-bold text-white text-xs mt-1">Public Notice</p>
                  <p className="text-[10px] text-slate-400 leading-snug">
                    NADRA publishes notice in Urdu &amp; English national newspapers.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="w-5 h-5 rounded bg-amber-400 text-doc-ink font-mono font-bold text-[10px] flex items-center justify-center">3</span>
                  <p className="font-bold text-white text-xs mt-1">14-Day Wait</p>
                  <p className="text-[10px] text-slate-400 leading-snug">
                    Mandatory 14-day statutory waiting period for public objections.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="w-5 h-5 rounded bg-doc-brass text-doc-ink font-mono font-bold text-[10px] flex items-center justify-center">4</span>
                  <p className="font-bold text-white text-xs mt-1">Biometrics</p>
                  <p className="text-[10px] text-slate-400 leading-snug">
                    All legal heirs give live fingerprints at NRCs or foreign missions.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="w-5 h-5 rounded bg-emerald-400 text-doc-ink font-mono font-bold text-[10px] flex items-center justify-center">5</span>
                  <p className="font-bold text-white text-xs mt-1">Issuance</p>
                  <p className="text-[10px] text-slate-400 leading-snug">
                    QR-coded security certificate printed to claim bank/share assets.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Official Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <a
                href="https://succession.nadra.gov.pk/"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-open-nadra-succession"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-doc-brass via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-doc-ink font-mono font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-xl min-h-[48px]"
              >
                <span>{t('Open NADRA Succession Portal (succession.nadra.gov.pk) →', 'آفیشل نادرا سکسیشن پورٹل کھولیں ←')}</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>

              <a
                href="/nadra/b-form-frc-status-check"
                className="w-full py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition min-h-[48px]"
              >
                <span>{t('Check Required FRC Status First →', 'پہلے ضروری فیملی سرٹیفکیٹ (FRC) چیک کریں ←')}</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="p-5 sm:p-6 rounded-2xl bg-doc-ink text-white border-2 border-amber-500/60 space-y-5 animate-fadeIn font-sans shadow-2xl relative">
            <div aria-hidden="true" className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-500/30 pb-4">
              <div>
                <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-amber-500/30">
                  JUDICIAL TRIAL ROUTE
                </span>
                <h4 className="text-xl sm:text-2xl font-serif font-extrabold text-white mt-1.5">
                  {t('Civil Court Succession Petition (Succession Act 1925)', 'سول کورٹ سکسیشن پیٹیشن (سکسیشن ایکٹ 1925)')}
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  {t('Court timeline: Typically 6 to 18+ months depending on hearings and evidence', 'عدالتی وقت: 6 سے 18 ماہ یا اس سے زائد')}
                </p>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">{t('Cost Breakdown', 'اخراجات')}</span>
                <span className="text-sm font-mono font-bold text-amber-300">Court Fee + Advocate Fee</span>
              </div>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800 space-y-2 text-xs text-slate-300 leading-relaxed">
              <p className="font-bold text-white flex items-center gap-1.5">
                <Gavel className="w-4 h-4 text-amber-400" />
                <span>{t('When the Civil Court Route is Necessary / Recommended:', 'عدالتی طریقہ کار کب ناگزیر ہوتا ہے؟')}</span>
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-300">
                <li><strong>Contested Inheritance:</strong> An heir disputes the share or refuses biometric authorization.</li>
                <li><strong>Minor Legal Heirs:</strong> Involves guardianship court appointments under Guardian and Wards Act 1890.</li>
                <li><strong>Identity &amp; Lineage Disputes:</strong> Deceased&apos;s family tree is contested or not updated in NADRA records.</li>
                <li><strong>Foreign Assets or Non-Standard Claims:</strong> Involves international foreign probate or complex wills.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Step 3: Fee Breakdown Schedule */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3 font-sans">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
              <Coins className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t('Official NADRA Statutory Fee Schedule (2026):', 'نادرا جانشینی سرٹیفکیٹ فیس شیڈول:')}</span>
            </h4>
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
              Statutory Government Rate
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block uppercase">Small Asset Value (&lt; PKR 100K)</span>
              <span className="text-base font-mono font-bold text-doc-ink dark:text-white mt-0.5 block">PKR 10,000</span>
              <span className="text-[10px] text-slate-500 mt-1 block">Movable/immovable assets below 1 Lakh</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block uppercase">Standard Asset Value (≥ PKR 100K)</span>
              <span className="text-base font-mono font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 block">PKR 20,000</span>
              <span className="text-[10px] text-slate-500 mt-1 block">Standard fee (PKR 22,000 in Sindh)</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block uppercase">Amended / Duplicate Certificate</span>
              <span className="text-base font-mono font-bold text-doc-ink dark:text-white mt-0.5 block">PKR 5,000</span>
              <span className="text-[10px] text-slate-500 mt-1 block">Adding newly discovered assets</span>
            </div>
          </div>
        </div>

        {/* Step 4: Overseas Heirs Biometric Mission List */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 font-sans">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-doc-brass flex items-center gap-1.5">
            <Globe2 className="w-4 h-4 text-doc-brass" />
            <span>{t('Overseas Pakistani Legal Heirs Biometric Facilities:', 'بیرون ملک مقیم ورثاء کے لیے بائیو میٹرک کی سہولت:')}</span>
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Legal heirs residing outside Pakistan do <strong>not</strong> need to fly back to Pakistan. Once the primary
            application is initiated in Pakistan, overseas heirs can visit designated Pakistani Embassies and Consulates
            for fingerprint verification:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px] font-mono">
            <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
              <span className="text-doc-brass font-bold block">United Kingdom</span>
              <span className="text-slate-300">London, Manchester, Birmingham, Bradford</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
              <span className="text-doc-brass font-bold block">Saudi Arabia</span>
              <span className="text-slate-300">Riyadh, Jeddah, Medina</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
              <span className="text-doc-brass font-bold block">United Arab Emirates</span>
              <span className="text-slate-300">Dubai, Abu Dhabi</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
              <span className="text-doc-brass font-bold block">USA, Qatar &amp; Canada</span>
              <span className="text-slate-300">Chicago, Houston, Doha, Toronto</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3.5 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400 font-sans flex flex-wrap items-center justify-between gap-2">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>{t('Zero Data Collection: Educational and legal information navigator only', '100٪ محفوظ کلائنٹ سائیڈ رہنمائی')}</span>
        </span>
        <span className="font-mono">SUCCESSION ACT 2026</span>
      </div>
    </div>
  );
};
