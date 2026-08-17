import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NADRA FRC Guide 2026: Apply Online for Family Registration Certificate',
  description: 'Complete guide to apply for NADRA Family Registration Certificate (FRC) online or at centers. Learn about FRC by Birth vs Marriage, fee PKR 1,000, and embassy visa uses.',
  openGraph: {
    title: 'NADRA FRC Guide 2026: Apply Online for Family Registration Certificate',
    description: 'Complete guide to apply for NADRA Family Registration Certificate (FRC) online or at centers. Learn about FRC by Birth vs Marriage, fee PKR 1,000, and embassy visa uses.',
    url: 'https://pakistaninfohub.com/nadra/family-registration-certificate',
  },
};

export default function Page() {
  const article = ARTICLES['family-registration-certificate'];
  return <ArticleLayout article={article} />;
}
