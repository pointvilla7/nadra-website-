import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "WASA Multan Bill Check Online 2026 – MDA Water & Sewerage Bill | Pakistan Info Hub",
  description: "WASA Multan bill check online 2026. Check duplicate water & sewerage bill for Multan city by consumer number. Online payment through ePay Punjab.",
  openGraph: {
    title: "WASA Multan Bill Check Online 2026 – MDA Water & Sewerage Bill | Pakistan Info Hub",
    description: "WASA Multan bill check online 2026. Check duplicate water & sewerage bill for Multan city by consumer number. Online payment through ePay Punjab.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/wasa-multan-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['wasa-multan-bill-check-online'];
  return <ArticleLayout article={article} />;
}
