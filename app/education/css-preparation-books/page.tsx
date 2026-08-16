'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function CSSPreparationPage() {
  const article = ARTICLES['css-preparation-books'];
  return <ArticleLayout article={article} />;
}
