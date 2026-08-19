import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hajj Balloting Result Check Online 2026 by CNIC & Bank Reference',
  description: 'Check Government Hajj balloting results 2026 online by 13-digit CNIC or bank tracking reference number. View successful applicant lists and waiting queue.',
  openGraph: {
    title: 'Hajj Balloting Result Check Online 2026 by CNIC & Bank Reference',
    description: 'Check Government Hajj balloting results 2026 online by 13-digit CNIC or bank tracking reference number. View successful applicant lists and waiting queue.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/hajj-umrah/hajj-balloting-result-check-online',
  },
};

export default function Page() {
  const article = ARTICLES['hajj-balloting-result-check-online'];
  return <ArticleLayout article={article} />;
}
