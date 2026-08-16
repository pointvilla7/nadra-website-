'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function ApniChhatPage() {
  const article = ARTICLES['apni-chhat-apna-ghar'];
  return <ArticleLayout article={article} />;
}
