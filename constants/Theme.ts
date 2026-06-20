export const Brand = {
  ink: '#0F172A',
  cream: '#F5F0E8',
  card: '#FFFFFF',
  suitRed: '#B91C1C',
  suitBlack: '#1C1917',
  gold: '#CA8A04',
  goldLight: '#FDE68A',
  felt: '#1B4332',
  muted: '#334155',
  mutedLight: '#475569',
  border: '#E2E8F0',
};

export const CategoryColors: Record<string, { primary: string; secondary: string; label: string }> = {
  'trick-taking': { primary: '#334155', secondary: '#64748B', label: 'Trick-Taking' },
  rummy: { primary: '#44403C', secondary: '#78716C', label: 'Rummy' },
  shedding: { primary: '#365314', secondary: '#65A30D', label: 'Shedding' },
  solitaire: { primary: '#4C1D95', secondary: '#7C3AED', label: 'Solitaire' },
  party: { primary: '#881337', secondary: '#BE123C', label: 'Party' },
  fishing: { primary: '#155E75', secondary: '#0891B2', label: 'Fishing' },
  default: { primary: Brand.ink, secondary: Brand.muted, label: 'Card Game' },
};

export const Typography = {
  display: 'PlayfairDisplay_700Bold',
  displayRegular: 'PlayfairDisplay_400Regular',
  body: 'DMSans_400Regular',
  bodyMedium: 'DMSans_500Medium',
  bodyBold: 'DMSans_700Bold',
};
