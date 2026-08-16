'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function PMYouthLoanPage() {
  const article = ARTICLES['pm-youth-loan-scheme'];
  return <ArticleLayout article={article} />;
}
