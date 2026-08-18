'use client';

import React from 'react';
import { Sparkles, Calculator, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

interface InteractiveToolBadgeProps {
  labelEn?: string;
  labelUr?: string;
  variant?: 'gold' | 'seal' | 'navy';
  className?: string;
}

export const InteractiveToolBadge: React.FC<InteractiveToolBadgeProps> = ({
  labelEn = 'INTERACTIVE TOOL',
  labelUr = 'انٹرایکٹو ٹول',
  variant = 'gold',
  className = '',
}) => {
  const { t } = useLanguage();

  const variantStyles = {
    gold: 'bg-doc-brass/15 text-amber-800 dark:text-amber-300 border-doc-brass/40 shadow-xs',
    seal: 'bg-doc-seal/10 text-doc-seal dark:text-red-300 border-doc-seal/30 shadow-xs',
    navy: 'bg-doc-ink/10 text-doc-ink dark:text-slate-200 border-doc-ink/30 dark:border-slate-700 shadow-xs',
  };

  return (
    <span
      role="status"
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-mono font-extrabold uppercase tracking-wider transition-colors select-none ${variantStyles[variant]} ${className}`}
    >
      <Sparkles className="w-3.5 h-3.5 text-doc-brass animate-pulse motion-reduce:animate-none shrink-0" />
      <span>{t(labelEn, labelUr)}</span>
    </span>
  );
};
