import React from 'react';
import { NavRoute } from '../types';
import { CLUB_LOCATION } from '../data/clubData';
import { TiaraBrandLogo } from './TiaraBrandLogo';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUpRight, 
  ArrowUp, 
  Navigation, 
  ShieldCheck, 
  Trophy, 
  Activity
} from 'lucide-react';

interface FooterProps {
  onNavigate: (route: NavRoute) => void;
  isDarkMode?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, isDarkMode = true }) => {
  const handleNav = (route: NavRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Tiara+Sports+Club+Besides+Red+Coral+greens+opposite+Nayara+petrol+pump+sama-savli+road+Vadodara';

  return (
    <footer
      className={`border-t transition-colors ${
        isDarkMode
          ? 'bg-neutral-950 border-neutral-900 text-neutral-400'
          : 'bg-white border-slate-200 text-slate-600'
      }`}
    >
      {/* Top Architectural Live Strip */}
      <div
        className={`border-b ${
          isDarkMode ? 'border-neutral-900 bg-neutral-900/40' : 'border-slate-100 bg-slate-50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className={`font-mono font-bold uppercase tracking-wider text-[11px] ${isDarkMode ? 'text-neutral-200' : 'text-slate-900'}`}>
                CAMPUS ACTIVE · COURTS OPEN TILL 23:00 IST
              </span>
            </div>
            <span className={isDarkMode ? 'text-neutral-700' : 'text-slate-300'}>|</span>
            <div className="flex items-center gap-1.5 font-mono text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-red-600" />
              <span>VADODARA, GUJARAT · SAMA-SAVLI ROAD</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-1.5 rounded-xs text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 border transition-colors ${
                isDarkMode 
                  ? 'border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white' 
                  : 'border-slate-300 bg-white hover:bg-slate-100 text-slate-800'
              }`}
            >
              <Navigation className="w-3 h-3 text-red-500" />
              <span>Google Maps Pin</span>
            </a>
            <button
              onClick={() => handleNav('contact')}
              className="px-3.5 py-1.5 rounded-xs text-xs font-bold uppercase tracking-wider bg-red-600 hover:bg-red-500 text-white transition-colors cursor-pointer"
            >
              Visitor Desk
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 space-y-14">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Info with Typography Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <TiaraBrandLogo isLightMode={!isDarkMode} size="lg" />

            <p className="text-xs sm:text-sm leading-relaxed max-w-sm mt-3">
              Founded in 2012 in Vadodara, Gujarat. A premier multi-sport institution
              featuring championship tennis facilities, professional pickleball arena,
              BWF teak badminton hall, and high-performance gym facility.
            </p>

            <div className="space-y-2 pt-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 text-[11px] font-mono font-bold text-red-500 bg-red-600/10 border border-red-600/25 rounded-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
                <span>OFFICIAL VENUE · GUJARAT STATE MULTI-SPORT FEDERATION</span>
              </div>
              <div className="text-[11px] font-mono text-neutral-500 block">
                ISO 9001:2015 CERTIFIED ATHLETIC GROUNDS · SAMA-SAVLI ROAD
              </div>
            </div>
          </div>

          {/* Multi-Sports Disciplines (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-3.5 h-3.5 text-red-600" />
              <h3
                className={`text-xs font-bold uppercase tracking-widest ${
                  isDarkMode ? 'text-neutral-200' : 'text-slate-900'
                }`}
              >
                CHAMPIONSHIP SPORTS
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center justify-between">
                <button
                  onClick={() => handleNav('facilities')}
                  className="hover:text-red-500 transition-colors cursor-pointer text-left font-medium"
                >
                  Tennis
                </button>
                <span className="font-mono text-[10px] text-red-500 px-1.5 py-0.5 rounded-xs bg-red-600/10">ITF Certified</span>
              </li>
              <li className="flex items-center justify-between">
                <button
                  onClick={() => handleNav('facilities')}
                  className="hover:text-red-500 transition-colors cursor-pointer text-left font-medium"
                >
                  Pickleball
                </button>
                <span className="font-mono text-[10px] text-red-500 px-1.5 py-0.5 rounded-xs bg-red-600/10">Pro Regulation</span>
              </li>
              <li className="flex items-center justify-between">
                <button
                  onClick={() => handleNav('facilities')}
                  className="hover:text-red-500 transition-colors cursor-pointer text-left font-medium"
                >
                  Badminton
                </button>
                <span className="font-mono text-[10px] text-red-500 px-1.5 py-0.5 rounded-xs bg-red-600/10">BWF Level-1</span>
              </li>
              <li className="flex items-center justify-between">
                <button
                  onClick={() => handleNav('facilities')}
                  className="hover:text-red-500 transition-colors cursor-pointer text-left font-medium"
                >
                  Gym
                </button>
                <span className="font-mono text-[10px] text-red-500 px-1.5 py-0.5 rounded-xs bg-red-600/10">Strength Floor</span>
              </li>
            </ul>
          </div>

          {/* Explore & Athlete Hub (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-red-600" />
              <h3
                className={`text-xs font-bold uppercase tracking-widest ${
                  isDarkMode ? 'text-neutral-200' : 'text-slate-900'
                }`}
              >
                MEMBER HUB
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-red-500 transition-colors cursor-pointer"
                >
                  Club History & Heritage
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('facilities')}
                  className="hover:text-red-500 transition-colors cursor-pointer"
                >
                  Sports & Facilities Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('blog')}
                  className="hover:text-red-500 transition-colors cursor-pointer font-bold text-red-500 flex items-center gap-1"
                >
                  <span>10 A-Z Sports Blogs</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('facilities')}
                  className="hover:text-red-500 transition-colors cursor-pointer"
                >
                  Court & Turf Schedules
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-red-500 transition-colors cursor-pointer"
                >
                  Contact & Secretary Desk
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('legal')}
                  className="hover:text-red-500 transition-colors cursor-pointer text-neutral-500"
                >
                  Court Rules & Bylaws
                </button>
              </li>
            </ul>
          </div>

          {/* Vadodara Campus & Direct Coordinates (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-red-600" />
              <h3
                className={`text-xs font-bold uppercase tracking-widest ${
                  isDarkMode ? 'text-neutral-200' : 'text-slate-900'
                }`}
              >
                VADODARA CAMPUS
              </h3>
            </div>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className={`font-semibold block ${isDarkMode ? 'text-neutral-200' : 'text-slate-900'}`}>
                    Campus Headquarters
                  </span>
                  <span>{CLUB_LOCATION.address}</span>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-red-500 hover:text-red-400 font-bold inline-flex items-center gap-1 mt-0.5"
                  >
                    <span>View on Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Operating Hours</span>
                  <span>{CLUB_LOCATION.timings}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Helpline & Booking</span>
                  <span className="font-mono-numbers block">{CLUB_LOCATION.phone}</span>
                  <span className="font-mono-numbers block">{CLUB_LOCATION.mobile}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Official Desk</span>
                  <span className="font-mono text-red-500 font-semibold">{CLUB_LOCATION.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Utility Bar */}
        <div
          className={`pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs ${
            isDarkMode ? 'border-neutral-900 text-neutral-500' : 'border-slate-200 text-slate-500'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© 2012–2026 TIARA SPORTS CLUB · Vadodara, Gujarat. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span className="font-mono text-[11px]">Affiliated with GSMSF & AITA</span>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={() => handleNav('legal')}
              className="hover:text-red-500 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNav('legal')}
              className="hover:text-red-500 transition-colors cursor-pointer"
            >
              Membership Terms
            </button>
            <button
              onClick={() => handleNav('legal')}
              className="hover:text-red-500 transition-colors cursor-pointer"
            >
              Turf Regulations
            </button>
            <button
              onClick={scrollToTop}
              className={`p-2 rounded-xs border transition-colors cursor-pointer flex items-center gap-1.5 ${
                isDarkMode 
                  ? 'border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white' 
                  : 'border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700'
              }`}
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-red-500" />
              <span className="text-[11px] font-bold uppercase tracking-wider">TOP</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
