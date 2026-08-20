import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "K-Electric Duplicate Bill Online Check 2026 – Download KE Bill PDF | Pakistan Info Hub",
  description: "Download K-Electric duplicate bill online 2026 for Karachi. Enter 13-digit account number or 8-digit consumer number at ke.com.pk to view charges and pay online.",
  openGraph: {
    title: "K-Electric Duplicate Bill Online Check 2026 – Download KE Bill PDF | Pakistan Info Hub",
    description: "Download K-Electric duplicate bill online 2026 for Karachi. Enter 13-digit account number or 8-digit consumer number at ke.com.pk to view charges and pay online.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/k-electric-duplicate-bill',
  },
};

export default function Page() {
  const article = ARTICLES['k-electric-duplicate-bill'];
  return <ArticleLayout article={article} />;
}
