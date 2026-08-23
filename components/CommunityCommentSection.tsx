'use client';

import React, { useState, useEffect } from 'react';
import { MessageSquare, ShieldCheck, ThumbsUp, Send, User, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { getGuideComments, addGuideComment, UserComment } from '@/lib/utils/feedbackStore';

interface CommunityCommentSectionProps {
  slug: string;
  articleTitle: string;
}

export const CommunityCommentSection: React.FC<CommunityCommentSectionProps> = ({
  slug,
  articleTitle,
}) => {
  const { t } = useLanguage();
  const [comments, setComments] = useState<UserComment[]>([]);
  const [authorName, setAuthorName] = useState('');
  const [authorLocation, setAuthorLocation] = useState('');
  const [commentText, setCommentText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [justSubmitted, setJustSubmitted] = useState(false);

  useEffect(() => {
    setComments(getGuideComments(slug));
  }, [slug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const created = addGuideComment(slug, authorName, authorLocation, commentText);
      setComments((prev) => [created, ...prev]);
      setCommentText('');
      setAuthorName('');
      setAuthorLocation('');
      setIsSubmitting(false);
      setJustSubmitted(true);
    }, 350);
  };

  const handleHelpful = (commentId: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === commentId ? { ...c, helpfulVotes: c.helpfulVotes + 1 } : c))
    );
  };

  return (
    <section
      aria-label="Community Discussions"
      className="my-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-[#FAF9F6] dark:bg-[#1E2A3F] p-5 sm:p-8 space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-doc-ink dark:bg-slate-800 text-white flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-doc-brass" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 dark:text-white">
              {t('Citizen Discussions & Real Experiences', 'شہریوں کے تجربات و عوامی تبصرے')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
              {t(
                'Share tips, ask questions, or verify recent counter procedures.',
                'اپنا تجربہ شیئر کریں یا سرکاری امور سے متعلق سوال پوچھیں۔'
              )}
            </p>
          </div>
        </div>

        {/* Moderation Safety Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 shrink-0 self-start sm:self-auto">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{t('Moderated Against Scams', 'ایجنٹ فری تصدیق')}</span>
        </div>
      </div>

      {/* Post Comment Form */}
      <form onSubmit={handleSubmit} className="p-4 sm:p-5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 shadow-2xs">
        <h4 className="text-xs font-serif font-bold text-slate-900 dark:text-white">
          {t('Add Your Experience or Question:', 'اپنا تجربہ یا سوال لکھیں:')}
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder={t('Your Name (e.g. Tariq Mehmood)', 'آپ کا نام')}
            className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-sans text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-doc-brass"
          />
          <input
            type="text"
            value={authorLocation}
            onChange={(e) => setAuthorLocation(e.target.value)}
            placeholder={t('City / Overseas Country (e.g. Lahore / Dubai)', 'شہر یا ملک (لاہور، اسلام آباد، دبئی)')}
            className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-sans text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-doc-brass"
          />
        </div>

        <textarea
          rows={3}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder={t(
            'Write your comment, recent counter experience, or question...',
            'یہاں اپنا تبصرہ، فیس کا تجربہ یا سوال لکھیں...'
          )}
          required
          className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-sans text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-doc-brass resize-none"
        />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
          <span className="text-[11px] text-slate-400 font-sans">
            {t(
              'Comments are moderated to protect citizens from unauthorized middleman agents.',
              'غیر مجاز ایجنٹوں کے اشتہارات کی روک تھام کے لیے تمام تبصرے مانیٹر کیے جاتے ہیں۔'
            )}
          </span>

          <button
            type="submit"
            disabled={isSubmitting}
            className="h-9 px-5 rounded-lg bg-doc-ink dark:bg-doc-brass hover:bg-doc-brass dark:hover:bg-amber-600 text-white text-xs font-bold font-sans flex items-center justify-center gap-1.5 transition active:scale-95 shrink-0 self-end sm:self-auto"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{isSubmitting ? t('Posting...', 'جمع ہو رہا ہے...') : t('Post Comment', 'تبصرہ بھیجیں')}</span>
          </button>
        </div>

        {justSubmitted && (
          <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>
              {t(
                'Your comment has been submitted and will appear after anti-spam moderation.',
                'آپ کا تبصرہ موصول ہو گیا ہے اور تصدیق کے بعد شائع کر دیا جائے گا۔'
              )}
            </span>
          </div>
        )}
      </form>

      {/* Comment Stream */}
      <div className="space-y-3.5">
        {comments.length === 0 ? (
          <p className="text-xs text-slate-500 dark:text-slate-400 font-sans text-center py-6">
            {t('Be the first citizen to leave a comment on this guide.', 'اس گائیڈ پر پہلا تبصرہ درج کریں۔')}
          </p>
        ) : (
          comments.map((comm) => (
            <div
              key={comm.id}
              className="p-4 rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white dark:bg-slate-900/80 space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-xs font-mono">
                    {comm.authorName.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h5 className="text-xs font-serif font-bold text-slate-900 dark:text-white">
                      {comm.authorName}
                    </h5>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-sans">
                      <span className="flex items-center gap-0.5">
                        <MapPin className="w-2.5 h-2.5 text-doc-brass" />
                        {comm.authorLocation}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-0.5">
                        <Clock className="w-2.5 h-2.5" />
                        {comm.timestamp}
                      </span>
                    </div>
                  </div>
                </div>

                {comm.status === 'pending' ? (
                  <span className="text-[10px] font-mono text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                    {t('Pending Review', 'زیر جائزہ')}
                  </span>
                ) : (
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    {t('Verified Citizen', 'مصدقہ شہری')}
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                {comm.text}
              </p>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => handleHelpful(comm.id)}
                  className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 font-sans transition"
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span>{t('Helpful Tip', 'مفید')}</span>
                  {comm.helpfulVotes > 0 && <span className="font-mono font-bold">({comm.helpfulVotes})</span>}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};
