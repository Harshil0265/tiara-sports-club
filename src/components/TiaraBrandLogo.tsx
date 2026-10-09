import React from 'react';

interface TiaraBrandLogoProps {
  className?: string;
  isLightMode?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const TiaraBrandLogo: React.FC<TiaraBrandLogoProps> = ({
  className = '',
  isLightMode = false,
  size = 'md',
}) => {
  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 select-none shrink-0 ${className}`}>
      {/* Tiara Athletic Crown Crest Symbol */}
      <div
        className={`relative flex items-center justify-center rounded-sm shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm ${
          size === 'sm'
            ? 'h-7 w-7'
            : size === 'lg'
            ? 'h-11 w-11 sm:h-12 sm:w-12'
            : 'h-8.5 w-8.5 sm:h-9 sm:w-9'
        } ${
          isLightMode
            ? 'bg-gradient-to-br from-red-600 to-amber-600 text-white shadow-red-600/15'
            : 'bg-gradient-to-br from-red-600 to-orange-600 text-white shadow-red-950/40'
        }`}
      >
        {/* Stylized SVG Tiara Crown Monogram */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-6 h-6' : 'w-4.5 h-4.5'}
        >
          <path d="M3 17h18" strokeWidth="2.5" />
          <path d="M4 17l1.5-9 5.5 5 5.5-5 1.5 9" strokeWidth="2" />
          <circle cx="5.5" cy="7.5" r="1.3" fill="currentColor" stroke="none" />
          <circle cx="12" cy="5.5" r="1.6" fill="currentColor" stroke="none" />
          <circle cx="18.5" cy="7.5" r="1.3" fill="currentColor" stroke="none" />
        </svg>
      </div>

      {/* Typography Logo: "TIARA SPORTS CLUB" */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1 leading-none tracking-tight">
          <span
            className={`font-display font-black uppercase transition-colors ${
              size === 'sm'
                ? 'text-lg sm:text-xl'
                : size === 'lg'
                ? 'text-3xl sm:text-4xl'
                : 'text-xl sm:text-2xl'
            } ${isLightMode ? 'text-slate-900' : 'text-white'}`}
          >
            TIARA
          </span>
          <span
            className={`font-display font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 ${
              size === 'sm'
                ? 'text-lg sm:text-xl'
                : size === 'lg'
                ? 'text-3xl sm:text-4xl'
                : 'text-xl sm:text-2xl'
            }`}
          >
            SPORTS
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5 leading-none">
          <span
            className={`text-[8.5px] sm:text-[9.5px] uppercase font-bold tracking-widest font-mono ${
              isLightMode ? 'text-slate-600 font-semibold' : 'text-neutral-400'
            }`}
          >
            CLUB · VADODARA
          </span>
        </div>
      </div>
    </div>
  );
};
