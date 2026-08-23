'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Fuse from 'fuse.js';
import {
  Bot,
  X,
  Send,
  Sparkles,
  ShieldCheck,
  RefreshCw,
  ExternalLink,
  ArrowRight,
  HelpCircle,
  BookOpen,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { ARTICLES, Article } from '@/lib/data/articles';
import { CHATBOT_FAQ_DATABASE, STARTER_QUICK_CHIPS, ChatbotFaqItem } from '@/lib/data/chatbotFaq';
import { SkeletonAiMessage, SkeletonText } from '@/components/Skeleton';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  sourceLink?: { title: string; url: string };
  fallbackGuides?: { title: string; url: string; category: string }[];
}

/**
 * ==============================================================================
 * FUTURE AI LLM INTEGRATION POINT (Claude / Gemini / OpenAI)
 * ==============================================================================
 * When ready to upgrade from rule-based FAQ matching to an interactive AI LLM:
 *
 * 1. Create a server-side route `/api/chat` with your API Key (e.g. ANTHROPIC_API_KEY).
 * 2. Pass the user's prompt alongside site grounding context (`public/llms.txt`).
 * 3. Replace the fuzzy match handler below with:
 *
 *    async function queryLiveAiModel(prompt: string) {
 *      const res = await fetch('/api/chat', {
 *        method: 'POST',
 *        headers: { 'Content-Type': 'application/json' },
 *        body: JSON.stringify({ message: prompt }),
 *      });
 *      return await res.json();
 *    }
 * ==============================================================================
 */

