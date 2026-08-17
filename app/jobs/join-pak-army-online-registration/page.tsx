import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join Pak Army Online Registration 2026: PMA Long Course & LCC',
  description: 'How to register online for Join Pak Army 2026. PMA Long Course, Lady Cadet Course (LCC), Technical Cadet Course, eligibility, physical test criteria, and AS&RC.',
  openGraph: {
    title: 'Join Pak Army Online Registration 2026: PMA Long Course & LCC',
    description: 'How to register online for Join Pak Army 2026. PMA Long Course, Lady Cadet Course (LCC), Technical Cadet Course, eligibility, physical test criteria, and AS&RC.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/jobs/join-pak-army-online-registration',
  },
};

export default function Page() {
  const article = ARTICLES['join-pak-army-online-registration'];
  return <ArticleLayout article={article} />;
}

