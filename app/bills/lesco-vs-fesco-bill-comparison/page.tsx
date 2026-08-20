import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "LESCO vs FESCO Bill Check: Differences, Unit Rates & Slabs Explained (2026)",
  description: "Compare LESCO vs FESCO electricity bill check. Understand jurisdiction differences (Lahore vs Faisalabad), reference number formats, NEPRA tariff slabs & complaint helplines.",
  openGraph: {
    title: "LESCO vs FESCO Bill Check: Differences, Unit Rates & Slabs Explained (2026)",
    description: "Compare LESCO vs FESCO electricity bill check. Understand jurisdiction differences (Lahore vs Faisalabad), reference number formats, NEPRA tariff slabs & complaint helplines.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/lesco-vs-fesco-bill-comparison',
  },
};

export default function Page() {
  const article = ARTICLES['lesco-vs-fesco-bill-comparison'];
  return <ArticleLayout article={article} />;
}
