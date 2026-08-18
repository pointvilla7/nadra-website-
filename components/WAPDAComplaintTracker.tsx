'use client';

import React, { useState } from 'react';
import {
  AlertTriangle,
  Phone,
  MessageSquare,
  Globe,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  Clock,
  Building,
  Smartphone,
  ChevronDown,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

export interface DiscoContact {
  id: string;
  name: string;
  short: string;
  region: string;
  helpline: string;
  smsCode: string;
  portalUrl: string;
}

export const DISCO_LIST: DiscoContact[] = [
  { id: 'lesco', name: 'Lahore Electric Supply Company', short: 'LESCO', region: 'Lahore, Kasur, Okara', helpline: '118 or 0800-00118', smsCode: '8118', portalUrl: 'https://ccms.pitc.com.pk' },
  { id: 'iesco', name: 'Islamabad Electric Supply Company', short: 'IESCO', region: 'Islamabad, Rawalpindi, Attock', helpline: '118 or 051-9252937', smsCode: '8118', portalUrl: 'https://ccms.pitc.com.pk' },
  { id: 'fesco', name: 'Faisalabad Electric Supply Company', short: 'FESCO', region: 'Faisalabad, Sargodha, Jhang', helpline: '118 or 0800-66554', smsCode: '8118', portalUrl: 'https://ccms.pitc.com.pk' },
  { id: 'gepco', name: 'Gujranwala Electric Power Company', short: 'GEPCO', region: 'Gujranwala, Sialkot, Gujrat', helpline: '118 or 055-9200504', smsCode: '8118', portalUrl: 'https://ccms.pitc.com.pk' },
  { id: 'mepco', name: 'Multan Electric Power Company', short: 'MEPCO', region: 'Multan, Bahawalpur, D.G. Khan', helpline: '118 or 0800-63726', smsCode: '8118', portalUrl: 'https://ccms.pitc.com.pk' },
  { id: 'pesco', name: 'Peshawar Electric Supply Company', short: 'PESCO', region: 'Peshawar, Mardan, Swat', helpline: '118 or 091-9212010', smsCode: '8118', portalUrl: 'https://ccms.pitc.com.pk' },
  { id: 'hesco', name: 'Hyderabad Electric Supply Company', short: 'HESCO', region: 'Hyderabad, Mirpurkhas, Nawabshah', helpline: '118 or 022-9260161', smsCode: '8118', portalUrl: 'https://ccms.pitc.com.pk' },
  { id: 'sepco', name: 'Sukkur Electric Power Company', short: 'SEPCO', region: 'Sukkur, Larkana, Ghotki', helpline: '118 or 071-9310797', smsCode: '8118', portalUrl: 'https://ccms.pitc.com.pk' },
  { id: 'qesco', name: 'Quetta Electric Supply Company', short: 'QESCO', region: 'Balochistan (Quetta, Sibi, Khuzdar)', helpline: '118 or 081-9201750', smsCode: '8118', portalUrl: 'https://ccms.pitc.com.pk' },
  { id: 'ke', name: 'K-Electric Limited', short: 'K-Electric', region: 'Karachi, Hub, Dhabeji', helpline: '118 or 021-111-000-118', smsCode: '8119', portalUrl: 'https://www.ke.com.pk' },
];

interface WAPDAComplaintTrackerProps {
  className?: string;
  hideHeader?: boolean;
}

export const WAPDAComplaintTracker: React.FC<WAPDAComplaintTrackerProps> = ({
  className = '',
  hideHeader = false,
}) => {
  const { t } = useLanguage();
  const [selectedMethod, setSelectedMethod] = useState<'ccms' | 'phone' | 'sms' | 'app'>('ccms');
  const [selectedDisco, setSelectedDisco] = useState<string>('lesco');
  const [ticketInput, setTicketInput] = useState('');
  const [searchDiscoQuery, setSearchDiscoQuery] = useState('');

  const currentDisco = DISCO_LIST.find((d) => d.id === selectedDisco) || DISCO_LIST[0];

  const filteredDiscos = DISCO_LIST.filter(
    (d) =>
      d.name.toLowerCase().includes(searchDiscoQuery.toLowerCase()) ||
      d.short.toLowerCase().includes(searchDiscoQuery.toLowerCase()) ||
      d.region.toLowerCase().includes(searchDiscoQuery.toLowerCase())
  );

  return (
    <div
      className={`w-full max-w-[580px] mx-auto rounded-2xl doc-card border-2 border-doc-brass/40 shadow-xl overflow-hidden bg-white dark:bg-doc-dark-card text-doc-ink dark:text-slate-100 transition-all ${className}`}
    >
      {/* Header */}
      {!hideHeader && (
        <div className="bg-doc-ink text-white p-5 sm:p-6 border-b-2 border-doc-brass/40 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-48 h-48 bg-doc-seal/15 rounded-full blur-2xl pointer-events-none"
          />
          <div className="flex items-center justify-between gap-2 mb-2">
            <InteractiveToolBadge labelEn="COMPLAINT TRACKER" labelUr="شکایات ٹریکر" variant="gold" />
            <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-bold">
              <Clock className="w-3.5 h-3.5" />
              <span>24/7 HELPLINE</span>
            </div>
          </div>
          <div className="flex items-start gap-3 mt-3">
            <div className="p-2.5 rounded-xl bg-doc-brass/20 text-doc-brass border border-doc-brass/40 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-tight">
                {t('WAPDA / DISCO Complaint Status 2026', 'واپڈا بجلی شکایات ٹریکر 2026')}
              </h2>
              <p className="text-xs text-slate-300 mt-1 font-sans">
                {t(
                  'Track electricity complaints online via PITC CCMS, 118 helpline, and 8118 SMS',
                  'آن لائن بجلی شکایات کی صورتحال معلوم کریں، 118 ہیلپ لائن اور 8118 ایس ایم ایس'
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Methods Tabs */}
      <div className="p-5 sm:p-6 space-y-5">
        <div className="space-y-2">
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass">
            {t('Step 1: Choose Tracking / Complaint Method', 'مرحلہ 1: شکایات کا طریقہ منتخب کریں')}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {[
              { id: 'ccms', labelEn: 'PITC CCMS', labelUr: 'آن لائن پورٹل', icon: Globe },
              { id: 'phone', labelEn: '118 Call Center', labelUr: '118 کال سینٹر', icon: Phone },
              { id: 'sms', labelEn: '8118 SMS', labelUr: '8118 ایس ایم ایس', icon: MessageSquare },
              { id: 'app', labelEn: 'Mobile App', labelUr: 'موبائل ایپ', icon: Smartphone },
            ].map((m) => {
              const Icon = m.icon;
              const isSelected = selectedMethod === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedMethod(m.id as any)}
                  className={`py-2 px-2 rounded-xl border text-center flex flex-col items-center justify-center gap-1 transition-all min-h-[56px] focus:outline-none focus-visible:ring-2 focus-visible:ring-doc-seal text-xs font-sans ${
                    isSelected
                      ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                      : 'bg-doc-paper/60 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-doc-brass' : 'text-slate-500'}`} />
                  <span className="font-serif font-bold text-[11px] leading-tight">{t(m.labelEn, m.labelUr)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* METHOD 1: PITC CCMS ONLINE TRACKING */}
        {selectedMethod === 'ccms' && (
          <div className="p-4 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/50 shadow-lg space-y-4 animate-fadeIn">
            <div className="flex items-start gap-2">
              <Globe className="w-5 h-5 text-doc-brass shrink-0 mt-0.5" />
              <div>
                <p className="font-mono text-[10px] text-doc-brass font-bold uppercase tracking-wider">
                  {t('Method 1: Centralized Online Tracking (CCMS)', 'طریقہ 1: مرکزی آن لائن شکایات پورٹل')}
                </p>
                <p className="font-serif font-bold text-base text-white">
                  {t('Track by 14-Digit Reference No or Ticket ID', 'ریفرنس نمبر یا ٹکٹ آئی ڈی سے ٹریک کریں')}
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/80 border border-doc-brass/30 text-xs font-sans text-slate-300 space-y-2">
              <p className="font-semibold text-doc-brass">
                {t('How to track on official PITC CCMS:', 'آفیشل PITC CCMS پر کیسے ٹریک کریں:')}
              </p>
              <ol className="list-decimal ml-4 space-y-1 text-slate-200">
                <li>{t('Click "Open Official PITC CCMS Portal" below.', 'نیچے دیے گئے لنک سے آفیشل پورٹل کھولیں۔')}</li>
                <li>{t('Select "Track by Reference" or "Track by Ticket".', '"Track by Reference" یا "Track by Ticket" منتخب کریں۔')}</li>
                <li>{t('Enter your 14-digit Reference Number or Ticket Number and submit.', 'اپنا 14 ہندسوں کا ریفرنس نمبر درج کریں اور اسٹیٹس دیکھیں۔')}</li>
              </ol>
            </div>

            <a
              href="https://ccms.pitc.com.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-doc-seal hover:bg-red-700 text-white font-mono font-bold text-xs flex items-center justify-center gap-2 transition shadow-md min-h-[46px]"
            >
              <span>{t('OPEN OFFICIAL PITC CCMS TRACKING (ccms.pitc.com.pk)', 'آفیشل PITC پورٹل پر شکایت ٹریک کریں')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* METHOD 2: 118 CALL CENTER */}
        {selectedMethod === 'phone' && (
          <div className="p-4 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/50 shadow-lg space-y-4 animate-fadeIn">
            <div className="flex items-start gap-2">
              <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-mono text-[10px] text-doc-brass font-bold uppercase tracking-wider">
                  {t('Method 2: Nationwide 24/7 Helpline', 'طریقہ 2: ملک گیر 24 گھنٹے ہیلپ لائن')}
                </p>
                <p className="font-serif font-bold text-base text-white">
                  {t('Dial 118 for Immediate Electricity Complaint', 'بجلی کی فوری شکایت کے لیے 118 ملائیں')}
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-emerald-500/30 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-mono text-emerald-400 uppercase font-bold">
                  {t('Toll-Free Call Center (All Networks)', 'مفت کال سینٹر (تمام نیٹ ورکس)')}
                </p>
                <p className="font-mono font-extrabold text-2xl text-white mt-0.5">118</p>
              </div>
              <a
                href="tel:118"
                className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs flex items-center gap-1.5 shadow-sm transition min-h-[40px]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{t('CALL 118', '118 ملائیں')}</span>
              </a>
            </div>

            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              {t(
                'Available nationwide for LESCO, IESCO, FESCO, GEPCO, MEPCO, PESCO, HESCO, SEPCO, QESCO, and K-Electric. Keep your 14-digit reference number ready.',
                'تمام ڈسکوز کے لیے دستیاب ہے۔ کال کرنے سے پہلے اپنے بل کا 14 ہندسوں کا ریفرنس نمبر پاس رکھیں۔'
              )}
            </p>
          </div>
        )}

        {/* METHOD 3: 8118 SMS */}
        {selectedMethod === 'sms' && (
          <div className="p-4 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/50 shadow-lg space-y-4 animate-fadeIn">
            <div className="flex items-start gap-2">
              <MessageSquare className="w-5 h-5 text-doc-brass shrink-0 mt-0.5" />
              <div>
                <p className="font-mono text-[10px] text-doc-brass font-bold uppercase tracking-wider">
                  {t('Method 3: SMS Complaint Service', 'طریقہ 3: ایس ایم ایس کے ذریعے شکایت')}
                </p>
                <p className="font-serif font-bold text-base text-white">
                  {t('Send SMS to 8118 (or 8119 for KE)', '8118 پر ایس ایم ایس بھیجیں')}
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-doc-brass/30 space-y-2 text-xs font-sans text-slate-300">
              <p className="font-mono font-bold text-doc-brass">
                {t('SMS Format:', 'ایس ایم ایس کا طریقہ:')}
              </p>
              <div className="p-2 rounded bg-slate-900 font-mono text-sm text-emerald-300 font-bold">
                pitc &lt;14-digit reference number&gt;
              </div>
              <p className="text-[11px] text-slate-400">
                {t('Example: pitc 14112345678901 and send to 8118', 'مثال: pitc 14112345678901 لکھ کر 8118 پر بھیجیں۔')}
              </p>
            </div>

            <a
              href="sms:8118?body=pitc%20"
              className="w-full py-3 px-4 rounded-xl bg-doc-seal hover:bg-red-700 text-white font-mono font-bold text-xs flex items-center justify-center gap-2 transition shadow-md min-h-[44px]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-doc-brass" />
              <span>{t('OPEN SMS ON PHONE (8118)', 'موبائل پر SMS کھولیں')}</span>
            </a>
          </div>
        )}

        {/* METHOD 4: MOBILE APPS */}
        {selectedMethod === 'app' && (
          <div className="p-4 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/50 shadow-lg space-y-4 animate-fadeIn">
            <div className="flex items-start gap-2">
              <Smartphone className="w-5 h-5 text-doc-brass shrink-0 mt-0.5" />
              <div>
                <p className="font-mono text-[10px] text-doc-brass font-bold uppercase tracking-wider">
                  {t('Method 4: Official DISCO Mobile Apps', 'طریقہ 4: آفیشل ڈسکو موبائل ایپس')}
                </p>
                <p className="font-serif font-bold text-base text-white">
                  {t('LESCO Light, IESCO Mobile & KE Live Apps', 'لیسکو لائٹ اور کے الیکٹرک لائیو ایپس')}
                </p>
              </div>
            </div>

            <div className="space-y-2 text-xs font-sans">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                <p className="font-serif font-bold text-sm text-doc-brass">LESCO Light App (Lahore)</p>
                <p className="text-slate-300">
                  {t('Official app to lodge electricity complaints, track status, view load management schedules, and duplicate bills.', 'بجلی بندش کی شکایت، بل اور شیڈول چیک کرنے کی آفیشل ایپ۔')}
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                <p className="font-serif font-bold text-sm text-doc-brass">KE Live App (Karachi)</p>
                <p className="text-slate-300">
                  {t('Instant billing, breakdown reporting, and load-shedding notifications for K-Electric customers.', 'کے الیکٹرک صارفین کے لیے بریک ڈاؤن رپورٹنگ اور لوڈشیڈنگ معلومات۔')}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* DISCO Emergency Helplines Directory */}
        <div className="space-y-2.5 pt-2 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1">
              <Building className="w-3.5 h-3.5 text-doc-seal dark:text-red-400" />
              <span>{t('All Electricity Companies (DISCO) Directory', 'تمام بجلی کمپنیوں (ڈسکوز) کے رابطہ نمبر')}</span>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {DISCO_LIST.map((disco) => (
              <div
                key={disco.id}
                className="p-3 rounded-xl bg-doc-paper dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1 text-xs font-sans"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-doc-ink dark:text-white">{disco.short}</span>
                  <span className="text-[10px] font-mono font-bold text-doc-seal dark:text-red-400">
                    SMS: {disco.smsCode}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">{disco.region}</p>
                <a
                  href={`tel:${disco.helpline.split(' ')[0]}`}
                  className="inline-flex items-center gap-1 font-mono font-bold text-xs text-doc-seal dark:text-amber-300 hover:underline pt-0.5"
                >
                  <Phone className="w-3 h-3" />
                  <span>{disco.helpline}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1 font-sans">
          <p className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-doc-seal shrink-0" />
            <span>{t('Independent Information Portal', 'آزادانہ معلوماتی پورٹل')}</span>
          </p>
          <p className="leading-relaxed">
            {t(
              'Pakistan Info Hub is an independent portal, not affiliated with WAPDA, PITC, or any electricity distribution company. Always call 118 for life-threatening electrical emergencies.',
              'پاکستان انفو ہب کا واپڈا یا ڈسکوز سے کوئی سرکاری تعلق نہیں۔ جان لیوا برقی ہنگامی صورتحال میں فوری طور پر 118 پر رابطہ کریں۔'
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
