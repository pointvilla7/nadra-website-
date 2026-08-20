'use client';

import React, { useState } from 'react';
import { Activity, ShieldCheck, AlertTriangle, Clock, RefreshCw, Server, ArrowLeft, Database, CheckCircle2, ChevronRight, FileText } from 'lucide-react';
import { ScraperStatus, HealthLog } from '@/lib/services/healthStorage';

interface ScraperStatusClientProps {
  health: ScraperStatus[];
  logs: HealthLog[];
}

export const ScraperStatusClient: React.FC<ScraperStatusClientProps> = ({ health: initialHealth, logs: initialLogs }) => {
  const [healthList, setHealthList] = useState<ScraperStatus[]>(initialHealth);
  const [logsList, setLogsList] = useState<HealthLog[]>(initialLogs);
  const [runningTest, setRunningTest] = useState(false);
  const [testResult, setTestResult] = useState<string | null>(null);

  // Group tools into scrapers vs static redirects
  const scrapers = healthList.filter((item) => !['kelectric', 'wasa', 'sngpl', 'kwsc'].includes(item.id));
  const fallbacks = healthList.filter((item) => ['kelectric', 'wasa', 'sngpl', 'kwsc'].includes(item.id));

  const handleRunHealthCheck = async () => {
    setRunningTest(true);
    setTestResult(null);

    try {
      const res = await fetch('/api/monitoring/health-check', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();
      if (res.ok) {
        setTestResult(`Success: Health checks run successfully at ${new Date().toLocaleTimeString()}.`);
        // Refresh statuses by doing a client-side reload or reload state
        window.location.reload();
      } else {
        setTestResult(`Error: ${data.error || 'Failed to authorize or trigger health checks.'}`);
      }
    } catch (err: any) {
      setTestResult(`Network Connection Error: ${err.message}`);
    } finally {
      setRunningTest(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400">
              <Activity className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif font-extrabold text-white tracking-tight flex items-center gap-2">
                <span>Scraper Health Control Panel</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-400">ADMIN</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-400">
                Automated 6-hourly verification directory status dashboard for Pakistan Info Hub.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleRunHealthCheck}
              disabled={runningTest}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-doc-brass text-white font-mono font-extrabold text-xs shadow-sm transition disabled:opacity-50 min-h-[40px]"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-doc-brass ${runningTest ? 'animate-spin' : ''}`} />
              <span>{runningTest ? 'RUNNING TEST...' : 'TRIGGER DIAGNOSTIC JOB'}</span>
            </button>
          </div>
        </div>

        {/* Diagnostic Run Status Notification */}
        {testResult && (
          <div className={`p-4 rounded-xl border text-xs font-mono animate-fadeIn ${
            testResult.startsWith('Success')
              ? 'bg-emerald-950/40 border-emerald-500/20 text-emerald-300'
              : 'bg-rose-950/40 border-rose-500/20 text-rose-300'
          }`}>
            {testResult}
          </div>
        )}

        {/* Main Operational Status Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Active Interactive Scrapers Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif font-extrabold text-lg text-white flex items-center gap-2">
                <Server className="w-5 h-5 text-doc-brass" />
                <span>Monitored Interactive Scrapers ({scrapers.length})</span>
              </h2>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-emerald-400">
                AUTOMATIC DEGRADATION ENABLED
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {scrapers.map((item) => {
                const isFailed = item.status === 'DEGRADED';
                return (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-slate-900 border border-slate-800/80 flex flex-col justify-between space-y-3 hover:border-slate-700 transition"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-sm text-white">{item.name}</h3>
                        <span className="text-[9px] font-mono text-slate-500 uppercase">{item.id}</span>
                      </div>
                      
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold flex items-center gap-1 ${
                        isFailed
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                          : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${isFailed ? 'bg-rose-500' : 'bg-emerald-500 animate-pulse'}`} />
                        {isFailed ? 'FALLBACK DEGRADED' : 'LIVE'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono border-t border-slate-850 pt-2 text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-500" />
                        Checked: {new Date(item.lastCheck).toLocaleTimeString()}
                      </span>
                      {item.consecutiveFailures > 0 && (
                        <span className="text-rose-400 font-bold">
                          Failures: {item.consecutiveFailures}/4
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Static Redirect Fallbacks */}
            <div className="space-y-4">
              <h2 className="font-serif font-extrabold text-lg text-white flex items-center gap-2 pt-4">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>Captcha Redirect Fallbacks ({fallbacks.length})</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {fallbacks.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-between opacity-80"
                  >
                    <div>
                      <h3 className="font-bold text-sm text-slate-350">{item.name}</h3>
                      <span className="text-[9px] font-mono text-slate-650 uppercase">{item.id}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-500 text-[9px] font-mono font-bold border border-slate-800">
                      REDIRECT-ONLY
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Rolling Verification Logs */}
          <div className="space-y-6">
            <h2 className="font-serif font-extrabold text-lg text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-doc-brass" />
              <span>Rolling Logs (Last 200 checks)</span>
            </h2>

            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden max-h-[600px] overflow-y-auto">
              {logsList.length === 0 ? (
                <div className="p-8 text-center text-slate-500 text-xs font-mono">
                  No health logs recorded yet. Run a diagnostic job to generate logs.
                </div>
              ) : (
                <div className="divide-y divide-slate-850">
                  {logsList.map((log, index) => {
                    const isPass = log.status === 'PASS';
                    return (
                      <div key={index} className="p-3 text-[11px] font-mono flex items-start justify-between gap-3 hover:bg-slate-850 transition">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5">
                            <span className={`w-2 h-2 rounded-full ${isPass ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                            <span className="font-bold text-white uppercase">{log.scraperId}</span>
                            <span className="text-slate-500">({log.latencyMs}ms)</span>
                          </div>
                          {!isPass && log.errorMessage && (
                            <p className="text-rose-400 text-[10px] leading-relaxed break-words max-w-[200px] sm:max-w-xs">
                              Error: {log.errorMessage}
                            </p>
                          )}
                        </div>
                        <span className="text-slate-500 shrink-0 text-[10px]">
                          {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
