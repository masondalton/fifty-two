import { Brand } from '@/constants/Theme';

const tintColorLight = Brand.ink;
const tintColorDark = Brand.goldLight;

export default {
  light: {
    text: Brand.ink,
    background: Brand.cream,
    card: Brand.card,
    tint: tintColorLight,
    tabIconDefault: Brand.muted,
    tabIconSelected: Brand.gold,
    border: Brand.border,
    muted: Brand.muted,
    mutedLight: Brand.mutedLight,
    secondary: 'rgba(15, 23, 42, 0.78)',
    icon: 'rgba(15, 23, 42, 0.6)',
    sectionLabel: 'rgba(15, 23, 42, 0.8)',
    accent: Brand.gold,
    suitRed: Brand.suitRed,
    suitBlack: Brand.suitBlack,
    tabBar: Brand.ink,
    hero: Brand.felt,
  },
  dark: {
    text: '#F1F5F9',
    background: '#0B1120',
    card: '#1E293B',
    tint: tintColorDark,
    tabIconDefault: '#64748B',
    tabIconSelected: Brand.gold,
    border: '#334155',
    muted: '#94A3B8',
    mutedLight: '#64748B',
    secondary: 'rgba(241, 245, 249, 0.78)',
    icon: 'rgba(241, 245, 249, 0.6)',
    sectionLabel: 'rgba(241, 245, 249, 0.8)',
    accent: Brand.gold,
    suitRed: '#F87171',
    suitBlack: '#E2E8F0',
    tabBar: '#020617',
    hero: Brand.felt,
  },
};
