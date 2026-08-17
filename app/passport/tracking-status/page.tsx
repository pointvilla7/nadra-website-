import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Passport Tracking Status Online 2026: Track via Token Number & SMS 9988',
  description: 'Track Pakistani passport application delivery status online or via SMS 9988. Enter 11-digit token number or tracking code to know printing and dispatch status.',
  openGraph: {
    title: 'Passport Tracking Status Online 2026: Track via Token Number & SMS 9988',
    description: 'Track Pakistani passport application delivery status online or via SMS 9988. Enter 11-digit token number or tracking code to know printing and dispatch status.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/passport/tracking-status',
  },
};

export default function Page() {
  const article = ARTICLES['tracking-status'];
  return <ArticleLayout article={article} />;
}

