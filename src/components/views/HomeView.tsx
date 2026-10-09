import React, { useState } from 'react';
import { NavRoute } from '../../types';
import {
  GYM_IMAGE,
  PICKLEBALL_IMAGE,
  BADMINTON_GYM_IMAGE,
  TENNIS_COURT_IMAGE,
  TROPHY_IMAGE,
  ARENA_COMPLEX_IMAGE,
  MULTI_SPORTS_LIST,
  RECENT_MATCH_RESULTS,
  STANDINGS_DATA,
  ACHIEVEMENTS_TIMELINE,
  BLOG_POSTS,
  CLUB_LOCATION,
} from '../../data/clubData';
import {
  ArrowRight,
  Flame,
  Calendar,
  Activity,
  MapPin,
  Trophy,
  CheckCircle2,
  Clock,
  Sparkles,
  ChevronRight,
  Zap,
  Navigation,
  ShieldCheck,
  Compass,
  Thermometer,
  Building2,
  Car,
} from 'lucide-react';
import { SportIcon } from '../SportsThemeIcon';
import { TurfSlotBookingWidget } from '../TurfSlotBookingWidget';

const HERO_ARENAS = [
  {
    id: 'tennis',
    name: 'Tennis Championship Arena',
    category: 'Tennis Center',
    badge: 'PRO TOURNAMENT REGULATION',
    image: TENNIS_COURT_IMAGE,
    surface: 'ITF Pro Cushioned Championship Acrylic',
    lighting: '1,200 LUX Anti-Glare High-Mast LED Array',
    courtCount: 'Championship Tournament Arena',
    schedule: 'Open sessions daily from 06:00',
    facilityId: 'fac-tennis',
  },
  {
    id: 'pickleball',
    name: 'Pro Pickleball Arena',
    category: 'Pickleball Hub',
    badge: 'PRO REGULATION ARENA',
    image: PICKLEBALL_IMAGE,
    surface: '4-Layer Cushioned True-Bounce Acrylic (USAPA Approved)',
    lighting: '800 LUX Tournament Indirect Illumination',
    courtCount: 'Competition Pickleball Arena',
    schedule: 'Doubles open play daily from 18:00',
    facilityId: 'fac-pickleball',
  },
  {
    id: 'badminton',
    name: 'BWF Teak Wood Badminton Hall',
    category: 'Badminton Hall',
    badge: 'SPRUNG TEAK WOOD FLOORING',
    image: BADMINTON_GYM_IMAGE,
    surface: 'First-Grade Sprung Teak Wood (40% Shock Absorption)',
    lighting: '900 LUX Shadowless Overhead Grid',
    courtCount: 'BWF Certified Teak Arena',
    schedule: 'Sessions available for morning & evening',
    facilityId: 'fac-badminton',
  },
  {
    id: 'gym',
    name: 'Gym',
    category: 'Strength & Biomechanics Suite',
    badge: 'HIGH-PERFORMANCE GYM',
    image: GYM_IMAGE,
    surface: 'Swedish Eleiko Lifting Platforms & Hammer Strength Iso-Lateral',
    lighting: 'Circadian Athletic Performance Lighting',
    courtCount: 'Strength & Conditioning Floor',
    schedule: 'Open 06:00 – 22:30 Daily',
    facilityId: 'fac-gym',
  },
];

