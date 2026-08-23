'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  BellOff,
  CheckCircle2,
  ShieldCheck,
  Smartphone,
  Trash2,
  ArrowRight,
  MessageSquare,
  AlertCircle,
  RefreshCw,
} from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ALERT_TOPICS } from '@/lib/data/alerts';

function AlertManageContent() {
  const searchParams = useSearchParams();
  const phoneParam = searchParams.get('phone') || '';

  const [phone, setPhone] = useState(phoneParam);
  const [activeTopics, setActiveTopics] = useState<string[]>([
    'cnic_status',
    'passport_ready',
    'tax_deadlines',
  ]);
  const [isLookingUp, setIsLookingUp] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    if (phoneParam) {
      setPhone(phoneParam);
      try {
        const stored = localStorage.getItem(`pih_active_alerts_${phoneParam}`);
        if (stored) {
          const parsed = JSON.parse(stored);
          setActiveTopics(parsed.categories || []);
        }
      } catch {
        // Ignore
      }
    }
  }, [phoneParam]);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;

    setIsLookingUp(true);
    setTimeout(() => {
      try {
        const stored = localStorage.getItem(`pih_active_alerts_${phone.trim()}`);
        if (stored) {
          const parsed = JSON.parse(stored);
          setActiveTopics(parsed.categories || []);
        } else {
          setActiveTopics(['cnic_status', 'passport_ready']);
        }
      } catch {
        setActiveTopics(['cnic_status', 'passport_ready']);
      }
      setIsLookingUp(false);
      setFeedbackMessage('Loaded active subscriptions.');
      setTimeout(() => setFeedbackMessage(''), 3000);
    }, 300);
  };

  const handleUnsubscribeSingle = async (topicId: string) => {
    try {
      await fetch('/api/alerts/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, categoryId: topicId, unsubscribeAll: false }),
      });
    } catch {
      // Ignore
    }

    const updated = activeTopics.filter((id) => id !== topicId);
    setActiveTopics(updated);
    try {
      localStorage.setItem(
        `pih_active_alerts_${phone}`,
        JSON.stringify({ phone, categories: updated, updatedAt: new Date().toISOString() })
      );
    } catch {
      // Ignore
    }

    setFeedbackMessage(`Unsubscribed from ${topicId}.`);
    setTimeout(() => setFeedbackMessage(''), 3000);
  };

  const handleUnsubscribeAll = async () => {
    if (!window.confirm('Are you sure you want to stop all WhatsApp and SMS alerts for this number?')) {
      return;
    }

    try {
      await fetch('/api/alerts/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, unsubscribeAll: true }),
      });
    } catch {
      // Ignore
    }

    setActiveTopics([]);
    try {
      localStorage.removeItem(`pih_active_alerts_${phone}`);
    } catch {
      // Ignore
    }

    setFeedbackMessage('All alert subscriptions have been canceled.');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn pb-16">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { nameEn: 'Emergency & Public Alerts', nameUr: 'الرٹس', url: '/alerts' },
          { nameEn: 'Manage Subscriptions', nameUr: 'سبسکرپشن مینجمنٹ' },
        ]}
      />

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 dark:text-white tracking-tight">
          Manage Your WhatsApp & SMS Subscriptions
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans max-w-2xl">
          Review, pause, or unsubscribe from specific government alert channels. Changes take effect immediately.
        </p>
      </div>

      {/* Phone Lookup Card */}
      <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-[#FAF9F6] dark:bg-[#1E2A3F] space-y-3">
        <h3 className="text-xs font-bold font-serif text-slate-800 dark:text-slate-200">
          Search Active Number:
        </h3>
        <form onSubmit={handleLookup} className="flex flex-col sm:flex-row gap-2 max-w-md">
          <div className="relative flex-1">
            <Smartphone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="tel"
              inputMode="numeric"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+92 300 1234567"
              className="w-full h-11 pl-9 pr-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-doc-brass"
            />
          </div>
          <button
            type="submit"
            disabled={isLookingUp}
            className="h-11 px-5 rounded-xl bg-slate-900 dark:bg-doc-brass text-white text-xs font-bold font-sans flex items-center justify-center gap-1.5 hover:bg-doc-brass transition shrink-0"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLookingUp ? 'animate-spin' : ''}`} />
            <span>Lookup</span>
          </button>
        </form>
      </div>

      {feedbackMessage && (
        <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-sans flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>{feedbackMessage}</span>
        </div>
      )}

      {/* Active Subscriptions List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white">
            Active Subscribed Channels ({activeTopics.length})
          </h3>

          {activeTopics.length > 0 && (
            <button
              onClick={handleUnsubscribeAll}
              className="text-xs font-sans text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Cancel All Alerts</span>
            </button>
          )}
        </div>

        {activeTopics.length === 0 ? (
          <div className="p-8 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 text-center space-y-3 bg-white/50 dark:bg-slate-900/50">
            <BellOff className="w-8 h-8 text-slate-400 mx-auto" />
            <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-white">
              No Active Alert Subscriptions
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans max-w-sm mx-auto">
              You are currently not subscribed to any alert broadcasts for this phone number.
            </p>
            <Link
              href="/alerts/subscribe"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-doc-brass text-white text-xs font-bold font-sans hover:bg-amber-600 transition"
            >
              <span>Subscribe to New Alerts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {ALERT_TOPICS.filter((t) => activeTopics.includes(t.id)).map((topic) => (
              <div
                key={topic.id}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between space-y-3 shadow-2xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      ✓ Active
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">{topic.badge}</span>
                  </div>
                  <h4 className="text-xs font-serif font-bold text-slate-900 dark:text-white">
                    {topic.titleEn}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                    {topic.descriptionEn}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleUnsubscribeSingle(topic.id)}
                  className="w-full py-2 px-3 rounded-lg border border-rose-200 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-900/40 text-xs font-sans font-bold flex items-center justify-center gap-1.5 transition"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Unsubscribe Topic</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function AlertManagePage() {
  return (
    <Suspense fallback={<div className="h-96 rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" />}>
      <AlertManageContent />
    </Suspense>
  );
}
