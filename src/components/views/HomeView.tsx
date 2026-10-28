import React, { useState } from 'react';
import { NavRoute } from '../../types';
import {
  GYM_IMAGE,
  PICKLEBALL_IMAGE,
  BADMINTON_GYM_IMAGE,
  TENNIS_COURT_IMAGE,
  TROPHY_IMAGE,
  ARENA_COMPLEX_IMAGE,
  GYMNASTICS_IMAGE,
  CAFE_IMAGE,
  GROWTH_CARDS,
  CERTIFIED_COACHES,
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
  Users,
  Dumbbell,
} from 'lucide-react';
import { SportIcon } from '../SportsThemeIcon';
import { BrandBar } from '../BrandBar';
import { LOGO, getSportColor, GROWTH_COLORS } from '../../theme/logoTheme';
import TIARA_LOGO from '../../assets/images/tiara-logo.png';
import COACH_DARK from '../../assets/images/coach_placeholder_dark.svg';
import { TurfSlotBookingWidget } from '../TurfSlotBookingWidget';

const HERO_ARENAS = [
  {
    id: 'tennis',
    name: 'Tennis Championship Arena',
    shortName: 'Tennis',
    ribbonTitle: 'TOURNAMENT ARENA',
    ribbonSub: 'Tennis',
    ribbonDesc: 'Championship Tournament Decks',
    category: 'Tennis Center',
    badge: 'PRO TOURNAMENT REGULATION',
    image: TENNIS_COURT_IMAGE,
    surface: 'ITF Pro Cushioned Championship Acrylic',
    lighting: '1,200 LUX Anti-Glare High-Mast LED Array',
    courtCount: 'Championship Tournament Arena',
    schedule: 'Open sessions daily from 06:00',
    facilityId: 'tennis-courts',
  },
  {
    id: 'pickleball',
    name: 'Pro Pickleball Arena',
    shortName: 'Pickleball',
    ribbonTitle: 'PRO ARENA',
    ribbonSub: 'Pickleball Arena',
    ribbonDesc: 'USAPA Cushioned Acrylic',
    category: 'Pickleball Hub',
    badge: 'PRO REGULATION ARENA',
    image: PICKLEBALL_IMAGE,
    surface: '4-Layer Cushioned True-Bounce Acrylic (USAPA Approved)',
    lighting: '800 LUX Tournament Indirect Illumination',
    courtCount: 'Competition Pickleball Arena',
    schedule: 'Doubles open play daily from 18:00',
    facilityId: 'pickleball-center',
  },
  {
    id: 'badminton',
    name: 'BWF Teak Wood Badminton Hall',
    shortName: 'Badminton',
    ribbonTitle: 'BWF TEAK HALL',
    ribbonSub: 'BWF Badminton',
    ribbonDesc: 'Sprung Teak Wood Flooring',
    category: 'Badminton Hall',
    badge: 'SPRUNG TEAK WOOD FLOORING',
    image: BADMINTON_GYM_IMAGE,
    surface: 'First-Grade Sprung Teak Wood (40% Shock Absorption)',
    lighting: '900 LUX Shadowless Overhead Grid',
    courtCount: 'BWF Certified Teak Arena',
    schedule: 'Sessions available for morning & evening',
    facilityId: 'badminton-arena',
  },
  {
    id: 'hyrox',
    name: 'Hyrox Fitness Box',
    shortName: 'Hyrox',
    category: 'Hyrox Training Box',
    badge: 'HYROX RACE TRAINING',
    image: GYM_IMAGE,
    surface: 'Sled Lanes, SkiErg, Rowers, Wall Balls & Running Loop',
    lighting: 'Circadian Athletic Performance Lighting',
    courtCount: 'Hyrox Race-Simulation Floor',
    schedule: 'Open 06:00 – 22:30 Daily',
    facilityId: 'hyrox-fitness-box',
    ribbonTitle: 'HYROX BOX',
    ribbonSub: 'Hyrox Fitness Box',
    ribbonDesc: 'Sleds, SkiErg & Race Heats',
  },
  {
    id: 'gymnastics',
    name: 'Gymnastics Arena',
    shortName: 'Gymnastics',
    category: 'Gymnastics Center',
    badge: 'SPRUNG FLOOR & FOAM PIT',
    image: GYMNASTICS_IMAGE,
    surface: 'Sprung Competition Floor, Beams, Bars & Vault',
    lighting: 'Bright Shadow-Free Arena Lighting',
    courtCount: 'Dedicated Gymnastics Arena',
    schedule: 'Morning & Evening Batches',
    facilityId: 'gymnastics-arena',
    ribbonTitle: 'SPRUNG FLOOR',
    ribbonSub: 'Gymnastics',
    ribbonDesc: 'Kids, Junior & Adult Batches',
  },
  {
    id: 'cafe',
    name: 'Tiara Cafe & Lounge',
    shortName: 'Cafe',
    category: 'Clubhouse Cafe',
    badge: 'POST-GAME RECOVERY & REFRESHMENTS',
    image: CAFE_IMAGE,
    surface: 'Protein Shakes, Fresh Juices, Coffee & Healthy Meals',
    lighting: 'Warm Ambient Lounge Lighting',
    courtCount: 'Court-View Member Lounge',
    schedule: 'Open 06:00 – 23:00 Daily',
    facilityId: 'cafe-lounge',
    ribbonTitle: 'CLUB CAFE',
    ribbonSub: 'Cafe & Lounge',
    ribbonDesc: 'Shakes, Coffee & Healthy Bites',
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
  const [activeSportId, setActiveSportId] = useState<string>('tennis');
  const activeSport = MULTI_SPORTS_LIST.find((x) => x.id === activeSportId) || MULTI_SPORTS_LIST[0];
  const activeColor = getSportColor(activeSport.id, isDarkMode);
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
      {/* 1. HERO SECTION (logo-colour theme) */}
      <section className="relative overflow-hidden bg-white dark:bg-neutral-950">
        <img
          src={TIARA_LOGO}
          alt=""
          aria-hidden="true"
          className="absolute -right-40 -top-32 w-[680px] opacity-[0.06] pointer-events-none select-none hidden lg:block"
        />
        <div
          className="absolute inset-x-0 top-0 h-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 15% 0%, rgba(0,148,68,0.10), transparent 55%), radial-gradient(ellipse at 90% 30%, rgba(247,148,30,0.12), transparent 50%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-widest text-white"
                style={{ backgroundColor: LOGO.green }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-neutral-900 animate-pulse" />
                Premier 12-Acre Athletic Campus
              </span>
              <span className="text-[11px] font-mono font-bold text-black/50 dark:text-white/65">EST. 2012</span>
            </div>

            <div>
              <h1 className="font-display text-5xl sm:text-7xl font-black uppercase leading-[0.92] tracking-tight">
                Tiara Sports Club
              </h1>
              <h2
                className="font-display text-4xl sm:text-6xl font-black uppercase leading-[0.95] tracking-tight mt-1"
                style={{ color: LOGO.vermilion }}
              >
                Vadodara, Gujarat
              </h2>
              <div className="mt-4 w-40">
                <BrandBar className="h-1.5 rounded-full overflow-hidden" />
              </div>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-black/70 dark:text-white/70 max-w-xl">
              Gujarat's flagship multi-sport institution on Sama-Savli Road, besides Red Coral greens, opposite Nayara petrol pump.
              Championship tennis, pro pickleball, BWF badminton, a Hyrox fitness box, a gymnastics arena, and the Tiara cafe, all in one campus.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenBooking(activeSport.facilityId)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-xs font-extrabold uppercase tracking-widest text-white shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer"
                style={isDarkMode ? { backgroundColor: LOGO.blue } : { backgroundColor: LOGO.navy }}
              >
                Slot & Facility Inquiry <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md text-xs font-extrabold uppercase tracking-widest border-2 border-[#0B0B0B] dark:border-white hover:bg-[#0B0B0B] hover:text-white dark:hover:bg-white dark:hover:text-[#0B0B0B] transition-colors cursor-pointer"
              >
                <MapPin className="w-4 h-4" style={{ color: LOGO.vermilion }} />
                Google Map & Venue
              </button>
              <button
                onClick={() => onNavigate('facilities')}
                className="inline-flex items-center gap-1.5 px-3 py-3.5 text-xs font-extrabold uppercase tracking-widest text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5" style={{ color: LOGO.vermilion }} />
                All Facilities
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 max-w-lg pt-2">
              {[
                { n: '6', l: 'Disciplines', c: LOGO.green },
                { n: '20', l: 'Pro Courts', c: LOGO.orange },
                { n: '1,200+', l: 'Members', c: LOGO.blue },
              ].map((st) => (
                <div
                  key={st.l}
                  className="rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-sm p-3"
                  style={{ borderTop: `4px solid ${st.c}` }}
                >
                  <div className="font-display text-3xl font-black leading-none">{st.n}</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-black/55 dark:text-white/65 mt-1">{st.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-3">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
              {MULTI_SPORTS_LIST.map((sport) => {
                const c = getSportColor(sport.id, isDarkMode);
                const on = sport.id === activeSportId;
                return (
                  <button
                    key={sport.id}
                    onClick={() => setActiveSportId(sport.id)}
                    className="flex items-center justify-center gap-1.5 px-1.5 py-2 rounded-md text-[11px] font-extrabold uppercase tracking-wide border-2 transition-all cursor-pointer"
                    style={
                      on
                        ? { backgroundColor: c, borderColor: c, color: '#fff' }
                        : isDarkMode
                        ? { backgroundColor: '#171717', borderColor: `${c}66`, color: '#f5f5f5' }
                        : { backgroundColor: '#fff', borderColor: `${c}55`, color: '#0B0B0B' }
                    }
                  >
                    <SportIcon sportId={sport.id} className="w-3.5 h-3.5" size={14} />
                    <span>{sport.id === 'hyrox' ? 'Hyrox' : sport.name}</span>
                  </button>
                );
              })}
            </div>

            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-neutral-900"
              style={{ border: `4px solid ${activeColor}` }}
            >
              <div className="relative h-[360px] sm:h-[430px]">
                <img src={activeSport.image} alt={activeSport.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-white"
                  style={{ backgroundColor: activeColor }}
                >
                  {activeSport.badge}
                </span>
              </div>
              <div className="p-4 sm:p-5 bg-white dark:bg-neutral-900 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0"
                      style={{ backgroundColor: activeColor }}
                    >
                      <SportIcon sportId={activeSport.id} className="w-4 h-4" size={16} />
                    </span>
                    <h3 className="font-display text-2xl font-black uppercase truncate">{activeSport.name}</h3>
                  </div>
                  <p className="text-xs text-black/60 dark:text-white/70 mt-1 truncate">{activeSport.courts}</p>
                </div>
                <button
                  onClick={() => onOpenBooking(activeSport.facilityId)}
                  className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-extrabold uppercase tracking-wider text-white cursor-pointer"
                  style={{ backgroundColor: activeColor }}
                >
                  Reserve <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <BrandBar className="h-2" />
      </section>

      {/* 2. DISCIPLINES + INQUIRY */}
      <section className="py-16 sm:py-20 bg-[#F7F8FA] dark:bg-neutral-950 border-b border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: LOGO.green }}>
              Every discipline · World-class standards
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight mt-1">
              Six ways to play at Tiara
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MULTI_SPORTS_LIST.map((sport) => {
              const c = getSportColor(sport.id, isDarkMode);
              return (
                <article
                  key={sport.id}
                  className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={sport.image} alt={sport.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                    <span
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-white"
                      style={{ backgroundColor: c }}
                    >
                      {sport.badge}
                    </span>
                  </div>
                  <div className="h-1.5" style={{ backgroundColor: c }} />
                  <div className="p-5 space-y-3 flex flex-col flex-1">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0" style={{ backgroundColor: c }}>
                        <SportIcon sportId={sport.id} className="w-5 h-5" size={20} />
                      </span>
                      <h3 className="font-display text-2xl font-black uppercase leading-none">{sport.name}</h3>
                    </div>
                    <p className="text-sm text-black/65 dark:text-white/75 leading-relaxed">{sport.desc}</p>
                    <ul className="space-y-1.5">
                      {sport.amenities.map((a) => (
                        <li key={a} className="flex items-center gap-2 text-xs text-black/80 dark:text-white/80">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: c }} />
                          {a}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2 mt-auto flex items-center gap-2">
                      <button
                        onClick={() => onOpenBooking(sport.facilityId)}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-xs font-extrabold uppercase tracking-wider text-white cursor-pointer"
                        style={{ backgroundColor: c }}
                      >
                        <Calendar className="w-3.5 h-3.5" /> Reserve
                      </button>
                      <button
                        onClick={() => onNavigate('facilities')}
                        className="px-4 py-2.5 rounded-md text-xs font-extrabold uppercase tracking-wider border-2 border-[#0B0B0B]/15 dark:border-white/20 hover:border-[#0B0B0B] dark:hover:border-white transition-colors cursor-pointer"
                      >
                        Specs
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="pt-2">
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

      {/* 5B. GROWTH SECTION */}
      <section className="py-16 sm:py-20 bg-[#F7F8FA] dark:bg-neutral-950 border-b border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: LOGO.orange }}>
              Built for growth · Vadodara, Gujarat
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight mt-1">
              Growing with every athlete
            </h2>
            <p className="text-xs sm:text-sm mt-2 text-black/60 dark:text-white/70">
              World-class courts, expert coaching, a Hyrox training floor, and night-ready lighting, everything an athlete needs to grow.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GROWTH_CARDS.map((card, i) => {
              const Icon =
                card.icon === 'trophy' ? Trophy : card.icon === 'users' ? Users : card.icon === 'dumbbell' ? Dumbbell : Clock;
              const c = GROWTH_COLORS[i % GROWTH_COLORS.length];
              return (
                <div
                  key={card.id}
                  className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                  style={{ borderTop: `5px solid ${c}` }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5 shadow-md" style={{ backgroundColor: c }}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-black uppercase tracking-wide">{card.title}</h3>
                  <p className="text-sm text-black/65 dark:text-white/75 leading-relaxed mt-2">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5C. CERTIFIED COACHES */}
      <section className="py-16 sm:py-20 bg-white dark:bg-neutral-900 border-b border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: LOGO.blue }}>
              Train with the best · Tiara Academy
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight mt-1">
              Our certified coaches
            </h2>
            <p className="text-xs sm:text-sm mt-2 text-black/60 dark:text-white/70">
              Qualified, experienced coaches guiding every discipline at Tiara Sports Club.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFIED_COACHES.map((coach) => {
              const c = getSportColor(coach.sportId, isDarkMode);
              return (
                <article
                  key={coach.id}
                  className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-sm hover:shadow-xl transition-all flex flex-col"
                >
                  <div className="relative aspect-[4/5] bg-[#EEF0F3] dark:bg-neutral-800">
                    <img src={isDarkMode && coach.image.includes('coach_placeholder') ? COACH_DARK : coach.image} alt={`${coach.role} at Tiara Sports Club`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <span
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-white flex items-center gap-1.5"
                      style={{ backgroundColor: c }}
                    >
                      <SportIcon sportId={coach.sportId} className="w-3 h-3" size={12} />
                      {coach.certification}
                    </span>
                  </div>
                  <div className="h-1.5" style={{ backgroundColor: c }} />
                  <div className="p-5 space-y-3 flex flex-col flex-1">
                    <div>
                      <h3 className="font-display text-xl font-black uppercase">{coach.role}</h3>
                      <span className="text-[11px] font-mono text-black/50 dark:text-white/65">{coach.experience}</span>
                    </div>
                    <p className="text-sm text-black/65 dark:text-white/75 leading-relaxed">{coach.description}</p>
                    <ul className="space-y-1.5 mt-auto pt-1">
                      {coach.specialities.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-black/80 dark:text-white/80">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: c }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
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
      <section className="text-white text-center" style={{ backgroundColor: LOGO.navy }}>
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-5">
          <img src={TIARA_LOGO} alt="" aria-hidden="true" className="h-20 w-20 mx-auto" />
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase leading-none">
            Become a member of Tiara Sports Club
          </h2>
          <p className="text-sm text-white/75 max-w-xl mx-auto leading-relaxed">
            Access our championship tennis arena, pro pickleball arena, BWF badminton hall, Hyrox fitness box,
            gymnastics arena, and cafe. Flexible annual family memberships and pay-and-play sessions available.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-7 py-3.5 rounded-md text-xs font-extrabold uppercase tracking-widest text-white cursor-pointer"
              style={{ backgroundColor: LOGO.vermilion }}
            >
              Inquire slot or batch
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3.5 rounded-md text-xs font-extrabold uppercase tracking-widest bg-white text-[#0B0B0B] hover:bg-white/90 cursor-pointer"
            >
              Membership desk (Vadodara)
            </button>
          </div>
        </div>
        <BrandBar className="h-2" />
      </section>
    </div>
  );
};
