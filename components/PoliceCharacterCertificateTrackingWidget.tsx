'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Building,
  Check,
  Copy,
  Sparkles,
  AlertCircle,
  MapPin,
  FileText,
  HelpCircle,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

export type TrackingProvince = 'punjab' | 'sindh' | 'islamabad' | 'kpk' | 'balochistan' | 'ajk';

interface ProvinceTrackingConfig {
  id: TrackingProvince;
  nameEn: string;
  nameUr: string;
  trackingPortalUrl: string;
  portalName: string;
  requiredFieldsEn: string;
  requiredFieldsUr: string;
  identifierNameEn: string;
  identifierNameUr: string;
  sampleFormat: string;
  helpline: string;
}

const PROVINCE_TRACKING_INFO: Record<TrackingProvince, ProvinceTrackingConfig> = {
  punjab: {
    id: 'punjab',
    nameEn: 'Punjab Police (PKM)',
    nameUr: 'پنجاب پولیس (خدمت مرکز)',
    trackingPortalUrl: 'https://pkm.punjab.gov.pk/public',
    portalName: 'Punjab Police Khidmat Markaz Portal (pkm.punjab.gov.pk)',
    requiredFieldsEn: 'Application ID / Token Number or CNIC',
    requiredFieldsUr: 'درخواست آئی ڈی / ٹوکن نمبر یا شناختی کارڈ',
    identifierNameEn: 'PKM Application Tracking ID',
    identifierNameUr: 'پی کے ایم ٹریکنگ آئی ڈی',
    sampleFormat: 'e.g. PKM-2026-10482 or 8-digit receipt token',
    helpline: '1787 (Punjab Police IG Complaint Cell)',
  },
  sindh: {
    id: 'sindh',
    nameEn: 'Sindh Police (PRVS)',
    nameUr: 'سندھ پولیس (PRVS / CPLC)',
    trackingPortalUrl: 'https://prvs.sindhpolice.gov.pk/',
    portalName: 'Sindh Police Record Verification System (prvs.sindhpolice.gov.pk)',
    requiredFieldsEn: 'CNIC Number & Case ID',
    requiredFieldsUr: 'شناختی کارڈ نمبر اور کیس آئی ڈی',
    identifierNameEn: 'PRVS Case ID',
    identifierNameUr: 'کیس آئی ڈی',
    sampleFormat: 'e.g. Case ID generated on submission slip',
    helpline: '021-99212626 (CPLC Governor House Helpline)',
  },
  islamabad: {
    id: 'islamabad',
    nameEn: 'Islamabad Police (ICT)',
    nameUr: 'اسلام آباد پولیس (ICTP)',
    trackingPortalUrl: 'https://islamabadpolice.gov.pk/',
    portalName: 'Islamabad Police Portal (islamabadpolice.gov.pk)',
    requiredFieldsEn: 'CNIC & Online Application ID',
    requiredFieldsUr: 'شناختی کارڈ اور آن لائن ایپلیکیشن آئی ڈی',
    identifierNameEn: 'ICT Application ID',
    identifierNameUr: 'ایپلیکیشن آئی ڈی',
    sampleFormat: 'e.g. ICTP-CC-82910',
    helpline: '1915 (Islamabad Police Khidmat Helpline)',
  },
  kpk: {
    id: 'kpk',
    nameEn: 'KPK Police (PAL Clearance)',
    nameUr: 'خیبر پختونخوا پولیس (PAL)',
    trackingPortalUrl: 'https://clearance.kppolice.gov.pk/',
    portalName: 'KPK Police Clearance Portal (clearance.kppolice.gov.pk)',
    requiredFieldsEn: 'CNIC Number & Application Tracking Code',
    requiredFieldsUr: 'شناختی کارڈ اور ٹریکنگ کوڈ',
    identifierNameEn: 'KPK Clearance Tracking ID',
    identifierNameUr: 'کے پی کے ٹریکنگ کوڈ',
    sampleFormat: 'e.g. KPK-PAL-58291',
    helpline: '1415 (KPK Police Facilitation Helpline)',
  },
  balochistan: {
    id: 'balochistan',
    nameEn: 'Balochistan Police (CPO Quetta)',
    nameUr: 'بلوچستان پولیس (کوئٹہ)',
    trackingPortalUrl: 'https://balochistanpolice.gov.pk/',
    portalName: 'Balochistan Police Portal (balochistanpolice.gov.pk)',
    requiredFieldsEn: 'Challan / Diary Number at District DPO Office',
    requiredFieldsUr: 'ڈائری نمبر یا چالان رسید نمبر',
    identifierNameEn: 'DPO Diary / Receipt Number',
    identifierNameUr: 'ڈی پی او ڈائری نمبر',
    sampleFormat: 'e.g. CPO-QTA-2026-921',
    helpline: '081-9201025 (CPO Quetta Facilitation Desk)',
  },
  ajk: {
    id: 'ajk',
    nameEn: 'Azad Jammu & Kashmir (AJK Police)',
    nameUr: 'آزاد کشمیر پولیس',
    trackingPortalUrl: 'https://ajkpolice.gov.pk/',
    portalName: 'AJK Police Portal (ajkpolice.gov.pk)',
    requiredFieldsEn: 'Receipt Number from District SSP Office',
    requiredFieldsUr: 'ضلعی ایس ایس پی دفتر کی رسید نمبر',
    identifierNameEn: 'SSP Office Receipt ID',
    identifierNameUr: 'رسید نمبر',
    sampleFormat: 'e.g. AJKP-MIR-4910',
    helpline: '05822-921004 (AJK Central Police Office)',
  },
};

