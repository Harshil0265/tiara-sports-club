// Colours sampled from the Tiara Sports Club logo
export const LOGO = {
  green: '#009444',
  orange: '#F7941E',
  vermilion: '#F15A29',
  navy: '#003147',
  blue: '#1C75BC',
  ink: '#0B0B0B',
};

export const SPORT_COLOR: Record<string, string> = {
  tennis: LOGO.green,
  pickleball: LOGO.navy,
  badminton: LOGO.vermilion,
  hyrox: LOGO.blue,
  gymnastics: LOGO.orange,
  cafe: LOGO.ink,
};

export const GROWTH_COLORS = [LOGO.green, LOGO.orange, LOGO.blue, LOGO.vermilion];

// Lighter equivalents so navy / black stay readable on dark backgrounds
const DARK_SPORT_COLOR: Record<string, string> = {
  ...SPORT_COLOR,
  pickleball: '#2F86B8',
  cafe: '#8A94A0',
};

export const getSportColor = (id: string, isDark: boolean): string =>
  (isDark ? DARK_SPORT_COLOR : SPORT_COLOR)[id] || LOGO.navy;
