'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function TokenTaxPage() {
  const article = ARTICLES['token-tax-check'];
  return <ArticleLayout article={article} />;
}
