'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function LESCOBillPage() {
  const article = ARTICLES['lesco-bill-check-online'];
  return <ArticleLayout article={article} />;
}
