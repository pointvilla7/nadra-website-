import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SPSC Jobs 2026: Sindh Public Service Commission Online Apply',
  description: 'SPSC upcoming job advertisements 2026, online portal at spsc.gov.pk, challan fee (PKR 500), CCE Combined Competitive Exam, and roll number slip.',
  openGraph: {
    title: 'SPSC Jobs 2026: Sindh Public Service Commission Online Apply',
    description: 'SPSC upcoming job advertisements 2026, online portal at spsc.gov.pk, challan fee (PKR 500), CCE Combined Competitive Exam, and roll number slip.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/jobs/spsc-jobs-apply-online',
  },
};

export default function Page() {
  const article = ARTICLES['spsc-jobs-apply-online'];
  return <ArticleLayout article={article} />;
}

