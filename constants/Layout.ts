export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const breakpoints = {
  tablet: 768,
  desktop: 1024,
} as const;

export const maxContentWidth = {
  tablet: 720,
  desktop: 960,
} as const;

export function getContentPadding(width: number): number {
  if (width >= breakpoints.desktop) return spacing.xl;
  if (width >= breakpoints.tablet) return spacing.lg;
  return spacing.md;
}

export function getMaxContentWidth(width: number): number | '100%' {
  if (width >= breakpoints.desktop) return maxContentWidth.desktop;
  if (width >= breakpoints.tablet) return maxContentWidth.tablet;
  return '100%';
}

export function getGridColumns(width: number): number {
  if (width >= breakpoints.desktop) return 3;
  if (width >= breakpoints.tablet) return 2;
  return 1;
}

export const cardShadow = {
  shadowColor: '#0F172A',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.06,
  shadowRadius: 8,
  elevation: 2,
} as const;
