import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GEPCO Bill Online Check 2026 – Gujranwala Division Duplicate Bill | Pakistan Info Hub",
  description: "GEPCO bill online check 2026. Check duplicate electricity bill for Gujranwala, Sialkot, Gujrat, Hafizabad, Narowal, Mandi Bahauddin by 14-digit reference number.",
  openGraph: {
    title: "GEPCO Bill Online Check 2026 – Gujranwala Division Duplicate Bill | Pakistan Info Hub",
    description: "GEPCO bill online check 2026. Check duplicate electricity bill for Gujranwala, Sialkot, Gujrat, Hafizabad, Narowal, Mandi Bahauddin by 14-digit reference number.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/gepco-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['gepco-bill-check-online'];
  return <ArticleLayout article={article} />;
}
