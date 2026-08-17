'use client';

import React from 'react';

/**
 * SkeletonBlock — Base animated skeleton shimmer building block.
 * Uses doc-design-system muted tones, not generic grey.
 */
export const SkeletonBlock: React.FC<{
  className?: string;
  rounded?: string;
}> = ({ className = '', rounded = 'rounded-lg' }) => (
  <div
    className={`${rounded} ${className} bg-doc-brass/10 dark:bg-slate-700/40 animate-pulse`}
    aria-hidden="true"
  />
);

/**
 * SkeletonText — Inline text-width shimmer line.
 */
export const SkeletonText: React.FC<{
  width?: string;
  height?: string;
  className?: string;
}> = ({ width = 'w-full', height = 'h-4', className = '' }) => (
  <SkeletonBlock className={`${width} ${height} ${className}`} />
);

/**
 * SkeletonArticleCard — Skeleton for article preview cards (homepage trending, category grids).
 */
export const SkeletonArticleCard: React.FC = () => (
  <div className="doc-card rounded-2xl p-6 border border-doc-brass/20 flex flex-col gap-4">
    {/* Badge + verified row */}
    <div className="flex items-center justify-between">
      <SkeletonBlock className="w-20 h-5" rounded="rounded-full" />
      <SkeletonBlock className="w-16 h-5" rounded="rounded-full" />
    </div>
    {/* Title */}
    <div className="space-y-2">
      <SkeletonText width="w-full" height="h-5" />
      <SkeletonText width="w-4/5" height="h-5" />
    </div>
    {/* Body lines */}
    <div className="space-y-1.5">
      <SkeletonText width="w-full" height="h-3.5" />
      <SkeletonText width="w-full" height="h-3.5" />
      <SkeletonText width="w-3/4" height="h-3.5" />
    </div>
    {/* CTA row */}
    <div className="pt-3 mt-auto border-t border-doc-brass/20 flex items-center justify-between">
      <SkeletonText width="w-24" height="h-3.5" />
      <SkeletonText width="w-28" height="h-3.5" />
    </div>
  </div>
);

/**
 * SkeletonSearchResult — Skeleton for individual search result rows.
 */
export const SkeletonSearchResult: React.FC = () => (
  <div className="flex items-start gap-3 p-3 rounded-xl border border-doc-brass/10 bg-doc-paper/60 dark:bg-slate-800/40">
    <SkeletonBlock className="w-8 h-8 shrink-0" rounded="rounded-lg" />
    <div className="flex-1 space-y-2">
      <SkeletonText width="w-3/4" height="h-4" />
      <SkeletonText width="w-full" height="h-3" />
      <SkeletonText width="w-1/2" height="h-3" />
    </div>
  </div>
);

/**
 * SkeletonSearchResults — Full skeleton for search modal results area.
 */
export const SkeletonSearchResults: React.FC<{ count?: number }> = ({ count = 4 }) => (
  <div className="space-y-2 p-2" aria-label="Loading search results">
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonSearchResult key={i} />
    ))}
  </div>
);

/**
 * SkeletonTrackerWidget — Skeleton for tracking tool widgets (NADRA/Passport).
 */
export const SkeletonTrackerWidget: React.FC = () => (
  <div className="doc-card rounded-2xl p-6 border border-doc-brass/30 space-y-4">
    {/* Header */}
    <div className="flex items-center gap-3">
      <SkeletonBlock className="w-10 h-10" rounded="rounded-xl" />
      <div className="flex-1 space-y-2">
        <SkeletonText width="w-48" height="h-5" />
        <SkeletonText width="w-32" height="h-3.5" />
      </div>
    </div>
    {/* Input field */}
    <SkeletonBlock className="w-full h-12" rounded="rounded-xl" />
    {/* Button */}
    <SkeletonBlock className="w-full h-11" rounded="rounded-xl" />
    {/* Info row */}
    <div className="flex justify-between">
      <SkeletonText width="w-28" height="h-3" />
      <SkeletonText width="w-20" height="h-3" />
    </div>
  </div>
);

/**
 * SkeletonAiMessage — Skeleton for AI assistant chat message bubbles.
 */
export const SkeletonAiMessage: React.FC = () => (
  <div className="flex items-start gap-2.5">
    <SkeletonBlock className="w-8 h-8 shrink-0" rounded="rounded-full" />
    <div className="flex-1 space-y-2 max-w-xs">
      <SkeletonBlock className="w-full h-16" rounded="rounded-2xl rounded-tl-sm" />
    </div>
  </div>
);

/**
 * SkeletonCategoryCard — Skeleton for category grid cards.
 */
export const SkeletonCategoryCard: React.FC = () => (
  <div className="doc-card rounded-2xl p-6 border border-doc-brass/20 space-y-4">
    <div className="flex items-center justify-between">
      <SkeletonBlock className="w-12 h-12" rounded="rounded-xl" />
      <SkeletonBlock className="w-20 h-5" rounded="rounded-full" />
    </div>
    <div className="space-y-2">
      <SkeletonText width="w-40" height="h-6" />
      <SkeletonText width="w-32" height="h-3.5" />
    </div>
    <div className="space-y-1.5">
      <SkeletonText height="h-3" />
      <SkeletonText height="h-3" />
      <SkeletonText width="w-4/5" height="h-3" />
    </div>
    <div className="pt-3 border-t border-doc-brass/20 space-y-1.5">
      <SkeletonText width="w-20" height="h-3" />
      {[1, 2, 3].map((i) => (
        <SkeletonText key={i} height="h-3.5" />
      ))}
    </div>
    <SkeletonBlock className="w-full h-9" rounded="rounded-xl" />
  </div>
);
