import { CategoryColors } from '@/constants/Theme';
import type { GameWithState } from '@/types/game';

export type GameCategory =
  | 'trick-taking'
  | 'rummy'
  | 'shedding'
  | 'solitaire'
  | 'party'
  | 'fishing'
  | 'default';

const TAG_TO_CATEGORY: Record<string, GameCategory> = {
  'trick-taking': 'trick-taking',
  partnership: 'trick-taking',
  bidding: 'trick-taking',
  trump: 'trick-taking',
  rummy: 'rummy',
  melding: 'rummy',
  shedding: 'shedding',
  climbing: 'shedding',
  solitaire: 'solitaire',
  patience: 'solitaire',
  '1-player': 'solitaire',
  party: 'party',
  bluffing: 'party',
  speed: 'party',
  fishing: 'fishing',
  capture: 'fishing',
};

const CATEGORY_SUIT: Record<GameCategory, string> = {
  'trick-taking': '♠',
  rummy: '♦',
  shedding: '♣',
  solitaire: '♠',
  party: '♥',
  fishing: '♦',
  default: '52',
};

export function getGameCategory(game: Pick<GameWithState, 'tags'>): GameCategory {
  for (const tag of game.tags) {
    const cat = TAG_TO_CATEGORY[tag.toLowerCase()];
    if (cat) return cat;
  }
  return 'default';
}

export function getGameVisual(game: Pick<GameWithState, 'tags'>) {
  const category = getGameCategory(game);
  const colors = CategoryColors[category] ?? CategoryColors.default;
  return {
    category,
    label: colors.label,
    primary: colors.primary,
    secondary: colors.secondary,
    suit: CATEGORY_SUIT[category],
  };
}
