'use client';

import React, { useState, useMemo } from 'react';
import {
  Car,
  Calculator,
  ShieldCheck,
  Info,
  MapPin,
  FileText,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Sparkles,
  DollarSign
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { InteractiveToolBadge } from '@/components/InteractiveToolBadge';

export type ProvinceKey = 'punjab' | 'sindh' | 'islamabad' | 'kpk' | 'balochistan';
export type VehicleTypeKey = 'car' | 'motorcycle' | 'commercial' | 'suv';
export type EngineCapacityKey = 'under1000' | '1001to1300' | '1301to1500' | '1501to2000' | '2001to2500' | 'above2500';

interface TaxRule {
  baseTokenTax: number;
  incomeTaxFiler: number;
  incomeTaxNonFiler: number;
  cleanAirTax?: number;
  professionalTax: number;
  isLifetime: boolean;
}

// Authentic Excise Department Slabs 2026
const TAX_SLABS: Record<ProvinceKey, Record<VehicleTypeKey, Record<EngineCapacityKey, TaxRule>>> = {
  punjab: {
    car: {
      under1000: { baseTokenTax: 10000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 200, isLifetime: true },
      '1001to1300': { baseTokenTax: 2500, incomeTaxFiler: 2500, incomeTaxNonFiler: 7500, cleanAirTax: 500, professionalTax: 200, isLifetime: false },
      '1301to1500': { baseTokenTax: 3800, incomeTaxFiler: 3500, incomeTaxNonFiler: 10500, cleanAirTax: 500, professionalTax: 200, isLifetime: false },
      '1501to2000': { baseTokenTax: 5500, incomeTaxFiler: 6000, incomeTaxNonFiler: 18000, cleanAirTax: 1000, professionalTax: 200, isLifetime: false },
      '2001to2500': { baseTokenTax: 9000, incomeTaxFiler: 10000, incomeTaxNonFiler: 30000, cleanAirTax: 1500, professionalTax: 200, isLifetime: false },
      above2500: { baseTokenTax: 15000, incomeTaxFiler: 20000, incomeTaxNonFiler: 60000, cleanAirTax: 2000, professionalTax: 200, isLifetime: false },
    },
    motorcycle: {
      under1000: { baseTokenTax: 1500, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      '1001to1300': { baseTokenTax: 1500, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      '1301to1500': { baseTokenTax: 1500, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      '1501to2000': { baseTokenTax: 1500, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      '2001to2500': { baseTokenTax: 1500, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      above2500: { baseTokenTax: 1500, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
    },
    suv: {
      under1000: { baseTokenTax: 10000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 200, isLifetime: true },
      '1001to1300': { baseTokenTax: 3000, incomeTaxFiler: 3000, incomeTaxNonFiler: 9000, cleanAirTax: 500, professionalTax: 200, isLifetime: false },
      '1301to1500': { baseTokenTax: 4500, incomeTaxFiler: 4500, incomeTaxNonFiler: 13500, cleanAirTax: 500, professionalTax: 200, isLifetime: false },
      '1501to2000': { baseTokenTax: 7000, incomeTaxFiler: 7500, incomeTaxNonFiler: 22500, cleanAirTax: 1000, professionalTax: 200, isLifetime: false },
      '2001to2500': { baseTokenTax: 12000, incomeTaxFiler: 12500, incomeTaxNonFiler: 37500, cleanAirTax: 1500, professionalTax: 200, isLifetime: false },
      above2500: { baseTokenTax: 20000, incomeTaxFiler: 25000, incomeTaxNonFiler: 75000, cleanAirTax: 2500, professionalTax: 200, isLifetime: false },
    },
    commercial: {
      under1000: { baseTokenTax: 2000, incomeTaxFiler: 1000, incomeTaxNonFiler: 3000, professionalTax: 500, isLifetime: false },
      '1001to1300': { baseTokenTax: 3500, incomeTaxFiler: 2000, incomeTaxNonFiler: 6000, professionalTax: 500, isLifetime: false },
      '1301to1500': { baseTokenTax: 4500, incomeTaxFiler: 3000, incomeTaxNonFiler: 9000, professionalTax: 500, isLifetime: false },
      '1501to2000': { baseTokenTax: 6000, incomeTaxFiler: 4500, incomeTaxNonFiler: 13500, professionalTax: 500, isLifetime: false },
      '2001to2500': { baseTokenTax: 8000, incomeTaxFiler: 7000, incomeTaxNonFiler: 21000, professionalTax: 500, isLifetime: false },
      above2500: { baseTokenTax: 12000, incomeTaxFiler: 10000, incomeTaxNonFiler: 30000, professionalTax: 500, isLifetime: false },
    },
  },
  sindh: {
    car: {
      under1000: { baseTokenTax: 10000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 300, isLifetime: true },
      '1001to1300': { baseTokenTax: 2000, incomeTaxFiler: 2500, incomeTaxNonFiler: 7500, professionalTax: 300, isLifetime: false },
      '1301to1500': { baseTokenTax: 3000, incomeTaxFiler: 3500, incomeTaxNonFiler: 10500, professionalTax: 300, isLifetime: false },
      '1501to2000': { baseTokenTax: 4500, incomeTaxFiler: 6000, incomeTaxNonFiler: 18000, professionalTax: 300, isLifetime: false },
      '2001to2500': { baseTokenTax: 7500, incomeTaxFiler: 10000, incomeTaxNonFiler: 30000, professionalTax: 300, isLifetime: false },
      above2500: { baseTokenTax: 12000, incomeTaxFiler: 20000, incomeTaxNonFiler: 60000, professionalTax: 300, isLifetime: false },
    },
    motorcycle: {
      under1000: { baseTokenTax: 1000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      '1001to1300': { baseTokenTax: 1000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      '1301to1500': { baseTokenTax: 1000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      '1501to2000': { baseTokenTax: 1000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      '2001to2500': { baseTokenTax: 1000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      above2500: { baseTokenTax: 1000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
    },
    suv: {
      under1000: { baseTokenTax: 10000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 300, isLifetime: true },
      '1001to1300': { baseTokenTax: 2500, incomeTaxFiler: 3000, incomeTaxNonFiler: 9000, professionalTax: 300, isLifetime: false },
      '1301to1500': { baseTokenTax: 4000, incomeTaxFiler: 4500, incomeTaxNonFiler: 13500, professionalTax: 300, isLifetime: false },
      '1501to2000': { baseTokenTax: 6000, incomeTaxFiler: 7500, incomeTaxNonFiler: 22500, professionalTax: 300, isLifetime: false },
      '2001to2500': { baseTokenTax: 10000, incomeTaxFiler: 12500, incomeTaxNonFiler: 37500, professionalTax: 300, isLifetime: false },
      above2500: { baseTokenTax: 16000, incomeTaxFiler: 25000, incomeTaxNonFiler: 75000, professionalTax: 300, isLifetime: false },
    },
    commercial: {
      under1000: { baseTokenTax: 1800, incomeTaxFiler: 1000, incomeTaxNonFiler: 3000, professionalTax: 500, isLifetime: false },
      '1001to1300': { baseTokenTax: 3000, incomeTaxFiler: 2000, incomeTaxNonFiler: 6000, professionalTax: 500, isLifetime: false },
      '1301to1500': { baseTokenTax: 4000, incomeTaxFiler: 3000, incomeTaxNonFiler: 9000, professionalTax: 500, isLifetime: false },
      '1501to2000': { baseTokenTax: 5500, incomeTaxFiler: 4500, incomeTaxNonFiler: 13500, professionalTax: 500, isLifetime: false },
      '2001to2500': { baseTokenTax: 7500, incomeTaxFiler: 7000, incomeTaxNonFiler: 21000, professionalTax: 500, isLifetime: false },
      above2500: { baseTokenTax: 11000, incomeTaxFiler: 10000, incomeTaxNonFiler: 30000, professionalTax: 500, isLifetime: false },
    },
  },
  islamabad: {
    car: {
      under1000: { baseTokenTax: 8000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 200, isLifetime: true },
      '1001to1300': { baseTokenTax: 2200, incomeTaxFiler: 2500, incomeTaxNonFiler: 7500, professionalTax: 200, isLifetime: false },
      '1301to1500': { baseTokenTax: 3500, incomeTaxFiler: 3500, incomeTaxNonFiler: 10500, professionalTax: 200, isLifetime: false },
      '1501to2000': { baseTokenTax: 5000, incomeTaxFiler: 6000, incomeTaxNonFiler: 18000, professionalTax: 200, isLifetime: false },
      '2001to2500': { baseTokenTax: 8500, incomeTaxFiler: 10000, incomeTaxNonFiler: 30000, professionalTax: 200, isLifetime: false },
      above2500: { baseTokenTax: 14000, incomeTaxFiler: 20000, incomeTaxNonFiler: 60000, professionalTax: 200, isLifetime: false },
    },
    motorcycle: {
      under1000: { baseTokenTax: 1200, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      '1001to1300': { baseTokenTax: 1200, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      '1301to1500': { baseTokenTax: 1200, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      '1501to2000': { baseTokenTax: 1200, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      '2001to2500': { baseTokenTax: 1200, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      above2500: { baseTokenTax: 1200, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
    },
    suv: {
      under1000: { baseTokenTax: 8000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 200, isLifetime: true },
      '1001to1300': { baseTokenTax: 2800, incomeTaxFiler: 3000, incomeTaxNonFiler: 9000, professionalTax: 200, isLifetime: false },
      '1301to1500': { baseTokenTax: 4200, incomeTaxFiler: 4500, incomeTaxNonFiler: 13500, professionalTax: 200, isLifetime: false },
      '1501to2000': { baseTokenTax: 6500, incomeTaxFiler: 7500, incomeTaxNonFiler: 22500, professionalTax: 200, isLifetime: false },
      '2001to2500': { baseTokenTax: 11000, incomeTaxFiler: 12500, incomeTaxNonFiler: 37500, professionalTax: 200, isLifetime: false },
      above2500: { baseTokenTax: 18000, incomeTaxFiler: 25000, incomeTaxNonFiler: 75000, professionalTax: 200, isLifetime: false },
    },
    commercial: {
      under1000: { baseTokenTax: 1900, incomeTaxFiler: 1000, incomeTaxNonFiler: 3000, professionalTax: 400, isLifetime: false },
      '1001to1300': { baseTokenTax: 3200, incomeTaxFiler: 2000, incomeTaxNonFiler: 6000, professionalTax: 400, isLifetime: false },
      '1301to1500': { baseTokenTax: 4200, incomeTaxFiler: 3000, incomeTaxNonFiler: 9000, professionalTax: 400, isLifetime: false },
      '1501to2000': { baseTokenTax: 5600, incomeTaxFiler: 4500, incomeTaxNonFiler: 13500, professionalTax: 400, isLifetime: false },
      '2001to2500': { baseTokenTax: 7600, incomeTaxFiler: 7000, incomeTaxNonFiler: 21000, professionalTax: 400, isLifetime: false },
      above2500: { baseTokenTax: 11500, incomeTaxFiler: 10000, incomeTaxNonFiler: 30000, professionalTax: 400, isLifetime: false },
    },
  },
  kpk: {
    car: {
      under1000: { baseTokenTax: 10000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 200, isLifetime: true },
      '1001to1300': { baseTokenTax: 2000, incomeTaxFiler: 2500, incomeTaxNonFiler: 7500, professionalTax: 200, isLifetime: false },
      '1301to1500': { baseTokenTax: 3000, incomeTaxFiler: 3500, incomeTaxNonFiler: 10500, professionalTax: 200, isLifetime: false },
      '1501to2000': { baseTokenTax: 4500, incomeTaxFiler: 6000, incomeTaxNonFiler: 18000, professionalTax: 200, isLifetime: false },
      '2001to2500': { baseTokenTax: 7500, incomeTaxFiler: 10000, incomeTaxNonFiler: 30000, professionalTax: 200, isLifetime: false },
      above2500: { baseTokenTax: 12000, incomeTaxFiler: 20000, incomeTaxNonFiler: 60000, professionalTax: 200, isLifetime: false },
    },
    motorcycle: {
      under1000: { baseTokenTax: 1000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      '1001to1300': { baseTokenTax: 1000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      '1301to1500': { baseTokenTax: 1000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      '1501to2000': { baseTokenTax: 1000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      '2001to2500': { baseTokenTax: 1000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      above2500: { baseTokenTax: 1000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
    },
    suv: {
      under1000: { baseTokenTax: 10000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 200, isLifetime: true },
      '1001to1300': { baseTokenTax: 2500, incomeTaxFiler: 3000, incomeTaxNonFiler: 9000, professionalTax: 200, isLifetime: false },
      '1301to1500': { baseTokenTax: 4000, incomeTaxFiler: 4500, incomeTaxNonFiler: 13500, professionalTax: 200, isLifetime: false },
      '1501to2000': { baseTokenTax: 6000, incomeTaxFiler: 7500, incomeTaxNonFiler: 22500, professionalTax: 200, isLifetime: false },
      '2001to2500': { baseTokenTax: 9500, incomeTaxFiler: 12500, incomeTaxNonFiler: 37500, professionalTax: 200, isLifetime: false },
      above2500: { baseTokenTax: 15000, incomeTaxFiler: 25000, incomeTaxNonFiler: 75000, professionalTax: 200, isLifetime: false },
    },
    commercial: {
      under1000: { baseTokenTax: 1800, incomeTaxFiler: 1000, incomeTaxNonFiler: 3000, professionalTax: 400, isLifetime: false },
      '1001to1300': { baseTokenTax: 3000, incomeTaxFiler: 2000, incomeTaxNonFiler: 6000, professionalTax: 400, isLifetime: false },
      '1301to1500': { baseTokenTax: 4000, incomeTaxFiler: 3000, incomeTaxNonFiler: 9000, professionalTax: 400, isLifetime: false },
      '1501to2000': { baseTokenTax: 5200, incomeTaxFiler: 4500, incomeTaxNonFiler: 13500, professionalTax: 400, isLifetime: false },
      '2001to2500': { baseTokenTax: 7200, incomeTaxFiler: 7000, incomeTaxNonFiler: 21000, professionalTax: 400, isLifetime: false },
      above2500: { baseTokenTax: 10500, incomeTaxFiler: 10000, incomeTaxNonFiler: 30000, professionalTax: 400, isLifetime: false },
    },
  },
  balochistan: {
    car: {
      under1000: { baseTokenTax: 8000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 200, isLifetime: true },
      '1001to1300': { baseTokenTax: 2000, incomeTaxFiler: 2500, incomeTaxNonFiler: 7500, professionalTax: 200, isLifetime: false },
      '1301to1500': { baseTokenTax: 2800, incomeTaxFiler: 3500, incomeTaxNonFiler: 10500, professionalTax: 200, isLifetime: false },
      '1501to2000': { baseTokenTax: 4000, incomeTaxFiler: 6000, incomeTaxNonFiler: 18000, professionalTax: 200, isLifetime: false },
      '2001to2500': { baseTokenTax: 7000, incomeTaxFiler: 10000, incomeTaxNonFiler: 30000, professionalTax: 200, isLifetime: false },
      above2500: { baseTokenTax: 11000, incomeTaxFiler: 20000, incomeTaxNonFiler: 60000, professionalTax: 200, isLifetime: false },
    },
    motorcycle: {
      under1000: { baseTokenTax: 1000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      '1001to1300': { baseTokenTax: 1000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      '1301to1500': { baseTokenTax: 1000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      '1501to2000': { baseTokenTax: 1000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      '2001to2500': { baseTokenTax: 1000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
      above2500: { baseTokenTax: 1000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 0, isLifetime: true },
    },
    suv: {
      under1000: { baseTokenTax: 8000, incomeTaxFiler: 0, incomeTaxNonFiler: 0, professionalTax: 200, isLifetime: true },
      '1001to1300': { baseTokenTax: 2500, incomeTaxFiler: 3000, incomeTaxNonFiler: 9000, professionalTax: 200, isLifetime: false },
      '1301to1500': { baseTokenTax: 3500, incomeTaxFiler: 4500, incomeTaxNonFiler: 13500, professionalTax: 200, isLifetime: false },
      '1501to2000': { baseTokenTax: 5500, incomeTaxFiler: 7500, incomeTaxNonFiler: 22500, professionalTax: 200, isLifetime: false },
      '2001to2500': { baseTokenTax: 9000, incomeTaxFiler: 12500, incomeTaxNonFiler: 37500, professionalTax: 200, isLifetime: false },
      above2500: { baseTokenTax: 14000, incomeTaxFiler: 25000, incomeTaxNonFiler: 75000, professionalTax: 200, isLifetime: false },
    },
    commercial: {
      under1000: { baseTokenTax: 1600, incomeTaxFiler: 1000, incomeTaxNonFiler: 3000, professionalTax: 300, isLifetime: false },
      '1001to1300': { baseTokenTax: 2600, incomeTaxFiler: 2000, incomeTaxNonFiler: 6000, professionalTax: 300, isLifetime: false },
      '1301to1500': { baseTokenTax: 3600, incomeTaxFiler: 3000, incomeTaxNonFiler: 9000, professionalTax: 300, isLifetime: false },
      '1501to2000': { baseTokenTax: 4800, incomeTaxFiler: 4500, incomeTaxNonFiler: 13500, professionalTax: 300, isLifetime: false },
      '2001to2500': { baseTokenTax: 6800, incomeTaxFiler: 7000, incomeTaxNonFiler: 21000, professionalTax: 300, isLifetime: false },
      above2500: { baseTokenTax: 9500, incomeTaxFiler: 10000, incomeTaxNonFiler: 30000, professionalTax: 300, isLifetime: false },
    },
  },
};

const PROVINCE_NAMES: Record<ProvinceKey, { en: string; ur: string; portal: string }> = {
  punjab: { en: 'Punjab (ePay Punjab / MTMIS)', ur: 'پنجاب (ای پے / ایم ٹی ایم آئی ایس)', portal: 'https://epay.punjab.gov.pk/' },
  sindh: { en: 'Sindh (Excise & Taxation Karachi)', ur: 'سندھ ایکسائز اینڈ ٹیکسیشن', portal: 'https://excise.gos.pk/' },
  islamabad: { en: 'Islamabad (ICT Administration)', ur: 'اسلام آباد کیپیٹل ٹیریٹری', portal: 'https://islamabadexcise.gov.pk/' },
  kpk: { en: 'KPK (Excise, Taxation & Narcotics)', ur: 'خیبر پختونخوا ایکسائز', portal: 'https://kpkexcise.gov.pk/' },
  balochistan: { en: 'Balochistan (Excise Quetta)', ur: 'بلوچستان ایکسائز اینڈ ٹیکسیشن', portal: 'https://balochistan.gov.pk/' },
};

export const TokenTaxCalculator: React.FC = () => {
  const { t } = useLanguage();

  const [province, setProvince] = useState<ProvinceKey>('punjab');
  const [vehicleType, setVehicleType] = useState<VehicleTypeKey>('car');
  const [engineCapacity, setEngineCapacity] = useState<EngineCapacityKey>('1001to1300');
  const [isFiler, setIsFiler] = useState<boolean>(true);

  // Calculation
  const calculation = useMemo(() => {
    const rule = TAX_SLABS[province]?.[vehicleType]?.[engineCapacity] || {
      baseTokenTax: 2500,
      incomeTaxFiler: 2500,
      incomeTaxNonFiler: 7500,
      professionalTax: 200,
      isLifetime: false,
    };

    const incomeTax = isFiler ? rule.incomeTaxFiler : rule.incomeTaxNonFiler;
    const cleanAir = rule.cleanAirTax || 0;
    const professional = rule.professionalTax;
    const total = rule.baseTokenTax + incomeTax + cleanAir + professional;

    return {
      rule,
      incomeTax,
      cleanAir,
      professional,
      total,
    };
  }, [province, vehicleType, engineCapacity, isFiler]);

  return (
    <div className="my-8 rounded-2xl border border-doc-brass/30 bg-doc-paper dark:bg-doc-ink overflow-hidden shadow-lg">
      {/* Header */}
      <div className="px-5 py-4 bg-doc-ink text-white flex items-center justify-between gap-3 border-b border-doc-brass/20">
        <div className="flex items-center gap-2.5">
          <Calculator className="w-5 h-5 text-doc-brass shrink-0" />
          <div>
            <h3 className="font-serif font-bold text-sm text-white leading-tight">
              {t('Official Vehicle Token Tax Calculator 2026', 'وہیکل ٹوکن ٹیکس کیلکولیٹر 2026')}
            </h3>
            <p className="text-[10px] text-slate-400 font-mono">
              {t('Excise Department Provincial Slabs & Filer/Non-Filer Rates', 'صوبائی ایکسائز ٹیرف و فائلر/نان فائلر ریٹس')}
            </p>
          </div>
        </div>
        <InteractiveToolBadge labelEn="INTERACTIVE CALCULATOR" labelUr="آن لائن کیلکولیٹر" variant="gold" />
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Step 1: Province Selection */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-doc-seal dark:text-red-400" />
            <span>{t('1. Select Province / Jurisdiction:', '1. صوبہ منتخب کریں:')}</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {(Object.keys(PROVINCE_NAMES) as ProvinceKey[]).map((key) => {
              const isSelected = province === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setProvince(key)}
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

        {/* Step 2: Vehicle Type */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
            <Car className="w-4 h-4 text-doc-seal dark:text-red-400" />
            <span>{t('2. Select Vehicle Category:', '2. گاڑی کی قسم منتخب کریں:')}</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'car', labelEn: 'Car / Sedan / Hatchback', labelUr: 'کار / سیڈان' },
              { id: 'motorcycle', labelEn: 'Motorcycle / Bike', labelUr: 'موٹر سائیکل' },
              { id: 'suv', labelEn: 'SUV / 4x4 / Jeep', labelUr: 'ایس یو وی / جیپ' },
              { id: 'commercial', labelEn: 'Commercial / Van / Bus', labelUr: 'کمرشل / وین' },
            ].map((vt) => {
              const isSelected = vehicleType === vt.id;
              return (
                <button
                  key={vt.id}
                  type="button"
                  onClick={() => setVehicleType(vt.id as VehicleTypeKey)}
                  className={`py-2.5 px-3 rounded-xl border text-center font-sans text-xs font-bold transition-all min-h-[44px] flex items-center justify-center ${
                    isSelected
                      ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                      : 'bg-doc-paper/70 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
                  }`}
                >
                  {t(vt.labelEn, vt.labelUr)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Engine Capacity */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-doc-seal dark:text-red-400" />
            <span>{t('3. Engine Displacement (Engine CC):', '3. انجن کی صلاحیت (سی سی):')}</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {[
              { id: 'under1000', label: 'Up to 1000cc' },
              { id: '1001to1300', label: '1001cc – 1300cc' },
              { id: '1301to1500', label: '1301cc – 1500cc' },
              { id: '1501to2000', label: '1501cc – 2000cc' },
              { id: '2001to2500', label: '2001cc – 2500cc' },
              { id: 'above2500', label: 'Above 2500cc' },
            ].map((ec) => {
              const isSelected = engineCapacity === ec.id;
              return (
                <button
                  key={ec.id}
                  type="button"
                  onClick={() => setEngineCapacity(ec.id as EngineCapacityKey)}
                  className={`py-2 px-2 rounded-xl border text-center font-mono text-xs font-bold transition-all min-h-[44px] flex items-center justify-center ${
                    isSelected
                      ? 'bg-doc-ink text-white border-doc-brass shadow-md ring-1 ring-doc-brass'
                      : 'bg-doc-paper/70 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-doc-brass'
                  }`}
                >
                  {ec.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 4: Filer / Non-Filer Status */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-doc-brass flex items-center gap-1.5">
            <DollarSign className="w-4 h-4 text-doc-seal dark:text-red-400" />
            <span>{t('4. Tax Status (FBR Active Taxpayers List):', '4. فائلر / نان فائلر سٹیٹس:')}</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setIsFiler(true)}
              className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition min-h-[48px] ${
                isFiler
                  ? 'bg-emerald-950/20 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-300 ring-1 ring-emerald-500'
                  : 'bg-doc-paper dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400'
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 shrink-0 ${isFiler ? 'text-emerald-600' : 'text-slate-400'}`} />
              <div>
                <p className="font-bold text-xs font-sans">Active Filer (ATL)</p>
                <p className="text-[10px] text-slate-500 font-mono">Standard Withholding Tax</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setIsFiler(false)}
              className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition min-h-[48px] ${
                !isFiler
                  ? 'bg-amber-950/20 dark:bg-amber-950/40 border-amber-500 text-amber-900 dark:text-amber-300 ring-1 ring-amber-500'
                  : 'bg-doc-paper dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400'
              }`}
            >
              <AlertCircle className={`w-4 h-4 shrink-0 ${!isFiler ? 'text-amber-600' : 'text-slate-400'}`} />
              <div>
                <p className="font-bold text-xs font-sans">Non-Filer (Late/Inactive)</p>
                <p className="text-[10px] text-slate-500 font-mono">3x Advance Income Tax</p>
              </div>
            </button>
          </div>
        </div>

        {/* Calculation Result Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-doc-ink text-white border-2 border-doc-brass/60 space-y-5 relative overflow-hidden shadow-xl animate-fadeIn">
          <div aria-hidden="true" className="absolute top-0 right-0 w-48 h-48 bg-doc-brass/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Result Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-doc-brass/30 pb-4">
            <div>
              <span className="px-2.5 py-0.5 rounded bg-doc-brass/20 text-doc-brass text-[10px] font-mono font-bold uppercase tracking-wider border border-doc-brass/30">
                {calculation.rule.isLifetime ? 'LIFETIME TOKEN TAX' : 'ANNUAL TOKEN TAX ESTIMATE'}
              </span>
              <h4 className="text-xl font-serif font-extrabold text-white mt-1">
                {PROVINCE_NAMES[province].en.split(' ')[0]} • {vehicleType.toUpperCase()} ({engineCapacity.replace('to', '–').replace('under', '< ').replace('above', '> ')}cc)
              </h4>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-[10px] font-mono text-slate-400 uppercase">TOTAL ESTIMATED PAYABLE</p>
              <p className="text-2xl sm:text-3xl font-mono font-extrabold text-doc-brass tracking-tight">
                PKR {calculation.total.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Breakdown Table */}
          <div className="space-y-2 font-sans text-xs">
            <p className="font-mono text-[11px] font-bold text-slate-300 uppercase tracking-wider">
              {t('Official Fee Breakdown:', 'فیس کی تفصیلی کٹوتی:')}
            </p>
            <div className="space-y-1.5 bg-slate-900/80 rounded-xl p-3.5 border border-slate-800 font-mono">
              <div className="flex justify-between text-slate-300">
                <span>{t('Motor Vehicle Tax (MVT):', 'موٹر وہیکل ٹیکس:')}</span>
                <span className="font-bold text-white">PKR {calculation.rule.baseTokenTax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>{t(`Advance Income Tax (${isFiler ? 'Filer' : 'Non-Filer 3x'}):`, `انکم ٹیکس (${isFiler ? 'فائلر' : 'نان فائلر'}):`)}</span>
                <span className={`font-bold ${isFiler ? 'text-white' : 'text-amber-400'}`}>PKR {calculation.incomeTax.toLocaleString()}</span>
              </div>
              {calculation.cleanAir > 0 && (
                <div className="flex justify-between text-slate-300">
                  <span>{t('Clean Air / Environmental Cess:', 'ماحولیاتی فیس:')}</span>
                  <span className="font-bold text-white">PKR {calculation.cleanAir.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-300">
                <span>{t('Professional / Registration Fee:', 'پروفیشنل فیس:')}</span>
                <span className="font-bold text-white">PKR {calculation.professional.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-doc-brass font-bold pt-2 border-t border-slate-700 text-sm">
                <span>{t('Total Amount Due:', 'کل واجب الادا رقم:')}</span>
                <span>PKR {calculation.total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Direct Link to Provincial Payment Portal */}
          <a
            href={PROVINCE_NAMES[province].portal}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-doc-brass to-amber-500 hover:from-amber-500 hover:to-amber-400 text-doc-ink font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-lg min-h-[48px]"
          >
            <span>{t(`PAY VIA OFFICIAL ${province.toUpperCase()} EXCISE PORTAL / EPAY`, `آفیشل ${province.toUpperCase()} پورٹل سے ادائیگی کریں`)}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="px-5 py-3 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
        <p>
          {t(
            'Disclaimer: Slabs are based on Provincial Finance Acts 2024–2026. Vehicles older than 10 years may be eligible for statutory depreciation discounts. Always verify current registration arrears via your official provincial MTMIS system.',
            'دستبرداری: ٹیکس سلیبس صوبائی فنانس ایکٹ 2024-2026 کے مطابق ہیں۔ 10 سال سے پرانی گاڑیوں پر رعایت ممکن ہے۔ حتمی رقم کی تصدیق ایم ٹی ایم آئی ایس سے کریں۔'
          )}
        </p>
      </div>
    </div>
  );
};
