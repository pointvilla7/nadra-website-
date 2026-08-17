import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NADRA Executive Registration Center (NRC) Timings & Fast Track Fees',
  description: 'Find NADRA Executive Center locations in Lahore, Karachi, Islamabad, Rawalpindi & Peshawar. Saturday timings, executive CNIC fees, and VIP lounge processing.',
  openGraph: {
    title: 'NADRA Executive Registration Center (NRC) Timings & Fast Track Fees',
    description: 'Find NADRA Executive Center locations in Lahore, Karachi, Islamabad, Rawalpindi & Peshawar. Saturday timings, executive CNIC fees, and VIP lounge processing.',
    url: 'https://pakistaninfohub.com/nadra/executive-center-timings-fees',
  },
};

export default function Page() {
  const article = ARTICLES['executive-center-timings-fees'];
  return <ArticleLayout article={article} />;
}
