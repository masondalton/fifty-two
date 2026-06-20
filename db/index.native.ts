import type { SQLiteDatabase } from 'expo-sqlite';

import { initDatabase as initNative, type DbHandle as NativeDbHandle } from '@/db/database.native';

export type AppDatabase = SQLiteDatabase;

export async function initDatabase(): Promise<AppDatabase> {
  return initNative();
}

export { resetSeedData, slugify, parseRulesJson, SEED_VERSION } from '@/db/database.native';
export type { NativeDbHandle };
