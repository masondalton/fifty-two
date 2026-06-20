import * as Sharing from 'expo-sharing';
import { Platform, Share } from 'react-native';

import { gameToPlainText } from '@/lib/formatGame';
import type { GameWithState } from '@/types/game';

export async function shareGame(game: GameWithState): Promise<boolean> {
  const message = gameToPlainText(game);

  try {
    if (Platform.OS === 'web') {
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share({ title: game.name, text: message });
        return true;
      }
      await navigator.clipboard.writeText(message);
      return true;
    }

    await Share.share({ title: game.name, message });
    return true;
  } catch {
    return false;
  }
}

export async function shareText(title: string, message: string): Promise<boolean> {
  try {
    if (Platform.OS === 'web') {
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share({ title, text: message });
        return true;
      }
      await navigator.clipboard.writeText(message);
      return true;
    }

    const available = await Sharing.isAvailableAsync();
    if (available) {
      await Share.share({ title, message });
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

export function printGame(game: GameWithState): void {
  if (Platform.OS !== 'web' || typeof window === 'undefined') {
    return;
  }
  window.print();
}
