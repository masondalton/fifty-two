import type { SQLiteDatabase } from 'expo-sqlite';

import { parseRulesJson, slugify } from '@/db/shared';
import type { Game, GameSeed, GameWithState, RuleSection } from '@/types/game';

type DbHandle = SQLiteDatabase;

function mapGameRow(row: Record<string, unknown>): Game {
  return {
    id: row.id as string,
    slug: row.slug as string,
    name: row.name as string,
    summary: row.summary as string,
    setup: row.setup as string,
    rules: parseRulesJson(row.rules_json as string),
    winCondition: row.win_condition as string,
    tags: JSON.parse(row.tags_json as string) as string[],
    playerMin: row.player_min as number,
    playerMax: row.player_max as number,
    deckType: row.deck_type as Game['deckType'],
    variations: row.variations_json
      ? (JSON.parse(row.variations_json as string) as Game['variations'])
      : undefined,
    sourceUrl: (row.source_url as string) ?? '',
    sourceName: (row.source_name as string) ?? '',
    isBuiltIn: (row.is_built_in as number) === 1,
    isUserCreated: (row.is_user_created as number) === 1,
    difficulty: row.difficulty as Game['difficulty'],
    estimatedMinutes: row.estimated_minutes as number | undefined,
    createdAt: row.created_at as string,
    updatedAt: row.updated_at as string,
  };
}

function mapRowToGameWithState(row: Record<string, unknown>): GameWithState {
  const game = mapGameRow(row);
  return {
    ...game,
    userState: {
      gameId: game.id,
      isFavorite: (row.is_favorite as number) === 1,
      customNotes: (row.custom_notes as string) ?? '',
      customRulesOverride: row.custom_rules_override_json
        ? (JSON.parse(row.custom_rules_override_json as string) as RuleSection[])
        : null,
      lastOpenedAt: (row.last_opened_at as string) ?? null,
    },
  };
}

export async function getAllGames(db: DbHandle): Promise<GameWithState[]> {
  const rows = await db.getAllAsync<Record<string, unknown>>(
    `SELECT g.*, u.is_favorite, u.custom_notes, u.custom_rules_override_json, u.last_opened_at
     FROM games g
     LEFT JOIN user_game_state u ON u.game_id = g.id
     ORDER BY g.name COLLATE NOCASE ASC`
  );
  return rows.map(mapRowToGameWithState);
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

export async function getUserCreatedGames(db: DbHandle): Promise<GameWithState[]> {
  return (await getAllGames(db)).filter((g) => g.isUserCreated);
}

export async function getGameById(db: DbHandle, id: string): Promise<GameWithState | null> {
  const row = await db.getFirstAsync<Record<string, unknown>>(
    `SELECT g.*, u.is_favorite, u.custom_notes, u.custom_rules_override_json, u.last_opened_at
     FROM games g
     LEFT JOIN user_game_state u ON u.game_id = g.id
     WHERE g.id = ?`,
    [id]
  );
  return row ? mapRowToGameWithState(row) : null;
}

export async function setFavorite(db: DbHandle, gameId: string, isFavorite: boolean): Promise<void> {
  await db.runAsync(
    `INSERT INTO user_game_state (game_id, is_favorite, custom_notes)
     VALUES (?, ?, '')
     ON CONFLICT(game_id) DO UPDATE SET is_favorite = excluded.is_favorite`,
    [gameId, isFavorite ? 1 : 0]
  );
}

export async function setCustomNotes(db: DbHandle, gameId: string, notes: string): Promise<void> {
  await db.runAsync(
    `INSERT INTO user_game_state (game_id, is_favorite, custom_notes)
     VALUES (?, 0, ?)
     ON CONFLICT(game_id) DO UPDATE SET custom_notes = excluded.custom_notes`,
    [gameId, notes]
  );
}

export async function setCustomRulesOverride(
  db: DbHandle,
  gameId: string,
  rules: RuleSection[] | null
): Promise<void> {
  await db.runAsync(
    `INSERT INTO user_game_state (game_id, is_favorite, custom_notes, custom_rules_override_json)
     VALUES (?, 0, '', ?)
     ON CONFLICT(game_id) DO UPDATE SET custom_rules_override_json = excluded.custom_rules_override_json`,
    [gameId, rules ? JSON.stringify(rules) : null]
  );
}

export async function touchLastOpened(db: DbHandle, gameId: string): Promise<void> {
  const now = new Date().toISOString();
  await db.runAsync(
    `INSERT INTO user_game_state (game_id, is_favorite, custom_notes, last_opened_at)
     VALUES (?, 0, '', ?)
     ON CONFLICT(game_id) DO UPDATE SET last_opened_at = excluded.last_opened_at`,
    [gameId, now]
  );
}

export async function createUserGame(db: DbHandle, game: GameSeed): Promise<string> {
  const now = new Date().toISOString();
  const baseSlug = game.slug || slugify(game.name);
  const slug = `${baseSlug}-${Date.now()}`;
  const id = `user-${slug}`;

  await db.runAsync(
    `INSERT INTO games (
      id, slug, name, summary, setup, rules_json, win_condition,
      tags_json, player_min, player_max, deck_type, variations_json,
      source_url, source_name, is_built_in, is_user_created,
      difficulty, estimated_minutes, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, 1, ?, ?, ?, ?)`,
    [
      id, slug, game.name, game.summary, game.setup,
      JSON.stringify(game.rules), game.winCondition, JSON.stringify(game.tags),
      game.playerMin, game.playerMax, game.deckType,
      game.variations ? JSON.stringify(game.variations) : null,
      game.sourceUrl ?? '', game.sourceName ?? 'User created',
      game.difficulty ?? null, game.estimatedMinutes ?? null, now, now,
    ]
  );
  return id;
}

export async function deleteUserGame(db: DbHandle, gameId: string): Promise<void> {
  await db.withTransactionAsync(async () => {
    await db.runAsync('DELETE FROM user_game_state WHERE game_id = ?', [gameId]);
    await db.runAsync('DELETE FROM games WHERE id = ? AND is_user_created = 1', [gameId]);
  });
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

export async function addGameRequest(db: DbHandle, name: string): Promise<void> {
  const id = `req-${Date.now()}`;
  const now = new Date().toISOString();
  await db.runAsync('INSERT INTO game_requests (id, name, submitted_at) VALUES (?, ?, ?)', [
    id,
    name.trim(),
    now,
  ]);
}

export async function getGameRequests(db: DbHandle): Promise<import('@/types/game').GameRequest[]> {
  const rows = await db.getAllAsync<{ id: string; name: string; submitted_at: string }>(
    'SELECT id, name, submitted_at FROM game_requests ORDER BY submitted_at DESC'
  );
  return rows.map((r) => ({ id: r.id, name: r.name, submittedAt: r.submitted_at }));
}

export async function getGameRequestCounts(
  db: DbHandle
): Promise<import('@/types/game').GameRequestCount[]> {
  const rows = await db.getAllAsync<{ name: string; count: number }>(
    `SELECT MIN(name) as name, COUNT(*) as count FROM game_requests GROUP BY LOWER(TRIM(name)) ORDER BY count DESC, name ASC`
  );
  return rows.map((r) => ({ name: r.name, count: r.count }));
}

// Type alias for native context
export type { SQLiteDatabase };
