import React, { useState } from 'react';
import { NavRoute } from '../../types';
import { 
  GYM_IMAGE,
  PICKLEBALL_IMAGE,
  BADMINTON_GYM_IMAGE,
  TENNIS_COURT_IMAGE,
  ARENA_COMPLEX_IMAGE,
  CLUB_LOCATION 
} from '../../data/clubData';
import { TurfSlotBookingWidget } from '../TurfSlotBookingWidget';
import { SportIcon } from '../SportsThemeIcon';
import { 
  Check, 
  Calendar, 
  MapPin, 
  Clock, 
  Award, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Sparkles,
  Users,
  ArrowRight
} from 'lucide-react';

interface FacilitiesViewProps {
  onNavigate: (route: NavRoute) => void;
  onOpenBooking: (facilityId?: string) => void;
  isDarkMode?: boolean;
}

interface CombinedSportFacility {
  id: string;
  sportId: string;
  sportName: string;
  facilityTitle: string;
  categoryBadge: string;
  statusBadge: string;
  headlineSubtitle: string;
  description: string;
  image: string;
  courtCount: string;
  pricing: string;
  singlePrice: { label: string; amount: string };
  multiplePrice: { label: string; amount: string };
  surfaceType: string;
  lightingSpec: string;
  amenities: string[];
  specs: { label: string; value: string }[];
  coachingProgram: string;
}

