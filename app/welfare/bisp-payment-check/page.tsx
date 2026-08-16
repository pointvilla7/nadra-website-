'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function BispPaymentCheckPage() {
  const article = ARTICLES['bisp-payment-check'];
  return <ArticleLayout article={article} />;
}
