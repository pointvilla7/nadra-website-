import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "WAPDA Complaint Numbers & Helplines 2026 (LESCO, MEPCO, IESCO)",
  description: "Official electricity complaint helpline numbers for all DISCOs in Pakistan: 118 central emergency line, LESCO, FESCO, GEPCO, IESCO, MEPCO, PESCO, QESCO, HESCO.",
  openGraph: {
    title: "WAPDA Complaint Numbers & Helplines 2026 (LESCO, MEPCO, IESCO)",
    description: "Official electricity complaint helpline numbers for all DISCOs in Pakistan: 118 central emergency line, LESCO, FESCO, GEPCO, IESCO, MEPCO, PESCO, QESCO, HESCO.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/bills/wapda-bill-complaint-number',
  },
};

export default function Page() {
  const article = ARTICLES['wapda-bill-complaint-number'];
  return <ArticleLayout article={article} />;
}

