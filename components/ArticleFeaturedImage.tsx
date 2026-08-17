// Server Component — no state, no browser APIs needed
import React from 'react';
import { CreditCard, Plane, FileText, HeartHandshake, Landmark, Briefcase, GraduationCap, Car, ShieldCheck } from 'lucide-react';


interface ArticleFeaturedImageProps {
  categoryId: string;
  slug: string;
  titleEn: string;
}

export const ArticleFeaturedImage: React.FC<ArticleFeaturedImageProps> = ({
  categoryId,
  slug,
  titleEn,
}) => {
  const altText = `${titleEn} Official Guide 2026 Pakistan Info Hub`;

  // Custom vector illustration patterns for categories/slugs
  const getCategoryTheme = () => {
    switch (categoryId) {
      case 'nadra':
        return {
          bg: 'from-emerald-950 via-teal-900 to-slate-950',
          border: 'border-emerald-500/40',
          accent: 'text-emerald-400',
          badge: 'NADRA VERIFIED IDENTITY',
          icon: <CreditCard className="w-16 h-16 text-emerald-300 stroke-[1.5]" />,
        };
      case 'passport':
        return {
          bg: 'from-blue-950 via-indigo-900 to-slate-950',
          border: 'border-blue-500/40',
          accent: 'text-blue-400',
          badge: 'DGIP PASSPORT & IMMIGRATION',
          icon: <Plane className="w-16 h-16 text-blue-300 stroke-[1.5]" />,
        };
      case 'welfare':
        return {
          bg: 'from-emerald-950 via-emerald-900 to-slate-950',
          border: 'border-emerald-500/40',
          accent: 'text-emerald-400',
          badge: 'BISP 8171 SOCIAL SAFETY',
          icon: <HeartHandshake className="w-16 h-16 text-emerald-300 stroke-[1.5]" />,
        };
      case 'bills':
        return {
          bg: 'from-amber-950 via-amber-900 to-slate-950',
          border: 'border-amber-500/40',
          accent: 'text-amber-400',
          badge: 'ELECTRICITY & GAS UTILITY',
          icon: <FileText className="w-16 h-16 text-amber-300 stroke-[1.5]" />,
        };
      case 'loans':
        return {
          bg: 'from-amber-950 via-yellow-950 to-slate-950',
          border: 'border-amber-500/40',
          accent: 'text-amber-400',
          badge: 'GOVERNMENT HOUSING & YOUTH LOAN',
          icon: <Landmark className="w-16 h-16 text-amber-300 stroke-[1.5]" />,
        };
      case 'traffic':
        return {
          bg: 'from-purple-950 via-violet-900 to-slate-950',
          border: 'border-purple-500/40',
          accent: 'text-purple-400',
          badge: 'PSCA TRAFFIC & EXCISE',
          icon: <Car className="w-16 h-16 text-purple-300 stroke-[1.5]" />,
        };
      case 'education':
        return {
          bg: 'from-sky-950 via-cyan-900 to-slate-950',
          border: 'border-sky-500/40',
          accent: 'text-sky-400',
          badge: 'BISE BOARD & HEC EDUCATION',
          icon: <GraduationCap className="w-16 h-16 text-sky-300 stroke-[1.5]" />,
        };
      default:
        return {
          bg: 'from-slate-900 via-slate-950 to-emerald-950',
          border: 'border-doc-brass/40',
          accent: 'text-doc-brass',
          badge: 'PUBLIC UTILITY DIRECTORY',
          icon: <Briefcase className="w-16 h-16 text-doc-brass stroke-[1.5]" />,
        };
    }
  };

  const theme = getCategoryTheme();

  return (
    <figure className="my-6 rounded-2xl overflow-hidden border-2 shadow-lg relative group">
      <div
        className={`w-full h-48 sm:h-64 bg-gradient-to-br ${theme.bg} ${theme.border} p-6 flex flex-col justify-between relative overflow-hidden text-white`}
      >
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-white/5 blur-2xl pointer-events-none" />

        {/* Top Header Badge */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-300">
              {theme.badge}
            </span>
          </div>

          <span className="flex items-center gap-1 text-[11px] font-mono text-doc-brass bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>ORIGINAL DIAGRAM</span>
          </span>
        </div>

        {/* Center Vector Icon Graphic */}
        <div className="flex items-center justify-center my-auto z-10 gap-4">
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl group-hover:scale-105 transition-transform duration-300">
            {theme.icon}
          </div>
          <div className="hidden sm:block text-left max-w-sm">
            <div className="text-xs font-mono font-bold text-doc-brass uppercase tracking-wider">
              OFFICIAL GUIDE 2026
            </div>
            <div className="text-lg font-serif font-extrabold leading-snug line-clamp-2 text-white">
              {titleEn}
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="flex items-center justify-between z-10 text-[11px] font-mono text-slate-300 border-t border-white/10 pt-3">
          <span>SOURCE CITATION: GOVT GAZETTE 2026</span>
          <span className="hidden sm:inline">PAKISTAN INFOHUB DIRECTORY</span>
        </div>
      </div>

      <figcaption className="sr-only">{altText}</figcaption>
    </figure>
  );
};
