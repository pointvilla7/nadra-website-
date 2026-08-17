import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Overseas Pakistani Online Passport Renewal Guide 2026 (OPMS)',
  description: 'Renew your Pakistani passport online from UAE, Saudi Arabia, UK, USA, Canada via onlinemrp.dgip.gov.pk. Fees in USD/AED, delivery options, and NICOP.',
  openGraph: {
    title: 'Overseas Pakistani Online Passport Renewal Guide 2026 (OPMS)',
    description: 'Renew your Pakistani passport online from UAE, Saudi Arabia, UK, USA, Canada via onlinemrp.dgip.gov.pk. Fees in USD/AED, delivery options, and NICOP.',
    url: 'https://pakistaninfohub.com/passport/overseas-pakistani-passport-renewal',
  },
};

export default function Page() {
  const article = ARTICLES['overseas-pakistani-passport-renewal'];
  return <ArticleLayout article={article} />;
}
