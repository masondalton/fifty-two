import AsyncStorage from '@react-native-async-storage/async-storage';

import { SEED_VERSION, slugify } from '@/db/shared';
import { seedGames } from '@/seed';
import type { Game, GameSeed, GameWithState, UserGameState } from '@/types/game';

export type DbHandle = symbol;

const STORAGE_KEY = 'gamemaster_data_v1';
export const DB_HANDLE: DbHandle = Symbol('web-db');

export { SEED_VERSION, slugify, parseRulesJson } from '@/db/shared';

interface StoredGame extends Game {}

interface StoragePayload {
  seedVersion: number;
  games: StoredGame[];
  userState: Record<string, UserGameState>;
  gameRequests: GameRequest[];
}

export interface GameRequest {
  id: string;
  name: string;
  submittedAt: string;
}

let cache: StoragePayload | null = null;

async function load(): Promise<StoragePayload> {
  if (cache) return cache;

  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (raw) {
    const parsed = JSON.parse(raw) as Partial<StoragePayload>;
    cache = {
      seedVersion: parsed.seedVersion ?? 0,
      games: parsed.games ?? [],
      userState: parsed.userState ?? {},
      gameRequests: parsed.gameRequests ?? [],
    };
    return cache;
  }

  cache = { seedVersion: 0, games: [], userState: {}, gameRequests: [] };
  return cache;
}

async function persist(data: StoragePayload): Promise<void> {
  cache = data;
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function seedToGame(game: GameSeed, now: string): StoredGame {
  return {
    id: `builtin-${game.slug}`,
    slug: game.slug,
    name: game.name,
    summary: game.summary,
    setup: game.setup,
    rules: game.rules,
    winCondition: game.winCondition,
    tags: game.tags,
    playerMin: game.playerMin,
    playerMax: game.playerMax,
    deckType: game.deckType,
    variations: game.variations,
    sourceUrl: game.sourceUrl,
    sourceName: game.sourceName,
    isBuiltIn: true,
    isUserCreated: false,
    difficulty: game.difficulty,
    estimatedMinutes: game.estimatedMinutes,
    createdAt: now,
    updatedAt: now,
  };
}

async function importSeedGames(data: StoragePayload): Promise<void> {
  const now = new Date().toISOString();
  const userGames = data.games.filter((g) => g.isUserCreated);
  data.games = [...seedGames.map((g) => seedToGame(g, now)), ...userGames];
}

export async function getDatabase(): Promise<DbHandle> {
  return DB_HANDLE;
}

export async function initDatabase(): Promise<DbHandle> {
  const data = await load();

  if (data.seedVersion < SEED_VERSION) {
    await importSeedGames(data);
    data.seedVersion = SEED_VERSION;
    await persist(data);
  }

  return DB_HANDLE;
}

export async function resetSeedData(_db: DbHandle): Promise<void> {
  const data = await load();
  await importSeedGames(data);
  data.seedVersion = SEED_VERSION;
  await persist(data);
}

export async function getStorageData(): Promise<StoragePayload> {
  return load();
}

export async function saveStorageData(data: StoragePayload): Promise<void> {
  await persist(data);
}

export function attachUserState(games: StoredGame[], userState: Record<string, UserGameState>): GameWithState[] {
  return games
    .map((game) => ({
      ...game,
      userState: userState[game.id] ?? {
        gameId: game.id,
        isFavorite: false,
        customNotes: '',
        customRulesOverride: null,
        lastOpenedAt: null,
      },
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function gameSeedToStored(game: GameSeed): StoredGame {
  const now = new Date().toISOString();
  const baseSlug = game.slug || slugify(game.name);
  const uniqueSlug = `${baseSlug}-${Date.now()}`;
  return {
    id: `user-${uniqueSlug}`,
    slug: uniqueSlug,
    name: game.name,
    summary: game.summary,
    setup: game.setup,
    rules: game.rules,
    winCondition: game.winCondition,
    tags: game.tags,
    playerMin: game.playerMin,
    playerMax: game.playerMax,
    deckType: game.deckType,
    variations: game.variations,
    sourceUrl: game.sourceUrl ?? '',
    sourceName: game.sourceName ?? 'User created',
    isBuiltIn: false,
    isUserCreated: true,
    difficulty: game.difficulty,
    estimatedMinutes: game.estimatedMinutes,
    createdAt: now,
    updatedAt: now,
  };
}
