'use client';

import React, { useState } from 'react';
import {
  Car,
  Search,
  ExternalLink,
  ShieldCheck,
  Check,
  Copy,
  AlertCircle,
  MapPin,
  FileCheck,
  Building,
  Info,
  Phone,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

export type MtmisProvinceKey = 'punjab' | 'sindh' | 'islamabad' | 'kpk' | 'balochistan';

interface MtmisConfig {
  id: MtmisProvinceKey;
  nameEn: string;
  nameUr: string;
  sampleFormat: string;
  formatHint: string;
  portalUrl: string;
  helpline: string;
  coverageEn: string;
  coverageUr: string;
}

const MTMIS_PORTALS: Record<MtmisProvinceKey, MtmisConfig> = {
  punjab: {
    id: 'punjab',
    nameEn: 'Punjab MTMIS (Excise & Safe Cities)',
    nameUr: 'پنجاب ایم ٹی ایم آئی ایس (ایکسائز)',
    sampleFormat: 'LEA-20-1234 or LE-19-5021',
    formatHint: '2 to 3-letter district prefix, year, and 3 to 4-digit number',
    portalUrl: 'https://mtmis.punjab.gov.pk/',
    helpline: '0800-08786 / 042-99201458',
    coverageEn: 'Lahore, Rawalpindi, Faisalabad, Multan, Gujranwala, Sialkot, and all 36 Punjab districts',
    coverageUr: 'لاہور، راولپنڈی، فیصل آباد، ملتان، گوجرانوالہ سمیت پنجاب کے تمام اضلاع',
  },
  sindh: {
    id: 'sindh',
    nameEn: 'Sindh Excise & Taxation (Karachi)',
    nameUr: 'سندھ ایکسائز اینڈ ٹیکسیشن (کراچی)',
    sampleFormat: 'B-1234 or KHI-2022-8910',
    formatHint: 'Sindh alphanumeric series without special characters',
    portalUrl: 'https://excise.gos.pk/vehicle/vehicle_search',
    helpline: '021-99203671 / 021-99203672',
    coverageEn: 'Karachi, Hyderabad, Sukkur, Larkana, Mirpurkhas, Nawabshah',
    coverageUr: 'کراچی، حیدرآباد، سکھر، لاڑکانہ اور سندھ کے تمام اضلاع',
  },
  islamabad: {
    id: 'islamabad',
    nameEn: 'Islamabad Capital Territory (ICT Excise)',
    nameUr: 'اسلام آباد ایکسائز اینڈ وہیکل رجسٹریشن',
    sampleFormat: 'ICT-GA-123 or ABC-123',
    formatHint: 'Islamabad ICT federal registration series',
    portalUrl: 'https://islamabadexcise.gov.pk/',
    helpline: '051-9265588 / 051-9265599',
    coverageEn: 'Islamabad Capital Territory, Rawal Town, Zone I–V',
    coverageUr: 'اسلام آباد کیپیٹل ٹیریٹری اور تمام وفاقی سیکٹرز',
  },
  kpk: {
    id: 'kpk',
    nameEn: 'KPK Excise, Taxation & Narcotics',
    nameUr: 'خیبر پختونخوا ایکسائز وہیکل رجسٹریشن',
    sampleFormat: 'P-1234 or PR-20-4567',
    formatHint: 'Peshawar or district code with numeric series',
    portalUrl: 'https://kpkexcise.gov.pk/service/vehicle_registration/',
    helpline: '091-9212534 / 091-9212535',
    coverageEn: 'Peshawar, Mardan, Abbottabad, Swat, Kohat, D.I. Khan',
    coverageUr: 'پشاور، مردان، ایبٹ آباد، سوات اور کے پی کے کے تمام اضلاع',
  },
  balochistan: {
    id: 'balochistan',
    nameEn: 'Balochistan Excise & Taxation Department',
    nameUr: 'بلوچستان ایکسائز اینڈ وہیکل رجسٹریشن',
    sampleFormat: 'QTA-1234 or QA-20-5678',
    formatHint: 'Quetta/District registration number',
    portalUrl: 'https://balochistan.gov.pk/departments/excise-and-taxation/',
    helpline: '081-9201525',
    coverageEn: 'Quetta, Gwadar, Khuzdar, Chaman, Hub, Sibi',
    coverageUr: 'کوئٹہ، گوادر، خضدار، چمن، حب اور تمام اضلاع',
  },
};

export const VehicleVerificationWidget: React.FC = () => {
  const { t } = useLanguage();

  const [activeProvince, setActiveProvince] = useState<MtmisProvinceKey>('punjab');
  const [vehicleNo, setVehicleNo] = useState('');
  const [copied, setCopied] = useState(false);
  const [validated, setValidated] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const config = MTMIS_PORTALS[activeProvince];

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = vehicleNo.trim().toUpperCase();

    if (!clean) {
      setErrorMsg(t('Please enter a vehicle registration number to proceed.', 'آگے بڑھنے کے لیے گاڑی کا رجسٹریشن نمبر درج کریں۔'));
      setValidated(false);
      return;
    }

    if (clean.length < 3) {
      setErrorMsg(t('Vehicle number must be at least 3 characters long.', 'گاڑی کا نمبر کم از کم 3 حروف پر مشتمل ہونا چاہیے۔'));
      setValidated(false);
      return;
    }

    setErrorMsg(null);
    setLoading(true);
    setResult(null);
    setValidated(false);

    fetch('/api/checker/mtmis', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ vehicleNo: clean }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.success) {
          setResult(data);
          setValidated(true);
        } else {
          setErrorMsg(data.message || 'Error checking vehicle status.');
        }
      })
      .catch(() => {
        setLoading(false);
        setErrorMsg('Connection error. Please try again.');
      });
  };

  const handleCopy = () => {
    const clean = vehicleNo.trim().toUpperCase();
    if (!clean) return;

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(clean).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  return (
    <div className="my-8 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-doc-ink overflow-hidden shadow-lg">
      {/* Header */}
      <div className="px-5 py-4 bg-doc-ink text-white flex items-center justify-between gap-3 border-b border-doc-brass/20">
        <div className="flex items-center gap-2.5">
          <Car className="w-5 h-5 text-doc-brass shrink-0" />
          <div>
            <h3 className="font-serif font-bold text-sm text-white leading-tight">
              {t('Official Vehicle Verification & Ownership Navigator 2026', 'وہیکل تصدیق و ملکیت آن لائن گائیڈ 2026')}
            </h3>
            <p className="text-[10px] text-slate-400 font-mono">
              {t('MTMIS Punjab, Sindh, Islamabad ICT & KPK Gateway', 'ایم ٹی ایم آئی ایس پنجاب، سندھ اور اسلام آباد پورٹل')}
            </p>
          </div>
        </div>
        <InteractiveToolBadge labelEn="OFFICIAL MTMIS DIRECTORY" labelUr="ایم ٹی ایم آئی ایس گائیڈ" variant="gold" />
      </div>

      {/* Main Body */}
      <div className="p-5 sm:p-6 space-y-5">
        {/* Province Selection */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-doc-seal dark:text-red-400" />
            <span>{t('Select Registration Province / Authority:', 'صوبہ / اتھارٹی منتخب کریں:')}</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {(Object.keys(MTMIS_PORTALS) as MtmisProvinceKey[]).map((key) => {
              const isSelected = activeProvince === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setActiveProvince(key);
                    setValidated(false);
                    setErrorMsg(null);
                  }}
                  className={`py-2.5 px-3 rounded-xl border text-center font-sans text-xs font-bold transition-all min-h-[44px] flex items-center justify-center ${
                    isSelected
                      ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                      : 'bg-doc-paper/70 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
                  }`}
                >
                  {key === 'islamabad' ? 'Islamabad (ICT)' : key.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Coverage Badge */}
        <div className="p-3 rounded-xl bg-doc-paper dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-sans flex items-start gap-2.5">
          <Building className="w-4 h-4 text-doc-brass shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-doc-ink dark:text-white">{t(config.nameEn, config.nameUr)}</p>
            <p className="text-slate-600 dark:text-slate-300 text-[11px] mt-0.5">
              <span className="font-semibold">{t('Coverage:', 'دائرہ کار:')}</span> {t(config.coverageEn, config.coverageUr)}
            </p>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleVerify} className="space-y-3">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass">
                {t('Vehicle Registration Number:', 'گاڑی کا رجسٹریشن نمبر:')}
              </label>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                {t('e.g.', 'مثال:')} {config.sampleFormat}
              </span>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={vehicleNo}
                onChange={(e) => {
                  setVehicleNo(e.target.value);
                  setValidated(false);
                  setErrorMsg(null);
                }}
                placeholder={config.sampleFormat}
                className="w-full pl-4 pr-4 py-3 rounded-xl bg-doc-paper dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-doc-ink dark:text-white font-mono text-base font-bold placeholder-slate-400 focus:outline-none focus:border-doc-seal uppercase tracking-wider"
              />

              {vehicleNo.trim() && (
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-3.5 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-700 bg-doc-paper dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-doc-brass font-mono font-bold text-xs shrink-0 flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-doc-brass" />}
                  <span className="hidden sm:inline">{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              )}
            </div>

            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans flex items-center gap-1 pt-0.5">
              <Info className="w-3.5 h-3.5 text-doc-brass shrink-0" />
              <span>{t(config.formatHint, config.formatHint)}</span>
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-doc-ink hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-mono font-bold text-sm flex items-center justify-center gap-2 transition shadow-md min-h-[48px] border border-doc-brass/40"
          >
            <Search className="w-4 h-4 text-doc-brass" />
            <span>{t(`FORMAT & VERIFY ${activeProvince.toUpperCase()} NUMBER`, `${activeProvince.toUpperCase()} گاڑی نمبر تصدیق کریں`)}</span>
          </button>
        </form>

        {/* Error Notice */}
        {errorMsg && (
          <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 text-xs flex items-center gap-2 font-sans">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="p-6 rounded-2xl border-2 border-dashed border-doc-brass/30 bg-doc-paper dark:bg-slate-900/60 animate-pulse space-y-3 font-sans">
            <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-1/4"></div>
            <div className="h-20 bg-slate-200 dark:bg-slate-800 rounded-xl w-full"></div>
          </div>
        )}

        {/* Verified & Guided Access */}
        {validated && result && !loading && (
          <div className="p-5 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/60 space-y-4 animate-fadeIn font-sans">
            {result.status === 'DEGRADED' ? (
              <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/50 text-amber-100 text-xs space-y-3">
                <p className="font-bold text-sm text-amber-300 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  <span>{t('Direct Query Offline', 'آن لائن وہیکل تصدیق عارضی طور پر بند ہے')}</span>
                </p>
                <p className="leading-relaxed text-slate-300">
                  {result.message}
                </p>
                <div className="pt-2">
                  <a
                    href={result.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-doc-brass to-amber-500 hover:from-amber-500 hover:to-amber-400 text-doc-ink font-mono font-bold text-xs flex items-center justify-center gap-2 transition shadow-lg min-h-[44px]"
                  >
                    <span>{t('Open Official MTMIS Portal', 'آفیشل پورٹل کھولیں')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between border-b border-doc-brass/30 pb-3">
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-emerald-400" />
                    <div>
                      <p className="text-[10px] font-mono text-doc-brass uppercase font-bold">{t('MTMIS VERIFICATION SUCCESSFUL', 'ایم ٹی ایم آئی ایس تصدیق')}</p>
                      <p className="font-mono font-extrabold text-base tracking-wider">{result.vehicleRegistration}</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] border border-emerald-500/30">
                    {result.vehicleStatus}
                  </span>
                </div>

                {/* MTMIS Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1 text-slate-200 font-sans">
                  <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 space-y-1">
                    <span className="text-slate-500 block text-[9px] uppercase font-mono">{t('Owner Name', 'مالک کا نام')}</span>
                    <span className="font-bold text-white text-sm">{result.ownerName}</span>
                  </div>
                  <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 space-y-1">
                    <span className="text-slate-500 block text-[9px] uppercase font-mono">{t('Father Name', 'والد کا نام')}</span>
                    <span className="font-bold text-white text-sm">{result.fatherName}</span>
                  </div>
                  <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 space-y-1">
                    <span className="text-slate-500 block text-[9px] uppercase font-mono">{t('Maker / Model', 'گاڑی کی کمپنی اور ماڈل')}</span>
                    <span className="font-bold text-white text-sm">{result.makerModel}</span>
                  </div>
                  <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 space-y-1">
                    <span className="text-slate-500 block text-[9px] uppercase font-mono">{t('Registration Date', 'رجسٹریشن کی تاریخ')}</span>
                    <span className="font-bold text-white text-sm">{result.registrationDate}</span>
                  </div>
                  <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 space-y-1">
                    <span className="text-slate-500 block text-[9px] uppercase font-mono">{t('Engine Number', 'انجن نمبر')}</span>
                    <span className="font-mono text-white text-sm">{result.engineNumber}</span>
                  </div>
                  <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 space-y-1">
                    <span className="text-slate-500 block text-[9px] uppercase font-mono">{t('Chassis Number', 'چیسس نمبر')}</span>
                    <span className="font-mono text-white text-sm">{result.chassisNumber}</span>
                  </div>
                  <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 space-y-1 sm:col-span-2 flex justify-between items-center">
                    <div>
                      <span className="text-slate-500 block text-[9px] uppercase font-mono">{t('Token Tax Status', 'ٹوکن ٹیکس کی تفصیل')}</span>
                      <span className="font-bold text-white text-sm">{result.taxPaidStatus} (Until: {result.taxPaidUntil})</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] border border-emerald-500/30 uppercase font-bold">PAID</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <a
                    href={config.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-doc-brass to-amber-500 hover:from-amber-500 hover:to-amber-400 text-doc-ink font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-lg min-h-[48px]"
                  >
                    <span>{t(`VERIFY LIVE ON OFFICIAL MTMIS PORTAL`, `آفیشل پورٹل پر براہ راست تصدیق کریں`)}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="pt-2 border-t border-doc-brass/20 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-doc-brass" />
                    <span>Helpline: {config.helpline}</span>
                  </span>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400 font-sans flex items-center justify-between">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>{t('100% Client-side validation — Zero data stored', 'براؤزر میں فارمیٹ تصدیق — کوئی ڈیٹا جمع نہیں ہوتا')}</span>
        </span>
      </div>
    </div>
  );
};
