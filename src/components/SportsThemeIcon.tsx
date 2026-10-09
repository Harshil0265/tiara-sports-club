import React from 'react';
import { Dumbbell, Waves, Target, Trophy, Activity, Zap } from 'lucide-react';

interface SportIconProps {
  sportId: string;
  className?: string;
  size?: number;
}

export const TennisIcon: React.FC<{ className?: string; size?: number }> = ({
  className = 'w-5 h-5',
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Clean Tennis Racquet & Ball */}
    <ellipse cx="14" cy="10" rx="6" ry="7" transform="rotate(-30 14 10)" />
    <path d="M9 14.5L3.5 20a1.5 1.5 0 0 0 2 2L11 16.5" />
    <circle cx="7" cy="6" r="2.5" />
    <path d="M5.5 5c.8.8.8 2 0 2.8" strokeWidth="1.2" />
  </svg>
);

export const PickleballIcon: React.FC<{ className?: string; size?: number }> = ({
  className = 'w-5 h-5',
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Clean Pickleball Paddle with Perforated Ball */}
    <rect x="7" y="3" width="11" height="12" rx="4" transform="rotate(-15 12.5 9)" />
    <path d="M8.5 14L4 20a1 1 0 0 0 1.5 1.2L11 16.5" />
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="5" cy="5.5" r="0.4" fill="currentColor" />
    <circle cx="7" cy="5.5" r="0.4" fill="currentColor" />
    <circle cx="6" cy="7" r="0.4" fill="currentColor" />
  </svg>
);

export const BadmintonIcon: React.FC<{ className?: string; size?: number }> = ({
  className = 'w-5 h-5',
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Clean Shuttlecock */}
    <path d="M12 4l-5 8h10l-5-8z" />
    <path d="M7 12l2 6h6l2-6" />
    <circle cx="12" cy="19.5" r="2" fill="currentColor" stroke="none" />
    <line x1="12" y1="4" x2="12" y2="12" strokeWidth="1.5" />
    <line x1="9.5" y1="8" x2="14.5" y2="8" strokeWidth="1.5" />
  </svg>
);

export const GymIcon: React.FC<{ className?: string; size?: number }> = ({
  className = 'w-5 h-5',
  size = 20,
}) => <Dumbbell className={className} size={size} />;

export const SportIcon: React.FC<SportIconProps> = ({
  sportId,
  className = 'w-5 h-5',
  size = 20,
}) => {
  switch (sportId.toLowerCase()) {
    case 'tennis':
    case 'lawn tennis':
      return <TennisIcon className={className} size={size} />;
    case 'pickleball':
    case 'pickleball arena':
      return <PickleballIcon className={className} size={size} />;
    case 'badminton':
    case 'badminton arena':
    case 'badminton center':
      return <BadmintonIcon className={className} size={size} />;
    case 'gym':
    case 'fitness & gym':
    case 'high-performance gym':
      return <GymIcon className={className} size={size} />;
    default:
      return <Activity className={className} size={size} />;
  }
};
