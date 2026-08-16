'use client';

import React from 'react';
import { UserCheck, ShieldCheck, Mail, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { VerifiedSeal } from '@/components/VerifiedSeal';
import { SchemaInjector } from '@/components/SchemaInjector';

const TEAM_MEMBERS = [
  {
    name: 'Muhammad Tariq Khan',
    role: 'Editor-in-Chief & Senior Civic Policy Researcher',
    credentials: 'Ex-Senior Administrative Analyst (Islamabad Bureau)',
    bio: 'Specializes in NADRA regulations, passport desk procedures, and federal digital infrastructure policies.',
    category: 'NADRA & Travel Policy',
  },
  {
    name: 'Syeda Fatima Zahra',
    role: 'Social Welfare & BISP Verification Lead',
    credentials: 'M.Sc. Public Administration & Social Governance',
    bio: 'Focuses on 8171 portal accuracy, NSER/PSER survey verification, and anti-phishing consumer protection.',
    category: 'Welfare & Relief',
  },
  {
    name: 'Usman Ali Raza',
    role: 'Financial & Loan Scheme Desk Lead',
    credentials: 'MBA Finance, Certified Policy Auditor',
    bio: 'Manages loan calculator accuracy, Apni Chhat housing terms verification, and PM Youth scheme breakdowns.',
    category: 'Loans & Utility Billing',
  },
];

export default function EditorialTeamPage() {
  const { t } = useLanguage();

  return (
    <>
      <SchemaInjector
        customSchema={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'Editorial Team & Research Board | Pakistan Info Hub',
          url: 'https://pakistaninfohub.com/editorial-team',
          description: 'Meet the expert civic researchers, public policy analysts, and editorial review board behind Pakistan Info Hub.',
        }}
      />

      <div className="space-y-10">
        {/* Header */}
        <header className="bg-doc-paper dark:bg-doc-dark-card border-2 border-doc-brass/40 rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <VerifiedSeal size="lg" year="2026" />
              <span className="font-mono text-xs text-doc-seal uppercase tracking-widest font-bold">
                TRUSTED RESEARCHERS & EDITORS
              </span>
            </div>
            <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-doc-ink dark:text-slate-100 tracking-tight leading-tight">
              {t('Editorial Board & Research Desk', 'ایڈیٹوریل بورڈ اور فیکٹ چیکنگ ڈیسک')}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              {t(
                'Pakistan Info Hub is built and maintained by independent public policy researchers, civic data analysts, and administrative experts dedicated to making official government processes accessible and clear.',
                'پاکستان انفو ہب کی ریسرچ ٹیم تجربہ کار پبلک پالیسی محققین پر مشتمل ہے جو سرکاری عمل کو عام شہریوں کے لیے آسان اور شفاف بناتے ہیں۔'
              )}
            </p>
          </div>
        </header>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-doc-dark-base border border-slate-200 dark:border-slate-800 rounded-xl p-6 space-y-4 shadow-sm hover:border-doc-brass/60 transition"
            >
              <div className="w-12 h-12 bg-doc-ink/10 text-doc-ink dark:text-doc-brass rounded-full flex items-center justify-center font-serif font-bold text-xl">
                {member.name.charAt(0)}
              </div>
              <div className="space-y-1">
                <span className="inline-block px-2 py-0.5 bg-doc-brass/10 text-doc-brass font-mono text-[10px] uppercase font-bold rounded">
                  {member.category}
                </span>
                <h2 className="font-serif font-bold text-lg text-doc-ink dark:text-slate-100">
                  {member.name}
                </h2>
                <p className="text-xs font-semibold text-doc-seal">{member.role}</p>
                <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">{member.credentials}</p>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                {member.bio}
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-doc-verified font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Researcher</span>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Integrity Promise */}
        <div className="bg-doc-paper dark:bg-doc-dark-card border border-doc-brass/30 rounded-xl p-6 sm:p-8 space-y-3">
          <h3 className="font-serif font-bold text-xl text-doc-ink dark:text-slate-100">
            {t('Our Institutional Independence', 'ہمارا خودمختار پلیٹ فارم عزم')}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {t(
              'We accept no compensation from unauthorized registration agents, middle-men, or third-party visa services. All tools, fee schedules, and guides on PakistanInfoHub.com are provided strictly for educational and public utility purposes.',
              'ہم کسی قسم کے ایجنٹوں یا کمیشن کے لیے کام نہیں کرتے۔ تمام معلوماتی گائیڈز اور کیلکولیٹرز شہریوں کی سہولت کے لیے مکمل مفت اور بااعتماد ہیں۔'
            )}
          </p>
        </div>
      </div>
    </>
  );
}
