import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IESCO Bill Check Online 2026: Islamabad Electricity Duplicate Bill',
  description: 'Check and print IESCO duplicate bill online by 14-digit reference number. Islamabad, Rawalpindi, Attock, Chakwal, and Jhelum electricity bill check.',
  openGraph: {
    title: 'IESCO Bill Check Online 2026: Islamabad Electricity Duplicate Bill',
    description: 'Check and print IESCO duplicate bill online by 14-digit reference number. Islamabad, Rawalpindi, Attock, Chakwal, and Jhelum electricity bill check.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/bills/iesco-bill-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['iesco-bill-check-online'];
  return <ArticleLayout article={article} />;
}

