import * as SQLite from 'expo-sqlite';

import { SEED_VERSION, slugify } from '@/db/shared';
import { seedGames } from '@/seed';
import type { GameSeed } from '@/types/game';

export type DbHandle = SQLite.SQLiteDatabase;

let dbInstance: SQLite.SQLiteDatabase | null = null;

export { SEED_VERSION, slugify, parseRulesJson } from '@/db/shared';

export async function getDatabase(): Promise<SQLite.SQLiteDatabase> {
  if (dbInstance) return dbInstance;
  dbInstance = await SQLite.openDatabaseAsync('gamemaster.db');
  return dbInstance;
}

export async function initDatabase(): Promise<SQLite.SQLiteDatabase> {
  const db = await getDatabase();

  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS app_meta (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS games (
      id TEXT PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      summary TEXT NOT NULL,
      setup TEXT NOT NULL,
      rules_json TEXT NOT NULL,
      win_condition TEXT NOT NULL,
      tags_json TEXT NOT NULL,
      player_min INTEGER NOT NULL,
      player_max INTEGER NOT NULL,
      deck_type TEXT NOT NULL,
      variations_json TEXT,
      source_url TEXT,
      source_name TEXT,
      is_built_in INTEGER NOT NULL DEFAULT 1,
      is_user_created INTEGER NOT NULL DEFAULT 0,
      difficulty TEXT,
      estimated_minutes INTEGER,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS user_game_state (
      game_id TEXT PRIMARY KEY,
      is_favorite INTEGER NOT NULL DEFAULT 0,
      custom_notes TEXT NOT NULL DEFAULT '',
      custom_rules_override_json TEXT,
      last_opened_at TEXT,
      FOREIGN KEY (game_id) REFERENCES games(id)
    );
    CREATE TABLE IF NOT EXISTS game_requests (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      submitted_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_games_name ON games(name);
    CREATE INDEX IF NOT EXISTS idx_games_built_in ON games(is_built_in);
    CREATE INDEX IF NOT EXISTS idx_games_user_created ON games(is_user_created);
  `);

  const row = await db.getFirstAsync<{ value: string }>(
    'SELECT value FROM app_meta WHERE key = ?',
    ['seed_version']
  );
  const currentVersion = row ? parseInt(row.value, 10) : 0;

  if (currentVersion < SEED_VERSION) {
    await importSeedGames(db);
    await db.runAsync('INSERT OR REPLACE INTO app_meta (key, value) VALUES (?, ?)', [
      'seed_version',
      String(SEED_VERSION),
    ]);
  }

  return db;
}

async function importSeedGames(db: SQLite.SQLiteDatabase): Promise<void> {
  const now = new Date().toISOString();

  await db.withTransactionAsync(async () => {
    for (const game of seedGames) {
      await upsertBuiltInGame(db, game, now);
    }
  });
}

export async function resetSeedData(db: SQLite.SQLiteDatabase): Promise<void> {
  const now = new Date().toISOString();

  await db.withTransactionAsync(async () => {
    await db.runAsync('DELETE FROM games WHERE is_built_in = 1');
    for (const game of seedGames) {
      await upsertBuiltInGame(db, game, now);
    }
    await db.runAsync('INSERT OR REPLACE INTO app_meta (key, value) VALUES (?, ?)', [
      'seed_version',
      String(SEED_VERSION),
    ]);
  });
}

async function upsertBuiltInGame(
  db: SQLite.SQLiteDatabase,
  game: GameSeed,
  now: string
): Promise<void> {
  const id = `builtin-${game.slug}`;
  await db.runAsync(
    `INSERT OR REPLACE INTO games (
      id, slug, name, summary, setup, rules_json, win_condition,
      tags_json, player_min, player_max, deck_type, variations_json,
      source_url, source_name, is_built_in, is_user_created,
      difficulty, estimated_minutes, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 0, ?, ?, ?, ?)`,
    [
      id,
      game.slug,
      game.name,
      game.summary,
      game.setup,
      JSON.stringify(game.rules),
      game.winCondition,
      JSON.stringify(game.tags),
      game.playerMin,
      game.playerMax,
      game.deckType,
      game.variations ? JSON.stringify(game.variations) : null,
      game.sourceUrl,
      game.sourceName,
      game.difficulty ?? null,
      game.estimatedMinutes ?? null,
      now,
      now,
    ]
  );
}
