'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function CNICGuidePage() {
  const article = ARTICLES['cnic-kaise-banaye'];
  return <ArticleLayout article={article} />;
}
