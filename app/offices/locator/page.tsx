import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { CivicOfficeLocator } from '@/components/CivicOfficeLocator';
import { ShieldCheck, MapPin, Building2, PhoneCall, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Find Nearest NADRA, Passport & Post Office Centers 2026 | Pakistan Info Hub',
  description:
    'Interactive map locator for verified 24/7 NADRA Mega Centers, Executive Passport Offices, and General Post Offices (GPOs) across Islamabad, Lahore, Karachi, Rawalpindi, Peshawar, Quetta, and Multan.',
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/offices/locator',
  },
};

export default function OfficeLocatorPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn pb-16">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { nameEn: 'Directories & Offices', nameUr: 'سرکاری دفاتر', url: '/tracker' },
          { nameEn: 'Nearest Office Locator Map', nameUr: 'قریبی سنٹر نقشہ' },
        ]}
      />

      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <VerifiedBadge variant="header" textEn="100% Verified Gazette Addresses" textUr="مصدقہ سرکاری پتے" />
          <span className="text-xs font-mono text-doc-brass">24/7 Mega Centers Included</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 dark:text-white tracking-tight">
          Find Nearest NADRA, Passport & Post Office (2026 Map)
        </h1>
      </div>

      {/* Direct Answer Box */}
      <DirectAnswerBox
        topicTitleEn="How to find the nearest NADRA Mega Center or Passport Office in Pakistan?"
        topicTitleUr="پاکستان میں قریبی نادرا میگا سنٹر یا پاسپورٹ آفس کیسے تلاش کریں؟"
        answerEn="Use the interactive locator map below or click 'Use My Location' to discover the closest 24/7 NADRA Mega Centers, Executive Regional Passport Offices, and General Post Offices (GPOs). Complete address, working hours, phone numbers, and direct Google Maps directions are provided."
        answerUr="نیچے دیے گئے انٹرایکٹو نقشے یا 'میری لوکیشن' پر کلک کر کے اسلام آباد، لاہور، کراچی اور ملک بھر کے 24 گھنٹے کھلے نادرا میگا سنٹرز، پاسپورٹ اور ڈاکخانہ جات کے پتے، اوقات اور رابطہ نمبرز حاصل کریں۔"
      />

      {/* Interactive Map & Directory Locator */}
      <CivicOfficeLocator />

      {/* Data Sourcing & Maintenance Note */}
      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1120] space-y-3 text-xs text-slate-600 dark:text-slate-400 font-sans">
        <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Office Directory Data Verification Protocol</span>
        </h4>
        <p className="leading-relaxed">
          Office coordinates, operational shifts (including 24/7 continuous operations), and branch contact helplines are audited bi-monthly against official Directorate General of Immigration & Passports (DGIP), NADRA Regional Headquarters, and Pakistan Post circulars.
        </p>
      </div>
    </div>
  );
}
