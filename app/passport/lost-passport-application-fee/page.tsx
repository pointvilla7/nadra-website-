import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lost Pakistani Passport Replacement Guide & Penalty Fees 2026",
  description: "How to replace a lost or stolen Pakistani passport. Police report (FIR) requirements, 1st loss (double fee), 2nd loss (4x fee), and DGIP approval.",
  openGraph: {
    title: "Lost Pakistani Passport Replacement Guide & Penalty Fees 2026",
    description: "How to replace a lost or stolen Pakistani passport. Police report (FIR) requirements, 1st loss (double fee), 2nd loss (4x fee), and DGIP approval.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/passport/lost-passport-application-fee',
  },
};

export default function Page() {
  const article = ARTICLES['lost-passport-application-fee'];
  return <ArticleLayout article={article} />;
}

