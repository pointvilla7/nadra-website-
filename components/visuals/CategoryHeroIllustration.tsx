'use client';

import React from 'react';

export interface CategoryHeroIllustrationProps {
  category: string;
  className?: string;
}

export const CategoryHeroIllustration: React.FC<CategoryHeroIllustrationProps> = ({
  category = 'nadra',
  className = '',
}) => {
  const cat = category.toLowerCase().trim();

  // Color schemes according to the doc design palette & category identity
  const getThemeColors = () => {
    switch (cat) {
      case 'nadra':
      case 'cnic':
        return {
          primary: '#0A4D2E', // National Green
          secondary: '#1B2A4A', // Official Navy
          accent: '#D4A017', // Gold
          seal: '#C0362C',
          glow: 'from-emerald-500/15 via-amber-500/10 to-blue-500/15',
          title: 'NADRA Smart Identity Vector Emblem',
        };
      case 'passport':
        return {
          primary: '#013220', // Dark Forest Green
          secondary: '#0A4D2E',
          accent: '#F5D061', // Rich Gold
          seal: '#B8860B',
          glow: 'from-green-600/15 via-yellow-500/10 to-emerald-700/15',
          title: 'Official Green Passport Vector Booklet',
        };
      case 'tax':
      case 'fbr':
        return {
          primary: '#1B2A4A',
          secondary: '#2E4270',
          accent: '#D4A017',
          seal: '#C0362C',
          glow: 'from-blue-600/15 via-amber-500/10 to-indigo-600/15',
          title: 'FBR Tax Ledger & Active Filer Vector',
        };
      case 'legal':
      case 'police':
        return {
          primary: '#1B2A4A',
          secondary: '#374151',
          accent: '#D4A017',
          seal: '#C0362C',
          glow: 'from-slate-700/15 via-red-600/10 to-amber-500/15',
          title: 'Police & Judicial Court Record Vector',
        };
      case 'traffic':
        return {
          primary: '#1E1B4B',
          secondary: '#312E81',
          accent: '#38BDF8',
          seal: '#C0362C',
          glow: 'from-indigo-600/15 via-cyan-500/10 to-purple-600/15',
          title: 'PSCA Traffic & DLIMS License Vector',
        };
      case 'bills':
      case 'wapda':
        return {
          primary: '#78350F',
          secondary: '#92400E',
          accent: '#F59E0B',
          seal: '#D97706',
          glow: 'from-amber-600/15 via-yellow-500/10 to-orange-600/15',
          title: 'WAPDA & Sui Gas Utility Vector',
        };
      case 'welfare':
      case 'bisp':
        return {
          primary: '#064E3B',
          secondary: '#047857',
          accent: '#F59E0B',
          seal: '#C0362C',
          glow: 'from-emerald-600/15 via-teal-500/10 to-amber-500/15',
          title: 'BISP Social Welfare & 8171 Relief Vector',
        };
      case 'health':
        return {
          primary: '#881337',
          secondary: '#9F1239',
          accent: '#10B981',
          seal: '#C0362C',
          glow: 'from-rose-600/15 via-emerald-500/10 to-red-600/15',
          title: 'Sehat Sahulat Health Card Vector',
        };
      case 'certificates':
        return {
          primary: '#1B2A4A',
          secondary: '#0F766E',
          accent: '#D4A017',
          seal: '#C0362C',
          glow: 'from-teal-600/15 via-amber-500/10 to-blue-600/15',
          title: 'Official Civic Certificate & Stamp Vector',
        };
      case 'education':
        return {
          primary: '#0C4A6E',
          secondary: '#0284C7',
          accent: '#F59E0B',
          seal: '#C0362C',
          glow: 'from-sky-600/15 via-amber-500/10 to-blue-600/15',
          title: 'BISE Board Exam & University Degree Vector',
        };
      case 'jobs':
        return {
          primary: '#1E293B',
          secondary: '#334155',
          accent: '#38BDF8',
          seal: '#C0362C',
          glow: 'from-slate-600/15 via-sky-500/10 to-blue-600/15',
          title: 'Government Vacancy & PPSC Gazette Vector',
        };
      case 'property':
        return {
          primary: '#713F12',
          secondary: '#854D0E',
          accent: '#D4A017',
          seal: '#C0362C',
          glow: 'from-yellow-700/15 via-amber-500/10 to-emerald-600/15',
          title: 'PLRA Fard & Land Mutation Vector',
        };
      default:
        return {
          primary: '#1B2A4A',
          secondary: '#0A4D2E',
          accent: '#D4A017',
          seal: '#C0362C',
          glow: 'from-emerald-500/15 via-amber-500/10 to-blue-500/15',
          title: 'Pakistan Civic Services Vector Illustration',
        };
    }
  };

  const theme = getThemeColors();

  return (
    <div
      role="img"
      aria-label={theme.title}
      className={`relative w-full flex items-center justify-center select-none ${className}`}
    >
      {/* Ambient Radial Lighting */}
      <div
        className={`absolute inset-0 bg-gradient-to-tr ${theme.glow} rounded-full filter blur-2xl transform scale-90 pointer-events-none`}
      />

      {/* Main Code-Generated Vector SVG Illustration */}
      <svg
        viewBox="0 0 500 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-[190px] sm:max-h-[220px] drop-shadow-xl overflow-visible"
      >
        <title>{theme.title}</title>
        <defs>
          <linearGradient id={`${cat}-grad-primary`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={theme.primary} />
            <stop offset="100%" stopColor={theme.secondary} />
          </linearGradient>

          <linearGradient id={`${cat}-grad-gold`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5D061" />
            <stop offset="50%" stopColor="#D4A017" />
            <stop offset="100%" stopColor="#996515" />
          </linearGradient>

          <linearGradient id={`${cat}-doc-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F8FAFC" />
          </linearGradient>

          <filter id={`${cat}-shadow`} x="-10%" y="-10%" width="125%" height="125%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0B1120" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* ══════════════════════════════════════════════════════════════════
            LAYER 1: Left Background Document Sheet (Tilted)
        ══════════════════════════════════════════════════════════════════ */}
        <g transform="translate(60, 20) rotate(-6)" filter={`url(#${cat}-shadow)`}>
          <rect width="180" height="190" rx="8" fill={`url(#${cat}-doc-bg)`} stroke="#CBD5E1" strokeWidth="1.2" />
          
          {/* Header Bar */}
          <rect x="15" y="15" width="150" height="6" rx="3" fill={theme.primary} fillOpacity="0.8" />
          <rect x="15" y="26" width="90" height="4" rx="2" fill="#94A3B8" fillOpacity="0.5" />

          {/* Micro Guilloche Security Circle */}
          <circle cx="90" cy="70" r="24" fill="none" stroke={theme.accent} strokeWidth="0.8" strokeDasharray="3 2" opacity="0.6" />
          <circle cx="90" cy="70" r="16" fill={theme.accent} fillOpacity="0.08" />

          {/* Text Line Placeholders */}
          <rect x="20" y="110" width="140" height="3" rx="1.5" fill="#94A3B8" fillOpacity="0.4" />
          <rect x="20" y="120" width="120" height="3" rx="1.5" fill="#94A3B8" fillOpacity="0.4" />
          <rect x="20" y="130" width="135" height="3" rx="1.5" fill="#94A3B8" fillOpacity="0.4" />
          <rect x="20" y="140" width="95" height="3" rx="1.5" fill="#94A3B8" fillOpacity="0.4" />

          {/* Bottom Left Watermark Seal */}
          <circle cx="140" cy="158" r="14" fill={theme.accent} fillOpacity="0.15" stroke={theme.accent} strokeWidth="1" />
          <path d="M135 158 L139 162 L147 154" stroke={theme.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* ══════════════════════════════════════════════════════════════════
            LAYER 2: Right Card / Primary Certificate (Tilted Right)
        ══════════════════════════════════════════════════════════════════ */}
        <g transform="translate(240, 25) rotate(4)" filter={`url(#${cat}-shadow)`}>
          <rect width="200" height="180" rx="10" fill={`url(#${cat}-grad-primary)`} stroke={theme.accent} strokeWidth="1.2" />
          
          {/* Card Inner Border */}
          <rect x="8" y="8" width="184" height="164" rx="7" fill="none" stroke={theme.accent} strokeWidth="0.75" strokeDasharray="4 2" opacity="0.5" />

          {/* Islamic Star / Official Crest Symbol */}
          <g transform="translate(100, 48)">
            <circle cx="0" cy="0" r="18" fill={theme.accent} fillOpacity="0.15" stroke={theme.accent} strokeWidth="1" />
            <path d="M 0 -10 L 3 -3 L 10 0 L 3 3 L 0 10 L -3 3 L -10 0 L -3 -3 Z" fill={`url(#${cat}-grad-gold)`} />
          </g>

          {/* Category Graphic Details */}
          {cat === 'nadra' || cat === 'cnic' ? (
            /* Chip & Biometric lines */
            <g transform="translate(25, 95)">
              <rect width="36" height="26" rx="4" fill={`url(#${cat}-grad-gold)`} stroke="#B8860B" strokeWidth="0.75" />
              <rect x="6" y="5" width="24" height="16" rx="2" fill="none" stroke="#78350F" strokeWidth="0.6" />
              <line x1="18" y1="5" x2="18" y2="21" stroke="#78350F" strokeWidth="0.6" />
              <line x1="6" y1="13" x2="30" y2="13" stroke="#78350F" strokeWidth="0.6" />
              <rect x="75" y="4" width="80" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.8" />
              <rect x="75" y="14" width="60" height="3" rx="1.5" fill="#FFFFFF" fillOpacity="0.5" />
            </g>
          ) : cat === 'passport' ? (
            /* Passport Golden Emblem & text */
            <g transform="translate(45, 90)">
              <rect x="10" y="4" width="90" height="3.5" rx="1.75" fill={`url(#${cat}-grad-gold)`} />
              <rect x="25" y="14" width="60" height="3" rx="1.5" fill={`url(#${cat}-grad-gold)`} opacity="0.8" />
              <rect x="35" y="24" width="40" height="2.5" rx="1.25" fill={`url(#${cat}-grad-gold)`} opacity="0.6" />
            </g>
          ) : cat === 'tax' || cat === 'fbr' ? (
            /* Tax Balance Scale */
            <g transform="translate(30, 92)">
              <line x1="70" y1="5" x2="70" y2="35" stroke={theme.accent} strokeWidth="2" strokeLinecap="round" />
              <line x1="45" y1="10" x2="95" y2="10" stroke={theme.accent} strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 45 10 L 35 24 L 55 24 Z" fill="none" stroke={theme.accent} strokeWidth="1" />
              <path d="M 95 10 L 85 24 L 105 24 Z" fill="none" stroke={theme.accent} strokeWidth="1" />
            </g>
          ) : cat === 'legal' || cat === 'police' ? (
            /* Scales of Justice & Gavel */
            <g transform="translate(35, 92)">
              <rect x="20" y="18" width="55" height="8" rx="2" fill={`url(#${cat}-grad-gold)`} transform="rotate(-15)" />
              <rect x="75" y="10" width="45" height="4" rx="2" fill="#FFFFFF" opacity="0.8" />
              <rect x="75" y="20" width="30" height="3" rx="1.5" fill="#FFFFFF" opacity="0.5" />
            </g>
          ) : cat === 'health' ? (
            /* Medical Cross & Pulse */
            <g transform="translate(30, 92)">
              <rect x="15" y="5" width="24" height="24" rx="4" fill="#FFFFFF" fillOpacity="0.15" />
              <path d="M 27 9 L 27 25 M 19 17 L 35 17" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 55 17 L 65 17 L 70 8 L 76 26 L 82 12 L 87 17 L 105 17" fill="none" stroke={theme.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          ) : (
            /* General Official Gazette Seal */
            <g transform="translate(30, 95)">
              <rect x="15" y="4" width="110" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.8" />
              <rect x="15" y="14" width="80" height="3" rx="1.5" fill="#FFFFFF" fillOpacity="0.5" />
              <rect x="15" y="24" width="95" height="3" rx="1.5" fill="#FFFFFF" fillOpacity="0.4" />
            </g>
          )}

          {/* Bottom Security Barcode / Numeric Code */}
          <g transform="translate(25, 148)" opacity="0.7">
            <line x1="0" y1="0" x2="150" y2="0" stroke={theme.accent} strokeWidth="0.75" />
            <rect x="5" y="5" width="3" height="8" fill="#FFFFFF" />
            <rect x="11" y="5" width="1.5" height="8" fill="#FFFFFF" />
            <rect x="15" y="5" width="4" height="8" fill="#FFFFFF" />
            <rect x="22" y="5" width="2" height="8" fill="#FFFFFF" />
            <rect x="27" y="5" width="5" height="8" fill="#FFFFFF" />
            <rect x="35" y="5" width="2" height="8" fill="#FFFFFF" />
            <rect x="40" y="5" width="3.5" height="8" fill="#FFFFFF" />
            <rect x="46" y="5" width="2" height="8" fill="#FFFFFF" />
            <rect x="51" y="5" width="4" height="8" fill="#FFFFFF" />
          </g>
        </g>

        {/* ══════════════════════════════════════════════════════════════════
            LAYER 3: Floating Foreground Embossed Verification Seal
        ══════════════════════════════════════════════════════════════════ */}
        <g transform="translate(195, 115)" filter={`url(#${cat}-shadow)`}>
          {/* Outer Rosette Ribbons */}
          <path d="M 25 50 L 15 80 L 25 74 L 35 80 Z" fill="#996515" />
          <path d="M 45 50 L 35 80 L 45 74 L 55 80 Z" fill="#855F27" />

          {/* Seal Medal Circle */}
          <circle cx="35" cy="35" r="30" fill={`url(#${cat}-grad-gold)`} stroke="#FFF" strokeWidth="1.5" />
          <circle cx="35" cy="35" r="26" fill={theme.primary} stroke="#D4A017" strokeWidth="0.8" strokeDasharray="3 1.5" />

          {/* Inner Stamp Star & Check */}
          <circle cx="35" cy="35" r="18" fill={theme.seal} fillOpacity="0.9" />
          <path d="M 28 35 L 33 40 L 43 29" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
};
