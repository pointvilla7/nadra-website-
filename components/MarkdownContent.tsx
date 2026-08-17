import React from 'react';
import Link from 'next/link';
import { AlertCircle, Info, AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export const MarkdownContent: React.FC<MarkdownContentProps> = ({ content, className = '' }) => {
  if (!content) return null;

  // Split into block tokens (double newlines)
  const rawBlocks = content.split(/\n\s*\n/);

  const renderInline = (text: string): React.ReactNode => {
    // Split by bold (**bold**), code (`code`), links ([text](url))
    const parts: React.ReactNode[] = [];
    const regex = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\)|_[^_]+_)/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      const token = match[0];
      if (token.startsWith('**') && token.endsWith('**')) {
        parts.push(<strong key={match.index} className="font-extrabold text-doc-ink dark:text-white">{token.slice(2, -2)}</strong>);
      } else if (token.startsWith('`') && token.endsWith('`')) {
        parts.push(<code key={match.index} className="px-1.5 py-0.5 rounded bg-doc-ink/5 dark:bg-slate-800 text-doc-seal dark:text-doc-brass font-mono text-xs font-semibold">{token.slice(1, -1)}</code>);
      } else if (token.startsWith('[') && token.includes('](')) {
        const linkText = token.substring(1, token.indexOf(']('));
        const linkUrl = token.substring(token.indexOf('](') + 2, token.length - 1);
        parts.push(
          <a key={match.index} href={linkUrl} target="_blank" rel="noopener noreferrer" className="text-doc-seal dark:text-red-400 font-semibold underline underline-offset-2 hover:opacity-80 transition">
            {linkText}
          </a>
        );
      } else if (token.startsWith('_') && token.endsWith('_')) {
        parts.push(<em key={match.index} className="italic text-slate-700 dark:text-slate-300">{token.slice(1, -1)}</em>);
      }
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  const renderBlock = (block: string, index: number) => {
    const trimmed = block.trim();

    // 1. Horizontal Rule
    if (trimmed === '---' || trimmed === '***') {
      return <hr key={index} className="my-8 border-t border-doc-brass/30" />;
    }

    // 2. Headings
    if (trimmed.startsWith('### ')) {
      return (
        <h3 key={index} className="text-lg sm:text-xl font-serif font-bold text-doc-ink dark:text-white mt-8 mb-3 tracking-tight">
          {renderInline(trimmed.replace('### ', ''))}
        </h3>
      );
    }
    if (trimmed.startsWith('## ')) {
      return (
        <h2 key={index} className="text-xl sm:text-2xl font-serif font-extrabold text-doc-ink dark:text-white mt-10 mb-4 border-l-4 border-doc-seal pl-3.5 tracking-tight">
          {renderInline(trimmed.replace('## ', ''))}
        </h2>
      );
    }
    if (trimmed.startsWith('# ')) {
      return (
        <h1 key={index} className="text-2xl sm:text-3xl font-serif font-extrabold text-doc-ink dark:text-white mt-8 mb-4 tracking-tight">
          {renderInline(trimmed.replace('# ', ''))}
        </h1>
      );
    }

    // 3. Alert / Callout Blockquotes (> [!IMPORTANT], > [!NOTE], > [!WARNING], > [!TIP])
    if (trimmed.startsWith('>')) {
      const lines = trimmed.split('\n').map(l => l.replace(/^>\s?/, '').trim());
      const firstLine = lines[0] || '';
      let type: 'important' | 'warning' | 'note' | 'tip' = 'note';
      let title = 'Official Notice';
      let bodyLines = lines;

      if (firstLine.includes('[!IMPORTANT]')) {
        type = 'important';
        title = 'Critical Requirement';
        bodyLines = lines.slice(1);
      } else if (firstLine.includes('[!WARNING]') || firstLine.includes('[!CAUTION]')) {
        type = 'warning';
        title = 'Caution & Penalties';
        bodyLines = lines.slice(1);
      } else if (firstLine.includes('[!TIP]')) {
        type = 'tip';
        title = 'Pro Tip';
        bodyLines = lines.slice(1);
      } else if (firstLine.includes('[!NOTE]')) {
        type = 'note';
        title = 'Official Note';
        bodyLines = lines.slice(1);
      }

      const styles = {
        important: 'bg-red-950/10 dark:bg-red-950/30 border-doc-seal text-doc-seal dark:text-red-300',
        warning: 'bg-amber-950/10 dark:bg-amber-950/30 border-doc-brass text-amber-900 dark:text-amber-300',
        note: 'bg-blue-950/10 dark:bg-blue-950/30 border-blue-500 text-blue-950 dark:text-blue-200',
        tip: 'bg-emerald-950/10 dark:bg-emerald-950/30 border-emerald-500 text-emerald-950 dark:text-emerald-200',
      };

      return (
        <div key={index} className={`my-6 p-4 rounded-xl border-l-4 ${styles[type]} shadow-sm`}>
          <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase tracking-wider mb-1.5">
            {type === 'important' && <ShieldAlert className="w-4 h-4 text-doc-seal shrink-0" />}
            {type === 'warning' && <AlertTriangle className="w-4 h-4 text-doc-brass shrink-0" />}
            {type === 'tip' && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
            {type === 'note' && <Info className="w-4 h-4 text-blue-600 shrink-0" />}
            <span>{title}</span>
          </div>
          <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
            {bodyLines.map((l, li) => (
              <p key={li} className="my-1">{renderInline(l)}</p>
            ))}
          </div>
        </div>
      );
    }

    // 4. Tables (| Header | Header |)
    if (trimmed.startsWith('|') && trimmed.includes('\n|')) {
      const rows = trimmed.split('\n').filter(r => r.trim().startsWith('|'));
      if (rows.length >= 2) {
        const headerCols = rows[0].split('|').map(c => c.trim()).filter(c => c.length > 0);
        // check if second row is separator | :--- | :--- |
        const dataRowStart = rows[1].includes('---') ? 2 : 1;
        const bodyRows = rows.slice(dataRowStart).map(r => r.split('|').map(c => c.trim()).filter(c => c.length > 0));

        return (
          <div key={index} className="my-6 overflow-x-auto rounded-xl border border-doc-brass/40 shadow-sm bg-white dark:bg-doc-dark-card">
            <table className="w-full text-left text-xs sm:text-sm font-sans border-collapse">
              <thead className="bg-doc-paper dark:bg-slate-800/80 border-b border-doc-brass/30">
                <tr>
                  {headerCols.map((col, ci) => (
                    <th key={ci} className="px-4 py-3 font-serif font-extrabold text-doc-ink dark:text-white uppercase tracking-wider text-xs">
                      {renderInline(col)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-doc-brass/15 dark:divide-slate-800">
                {bodyRows.map((row, ri) => (
                  <tr key={ri} className={ri % 2 === 0 ? 'bg-transparent' : 'bg-doc-ink/2 dark:bg-slate-900/30'}>
                    {row.map((cell, ci) => (
                      <td key={ci} className={`px-4 py-3 text-slate-800 dark:text-slate-200 ${cell.includes('PKR') || /^\d+/.test(cell) ? 'font-mono tabular-nums font-semibold' : ''}`}>
                        {renderInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }

    // 5. Code blocks / ASCII Diagrams
    if (trimmed.startsWith('```')) {
      const codeContent = trimmed.replace(/^```[a-z]*\n?/, '').replace(/```$/, '');
      return (
        <div key={index} className="my-6 p-4 rounded-xl bg-doc-ink text-doc-paper dark:bg-slate-950 dark:text-doc-brass border border-doc-brass/30 font-mono text-xs sm:text-sm overflow-x-auto shadow-inner leading-relaxed">
          <pre className="whitespace-pre">{codeContent}</pre>
        </div>
      );
    }

    // 6. Numbered Lists (1. item)
    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed.split('\n').filter(i => /^\d+\.\s/.test(i.trim()));
      return (
        <ol key={index} className="my-4 space-y-2 list-decimal list-inside text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
          {items.map((item, ii) => {
            const cleanText = item.replace(/^\d+\.\s*/, '');
            return (
              <li key={ii} className="pl-1">
                {renderInline(cleanText)}
              </li>
            );
          })}
        </ol>
      );
    }

    // 7. Bullet Lists (- item, * item)
    if (/^[-*]\s/.test(trimmed)) {
      const items = trimmed.split('\n').filter(i => /^[-*]\s/.test(i.trim()));
      return (
        <ul key={index} className="my-4 space-y-2 list-disc list-inside text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
          {items.map((item, ii) => {
            const cleanText = item.replace(/^[-*]\s*/, '');
            return (
              <li key={ii} className="pl-1">
                {renderInline(cleanText)}
              </li>
            );
          })}
        </ul>
      );
    }

    // 8. Standard Paragraph
    return (
      <p key={index} className="my-4 text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-[1.72] font-sans">
        {renderInline(trimmed)}
      </p>
    );
  };

  return (
    <div className={`prose-container max-w-none text-slate-800 dark:text-slate-200 ${className}`}>
      {rawBlocks.map((block, idx) => renderBlock(block, idx))}
    </div>
  );
};
