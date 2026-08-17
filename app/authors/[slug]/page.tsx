import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { AUTHORS, getAuthorBySlug } from '@/lib/data/authors';
import { ARTICLES } from '@/lib/data/articles';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SchemaInjector } from '@/components/SchemaInjector';
import { ShieldCheck, Award, Mail, BookOpen, ArrowRight, UserCheck } from 'lucide-react';
import { VerifiedBadge } from '@/components/VerifiedBadge';

interface AuthorPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(AUTHORS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const author = AUTHORS[params.slug];
  if (!author) return { title: 'Author Not Found | Pakistan Info Hub' };

  return {
    title: `${author.name} — ${author.role} | Pakistan Info Hub`,
    description: author.bioEn,
    openGraph: {
      title: `${author.name} | Pakistan Info Hub Editorial Board`,
      description: author.bioEn,
      url: `https://pakistaninfohub.com/authors/${author.slug}`,
    },
  };
}

export default function AuthorProfilePage({ params }: AuthorPageProps) {
  const author = AUTHORS[params.slug];
  if (!author) notFound();

  // Find all articles reviewed or authored by this domain specialist
  const authorArticles = Object.values(ARTICLES).filter((art) => {
    if (author.slug === 'muhammad-tariq-khan') {
      return ['nadra', 'passport', 'jobs'].includes(art.categoryId);
    }
    if (author.slug === 'syeda-fatima-zahra') {
      return ['welfare', 'education'].includes(art.categoryId);
    }
    if (author.slug === 'usman-ali-raza') {
      return ['loans', 'bills', 'traffic'].includes(art.categoryId);
    }
    return true;
  });

  const breadcrumbs = [
    { nameEn: 'Editorial Team', nameUr: 'ایڈیٹوریل ٹیم', url: '/editorial-team' },
    { nameEn: author.name, nameUr: author.name },
  ];

  return (
    <div className="space-y-10 animate-fadeIn pb-12">
      <SchemaInjector
        breadcrumbs={breadcrumbs}
        customSchema={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': `https://pakistaninfohub.com/authors/${author.slug}#person`,
          name: author.name,
          jobTitle: author.role,
          description: author.bioEn,
          url: `https://pakistaninfohub.com/authors/${author.slug}`,
          worksFor: {
            '@type': 'Organization',
            name: 'Pakistan Info Hub',
            url: 'https://pakistaninfohub.com',
          },
        }}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Author Hero Header Card */}
      <header className="rounded-3xl doc-card border-2 border-doc-brass/40 p-8 sm:p-10 bg-doc-ink text-white shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-[#D4AF37] via-[#B08D57] to-[#8C6D37] p-1 shadow-xl flex items-center justify-center shrink-0">
            <div className="w-full h-full rounded-3xl bg-doc-ink dark:bg-slate-950 flex items-center justify-center font-serif font-extrabold text-2xl text-doc-paper border border-doc-brass/30">
              {author.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .slice(0, 2)}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <VerifiedBadge variant="header" textEn="VERIFIED CIVIC RESEARCHER" />
              <span className="text-xs font-mono text-doc-brass">
                • {author.credentials}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-white">
              {author.name}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-medium">
              {author.role}
            </p>
          </div>
        </div>

        <div className="border-t border-doc-brass/30 pt-6 text-sm text-slate-200 leading-relaxed font-sans max-w-3xl">
          <p>{author.bioEn}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-doc-brass pt-2">
          <span className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-doc-brass" />
            <span>Specialization: {author.specialization}</span>
          </span>
          {author.email && (
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-doc-brass" />
              <span>{author.email}</span>
            </span>
          )}
        </div>
      </header>

      {/* Verified Articles Authored / Reviewed by Author */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-doc-seal" />
            <h2 className="text-2xl font-serif font-extrabold text-doc-ink dark:text-white">
              Verified Guides Reviewed by {author.name} ({authorArticles.length})
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {authorArticles.map((article) => (
            <div
              key={article.slug}
              className="doc-card rounded-2xl p-6 border border-doc-brass/20 hover:border-doc-brass/50 hover:scale-[1.01] hover:-translate-y-0.5 flex flex-col justify-between transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-950/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 uppercase">
                    {article.categoryId}
                  </span>
                  <VerifiedBadge variant="card" />
                </div>

                <Link href={article.fullPath}>
                  <h3 className="text-base font-serif font-bold text-doc-ink dark:text-white group-hover:text-doc-seal transition line-clamp-2">
                    {article.titleEn}
                  </h3>
                </Link>

                <p className="text-xs text-slate-700 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {article.directAnswerEn}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-doc-brass/20 flex items-center justify-between font-mono text-[11px]">
                <span className="text-slate-500">Verified: {article.lastVerified}</span>
                <Link
                  href={article.fullPath}
                  className="font-bold text-doc-seal dark:text-red-400 hover:underline flex items-center gap-1"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
