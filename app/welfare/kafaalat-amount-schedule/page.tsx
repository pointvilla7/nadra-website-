'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function KafaalatSchedulePage() {
  const article = ARTICLES['kafaalat-amount-schedule'];
  return <ArticleLayout article={article} />;
}
