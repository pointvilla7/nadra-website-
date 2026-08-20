import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NADRA CNIC Death & Cancellation Certificate Guide 2026',
  description: 'How to apply for NADRA CNIC Cancellation Certificate after death. Document checklist, Union Council death certificate, NRC fee, and family tree update.',
  openGraph: {
    title: 'NADRA CNIC Death & Cancellation Certificate Guide 2026',
    description: 'How to apply for NADRA CNIC Cancellation Certificate after death. Document checklist, Union Council death certificate, NRC fee, and family tree update.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/nadra/death-cancellation-certificate',
  },
};

export default function Page() {
  const article = ARTICLES['death-cancellation-certificate'];
  return <ArticleLayout article={article} />;
}

