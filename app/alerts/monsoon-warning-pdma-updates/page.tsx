import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Monsoon Warning & Rain Emergency Advisory (PMD & PDMA 2026)',
  description: 'Live weather radar and monsoon rain alerts for Lahore, Karachi, Rawalpindi, Peshawar, and Islamabad. Urban flooding warnings, lightning safety, and WASA dewatering stations.',
  openGraph: {
    title: 'Monsoon Warning & Rain Emergency Advisory (PMD & PDMA 2026)',
    description: 'Live weather radar and monsoon rain alerts for Lahore, Karachi, Rawalpindi, Peshawar, and Islamabad. Urban flooding warnings, lightning safety, and WASA dewatering stations.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/alerts/monsoon-warning-pdma-updates',
  },
};

export default function Page() {
  const article = ARTICLES['monsoon-warning-pdma-updates'];
  return <ArticleLayout article={article} />;
}
