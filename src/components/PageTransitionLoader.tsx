import React, { useState, useEffect } from 'react';
import { SportIcon } from './SportsThemeIcon';

interface PageTransitionLoaderProps {
  targetPageName: string;
  isLightMode?: boolean;
}

export const PageTransitionLoader: React.FC<PageTransitionLoaderProps> = ({
  targetPageName,
  isLightMode = false,
}) => {
  const [activeIconIdx, setActiveIconIdx] = useState(0);

  const sportsList = [
    { id: 'tennis', label: 'Tennis' },
    { id: 'pickleball', label: 'Pickleball' },
    { id: 'badminton', label: 'Badminton' },
    { id: 'gym', label: 'Gym' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIconIdx((prev) => (prev + 1) % sportsList.length);
    }, 110);
    return () => clearInterval(interval);
  }, []);

  const active = sportsList[activeIconIdx];

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-200 backdrop-blur-xs select-none ${
        isLightMode
          ? 'bg-slate-900/60 text-slate-900'
          : 'bg-black/75 text-white'
      }`}
    >
      <div
        className={`px-8 py-6 rounded-sm shadow-2xl border flex flex-col items-center space-y-3 transform scale-100 animate-fadeIn ${
          isLightMode
            ? 'bg-white border-slate-200'
            : 'bg-neutral-900 border-neutral-800'
        }`}
      >
        {/* Animated Sports Icon Ring with Lucide-style Theme Icon (No Emojis) */}
        <div className="relative flex items-center justify-center">
          <div className="w-14 h-14 rounded-full border-2 border-red-600 border-t-transparent animate-spin" />
          <div className="absolute text-red-600 transform transition-transform duration-100">
            <SportIcon sportId={active.id} className="w-6 h-6 text-red-600" size={24} />
          </div>
        </div>

        <div className="text-center space-y-0.5">
          <span className="font-display text-lg font-black uppercase tracking-wider text-red-600 block">
            TIARA SPORTS CLUB
          </span>
          <span
            className={`text-xs font-mono font-medium ${
              isLightMode ? 'text-slate-600' : 'text-neutral-400'
            }`}
          >
            NAVIGATING TO {targetPageName.toUpperCase()}...
          </span>
        </div>

        <div className="flex items-center gap-1.5 pt-1">
          {sportsList.map((item, idx) => (
            <span
              key={item.label}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-150 ${
                idx === activeIconIdx ? 'bg-red-600 w-4' : 'bg-neutral-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
