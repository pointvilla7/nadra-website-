import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "MEPCO Bill Online Check 2026 – South Punjab Duplicate Electricity Bill | Pakistan Info Hub",
  description: "MEPCO bill online check 2026. Check and print duplicate electricity bill for Multan, Bahawalpur, D.G. Khan, Rahim Yar Khan, Sahiwal using 14-digit reference number.",
  openGraph: {
    title: "MEPCO Bill Online Check 2026 – South Punjab Duplicate Electricity Bill | Pakistan Info Hub",
    description: "MEPCO bill online check 2026. Check and print duplicate electricity bill for Multan, Bahawalpur, D.G. Khan, Rahim Yar Khan, Sahiwal using 14-digit reference number.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/mepco-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['mepco-bill-check-online'];
  return <ArticleLayout article={article} />;
}

