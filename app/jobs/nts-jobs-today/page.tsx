import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NTS Jobs Today 2026: National Testing Service Roll No Slip & Results',
  description: 'Latest NTS job announcements 2026, online application process, roll number slip download, answer key, and NAT/GAT test schedule.',
  openGraph: {
    title: 'NTS Jobs Today 2026: National Testing Service Roll No Slip & Results',
    description: 'Latest NTS job announcements 2026, online application process, roll number slip download, answer key, and NAT/GAT test schedule.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/jobs/nts-jobs-today',
  },
};

export default function Page() {
  const article = ARTICLES['nts-jobs-today'];
  return <ArticleLayout article={article} />;
}

