'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function SuiGasBillPage() {
  const article = ARTICLES['sui-gas-bill-check-online'];
  return <ArticleLayout article={article} />;
}
