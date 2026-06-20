import * as DocumentPicker from 'expo-document-picker';
import { Platform } from 'react-native';

import { exportAllData } from '@/db/queries';
import { getStorageData, saveStorageData } from '@/db/database.web';
import type { AppDatabase } from '@/db/index';
import type { UserGameState } from '@/types/game';

export async function exportUserData(db: AppDatabase): Promise<void> {
  const json = await exportAllData(db);
  const filename = `fifty-two-backup-${Date.now()}.json`;

  if (Platform.OS === 'web') {
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
  }
}

export async function importUserData(_db: AppDatabase): Promise<boolean> {
  try {
    const result = await DocumentPicker.getDocumentAsync({ type: 'application/json' });
    if (result.canceled || !result.assets?.[0]) return false;

    const response = await fetch(result.assets[0].uri);
    const content = await response.text();
    const data = JSON.parse(content) as {
      userState?: Array<UserGameState & { gameSlug?: string }>;
    };

    if (data.userState) {
      const storage = await getStorageData();
      for (const state of data.userState) {
        storage.userState[state.gameId] = {
          gameId: state.gameId,
          isFavorite: state.isFavorite,
          customNotes: state.customNotes ?? '',
          customRulesOverride: state.customRulesOverride ?? null,
          lastOpenedAt: state.lastOpenedAt ?? null,
        };
      }
      await saveStorageData(storage);
    }

    return true;
  } catch {
    return false;
  }
}
