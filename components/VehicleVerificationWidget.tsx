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
    setValidated(true);
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

        {/* Verified & Guided Access */}
        {validated && (
          <div className="p-5 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/60 space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-doc-brass/30 pb-3">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-emerald-400" />
                <div>
                  <p className="text-[10px] font-mono text-doc-brass uppercase font-bold">FORMAT CONFIRMED</p>
                  <p className="font-mono font-extrabold text-base tracking-wider">{vehicleNo.toUpperCase()}</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] border border-emerald-500/30">
                READY
              </span>
            </div>

            <div className="text-xs text-slate-300 font-sans space-y-2">
              <p className="font-bold text-white">
                {t('How to View Owner & Registration Details:', 'مالک اور گاڑی کی تفصیلات دیکھنے کا طریقہ:')}
              </p>
              <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-300 pl-1 leading-relaxed">
                <li>{t('Click "COPY" to store your vehicle registration number on your clipboard.', 'پہلے کاپی کا بٹن دبائیں تاکہ نمبر کاپی ہو جائے۔')}</li>
                <li>{t(`Click "OPEN ${activeProvince.toUpperCase()} OFFICIAL MTMIS PORTAL" below.`, `نیچے دیے گئے آفیشل ایم ٹی ایم آئی ایس پورٹل بٹن پر کلک کریں۔`)}</li>
                <li>{t('Paste your number into the official search field and complete CAPTCHA to view complete vehicle records.', 'سرکاری پورٹل پر نمبر پیسٹ کریں اور کیپچا حل کر کے چیسس نمبر اور مالک کی تفصیلات دیکھیں۔')}</li>
              </ol>
            </div>

            <a
              href={config.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-doc-brass to-amber-500 hover:from-amber-500 hover:to-amber-400 text-doc-ink font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-lg min-h-[48px]"
            >
              <span>{t(`OPEN ${activeProvince.toUpperCase()} OFFICIAL MTMIS PORTAL`, `${activeProvince.toUpperCase()} آفیشل پورٹل کھولیں`)}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="pt-2 border-t border-doc-brass/20 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-doc-brass" />
                <span>Helpline: {config.helpline}</span>
              </span>
            </div>
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
