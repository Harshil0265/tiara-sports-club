import React from 'react';
import TIARA_LOGO from '../assets/images/tiara-logo.png';

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
      {/* Official Tiara Sports Club logo */}
      <img
        src={TIARA_LOGO}
        alt="Tiara Sports Club logo"
        className={`shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 ${
          size === 'sm'
            ? 'h-10 w-10 sm:h-11 sm:w-11'
            : size === 'lg'
            ? 'h-16 w-16 sm:h-20 sm:w-20'
            : 'h-11 w-11 sm:h-12 sm:w-12'
        }`}
        width={512}
        height={512}
      />

      {/* Wordmark */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-display font-black uppercase tracking-tight whitespace-nowrap ${
            size === 'sm'
              ? 'text-xl sm:text-2xl'
              : size === 'lg'
              ? 'text-3xl sm:text-4xl'
              : 'text-2xl sm:text-3xl'
          } ${isLightMode ? 'text-[#0B0B0B]' : 'text-white'}`}
        >
          TIARA SPORTS CLUB
        </span>
        <span
          className={`mt-1 text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.25em] font-mono ${
            isLightMode ? 'text-black/55' : 'text-neutral-400'
          }`}
        >
          VADODARA · GUJARAT
        </span>
      </div>
    </div>
  );
};
