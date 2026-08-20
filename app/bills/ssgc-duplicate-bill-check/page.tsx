import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SSGC Duplicate Bill Check 2026 – Karachi, Sindh & Balochistan Gas Bill | Pakistan Info Hub",
  description: "Check SSGC duplicate bill online 2026. View and print Sui Southern gas bill for Karachi, Hyderabad, Quetta, Sukkur using 10-digit customer number.",
  openGraph: {
    title: "SSGC Duplicate Bill Check 2026 – Karachi, Sindh & Balochistan Gas Bill | Pakistan Info Hub",
    description: "Check SSGC duplicate bill online 2026. View and print Sui Southern gas bill for Karachi, Hyderabad, Quetta, Sukkur using 10-digit customer number.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/ssgc-duplicate-bill-check',
  },
};

export default function Page() {
  const article = ARTICLES['ssgc-duplicate-bill-check'];
  return <ArticleLayout article={article} />;
}

