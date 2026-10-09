import React, { useState, useEffect } from 'react';
import { TiaraBrandLogo } from './TiaraBrandLogo';
import { SportIcon } from './SportsThemeIcon';
import { Check, ArrowRight } from 'lucide-react';

interface FirstTimeLoaderProps {
  onComplete: () => void;
}

export const FirstTimeLoader: React.FC<FirstTimeLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const sportsList = [
    { id: 'tennis', name: 'Tennis', spec: 'ITF Level 3' },
    { id: 'pickleball', name: 'Pickleball', spec: 'USAPA Pro' },
    { id: 'badminton', name: 'Badminton', spec: 'BWF Teak' },
    { id: 'gym', name: 'Gym', spec: 'S&C Elite' },
  ];

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setIsFadingOut(true);
          setTimeout(() => {
            onComplete();
          }, 450);
          return 100;
        }
        return prev + 2;
      });
    }, 28);

    return () => {
      clearInterval(progressTimer);
    };
  }, [onComplete]);

  const handleEnterCampus = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  // Determine current active sport based on progress quadrant
  const getActiveStage = () => {
    if (progress < 25) return 'Calibrating Tennis Courts';
    if (progress < 50) return 'Configuring Pickleball Center';
    if (progress < 75) return 'Setting Up Badminton Arena';
    if (progress < 100) return 'Preparing Strength & Conditioning Gym';
    return 'Vadodara Campus Ready';
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950 text-white select-none transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Subtle architectural radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/30 via-neutral-950 to-neutral-950 pointer-events-none" />

      {/* Main Centered Content Box with Generous Width & Spacing */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-xl px-4 sm:px-6 text-center space-y-7">
        
        {/* Tiara Brand Emblem & Typography */}
        <div className="transform scale-105 sm:scale-110 mb-1">
          <TiaraBrandLogo isLightMode={false} size="lg" />
        </div>

        {/* Structured 4-Sport Arena Status Bar (Spacious Cards, No Jitter, Zero Layout Shifts) */}
        <div className="w-full space-y-3 mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
            {sportsList.map((sport, idx) => {
              const threshold = (idx + 1) * 25;
              const isCompleted = progress >= threshold;
              const isActive = progress >= idx * 25 && progress < threshold;

              return (
                <div
                  key={sport.id}
                  className={`p-3.5 sm:p-4 rounded-xs border flex flex-col items-center justify-center space-y-2 sm:space-y-2.5 transition-all duration-300 min-h-[118px] sm:min-h-[126px] ${
                    isCompleted
                      ? 'bg-neutral-900 border-red-600/80 shadow-md shadow-red-950/20'
                      : isActive
                      ? 'bg-neutral-900/90 border-red-500 shadow-md ring-1 ring-red-500/30'
                      : 'bg-neutral-950/80 border-neutral-800/80 opacity-40'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      isCompleted || isActive
                        ? 'bg-red-600/15 text-red-500'
                        : 'bg-neutral-900 text-neutral-600'
                    }`}
                  >
                    <SportIcon sportId={sport.id} className="w-4.5 h-4.5 text-red-500" size={18} />
                  </div>

                  <span
                    className={`font-display text-xs font-bold uppercase tracking-wider block transition-colors ${
                      isCompleted || isActive ? 'text-white' : 'text-neutral-500'
                    }`}
                  >
                    {sport.name}
                  </span>

                  <span className="font-mono text-[9px] text-neutral-400 block tracking-wide">
                    {sport.spec}
                  </span>

                  {isCompleted && (
                    <div className="w-4 h-4 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Current Stage Status (Anchored 1-Line Height) */}
          <div className="h-6 flex items-center justify-center pt-1">
            <span className="text-xs font-mono font-medium text-red-400 uppercase tracking-widest">
              {getActiveStage()}
            </span>
          </div>
        </div>

        {/* Clean Progress Bar & Percentage */}
        <div className="w-full space-y-2.5">
          <div className="flex justify-between items-center text-xs font-mono text-neutral-400 px-0.5">
            <span className="tracking-wider">INITIALIZING CAMPUS</span>
            <span className="text-white font-bold">{progress}%</span>
          </div>
          <div className="h-2 w-full bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
            <div
              className="h-full bg-red-600 transition-all duration-75 ease-out rounded-full shadow-sm shadow-red-600"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Clean, Spacious Action Button */}
        <div className="pt-1">
          <button
            onClick={handleEnterCampus}
            className="px-8 py-3 bg-red-600/90 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-widest rounded-xs transition-all shadow-lg shadow-red-600/20 cursor-pointer flex items-center justify-center gap-2.5 mx-auto hover:scale-102 active:scale-98"
          >
            <span>ENTER TIARA CAMPUS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Location Tag */}
        <div className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 flex items-center justify-center gap-2 pt-0.5">
          <span>SAMA-SAVLI ROAD</span>
          <span>·</span>
          <span className="text-red-500 font-bold">VADODARA, GUJARAT</span>
        </div>

      </div>
    </div>
  );
};
