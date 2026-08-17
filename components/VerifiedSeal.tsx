// Server Component — pure SVG/JSX, no state or browser APIs needed

import React from 'react';

interface VerifiedSealProps {
  size?: 'sm' | 'md' | 'lg';
  year?: string;
  className?: string;
}

export const VerifiedSeal: React.FC<VerifiedSealProps> = ({
  size = 'md',
  year = '2026',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
  };

  return (
    <div
      className={`relative shrink-0 transition-transform hover:rotate-6 select-none ${sizeClasses[size]} ${className}`}
      title={`Official Verification Stamp Seal • ${year}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-doc-seal dark:text-red-400 drop-shadow-sm"
        aria-hidden="true"
      >
        <defs>
          {/* Path for curved text along top arc */}
          <path id="seal-top-arc" d="M 16,50 A 34,34 0 0,1 84,50" />
        </defs>

        {/* Outer Solid Ring */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />

        {/* Inner Dashed Official Stamp Ring */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3 2"
          className="opacity-75"
        />

        {/* Inner Core Circle Background */}
        <circle
          cx="50"
          cy="50"
          r="33"
          className="fill-doc-paper dark:fill-slate-900 stroke-current"
          strokeWidth="1"
        />

        {/* Upper Curved Text: VERIFIED PORTAL */}
        <text className="font-mono text-[7.5px] font-extrabold fill-current uppercase tracking-wider">
          <textPath href="#seal-top-arc" startOffset="50%" textAnchor="middle">
            OFFICIAL VERIFIED
          </textPath>
        </text>

        {/* Center Checkmark Icon */}
        <g transform="translate(34, 28)">
          <path
            d="M9 14 L14 19 L23 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Bottom Centered Year Text */}
        <text
          x="50"
          y="71"
          textAnchor="middle"
          className="font-mono text-[9.5px] font-extrabold fill-doc-brass dark:fill-amber-300 tracking-widest"
        >
          {year}
        </text>

        {/* Side Accent Dots */}
        <circle cx="19" cy="50" r="1.5" fill="currentColor" />
        <circle cx="81" cy="50" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
};

