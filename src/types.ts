export type NavRoute =
  | 'home'
  | 'about'
  | 'facilities'
  | 'blog'
  | 'contact'
  | 'legal';

export interface MatchResult {
  id: string;
  tournament: string;
  date: string;
  homeTeam: {
    name: string;
    score: number;
    logoCode: string;
    isSportizai: boolean;
  };
  awayTeam: {
    name: string;
    score: number;
    logoCode: string;
    isSportizai: boolean;
  };
  status: 'FINAL' | 'LIVE' | 'UPCOMING';
  venue: string;
  stats?: {
    fgPercentage: [number, number];
    threePtPercentage: [number, number];
    ftPercentage: [number, number];
    rebounds: [number, number];
    assists: [number, number];
    steals: [number, number];
    turnovers: [number, number];
  };
}

export interface StandingRow {
  rank: number;
  club: string;
  w: number;
  l: number;
  pct: string;
  gb: string;
  l10: string;
  streak: string;
  isSportizai?: boolean;
}

export interface Player {
  id: string;
  number: number;
  name: string;
  position: string;
  height: string;
  ppg: number;
  rpg: number;
  apg: number;
  nationality: string;
  bio: string;
  category: 'senior' | 'women' | 'academy';
}

export interface Facility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  capacity: string;
  features: string[];
  specs: { label: string; value: string }[];
  image: string;
}

export interface ClubEvent {
  id: string;
  title: string;
  tournament: string;
  date: string;
  time: string;
  opponent: string;
  venue: string;
  status: 'Tickets Available' | 'Selling Fast' | 'Sold Out';
  category: 'championship' | 'academy' | 'community';
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export interface AchievementMilestone {
  year: number;
  title: string;
  trophy: string;
  description: string;
  record: string;
  mvp: string;
}
