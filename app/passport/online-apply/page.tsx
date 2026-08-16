'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function PassportOnlineApplyPage() {
  const article = ARTICLES['online-apply'];
  return <ArticleLayout article={article} />;
}
