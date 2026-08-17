import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FPSC Online Apply Guide 2026: Treasury Challan 32-A & Test Syllabus',
  description: 'How to apply online for FPSC federal jobs at fpsc.gov.pk. Download Treasury Challan Form 32-A, fee rates (BPS 16-17 PKR 300), and admission certificate.',
  openGraph: {
    title: 'FPSC Online Apply Guide 2026: Treasury Challan 32-A & Test Syllabus',
    description: 'How to apply online for FPSC federal jobs at fpsc.gov.pk. Download Treasury Challan Form 32-A, fee rates (BPS 16-17 PKR 300), and admission certificate.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/jobs/fpsc-online-apply-procedure',
  },
};

export default function Page() {
  const article = ARTICLES['fpsc-online-apply-procedure'];
  return <ArticleLayout article={article} />;
}

