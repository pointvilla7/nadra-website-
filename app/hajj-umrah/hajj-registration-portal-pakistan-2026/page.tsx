import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hajj Registration Portal Pakistan 2026 – Government MORA Scheme',
  description: 'Register for Government Hajj Scheme 2026 online via Ministry of Religious Affairs (hajjinfo.org). Check Regular Scheme vs Sponsorship Scheme (US Dollars) quotas.',
  openGraph: {
    title: 'Hajj Registration Portal Pakistan 2026 – Government MORA Scheme',
    description: 'Register for Government Hajj Scheme 2026 online via Ministry of Religious Affairs (hajjinfo.org). Check Regular Scheme vs Sponsorship Scheme (US Dollars) quotas.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/hajj-umrah/hajj-registration-portal-pakistan-2026',
  },
};

export default function Page() {
  const article = ARTICLES['hajj-registration-portal-pakistan-2026'];
  return <ArticleLayout article={article} />;
}
