import { initDatabase as initWeb, type DbHandle } from '@/db/database.web';

export type AppDatabase = DbHandle;

export async function initDatabase(): Promise<AppDatabase> {
  return initWeb();
}

export { resetSeedData, slugify, parseRulesJson, SEED_VERSION } from '@/db/database.web';
