import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswerBox } from '@/components/DirectAnswerBox';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { WhatsAppAlertSignupForm } from '@/components/WhatsAppAlertSignupForm';
import { ShieldCheck, MessageSquare, Bell, Clock, Lock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Official WhatsApp & SMS Alert Subscription 2026 | Pakistan Info Hub',
  description:
    'Subscribe to official WhatsApp and SMS notifications for NADRA CNIC status, Pakistani e-Passport dispatch, FBR tax return deadlines, and BISP 8171 payment releases.',
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/alerts/subscribe',
  },
};

export default function AlertSubscribePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn pb-16">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { nameEn: 'Emergency & Public Alerts', nameUr: 'الرٹس', url: '/alerts' },
          { nameEn: 'WhatsApp Alert Signup', nameUr: 'واٹس ایپ الرٹس سبسکرپشن' },
        ]}
      />

      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <VerifiedBadge variant="header" textEn="100% Free Public Service" textUr="مکمل مفت عوامی سروس" />
          <span className="text-xs font-mono text-doc-brass">Zero Spam Guarantee</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 dark:text-white tracking-tight">
          Official WhatsApp & SMS Service Alerts (2026)
        </h1>
      </div>

      {/* Direct Answer Box */}
      <DirectAnswerBox
        topicTitleEn="How to get official WhatsApp alerts for government services in Pakistan?"
        topicTitleUr="پاکستان میں سرکاری سروسز کے واٹس ایپ الرٹس کیسے حاصل کریں؟"
        answerEn="Citizens can subscribe for free WhatsApp and SMS alerts on Pakistan Info Hub by entering a valid Pakistani mobile number (+92 3XX XXXXXXX) and choosing topics like CNIC tracking, e-Passport delivery, FBR tax deadlines, and BISP payments. Unsubscribe anytime by replying STOP or visiting the alert management page."
        answerUr="شہری اپنا موبائل نمبر درج کر کے نادرا شناختی کارڈ، پاسپورٹ ڈلیوری، ٹیکس تاریخوں اور بے نظیر پروگرام کے واٹس ایپ الرٹس مفت حاصل کر سکتے ہیں۔ کسی بھی وقت STOP لکھ کر منسوخ کیا جا سکتا ہے۔"
      />

      {/* Main Interactive Signup Form */}
      <WhatsAppAlertSignupForm />

      {/* Trust & Privacy Card */}
      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1120] space-y-4">
        <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-500" />
          <span>Privacy & Data Protection Principles</span>
        </h3>
        <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-sans">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Mobile numbers are encrypted and never shared with third-party marketers or commercial telemarketers.</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Only official announcements published by statutory government authorities are broadcast.</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Manage active subscriptions at any time via <Link href="/alerts/manage" className="text-doc-brass underline font-bold">Alert Management Dashboard</Link>.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
