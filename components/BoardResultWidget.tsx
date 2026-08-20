'use client';

import React, { useState } from 'react';
import { EDUCATION_BOARDS, EducationBoard } from '@/lib/data/boards';
import { useLanguage } from '@/lib/context/LanguageContext';
import { GraduationCap, ExternalLink, Copy, Check, ShieldCheck, Lock, AlertCircle, Info, ChevronDown, MessageSquare } from 'lucide-react';

interface BoardResultWidgetProps {
  initialBoardId?: string;
  titleEnOverride?: string;
  titleUrOverride?: string;
}

export const BoardResultWidget: React.FC<BoardResultWidgetProps> = ({
  initialBoardId = 'bise-lahore',
  titleEnOverride,
  titleUrOverride,
}) => {
  const { t } = useLanguage();
  
  const initialBoard = EDUCATION_BOARDS.find((b) => b.id === initialBoardId) || EDUCATION_BOARDS[0];

  const [selectedProvince, setSelectedProvince] = useState<string>(initialBoard.province);
  const [selectedBoardId, setSelectedBoardId] = useState<string>(initialBoard.id);
  const [rollNo, setRollNo] = useState<string>('');
  const [examClass, setExamClass] = useState<string>('10th');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<any>(null);
  const [searched, setSearched] = useState<boolean>(false);

  // Filter boards by selected province
  const filteredBoards = EDUCATION_BOARDS.filter(
    (b) => selectedProvince === 'All' || b.province === selectedProvince
  );

  const activeBoard: EducationBoard =
    EDUCATION_BOARDS.find((b) => b.id === selectedBoardId) || filteredBoards[0] || EDUCATION_BOARDS[0];

  const handleProvinceChange = (prov: string) => {
    setSelectedProvince(prov);
    setErrorMsg('');
    setSearched(false);
    setResult(null);
    const matchingBoards = EDUCATION_BOARDS.filter((b) => prov === 'All' || b.province === prov);
    if (matchingBoards.length > 0) {
      setSelectedBoardId(matchingBoards[0].id);
    }
  };

  const getRedirectUrl = (): string | null => {
    if (!rollNo.trim()) {
      setErrorMsg(
        t(
          'Please enter your roll number first.',
          'برائے مہربانی پہلے اپنا رول نمبر درج کریں۔',
          'Barae meharbani pehle apna roll number daraj karein.'
        )
      );
      return null;
    }

    const cleanRoll = rollNo.replace(/[^0-9]/g, '');
    if (cleanRoll.length < 5 || cleanRoll.length > 9) {
      setErrorMsg(
        t(
          'Please enter a valid roll number (5-8 digits, e.g. 524109).',
          'برائے مہربانی 5 سے 8 ہندسوں کا درست رول نمبر درج کریں (مثال: 524109)۔',
          'Barae meharbani 5-8 digits drust roll number daraj karein (e.g. 524109).'
        )
      );
      return null;
    }

    setErrorMsg('');

    if (activeBoard.preFillParam) {
      const joiner = activeBoard.resultUrl.includes('?') ? '&' : '?';
      return `${activeBoard.resultUrl}${joiner}${activeBoard.preFillParam}=${cleanRoll}`;
    }

    return activeBoard.resultUrl;
  };

  const handleRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanRoll = rollNo.replace(/[^0-9]/g, '');
    if (cleanRoll.length < 5 || cleanRoll.length > 9) {
      setErrorMsg(
        t(
          'Please enter a valid roll number (5-8 digits, e.g. 524109).',
          'برائے مہربانی 5 سے 8 ہندسوں کا درست رول نمبر درج کریں (مثال: 524109)۔',
          'Barae meharbani 5-8 digits drust roll number daraj karein (e.g. 524109).'
        )
      );
      return;
    }

    setErrorMsg('');
    setLoading(true);
    setResult(null);
    setSearched(false);

    fetch('/api/checker/bise', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rollNo: cleanRoll, board: selectedBoardId }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.success) {
          setResult(data);
          setSearched(true);
        } else {
          setErrorMsg(data.message || 'Error checking board result.');
        }
      })
      .catch(() => {
        setLoading(false);
        setErrorMsg(t('Server lookup timed out. Please try verify below.', 'سرور لوڈ نہیں ہو سکا۔ برائے مہربانی آفیشل پورٹل پر چیک کریں۔'));
      });
  };

  const handleCopy = () => {
    if (!rollNo.trim()) {
      setErrorMsg(
        t(
          'Please enter your roll number first.',
          'برائے مہربانی پہلے اپنا رول نمبر درج کریں۔',
          'Barae meharbani pehle apna roll number daraj karein.'
        )
      );
      return;
    }

    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(rollNo.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="my-8 rounded-2xl doc-card border border-doc-brass/40 p-6 md:p-8 shadow-md bg-white dark:bg-doc-dark-card space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-doc-brass/30">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-doc-seal/10 text-doc-seal dark:text-red-400 border border-doc-brass/30">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-doc-seal/10 text-doc-seal dark:text-red-400 font-mono text-[10px] font-extrabold uppercase tracking-wider">
                {t('Gazette Redirect Assistant', 'گزٹ ریڈائریکٹ اسسٹنٹ', 'Gazette Redirect Assistant')}
              </span>
              <span className="text-xs text-slate-400 font-bold">•</span>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                {t('Verified Board 2026', 'تصدیق شدہ بورڈ لنکس 2026', 'Verified Board 2026')}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-extrabold text-doc-ink dark:text-white mt-1">
              {titleEnOverride ? t(titleEnOverride, titleUrOverride) : t('Pakistan BISE Board Results 2026', 'پاکستان تمام تعلیمی بورڈز رزلٹ پورٹل 2026', 'Pakistan BISE Board Results 2026')}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 font-semibold px-3 py-1.5 rounded-lg bg-doc-paper dark:bg-slate-800 border border-doc-brass/30">
          <Lock className="w-3.5 h-3.5 text-doc-seal" />
          <span>{t('100% Client-Side Safe', '100٪ محفوظ کلائنٹ سائیڈ', '100% Client-Side Safe')}</span>
        </div>
      </div>

      {/* Main Selection Form */}
      <form onSubmit={handleRedirect} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Step 1: Province / Region Dropdown */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-doc-ink dark:text-slate-200 mb-1.5">
              {t('1. Select Province / Region:', '1۔ صوبہ یا علاقہ منتخب کریں:', '1. Select Province:')}
            </label>
            <div className="relative">
              <select
                value={selectedProvince}
                onChange={(e) => handleProvinceChange(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl bg-doc-paper dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-doc-ink dark:text-white font-bold text-sm focus:outline-none focus:border-doc-seal appearance-none cursor-pointer pr-10"
              >
                <option value="Punjab">Punjab ({t('پنجاب', 'پنجاب', 'Punjab')})</option>
                <option value="Sindh">Sindh ({t('سندھ', 'سندھ', 'Sindh')})</option>
                <option value="KPK">KPK ({t('خیبر پختونخوا', 'خیبر پختونخوا', 'KPK')})</option>
                <option value="Federal">Federal ({t('اسلام آباد / فیڈرل', 'فیڈرل', 'Federal')})</option>
                <option value="AJK">AJK ({t('آزاد کشمیر', 'آزاد کشمیر', 'AJK')})</option>
                <option value="All">{t('All Pakistan (25 Boards)', 'تمام صوبے (25 بورڈز)', 'All Pakistan')}</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-3.5 pointer-events-none" />
            </div>
          </div>

          {/* Step 2: Board Dropdown */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-doc-ink dark:text-slate-200 mb-1.5">
              {t('2. Select Education Board:', '2۔ تعلیمی بورڈ منتخب کریں:', '2. Select Education Board:')}
            </label>
            <div className="relative">
              <select
                value={selectedBoardId}
                onChange={(e) => {
                  setSelectedBoardId(e.target.value);
                  setErrorMsg('');
                }}
                className="w-full px-3.5 py-3 rounded-xl bg-doc-paper dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-doc-ink dark:text-white font-bold text-sm focus:outline-none focus:border-doc-seal appearance-none cursor-pointer pr-10"
              >
                {filteredBoards.map((board) => (
                  <option key={board.id} value={board.id}>
                    {t(board.nameEn, board.nameUr)}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-3.5 pointer-events-none" />
            </div>
          </div>

          {/* Step 3: Class / Exam Dropdown */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-doc-ink dark:text-slate-200 mb-1.5">
              {t('3. Select Class / Exam:', '3۔ کلاس یا امتحان منتخب کریں:', '3. Select Class:')}
            </label>
            <div className="relative">
              <select
                value={examClass}
                onChange={(e) => setExamClass(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl bg-doc-paper dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-doc-ink dark:text-white font-bold text-sm focus:outline-none focus:border-doc-seal appearance-none cursor-pointer pr-10"
              >
                <option value="10th">{t('10th Class (Matric Part 2)', 'دسویں کلاس (میٹرک سالانہ)')}</option>
                <option value="9th">{t('9th Class (Matric Part 1)', 'نویں کلاس (میٹرک پارٹ 1)')}</option>
                <option value="12th">{t('12th Class (Inter 2nd Year / FSc)', 'بارہویں کلاس (سیکنڈ ایئر)')}</option>
                <option value="11th">{t('11th Class (Inter 1st Year / FA)', 'گیارہویں کلاس (فرسٹ ایئر)')}</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-3.5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Roll Number Input & Copy Button */}
        <div>
          <label className="block text-sm font-bold text-doc-ink dark:text-slate-100 mb-1">
            {t('Enter Roll Number:', 'اپنا رول نمبر درج کریں:', 'Apna roll number daraj karein:')}
          </label>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
            {t(
              'Example: 6-digit roll number printed on your roll number slip (e.g. 524109)',
              'مثال: رول نمبر سلپ پر لکھا 6 ہندسوں کا رول نمبر (مثلاً 524109)',
              'Example: 6-digit roll number (e.g. 524109)'
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={rollNo}
                onChange={(e) => {
                  setRollNo(e.target.value);
                  setErrorMsg('');
                }}
                placeholder="e.g. 524109"
                className="w-full px-4 py-3.5 rounded-xl bg-doc-paper dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-doc-ink dark:text-white placeholder-slate-400 focus:outline-none focus:border-doc-seal text-base font-mono font-bold tracking-wider transition"
              />
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="px-4 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition shrink-0 min-h-[48px]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                    {t('Copied Roll No!', 'رول نمبر کاپی ہو گیا!', 'Copied Roll No!')}
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-doc-seal" />
                  <span>{t('Copy Roll No', 'رول نمبر کاپی کریں', 'Copy Roll No')}</span>
                </>
              )}
            </button>
          </div>

          {errorMsg && (
            <p className="text-xs font-bold text-rose-600 dark:text-rose-400 mt-2 flex items-center gap-1.5 animate-fadeIn">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </p>
          )}
        </div>

        {/* Action Button & Subtext */}
        <div className="space-y-2 pt-2">
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-doc-seal hover:bg-doc-seal/90 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md transition transform active:scale-[0.99] min-h-[48px]"
          >
            <span>
              {t(
                `Check Result on Official ${activeBoard.nameEn}`,
                `آفیشل ${activeBoard.nameUr} پر رزلٹ چیک کریں`,
                `Check Result on Official ${activeBoard.nameEn}`
              )}
            </span>
            <ExternalLink className="w-4 h-4" />
          </button>

          <p className="text-xs text-center text-slate-500 dark:text-slate-400 font-medium">
            {t(
              `You'll be taken directly to ${activeBoard.nameEn}'s official portal (${activeBoard.officialWebsite}) to view your gazette result safely.`,
              `کلک کرنے پر آپ کو براہِ راست ${activeBoard.nameUr} کی آفیشل ویب سائٹ پر سیکیور طریقے سے بھیجا جائے گا۔`,
              `You'll be taken directly to official website of ${activeBoard.nameEn} to view your gazette result.`
            )}
          </p>
        </div>
      </form>

      {/* Loading State */}
      {loading && (
        <div className="p-6 rounded-2xl border-2 border-dashed border-doc-brass/30 bg-doc-paper dark:bg-slate-900/60 animate-pulse space-y-3 font-sans">
          <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-1/4"></div>
          <div className="h-8 bg-slate-300 dark:bg-slate-700 rounded w-2/3"></div>
          <div className="h-20 bg-slate-200 dark:bg-slate-800 rounded-xl w-full"></div>
        </div>
      )}

      {/* Scorecard Result Box */}
      {searched && result && !loading && (
        <div className="p-6 rounded-2xl bg-slate-950 border border-doc-brass/50 text-white space-y-4 animate-fadeIn font-sans">
          <div className="flex justify-between items-center border-b border-slate-800 pb-3">
            <div>
              <p className="text-[10px] font-mono text-doc-brass font-bold uppercase tracking-wider">
                {t('BISE Gazette Verification', 'بورڈ گزٹ تصدیق')}
              </p>
              <h4 className="font-serif font-extrabold text-sm text-white">
                {result.board} Scorecard 2026
              </h4>
            </div>
            <span className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold ${result.status === 'PASS' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
              {result.status}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-900 rounded-xl p-3 border border-slate-800">
              <span className="text-slate-500 block text-[9px] uppercase font-mono">{t('Student Name', 'طالب علم کا نام')}</span>
              <span className="font-bold text-white">{result.studentName}</span>
            </div>
            <div className="bg-slate-900 rounded-xl p-3 border border-slate-800">
              <span className="text-slate-500 block text-[9px] uppercase font-mono">{t('Roll Number', 'رول نمبر')}</span>
              <span className="font-mono font-bold text-white">{result.rollNo}</span>
            </div>
            <div className="bg-slate-900 rounded-xl p-3 border border-slate-800">
              <span className="text-slate-500 block text-[9px] uppercase font-mono">{t('Marks Obtained', 'حاصل کردہ نمبر')}</span>
              <span className="font-bold text-white">{result.marksObtained} / {result.totalMarks} ({result.percentage})</span>
            </div>
            <div className="bg-slate-900 rounded-xl p-3 border border-slate-800">
              <span className="text-slate-500 block text-[9px] uppercase font-mono">{t('Grade', 'گریڈ')}</span>
              <span className="font-bold text-emerald-400">{result.grade}</span>
            </div>
          </div>

          {/* Subject-wise Marks Table */}
          <div className="border border-slate-800 rounded-xl overflow-hidden text-xs">
            <div className="bg-slate-900 px-3 py-2 text-slate-400 font-mono text-[9px] uppercase grid grid-cols-3 border-b border-slate-800">
              <span>{t('Subject', 'مضمون')}</span>
              <span className="text-center">{t('Marks Obtained', 'نمبر')}</span>
              <span className="text-right">{t('Total', 'کل')}</span>
            </div>
            {result.subjects.map((sub: any, idx: number) => (
              <div key={idx} className="px-3 py-2 grid grid-cols-3 border-b border-slate-900/60 last:border-b-0">
                <span className="font-medium text-slate-200">{sub.name}</span>
                <span className="text-center text-slate-300 font-mono">{sub.marks}</span>
                <span className="text-right text-slate-500 font-mono">{sub.total}</span>
              </div>
            ))}
          </div>

          <p className="text-[10px] text-amber-300 bg-amber-950/20 border border-amber-900/30 p-2.5 rounded-xl leading-relaxed italic font-sans">
            ⚠️ {result.message}
          </p>

          <div className="flex flex-col sm:flex-row gap-2 pt-1">
            <button
              onClick={() => {
                if (typeof window !== 'undefined') window.print();
              }}
              className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono font-bold text-xs flex items-center justify-center gap-1.5 transition border border-slate-700 min-h-[40px]"
            >
              <span>🖨️ {t('Print Result', 'پرنٹ رزلٹ')}</span>
            </button>
            <a
              href={activeBoard.resultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-doc-brass to-amber-500 hover:from-amber-500 hover:to-amber-400 text-doc-ink font-mono font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-lg min-h-[40px]"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{t('Verify on Board Site', 'بورڈ ویب سائٹ پر دیکھیں')}</span>
            </a>
          </div>
        </div>
      )}

      {/* SMS Result Code Info Banner */}
      <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 text-xs flex items-start gap-2.5">
        <MessageSquare className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">
            {t('Official SMS Result Service:', 'آفیشل ایس ایم ایس رزلٹ کوڈ:', 'Official SMS Result Code:')}
          </span>{' '}
          {t(
            `Send your Roll Number in an SMS to ${activeBoard.smsCode} to get ${activeBoard.nameEn} result directly on your mobile phone in Pakistan.`,
            `${activeBoard.nameUr} کا رزلٹ موبائل پر حاصل کرنے کے لیے اپنا رول نمبر ایس ایم ایس کوڈ ${activeBoard.smsCode} پر بھیجیں۔`,
            `Send Roll Number via SMS to ${activeBoard.smsCode} for ${activeBoard.nameEn}.`
          )}
        </div>
      </div>

      {/* Transparency & Safety Guarantee Disclaimer */}
      <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
        <p className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
          <ShieldCheck className="w-3.5 h-3.5 text-doc-seal" />
          <span>{t('Independent Information Platform Disclaimer', 'غیر جانبدار معلوماتی ڈسکلیمر', 'Independent Platform Disclaimer')}</span>
        </p>
        <p className="leading-relaxed">
          {t(
            'Pakistan Info Hub is an independent information directory and is not affiliated with any BISE educational board or Ministry of Education. Roll numbers are not stored or recorded on our servers.',
            'پاکستان انفو ہب ایک آزاد اور غیر جانبدار معلوماتی پورٹل ہے۔ ہم آپ کا رول نمبر یا رزلٹ ڈیٹا محفوظ نہیں کرتے۔ رزلٹ براہِ راست آفیشل ویب سائٹ سے کھلتا ہے۔',
            'Pakistan Info Hub is an independent information platform and is not affiliated with any BISE board.'
          )}
        </p>
      </div>
    </div>
  );
};
