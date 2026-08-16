'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function NadraCardFeePage() {
  const article = ARTICLES['nadra-card-fee'];
  return <ArticleLayout article={article} />;
}
