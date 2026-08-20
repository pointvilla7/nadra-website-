import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pakistani Child & Minor Passport Guide 2026 (Under 15 Years)',
  description: 'Apply for minor passport in Pakistan for newborn babies & children under 15. Mandatory B-Form/CRC, father & mother CNIC, 5-year maximum validity rule.',
  openGraph: {
    title: 'Pakistani Child & Minor Passport Guide 2026 (Under 15 Years)',
    description: 'Apply for minor passport in Pakistan for newborn babies & children under 15. Mandatory B-Form/CRC, father & mother CNIC, 5-year maximum validity rule.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/passport/child-minor-passport-guide',
  },
};

export default function Page() {
  const article = ARTICLES['child-minor-passport-guide'];
  return <ArticleLayout article={article} />;
}

