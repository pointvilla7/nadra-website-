import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Punjab Police Khidmat Markaz (PKM) – 14 Public Citizen Services",
  description: "Overview of 14 public services offered at Police Khidmat Markaz: character certificates, learner driving licenses, tenant registration, employee verification, and crime reports.",
  openGraph: {
    title: "Punjab Police Khidmat Markaz (PKM) – 14 Public Citizen Services",
    description: "Overview of 14 public services offered at Police Khidmat Markaz: character certificates, learner driving licenses, tenant registration, employee verification, and crime reports.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/legal/punjab-khidmat-markaz-police-services',
  },
};

export default function Page() {
  const article = ARTICLES['punjab-khidmat-markaz-police-services'];
  return <ArticleLayout article={article} />;
}
