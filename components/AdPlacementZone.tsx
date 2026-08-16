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

  return (
    <aside className="my-6 no-print" aria-label="Advertisement">
      <div className="w-full rounded-2xl doc-card border border-doc-brass/30 p-4 text-center space-y-2 bg-slate-100/60 dark:bg-slate-900/60">
        <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
          <span>{t('SPONSORED ADVERTISEMENT ZONE', 'اشتہاری جگہ')}</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            GOOGLE ADSENSE RESERVED
          </span>
        </div>

        {/* Ad Box Container with Explicit Height Reservation for Zero CLS */}
        <div
          id={`ad-slot-${slotId}`}
          className={`w-full rounded-xl border border-dashed border-doc-brass/40 flex items-center justify-center text-xs text-slate-500 font-sans font-medium transition-all ${
            format === 'rectangle'
              ? 'h-64 md:h-72 min-h-[250px]'
              : 'h-28 md:h-36 min-h-[110px]'
          }`}
        >
          <span>
            {t(
              'Tasteful Sponsor Container (CLS-Shielded Responsive Ad Unit)',
              'باوقار ڈسپلے فریم (زیرو ڈسٹورشن)'
            )}
          </span>
        </div>
      </div>
    </aside>
  );
};
