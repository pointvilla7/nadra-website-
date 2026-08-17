'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

interface SealProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const EmbossedVerificationSeal: React.FC<SealProps> = ({
  size = 'md',
  className = '',
}) => {
  const { t } = useLanguage();

  const dimensionClass =
    size === 'sm'
      ? 'w-16 h-16 text-[8px]'
      : size === 'lg'
      ? 'w-28 h-28 text-[10px]'
      : 'w-20 h-20 text-[9px]';

  return (
    <div
      className={`relative inline-flex items-center justify-center group select-none ${className}`}
      title={t(
        'Independently Verified Record by Pakistan Info Hub (Not affiliated with Govt of Pakistan)',
        'پاکستان انفو ہب کا آزادانہ طور پر تصدیق شدہ ریکارڈ (سرکاری ادارے سے منسلک نہیں)'
      )}
    >
      {/* Outer Shimmer & Seal Ring */}
      <div
        className={`relative ${dimensionClass} rounded-full bg-gradient-to-br from-[#D4AF37] via-[#B08D57] to-[#8C6D37] p-1 shadow-lg shadow-doc-brass/20 transition-transform duration-300 group-hover:scale-105`}
      >
        {/* Inner Gold Foil Stamped Border */}
        <div className="w-full h-full rounded-full border-2 border-dashed border-[#F7F4EC]/60 bg-doc-ink dark:bg-doc-dark-base flex items-center justify-center relative overflow-hidden shadow-inner">
          
          {/* Circular Text Outer Path */}
          <svg className="w-full h-full absolute inset-0 animate-spin-slow" viewBox="0 0 100 100">
            <path
              id="sealCirclePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="fill-doc-brass font-mono font-extrabold tracking-widest text-[8.5px] uppercase">
              <textPath href="#sealCirclePath" startOffset="0%">
                PAKISTAN INFO HUB • INDEPENDENTLY VERIFIED 2026 •
              </textPath>
            </text>
          </svg>

          {/* Central Emblem Badge */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center p-1">
            <ShieldCheck className="w-5 h-5 text-doc-brass stroke-[2.5]" />
            <span className="text-[7.5px] font-mono font-bold text-doc-paper dark:text-slate-200 tracking-tighter uppercase leading-none mt-0.5">
              VERIFIED
            </span>
          </div>

          {/* Shimmer Highlight Glare Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </div>

      {/* Ribbons hanging below seal */}
      <div className="absolute -bottom-2 flex gap-1 pointer-events-none z-0 opacity-90">
        <div className="w-2.5 h-4 bg-[#A02334] transform -rotate-12 rounded-b-xs shadow-sm" />
        <div className="w-2.5 h-4 bg-[#B08D57] transform rotate-12 rounded-b-xs shadow-sm" />
      </div>
    </div>
  );
};