export const PoliceCharacterCertificateTrackingWidget: React.FC = () => {
  const { t } = useLanguage();

  const [selectedProvince, setSelectedProvince] = useState<TrackingProvince>('punjab');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [copied, setCopied] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const activeProv = PROVINCE_TRACKING_INFO[selectedProvince];

  const cleanedTrackingNumber = useMemo(() => {
    return trackingNumber.trim();
  }, [trackingNumber]);

  const isValidTracking = cleanedTrackingNumber.length >= 3;

  const handleCopy = () => {
    if (!cleanedTrackingNumber) return;
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(cleanedTrackingNumber).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
  };

  return (
    <div className="my-8 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-doc-ink overflow-hidden shadow-xl font-sans">
      {/* Header Bar */}
      <div className="px-5 py-4 bg-doc-ink text-white flex items-center justify-between gap-3 border-b border-doc-brass/20">
        <div className="flex items-center gap-2.5">
          <Search className="w-5 h-5 text-doc-brass shrink-0" />
          <div>
            <h3 className="font-serif font-bold text-sm text-white leading-tight">
              {t(
                'Police Character Certificate Tracking Status Helper 2026',
                'پولیس کریکٹر سرٹیفکیٹ ٹریکنگ سٹیٹس و ہیلپ ڈیسک'
              )}
            </h3>
            <p className="text-[10px] text-slate-400 font-mono">
              {t(
                'Instant Guided Fallback • Official Provincial Police Portals • Zero Data Logging',
                'آفیشل پولیس پورٹل ٹریکنگ • فوری رہنمائی • 100٪ محفوظ کلائنٹ سائیڈ'
              )}
            </p>
          </div>
        </div>
        <InteractiveToolBadge labelEn="STATUS TRACKER" labelUr="سٹیٹس ٹریکر" variant="gold" />
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Step 1: Select Issuing Province */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-doc-seal dark:text-red-400" />
            <span>{t('1. Select the Province Where You Applied:', '1. وہ صوبہ منتخب کریں جہاں آپ نے درخواست جمع کروائی:')}</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {(Object.keys(PROVINCE_TRACKING_INFO) as TrackingProvince[]).map((key) => {
              const item = PROVINCE_TRACKING_INFO[key];
              const isSelected = selectedProvince === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedProvince(key)}
                  className={`p-3 rounded-xl border text-center flex flex-col items-center justify-center transition min-h-[58px] ${
                    isSelected
                      ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
                  }`}
                >
                  <span className="font-serif font-bold text-xs leading-tight">{t(item.nameEn.split('(')[0], item.nameUr.split('(')[0])}</span>
                  <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 mt-1 font-bold">
                    {item.id === 'punjab' || item.id === 'sindh' || item.id === 'islamabad' || item.id === 'kpk' ? 'Online Track' : 'Manual / CPO'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Input Field for Tracking ID */}
        <form onSubmit={handleTrackSubmit} className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="pcc-tracking-input"
                className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass"
              >
                {t(`2. Enter Your ${activeProv.identifierNameEn} / Token Number:`, `2. اپنا ${activeProv.identifierNameUr} یا ٹوکن نمبر درج کریں:`)}
              </label>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                {activeProv.sampleFormat}
              </span>
            </div>

            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  id="pcc-tracking-input"
                  type="text"
                  maxLength={40}
                  value={trackingNumber}
                  onChange={(e) => {
                    setTrackingNumber(e.target.value);
                    setHasSearched(true);
                  }}
                  placeholder={activeProv.sampleFormat}
                  className="w-full pl-4 pr-10 py-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-doc-ink dark:text-white font-mono text-base font-bold placeholder-slate-400 focus:outline-none focus:border-doc-seal tracking-wide shadow-inner min-h-[48px]"
                />
                {cleanedTrackingNumber && isValidTracking && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                )}
              </div>

              {cleanedTrackingNumber && (
                <button
                  type="button"
                  id="btn-copy-pcc-tracking"
                  onClick={handleCopy}
                  className="px-3.5 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-doc-brass font-mono font-bold text-xs shrink-0 flex items-center gap-1.5 transition min-h-[48px]"
                  title={t('Copy Tracking Reference', 'ٹریکنگ نمبر کاپی کریں')}
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-doc-brass" />}
                  <span className="hidden sm:inline">{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              )}
            </div>
          </div>
        </form>

        {/* Live Guided Fallback Card */}
        {cleanedTrackingNumber && (
          <div className="p-5 sm:p-6 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/60 space-y-5 animate-fadeIn font-sans shadow-2xl relative">
            <div aria-hidden="true" className="absolute top-0 right-0 w-48 h-48 bg-doc-brass/10 rounded-full blur-3xl pointer-events-none" />

            {/* Reference Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-doc-brass/30 pb-4">
              <div>
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-emerald-500/30">
                  {t(`${activeProv.nameEn} Tracking Ready`, `${activeProv.nameUr} ٹریکنگ ریڈی`)}
                </span>
                <p className="text-[11px] font-mono text-slate-400 mt-1 uppercase">
                  {t('Your Reference Tracking Number:', 'آپ کا ٹریکنگ ریفرنس نمبر:')}
                </p>
                <h4 className="text-xl sm:text-2xl font-mono font-extrabold text-doc-brass mt-0.5 tracking-wider">
                  {cleanedTrackingNumber}
                </h4>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-mono font-bold text-slate-200 flex items-center gap-1.5 transition min-h-[44px]"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-doc-brass" />}
                  <span>{copied ? t('COPIED!', 'کاپی ہو گیا!') : t('Copy Number', 'نمبر کاپی')}</span>
                </button>
              </div>
            </div>

            {/* Tracking Instructions Steps */}
            <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800 space-y-2.5 text-xs text-slate-300 leading-relaxed">
              <p className="font-bold text-white flex items-center gap-1.5">
                <Building className="w-4 h-4 text-emerald-400" />
                <span>{t(`How to Check Status on Official ${activeProv.nameEn} Portal:`, `آفیشل پورٹل پر سٹیٹس چیک کرنے کا طریقہ:`)}</span>
              </p>
              <ol className="list-decimal list-inside space-y-1.5 text-slate-300">
                <li>{t('Copy your tracking number above: ', 'اپنا ٹریکنگ نمبر کاپی کریں: ')}<strong className="font-mono text-doc-brass">{cleanedTrackingNumber}</strong>.</li>
                <li>{t(`Click the gold button below to navigate to the official ${activeProv.nameEn} tracking system.`, `نیچے دیے گئے بٹن سے آفیشل پورٹل کھولیں۔`)}</li>
                <li>{t(`Enter your ${activeProv.requiredFieldsEn} on the portal to view live police verification progress.`, `پورٹل پر مطلوبہ معلومات درج کر کے اپنا تازہ ترین سٹیٹس دیکھیں۔`)}</li>
                <li>{t(`If status shows "Ready for Collection", visit your PKM center with original CNIC and receipt.`, `اگر سٹیٹس تیار ظاہر کرے تو اصل شناختی کارڈ کے ہمراہ وصول کریں۔`)}</li>
              </ol>
            </div>

            {/* Direct Official Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <a
                href={activeProv.trackingPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-open-provincial-tracking"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-doc-brass via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-doc-ink font-mono font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-xl min-h-[48px]"
              >
                <span>{t(`Track on ${activeProv.nameEn} Portal (Official) →`, `آفیشل پورٹل پر ٹریک کریں ←`)}</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>

              <a
                href={`tel:${activeProv.helpline.split(' ')[0]}`}
                className="w-full py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition min-h-[48px]"
              >
                <span>{t(`Call Helpline (${activeProv.helpline}) →`, `ہیلپ لائن پر رابطہ کریں ←`)}</span>
              </a>
            </div>
          </div>
        )}

        {/* Step 3: Status Stages Visual Timeline */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3 font-sans">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-doc-seal dark:text-red-400" />
              <span>{t('4 Standard Verification Stages & Meaning:', '4 معیاری تصدیقی مراحل اور ان کے معانی:')}</span>
            </h4>
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
              3 – 7 Days Standard
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-1">
              <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold">
                <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-[10px]">1</span>
                <span>Application Submitted</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                {t('Receipt issued at PKM counter or online portal with unique tracking ID.', 'درخواست موصول ہو کر سسٹم میں ٹریکنگ نمبر جاری کر دیا گیا ہے۔')}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold">
                <span className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-[10px]">2</span>
                <span>Under Verification</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                {t('Background checked with local police station (Thana) & CRO database.', 'مقامی تھانے اور کریمنل ریکارڈ آفس (CRO) سے سیکیورٹی ویریفکیشن جاری ہے۔')}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-[10px]">3</span>
                <span>Approved &amp; Signed</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                {t('Senior Superintendent of Police (SSP / DPO) has approved clean clearance.', 'ضلعی ایس پی / ڈی پی او کی جانب سے کلیئرنس منظور کر لی گئی ہے۔')}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-1">
              <div className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400 font-bold">
                <span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-[10px]">4</span>
                <span>Ready for Collection</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                {t('Security certificate printed with QR code. Available for pickup or courier dispatch.', 'کیو آر کوڈ کے ساتھ سرٹیفکیٹ پرنٹ ہو چکا ہے اور وصولی کے لیے تیار ہے۔')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3.5 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400 font-sans flex flex-wrap items-center justify-between gap-2">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>{t('Zero Data Transmission: Tracking numbers remain in your local browser memory only', '100٪ پرائیویٹ — ٹریکنگ نمبر صرف آپ کے براؤزر میں رہتا ہے')}</span>
        </span>
        <span className="font-mono">PCC STATUS TRACKER 2026</span>
      </div>
    </div>
  );
};
