import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NICOP Fee 2026 for USA, UK, Saudi Arabia & UAE (Zone A & B)',
  description: 'Official NADRA NICOP fee chart 2026 for Zone A and Zone B countries. Compare normal, urgent, and executive rates in USD, GBP, SAR, AED, and PKR.',
  openGraph: {
    title: 'NICOP Fee 2026 for USA, UK, Saudi Arabia & UAE (Zone A & B)',
    description: 'Official NADRA NICOP fee chart 2026 for Zone A and Zone B countries. Compare normal, urgent, and executive rates in USD, GBP, SAR, AED, and PKR.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/overseas/nicop-fee-usa-uk-saudi-uae-2026',
  },
};

export default function Page() {
  const article = ARTICLES['nicop-fee-usa-uk-saudi-uae-2026'];
  return <ArticleLayout article={article} />;
}
