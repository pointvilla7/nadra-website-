// Server Component — no state, no browser APIs needed
import React from 'react';
import { 
  CreditCard, 
  Plane, 
  FileText, 
  HeartHandshake, 
  Landmark, 
  Briefcase, 
  GraduationCap, 
  Car, 
  ShieldCheck,
  Calculator,
  Globe,
  Building,
  Users,
  Award,
  Compass,
  Activity,
  Scale,
  CloudLightning
} from 'lucide-react';

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

  // Custom vector illustration patterns for all 18 categories
  const getCategoryTheme = () => {
    switch (categoryId) {
      case 'nadra':
        return {
          bg: 'from-emerald-950 via-teal-900 to-slate-950',
          border: 'border-emerald-500/40',
          accent: 'text-emerald-400',
          badge: 'NADRA VERIFIED IDENTITY',
          icon: <CreditCard className="w-14 h-14 text-emerald-300 stroke-[1.5]" />,
        };
      case 'passport':
        return {
          bg: 'from-blue-950 via-indigo-900 to-slate-950',
          border: 'border-blue-500/40',
          accent: 'text-blue-400',
          badge: 'DGIP PASSPORT & TRAVEL',
          icon: <Plane className="w-14 h-14 text-blue-300 stroke-[1.5]" />,
        };
      case 'welfare':
        return {
          bg: 'from-emerald-950 via-emerald-900 to-slate-950',
          border: 'border-emerald-500/40',
          accent: 'text-emerald-400',
          badge: 'BISP 8171 SOCIAL RELIEF',
          icon: <HeartHandshake className="w-14 h-14 text-emerald-300 stroke-[1.5]" />,
        };
      case 'bills':
        return {
          bg: 'from-amber-950 via-amber-900 to-slate-950',
          border: 'border-amber-500/40',
          accent: 'text-amber-400',
          badge: 'ELECTRICITY & GAS UTILITIES',
          icon: <FileText className="w-14 h-14 text-amber-300 stroke-[1.5]" />,
        };
      case 'loans':
        return {
          bg: 'from-amber-950 via-yellow-950 to-slate-950',
          border: 'border-amber-500/40',
          accent: 'text-amber-400',
          badge: 'HOUSING & BUSINESS LOANS',
          icon: <Landmark className="w-14 h-14 text-amber-300 stroke-[1.5]" />,
        };
      case 'traffic':
        return {
          bg: 'from-purple-950 via-violet-900 to-slate-950',
          border: 'border-purple-500/40',
          accent: 'text-purple-400',
          badge: 'PSCA TRAFFIC & DRIVING',
          icon: <Car className="w-14 h-14 text-purple-300 stroke-[1.5]" />,
        };
      case 'education':
        return {
          bg: 'from-sky-950 via-cyan-900 to-slate-950',
          border: 'border-sky-500/40',
          accent: 'text-sky-400',
          badge: 'BISE BOARDS & HEC ACADEMIC',
          icon: <GraduationCap className="w-14 h-14 text-sky-300 stroke-[1.5]" />,
        };
      case 'jobs':
        return {
          bg: 'from-blue-950 via-slate-900 to-slate-950',
          border: 'border-blue-500/40',
          accent: 'text-blue-400',
          badge: 'PPSC FPSC GOVT JOBS',
          icon: <Briefcase className="w-14 h-14 text-blue-300 stroke-[1.5]" />,
        };
      case 'tax':
        return {
          bg: 'from-emerald-950 via-stone-900 to-slate-950',
          border: 'border-emerald-500/40',
          accent: 'text-emerald-400',
          badge: 'FBR TAX & ACTIVE FILER DESK',
          icon: <Calculator className="w-14 h-14 text-emerald-300 stroke-[1.5]" />,
        };
      case 'overseas':
        return {
          bg: 'from-sky-950 via-blue-950 to-slate-950',
          border: 'border-sky-500/40',
          accent: 'text-sky-400',
          badge: 'OVERSEAS PAKISTANIS EMBASSY HUB',
          icon: <Globe className="w-14 h-14 text-sky-300 stroke-[1.5]" />,
        };
      case 'property':
        return {
          bg: 'from-amber-950 via-stone-950 to-slate-950',
          border: 'border-amber-500/40',
          accent: 'text-amber-400',
          badge: 'PLRA LAND & REVENUE MUTATION',
          icon: <Building className="w-14 h-14 text-amber-300 stroke-[1.5]" />,
        };
      case 'family-registration':
        return {
          bg: 'from-rose-950 via-pink-950 to-slate-950',
          border: 'border-rose-500/40',
          accent: 'text-rose-400',
          badge: 'UNION COUNCIL FAMILY DESK',
          icon: <Users className="w-14 h-14 text-rose-300 stroke-[1.5]" />,
        };
      case 'business':
        return {
          bg: 'from-cyan-950 via-teal-950 to-slate-950',
          border: 'border-cyan-500/40',
          accent: 'text-cyan-400',
          badge: 'SECP & SMEDA ENTERPRISE',
          icon: <Building className="w-14 h-14 text-cyan-300 stroke-[1.5]" />,
        };
      case 'certificates':
        return {
          bg: 'from-indigo-950 via-slate-900 to-slate-950',
          border: 'border-indigo-500/40',
          accent: 'text-indigo-400',
          badge: 'NADRA & CIVIC CERTIFICATES',
          icon: <Award className="w-14 h-14 text-indigo-300 stroke-[1.5]" />,
        };
      case 'hajj-umrah':
        return {
          bg: 'from-emerald-950 via-amber-950 to-slate-950',
          border: 'border-emerald-500/40',
          accent: 'text-emerald-400',
          badge: 'MORA HAJJ & SAUDI NUSUK',
          icon: <Compass className="w-14 h-14 text-emerald-300 stroke-[1.5]" />,
        };
      case 'health':
        return {
          bg: 'from-teal-950 via-emerald-950 to-slate-950',
          border: 'border-teal-500/40',
          accent: 'text-teal-400',
          badge: 'SEHAT SAHULAT HEALTHCARE',
          icon: <Activity className="w-14 h-14 text-teal-300 stroke-[1.5]" />,
        };
      case 'legal':
        return {
          bg: 'from-slate-900 via-stone-900 to-slate-950',
          border: 'border-slate-500/40',
          accent: 'text-slate-300',
          badge: 'POLICE & CITIZEN LEGAL DESK',
          icon: <Scale className="w-14 h-14 text-slate-300 stroke-[1.5]" />,
        };
      case 'alerts':
        return {
          bg: 'from-red-950 via-orange-950 to-slate-950',
          border: 'border-red-500/40',
          accent: 'text-red-400',
          badge: 'NDMA & PMD DISASTER ALERTS',
          icon: <CloudLightning className="w-14 h-14 text-red-300 stroke-[1.5]" />,
        };
      default:
        return {
          bg: 'from-slate-900 via-slate-950 to-emerald-950',
          border: 'border-doc-brass/40',
          accent: 'text-doc-brass',
          badge: 'PUBLIC CIVIC DIRECTORY',
          icon: <Briefcase className="w-14 h-14 text-doc-brass stroke-[1.5]" />,
        };
    }
  };

  const theme = getCategoryTheme();

  return (
    <figure className="my-6 rounded-2xl overflow-hidden border-2 shadow-lg relative group">
      <div
        className={`w-full h-44 sm:h-56 bg-gradient-to-br ${theme.bg} ${theme.border} p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden text-white`}
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
            <span>VERIFIED INFOGRAPHIC</span>
          </span>
        </div>

        {/* Center Vector Icon Graphic */}
        <div className="flex items-center justify-center my-auto z-10 gap-4">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl group-hover:scale-105 transition-transform duration-300">
            {theme.icon}
          </div>
          <div className="hidden sm:block text-left max-w-md">
            <div className="text-xs font-mono font-bold text-doc-brass uppercase tracking-wider">
              CIVIC REPOSITORY 2026
            </div>
            <div className="text-base sm:text-lg font-serif font-extrabold leading-snug line-clamp-2 text-white">
              {titleEn}
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="flex items-center justify-between z-10 text-[10px] sm:text-[11px] font-mono text-slate-300 border-t border-white/10 pt-2.5">
          <span>SOURCE: OFFICIAL GAZETTE 2026</span>
          <span className="hidden sm:inline">PAKISTAN INFO HUB VERIFIED</span>
        </div>
      </div>

      <figcaption className="sr-only">{altText}</figcaption>
    </figure>
  );
};
