import React, { useState } from 'react';
import { NavRoute } from '../../types';
import { ArrowLeft } from 'lucide-react';

interface LegalViewProps {
  onNavigate: (route: NavRoute) => void;
  isDarkMode?: boolean;
}

export const LegalView: React.FC<LegalViewProps> = ({
  onNavigate,
  isDarkMode = true,
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'courts'>('privacy');

  return (
    <div
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors ${
        isDarkMode ? 'bg-neutral-950 text-neutral-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-4xl mx-auto space-y-10">
        <div>
          <button
            onClick={() => onNavigate('home')}
            className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 mb-4 cursor-pointer ${
              isDarkMode ? 'text-neutral-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Tiara Club Home</span>
          </button>
          <span className="text-red-600 text-xs font-bold uppercase tracking-widest block font-mono">
            LEGAL POLICIES & CODE OF CONDUCT
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight mt-1">
            TIARA SPORTS CLUB POLICIES
          </h1>
        </div>

        {/* Tab switch */}
        <div
          className={`flex items-center gap-1 p-1 border rounded-xs ${
            isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-slate-300'
          }`}
        >
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-red-600 text-white'
                : isDarkMode
                ? 'text-neutral-400 hover:text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-red-600 text-white'
                : isDarkMode
                ? 'text-neutral-400 hover:text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Membership Terms
          </button>
          <button
            onClick={() => setActiveTab('courts')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
              activeTab === 'courts'
                ? 'bg-red-600 text-white'
                : isDarkMode
                ? 'text-neutral-400 hover:text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Turf & Court Safety
          </button>
        </div>

        <div
          className={`border rounded-xs p-6 sm:p-8 space-y-6 text-xs sm:text-sm leading-relaxed font-sans ${
            isDarkMode
              ? 'bg-neutral-900 border-neutral-800 text-neutral-300'
              : 'bg-white border-slate-200 text-slate-700 shadow-sm'
          }`}
        >
          {activeTab === 'privacy' && (
            <>
              <h2 className="font-display text-2xl font-bold uppercase">
                1. MEMBER PRIVACY & DATA PROTECTION
              </h2>
              <p>
                TIARA SPORTS CLUB (Vadodara, Gujarat) values your privacy. Member records,
                biometric data from the fitness gym, and contact details are stored securely
                and utilized strictly for club operations, tournament schedules, and slot reservations.
              </p>
            </>
          )}

          {activeTab === 'terms' && (
            <>
              <h2 className="font-display text-2xl font-bold uppercase">
                1. MEMBERSHIP PRIVILEGES
              </h2>
              <p>
                Tiara Club memberships provide access to all designated sports facilities within our
                12-acre campus in Vadodara. Members must reserve peak evening slots via the online
                booking system or reception desk.
              </p>
            </>
          )}

          {activeTab === 'courts' && (
            <>
              <h2 className="font-display text-2xl font-bold uppercase">
                1. COURT FOOTWEAR REGULATIONS
              </h2>
              <p>
                Tennis courts require appropriate non-marking tournament tennis shoes. Badminton
                courts strictly require non-marking gum sole shoes. Clean non-marking sports trainers
                are mandatory in the gym and fitness zones.
              </p>
            </>
          )}

          <div
            className={`pt-4 border-t text-xs font-mono ${
              isDarkMode ? 'border-neutral-800 text-neutral-500' : 'border-slate-200 text-slate-400'
            }`}
          >
            TIARA SPORTS CLUB · VADODARA, GUJARAT, INDIA
          </div>
        </div>
      </div>
    </div>
  );
};
