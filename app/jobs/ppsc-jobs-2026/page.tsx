import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PPSC Jobs 2026: Punjab Public Service Commission Online Apply',
  description: 'PPSC upcoming jobs advertisement 2026, online application form at ppsc.gop.pk, challan form fee (PKR 600), exam planner, and admission letters.',
  openGraph: {
    title: 'PPSC Jobs 2026: Punjab Public Service Commission Online Apply',
    description: 'PPSC upcoming jobs advertisement 2026, online application form at ppsc.gop.pk, challan form fee (PKR 600), exam planner, and admission letters.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/jobs/ppsc-jobs-2026',
  },
};

export default function Page() {
  const article = ARTICLES['ppsc-jobs-2026'];
  return <ArticleLayout article={article} />;
}

