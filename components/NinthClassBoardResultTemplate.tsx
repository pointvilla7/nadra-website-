'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { NinthClassBoardConfig, NINTH_CLASS_BOARDS } from '@/lib/data/ninthClassBoards';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';
import { AdPlacementZone } from '@/components/AdPlacementZone';
import { FAQAccordionVisual } from '@/components/visuals/FAQAccordionVisual';
import {
  GraduationCap,
  ExternalLink,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  RotateCcw,
  BookOpen,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Lock,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

interface NinthClassBoardResultTemplateProps {
  board: NinthClassBoardConfig;
}

export const NinthClassBoardResultTemplate: React.FC<NinthClassBoardResultTemplateProps> = ({ board }) => {
  const { t } = useLanguage();
  const [rollNo, setRollNo] = useState('');
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [searched, setSearched] = useState(false);

  const cleanRoll = rollNo.replace(/[^0-9]/g, '');

  const handleCopyRoll = () => {
    if (!cleanRoll) {
      setErrorMsg(t('Please enter your roll number first.', 'برائے مہربانی پہلے اپنا رول نمبر درج کریں۔'));
      return;
    }
    navigator.clipboard.writeText(cleanRoll);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePortalRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cleanRoll || cleanRoll.length < 5 || cleanRoll.length > 9) {
      setErrorMsg(t('Please enter a valid 5 to 8-digit roll number (e.g. 524109).', 'برائے مہربانی 5 سے 8 ہندسوں کا درست رول نمبر درج کریں۔'));
      return;
    }
    setErrorMsg('');
    setSearched(true);
    window.open(board.resultPortalUrl, '_blank', 'noopener,noreferrer');
  };

  const otherBoards = Object.values(NINTH_CLASS_BOARDS).filter((b) => b.slug !== board.slug);

  const breadcrumbs = [
    { nameEn: 'Education', nameUr: 'تعلیم' },
    { nameEn: '9th Class Result 2026', nameUr: 'نہم رزلٹ 2026' },
    { nameEn: board.nameEn, nameUr: board.nameUr },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
          { '@type': 'ListItem', position: 2, name: 'Education', item: 'https://www.pakistaninfohub.com/education' },
          { '@type': 'ListItem', position: 3, name: 'BISE Result Checker 2026', item: 'https://www.pakistaninfohub.com/education/bise-result-checker-2026' },
          { '@type': 'ListItem', position: 4, name: `${board.nameEn} 9th Class Result 2026`, item: `https://www.pakistaninfohub.com/education/${board.slug}` },
        ],
      },
      {
        '@type': 'Article',
        headline: `${board.nameEn} 9th Class Result 2026 Check Online by Roll Number & SMS`,
        description: board.metaDescription,
        author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
        publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
        datePublished: '2026-09-02',
        dateModified: '2026-09-02',
        mainEntityOfPage: `https://www.pakistaninfohub.com/education/${board.slug}`,
      },
      {
        '@type': 'HowTo',
        name: `How to Check ${board.nameEn} 9th Class Result 2026 Online and by SMS`,
        description: `Step-by-step procedure to check ${board.boardFullNameEn} SSC Part-I annual result 2026.`,
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Prepare Your Roll Number',
            text: `Keep your 6-digit ${board.nameEn} examination roll number from your roll number slip ready.`,
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Check Online via Portal',
            text: `Visit official portal ${board.resultPortalUrl}, enter your roll number, enter CAPTCHA if prompted, and click View Result.`,
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Check Instantly via SMS',
            text: `Send your roll number via SMS to official board shortcode ${board.smsCode} to receive your marksheet on your phone.`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: board.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.questionEn,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answerEn,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="space-y-10 md:space-y-12 animate-fadeIn max-w-5xl mx-auto">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <InteractiveToolBadge labelEn="OFFICIAL PORTAL HELPER" labelUr="سرکاری پورٹل رہنمائی" variant="gold" />
            <VerifiedBadge />
            {board.isAnnouncedToday ? (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-900 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 animate-pulse">
                🟢 ANNOUNCED TODAY — RESULTS LIVE
              </span>
            ) : (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-100 text-blue-900 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-300 dark:border-blue-700">
                🔵 OFFICIAL RESULT LIVE ON PORTAL
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold tracking-tight text-doc-ink dark:text-white">
            {board.nameEn} 9th Class Result 2026 Online Check
            <span className="block text-doc-brass text-xl sm:text-2xl mt-1 font-bold">
              {board.boardFullNameUr} — نہم کلاس رزلٹ 2026
            </span>
          </h1>

          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-sans">
            Check the official <strong>9th Class (SSC Part-I) Annual Examination Result 2026</strong> for <strong>{board.boardFullNameEn}</strong>.
            {board.isAnnouncedToday
              ? ` The result was officially announced today, Wednesday, September 2, 2026 at 10:00 AM.`
              : ` The result was officially declared on July 29, 2026 and is currently available for marks verification.`}{' '}
            Enter your roll number below for the direct portal link or use the instant verified SMS code <strong>{board.smsCode}</strong>.
          </p>
        </header>

        {/* Announcement Status Banner */}
        <div className={`p-4 rounded-2xl border flex items-start gap-3.5 ${
          board.isAnnouncedToday
            ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
            : 'bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-800 text-blue-950 dark:text-blue-200'
        }`}>
          <Clock className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
          <div className="space-y-1">
            <p className="text-xs font-mono font-extrabold uppercase tracking-wider">
              {t('Official Announcement Status', 'سرکاری اعلان کی صورتحال')}
            </p>
            <p className="text-sm font-sans font-bold">
              {t(board.announcementDateEn, board.announcementDateUr)}
            </p>
            <p className="text-xs opacity-90">
              {t(
                `Jurisdiction districts: ${board.districtsEn.join(', ')}.`,
                `زیر انتظام اضلاع: ${board.districtsUr.join('، ')}۔`
              )}
            </p>
          </div>
        </div>

        {/* Direct Answer Box */}
        <DirectAnswerBox
          topicTitleEn={`How to Check ${board.nameEn} 9th Class Result 2026 Right Now`}
          topicTitleUr={`${board.nameUr} نہم کلاس رزلٹ چیک کرنے کا فوری طریقہ`}
          answerEn={`To check your ${board.nameEn} 9th class result 2026 right now: (1) Fastest Method (No Internet Needed): Send your 6-digit Roll Number via SMS to ${board.smsCode} to get your total marks within 1-2 minutes (~PKR 2 + tax). (2) Online Portal: Visit official ${board.nameEn} portal (${board.resultPortalUrl}), enter your roll number, solve CAPTCHA if prompted, and click View Result. If the website is slow, SMS is 100% reliable during peak traffic.`}
          answerUr={`${board.nameUr} نہم کلاس رزلٹ 2026 چیک کرنے کا تیز ترین طریقہ: (1) بغیر انٹرنیٹ کے: اپنا رول نمبر ایس ایم ایس میں لکھ کر ${board.smsCode} پر بھیجیں، 1 سے 2 منٹ میں کل نمبر موصول ہو جائیں گے۔ (2) آن لائن پورٹل: سرکاری ویب سائٹ (${board.resultPortalUrl}) پر جائیں، رول نمبر درج کریں اور رزلٹ کارڈ دیکھیں۔ سرور رش کی صورت میں ایس ایم ایس طریقہ سب سے محفوظ ہے۔`}
        />

        {/* Interactive Roll Number Guided Lookup Box */}
        <section aria-label="Interactive Roll Number Checker" className="space-y-4">
          <div className="w-full max-w-2xl mx-auto doc-card rounded-2xl border-2 border-doc-brass/50 bg-white dark:bg-doc-dark-card shadow-xl overflow-hidden">
            <div className="bg-doc-ink text-white p-5 sm:p-6 border-b border-doc-brass/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-doc-brass" />
                  <span className="font-serif font-bold text-lg text-white">
                    {board.nameEn} Roll Number Portal Direct
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-bold">
                  <Lock className="w-3.5 h-3.5" />
                  <span>DIRECT OFFICIAL LINK</span>
                </div>
              </div>
              <p className="text-xs text-slate-300 mt-1 font-sans">
                {t(
                  'Enter your roll number to open the official server portal and copy your number with 1 click.',
                  'اپنا رول نمبر درج کریں تا کہ سرکاری سرور پورٹل پر فوری منتقل ہو سکیں۔'
                )}
              </p>
            </div>

            <form onSubmit={handlePortalRedirect} className="p-5 sm:p-6 space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass mb-2">
                  {t('Enter 9th Class Roll Number (5 to 8 digits)', 'نہم کلاس رول نمبر درج کریں')}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={9}
                    value={rollNo}
                    onChange={(e) => {
                      setRollNo(e.target.value.replace(/[^0-9]/g, ''));
                      setErrorMsg('');
                    }}
                    placeholder="e.g. 524109"
                    className="w-full text-lg sm:text-xl font-mono font-bold px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-doc-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-doc-seal"
                  />
                  {rollNo && (
                    <button
                      type="button"
                      onClick={() => setRollNo('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-mono"
                    >
                      CLEAR
                    </button>
                  )}
                </div>
                {errorMsg && (
                  <p className="text-xs text-red-600 dark:text-red-400 mt-1.5 flex items-center gap-1 font-sans">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errorMsg}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-doc-seal hover:bg-red-700 active:scale-[0.98] text-white font-mono font-bold text-xs flex items-center justify-center gap-2 transition shadow-md min-h-[46px]"
                >
                  <span>{t(`OPEN ${board.nameEn.toUpperCase()} PORTAL`, `${board.nameUr} آفیشل پورٹل کھولیں`)}</span>
                  <ExternalLink className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleCopyRoll}
                  className="w-full py-3.5 px-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-[0.98] text-slate-800 dark:text-slate-200 font-mono font-bold text-xs flex items-center justify-center gap-2 transition min-h-[46px]"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-700 dark:text-emerald-300">COPIED TO CLIPBOARD!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>COPY ROLL NUMBER</span>
                    </>
                  )}
                </button>
              </div>

              {/* Instant 1-Click SMS Button for Mobile */}
              <div className="pt-2">
                <a
                  href={`sms:${board.smsCode}?body=${cleanRoll || 'YOUR_ROLL_NUMBER'}`}
                  className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 active:scale-[0.98] text-slate-950 font-mono font-extrabold text-xs flex items-center justify-center gap-2 transition shadow-xs min-h-[44px]"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>
                    {cleanRoll
                      ? t(`SEND ${cleanRoll} TO ${board.smsCode} VIA SMS`, `رول نمبر ${cleanRoll} بذریعہ SMS بھیجیں`)
                      : t(`SEND ROLL NUMBER TO ${board.smsCode} VIA SMS`, `رول نمبر بذریعہ SMS (${board.smsCode}) بھیجیں`)}
                  </span>
                </a>
              </div>

              {/* Privacy Safe Note */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-1.5 font-sans">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  {t(
                    'Independent public information service. Roll numbers entered here are not stored or logged; you are routed directly to the verified official board servers.',
                    'آزادانہ معلوماتی پلیٹ فارم۔ آپ کا رول نمبر کسی ڈیٹا بیس میں محفوظ نہیں ہوتا بلکہ براہ راست سرکاری بورڈ سرور پر بھیجا جاتا ہے۔'
                  )}
                </span>
              </div>
            </form>
          </div>
        </section>

        {/* SMS Verification Card */}
        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-doc-ink dark:text-white flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-doc-brass" />
            {board.nameEn} Official SMS Result Code
          </h2>
          <div className="doc-card p-5 sm:p-6 rounded-2xl border border-doc-brass/30 bg-gradient-to-br from-white to-amber-50/40 dark:from-slate-900 dark:to-amber-950/20 shadow-sm space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center space-y-1">
                <p className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">Board Shortcode</p>
                <p className="text-2xl font-mono font-extrabold text-doc-seal dark:text-red-400">{board.smsCode}</p>
                <p className="text-[11px] text-slate-500">Works from Jazz, Zong, Telenor, Ufone</p>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center space-y-1">
                <p className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">SMS Format</p>
                <p className="text-base font-mono font-bold text-doc-ink dark:text-white">{board.smsFormat}</p>
                <p className="text-[11px] text-slate-500">Send only the digits / code</p>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center space-y-1">
                <p className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">Standard Charges</p>
                <p className="text-base font-mono font-bold text-doc-ink dark:text-white">~PKR 2 + Tax</p>
                <p className="text-[11px] text-slate-500">Per inquiry message</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
              <strong>Tip for Result Day:</strong> Web servers for BISE boards frequently crash or return HTTP 502/504 errors on announcement morning. The SMS gateway operates via direct cellular telecom channels and typically delivers your score in 60-120 seconds.
            </p>
          </div>
        </section>

        <AdPlacementZone format="horizontal" />

        {/* Paper Rechecking Procedure Note */}
        <section className="doc-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="text-lg font-serif font-bold text-doc-ink dark:text-white flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-doc-seal" />
              Paper Rechecking & Re-scrutiny Process ({board.nameEn})
            </h2>
            <Link
              href="/education/bise-paper-rechecking-procedure"
              className="text-xs font-semibold text-doc-seal dark:text-amber-400 hover:underline flex items-center gap-1 font-mono"
            >
              <span>Full Rechecking Guide &rarr;</span>
            </Link>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
            If you are unsatisfied with your obtained marks in any subject, you can apply for paper rechecking (re-scrutiny) within <strong>{board.recheckingDeadline}</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-slate-700 dark:text-slate-300">
            <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <strong className="block text-doc-ink dark:text-white mb-1">Fee & Application:</strong>
              Estimated fee is <strong>{board.recheckingFee}</strong>. Submit application online at{' '}
              <a href={board.officialWebsite} target="_blank" rel="noopener noreferrer" className="text-doc-seal underline font-mono">
                {board.officialWebsite.replace('https://', '')}
              </a>
              .
            </div>
            <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <strong className="block text-doc-ink dark:text-white mb-1">What Rechecking Covers:</strong>
              Paper rechecking does not re-mark solved questions. It verifies that all questions were awarded marks, no answer was missed, and the total was tallied correctly.
            </div>
          </div>
        </section>

        {/* 40% Passing Marks Policy Callout */}
        <section className="p-5 rounded-2xl border border-doc-brass/40 bg-amber-500/10 dark:bg-amber-950/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-800 dark:text-amber-300 uppercase">
              <Sparkles className="w-4 h-4 text-doc-brass" />
              <span>Important 2026 Grading Rule</span>
            </div>
            <p className="text-sm font-serif font-bold text-doc-ink dark:text-white">
              Do You Know the 40% Passing Marks & 10-Point GPA Policy?
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-300 font-sans">
              Learn how IBCC new passing criteria affects 9th and 10th class candidates across Pakistani boards.
            </p>
          </div>
          <Link
            href="/education/matric-40-percent-passing-marks-rule-2026"
            className="shrink-0 px-4 py-2.5 rounded-xl bg-doc-ink dark:bg-white text-white dark:text-doc-ink font-mono font-bold text-xs hover:opacity-90 transition flex items-center gap-1.5 shadow-sm"
          >
            <span>Read 40% Marks Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>

        {/* Cross-linking: Check Other Boards */}
        <section className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
            <h2 className="text-xl font-serif font-bold text-doc-ink dark:text-white">
              Check 9th Class Result for Other Boards
            </h2>
            <Link
              href="/education/bise-result-checker-2026"
              className="text-xs font-bold text-doc-seal dark:text-amber-400 hover:underline font-mono"
            >
              All Boards Unified Checker &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2.5">
            {otherBoards.map((other) => (
              <Link
                key={other.slug}
                href={`/education/${other.slug}`}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-doc-brass dark:hover:border-doc-brass transition flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="text-xs font-serif font-bold text-doc-ink dark:text-white">
                    {other.nameEn}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                    {other.cityEn}
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono mt-2 text-doc-seal font-bold">
                  <span>SMS: {other.smsCode}</span>
                  <span>View Result &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <FAQAccordionVisual
          titleEn={`${board.nameEn} 9th Class Result 2026 FAQs`}
          titleUr={`${board.nameUr} نہم کلاس رزلٹ 2026 سے متعلق اہم سوالات`}
          subtitleEn="Verified answers regarding SMS delivery, online gazette, passing marks, and rechecking"
          subtitleUr="ایس ایم ایس، گزٹ، پاسنگ مارکس اور ری چیکنگ سے متعلق تصدیق شدہ جوابات"
          items={board.faqs}
        />

        {/* Official Sources Citation */}
        <footer className="text-xs text-slate-500 dark:text-slate-500 font-sans space-y-1.5 border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="font-bold text-slate-700 dark:text-slate-400">Official Board Links & Sources:</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <a
              href={board.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-doc-seal flex items-center gap-1 font-mono text-[11px]"
            >
              <ExternalLink className="w-3 h-3" />
              <span>{board.nameEn} Official Website: {board.officialWebsite}</span>
            </a>
            <a
              href={board.resultPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-doc-seal flex items-center gap-1 font-mono text-[11px]"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Result Portal: {board.resultPortalUrl}</span>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};
