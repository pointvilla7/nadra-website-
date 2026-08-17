'use client';

import React from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';

interface AdPlacementZoneProps {
  slotId?: string;
  format?: 'horizontal' | 'rectangle' | 'banner';
}

export const AdPlacementZone: React.FC<AdPlacementZoneProps> = ({
  slotId = 'default-ad-slot',
  format = 'horizontal',
}) => {
  const { t } = useLanguage();
  const isDev = process.env.NODE_ENV === 'development';
  const pubId = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID;

  // In production without AdSense configuration, render CLS-shielded reserved space without placeholder text
  if (!isDev && !pubId) {
    return (
      <aside
        className="my-6 no-print w-full"
        aria-label="Advertisement"
        style={{ contain: 'layout size', containIntrinsicSize: format === 'rectangle' ? '300px 250px' : '728px 90px' }}
      >
        <div
          id={`ad-slot-${slotId}`}
          className={`w-full mx-auto rounded-2xl ${
            format === 'rectangle'
              ? 'min-h-[250px] max-w-[336px] aspect-[300/250]'
              : 'min-h-[90px] max-w-[728px] aspect-[728/90]'
          }`}
        />
      </aside>
    );
  }

  return (
    <aside
      className="my-6 no-print w-full"
      aria-label="Advertisement"
      style={{ contain: 'layout size', containIntrinsicSize: format === 'rectangle' ? '300px 250px' : '728px 90px' }}
    >
      <div className="w-full mx-auto rounded-2xl doc-card border border-doc-brass/30 p-3 sm:p-4 text-center space-y-2 bg-slate-100/60 dark:bg-slate-900/60">
        <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
          <span>{t('SPONSORED ADVERTISEMENT ZONE', 'اشتہاری جگہ')}</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            IAB RESERVED
          </span>
        </div>

        {/* Ad Box Container with Explicit Dimension Reservation for Zero CLS */}
        <div
          id={`ad-slot-${slotId}`}
          className={`w-full mx-auto rounded-xl border border-dashed border-doc-brass/40 flex items-center justify-center text-xs text-slate-500 font-sans font-medium transition-all ${
            format === 'rectangle'
              ? 'min-h-[250px] max-w-[336px] aspect-[300/250]'
              : 'min-h-[90px] max-w-[728px] aspect-[728/90]'
          }`}
        >
          <span>
            {t(
              'Sponsor Container (CLS-Shielded Standard Ad Unit)',
              'باوقار ڈسپلے فریم (زیرو ڈسٹورشن)'
            )}
          </span>
        </div>
      </div>
    </aside>
  );
};
