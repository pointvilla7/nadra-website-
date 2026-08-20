import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "HESCO Bill Check Online 2026: Hyderabad Electric Duplicate Bill PDF",
  description: "Check and download your HESCO electricity bill online with 14-digit Reference Number. Covers Hyderabad, Mirpurkhas, Jamshoro, Matiari, Thatta, and Badin.",
  openGraph: {
    title: "HESCO Bill Check Online 2026: Hyderabad Electric Duplicate Bill PDF",
    description: "Check and download your HESCO electricity bill online with 14-digit Reference Number. Covers Hyderabad, Mirpurkhas, Jamshoro, Matiari, Thatta, and Badin.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/hesco-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['hesco-bill-check-online'];
  return <ArticleLayout article={article} />;
}
