'use client';

import React from 'react';

export const CivicServicesIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      role="img"
      aria-label="Pakistani civic services illustration featuring Smart CNIC identity card, green e-Passport booklet, and Gazette verification certificate"
      className={`relative w-full flex items-center justify-center select-none ${className}`}
    >
      {/* Ambient background lighting behind vector assets */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#B8860B]/12 via-[#10B981]/15 to-[#2E4270]/25 rounded-full filter blur-2xl transform scale-90 pointer-events-none" />

      {/* Main SVG Vector Graphic */}
      <svg
        viewBox="0 0 540 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-[250px] sm:max-h-[320px] lg:max-h-[400px] drop-shadow-2xl overflow-visible"
      >
        <title>Pakistani Civic Services Vector Illustration</title>
        <defs>
          {/* Gradients */}
          <linearGradient id="passportCover" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A4D2E" />
            <stop offset="50%" stopColor="#04381F" />
            <stop offset="100%" stopColor="#012413" />
          </linearGradient>

          <linearGradient id="goldEmboss" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5D061" />
            <stop offset="40%" stopColor="#D4A017" />
            <stop offset="100%" stopColor="#996515" />
          </linearGradient>

          <linearGradient id="cnicBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="60%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          <linearGradient id="cnicHeader" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0A4D2E" />
            <stop offset="100%" stopColor="#1B2A4A" />
          </linearGradient>

          <linearGradient id="docBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F1F5F9" />
          </linearGradient>

          <filter id="cardShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.35" />
          </filter>

          <filter id="floatShadow" x="-15%" y="-15%" width="135%" height="135%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0B1120" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* ══════════════════════════════════════════════════════════════════
            LAYER 1: OFFICIAL GAZETTE DOCUMENT (Background Left Tilt)
        ══════════════════════════════════════════════════════════════════ */}
        <g transform="translate(60, 45) rotate(-8)" filter="url(#cardShadow)">
          {/* Document Sheet */}
          <rect width="210" height="280" rx="10" fill="url(#docBg)" stroke="#CBD5E1" strokeWidth="1.5" />
          
          {/* Official Stamp Ribbon at Top */}
          <rect x="20" y="20" width="170" height="6" rx="3" fill="#E2E8F0" />
          <rect x="20" y="34" width="130" height="5" rx="2.5" fill="#E2E8F0" />
          
          {/* Document Header Line & Watermark Seal */}
          <circle cx="105" cy="90" r="32" fill="#0A4D2E" fillOpacity="0.06" stroke="#D4A017" strokeWidth="1" strokeDasharray="3 2" />
          <path d="M105 72 L110 84 L123 85 L113 94 L116 107 L105 100 L94 107 L97 94 L87 85 L100 84 Z" fill="#D4A017" fillOpacity="0.2" />

          {/* Form Text Lines */}
          <rect x="25" y="140" width="160" height="4" rx="2" fill="#94A3B8" fillOpacity="0.5" />
          <rect x="25" y="152" width="145" height="4" rx="2" fill="#94A3B8" fillOpacity="0.4" />
          <rect x="25" y="164" width="150" height="4" rx="2" fill="#94A3B8" fillOpacity="0.4" />
          <rect x="25" y="176" width="110" height="4" rx="2" fill="#94A3B8" fillOpacity="0.4" />

          {/* Verification Table Row Box */}
          <rect x="25" y="195" width="160" height="34" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
          <rect x="35" y="205" width="60" height="4" rx="2" fill="#0F9D6D" />
          <rect x="35" y="215" width="40" height="3" rx="1.5" fill="#94A3B8" />
          <rect x="130" y="206" width="45" height="12" rx="4" fill="#0F9D6D" fillOpacity="0.15" />
          <circle cx="140" cy="212" r="3" fill="#0F9D6D" />

          {/* Official Verification Seal Stamp */}
          <g transform="translate(135, 235)">
            <circle cx="20" cy="20" r="18" fill="#B8860B" fillOpacity="0.12" stroke="#B8860B" strokeWidth="1.5" />
            <circle cx="20" cy="20" r="14" fill="none" stroke="#B8860B" strokeWidth="0.75" strokeDasharray="2 1.5" />
            <path d="M14 20 L18 24 L26 15" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>

        {/* ══════════════════════════════════════════════════════════════════
            LAYER 2: PAKISTANI GREEN PASSPORT (Back Right Tilt)
        ══════════════════════════════════════════════════════════════════ */}
        <g transform="translate(270, 30) rotate(9)" filter="url(#cardShadow)">
          {/* Passport Book Cover */}
          <rect width="190" height="265" rx="12" fill="url(#passportCover)" stroke="#1B4D3E" strokeWidth="1.5" />
          
          {/* Golden Outer Decorative Inset Border */}
          <rect x="10" y="10" width="170" height="245" rx="8" fill="none" stroke="url(#goldEmboss)" strokeWidth="1.2" strokeOpacity="0.7" />
          <rect x="13" y="13" width="164" height="239" rx="6" fill="none" stroke="url(#goldEmboss)" strokeWidth="0.6" strokeOpacity="0.4" />

          {/* Header Title: ISLAMIC REPUBLIC OF PAKISTAN */}
          <text x="95" y="38" textAnchor="middle" fill="url(#goldEmboss)" fontSize="7.5" fontFamily="serif" fontWeight="bold" letterSpacing="0.8">
            ISLAMIC REPUBLIC OF PAKISTAN
          </text>
          <text x="95" y="48" textAnchor="middle" fill="url(#goldEmboss)" fontSize="7.5" fontFamily="serif" fontWeight="bold">
            حکومت پاکستان
          </text>

          {/* National Emblem: Crescent, Star & Floral Wreath */}
          <g transform="translate(95, 110)">
            {/* Outer Wreath Ring */}
            <circle cx="0" cy="0" r="28" fill="none" stroke="url(#goldEmboss)" strokeWidth="0.75" strokeDasharray="3 1.5" strokeOpacity="0.6" />
            {/* Shield Center */}
            <path d="M -14 -12 L 14 -12 C 14 6 0 16 0 16 C 0 16 -14 6 -14 -12 Z" fill="none" stroke="url(#goldEmboss)" strokeWidth="1.5" />
            {/* Crescent & Star */}
            <path d="M -4 -22 A 6 6 0 1 0 4 -22 A 4.5 4.5 0 1 1 -4 -22 Z" fill="url(#goldEmboss)" />
            <polygon points="5,-24 6.5,-20 10,-20 7.5,-18 8.5,-14 5,-16.5 1.5,-14 2.5,-18 0,-20 3.5,-20" fill="url(#goldEmboss)" transform="scale(0.5) translate(4, -20)" />
          </g>

          {/* Bottom Title: PASSPORT */}
          <text x="95" y="195" textAnchor="middle" fill="url(#goldEmboss)" fontSize="11" fontFamily="serif" fontWeight="bold" letterSpacing="2">
            PASSPORT
          </text>
          <text x="95" y="210" textAnchor="middle" fill="url(#goldEmboss)" fontSize="9" fontFamily="serif" fontWeight="bold">
            پاسپورٹ
          </text>

          {/* Biometric E-Passport Chip Symbol */}
          <g transform="translate(83, 226)">
            <rect x="0" y="0" width="24" height="15" rx="3" fill="none" stroke="url(#goldEmboss)" strokeWidth="1.2" />
            <circle cx="12" cy="7.5" r="3.5" fill="none" stroke="url(#goldEmboss)" strokeWidth="1.2" />
            <line x1="0" y1="7.5" x2="8.5" y2="7.5" stroke="url(#goldEmboss)" strokeWidth="1.2" />
            <line x1="15.5" y1="7.5" x2="24" y2="7.5" stroke="url(#goldEmboss)" strokeWidth="1.2" />
          </g>
        </g>

        {/* ══════════════════════════════════════════════════════════════════
            LAYER 3: NADRA SMART CNIC CARD (Front Center Elevation)
        ══════════════════════════════════════════════════════════════════ */}
        <g transform="translate(110, 160)" filter="url(#cardShadow)">
          {/* Card Base */}
          <rect width="280" height="175" rx="14" fill="url(#cnicBg)" stroke="#CBD5E1" strokeWidth="1.5" />
          
          {/* Top Green/Navy Header Band */}
          <path d="M 0 14 C 0 6.268 6.268 0 14 0 L 266 0 C 273.732 0 280 6.268 280 14 L 280 34 L 0 34 Z" fill="url(#cnicHeader)" />
          
          {/* Pakistan Flag / National Ribbon in Header */}
          <circle cx="22" cy="17" r="10" fill="#0A4D2E" stroke="#FFFFFF" strokeWidth="1" />
          <path d="M 19 13 A 4 4 0 1 0 25 13 A 3 3 0 1 1 19 13 Z" fill="#FFFFFF" />
          <polygon points="25,11 26,13 28,13 26.5,14.5 27,16.5 25,15 23,16.5 23.5,14.5 22,13 24,13" fill="#FFFFFF" transform="scale(0.5) translate(22, 5)" />

          {/* Header Text */}
          <text x="40" y="16" fill="#FFFFFF" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.4">
            ISLAMIC REPUBLIC OF PAKISTAN
          </text>
          <text x="40" y="27" fill="#D4A017" fontSize="6.5" fontFamily="sans-serif" fontWeight="600">
            National Identity Card | حکومت پاکستان
          </text>

          {/* Golden Smart Microchip */}
          <g transform="translate(20, 48)">
            <rect width="36" height="30" rx="4" fill="#F5D061" stroke="#D4A017" strokeWidth="1.2" />
            {/* Microchip Internal Circuit Traces */}
            <rect x="5" y="4" width="26" height="22" rx="2" fill="#E5B83B" stroke="#996515" strokeWidth="0.5" />
            <line x1="5" y1="15" x2="31" y2="15" stroke="#996515" strokeWidth="0.75" />
            <line x1="18" y1="4" x2="18" y2="26" stroke="#996515" strokeWidth="0.75" />
          </g>

          {/* Photo Avatar Box */}
          <g transform="translate(210, 46)">
            <rect width="52" height="64" rx="6" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1" />
            {/* Avatar Silhouette */}
            <circle cx="26" cy="24" r="12" fill="#94A3B8" fillOpacity="0.6" />
            <path d="M 12 56 C 12 44 40 44 40 56 Z" fill="#94A3B8" fillOpacity="0.6" />
          </g>

          {/* Citizen Details / Identification Data */}
          {/* Name */}
          <text x="68" y="54" fill="#64748B" fontSize="6" fontFamily="sans-serif" fontWeight="500">Name</text>
          <text x="68" y="65" fill="#0B1120" fontSize="8.5" fontFamily="sans-serif" fontWeight="bold">MUHAMMAD ALI</text>

          {/* Father Name */}
          <text x="68" y="78" fill="#64748B" fontSize="6" fontFamily="sans-serif" fontWeight="500">Father Name</text>
          <text x="68" y="88" fill="#1E293B" fontSize="7.5" fontFamily="sans-serif" fontWeight="600">TARIQ MEHMOOD</text>

          {/* Gender & Country of Stay */}
          <text x="68" y="100" fill="#64748B" fontSize="6" fontFamily="sans-serif">Gender: M | Country: PAKISTAN</text>

          {/* Official CNIC Number Band */}
          <g transform="translate(20, 122)">
            <rect width="180" height="24" rx="5" fill="#0F172A" fillOpacity="0.06" stroke="#CBD5E1" strokeWidth="0.75" />
            <text x="10" y="16" fill="#0B1120" fontSize="10" fontFamily="monospace" fontWeight="bold" letterSpacing="1.5">
              35201-1234567-1
            </text>
          </g>

          {/* Biometric Fingerprint & Holographic Seal */}
          <g transform="translate(216, 120)">
            <circle cx="20" cy="18" r="16" fill="#0F9D6D" fillOpacity="0.1" stroke="#0F9D6D" strokeWidth="1" strokeDasharray="3 2" />
            {/* Fingerprint Arcs */}
            <path d="M 12 18 C 12 12 28 12 28 18" stroke="#0F9D6D" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <path d="M 15 18 C 15 14 25 14 25 18" stroke="#0F9D6D" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <path d="M 18 18 C 18 16 22 16 22 18" stroke="#0F9D6D" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          </g>

          {/* Card Validity Tag */}
          <rect x="20" y="152" width="70" height="12" rx="3" fill="#0F9D6D" fillOpacity="0.15" />
          <text x="25" y="161" fill="#0A5C36" fontSize="6" fontFamily="sans-serif" fontWeight="bold">
            VALID TILL: 2036
          </text>
        </g>

        {/* ══════════════════════════════════════════════════════════════════
            LAYER 4: FLOATING SAAS TRUST PILLS (Depth Overlay)
        ══════════════════════════════════════════════════════════════════ */}
        {/* Floating Top Badge: 100% Verified Gazette */}
        <g transform="translate(290, 12)" filter="url(#floatShadow)">
          <rect width="180" height="42" rx="21" fill="#0B1120" stroke="#B8860B" strokeWidth="1.5" />
          <circle cx="22" cy="21" r="12" fill="#0F9D6D" />
          <path d="M 16 21 L 20 25 L 28 16" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="42" y="18" fill="#FFFFFF" fontSize="8" fontFamily="sans-serif" fontWeight="bold">
            100% GAZETTE VERIFIED
          </text>
          <text x="42" y="30" fill="#D4A017" fontSize="7" fontFamily="sans-serif" fontWeight="500">
            Updated August 2026
          </text>
        </g>

        {/* Floating Bottom Left Badge: 1Link / Fee Verified */}
        <g transform="translate(25, 335)" filter="url(#floatShadow)">
          <rect width="175" height="40" rx="12" fill="#0B1120" stroke="#334155" strokeWidth="1.2" />
          <circle cx="22" cy="20" r="11" fill="#B8860B" fillOpacity="0.2" stroke="#B8860B" strokeWidth="1.2" />
          <path d="M 22 13 L 22 27 M 17 18 L 27 18" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" />
          <text x="40" y="17" fill="#F8FAFC" fontSize="8" fontFamily="sans-serif" fontWeight="bold">
            Live Fee 2026 Schedule
          </text>
          <text x="40" y="29" fill="#94A3B8" fontSize="7" fontFamily="sans-serif">
            Official 1Link PSID Data
          </text>
        </g>

        {/* Floating Bottom Right Badge: FBR & BISP Active */}
        <g transform="translate(360, 310)" filter="url(#floatShadow)">
          <rect width="160" height="38" rx="10" fill="#0B1120" stroke="#0F9D6D" strokeWidth="1.2" strokeOpacity="0.8" />
          <circle cx="18" cy="19" r="6" fill="#10B981" />
          <circle cx="18" cy="19" r="10" fill="#10B981" fillOpacity="0.25" />
          <text x="32" y="16" fill="#FFFFFF" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">
            FBR & BISP Active
          </text>
          <text x="32" y="27" fill="#6EE7B7" fontSize="6.5" fontFamily="monospace">
            2026 Online Portal
          </text>
        </g>
      </svg>
    </div>
  );
};
