'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function KElectricBillPage() {
  const article = ARTICLES['k-electric-duplicate-bill'];
  return <ArticleLayout article={article} />;
}
