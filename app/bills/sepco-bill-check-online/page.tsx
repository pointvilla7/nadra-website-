import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SEPCO Bill Check Online 2026: Sukkur Electric Duplicate Bill PDF",
  description: "Check and download your SEPCO duplicate electricity bill online using 14-digit Reference Number. Covers Sukkur, Larkana, Shikarpur, Ghotki, Khairpur, and Jacobabad.",
  openGraph: {
    title: "SEPCO Bill Check Online 2026: Sukkur Electric Duplicate Bill PDF",
    description: "Check and download your SEPCO duplicate electricity bill online using 14-digit Reference Number. Covers Sukkur, Larkana, Shikarpur, Ghotki, Khairpur, and Jacobabad.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/sepco-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['sepco-bill-check-online'];
  return <ArticleLayout article={article} />;
}
