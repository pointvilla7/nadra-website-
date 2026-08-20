import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "QESCO Bill Online Check 2026 – Quetta & Balochistan Electricity Bill | Pakistan Info Hub",
  description: "Perform QESCO bill online check 2026 for Balochistan. Check duplicate bill for Quetta, Gwadar, Khuzdar, Turbat, Loralai, Sibi, Zhob, Chaman with 14-digit reference number.",
  openGraph: {
    title: "QESCO Bill Online Check 2026 – Quetta & Balochistan Electricity Bill | Pakistan Info Hub",
    description: "Perform QESCO bill online check 2026 for Balochistan. Check duplicate bill for Quetta, Gwadar, Khuzdar, Turbat, Loralai, Sibi, Zhob, Chaman with 14-digit reference number.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/qesco-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['qesco-bill-check-online'];
  return <ArticleLayout article={article} />;
}
