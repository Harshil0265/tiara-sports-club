import React, { useState, useEffect, useRef } from 'react';
import { NavRoute } from '../types';
import { LIVE_TICKER_ITEMS, MULTI_SPORTS_LIST } from '../data/clubData';
import { TiaraBrandLogo } from './TiaraBrandLogo';
import { SportIcon } from './SportsThemeIcon';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Calendar, 
  ChevronDown, 
  ChevronRight, 
  MapPin, 
  Flame, 
  ArrowRight
} from 'lucide-react';

interface HeaderProps {
  currentRoute: NavRoute;
  onNavigate: (route: NavRoute) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  isDarkMode,
  onToggleDarkMode,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sportsDropdownOpen, setSportsDropdownOpen] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Auto-cycle ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % LIVE_TICKER_ITEMS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSportsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (route: NavRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setSportsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', route: 'home' as NavRoute },
    { label: 'About', route: 'about' as NavRoute },
    { label: 'Sports & Facilities', isDropdown: true, route: 'facilities' as NavRoute },
    { label: 'Blog', route: 'blog' as NavRoute },
    { label: 'Contact', route: 'contact' as NavRoute },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        isDarkMode
          ? 'bg-neutral-950/90 border-neutral-800/80 text-white backdrop-blur-xl'
          : 'bg-white/90 border-slate-200/90 text-slate-900 backdrop-blur-xl shadow-xs'
      }`}
    >
      {/* 1. Sleek Modern Sports Ribbon (Micro-Strip) */}
      <div
        className={`px-3 sm:px-6 py-1 text-[11px] border-b transition-colors ${
          isDarkMode
            ? 'bg-neutral-900/95 border-neutral-800/60 text-neutral-300'
            : 'bg-slate-100/95 border-slate-200 text-slate-700'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Live Marquee Item */}
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="flex items-center gap-1 px-1.5 py-0.5 bg-red-600 text-white font-extrabold text-[9px] uppercase tracking-wider rounded-xs shrink-0 shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              LIVE
            </span>
            <span className="truncate font-mono-numbers text-[11px] font-medium transition-all duration-300">
              {LIVE_TICKER_ITEMS[tickerIndex]}
            </span>
          </div>

          {/* Quick Info Badges */}
          <div
            className={`hidden md:flex items-center gap-3 text-[11px] shrink-0 font-medium ${
              isDarkMode ? 'text-neutral-400' : 'text-slate-500'
            }`}
          >
            <div className="flex items-center gap-1 font-mono text-[10.5px]">
              <MapPin className="w-3 h-3 text-red-500" />
              <span>Vadodara, Gujarat</span>
            </div>
            <span className="opacity-40">/</span>
            <span className="font-mono text-[10.5px] text-red-500 font-semibold">
              Floodlit Arena & Courts
            </span>
            <span className="opacity-40">/</span>
            <span className="font-mono text-[10.5px]">Open Daily 06:00 - 23:00 IST</span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar (Clean, Balanced, Modern) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-15 sm:h-16 flex items-center justify-between gap-3">
        {/* Left: Typography Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 text-left shrink-0"
          aria-label="Tiara Sports Club Vadodara"
        >
          <TiaraBrandLogo isLightMode={!isDarkMode} size="sm" />
        </button>

        {/* Center: Curated Navigation Links with Modern Segmented Styling */}
        <nav
          className="hidden lg:flex items-center gap-0.5 xl:gap-1 text-xs font-bold uppercase tracking-wider"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;

            if (item.isDropdown) {
              return (
                <div key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setSportsDropdownOpen(!sportsDropdownOpen)}
                    onMouseEnter={() => setSportsDropdownOpen(true)}
                    className={`px-2.5 xl:px-3 py-1.5 rounded-sm transition-all flex items-center gap-1 cursor-pointer ${
                      isActive || sportsDropdownOpen
                        ? 'text-red-600 bg-red-600/10 font-extrabold'
                        : isDarkMode
                        ? 'text-neutral-300 hover:text-white hover:bg-neutral-800/60'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${sportsDropdownOpen ? 'rotate-180 text-red-600' : ''}`} />
                  </button>

                  {/* Sports Mega-Dropdown Card */}
                  {sportsDropdownOpen && (
                    <div
                      onMouseLeave={() => setSportsDropdownOpen(false)}
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-84 sm:w-96 rounded-sm border p-4 shadow-2xl z-50 animate-fadeIn backdrop-blur-xl ${
                        isDarkMode
                          ? 'bg-neutral-900/95 border-neutral-800 text-white shadow-black/60'
                          : 'bg-white/95 border-slate-200 text-slate-900 shadow-slate-300/40'
                      }`}
                    >
                      <div className="flex items-center justify-between border-b pb-2 mb-3 border-neutral-700/40">
                        <span className="text-[10px] font-mono font-bold tracking-widest text-red-600 uppercase">
                          VADODARA SPORTS DISCIPLINES
                        </span>
                        <span className={`text-[10px] ${isDarkMode ? 'text-neutral-400' : 'text-slate-500'}`}>
                          4 Disciplines & Arenas
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-left">
                        {MULTI_SPORTS_LIST.map((sport) => (
                          <button
                            key={sport.id}
                            onClick={() => {
                              setSportsDropdownOpen(false);
                              onNavigate('facilities');
                            }}
                            className={`p-2 rounded-xs border text-left transition-colors cursor-pointer group flex items-start gap-2 ${
                              isDarkMode
                                ? 'bg-neutral-950/70 border-neutral-800 hover:border-red-600 hover:bg-neutral-800'
                                : 'bg-slate-50 border-slate-200 hover:border-red-500 hover:bg-slate-100'
                            }`}
                          >
                            <div className="p-1.5 rounded-xs bg-red-600/10 text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                              <SportIcon sportId={sport.id} className="w-4.5 h-4.5" size={18} />
                            </div>
                            <div className="overflow-hidden">
                              <span className="text-xs font-bold block truncate group-hover:text-red-600 transition-colors">
                                {sport.name}
                              </span>
                              <span className={`text-[10px] block truncate ${isDarkMode ? 'text-neutral-400' : 'text-slate-500'}`}>
                                {sport.courts}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>

                      <div className="pt-3 mt-3 border-t border-neutral-700/40 flex items-center justify-between">
                        <button
                          onClick={() => {
                            setSportsDropdownOpen(false);
                            onNavigate('facilities');
                          }}
                          className="text-[11px] font-bold text-red-600 hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <span>Explore Sports & Facilities</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => {
                            setSportsDropdownOpen(false);
                            onOpenBooking();
                          }}
                          className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white text-[10px] font-bold uppercase rounded-xs cursor-pointer"
                        >
                          Book Any Slot
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.route)}
                className={`px-2.5 xl:px-3 py-1.5 rounded-sm transition-all cursor-pointer ${
                  isActive
                    ? 'text-red-600 bg-red-600/10 font-extrabold shadow-2xs'
                    : isDarkMode
                    ? 'text-neutral-300 hover:text-white hover:bg-neutral-800/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Modern Actions Zone */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleDarkMode}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`p-1.5 sm:p-2 rounded-sm border transition-colors cursor-pointer ${
              isDarkMode
                ? 'border-neutral-800 bg-neutral-900 text-amber-400 hover:bg-neutral-800'
                : 'border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-slate-800" />}
          </button>

          {/* Quick Slot Inquiry Action */}
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm bg-red-600 hover:bg-red-500 text-white transition-all shadow-md shadow-red-600/20 cursor-pointer whitespace-nowrap active:scale-98"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Slot Inquiry</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Open navigation menu"
            className={`lg:hidden p-1.5 sm:p-2 rounded-sm border transition-colors cursor-pointer ${
              isDarkMode
                ? 'text-neutral-300 border-neutral-800 hover:bg-neutral-800 hover:text-white'
                : 'text-slate-700 border-slate-300 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* 3. Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-4 pt-3 pb-6 animate-fadeIn shadow-2xl backdrop-blur-xl ${
            isDarkMode
              ? 'bg-neutral-950/98 border-neutral-800 text-white'
              : 'bg-white/98 border-slate-200 text-slate-900'
          }`}
        >
          {/* Quick Sports Grid */}
          <div className="mb-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-red-600 uppercase block mb-2">
              QUICK SPORTS ACCESS
            </span>
            <div className="grid grid-cols-3 gap-2">
              {MULTI_SPORTS_LIST.slice(0, 6).map((sport) => (
                <button
                  key={sport.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('facilities');
                  }}
                  className={`p-2 rounded-xs border text-center transition-colors cursor-pointer ${
                    isDarkMode
                      ? 'bg-neutral-900 border-neutral-800 hover:border-red-600'
                      : 'bg-slate-50 border-slate-200 hover:border-red-500'
                  }`}
                >
                  <div className="flex justify-center mb-1 text-red-600">
                    <SportIcon sportId={sport.id} className="w-5 h-5" size={20} />
                  </div>
                  <span className="text-[11px] font-bold block truncate">{sport.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Page Links */}
          <div className="space-y-1 border-t pt-3 border-neutral-800/60">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.route)}
                className={`w-full text-left px-3 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-between cursor-pointer ${
                  currentRoute === item.route
                    ? 'bg-red-600/15 text-red-600 font-extrabold'
                    : isDarkMode
                    ? 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-40" />
              </button>
            ))}
          </div>

          {/* Mobile CTAs */}
          <div className="pt-4 mt-2 border-t border-neutral-800/60 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white bg-red-600 rounded-sm shadow-sm cursor-pointer hover:bg-red-500 transition-colors"
              >
                Slot Inquiry
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider rounded-sm border cursor-pointer transition-colors ${
                  isDarkMode
                    ? 'text-neutral-200 bg-neutral-900 border-neutral-700 hover:bg-neutral-800 hover:text-white'
                    : 'text-slate-800 bg-slate-100 border-slate-300 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                Contact Desk
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
