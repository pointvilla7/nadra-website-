'use client';

import React, { useState, useEffect } from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { getGuideRating, submitGuideRating, StarRatingData } from '@/lib/utils/feedbackStore';

interface ArticleRatingWidgetProps {
  slug: string;
}

export const ArticleRatingWidget: React.FC<ArticleRatingWidgetProps> = ({ slug }) => {
  const { t } = useLanguage();
  const [ratingData, setRatingData] = useState<StarRatingData>({ average: 4.8, totalVotes: 120 });
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const current = getGuideRating(slug);
    setRatingData(current);
    if (current.userVoted) {
      setHasVoted(true);
    }
  }, [slug]);

  const handleRate = (star: number) => {
    if (hasVoted) return;
    const updated = submitGuideRating(slug, star);
    setRatingData(updated);
    setHasVoted(true);
  };

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#FAF9F6] dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs shadow-2xs">
      {/* 5 Interactive Stars */}
      <div className="flex items-center gap-0.5" onMouseLeave={() => setHoverRating(null)}>
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = hoverRating ? star <= hoverRating : star <= Math.round(ratingData.average);
          return (
            <button
              key={star}
              type="button"
              disabled={hasVoted}
              onClick={() => handleRate(star)}
              onMouseEnter={() => !hasVoted && setHoverRating(star)}
              className={`p-0.5 rounded transition-transform ${
                hasVoted ? 'cursor-default' : 'hover:scale-125 cursor-pointer'
              }`}
              aria-label={`Rate ${star} out of 5 stars`}
            >
              <Star
                className={`w-3.5 h-3.5 ${
                  isFilled ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-slate-600'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Average & Total Ratings Text */}
      <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
        {ratingData.average} ★
      </span>

      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-sans border-l border-slate-200 dark:border-slate-800 pl-2">
        {hasVoted ? (
          <span className="text-emerald-600 dark:text-emerald-400 font-bold inline-flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            {t('Rated!', 'شکریہ!')}
          </span>
        ) : (
          <span>({ratingData.totalVotes} {t('ratings', 'آراء')})</span>
        )}
      </span>
    </div>
  );
};
