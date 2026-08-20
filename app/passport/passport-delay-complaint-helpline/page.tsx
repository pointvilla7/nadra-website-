import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Urgent Passport Delay Complaint & DGIP Helpline Guide 2026',
  description: 'What to do if your urgent or normal Pakistani passport is delayed. DGIP Citizen Portal complaint, UAN helpline (051-111-344-777), and passport status check.',
  openGraph: {
    title: 'Urgent Passport Delay Complaint & DGIP Helpline Guide 2026',
    description: 'What to do if your urgent or normal Pakistani passport is delayed. DGIP Citizen Portal complaint, UAN helpline (051-111-344-777), and passport status check.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/passport/passport-delay-complaint-helpline',
  },
};

export default function Page() {
  const article = ARTICLES['passport-delay-complaint-helpline'];
  return <ArticleLayout article={article} />;
}

