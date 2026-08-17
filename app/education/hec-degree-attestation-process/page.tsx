import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HEC Degree Attestation Process Guide 2026: Fee & E-Services',
  description: 'Step-by-step HEC degree attestation guide. Apply online at eservices.hec.gov.pk, courier vs urgent walk-in mode, fee per original (PKR 1,000) & photocopy (PKR 700).',
  openGraph: {
    title: 'HEC Degree Attestation Process Guide 2026: Fee & E-Services',
    description: 'Step-by-step HEC degree attestation guide. Apply online at eservices.hec.gov.pk, courier vs urgent walk-in mode, fee per original (PKR 1,000) & photocopy (PKR 700).',
    url: 'https://pakistaninfohub.com/education/hec-degree-attestation-process',
  },
};

export default function Page() {
  const article = ARTICLES['hec-degree-attestation-process'];
  return <ArticleLayout article={article} />;
}
