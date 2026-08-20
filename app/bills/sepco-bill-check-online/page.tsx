import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SEPCO Bill Check Online 2026 – Sukkur & Upper Sindh Duplicate Electricity Bill | Pakistan Info Hub",
  description: "SEPCO bill check online 2026. Download duplicate electricity bill for Sukkur, Larkana, Khairpur, Ghotki, Shikarpur, Jacobabad using 14-digit reference number.",
  openGraph: {
    title: "SEPCO Bill Check Online 2026 – Sukkur & Upper Sindh Duplicate Electricity Bill | Pakistan Info Hub",
    description: "SEPCO bill check online 2026. Download duplicate electricity bill for Sukkur, Larkana, Khairpur, Ghotki, Shikarpur, Jacobabad using 14-digit reference number.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/sepco-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['sepco-bill-check-online'];
  return <ArticleLayout article={article} />;
}
