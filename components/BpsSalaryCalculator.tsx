'use client';

import React, { useState, useMemo } from 'react';
import {
  Calculator,
  Building,
  Coins,
  ShieldCheck,
  Info,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  TrendingUp,
  MapPin,
  Briefcase,
  FileText,
  DollarSign,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  Percent,
} from 'lucide-react';
import Link from 'next/link';

export interface BpsGradeData {
  grade: number;
  name: string;
  minBasic2022: number;
  minBasic2026: number;
  annualIncrement: number;
  maxBasic2026: number;
  maxStages: number;
  hraFrozenA: number;
  hraFrozenOther: number;
  conveyanceAllowance: number;
  medicalAllowance: number;
  defaultGpFund: number;
}

export const BPS_GRADES_DATA: BpsGradeData[] = [
  { grade: 1, name: 'BPS-01', minBasic2022: 13550, minBasic2026: 16280, annualIncrement: 520, maxBasic2026: 31880, maxStages: 30, hraFrozenA: 6098, hraFrozenOther: 4065, conveyanceAllowance: 2850, medicalAllowance: 1500, defaultGpFund: 1200 },
  { grade: 2, name: 'BPS-02', minBasic2022: 13820, minBasic2026: 16600, annualIncrement: 590, maxBasic2026: 34300, maxStages: 30, hraFrozenA: 6219, hraFrozenOther: 4146, conveyanceAllowance: 2850, medicalAllowance: 1500, defaultGpFund: 1300 },
  { grade: 3, name: 'BPS-03', minBasic2022: 14260, minBasic2026: 17130, annualIncrement: 700, maxBasic2026: 38130, maxStages: 30, hraFrozenA: 6417, hraFrozenOther: 4278, conveyanceAllowance: 2850, medicalAllowance: 1500, defaultGpFund: 1400 },
  { grade: 4, name: 'BPS-04', minBasic2022: 14690, minBasic2026: 17650, annualIncrement: 800, maxBasic2026: 41650, maxStages: 30, hraFrozenA: 6611, hraFrozenOther: 4407, conveyanceAllowance: 2850, medicalAllowance: 1500, defaultGpFund: 1500 },
  { grade: 5, name: 'BPS-05', minBasic2022: 15230, minBasic2026: 18300, annualIncrement: 910, maxBasic2026: 45600, maxStages: 30, hraFrozenA: 6854, hraFrozenOther: 4569, conveyanceAllowance: 4275, medicalAllowance: 1500, defaultGpFund: 1600 },
  { grade: 6, name: 'BPS-06', minBasic2022: 15770, minBasic2026: 18930, annualIncrement: 1010, maxBasic2026: 49230, maxStages: 30, hraFrozenA: 7097, hraFrozenOther: 4731, conveyanceAllowance: 4275, medicalAllowance: 1500, defaultGpFund: 1700 },
  { grade: 7, name: 'BPS-07', minBasic2022: 16310, minBasic2026: 19590, annualIncrement: 1100, maxBasic2026: 52590, maxStages: 30, hraFrozenA: 7340, hraFrozenOther: 4893, conveyanceAllowance: 4275, medicalAllowance: 1500, defaultGpFund: 1800 },
  { grade: 8, name: 'BPS-08', minBasic2022: 16890, minBasic2026: 20290, annualIncrement: 1210, maxBasic2026: 56590, maxStages: 30, hraFrozenA: 7601, hraFrozenOther: 5067, conveyanceAllowance: 4275, medicalAllowance: 1500, defaultGpFund: 1900 },
  { grade: 9, name: 'BPS-09', minBasic2022: 17490, minBasic2026: 20990, annualIncrement: 1310, maxBasic2026: 60290, maxStages: 30, hraFrozenA: 7871, hraFrozenOther: 5247, conveyanceAllowance: 4275, medicalAllowance: 1500, defaultGpFund: 2000 },
  { grade: 10, name: 'BPS-10', minBasic2022: 18080, minBasic2026: 21700, annualIncrement: 1430, maxBasic2026: 64600, maxStages: 30, hraFrozenA: 8136, hraFrozenOther: 5424, conveyanceAllowance: 4275, medicalAllowance: 1500, defaultGpFund: 2200 },
  { grade: 11, name: 'BPS-11', minBasic2022: 18650, minBasic2026: 22380, annualIncrement: 1570, maxBasic2026: 69480, maxStages: 30, hraFrozenA: 8393, hraFrozenOther: 5595, conveyanceAllowance: 4275, medicalAllowance: 1500, defaultGpFund: 2400 },
  { grade: 12, name: 'BPS-12', minBasic2022: 19770, minBasic2026: 23720, annualIncrement: 1740, maxBasic2026: 75920, maxStages: 30, hraFrozenA: 8897, hraFrozenOther: 5931, conveyanceAllowance: 4275, medicalAllowance: 1500, defaultGpFund: 2700 },
  { grade: 13, name: 'BPS-13', minBasic2022: 21110, minBasic2026: 25330, annualIncrement: 1930, maxBasic2026: 83230, maxStages: 30, hraFrozenA: 9500, hraFrozenOther: 6333, conveyanceAllowance: 4275, medicalAllowance: 1500, defaultGpFund: 3000 },
  { grade: 14, name: 'BPS-14', minBasic2022: 22570, minBasic2026: 27080, annualIncrement: 2140, maxBasic2026: 91280, maxStages: 30, hraFrozenA: 10157, hraFrozenOther: 6771, conveyanceAllowance: 4275, medicalAllowance: 1500, defaultGpFund: 3300 },
  { grade: 15, name: 'BPS-15', minBasic2022: 24190, minBasic2026: 29030, annualIncrement: 2390, maxBasic2026: 100730, maxStages: 30, hraFrozenA: 10886, hraFrozenOther: 7257, conveyanceAllowance: 4275, medicalAllowance: 1500, defaultGpFund: 3800 },
  { grade: 16, name: 'BPS-16', minBasic2022: 28100, minBasic2026: 33720, annualIncrement: 2720, maxBasic2026: 115320, maxStages: 30, hraFrozenA: 12645, hraFrozenOther: 8430, conveyanceAllowance: 7500, medicalAllowance: 1500, defaultGpFund: 4800 },
  { grade: 17, name: 'BPS-17', minBasic2022: 45070, minBasic2026: 54140, annualIncrement: 4110, maxBasic2026: 136340, maxStages: 20, hraFrozenA: 20282, hraFrozenOther: 13521, conveyanceAllowance: 7500, medicalAllowance: 1500, defaultGpFund: 6500 },
  { grade: 18, name: 'BPS-18', minBasic2022: 56880, minBasic2026: 68260, annualIncrement: 5160, maxBasic2026: 171460, maxStages: 20, hraFrozenA: 25596, hraFrozenOther: 17064, conveyanceAllowance: 7500, medicalAllowance: 1500, defaultGpFund: 8200 },
  { grade: 19, name: 'BPS-19', minBasic2022: 87840, minBasic2026: 105410, annualIncrement: 5830, maxBasic2026: 222010, maxStages: 20, hraFrozenA: 39528, hraFrozenOther: 26352, conveyanceAllowance: 7500, medicalAllowance: 1500, defaultGpFund: 10500 },
  { grade: 20, name: 'BPS-20', minBasic2022: 112470, minBasic2026: 134960, annualIncrement: 7160, maxBasic2026: 278160, maxStages: 20, hraFrozenA: 50612, hraFrozenOther: 33741, conveyanceAllowance: 0, medicalAllowance: 1500, defaultGpFund: 13000 },
  { grade: 21, name: 'BPS-21', minBasic2022: 124960, minBasic2026: 149950, annualIncrement: 8110, maxBasic2026: 312150, maxStages: 20, hraFrozenA: 56232, hraFrozenOther: 37488, conveyanceAllowance: 0, medicalAllowance: 1500, defaultGpFund: 15000 },
  { grade: 22, name: 'BPS-22', minBasic2022: 137960, minBasic2026: 165550, annualIncrement: 9300, maxBasic2026: 351550, maxStages: 20, hraFrozenA: 62082, hraFrozenOther: 41388, conveyanceAllowance: 0, medicalAllowance: 1500, defaultGpFund: 18000 },
];

