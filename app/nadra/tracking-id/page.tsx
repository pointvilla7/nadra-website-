import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NADRA CNIC Tracking Online 2026: Check Status via SMS 8400 & Website',
  description: 'Track your NADRA CNIC, NICOP, or Family Certificate application status online using your 12-digit Tracking ID or by sending an SMS to 8400.',
  openGraph: {
    title: 'NADRA CNIC Tracking Online 2026: Check Status via SMS 8400 & Website',
    description: 'Track your NADRA CNIC, NICOP, or Family Certificate application status online using your 12-digit Tracking ID or by sending an SMS to 8400.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/nadra/tracking-id',
  },
};

export default function Page() {
  const article = ARTICLES['tracking-id'];
  return <ArticleLayout article={article} />;
}

