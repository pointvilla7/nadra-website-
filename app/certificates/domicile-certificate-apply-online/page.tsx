import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Domicile Certificate Apply Online – Punjab, Sindh, KPK & ICT Guide',
  description: 'Apply for a computerized Domicile Certificate online in Pakistan for government jobs, university admissions, and CSS/PPSC tests. Requirements, fees, and processing time.',
  openGraph: {
    title: 'Domicile Certificate Apply Online – Punjab, Sindh, KPK & ICT Guide',
    description: 'Apply for a computerized Domicile Certificate online in Pakistan for government jobs, university admissions, and CSS/PPSC tests. Requirements, fees, and processing time.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/certificates/domicile-certificate-apply-online',
  },
};

export default function Page() {
  const article = ARTICLES['domicile-certificate-apply-online'];
  return <ArticleLayout article={article} />;
}
