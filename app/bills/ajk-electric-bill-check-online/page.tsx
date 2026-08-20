import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AJK Electricity Bill Check Online 2026 – Azad Kashmir Duplicate Bill | Pakistan Info Hub",
  description: "AJK electricity bill check online 2026. Download duplicate electricity bill for Muzaffarabad, Mirpur, Rawalakot, Kotli using consumer account number.",
  openGraph: {
    title: "AJK Electricity Bill Check Online 2026 – Azad Kashmir Duplicate Bill | Pakistan Info Hub",
    description: "AJK electricity bill check online 2026. Download duplicate electricity bill for Muzaffarabad, Mirpur, Rawalakot, Kotli using consumer account number.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/ajk-electric-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['ajk-electric-bill-check-online'];
  return <ArticleLayout article={article} />;
}
