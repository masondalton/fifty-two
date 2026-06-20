import type { GameWithState } from '@/types/game';

export function formatPlayerCount(game: GameWithState): string {
  if (game.playerMin === game.playerMax) {
    return `${game.playerMin} player${game.playerMin === 1 ? '' : 's'}`;
  }
  return `${game.playerMin}–${game.playerMax} players`;
}

export function formatDeckType(deckType: string): string {
  const labels: Record<string, string> = {
    standard52: 'Standard 52-card deck',
    'standard52+jokers': '52 cards + jokers',
    double52: 'Two standard decks',
    pinochle: 'Pinochle deck',
    rook32: 'Rook deck',
    skat32: '32-card deck (7–A)',
    other: 'Special deck',
  };
  return labels[deckType] ?? deckType;
}

export function gameToMarkdown(game: GameWithState, includeNotes = true): string {
  const lines: string[] = [
    `# ${game.name}`,
    '',
    game.summary,
    '',
    `**Players:** ${formatPlayerCount(game)}`,
    `**Deck:** ${formatDeckType(game.deckType)}`,
    '',
    '## Setup',
    game.setup,
    '',
    '## Rules',
  ];

  for (const section of game.rules) {
    lines.push(`### ${section.title}`, section.content, '');
  }

  if (game.userState?.customRulesOverride?.length) {
    lines.push('## Your House Rules');
    for (const section of game.userState.customRulesOverride) {
      lines.push(`### ${section.title}`, section.content, '');
    }
  }

  lines.push('## Win Condition', game.winCondition, '');

  if (game.variations?.length) {
    lines.push('## Variations');
    for (const v of game.variations) {
      lines.push(`### ${v.name}`);
      if (v.summary) lines.push(v.summary);
      if (v.rules) {
        for (const r of v.rules) {
          lines.push(`**${r.title}:** ${r.content}`);
        }
      }
      lines.push('');
    }
  }

  if (includeNotes && game.userState?.customNotes) {
    lines.push('## My Notes', game.userState.customNotes, '');
  }

  if (game.sourceUrl) {
    lines.push(`---`, `Source: [${game.sourceName}](${game.sourceUrl})`);
  }

  return lines.join('\n');
}

export function gameToPlainText(game: GameWithState): string {
  return gameToMarkdown(game).replace(/[#*_`]/g, '');
}
