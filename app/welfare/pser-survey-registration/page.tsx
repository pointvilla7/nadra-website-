'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function PSERPage() {
  const article = ARTICLES['pser-survey-registration'];
  return <ArticleLayout article={article} />;
}