export const FacilitiesView: React.FC<FacilitiesViewProps> = ({
  onNavigate,
  onOpenBooking,
  isDarkMode = true,
}) => {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');

  const combinedSportsFacilities: CombinedSportFacility[] = [
    {
      id: 'tennis-courts',
      sportId: 'tennis',
      sportName: 'Tennis',
      facilityTitle: 'Championship Tennis Center',
      categoryBadge: 'ITF LEVEL 3 SPECIFICATION',
      statusBadge: 'Courts Open Today',
      headlineSubtitle: 'Championship Regulation Tournament Arena · Vadodara',
      description: 'The premier tennis venue of Vadodara. Engineered with ITF Level 3 Plexipave cushioned synthetic championship surfaces, true ball bounce consistency, and shadowless tournament floodlighting.',
      image: TENNIS_COURT_IMAGE,
      courtCount: 'Championship Arena & 400-Seat Pavilion',
      pricing: 'From ₹800/hr (Singles) · ₹1,000/hr (Doubles)',
      singlePrice: { label: 'Single (Singles)', amount: '₹800/hr' },
      multiplePrice: { label: 'Multiple (Doubles)', amount: '₹1,000/hr' },
      surfaceType: 'ITF Level 3 Plexipave Cushioned Acrylic',
      lightingSpec: '800 Lux Shadowless Tennis Floodlights',
      amenities: [
        'Spinshot Pro Tennis Ball Machine with programmable drills',
        'On-site Yonex & Babolat electronic racquet stringing service',
        'High-speed video stroke biomechanics analysis camera',
        'Chair umpire towers and shaded player rest lounges'
      ],
      specs: [
        { label: 'Arena Grade', value: 'ITF Level 3 Certified' },
        { label: 'Surface Tech', value: 'Plexipave Multi-Layer Cushion' },
        { label: 'Spectator Seating', value: '400 Covered Gallery Seats' }
      ],
      coachingProgram: 'AITA Certified Head Coach with developmental batches for U12, U16, and adults.'
    },
    {
      id: 'pickleball-center',
      sportId: 'pickleball',
      sportName: 'Pickleball Pro Arena',
      facilityTitle: 'Tiara Pro Pickleball Complex',
      categoryBadge: 'DEDICATED COURTS',
      statusBadge: 'Evening Mixers Active',
      headlineSubtitle: 'Championship Acrylic Competition Arena · Vadodara',
      description: 'Vadodara’s premier venue for the world’s fastest-growing racquet sport. Engineered with permanent tournament-dimension arenas, heavy-duty steel post nets, high-traction textured acrylic, and vibrant contrast non-volley kitchen zones.',
      image: PICKLEBALL_IMAGE,
      courtCount: 'Championship Competition Arena',
      pricing: 'From ₹600/hr per session',
      singlePrice: { label: 'Single (Singles)', amount: '₹600/hr' },
      multiplePrice: { label: 'Multiple (Doubles)', amount: '₹750/hr' },
      surfaceType: '6-Layer Cushioned Textured Acrylic',
      lightingSpec: '750 Lux Uniform LED Court Illuminators',
      amenities: [
        'Complimentary carbon-fiber loaner paddles and tournament balls',
        'Permanent heavy-gauge powder-coated steel posts and nets',
        'Shaded player cabanas with courtside score flippers',
        'Weekly Friday evening club doubles tournaments & open socials'
      ],
      specs: [
        { label: 'Court Size', value: '44 ft × 20 ft with 7 ft Kitchen' },
        { label: 'Net Spec', value: '36-inch side / 34-inch center' },
        { label: 'Tournaments', value: 'Gujarat Pickleball Open Host' }
      ],
      coachingProgram: 'Daily 30-minute introductory clinics for beginners & advanced kitchen dink tactics.'
    },
    {
      id: 'badminton-arena',
      sportId: 'badminton',
      sportName: 'BWF Badminton Center',
      facilityTitle: 'Tiara National Badminton Hall',
      categoryBadge: 'BWF LEVEL 1 APPROVED',
      statusBadge: 'Slots Open Today',
      headlineSubtitle: 'Sprung Teak & Synthetic Championship Arena · Vadodara',
      description: 'Designed for state and national champions, this air-cooled indoor stadium features double-sprung Burmese teak hardwood subfloors overlaid with 4.5mm Yonex competition vinyl mats to protect athlete knees and ankles through explosive jump smashes.',
      image: BADMINTON_GYM_IMAGE,
      courtCount: 'BWF Certified Arena Complex',
      pricing: 'From ₹500/hr per session',
      singlePrice: { label: 'Single (Singles)', amount: '₹500/hr' },
      multiplePrice: { label: 'Multiple (Doubles)', amount: '₹650/hr' },
      surfaceType: 'Sprung Teak Hardwood + 4.5mm Yonex Competition Mats',
      lightingSpec: '1,000 Lux Diffused Anti-Glare Vertical Fixtures',
      amenities: [
        '32-foot unhindered clear ceiling height for high-clear rallies',
        'Climate-controlled and air-cooled stadium ventilation',
        'Professional electronic LED scorekeeping displays',
        'Locker rooms with private showers and eucalyptus steam rooms'
      ],
      specs: [
        { label: 'Flooring', value: 'BWF Certified Teak + Yonex Vinyl' },
        { label: 'Ceiling Height', value: '32 Feet Clear Height' },
        { label: 'Capacity', value: '250 Spectators in Mezzanine' }
      ],
      coachingProgram: 'Former national medalists directing daily beginner, intermediate, and elite squads.'
    },
    {
      id: 'fitness-gym',
      sportId: 'gym',
      sportName: 'Gym',
      facilityTitle: 'Tiara Gym & Strength Suite',
      categoryBadge: 'ATHLETE CONDITIONING',
      statusBadge: 'Open 06:00 - 23:00',
      headlineSubtitle: 'High-Performance Strength, Cardio & Recovery Facility · Vadodara',
      description: 'A sports-performance gym built for genuine athletes and fitness enthusiasts. Features Swedish Eleiko barbell lifting platforms, Technogym Skill Line cardio, Hammer Strength iso-lateral stations, and a dedicated 30-meter sprint turf track with radar timing gates.',
      image: GYM_IMAGE,
      courtCount: 'Full-Service Strength Floor & Recovery Suite',
      pricing: 'Included with Club Membership / ₹350 Day Pass',
      singlePrice: { label: 'Single (Day Pass)', amount: '₹350/day' },
      multiplePrice: { label: 'Multiple (Member)', amount: 'Full Access' },
      surfaceType: 'Heavy Impact Rubber Flooring & 30m Prowler Sprint Turf',
      lightingSpec: 'Modern Architectural LED Daylight Balancing',
      amenities: [
        'Eleiko IPF Certified weightlifting bars and bumper plates',
        'Technogym Skillmill, Skillrun & Skillbike metabolic conditioning',
        'InBody 770 multi-frequency body composition analyzer',
        'Contrast recovery suite with ice bath plunges & Finnish sauna'
      ],
      specs: [
        { label: 'Conditioning', value: 'Full-Service Air Conditioned Suite' },
        { label: 'Lifting Platforms', value: 'Dedicated Barbell Drop Zones' },
        { label: 'Trainers', value: 'CSCS & ACSM Certified Coaches' }
      ],
      coachingProgram: 'Individualized athlete periodization programs for racquet sports, functional fitness, and endurance.'
    }
  ];

  const filteredItems = selectedCategoryFilter === 'all'
    ? combinedSportsFacilities
    : combinedSportsFacilities.filter((item) => item.sportId === selectedCategoryFilter);

  const filterTabs = [
    { id: 'all', label: 'All Sports & Facilities (4)' },
    { id: 'tennis', label: 'Tennis' },
    { id: 'pickleball', label: 'Pickleball Arena' },
    { id: 'badminton', label: 'Badminton Hall' },
    { id: 'gym', label: 'Gym' },
  ];

  return (
    <div
      className={`min-h-screen py-10 sm:py-14 px-4 sm:px-6 lg:px-8 transition-colors ${
        isDarkMode ? 'bg-neutral-950 text-neutral-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* 1. Header & Campus Authority */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b pb-8 border-neutral-800/60">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider rounded-xs bg-red-600/10 text-red-600 border border-red-600/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VADODARA CAMPUS · 12 ACRES OF COMBINED SPORTS & FACILITIES</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none">
              SPORTS & FACILITIES
            </h1>
            
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isDarkMode ? 'text-neutral-400' : 'text-slate-600'
              }`}
            >
              Every sport discipline at Tiara Sports Club is backed by international-specification 
              infrastructure: Championship tennis arena, dedicated pickleball facility, 
              BWF teak badminton complex, and high-performance gym in Vadodara, Gujarat.
            </p>
          </div>

          {/* Quick Stat Pill */}
          <div
            className={`p-4 rounded-xs border text-xs font-mono space-y-1.5 shrink-0 ${
              isDarkMode ? 'bg-neutral-900/80 border-neutral-800 text-neutral-300' : 'bg-white border-slate-200 text-slate-700 shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-neutral-500 uppercase text-[10px]">Campus Area</span>
              <span className="font-bold text-red-600">12 Pristine Acres</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-neutral-500 uppercase text-[10px]">Operating Hours</span>
              <span className="font-bold">06:00 AM – 11:00 PM</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-neutral-500 uppercase text-[10px]">Location</span>
              <span className="font-bold">Sama-Savli Road, Vadodara</span>
            </div>
          </div>
        </div>

        {/* 2. Interactive Discipline Filter Bar */}
        <div className="space-y-3">
          <span className="text-[11px] font-mono font-bold tracking-widest text-red-600 uppercase block">
            FILTER BY SPORT DISCIPLINE & VENUE
          </span>
          <div
            className={`flex items-center gap-1.5 p-1.5 border rounded-xs overflow-x-auto no-scrollbar ${
              isDarkMode ? 'bg-neutral-900/70 border-neutral-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategoryFilter(tab.id)}
                className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-xs transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  selectedCategoryFilter === tab.id
                    ? 'bg-red-600 text-white shadow-xs font-black'
                    : isDarkMode
                    ? 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.id !== 'all' && (
                  <SportIcon sportId={tab.id} className="w-3.5 h-3.5" size={14} />
                )}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3. Live Court & Gym Availability Widget */}
        <div className="pt-2">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-mono font-bold tracking-widest text-red-600 uppercase flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              <span>LIVE COURT & GYM SLOT INQUIRY BOARD (VADODARA CAMPUS)</span>
            </span>
            <span className={`text-xs ${isDarkMode ? 'text-neutral-400' : 'text-slate-500'}`}>
              Instant Email Notification to Admin
            </span>
          </div>
          <TurfSlotBookingWidget onOpenBooking={onOpenBooking} isDarkMode={isDarkMode} />
        </div>

        {/* 4. Combined Sports & Facilities Showcase Cards */}
        <div className="space-y-12">
          {filteredItems.map((item, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={item.id}
                id={item.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border rounded-xs p-6 sm:p-8 transition-colors ${
                  isDarkMode
                    ? 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                {/* Visual Imagery */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-xs overflow-hidden border border-neutral-800/40 shadow-xl h-72 sm:h-96 group">
                    <img
                      src={item.image}
                      alt={`${item.facilityTitle} - Tiara Sports Club Vadodara`}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient & Overlay Badges */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                    {/* Top Status Badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-xs font-mono shadow-sm">
                        {item.categoryBadge}
                      </span>
                      <span className="px-2.5 py-1 bg-black/80 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider rounded-xs font-mono backdrop-blur-xs">
                        {item.statusBadge}
                      </span>
                    </div>

                    {/* Bottom Capacity & Perfect Single/Multiple Pricing Formation Overlay (Zero Cutting) */}
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 bg-neutral-950/95 backdrop-blur-md rounded-xs border border-neutral-800 space-y-2.5 shadow-2xl">
                      {/* Top Info: Sport Icon + Arena Capacity */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="p-1 rounded-xs bg-red-600 text-white shrink-0">
                            <SportIcon sportId={item.sportId} className="w-3.5 h-3.5" size={14} />
                          </div>
                          <span className="font-bold text-white text-xs tracking-tight truncate">
                            {item.courtCount}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-xs bg-neutral-900 text-neutral-400 border border-neutral-800 shrink-0">
                          Official Tariff
                        </span>
                      </div>

                      {/* Pricing Formation: Single & Multiple (Clean, High Contrast, Zero Cutting) */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {/* Single Formation */}
                        <div className="bg-neutral-900/90 border border-neutral-800 rounded-xs px-2.5 py-1.5 flex flex-col justify-center">
                          <span className="text-[9.5px] font-mono uppercase font-semibold text-neutral-400 tracking-wider">
                            {item.singlePrice.label}
                          </span>
                          <span className="text-xs sm:text-sm font-mono font-black text-emerald-400">
                            {item.singlePrice.amount}
                          </span>
                        </div>

                        {/* Multiple Formation */}
                        <div className="bg-neutral-900/90 border border-neutral-800 rounded-xs px-2.5 py-1.5 flex flex-col justify-center">
                          <span className="text-[9.5px] font-mono uppercase font-semibold text-neutral-400 tracking-wider">
                            {item.multiplePrice.label}
                          </span>
                          <span className="text-xs sm:text-sm font-mono font-black text-red-400">
                            {item.multiplePrice.amount}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Content & Sport Details */}
                <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div>
                    <span className="text-red-600 text-xs font-mono font-bold uppercase tracking-widest block">
                      {item.headlineSubtitle}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight mt-1">
                      {item.facilityTitle}
                    </h2>
                  </div>

                  <p
                    className={`text-sm leading-relaxed ${
                      isDarkMode ? 'text-neutral-300' : 'text-slate-700'
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Surface & Illumination High-Specs */}
                  <div
                    className={`p-3.5 rounded-xs border text-xs space-y-1.5 ${
                      isDarkMode ? 'bg-neutral-950/70 border-neutral-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <Layers className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <span className={`text-[10px] uppercase font-bold block ${isDarkMode ? 'text-neutral-400' : 'text-slate-500'}`}>
                          Playing Surface Technology
                        </span>
                        <span className="font-semibold">{item.surfaceType}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 pt-1">
                      <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className={`text-[10px] uppercase font-bold block ${isDarkMode ? 'text-neutral-400' : 'text-slate-500'}`}>
                          Stadium Illumination
                        </span>
                        <span className="font-semibold">{item.lightingSpec}</span>
                      </div>
                    </div>
                  </div>

                  {/* Amenities Checklist */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 block">
                      FACILITY INCLUSIONS & EQUIPMENT:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.amenities.map((amenity, aIdx) => (
                        <div
                          key={aIdx}
                          className={`flex items-start gap-2 text-xs ${
                            isDarkMode ? 'text-neutral-300' : 'text-slate-700'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Specs Metric Boxes */}
                  <div
                    className={`pt-3 border-t grid grid-cols-3 gap-2.5 font-mono-numbers text-xs ${
                      isDarkMode ? 'border-neutral-800' : 'border-slate-200'
                    }`}
                  >
                    {item.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className={`p-2 rounded-xs border ${
                          isDarkMode
                            ? 'bg-neutral-950 border-neutral-800'
                            : 'bg-slate-100 border-slate-200'
                        }`}
                      >
                        <span
                          className={`text-[9.5px] uppercase block font-sans truncate ${
                            isDarkMode ? 'text-neutral-500' : 'text-slate-500'
                          }`}
                        >
                          {spec.label}
                        </span>
                        <span className="font-bold block truncate text-[11px] mt-0.5">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Dedicated Tariff Formation Card (Single & Multiple Formations) */}
                  <div
                    className={`p-3.5 rounded-xs border space-y-2 ${
                      isDarkMode ? 'bg-neutral-950/80 border-neutral-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-500">
                        SESSION TARIFF FORMATION · VADODARA
                      </span>
                      <span className={`text-[10px] font-mono ${isDarkMode ? 'text-neutral-500' : 'text-slate-400'}`}>
                        GST & Floodlights Included
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className={`p-2.5 rounded-xs border ${isDarkMode ? 'bg-neutral-900/90 border-neutral-800' : 'bg-white border-slate-200'}`}>
                        <span className="text-[9.5px] font-mono uppercase text-neutral-400 block">{item.singlePrice.label}</span>
                        <span className="text-sm font-mono font-bold text-emerald-400 block mt-0.5">{item.singlePrice.amount}</span>
                      </div>
                      <div className={`p-2.5 rounded-xs border ${isDarkMode ? 'bg-neutral-900/90 border-neutral-800' : 'bg-white border-slate-200'}`}>
                        <span className="text-[9.5px] font-mono uppercase text-neutral-400 block">{item.multiplePrice.label}</span>
                        <span className="text-sm font-mono font-bold text-red-400 block mt-0.5">{item.multiplePrice.amount}</span>
                      </div>
                    </div>
                  </div>

                  {/* Coaching Note */}
                  <div
                    className={`p-3 rounded-xs border flex items-center gap-2.5 text-xs ${
                      isDarkMode ? 'bg-red-950/20 border-red-900/40 text-red-200' : 'bg-red-50 border-red-200 text-red-900'
                    }`}
                  >
                    <Award className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{item.coachingProgram}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => onOpenBooking(item.id)}
                      className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-xs transition-colors cursor-pointer flex items-center gap-2 shadow-md shadow-red-600/20"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Inquire Slot for {item.sportName.split(' ')[0]}</span>
                    </button>
                    <button
                      onClick={() => onNavigate('contact')}
                      className={`px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-xs border transition-colors cursor-pointer ${
                        isDarkMode
                          ? 'border-neutral-800 hover:bg-neutral-800 text-neutral-300'
                          : 'border-slate-300 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      Inquire Coaching & Memberships
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5. Comprehensive Infrastructure Comparison Matrix Table */}
        <div
          className={`border rounded-xs p-6 sm:p-8 space-y-6 ${
            isDarkMode ? 'bg-neutral-900/40 border-neutral-800' : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-red-600 text-xs font-mono font-bold uppercase tracking-widest block">
                TECHNICAL BENCHMARK
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight mt-1">
                TIARA SPORTS & FACILITIES COMPARISON MATRIX
              </h3>
            </div>
            <span className={`text-xs font-mono ${isDarkMode ? 'text-neutral-400' : 'text-slate-500'}`}>
              Vadodara Standards Compliance 2026
            </span>
          </div>

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
                  <th className="py-3 px-4 font-bold">Discipline</th>
                  <th className="py-3 px-4">Arena Specifications</th>
                  <th className="py-3 px-4">Surface Technology</th>
                  <th className="py-3 px-4">Illumination</th>
                  <th className="py-3 px-4">Certified Coaches</th>
                  <th className="py-3 px-4 text-right">Inquire</th>
                </tr>
              </thead>
              <tbody
                className={`divide-y ${
                  isDarkMode ? 'divide-neutral-800' : 'divide-slate-200'
                }`}
              >
                {combinedSportsFacilities.map((item) => (
                  <tr
                    key={item.id}
                    className={`hover:bg-red-600/5 transition-colors ${
                      isDarkMode ? 'text-neutral-300' : 'text-slate-700'
                    }`}
                  >
                    <td className="py-3.5 px-4 font-display text-sm font-bold uppercase tracking-wide flex items-center gap-2">
                      <SportIcon sportId={item.sportId} className="w-4 h-4 text-red-500 shrink-0" size={16} />
                      <span>{item.sportName}</span>
                    </td>
                    <td className="py-3.5 px-4 font-semibold">{item.courtCount}</td>
                    <td className="py-3.5 px-4 truncate max-w-xs">{item.surfaceType.split('(')[0]}</td>
                    <td className="py-3.5 px-4">{item.lightingSpec.split(' ')[0]} {item.lightingSpec.split(' ')[1]}</td>
                    <td className="py-3.5 px-4 text-emerald-500 font-bold">Active & Certified</td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => onOpenBooking(item.id)}
                        className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-xs cursor-pointer"
                      >
                        Inquire
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 6. Campus Guidelines & Visitor Rules */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t ${
            isDarkMode ? 'border-neutral-900' : 'border-slate-200'
          }`}
        >
          <div
            className={`p-5 rounded-xs border space-y-2 ${
              isDarkMode ? 'bg-neutral-900/60 border-neutral-800' : 'bg-slate-100/70 border-slate-200'
            }`}
          >
            <ShieldCheck className="w-5 h-5 text-red-600" />
            <h4 className="font-display text-lg font-bold uppercase">Footwear & Gear Protocol</h4>
            <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-neutral-400' : 'text-slate-600'}`}>
              Non-marking shoes are strictly mandatory on badminton teak courts and Plexipave tennis courts.
              Clean training shoes required for the gym facility.
            </p>
          </div>

          <div
            className={`p-5 rounded-xs border space-y-2 ${
              isDarkMode ? 'bg-neutral-900/60 border-neutral-800' : 'bg-slate-100/70 border-slate-200'
            }`}
          >
            <Clock className="w-5 h-5 text-red-600" />
            <h4 className="font-display text-lg font-bold uppercase">Booking & Cancellation Policy</h4>
            <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-neutral-400' : 'text-slate-600'}`}>
              Turf and court slots can be booked up to 7 days in advance. Cancellations made 4+ hours prior
              to scheduled slot receive full slot rescheduling credit.
            </p>
          </div>

          <div
            className={`p-5 rounded-xs border space-y-2 ${
              isDarkMode ? 'bg-neutral-900/60 border-neutral-800' : 'bg-slate-100/70 border-slate-200'
            }`}
          >
            <Users className="w-5 h-5 text-red-600" />
            <h4 className="font-display text-lg font-bold uppercase">Guest Passes & Coaching</h4>
            <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-neutral-400' : 'text-slate-600'}`}>
              Club members can bring up to 3 guests per court session. Dedicated 1-on-1 coaching sessions
              must be reserved through the Tiara reception desk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
