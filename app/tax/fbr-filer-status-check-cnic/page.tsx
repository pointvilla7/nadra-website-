import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FBR Filer Status Check by CNIC 2026 – Active Taxpayer List (ATL)',
  description: 'Check FBR filer or non-filer status online 2026 by 13-digit CNIC or SMS 9966. Verify Active Taxpayer List (ATL) status to avoid 100% withholding tax penalty.',
  openGraph: {
    title: 'FBR Filer Status Check by CNIC 2026 – Active Taxpayer List (ATL)',
    description: 'Check FBR filer or non-filer status online 2026 by 13-digit CNIC or SMS 9966. Verify Active Taxpayer List (ATL) status to avoid 100% withholding tax penalty.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/tax/fbr-filer-status-check-cnic',
  },
};

export default function Page() {
  const article = ARTICLES['fbr-filer-status-check-cnic'];
  return <ArticleLayout article={article} />;
}