interface HomeViewProps {
  onNavigate: (route: NavRoute) => void;
  onOpenBooking: (facilityId?: string) => void;
  isDarkMode?: boolean;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenBooking,
  isDarkMode = true,
}) => {
  const [heroActiveArenaIndex, setHeroActiveArenaIndex] = useState<number>(0);
  const [selectedSportTab, setSelectedSportTab] = useState<string>('tennis');
  const [selectedTournament, setSelectedTournament] = useState<'Champions Cup' | 'EFA Cup' | 'Liga Premier'>('Champions Cup');
  const [selectedTimelineYear, setSelectedTimelineYear] = useState<number>(2024);
  const [selectedMatchResultIndex, setSelectedMatchResultIndex] = useState<number>(0);

  const activeHeroArena = HERO_ARENAS[heroActiveArenaIndex];
  const activeMatch = RECENT_MATCH_RESULTS[selectedMatchResultIndex];
  const activeMilestone =
    ACHIEVEMENTS_TIMELINE.find((m) => m.year === selectedTimelineYear) ||
    ACHIEVEMENTS_TIMELINE[ACHIEVEMENTS_TIMELINE.length - 1];

  const currentSport =
    MULTI_SPORTS_LIST.find((s) => s.id === selectedSportTab) || MULTI_SPORTS_LIST[0];

  return (
    <div
      className={`min-h-screen transition-colors ${
        isDarkMode ? 'bg-neutral-950 text-neutral-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* 1. HERO SECTION - Senior Designer Multi-Sport Architectural Stage */}
      <section
        className={`relative overflow-hidden border-b pt-8 pb-14 lg:pt-14 lg:pb-20 ${
          isDarkMode
            ? 'bg-neutral-950 border-neutral-900'
            : 'bg-white border-slate-200'
        }`}
      >
        {/* Subtle architectural athletic grid */}
        <div
          className={`absolute inset-0 pointer-events-none opacity-[0.04] ${
            isDarkMode ? 'invert-0' : 'invert'
          }`}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #dc2626 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Bold Multi-Sport Athletic Editorial Typography */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 border text-[11px] font-mono font-bold uppercase tracking-widest rounded-xs ${
                    isDarkMode
                      ? 'bg-red-600/10 border-red-600/30 text-red-500'
                      : 'bg-red-50 border-red-200 text-red-600'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5 text-red-600 animate-pulse" />
                  <span>PREMIER 12-ACRE ATHLETIC CAMPUS · VADODARA</span>
                </div>
                <span className={`text-[11px] font-mono font-bold uppercase ${isDarkMode ? 'text-neutral-500' : 'text-slate-400'}`}>
                  EST. 2012
                </span>
              </div>

              <div className="space-y-1">
                <span className={`block font-mono text-xs uppercase tracking-widest font-bold ${isDarkMode ? 'text-neutral-400' : 'text-slate-500'}`}>
                  GUJARAT'S FLAGSHIP MULTI-SPORT INSTITUTION
                </span>
                <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.92]">
                  TIARA SPORTS CLUB <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-amber-400">
                    VADODARA, GUJARAT
                  </span>
                </h1>
                <p className={`text-base sm:text-lg font-bold tracking-tight mt-2 ${isDarkMode ? 'text-neutral-300' : 'text-slate-700'}`}>
                  TENNIS · PRO PICKLEBALL · BWF BADMINTON · GYM
                </p>
              </div>

              <p
                className={`text-xs sm:text-sm leading-relaxed max-w-xl ${
                  isDarkMode ? 'text-neutral-400' : 'text-slate-600'
                }`}
              >
                Tiara Sports Club, Besides Red Coral greens, opposite Nayara petrol pump, Sama-Savli Road Vadodara. Vadodara’s premier destination for competitive athletes and sports lovers. 
                Featuring international championship tennis facilities, dedicated pickleball arenas, 
                BWF teak badminton halls, and a high-performance gym facility.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => onOpenBooking(activeHeroArena.facilityId)}
                  className="px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-widest rounded-xs transition-all shadow-xl shadow-red-600/25 cursor-pointer flex items-center gap-2 group"
                >
                  <span>SLOT & FACILITY INQUIRY</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className={`px-5 py-3.5 font-bold text-xs uppercase tracking-widest rounded-xs transition-all cursor-pointer flex items-center gap-2 border ${
                    isDarkMode
                      ? 'bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border-neutral-700'
                      : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-xs'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>GOOGLE MAP & VENUE</span>
                </button>

                <button
                  onClick={() => onNavigate('facilities')}
                  className={`px-4 py-3.5 text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer flex items-center gap-1.5 ${
                    isDarkMode ? 'text-neutral-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <ChevronRight className="w-3.5 h-3.5 text-red-500" />
                  <span>ALL FACILITIES</span>
                </button>
              </div>

              {/* Live Campus Telemetry Strip */}
              <div
                className={`p-3.5 rounded-xs border text-xs font-mono space-y-1.5 ${
                  isDarkMode ? 'bg-neutral-900/60 border-neutral-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className={`font-bold uppercase text-[11px] ${isDarkMode ? 'text-neutral-200' : 'text-slate-800'}`}>
                      CAMPUS ACTIVE · COURTS OPEN TILL 23:00 IST
                    </span>
                  </div>
                  <span className="text-red-500 font-bold text-[11px]">
                    SAMA-SAVLI ROAD, VADODARA
                  </span>
                </div>
                <div className={`text-[11px] flex flex-wrap items-center gap-3 ${isDarkMode ? 'text-neutral-400' : 'text-slate-500'}`}>
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <Thermometer className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    28°C Vadodara Live
                  </span>
                  <span className="opacity-40">·</span>
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <Building2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    16+ Championship Arenas
                  </span>
                  <span className="opacity-40">·</span>
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <Car className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    200+ Free Parking Bays
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Senior Designer Dynamic Stadium Viewport & Arena Console */}
            <div className="lg:col-span-6 space-y-3">
              {/* Arena Channel Switcher Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
                {HERO_ARENAS.map((arena, index) => {
                  const isActive = heroActiveArenaIndex === index;
                  return (
                    <button
                      key={arena.id}
                      onClick={() => setHeroActiveArenaIndex(index)}
                      className={`px-3 py-1.5 rounded-xs text-[11px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-red-600 text-white shadow-sm'
                          : isDarkMode
                          ? 'bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                      }`}
                    >
                      <span className={isActive ? 'text-white' : 'text-red-500'}>0{index + 1}</span>
                      <span>{arena.id === 'tennis' ? 'Tennis' : arena.id === 'pickleball' ? 'Pickleball' : arena.id === 'badminton' ? 'Badminton' : 'Gym'}</span>
                    </button>
                  );
                })}
              </div>

              {/* Main Stadium Console Stage */}
              <div
                className={`relative rounded-xs overflow-hidden border shadow-2xl transition-all ${
                  isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-slate-900 border-slate-700'
                }`}
              >
                {/* Stadium Photography Viewport */}
                <div className="relative h-[380px] sm:h-[430px] w-full overflow-hidden">
                  <img
                    src={activeHeroArena.image}
                    alt={activeHeroArena.name}
                    className="w-full h-full object-cover object-center transition-all duration-700 filter brightness-95 contrast-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle athletic gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/40 via-transparent to-neutral-950/20" />

                  {/* Top HUD Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <div className="px-3 py-1 bg-black/75 backdrop-blur-md border border-white/10 rounded-xs text-[10px] font-mono font-bold tracking-widest text-red-400 uppercase">
                      {activeHeroArena.badge}
                    </div>
                    <div className="px-3 py-1 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 rounded-xs text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>{activeHeroArena.courtCount}</span>
                    </div>
                  </div>

                  {/* Bottom Architectural HUD Console */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-neutral-950 via-neutral-950/95 to-transparent space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-mono font-bold tracking-widest text-red-500 uppercase block">
                          TIARA VENUE SPOTLIGHT · VADODARA
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                          {activeHeroArena.name}
                        </h3>
                        <p className="text-[11px] text-neutral-300 font-mono mt-0.5 line-clamp-1">
                          Surface: {activeHeroArena.surface}
                        </p>
                      </div>

                      <button
                        onClick={() => onOpenBooking(activeHeroArena.facilityId)}
                        className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer shrink-0 transition-colors flex items-center gap-1.5 shadow-md shadow-red-600/30"
                      >
                        <span>Reserve Arena</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Arena Specs Telemetry Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 border-t border-white/10 text-[10px] font-mono text-neutral-300">
                      <div>
                        <span className="text-neutral-500 block uppercase">LIGHTING</span>
                        <span className="font-bold truncate block">{activeHeroArena.lighting}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500 block uppercase">AVAILABILITY</span>
                        <span className="font-bold text-emerald-400 truncate block">{activeHeroArena.schedule}</span>
                      </div>
                      <div className="hidden sm:block">
                        <span className="text-neutral-500 block uppercase">LOCATION</span>
                        <span className="font-bold truncate block">Vadodara Campus</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 4-Discipline Metric Ribbon */}
          <div
            className={`pt-8 border-t grid grid-cols-2 sm:grid-cols-4 gap-4 ${
              isDarkMode ? 'border-neutral-900' : 'border-slate-200'
            }`}
          >
            <div 
              onClick={() => { setHeroActiveArenaIndex(0); }}
              className={`p-3 rounded-xs border transition-all cursor-pointer ${
                heroActiveArenaIndex === 0
                  ? 'border-red-600 bg-red-600/10'
                  : isDarkMode ? 'border-neutral-900 bg-neutral-900/30 hover:border-neutral-800' : 'border-slate-200 bg-slate-50 hover:border-slate-300'
              }`}
            >
              <div className="font-display text-xl font-black text-red-600 uppercase">
                TOURNAMENT ARENA
              </div>
              <div className={`text-[11px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-neutral-200' : 'text-slate-800'}`}>
                Tennis
              </div>
              <div className={`text-[10px] font-mono ${isDarkMode ? 'text-neutral-500' : 'text-slate-500'}`}>
                Championship Tournament Decks
              </div>
            </div>

            <div 
              onClick={() => { setHeroActiveArenaIndex(1); }}
              className={`p-3 rounded-xs border transition-all cursor-pointer ${
                heroActiveArenaIndex === 1
                  ? 'border-red-600 bg-red-600/10'
                  : isDarkMode ? 'border-neutral-900 bg-neutral-900/30 hover:border-neutral-800' : 'border-slate-200 bg-slate-50 hover:border-slate-300'
              }`}
            >
              <div className="font-display text-xl font-black text-red-600 uppercase">
                PRO ARENA
              </div>
              <div className={`text-[11px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-neutral-200' : 'text-slate-800'}`}>
                Pickleball Arena
              </div>
              <div className={`text-[10px] font-mono ${isDarkMode ? 'text-neutral-500' : 'text-slate-500'}`}>
                USAPA Cushioned Acrylic
              </div>
            </div>

            <div 
              onClick={() => { setHeroActiveArenaIndex(2); }}
              className={`p-3 rounded-xs border transition-all cursor-pointer ${
                heroActiveArenaIndex === 2
                  ? 'border-red-600 bg-red-600/10'
                  : isDarkMode ? 'border-neutral-900 bg-neutral-900/30 hover:border-neutral-800' : 'border-slate-200 bg-slate-50 hover:border-slate-300'
              }`}
            >
              <div className="font-display text-xl font-black text-red-600 uppercase">
                BWF TEAK HALL
              </div>
              <div className={`text-[11px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-neutral-200' : 'text-slate-800'}`}>
                BWF Badminton
              </div>
              <div className={`text-[10px] font-mono ${isDarkMode ? 'text-neutral-500' : 'text-slate-500'}`}>
                Sprung Teak Wood Flooring
              </div>
            </div>

            <div 
              onClick={() => { setHeroActiveArenaIndex(3); }}
              className={`p-3 rounded-xs border transition-all cursor-pointer ${
                heroActiveArenaIndex === 3
                  ? 'border-red-600 bg-red-600/10'
                  : isDarkMode ? 'border-neutral-900 bg-neutral-900/30 hover:border-neutral-800' : 'border-slate-200 bg-slate-50 hover:border-slate-300'
              }`}
            >
              <div className="font-display text-xl font-black text-red-600 uppercase">
                STRENGTH SUITE
              </div>
              <div className={`text-[11px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-neutral-200' : 'text-slate-800'}`}>
                Gym & Conditioning
              </div>
              <div className={`text-[10px] font-mono ${isDarkMode ? 'text-neutral-500' : 'text-slate-500'}`}>
                Swedish Barbell Decks & Iso-Lateral
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MULTI-SPORTS EXPLORER MODULE (Task 3 & 6) */}
      <section
        className={`py-16 sm:py-20 border-b ${
          isDarkMode
            ? 'bg-neutral-900/40 border-neutral-900'
            : 'bg-white border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-red-600 text-xs font-bold uppercase tracking-widest block font-mono">
                EVERY DISCIPLINE · WORLD-CLASS STANDARDS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mt-1">
                OUR SPORTS DISCIPLINES AT TIARA
              </h2>
              <p
                className={`text-xs sm:text-sm mt-2 max-w-xl ${
                  isDarkMode ? 'text-neutral-400' : 'text-slate-600'
                }`}
              >
                Select a sport to explore court specifications, floodlighting, training academies, and
                live booking availability.
              </p>
            </div>

            {/* Sport Tab Switchers */}
            <div
              className={`flex items-center gap-1 p-1 border rounded-xs flex-wrap ${
                isDarkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-slate-100 border-slate-300'
              }`}
            >
              {MULTI_SPORTS_LIST.map((sport) => (
                <button
                  key={sport.id}
                  onClick={() => setSelectedSportTab(sport.id)}
                  className={`px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedSportTab === sport.id
                      ? 'bg-red-600 text-white shadow-xs'
                      : isDarkMode
                      ? 'text-neutral-400 hover:text-white'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <SportIcon sportId={sport.id} className="w-4 h-4 shrink-0" size={16} />
                  <span>{sport.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Sport Spotlight Card */}
          <div
            className={`border rounded-xs p-6 sm:p-8 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
              isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="lg:col-span-6 relative rounded-xs overflow-hidden h-72 sm:h-96 border border-neutral-800/40">
              <img
                src={currentSport.image}
                alt={currentSport.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-xs font-mono">
                {currentSport.badge}
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 backdrop-blur-xs text-white text-xs rounded-xs flex items-center justify-between font-mono-numbers">
                <span>{currentSport.courts}</span>
                <span className="text-emerald-400 font-bold">{currentSport.openSlots}</span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-red-500 text-xs font-mono font-bold uppercase tracking-widest block">
                  TIARA SPORTS CLUB · VADODARA CAMPUS
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight mt-1">
                  {currentSport.name}
                </h3>
              </div>

              <p
                className={`text-sm leading-relaxed ${
                  isDarkMode ? 'text-neutral-300' : 'text-slate-700'
                }`}
              >
                {currentSport.desc}
              </p>

              {/* Amenities */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-500 font-mono block">
                  FACILITY FEATURES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentSport.amenities.map((item) => (
                    <div
                      key={item}
                      className={`flex items-center gap-2 text-xs ${
                        isDarkMode ? 'text-neutral-300' : 'text-slate-700'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenBooking(currentSport.id)}
                  className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-xs transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Slot Now</span>
                </button>
                <button
                  onClick={() => onNavigate('facilities')}
                  className={`px-5 py-3 text-xs font-bold uppercase tracking-wider rounded-xs border transition-colors cursor-pointer ${
                    isDarkMode
                      ? 'border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800'
                      : 'border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  View All Court Specs
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Turf Slot Timetable & Live Availability Checker */}
          <div className="pt-4">
            <TurfSlotBookingWidget onOpenBooking={onOpenBooking} isDarkMode={isDarkMode} />
          </div>
        </div>
      </section>

      {/* 3. LIVE MATCH SCOREBOARD (Commented out per user request) */}
      {/*
      <section
        className={`py-8 border-b ${
          isDarkMode
            ? 'bg-neutral-900/60 border-neutral-800'
            : 'bg-slate-100 border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`border rounded-xs p-6 shadow-xl ${
              isDarkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest">
                  <span className="h-2 w-2 rounded-full bg-red-600 animate-ping" />
                  <span>GUJARAT STATE LAWN TENNIS CHAMPIONSHIP</span>
                </div>
                <div
                  className={`text-xs mt-1 flex items-center gap-1 ${
                    isDarkMode ? 'text-neutral-400' : 'text-slate-500'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>Tiara Sports Club, Tennis Arena, Vadodara</span>
                </div>
              </div>

              <div className="flex items-center gap-6 sm:gap-10">
                <div className="text-right">
                  <div className="text-xs uppercase font-bold text-red-500 tracking-wider">
                    TIARA ROYALS (VADODARA)
                  </div>
                  <div className={`text-xs font-mono-numbers ${isDarkMode ? 'text-neutral-500' : 'text-slate-500'}`}>
                    HOME (SETS: 3)
                  </div>
                </div>

                <div
                  className={`flex items-center gap-4 px-6 py-2 border rounded-xs ${
                    isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-slate-50 border-slate-300'
                  }`}
                >
                  <span className="font-display text-4xl sm:text-5xl font-black font-mono-numbers">
                    3
                  </span>
                  <span className="font-display text-3xl font-light text-neutral-400">-</span>
                  <span className="font-display text-4xl sm:text-5xl font-black font-mono-numbers text-neutral-400">
                    1
                  </span>
                </div>

                <div className="text-left">
                  <div
                    className={`text-xs uppercase font-bold tracking-wider ${
                      isDarkMode ? 'text-neutral-300' : 'text-slate-800'
                    }`}
                  >
                    AHMEDABAD ACES
                  </div>
                  <div className={`text-xs font-mono-numbers ${isDarkMode ? 'text-neutral-500' : 'text-slate-500'}`}>
                    AWAY (SETS: 1)
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-center md:text-right">
                <div className="text-xs font-mono-numbers">
                  <span className="text-emerald-500 font-bold block">MATCH FINAL</span>
                  <span className={`text-[11px] ${isDarkMode ? 'text-neutral-500' : 'text-slate-500'}`}>
                    6-4 · 4-6 · 6-3 · 7-5
                  </span>
                </div>
                <button
                  onClick={() => onOpenBooking('tennis')}
                  className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-xs border transition-colors cursor-pointer ${
                    isDarkMode
                      ? 'bg-neutral-900 hover:bg-neutral-800 text-white border-neutral-700'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border-slate-300'
                  }`}
                >
                  Inquire Tennis Court
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* 4. LEADERBOARDS & TOURNAMENT STANDINGS (Commented out per user request) */}
      {/*
      <section
        className={`py-16 sm:py-20 border-b ${
          isDarkMode
            ? 'bg-neutral-950 border-neutral-900'
            : 'bg-slate-50 border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-red-600 text-xs font-bold uppercase tracking-widest block font-mono">
                REGIONAL ATHLETIC LEAGUES
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mt-1">
                TIARA STANDINGS & POINTS TABLE
              </h2>
            </div>

            <div
              className={`flex items-center gap-1 p-1 border rounded-xs ${
                isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-slate-300'
              }`}
            >
              {(['Champions Cup', 'EFA Cup', 'Liga Premier'] as const).map((tourney) => (
                <button
                  key={tourney}
                  onClick={() => setSelectedTournament(tourney)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                    selectedTournament === tourney
                      ? 'bg-red-600 text-white shadow-xs'
                      : isDarkMode
                      ? 'text-neutral-400 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tourney}
                </button>
              ))}
            </div>
          </div>

          <div
            className={`border rounded-xs overflow-hidden shadow-xl ${
              isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono-numbers">
                <thead
                  className={`uppercase text-[11px] tracking-wider border-b ${
                    isDarkMode
                      ? 'bg-neutral-950 text-neutral-400 border-neutral-800'
                      : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}
                >
                  <tr>
                    <th className="py-3 px-4 w-12 text-center">POS</th>
                    <th className="py-3 px-4">CLUB / TEAM</th>
                    <th className="py-3 px-3 text-right">W</th>
                    <th className="py-3 px-3 text-right">L</th>
                    <th className="py-3 px-3 text-right">PCT</th>
                    <th className="py-3 px-3 text-right">GB</th>
                    <th className="py-3 px-3 text-right">L10</th>
                    <th className="py-3 px-4 text-center">STREAK</th>
                  </tr>
                </thead>
                <tbody
                  className={`divide-y ${
                    isDarkMode ? 'divide-neutral-800' : 'divide-slate-200'
                  }`}
                >
                  {STANDINGS_DATA[selectedTournament].map((row) => (
                    <tr
                      key={row.club}
                      className={`hover:bg-red-600/5 transition-colors ${
                        row.isSportizai
                          ? isDarkMode
                            ? 'bg-red-950/25 font-bold text-white'
                            : 'bg-red-50 font-bold text-red-950'
                          : isDarkMode
                          ? 'text-neutral-300'
                          : 'text-slate-700'
                      }`}
                    >
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`inline-flex items-center justify-center w-5 h-5 rounded-xs text-[11px] font-bold ${
                            row.rank === 1
                              ? 'bg-red-600 text-white'
                              : isDarkMode
                              ? 'text-neutral-400'
                              : 'text-slate-500'
                          }`}
                        >
                          {row.rank}
                        </span>
                      </td>
                      <td className="py-3 px-4 flex items-center gap-2 font-display text-sm uppercase tracking-wide">
                        <span>{row.club}</span>
                        {row.isSportizai && (
                          <span className="text-[10px] text-red-600 border border-red-500/40 px-1 py-0.2 rounded-xs uppercase tracking-widest font-mono">
                            OUR CLUB
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-right text-emerald-500 font-bold">{row.w}</td>
                      <td className="py-3 px-3 text-right">{row.l}</td>
                      <td className="py-3 px-3 text-right">{row.pct}</td>
                      <td className="py-3 px-3 text-right">{row.gb}</td>
                      <td className="py-3 px-3 text-right">{row.l10}</td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`px-2 py-0.5 rounded-xs text-[10px] font-bold ${
                            row.streak.startsWith('W')
                              ? 'text-emerald-500 bg-emerald-500/10'
                              : 'text-neutral-500 bg-neutral-500/10'
                          }`}
                        >
                          {row.streak}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* 5. HISTORICAL TIMELINE & VADODARA HERITAGE */}
      <section
        className={`py-16 sm:py-20 border-b ${
          isDarkMode
            ? 'bg-neutral-950 border-neutral-900'
            : 'bg-white border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-red-600 text-xs font-bold uppercase tracking-widest block font-mono">
              ESTABLISHED 2012 · VADODARA, GUJARAT
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mt-1">
              TIARA HERITAGE & TROPHIES
            </h2>
            <p
              className={`text-xs sm:text-sm mt-2 ${
                isDarkMode ? 'text-neutral-400' : 'text-slate-600'
              }`}
            >
              Over a decade of multi-sport excellence and hosting international players.
            </p>
          </div>

          {/* Year Selector */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {ACHIEVEMENTS_TIMELINE.map((milestone) => (
              <button
                key={milestone.year}
                onClick={() => setSelectedTimelineYear(milestone.year)}
                className={`px-5 py-2 font-display text-lg font-extrabold uppercase rounded-xs transition-all cursor-pointer font-mono-numbers ${
                  selectedTimelineYear === milestone.year
                    ? 'bg-red-600 text-white shadow-lg scale-105'
                    : isDarkMode
                    ? 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-300'
                }`}
              >
                {milestone.year}
              </button>
            ))}
          </div>

          {/* Trophy Milestone Detail */}
          <div
            className={`border rounded-xs p-8 max-w-4xl mx-auto shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${
              isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="md:col-span-5 relative rounded-xs overflow-hidden h-64 border border-neutral-800/40">
              <img
                src={TROPHY_IMAGE}
                alt="Tiara Sports Club Championship Trophies in Vadodara"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span>{activeMilestone.trophy}</span>
                </span>
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <span className="text-red-500 font-mono text-xs font-bold uppercase tracking-widest block">
                YEAR {activeMilestone.year} · VADODARA HONOUR
              </span>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
                {activeMilestone.title}
              </h3>

              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isDarkMode ? 'text-neutral-300' : 'text-slate-700'
                }`}
              >
                {activeMilestone.description}
              </p>

              <div
                className={`grid grid-cols-2 gap-4 pt-3 border-t text-xs font-mono-numbers ${
                  isDarkMode ? 'border-neutral-800' : 'border-slate-200'
                }`}
              >
                <div>
                  <span className={`text-[10px] uppercase block ${isDarkMode ? 'text-neutral-500' : 'text-slate-500'}`}>
                    HONOUR
                  </span>
                  <span className="font-bold">{activeMilestone.record}</span>
                </div>
                <div>
                  <span className={`text-[10px] uppercase block ${isDarkMode ? 'text-neutral-500' : 'text-slate-500'}`}>
                    CLUB CAPTAIN / MVP
                  </span>
                  <span className="text-red-600 font-bold">{activeMilestone.mvp}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer"
                >
                  Explore Tiara Heritage
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LATEST FROM TIARA SPORTS BLOG */}
      <section
        className={`py-16 sm:py-20 border-b ${
          isDarkMode
            ? 'bg-neutral-950 border-neutral-900'
            : 'bg-slate-50 border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-red-600 text-xs font-bold uppercase tracking-widest block font-mono">
                  EDITORIAL & COACHING INSIGHTS · VADODARA
                </span>
                <span className="px-2 py-0.5 bg-red-600/20 text-red-500 border border-red-600/40 text-[10px] font-mono font-bold uppercase rounded-xs">
                  10 A-Z GUIDES
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mt-1">
                LATEST FROM TIARA SPORTS BLOG
              </h2>
              <p
                className={`text-xs sm:text-sm mt-2 max-w-xl ${
                  isDarkMode ? 'text-neutral-400' : 'text-slate-600'
                }`}
              >
                In-depth A-Z athlete manuals, tennis footwork mechanics, tactical strategies, and tournament news written by club directors.
              </p>
            </div>

            <button
              onClick={() => onNavigate('blog')}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer flex items-center gap-2 shrink-0 self-start sm:self-end"
            >
              <span>Explore All 10 Sports Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <article
                key={post.id}
                onClick={() => onNavigate('blog')}
                className={`border rounded-xs overflow-hidden cursor-pointer transition-all group flex flex-col justify-between ${
                  isDarkMode
                    ? 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/80 text-red-400 text-[10px] font-bold uppercase rounded-xs font-mono">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div
                      className={`text-[11px] flex items-center gap-2 font-mono ${
                        isDarkMode ? 'text-neutral-500' : 'text-slate-500'
                      }`}
                    >
                      <Clock className="w-3 h-3 text-red-500" />
                      <span>{post.readTime}</span>
                      <span>·</span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="font-display text-lg font-bold uppercase group-hover:text-red-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p
                      className={`text-xs line-clamp-2 leading-relaxed ${
                        isDarkMode ? 'text-neutral-400' : 'text-slate-600'
                      }`}
                    >
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div
                  className={`p-5 pt-0 text-[11px] font-mono border-t mt-2 pt-3 flex items-center justify-between ${
                    isDarkMode ? 'border-neutral-800 text-neutral-400' : 'border-slate-100 text-slate-500'
                  }`}
                >
                  <span className="truncate">{post.author.split('·')[0]}</span>
                  <span className="text-red-600 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read Article <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION: MEMBERSHIP & RESERVATION */}
      <section
        className={`py-20 text-center relative overflow-hidden ${
          isDarkMode
            ? 'bg-gradient-to-b from-neutral-950 to-neutral-900'
            : 'bg-gradient-to-b from-slate-100 to-white'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 space-y-6 relative z-10">
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs block font-mono">
            JOIN VADODARA'S PREMIER MULTI-SPORT COMMUNITY
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none">
            BECOME A MEMBER OF TIARA SPORTS CLUB
          </h2>
          <p
            className={`text-sm max-w-xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-neutral-400' : 'text-slate-600'
            }`}
          >
            Access our championship tennis arena, pro pickleball arena, BWF badminton hall,
            and high-performance gym. Flexible annual family memberships and pay-and-play sessions available.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-widest rounded-xs transition-colors shadow-xl shadow-red-600/30 cursor-pointer"
            >
              INQUIRE COURT OR GYM SLOT
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`px-8 py-3.5 font-bold text-xs uppercase tracking-widest rounded-xs border transition-colors cursor-pointer ${
                isDarkMode
                  ? 'bg-neutral-900 hover:bg-neutral-800 text-white border-neutral-700'
                  : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
              }`}
            >
              MEMBERSHIP DESK (VADODARA)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
