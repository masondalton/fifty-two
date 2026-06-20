export interface RuleSection {
  title: string;
  content: string;
}

export interface Variation {
  id: string;
  name: string;
  summary?: string;
  setup?: string;
  rules?: RuleSection[];
  winCondition?: string;
}

export type DeckType =
  | 'standard52'
  | 'standard52+jokers'
  | 'double52'
  | 'pinochle'
  | 'rook32'
  | 'skat32'
  | 'other';

export interface GameSeed {
  slug: string;
  name: string;
  summary: string;
  setup: string;
  rules: RuleSection[];
  winCondition: string;
  tags: string[];
  playerMin: number;
  playerMax: number;
  deckType: DeckType;
  variations?: Variation[];
  sourceUrl: string;
  sourceName: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  estimatedMinutes?: number;
}

export interface Game extends GameSeed {
  id: string;
  isBuiltIn: boolean;
  isUserCreated: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserGameState {
  gameId: string;
  isFavorite: boolean;
  customNotes: string;
  customRulesOverride: RuleSection[] | null;
  lastOpenedAt: string | null;
}

export interface GameWithState extends Game {
  userState?: UserGameState;
}

export interface TheoryLesson {
  id: string;
  title: string;
  summary: string;
  content: string;
  group: 'principles' | 'families';
  links?: { label: string; url: string }[];
}

export interface GameRequest {
  id: string;
  name: string;
  submittedAt: string;
}

export interface GameRequestCount {
  name: string;
  count: number;
}
