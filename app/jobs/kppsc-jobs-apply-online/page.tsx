import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KPPSC Jobs 2026: KPK Public Service Commission Online Apply',
  description: 'KPPSC jobs advertisement 2026 for Khyber Pakhtunkhwa. Online application portal at kppsc.gov.pk, Easypaisa/JazzCash fee deposit (PKR 500), and test slip.',
  openGraph: {
    title: 'KPPSC Jobs 2026: KPK Public Service Commission Online Apply',
    description: 'KPPSC jobs advertisement 2026 for Khyber Pakhtunkhwa. Online application portal at kppsc.gov.pk, Easypaisa/JazzCash fee deposit (PKR 500), and test slip.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/jobs/kppsc-jobs-apply-online',
  },
};

export default function Page() {
  const article = ARTICLES['kppsc-jobs-apply-online'];
  return <ArticleLayout article={article} />;
}

