import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online FIR Registration Punjab Police 1787 & E-Tag System',
  description: 'Register crime reports and lost document complaints online with Punjab Police via 1787 IG Helpline, Police Khidmat Markaz (PKM), or the official Mobile App.',
  openGraph: {
    title: 'Online FIR Registration Punjab Police 1787 & E-Tag System',
    description: 'Register crime reports and lost document complaints online with Punjab Police via 1787 IG Helpline, Police Khidmat Markaz (PKM), or the official Mobile App.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/legal/online-fir-registration-punjab-police',
  },
};

export default function Page() {
  const article = ARTICLES['online-fir-registration-punjab-police'];
  return <ArticleLayout article={article} />;
}
