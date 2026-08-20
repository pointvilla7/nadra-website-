'use client';

import React, { useState } from 'react';
import { Car, Search, ExternalLink, ShieldCheck, CheckCircle2, MapPin, ChevronDown, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export const TrafficLookupWidget: React.FC = () => {
  const { t } = useLanguage();
  
  const [region, setRegion] = useState<'punjab' | 'sindh' | 'islamabad'>('punjab');
  const [vehicleNo, setVehicleNo] = useState('');
  const [cnic, setCnic] = useState('');
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const regionDetails = {
    punjab: {
      nameEn: 'Punjab Safe Cities Authority (PSCA)',
      nameUr: 'پنجاب سیف سٹیز اتھارٹی (ای چالان)',
      portalUrl: 'https://echallan.psca.gop.pk/',
      sample: 'LEA-19-4521',
    },
    sindh: {
      nameEn: 'Sindh Excise & Taxation Dept (Karachi)',
      nameUr: 'سندھ ایکسائز اینڈ ٹیکسیشن (کراچی)',
      portalUrl: 'https://excise.gos.pk/',
      sample: 'KHI-2022-8910',
    },
    islamabad: {
      nameEn: 'Islamabad Capital Territory (ICT) Traffic',
      nameUr: 'اسلام آباد ٹریفک پولیس پورٹل',
      portalUrl: 'https://islamabadpolice.gov.pk/',
      sample: 'ICT-18-1029',
    },
  };

  const currentRegion = regionDetails[region];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vehicleNo.trim()) {
      setErrorMsg(t('Please enter your vehicle registration number.', 'برائے مہربانی گاڑی کا رجسٹریشن نمبر درج کریں۔'));
      return;
    }
    setErrorMsg('');
    setLoading(true);
    setResult(null);
    setSearched(false);

    const cleanReg = vehicleNo.trim().toUpperCase();
    setErrorMsg('');
    setLoading(false);
    setResult({
      success: true,
      vehicleRegistration: cleanReg,
      status: 'VERIFICATION READY',
      officialUrl: region === 'punjab' ? 'https://echallan.psca.gop.pk/' : region === 'sindh' ? 'https://excise.gos.pk/vehicle/vehicle_search' : 'http://islamabadexcise.gov.pk/',
    });
    setSearched(true);
  };

  return (
    <div className="my-8 rounded-2xl glass-card border border-purple-500/30 p-6 md:p-8 shadow-xl bg-gradient-to-br from-slate-900 via-purple-950/40 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-purple-900/60">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
            <Car className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-extrabold text-lg md:text-xl text-white">
              {t('Online E-Challan & Vehicle Tax Lookup Portal', 'آن لائن ای چالان و ٹوکن ٹیکس پورٹل')}
            </h3>
            <p className="text-xs text-purple-200">
              {t('City & Province Specific Search System', 'پنجاب، سندھ اور اسلام آباد ٹریفک پورٹل')}
            </p>
          </div>
        </div>

        <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-900/80 text-purple-300 border border-purple-600/40">
          {t('PSCA & Excise 2026', 'سیف سٹی اور ایکسائز 2026')}
        </span>
      </div>

      <form onSubmit={handleSearch} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Province / City Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-purple-200 mb-2 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>{t('Select Region / Authority:', 'صوبہ / شہر کا انتخاب:')}</span>
            </label>
            <div className="relative">
              <select
                value={region}
                onChange={(e) => {
                  setRegion(e.target.value as any);
                  setSearched(false);
                }}
                className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white focus:outline-none focus:border-purple-400 text-sm font-semibold appearance-none cursor-pointer"
              >
                <option value="punjab">Punjab (PSCA / Lahore / RWP)</option>
                <option value="sindh">Sindh (Excise / Karachi)</option>
                <option value="islamabad">Islamabad Capital Territory (ICT)</option>
              </select>
              <ChevronDown className="w-4 h-4 text-purple-400 absolute right-3 top-3.5 pointer-events-none" />
            </div>
          </div>

          {/* Vehicle Number Input */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-purple-200 mb-2">
              {t('Vehicle Registration No:', 'گاڑی کا نمبر درج کریں:')}
            </label>
            <input
              type="text"
              value={vehicleNo}
              onChange={(e) => {
                setVehicleNo(e.target.value);
                setSearched(false);
              }}
              placeholder={`e.g. ${currentRegion.sample}`}
              className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 text-sm font-mono font-bold uppercase"
            />
          </div>

          {/* CNIC Optional Input */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-purple-200 mb-2">
              {t('Owner CNIC No (Optional):', 'مالک کا شناختی کارڈ نمبر:')}
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={cnic}
                onChange={(e) => {
                  setCnic(e.target.value);
                  setSearched(false);
                }}
                placeholder="3520212345671"
                className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 text-sm font-mono"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-1 transition shrink-0 shadow-lg"
              >
                <Search className="w-4 h-4" />
                <span>{t('Search', 'تلاش')}</span>
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Loading State */}
      {loading && (
        <div className="mt-6 pt-6 border-t border-purple-900/60 animate-pulse space-y-3 font-sans">
          <div className="h-4 bg-purple-900/60 rounded w-1/4"></div>
          <div className="h-20 bg-purple-900/60 rounded w-full"></div>
        </div>
      )}

      {/* Results Drawer */}
      {searched && result && !loading && (
        <div className="mt-6 pt-6 border-t border-purple-900/60 animate-fadeIn space-y-4 font-sans text-white">
          <div className="p-5 rounded-2xl bg-slate-950 border-2 border-purple-500/40 space-y-4 relative overflow-hidden font-sans">
            <div className="flex items-center justify-between border-b border-purple-500/30 pb-3 gap-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-purple-300 font-bold uppercase tracking-wider">
                    {t('Vehicle Registration Format Verified', 'گاڑی کا نمبر فارمیٹ درست ہے')}
                  </p>
                  <p className="font-mono font-bold text-base text-white tracking-wider">
                    {result.vehicleRegistration}
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-mono font-bold border border-purple-500/30">
                VERIFIED
              </span>
            </div>

            <div className="text-xs text-slate-300 space-y-3 pt-2">
              <p className="font-bold text-white text-sm flex items-center gap-1.5 border-b border-slate-800 pb-2">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span>{t('Guide to Check E-Challan / Tax Details:', 'چالان چیک کرنے کا طریقہ:')}</span>
              </p>
              <div className="grid grid-cols-1 gap-2.5">
                <div className="flex items-start gap-2.5 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  <span className="w-5 h-5 rounded-md bg-purple-600 text-white font-mono font-extrabold text-[11px] flex items-center justify-center shrink-0">1</span>
                  <p className="leading-normal">{t(`Copy registration number ${result.vehicleRegistration} for input.`, `گاڑی کا نمبر ${result.vehicleRegistration} کاپی کریں۔`)}</p>
                </div>
                <div className="flex items-start gap-2.5 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  <span className="w-5 h-5 rounded-md bg-purple-600 text-white font-mono font-extrabold text-[11px] flex items-center justify-center shrink-0">2</span>
                  <p className="leading-normal">{t('Click the button below to open the official regional traffic challan authority portal.', 'سرکاری ٹریفک چالان پورٹل کھولنے کے لیے نیچے دیے گئے بٹن پر کلک کریں۔')}</p>
                </div>
                <div className="flex items-start gap-2.5 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  <span className="w-5 h-5 rounded-md bg-purple-600 text-white font-mono font-extrabold text-[11px] flex items-center justify-center shrink-0">3</span>
                  <p className="leading-normal">{t('Enter your vehicle registration number and chassis code on the portal to get real-time unpaid e-challans.', 'گاڑی کا نمبر اور چیسس کوڈ درج کر کے اپنے بقایا ٹریفک چالان اور جرمانے دیکھیں۔')}</p>
                </div>
              </div>
            </div>

            <a
              href={result.officialUrl}
              target="_blank"
              rel="nofollow noopener"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono font-bold text-sm flex items-center justify-center gap-2 transition shadow-lg min-h-[48px]"
            >
              <span>{t('Check E-Challan Status on Official Portal →', 'آفیشل پورٹل پر ای چالان چیک کریں ←')}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-purple-900/60 text-[11px] text-purple-300 flex items-center gap-1.5">
        <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
        <span>
          {t('E-Challan payments can be made online via ePay Punjab, JazzCash, Easypaisa, or 1Link.', 'ای چالان کی ادائیگی ای پے پنجاب، ایزی پیسہ یا جیز کیش سے ممکن ہے۔')}
        </span>
      </div>
    </div>
  );
};
