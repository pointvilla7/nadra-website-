import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "PESCO Bill Check Online 2026: Peshawar Electric Duplicate Bill PDF",
  description: "Check and download your PESCO electricity duplicate bill online using 14-digit Reference Number. Covers Peshawar, Mardan, Swat, Abbottabad, Bannu, and D.I. Khan.",
  openGraph: {
    title: "PESCO Bill Check Online 2026: Peshawar Electric Duplicate Bill PDF",
    description: "Check and download your PESCO electricity duplicate bill online using 14-digit Reference Number. Covers Peshawar, Mardan, Swat, Abbottabad, Bannu, and D.I. Khan.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/pesco-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['pesco-bill-check-online'];
  return <ArticleLayout article={article} />;
}
