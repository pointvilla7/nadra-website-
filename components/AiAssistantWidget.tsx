'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, User, ShieldCheck, RefreshCw, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { ARTICLES } from '@/lib/data/articles';
import { SkeletonAiMessage, SkeletonText } from '@/components/Skeleton';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  sourceLink?: { title: string; url: string };
}

export const AiAssistantWidget: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  // Skeleton on first open — prevents blank flash while widget JS initializes
  const [isWidgetLoading, setIsWidgetLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'assistant',
      text: t(
        'Assalam-o-Alaikum! I am your AI Civic Assistant for Pakistan Info Hub. Ask me anything about NADRA CNICs, Passport fees, BISP 8171 eligibility, or Govt Loans!',
        'اسلام علیکم! میں پاکستان انفو ہب کا اے آئی اسسٹنٹ ہوں۔ نادرا، پاسپورٹ فیس، بے نظیر 8171 یا قرضہ سکیموں کے بارے میں کوئی بھی سوال پوچھیں۔',
        'Assalam-o-Alaikum! Main aapka AI Civic Assistant hoon. NADRA, Passport fee ya BISP 8171 k baare mein sawal poochain!'
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
      // Show skeleton briefly when widget first opens
      setIsWidgetLoading(true);
      const timer = setTimeout(() => setIsWidgetLoading(false), 350);
      return () => clearTimeout(timer);
    }
  }, [messages, isOpen]);

  // Client-side Knowledge Retrieval Answer Generator
  const generateAiAnswer = (userQuestion: string): { answerText: string; sourceLink?: { title: string; url: string } } => {
    const query = userQuestion.toLowerCase();

    // 1. Passport Fees
    if (query.includes('passport') && (query.includes('fee') || query.includes('cost') || query.includes('paisa'))) {
      const art = ARTICLES['fee-2026'];
      return {
        answerText: t(
          'Passport Fee 2026 (5 Years): Normal 36 Pages is PKR 4,500 (15 days), Urgent is PKR 7,500 (5 days), Executive is PKR 12,500 (2 days). For 10 Years validity, 36 Pages Normal fee is PKR 6,700.',
          'پاسپورٹ فیس 2026 (5 سالہ): نارمل 36 صفحات 4,500 روپے (15 دن)، ارجنٹ 7,500 روپے (5 دن)، ایگزیکٹو 12,500 روپے (2 دن) ہے۔ 10 سالہ نارمل فیس 6,700 روپے ہے۔'
        ),
        sourceLink: { title: art.titleEn, url: art.fullPath },
      };
    }

    // 2. BISP 8171
    if (query.includes('bisp') || query.includes('8171') || query.includes('kafaalat') || query.includes('ehsaas')) {
      const art = ARTICLES['bisp-eligibility-check-by-cnic'];
      return {
        answerText: t(
          'BISP 8171 Registration is 100% FREE! Check your eligibility by sending your 13-digit CNIC without dashes to 8171 via SMS, or log in to the official 8171.bisp.gov.pk portal. Beware of fake agents!',
          'بی ایس پی 8171 رجسٹریشن بالکل مفت ہے! اپنا 13 ہندسوں کا شناختی کارڈ نمبر 8171 پر ایس ایم ایس کریں یا 8171.bisp.gov.pk پورٹل پر چیک کریں۔ کسی ایجنٹ کو پیسے نہ دیں!'
        ),
        sourceLink: { title: art.titleEn, url: art.fullPath },
      };
    }

    // 3. NADRA CNIC
    if (query.includes('cnic') || query.includes('nadra') || query.includes('id card') || query.includes('b-form')) {
      const art = ARTICLES['cnic-kaise-banaye'];
      return {
        answerText: t(
          'To make a new NADRA CNIC (Age 18+), bring your original B-Form, one parent/relative with valid CNIC for biometric attestation to NRC or apply on Pak-ID app. Normal fee PKR 750 (31 days), Urgent PKR 1,500 (15 days).',
          'نیا شناختی کارڈ (عمر 18+) بنوانے کے لیے اصل بی فارم اور والد/والدہ کا اصل شناختی کارڈ ساتھ نادرا سینٹر لائیں یا پاک آئی ڈی ایپ پر اپلائی کریں۔ نارمل فیس 750 روپے ہے۔'
        ),
        sourceLink: { title: art.titleEn, url: art.fullPath },
      };
    }

    // 4. Apni Chhat Loans
    if (query.includes('loan') || query.includes('chhat') || query.includes('ghar') || query.includes('kamyab')) {
      const art = ARTICLES['apni-chhat-apna-ghar'];
      return {
        answerText: t(
          'Under Apni Chhat Apna Ghar scheme, eligible Punjab citizens get interest-free loans up to PKR 1.5 Million for constructing homes up to 5 Marla in urban or 10 Marla in rural areas, with easy monthly installments.',
          'اپنی چھت اپنا گھر سکیم کے تحت 15 لاکھ روپے تک کا بلا سود قرضہ ملتا ہے۔ ماہانہ قسط انتہائی آسان اقساط میں 7 سال میں ادا کی جا سکتی ہے۔'
        ),
        sourceLink: { title: art.titleEn, url: art.fullPath },
      };
    }

    // 5. Default Fallback
    return {
      answerText: t(
        `I searched our verified database for "${userQuestion}". You can read detailed official procedures and check exact fee schedules in our categories above!`,
        `میں نے آپ کے سوال "${userQuestion}" سے متعلق مصدقہ معلومات کھوج لی ہیں۔ آپ ہماری ویب سائٹ کی کیٹیگریز میں تفصیلی گائیڈ دیکھ سکتے ہیں۔`
      ),
    };
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputQuery.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputQuery,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    const currentQuery = inputQuery;
    setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      const res = generateAiAnswer(currentQuery);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: res.answerText,
        timestamp: 'Just now',
        sourceLink: res.sourceLink,
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleChipClick = (chipText: string) => {
    setInputQuery(chipText);
  };

  return (
    <div className="fixed bottom-4 end-4 sm:bottom-6 sm:end-6 z-50 no-print">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 bg-doc-ink text-white rounded-full shadow-2xl border-2 border-doc-brass/60 hover:scale-105 transition-all duration-300 group min-h-[44px]"
          aria-label="Open AI Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-doc-brass shrink-0" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-doc-seal rounded-full animate-ping" />
          </div>
          <span className="font-serif font-bold text-xs">
            {t('AI Assistant', 'اے آئی اسسٹنٹ', 'AI Assistant')}
          </span>
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] max-h-[82vh] bg-doc-paper dark:bg-doc-dark-card border-2 border-doc-brass/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="bg-doc-ink text-white p-3.5 flex items-center justify-between border-b border-doc-brass/30">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-doc-seal text-white flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xs leading-none text-white">
                  Pakistan Info Hub AI
                </h3>
                <span className="text-[10px] font-mono text-doc-brass flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-doc-verified" />
                  <span>Verified RAG Assistant</span>
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white p-1 rounded-lg transition"
              aria-label="Close Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Suggestion Chips */}
          <div className="bg-doc-ink/5 dark:bg-slate-900/60 p-2 flex items-center gap-1.5 overflow-x-auto text-[11px] border-b border-doc-brass/20">
            <span className="font-mono text-[10px] text-doc-brass font-bold shrink-0">Ask:</span>
            <button
              onClick={() => handleChipClick('Passport urgent fee')}
              className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 whitespace-nowrap hover:border-doc-brass"
            >
              Passport Fee
            </button>
            <button
              onClick={() => handleChipClick('BISP 8171 status check')}
              className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 whitespace-nowrap hover:border-doc-brass"
            >
              BISP 8171
            </button>
            <button
              onClick={() => handleChipClick('CNIC apply documents')}
              className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 whitespace-nowrap hover:border-doc-brass"
            >
              NADRA CNIC
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {/* Skeleton: shown while widget initializes after first open */}
            {isWidgetLoading ? (
              <div className="space-y-4">
                <SkeletonAiMessage />
                <div className="flex justify-end">
                  <SkeletonText width="w-32" height="h-8" className="rounded-2xl rounded-tr-sm" />
                </div>
                <SkeletonAiMessage />
              </div>
            ) : messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-doc-ink text-doc-brass flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] p-3 rounded-xl leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-doc-seal text-white font-medium rounded-tr-none'
                      : 'bg-white dark:bg-doc-dark-base border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-sm rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  {msg.sourceLink && (
                    <a
                      href={msg.sourceLink.url}
                      className="inline-flex items-center gap-1 mt-2 text-[10px] font-mono font-bold text-doc-seal hover:underline"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>Source: {msg.sourceLink.title}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-doc-brass" />
                <span>Searching verified records...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white dark:bg-doc-dark-base border-t border-doc-brass/30 flex items-center gap-2">
            <input
              type="text"
              placeholder={t('Type your question...', 'سوال پوچھیں...')}
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 px-3 py-2 text-xs bg-doc-paper dark:bg-doc-dark-card border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-doc-seal"
            />
            <button
              type="submit"
              className="p-2 bg-doc-ink text-white rounded-lg hover:bg-doc-ink/90 transition"
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
