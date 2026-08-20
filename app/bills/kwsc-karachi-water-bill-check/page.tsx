import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "KWSC Karachi Water Bill Check Online 2026 – KWSB Duplicate Bill | Pakistan Info Hub",
  description: "KWSC Karachi water bill check online 2026. Check and download Karachi Water & Sewerage Corporation duplicate bill by 10-digit consumer account number.",
  openGraph: {
    title: "KWSC Karachi Water Bill Check Online 2026 – KWSB Duplicate Bill | Pakistan Info Hub",
    description: "KWSC Karachi water bill check online 2026. Check and download Karachi Water & Sewerage Corporation duplicate bill by 10-digit consumer account number.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/kwsc-karachi-water-bill-check',
  },
};

export default function Page() {
  const article = ARTICLES['kwsc-karachi-water-bill-check'];
  return <ArticleLayout article={article} />;
}
