import {
  attachUserState,
  gameSeedToStored,
  getStorageData,
  saveStorageData,
  type DbHandle,
} from '@/db/database.web';
import type { GameSeed, GameWithState, RuleSection } from '@/types/game';

export async function getAllGames(_db: DbHandle): Promise<GameWithState[]> {
  const data = await getStorageData();
  return attachUserState(data.games, data.userState);
}

export async function searchGames(db: DbHandle, query: string): Promise<GameWithState[]> {
  const all = await getAllGames(db);
  if (!query.trim()) return all;
  const q = query.toLowerCase();
  return all.filter(
    (game) =>
      game.name.toLowerCase().includes(q) ||
      game.summary.toLowerCase().includes(q) ||
      game.tags.some((tag) => tag.toLowerCase().includes(q))
  );
}

export async function getFavoriteGames(db: DbHandle): Promise<GameWithState[]> {
  return (await getAllGames(db)).filter((g) => g.userState?.isFavorite);
}

export async function getRecentlyOpenedGames(db: DbHandle, limit = 5): Promise<GameWithState[]> {
  const all = await getAllGames(db);
  return all
    .filter((g) => g.userState?.lastOpenedAt)
    .sort(
      (a, b) =>
        new Date(b.userState!.lastOpenedAt!).getTime() - new Date(a.userState!.lastOpenedAt!).getTime()
    )
    .slice(0, limit);
}

export async function getUserCreatedGames(db: DbHandle): Promise<GameWithState[]> {
  return (await getAllGames(db)).filter((g) => g.isUserCreated);
}

export async function getGameById(_db: DbHandle, id: string): Promise<GameWithState | null> {
  const all = await getAllGames(_db);
  return all.find((g) => g.id === id) ?? null;
}

async function upsertUserState(gameId: string, patch: Partial<import('@/types/game').UserGameState>) {
  const data = await getStorageData();
  const current = data.userState[gameId] ?? {
    gameId,
    isFavorite: false,
    customNotes: '',
    customRulesOverride: null,
    lastOpenedAt: null,
  };
  data.userState[gameId] = { ...current, ...patch, gameId };
  await saveStorageData(data);
}

export async function setFavorite(_db: DbHandle, gameId: string, isFavorite: boolean): Promise<void> {
  await upsertUserState(gameId, { isFavorite });
}

export async function setCustomNotes(_db: DbHandle, gameId: string, notes: string): Promise<void> {
  await upsertUserState(gameId, { customNotes: notes });
}

export async function setCustomRulesOverride(
  _db: DbHandle,
  gameId: string,
  rules: RuleSection[] | null
): Promise<void> {
  await upsertUserState(gameId, { customRulesOverride: rules });
}

export async function touchLastOpened(_db: DbHandle, gameId: string): Promise<void> {
  await upsertUserState(gameId, { lastOpenedAt: new Date().toISOString() });
}

export async function createUserGame(_db: DbHandle, game: GameSeed): Promise<string> {
  const data = await getStorageData();
  const stored = gameSeedToStored(game);
  data.games.push(stored);
  await saveStorageData(data);
  return stored.id;
}

export async function deleteUserGame(_db: DbHandle, gameId: string): Promise<void> {
  const data = await getStorageData();
  data.games = data.games.filter((g) => !(g.id === gameId && g.isUserCreated));
  delete data.userState[gameId];
  await saveStorageData(data);
}

export async function exportAllData(db: DbHandle): Promise<string> {
  const games = await getAllGames(db);
  const payload = {
    exportedAt: new Date().toISOString(),
    app: 'Fifty-Two',
    version: 1,
    userGames: games.filter((g) => g.isUserCreated),
    userState: games
      .filter((g) => g.userState && (g.userState.isFavorite || g.userState.customNotes || g.userState.customRulesOverride))
      .map((g) => {
        const { gameId: _id, ...state } = g.userState!;
        return { gameId: g.id, gameSlug: g.slug, ...state };
      }),
  };
  return JSON.stringify(payload, null, 2);
}

export async function addGameRequest(_db: DbHandle, name: string): Promise<void> {
  const data = await getStorageData();
  data.gameRequests.push({
    id: `req-${Date.now()}`,
    name: name.trim(),
    submittedAt: new Date().toISOString(),
  });
  await saveStorageData(data);
}

export async function getGameRequests(_db: DbHandle): Promise<import('@/types/game').GameRequest[]> {
  const data = await getStorageData();
  return [...data.gameRequests].sort(
    (a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
  );
}

export async function getGameRequestCounts(
  _db: DbHandle
): Promise<import('@/types/game').GameRequestCount[]> {
  const data = await getStorageData();
  const counts = new Map<string, { name: string; count: number }>();
  for (const req of data.gameRequests) {
    const key = req.name.toLowerCase();
    const existing = counts.get(key);
    if (existing) {
      existing.count += 1;
    } else {
      counts.set(key, { name: req.name, count: 1 });
    }
  }
  return Array.from(counts.values()).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}