function formatPkr(num: number): string {
  return new Intl.NumberFormat('en-PK', {
    maximumFractionDigits: 0,
  }).format(Math.round(num));
}

// Calculate FBR 2026 Monthly Income Tax for Salaried Individuals
function calculateMonthlyIncomeTax(annualTaxableSalary: number): number {
  if (annualTaxableSalary <= 600000) return 0;
  
  let tax = 0;
  if (annualTaxableSalary <= 1200000) {
    tax = (annualTaxableSalary - 600000) * 0.01;
  } else if (annualTaxableSalary <= 2200000) {
    tax = 6000 + (annualTaxableSalary - 1200000) * 0.11;
  } else if (annualTaxableSalary <= 3200000) {
    tax = 116000 + (annualTaxableSalary - 2200000) * 0.23;
  } else if (annualTaxableSalary <= 4100000) {
    tax = 346000 + (annualTaxableSalary - 3200000) * 0.30;
  } else {
    tax = 616000 + (annualTaxableSalary - 4100000) * 0.35;
  }
  return Math.round(tax / 12);
}

export function BpsSalaryCalculator() {
  const [selectedGradeNum, setSelectedGradeNum] = useState<number>(17); // Default BPS-17
  const [incrementsCount, setIncrementsCount] = useState<number>(3); // 3 annual increments
  const [cityCategory, setCityCategory] = useState<'specified' | 'other' | 'housing_provided'>('specified');
  const [governmentScope, setGovernmentScope] = useState<'federal' | 'provincial'>('federal');
  
  // Optional Toggles
  const [enableDisparityAllowance, setEnableDisparityAllowance] = useState<boolean>(false);
  const [disparityPercent, setDisparityPercent] = useState<number>(15);
  const [enableCarMonetization, setEnableCarMonetization] = useState<boolean>(false);
  const [customAllowancesInput, setCustomAllowancesInput] = useState<string>('0');

  const gradeMeta = useMemo(() => {
    return BPS_GRADES_DATA.find((g) => g.grade === selectedGradeNum) || BPS_GRADES_DATA[16];
  }, [selectedGradeNum]);

  // Adjust increments count if it exceeds maxStages for new grade selection
  const currentIncrements = Math.min(incrementsCount, gradeMeta.maxStages);

  const calculations = useMemo(() => {
    // 1. Running Basic Pay under RBPS-2026
    const runningBasicPay = Math.min(
      gradeMeta.maxBasic2026,
      gradeMeta.minBasic2026 + currentIncrements * gradeMeta.annualIncrement
    );

    // 2. Ad-hoc Relief Allowance 2026 (7% of running basic)
    const adhocRelief2026 = Math.round(runningBasicPay * 0.07);

    // 3. House Rent Allowance (Frozen pre-revision 2026 level)
    let houseRentAllowance = 0;
    if (cityCategory === 'specified') {
      houseRentAllowance = gradeMeta.hraFrozenA;
    } else if (cityCategory === 'other') {
      houseRentAllowance = gradeMeta.hraFrozenOther;
    } else {
      houseRentAllowance = 0; // Government accommodation provided
    }

    // 4. Conveyance Allowance (2026 revised +50%)
    let conveyanceAllowance = gradeMeta.conveyanceAllowance;
    if (selectedGradeNum >= 20 && enableCarMonetization) {
      conveyanceAllowance = selectedGradeNum === 20 ? 65000 : selectedGradeNum === 21 ? 77000 : 95000;
    }

    // 5. Medical Allowance
    const medicalAllowance = gradeMeta.medicalAllowance;

    // 6. Disparity Reduction Allowance (if enabled)
    const disparityAllowance = enableDisparityAllowance ? Math.round(runningBasicPay * (disparityPercent / 100)) : 0;

    // 7. Custom / Executive Allowances
    const customAllowances = parseFloat(customAllowancesInput.replace(/,/g, '')) || 0;

    // Gross Salary Breakdown
    const grossMonthlySalary =
      runningBasicPay +
      adhocRelief2026 +
      houseRentAllowance +
      conveyanceAllowance +
      medicalAllowance +
      disparityAllowance +
      customAllowances;

    // Taxable Salary Calculation (Basic Pay + ARA 2026 + Disparity + Custom)
    // Note: HRA and Conveyance within standard limits have specific tax exemptions under FBR rules
    const taxableMonthlySalary = runningBasicPay + adhocRelief2026 + disparityAllowance + customAllowances;
    const annualTaxableSalary = taxableMonthlySalary * 12;
    const estimatedIncomeTax = calculateMonthlyIncomeTax(annualTaxableSalary);

    // Standard Deductions
    const gpFundDeduction = gradeMeta.defaultGpFund;
    const benevolentFund = Math.round(runningBasicPay * 0.02); // ~2% typical BF
    const groupInsurance = Math.min(1000, Math.round(runningBasicPay * 0.005)); // ~0.5% GI

    // Housing Deduction if govt quarter provided
    const housingDeduction = cityCategory === 'housing_provided' ? Math.round(runningBasicPay * 0.05) : 0;

    const totalMonthlyDeductions = estimatedIncomeTax + gpFundDeduction + benevolentFund + groupInsurance + housingDeduction;
    const netTakeHomeSalary = Math.max(0, grossMonthlySalary - totalMonthlyDeductions);

    return {
      runningBasicPay,
      adhocRelief2026,
      houseRentAllowance,
      conveyanceAllowance,
      medicalAllowance,
      disparityAllowance,
      customAllowances,
      grossMonthlySalary,
      estimatedIncomeTax,
      gpFundDeduction,
      benevolentFund,
      groupInsurance,
      housingDeduction,
      totalMonthlyDeductions,
      netTakeHomeSalary,
      annualGrossSalary: grossMonthlySalary * 12,
      annualTaxableSalary,
    };
  }, [
    gradeMeta,
    currentIncrements,
    cityCategory,
    selectedGradeNum,
    enableCarMonetization,
    enableDisparityAllowance,
    disparityPercent,
    customAllowancesInput,
  ]);

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-emerald-500/20 my-6">
      {/* Top Tool Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold mb-2">
            <Calculator className="w-4 h-4 text-emerald-400" />
            <span>Federal &amp; Provincial RBPS-2026 Aligned</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            BPS Salary Calculator 2026
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Calculate your net take-home pay based on Office Memorandum F.1(2)IMP/2026 (21 July 2026).
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-medium text-emerald-300 bg-emerald-950/80 px-3 py-1.5 rounded-xl border border-emerald-700/40">
            Govt Circular: F.1(2)IMP/2026
          </span>
        </div>
      </div>

      {/* Scope Selector: Federal vs Provincial */}
      <div className="mt-6 p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
          1. Select Cadre / Government Employer Scope:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => setGovernmentScope('federal')}
            className={`p-3 rounded-xl border text-xs sm:text-sm font-medium transition text-left flex items-center justify-between ${
              governmentScope === 'federal'
                ? 'bg-emerald-600/30 border-emerald-500 text-white shadow-lg shadow-emerald-500/10'
                : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <div>
              <div className="font-bold">Federal Government Employee</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Ministries, Divisions, Federal BPS 1–22</div>
            </div>
            {governmentScope === 'federal' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
          </button>

          <button
            onClick={() => setGovernmentScope('provincial')}
            className={`p-3 rounded-xl border text-xs sm:text-sm font-medium transition text-left flex items-center justify-between ${
              governmentScope === 'provincial'
                ? 'bg-emerald-600/30 border-emerald-500 text-white shadow-lg shadow-emerald-500/10'
                : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <div>
              <div className="font-bold">Provincial Govt (Punjab, Sindh, KPK, Balochistan)</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Provincial civil servants following Federal RBPS-2026</div>
            </div>
            {governmentScope === 'provincial' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
          </button>
        </div>

        {governmentScope === 'provincial' && (
          <div className="mt-3 p-3 bg-amber-950/40 border border-amber-500/30 rounded-xl text-amber-200 text-xs flex items-start gap-2">
            <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p>
              <strong>Provincial Implementation Note:</strong> Provincial governments (Punjab, Sindh, KPK, Balochistan) adopt matching pay scale revisions via respective finance department notifications. This tool applies the standard RBPS-2026 structure.
            </p>
          </div>
        )}
      </div>

      {/* Main Input Controls Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* BPS Grade Dropdown */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 sm:p-5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
            2. Pay Scale Grade (BPS):
          </label>
          <select
            value={selectedGradeNum}
            onChange={(e) => setSelectedGradeNum(parseInt(e.target.value, 10))}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-bold"
          >
            {BPS_GRADES_DATA.map((g) => (
              <option key={g.grade} value={g.grade}>
                {g.name} — Min Basic: PKR {formatPkr(g.minBasic2026)}
              </option>
            ))}
          </select>

          <div className="mt-4 p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 text-xs text-slate-300 space-y-1">
            <div className="flex justify-between">
              <span className="text-slate-400">2026 Starting Basic:</span>
              <strong className="text-white">PKR {formatPkr(gradeMeta.minBasic2026)}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Annual Increment:</span>
              <strong className="text-emerald-400">PKR {formatPkr(gradeMeta.annualIncrement)} / yr</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">2026 Maximum Basic:</span>
              <strong className="text-white">PKR {formatPkr(gradeMeta.maxBasic2026)}</strong>
            </div>
          </div>
        </div>

        {/* Increments Slider */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                3. Service Increments:
              </label>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs">
                {currentIncrements} Stage{currentIncrements !== 1 ? 's' : ''}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={gradeMeta.maxStages}
              value={currentIncrements}
              onChange={(e) => setIncrementsCount(parseInt(e.target.value, 10))}
              className="w-full accent-emerald-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>0 (Entry Level)</span>
              <span>Max {gradeMeta.maxStages} Stages</span>
            </div>
          </div>

          <div className="mt-4 p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 text-xs text-slate-300 flex items-center justify-between">
            <span className="text-slate-400">Calculated Running Basic:</span>
            <span className="text-lg font-extrabold text-emerald-400">
              PKR {formatPkr(calculations.runningBasicPay)}
            </span>
          </div>
        </div>

        {/* Station / City Category */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 sm:p-5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
            4. Posting City (House Rent Allowance):
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-2 p-2 bg-slate-900/60 rounded-xl border border-slate-700 cursor-pointer text-xs text-slate-200 hover:border-emerald-500 transition">
              <input
                type="radio"
                name="cityCategory"
                checked={cityCategory === 'specified'}
                onChange={() => setCityCategory('specified')}
                className="accent-emerald-500"
              />
              <div>
                <span className="font-bold">Specified Category A/B Cities</span>
                <span className="block text-[10px] text-slate-400">Islamabad, RWP, LHR, KHI, PEW, UET, HYD, FSD, MUX, GUJ, SKT</span>
              </div>
            </label>

            <label className="flex items-center gap-2 p-2 bg-slate-900/60 rounded-xl border border-slate-700 cursor-pointer text-xs text-slate-200 hover:border-emerald-500 transition">
              <input
                type="radio"
                name="cityCategory"
                checked={cityCategory === 'other'}
                onChange={() => setCityCategory('other')}
                className="accent-emerald-500"
              />
              <div>
                <span className="font-bold">Other Cities / Rural Stations</span>
                <span className="block text-[10px] text-slate-400">30% pre-revision frozen rate</span>
              </div>
            </label>

            <label className="flex items-center gap-2 p-2 bg-slate-900/60 rounded-xl border border-slate-700 cursor-pointer text-xs text-slate-200 hover:border-emerald-500 transition">
              <input
                type="radio"
                name="cityCategory"
                checked={cityCategory === 'housing_provided'}
                onChange={() => setCityCategory('housing_provided')}
                className="accent-emerald-500"
              />
              <div>
                <span className="font-bold">Govt Quarter / House Allotted</span>
                <span className="block text-[10px] text-slate-400">No HRA + 5% rent deduction</span>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Advanced Allowances Bar */}
      <div className="mt-6 p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
        <div className="flex items-center justify-between cursor-pointer mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Optional Special Allowances (Disparity, Executive, Qualification)</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mt-3">
          <label className="flex items-center gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-700/80 text-slate-200">
            <input
              type="checkbox"
              checked={enableDisparityAllowance}
              onChange={(e) => setEnableDisparityAllowance(e.target.checked)}
              className="accent-emerald-500 w-4 h-4"
            />
            <div>
              <span className="font-bold">Disparity Reduction (DRA)</span>
              <span className="block text-[10px] text-slate-400">15% or 25% of basic for eligible cadres</span>
            </div>
          </label>

          {selectedGradeNum >= 20 && (
            <label className="flex items-center gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-700/80 text-slate-200">
              <input
                type="checkbox"
                checked={enableCarMonetization}
                onChange={(e) => setEnableCarMonetization(e.target.checked)}
                className="accent-emerald-500 w-4 h-4"
              />
              <div>
                <span className="font-bold">Car Monetization (BPS 20-22)</span>
                <span className="block text-[10px] text-slate-400">PKR 65k to 95k/mo vehicle allowance</span>
              </div>
            </label>
          )}

          <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-700/80">
            <label className="block text-[11px] text-slate-400 font-semibold mb-1">
              Custom / Special Cadre Allowance (PKR/mo):
            </label>
            <input
              type="text"
              value={customAllowancesInput}
              onChange={(e) => setCustomAllowancesInput(e.target.value)}
              placeholder="e.g. 5000"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 font-mono"
            />
          </div>
        </div>
      </div>

      {/* Main Results Display Cards */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Highlighted Take-Home Pay Card */}
        <div className="lg:col-span-1 bg-gradient-to-br from-emerald-950/80 via-slate-800 to-slate-900 border border-emerald-500/40 rounded-3xl p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Coins className="w-4 h-4 text-emerald-400" />
              <span>Estimated Net Take-Home Salary</span>
            </div>
            <div className="text-4xl sm:text-5xl font-black text-white tracking-tight my-2 font-mono">
              PKR {formatPkr(calculations.netTakeHomeSalary)}
            </div>
            <p className="text-xs text-slate-300 font-medium">Monthly cash in hand after all mandatory deductions</p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-700/80 space-y-2 text-xs">
            <div className="flex justify-between text-slate-300">
              <span>Gross Monthly Salary:</span>
              <strong className="text-white">PKR {formatPkr(calculations.grossMonthlySalary)}</strong>
            </div>
            <div className="flex justify-between text-rose-300">
              <span>Total Monthly Deductions:</span>
              <strong>- PKR {formatPkr(calculations.totalMonthlyDeductions)}</strong>
            </div>
            <div className="flex justify-between text-emerald-300 font-bold pt-1">
              <span>Estimated Annual Gross:</span>
              <span>PKR {formatPkr(calculations.annualGrossSalary)}</span>
            </div>
          </div>
        </div>

        {/* Itemized Salary Breakdown Table */}
        <div className="lg:col-span-2 bg-slate-800/90 border border-slate-700 rounded-3xl p-5 sm:p-6 shadow-xl">
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Official Payslip Allowance &amp; Deduction Breakdown</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* Allowances Column */}
            <div className="space-y-2.5 bg-slate-900/80 p-4 rounded-2xl border border-slate-700/80">
              <h4 className="font-bold text-emerald-400 uppercase tracking-wider text-[11px] pb-2 border-b border-slate-800 flex justify-between">
                <span>Pay &amp; Allowances (+)</span>
                <span>Amount (PKR)</span>
              </h4>

              <div className="flex justify-between text-slate-200">
                <span>Running Basic Pay (RBPS-2026):</span>
                <strong className="font-mono text-white">{formatPkr(calculations.runningBasicPay)}</strong>
              </div>

              <div className="flex justify-between text-slate-200">
                <span className="flex items-center gap-1">
                  Ad-hoc Relief 2026 (7%):
                  <span className="text-[9px] bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-700/50">New</span>
                </span>
                <strong className="font-mono text-emerald-300">{formatPkr(calculations.adhocRelief2026)}</strong>
              </div>

              <div className="flex justify-between text-slate-200">
                <span>House Rent Allowance (HRA):</span>
                <strong className="font-mono text-white">{formatPkr(calculations.houseRentAllowance)}</strong>
              </div>

              <div className="flex justify-between text-slate-200">
                <span>Conveyance Allowance (+50%):</span>
                <strong className="font-mono text-white">{formatPkr(calculations.conveyanceAllowance)}</strong>
              </div>

              <div className="flex justify-between text-slate-200">
                <span>Medical Allowance:</span>
                <strong className="font-mono text-white">{formatPkr(calculations.medicalAllowance)}</strong>
              </div>

              {calculations.disparityAllowance > 0 && (
                <div className="flex justify-between text-slate-200">
                  <span>Disparity Reduction (DRA):</span>
                  <strong className="font-mono text-white">{formatPkr(calculations.disparityAllowance)}</strong>
                </div>
              )}

              {calculations.customAllowances > 0 && (
                <div className="flex justify-between text-slate-200">
                  <span>Special / Custom Allowance:</span>
                  <strong className="font-mono text-white">{formatPkr(calculations.customAllowances)}</strong>
                </div>
              )}

              <div className="flex justify-between font-bold text-emerald-400 pt-2 border-t border-slate-800 text-sm">
                <span>Gross Salary:</span>
                <span className="font-mono">PKR {formatPkr(calculations.grossMonthlySalary)}</span>
              </div>
            </div>

            {/* Deductions Column */}
            <div className="space-y-2.5 bg-slate-900/80 p-4 rounded-2xl border border-slate-700/80">
              <h4 className="font-bold text-rose-400 uppercase tracking-wider text-[11px] pb-2 border-b border-slate-800 flex justify-between">
                <span>Mandatory Deductions (-)</span>
                <span>Amount (PKR)</span>
              </h4>

              <div className="flex justify-between text-slate-200">
                <span>Estimated Income Tax (FBR 2026):</span>
                <strong className="font-mono text-rose-300">{formatPkr(calculations.estimatedIncomeTax)}</strong>
              </div>

              <div className="flex justify-between text-slate-200">
                <span>GP Fund Subscription:</span>
                <strong className="font-mono text-white">{formatPkr(calculations.gpFundDeduction)}</strong>
              </div>

              <div className="flex justify-between text-slate-200">
                <span>Benevolent Fund (BF):</span>
                <strong className="font-mono text-white">{formatPkr(calculations.benevolentFund)}</strong>
              </div>

              <div className="flex justify-between text-slate-200">
                <span>Group Insurance (GI):</span>
                <strong className="font-mono text-white">{formatPkr(calculations.groupInsurance)}</strong>
              </div>

              {calculations.housingDeduction > 0 && (
                <div className="flex justify-between text-slate-200">
                  <span>Govt Quarter Rent Deduction:</span>
                  <strong className="font-mono text-white">{formatPkr(calculations.housingDeduction)}</strong>
                </div>
              )}

              <div className="flex justify-between font-bold text-rose-400 pt-2 border-t border-slate-800 text-sm">
                <span>Total Deductions:</span>
                <span className="font-mono">PKR {formatPkr(calculations.totalMonthlyDeductions)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explanatory Callout Box for July 2026 Restructuring */}
      <div className="mt-8 p-5 bg-gradient-to-r from-emerald-950/60 via-slate-800 to-slate-900 border border-emerald-500/30 rounded-2xl text-xs text-slate-300 space-y-2">
        <div className="flex items-center gap-2 text-white font-bold text-sm">
          <Info className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Why This Calculator Reflects the Updated 2026 Pay Structure</span>
        </div>
        <p className="leading-relaxed">
          As of July 1, 2026 (notified via Finance Division Office Memorandum F.1(2)IMP/2026 on July 21, 2026), the Government of Pakistan overhauled civil service pay scales into <strong>RBPS-2026</strong>. The previous Ad-hoc Relief Allowances of 2022 (15%) and 2025 (10%) were permanently merged into basic pay.
        </p>
        <p className="leading-relaxed text-slate-400">
          A new <strong>7% Ad-hoc Relief Allowance 2026</strong> was introduced on running basic pay. Note that this 7% allowance is subject to income tax and payable during leave/LPR, but does <em>not</em> count towards pension, gratuity, or House Rent Allowance calculations.
        </p>
      </div>

      {/* DDO Disclaimer & Cross Links */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-800 text-xs text-slate-400">
        <div className="flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            <strong>Official DDO Disclaimer:</strong> Pay calculations are estimates based on standard Finance Division rules. Final monthly pay fixation depends on your Drawing &amp; Disbursing Officer (DDO), specific departmental allowances, and exact length of service.
          </span>
        </div>

        <Link
          href="/tax/income-tax-calculator-salaried-2026"
          className="px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 rounded-xl border border-emerald-500/30 text-xs font-bold transition shrink-0 flex items-center gap-1.5"
        >
          <span>FBR Income Tax Tool</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
