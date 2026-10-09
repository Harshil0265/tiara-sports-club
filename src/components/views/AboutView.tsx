import React from 'react';
import { NavRoute } from '../../types';
import { CLUB_LOCATION } from '../../data/clubData';
import { 
  Target, 
  ShieldCheck, 
  HeartHandshake, 
  MapPin, 
  Award, 
  Compass, 
  Users, 
  Building2, 
  Quote, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Sparkles,
  Trophy,
  Activity,
  Calendar
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (route: NavRoute) => void;
  onOpenBooking: () => void;
  isDarkMode?: boolean;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenBooking,
  isDarkMode = true,
}) => {
  const leadershipTeam = [
    {
      name: 'Rajeshwar Patel',
      role: 'Founder & Managing Trustee',
      credentials: 'Former State Tennis Competitor · Sports Philanthropist',
      bio: 'Visionary behind the 12-acre Sama-Savli Road campus. Dedicated over 15 years to cultivating world-class athletic infrastructure and youth sports scholarships in Central Gujarat.',
    },
    {
      name: 'Vikramaditya Solanki',
      role: 'Director of Tennis & Head Coach',
      credentials: 'AITA Certified Level-2 Coach · Gujarat Men’s Singles Champion',
      bio: 'Heads Tiara’s junior and pro tennis academy. Trained 18 national-ranked juniors with a clinical focus on modern biomechanics, footwork mechanics, and tournament preparation.',
    },
    {
      name: 'Rohan Mehta',
      role: 'Director of Racquet Sports & Pickleball Commissioner',
      credentials: 'PPR Certified Professional · State Pickleball Convener',
      bio: 'Pioneered tournament-level pickleball in Vadodara, overseeing Tiara’s USAPA-regulation courts, weekly evening open mixers, and competitive inter-club leagues.',
    },
    {
      name: 'Kabir Vaghela',
      role: 'Director of High-Performance & Athletic Conditioning',
      credentials: 'CSCS Certified Specialist · Former National Decathlete',
      bio: 'Directs the strength and conditioning floor, designing periodized training cycles, injury prevention protocols, and sport-specific speed-power regimens for member athletes.',
    },
  ];

  const milestones = [
    {
      year: '2012',
      title: 'Foundation on Sama-Savli Road',
      description: 'Acquisition and development of 12 pristine acres in Vadodara. Inaugurated with 4 championship ITF-specification cushioned acrylic tennis courts.',
    },
    {
      year: '2016',
      title: 'BWF Teak Badminton Complex & Academy',
      description: 'Constructed an indoor BWF Level-1 certified badminton arena featuring sprung teak hardwood subfloors and Yonex tournament vinyl mats.',
    },
    {
      year: '2019',
      title: 'High-Performance Strength & Biomechanics Gym',
      description: 'Commissioned a commercial-grade strength and conditioning gym equipped with Technogym and Hammer Strength suites, drop platforms, and athlete recovery zones.',
    },
    {
      year: '2022',
      title: 'Vadodara’s Premier Pro Pickleball Center',
      description: 'Engineered dedicated USAPA-regulation pickleball courts with permanent steel posts, contrast kitchen zones, and spectator viewing galleries.',
    },
    {
      year: '2024',
      title: 'State Multi-Sport Championship Honors',
      description: 'Tiara athletes secured gold medals across State Tennis, Pickleball, and Badminton Opens, establishing the club as Gujarat’s foremost athletic training ground.',
    },
    {
      year: '2026',
      title: 'Campus Modernization & Digital Desk',
      description: 'Upgraded campus floodlighting to 1,000 Lux shadowless LED systems and surpassed 1,200 active registered members and academy scholars.',
    },
  ];

  const corePillars = [
    {
      icon: Target,
      title: 'International Federation Standards',
      desc: 'No compromises on court mechanics. Surfaces, net heights, lighting lux levels, and hardwood subfloors meet ITF, USAPA, and BWF global tournament specifications.',
    },
    {
      icon: Users,
      title: 'Grassroots to Podium Pathway',
      desc: 'Structured training syllabi from 5-year-old grassroots development squads to senior championship tours, guided by experienced coaches and sports science principles.',
    },
    {
      icon: HeartHandshake,
      title: 'Inclusive Sporting Community',
      desc: 'A thriving sporting home for Vadodara families, corporate professionals, and veteran players who share a mutual passion for health, competition, and social camaraderie.',
    },
    {
      icon: ShieldCheck,
      title: 'Integrity, Discipline & Fair Play',
      desc: 'A sporting culture rooted in mutual respect, court etiquette, transparent court reservations, and zero tolerance for unsportsmanlike conduct.',
    },
  ];

  return (
    <div
      className={`min-h-screen py-10 sm:py-14 px-4 sm:px-6 lg:px-8 transition-colors ${
        isDarkMode ? 'bg-neutral-950 text-neutral-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        {/* SECTION 1: EDITORIAL HEADER & AT-A-GLANCE METRICS */}
        <div className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-red-500 uppercase tracking-widest font-semibold">
              <Compass className="w-3.5 h-3.5 text-red-600" />
              <span>ESTABLISHED 2012 · VADODARA, GUJARAT · SAMA-SAVLI ROAD</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight">
              WHO WE ARE
            </h1>
            <p
              className={`text-sm sm:text-base leading-relaxed mt-2 ${
                isDarkMode ? 'text-neutral-400' : 'text-slate-600'
              }`}
            >
              Tiara Sports Club is Vadodara’s premier multi-sport athletic institution — spanning 12 pristine acres on Sama-Savli Road (besides Red Coral greens, opposite Nayara petrol pump). Founded on the belief that world-class sporting facilities should be accessible in Gujarat, we combine tournament-grade arenas with high-performance coaching and a welcoming community culture.
            </p>
          </div>

          {/* Institutional Data Strip - Clean Unboxed Typography (Zero-Pill Discipline) */}
          <div
            className={`border rounded-xs p-5 sm:p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 ${
              isDarkMode ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                FOUNDED
              </span>
              <span className="font-display text-2xl font-black text-red-600">2012</span>
              <span className="text-[11px] text-neutral-400 block mt-0.5">14+ Years in Vadodara</span>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                CAMPUS AREA
              </span>
              <span className="font-display text-2xl font-black text-red-600">12 ACRES</span>
              <span className="text-[11px] text-neutral-400 block mt-0.5">Sama-Savli Road</span>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                ACTIVE MEMBERS
              </span>
              <span className="font-display text-2xl font-black text-red-600">1,200+</span>
              <span className="text-[11px] text-neutral-400 block mt-0.5">Athletes & Families</span>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                DISCIPLINES
              </span>
              <span className="font-display text-2xl font-black text-red-600">4 CORE</span>
              <span className="text-[11px] text-neutral-400 block mt-0.5">Tennis, Pickleball, Badminton, Gym</span>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                STATE TITLES
              </span>
              <span className="font-display text-2xl font-black text-red-600">32+</span>
              <span className="text-[11px] text-neutral-400 block mt-0.5">Regional Medals Won</span>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                CAMPUS HOURS
              </span>
              <span className="font-display text-2xl font-black text-red-600">06:00 – 23:00</span>
              <span className="text-[11px] text-neutral-400 block mt-0.5">Daily Floodlit Access</span>
            </div>
          </div>
        </div>

        {/* SECTION 2: WHAT IS TIARA SPORTS CLUB (THE GENESIS & IDENTITY) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7 space-y-5 text-sm leading-relaxed">
            <div className="flex items-center gap-2 text-xs font-mono text-red-500 uppercase tracking-wider font-semibold">
              <Building2 className="w-3.5 h-3.5 text-red-600" />
              <span>THE INSTITUTION & PHILOSOPHY</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
              WHAT IS TIARA SPORTS CLUB?
            </h2>
            <div className={`space-y-4 ${isDarkMode ? 'text-neutral-300' : 'text-slate-700'}`}>
              <p>
                Prior to 2012, aspiring competitive racquet sport athletes in Vadodara faced a recurring challenge: a scarcity of certified tournament-specification facilities. Players seeking true ITF-grade cushioned acrylic courts or BWF-certified sprung teak floors had to commute to major metropolitan centers or adjust to inconsistent surfaces.
              </p>
              <p>
                Tiara Sports Club was established to permanently eliminate that divide. Located along the rapid-growth corridor of Sama-Savli Road, our 12-acre campus was master-planned as a dedicated multi-sport sanctuary where professional tournament standards and community wellness coexist seamlessly.
              </p>
              <p>
                Today, Tiara is not merely a sports venue; it is a full-spectrum sporting ecosystem. On any given evening, you will witness junior state academy prospects drilling with certified coaches, corporate teams playing spirited pickleball doubles under 1,000 Lux floodlights, badminton enthusiasts playing on tournament teak subfloors, and fitness members training in our high-performance strength gym.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('facilities')}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-xs transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Explore Sports Arenas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onOpenBooking}
                className={`px-5 py-2.5 border text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                  isDarkMode 
                    ? 'border-neutral-700 hover:border-neutral-500 text-white bg-neutral-900' 
                    : 'border-slate-300 hover:border-slate-400 text-slate-800 bg-white'
                }`}
              >
                Inquire For Court Slot
              </button>
            </div>
          </div>

          {/* Right Column: Standards & Specifications Card */}
          <div
            className={`lg:col-span-5 border rounded-xs p-6 space-y-5 ${
              isDarkMode ? 'bg-neutral-900/50 border-neutral-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="border-b pb-3 border-neutral-800/80">
              <span className="text-[11px] font-mono text-red-500 font-bold uppercase tracking-wider block">
                FEDERATION-GRADE INFRASTRUCTURE
              </span>
              <h3 className="font-display text-lg font-bold uppercase tracking-wide mt-0.5">
                ENGINEERED SPECIFICATIONS
              </h3>
            </div>

            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm">Lawn Tennis Arena</strong>
                  <span className={isDarkMode ? 'text-neutral-400' : 'text-slate-600'}>
                    ITF Level 3 Plexipave cushioned synthetic surface with true ball bounce and high-traction durability.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm">Pro Pickleball Complex</strong>
                  <span className={isDarkMode ? 'text-neutral-400' : 'text-slate-600'}>
                    USAPA tournament regulation arenas with permanent steel posts, textured non-skid acrylic, and high-visibility kitchen zones.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm">Badminton Teak Arena</strong>
                  <span className={isDarkMode ? 'text-neutral-400' : 'text-slate-600'}>
                    Sprung first-grade teak hardwood subfloors layered with 4.5mm Yonex tournament vinyl mats for optimum joint protection.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm">Strength & Conditioning Gym</strong>
                  <span className={isDarkMode ? 'text-neutral-400' : 'text-slate-600'}>
                    Commercial Technogym and Hammer Strength equipment, barbell drop platforms, functional sprint turf, and contrast ice bath recovery.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 3: FROM THE FOUNDER'S DESK (LEADERSHIP MESSAGE) */}
        <div
          className={`border rounded-xs p-6 sm:p-10 relative overflow-hidden ${
            isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-slate-300 shadow-md'
          }`}
        >
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between border-b pb-4 border-neutral-800">
              <div className="flex items-center gap-2.5">
                <Quote className="w-6 h-6 text-red-600 shrink-0" />
                <div>
                  <span className="text-[11px] font-mono text-red-500 font-bold uppercase tracking-wider block">
                    FOUNDER'S ADDRESS
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-tight">
                    FROM THE DESK OF THE FOUNDER
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono text-neutral-400 hidden sm:inline-block">
                EST. 2012 · VADODARA
              </span>
            </div>

            <div className={`space-y-4 text-sm sm:text-base leading-relaxed italic ${isDarkMode ? 'text-neutral-200' : 'text-slate-800'}`}>
              <p>
                “When we laid the foundation of Tiara Sports Club in 2012, our guiding principle was unequivocal: no athlete from Vadodara should ever be held back by subpar infrastructure. For years, talent from Gujarat had to look outside the state to access world-class courts and professional training ecosystems.”
              </p>
              <p>
                “Whether you are a seven-year-old taking your first swing with a junior tennis racquet, a working professional playing an intense game of pickleball under our floodlights after a long workday, or an elite junior athlete drilling at 6:00 AM — Tiara was engineered to be your athletic sanctuary. We measure our success not just by the tournament trophies in our showcase, but by the discipline, resilience, and lifelong friendships forged across our courts.”
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h4 className="font-display text-base font-bold uppercase tracking-wide text-red-600">
                  RAJESHWAR PATEL
                </h4>
                <p className="text-xs text-neutral-400">
                  Founder & Managing Trustee · Tiara Sports Club, Vadodara
                </p>
              </div>
              <div className="text-xs font-mono text-neutral-500 text-left sm:text-right">
                <span>Governing Board of Trustees</span>
                <span className="block text-[11px] text-neutral-400">Gujarat State Multi-Sport Council</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: EXECUTIVE LEADERSHIP & TECHNICAL DIRECTORS */}
        <div className="space-y-6">
          <div className="max-w-2xl space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono text-red-500 uppercase tracking-wider font-semibold">
              <Award className="w-3.5 h-3.5 text-red-600" />
              <span>LEADERSHIP & TECHNICAL DIRECTORS</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
              WHO RUNS & COACHES AT TIARA
            </h2>
            <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-neutral-400' : 'text-slate-600'}`}>
              Our executive board and coaching directors bring decades of national tournament experience, sports science credentials, and passion to the Vadodara campus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadershipTeam.map((leader, idx) => (
              <div
                key={idx}
                className={`border rounded-xs p-6 space-y-3 transition-colors ${
                  isDarkMode 
                    ? 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700' 
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                      {leader.name}
                    </h3>
                    <span className="text-xs font-bold text-red-600 block mt-0.5">
                      {leader.role}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-neutral-500 font-bold shrink-0">
                    0{idx + 1}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-neutral-400 border-l-2 border-red-600/50 pl-2.5">
                  {leader.credentials}
                </div>

                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-neutral-300' : 'text-slate-600'}`}>
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: OUR FOUR INSTITUTIONAL PILLARS */}
        <div className="space-y-6">
          <div className="max-w-2xl space-y-1.5">
            <span className="text-xs font-mono text-red-500 uppercase tracking-widest font-semibold block">
              INSTITUTIONAL CHARTER
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
              OUR FOUR CORE PILLARS
            </h2>
            <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-neutral-400' : 'text-slate-600'}`}>
              Every decision at Tiara Sports Club is guided by our four core commitments to athletic integrity and member satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`border rounded-xs p-6 space-y-3 ${
                    isDarkMode ? 'bg-neutral-900/50 border-neutral-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xs bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-base font-bold uppercase tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-neutral-400' : 'text-slate-600'}`}>
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 6: HISTORICAL MILESTONES (2012 - 2026 TIMELINE) */}
        <div className="space-y-6">
          <div className="max-w-2xl space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono text-red-500 uppercase tracking-wider font-semibold">
              <Calendar className="w-3.5 h-3.5 text-red-600" />
              <span>CHRONOLOGICAL MILESTONES</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
              THE JOURNEY (2012 – 2026)
            </h2>
            <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-neutral-400' : 'text-slate-600'}`}>
              A decade and a half of continuous expansion, facility investments, and tournament victories in Gujarat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className={`border rounded-xs p-5 sm:p-6 space-y-2.5 relative ${
                  isDarkMode ? 'bg-neutral-900/40 border-neutral-800' : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between border-b pb-2 border-neutral-800/60">
                  <span className="font-display text-2xl font-black text-red-600">
                    {m.year}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase font-bold">
                    MILESTONE 0{idx + 1}
                  </span>
                </div>
                <h3 className="font-display text-sm font-bold uppercase tracking-wide">
                  {m.title}
                </h3>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-neutral-400' : 'text-slate-600'}`}>
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 7: CAMPUS PROTOCOLS & VISITOR DESK */}
        <div
          className={`border rounded-xs p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${
            isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-slate-100 border-slate-300'
          }`}
        >
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-red-500 font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-red-600" />
              <span>VISITOR SECRETARIAT & CAMPUS ENTRY</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight">
              EXPERIENCE TIARA SPORTS CLUB IN PERSON
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? 'text-neutral-400' : 'text-slate-600'}`}>
              Located at {CLUB_LOCATION.address}. Prospective members, trial participants, and academy aspirants are welcome to schedule a campus tour or court trial session with our athletic desk.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-xs transition-colors cursor-pointer text-center"
            >
              Contact Secretariat Desk
            </button>
            <button
              onClick={onOpenBooking}
              className={`px-6 py-3 border text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer text-center ${
                isDarkMode 
                  ? 'border-neutral-700 hover:border-neutral-500 text-white bg-neutral-950' 
                  : 'border-slate-300 hover:border-slate-400 text-slate-800 bg-white'
              }`}
            >
              Book Slot Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
