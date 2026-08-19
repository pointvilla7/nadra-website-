import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LESCO Bill Online Check 2026 – Download Duplicate Electricity Bill PDF | Pakistan Info Hub',
  description: 'Perform LESCO bill online check 2026. Download duplicate electricity bill for Lahore, Kasur, Okara, Sheikhupura using 14-digit reference number or 10-digit customer ID.',
  openGraph: {
    title: 'LESCO Bill Online Check 2026 – Download Duplicate Electricity Bill PDF | Pakistan Info Hub',
    description: 'Perform LESCO bill online check 2026. Download duplicate electricity bill for Lahore, Kasur, Okara, Sheikhupura using 14-digit reference number or 10-digit customer ID.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/bills/lesco-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['lesco-bill-check-online'];
  return <ArticleLayout article={article} />;
}
