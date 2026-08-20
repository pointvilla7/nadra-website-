import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "QESCO Bill Check Online 2026: Quetta Electric Duplicate Bill PDF",
  description: "Check and download your QESCO electricity bill online using 14-digit Reference Number. Covers Quetta, Gwadar, Khuzdar, Chaman, Sibi, Loralai, and all Balochistan.",
  openGraph: {
    title: "QESCO Bill Check Online 2026: Quetta Electric Duplicate Bill PDF",
    description: "Check and download your QESCO electricity bill online using 14-digit Reference Number. Covers Quetta, Gwadar, Khuzdar, Chaman, Sibi, Loralai, and all Balochistan.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/qesco-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['qesco-bill-check-online'];
  return <ArticleLayout article={article} />;
}