export const AiAssistantWidget: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isWidgetLoading, setIsWidgetLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Fuse.js for fuzzy FAQ matching
  const faqFuse = useMemo(() => {
    return new Fuse(CHATBOT_FAQ_DATABASE, {
      keys: [
        { name: 'keywords', weight: 0.5 },
        { name: 'patterns', weight: 0.3 },
        { name: 'answerEn', weight: 0.1 },
        { name: 'answerUr', weight: 0.1 },
      ],
      threshold: 0.45,
      ignoreLocation: true,
      minMatchCharLength: 2,
    });
  }, []);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: t(
        'Assalam-o-Alaikum! I am your Verified Civic Assistant. Ask me anything about NADRA CNIC fees, Passport rules, FBR filer verification, or BISP 8171 welfare updates!',
        'اسلام علیکم! میں پاکستان انفو ہب کا مصدقہ اسسٹنٹ ہوں۔ نادرا، پاسپورٹ فیس، ایف بی آر فائلر اور بے نظیر 8171 کے بارے میں کوئی بھی سوال پوچھیں۔'
      ),
      timestamp: 'Just now',
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setIsWidgetLoading(true);
      const timer = setTimeout(() => setIsWidgetLoading(false), 250);
      return () => clearTimeout(timer);
    }
  }, [messages, isOpen]);

  // Rule-based FAQ & Fallback Matcher Engine
  const generateFaqResponse = (
    userQuestion: string
  ): {
    answerText: string;
    sourceLink?: { title: string; url: string };
    fallbackGuides?: { title: string; url: string; category: string }[];
  } => {
    const trimmed = userQuestion.trim();
    if (!trimmed) {
      return {
        answerText: t('Please type a question or choose from the quick topics above.', 'براہ کرم سوال ٹائپ کریں۔'),
      };
    }

    // 1. Perform Fuse.js Fuzzy Search
    const searchResults = faqFuse.search(trimmed);

    if (searchResults.length > 0 && searchResults[0].score !== undefined && searchResults[0].score < 0.5) {
      const topMatch = searchResults[0].item;
      return {
        answerText: t(topMatch.answerEn, topMatch.answerUr),
        sourceLink: {
          title: t(topMatch.sourceTitleEn, topMatch.sourceTitleUr),
          url: topMatch.sourceUrl,
        },
      };
    }

    // 2. Fallback Recommendations if no confident match is found
    const allArticleList = Object.values(ARTICLES) as Article[];
    const fallbackList = allArticleList.slice(0, 3).map((art) => ({
      title: t(art.titleEn, art.titleUr),
      url: art.fullPath,
      category: art.categoryId,
    }));

    return {
      answerText: t(
        `I couldn't find an exact answer for "${userQuestion}" in our verified FAQ database — here are some official guides that might help:`,
        `مجھے "${userQuestion}" کے لیے ہو بہو جواب نہیں ملا، لیکن یہ مصدقہ گائیڈز آپ کی مدد کر سکتی ہیں:`
      ),
      fallbackGuides: fallbackList,
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      const res = generateFaqResponse(query);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: res.answerText,
        timestamp: 'Just now',
        sourceLink: res.sourceLink,
        fallbackGuides: res.fallbackGuides,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 no-print">
      {/* Floating Action Button (Collapsed state) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 bg-[#1B2A4A] text-white rounded-full shadow-2xl border-2 border-doc-brass/60 hover:scale-105 active:scale-95 transition-all duration-300 group min-h-[48px]"
          aria-label="Open Civic FAQ Chatbot"
        >
          <div className="relative">
            <Bot className="w-6 h-6 text-doc-brass shrink-0" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
          </div>
          <span className="font-serif font-bold text-xs">
            {t('Ask FAQ Bot', 'معلومات اسسٹنٹ')}
          </span>
        </button>
      )}

      {/* Expanded Chat Window (Mobile full-screen overlay, desktop compact card) */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:right-0 sm:bottom-0 w-full sm:w-[400px] h-full sm:h-[580px] sm:max-h-[85vh] bg-[#FAF9F6] dark:bg-[#1E2A3F] border-0 sm:border-2 sm:border-doc-brass/60 sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-slideUp z-50">
          
          {/* Header */}
          <div className="bg-[#1B2A4A] text-white p-4 flex items-center justify-between border-b border-doc-brass/30 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-doc-brass/20 border border-doc-brass/40 text-doc-brass flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm leading-none text-white flex items-center gap-1.5">
                  <span>Pakistan Info Hub Assistant</span>
                </h3>
                <span className="text-[10px] font-mono text-doc-brass/90 flex items-center gap-1 mt-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Rule-Based Gazette Verified</span>
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white p-2 rounded-xl hover:bg-white/10 transition"
              aria-label="Close FAQ Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Starter Quick-Reply Chips */}
          <div className="bg-slate-100 dark:bg-slate-900/70 p-2.5 flex items-center gap-2 overflow-x-auto border-b border-slate-200 dark:border-slate-800 scrollbar-none shrink-0">
            <span className="font-mono text-[10px] text-doc-brass font-bold shrink-0">
              {t('Quick Questions:', 'عام سوالات:')}
            </span>
            {STARTER_QUICK_CHIPS.map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(chip.query)}
                className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-[11px] font-sans font-medium whitespace-nowrap hover:border-doc-brass hover:text-doc-brass transition shadow-2xs"
              >
                {t(chip.labelEn, chip.labelUr)}
              </button>
            ))}
          </div>

          {/* Messages Stream Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
            {isWidgetLoading ? (
              <div className="space-y-3">
                <SkeletonAiMessage />
                <div className="flex justify-end">
                  <SkeletonText width="w-40" height="h-9" className="rounded-2xl rounded-tr-none" />
                </div>
                <SkeletonAiMessage />
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'assistant' && (
                    <div className="w-7 h-7 rounded-full bg-[#1B2A4A] text-doc-brass flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed space-y-2 ${
                      msg.sender === 'user'
                        ? 'bg-[#1B2A4A] text-white font-medium rounded-tr-none shadow-sm'
                        : 'bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none shadow-sm'
                    }`}
                  >
                    <p className="font-sans text-xs leading-relaxed">{msg.text}</p>

                    {/* Official Source Link Pill */}
                    {msg.sourceLink && (
                      <Link
                        href={msg.sourceLink.url}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-sans font-bold hover:underline"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-doc-brass" />
                        <span>Source: {msg.sourceLink.title} →</span>
                      </Link>
                    )}

                    {/* Fallback Recommendation Cards */}
                    {msg.fallbackGuides && msg.fallbackGuides.length > 0 && (
                      <div className="pt-2 space-y-1.5 border-t border-slate-100 dark:border-slate-800">
                        {msg.fallbackGuides.map((guide, gIdx) => (
                          <Link
                            key={gIdx}
                            href={guide.url}
                            className="block p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-doc-brass bg-slate-50 dark:bg-slate-900 transition text-[11px] font-medium text-slate-900 dark:text-white"
                          >
                            <span className="text-doc-brass font-bold">📖 {guide.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono pl-9">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-doc-brass" />
                <span>Searching verified gazette records...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Chat Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white dark:bg-[#0B1120] border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              placeholder={t('Type your question (e.g. passport fee, cnic rules)...', 'اپنا سوال لکھیں (مثلاً پاسپورٹ فیس، نادرا رولز)...')}
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 h-11 px-3.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-doc-brass"
            />
            <button
              type="submit"
              className="h-11 px-4 bg-[#1B2A4A] hover:bg-slate-900 active:scale-95 text-white rounded-xl flex items-center justify-center transition shadow-sm"
              aria-label="Send message"
            >
              <Send className="w-4 h-4 text-doc-brass" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
};
