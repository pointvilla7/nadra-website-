import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'M-Tag Motorway Registration Guide 2026: One Network & Toll Recharge',
  description: 'How to get mandatory M-Tag sticker for Motorway travel (M-1, M-2, M-3, M-4, M-5). Toll plaza booth locations, CNIC registration, and One Network app recharge.',
  openGraph: {
    title: 'M-Tag Motorway Registration Guide 2026: One Network & Toll Recharge',
    description: 'How to get mandatory M-Tag sticker for Motorway travel (M-1, M-2, M-3, M-4, M-5). Toll plaza booth locations, CNIC registration, and One Network app recharge.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/traffic/m-tag-motorway-registration-one-network',
  },
};

export default function Page() {
  const article = ARTICLES['m-tag-motorway-registration-one-network'];
  return <ArticleLayout article={article} />;
}

