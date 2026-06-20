import type { RuleSection } from '@/types/game';

export const SEED_VERSION = 2;

export function parseRulesJson(json: string): RuleSection[] {
  return JSON.parse(json) as RuleSection[];
}

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
