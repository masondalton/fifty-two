import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system/legacy';
import * as Sharing from 'expo-sharing';

import { exportAllData } from '@/db/queries';
import type { AppDatabase } from '@/db/index';

export async function exportUserData(db: AppDatabase): Promise<void> {
  const json = await exportAllData(db);
  const filename = `fifty-two-backup-${Date.now()}.json`;

  const path = `${FileSystem.cacheDirectory}${filename}`;
  await FileSystem.writeAsStringAsync(path, json);

  if (await Sharing.isAvailableAsync()) {
    await Sharing.shareAsync(path, { mimeType: 'application/json' });
  }
}

export async function importUserData(db: AppDatabase): Promise<boolean> {
  try {
    const result = await DocumentPicker.getDocumentAsync({ type: 'application/json' });
    if (result.canceled || !result.assets?.[0]) return false;

    const content = await FileSystem.readAsStringAsync(result.assets[0].uri);
    const data = JSON.parse(content) as {
      userState?: Array<{
        gameId: string;
        isFavorite: boolean;
        customNotes: string;
        customRulesOverride: unknown;
      }>;
    };

    if (data.userState) {
      for (const state of data.userState) {
        await db.runAsync(
          `INSERT INTO user_game_state (game_id, is_favorite, custom_notes, custom_rules_override_json)
           VALUES (?, ?, ?, ?)
           ON CONFLICT(game_id) DO UPDATE SET
             is_favorite = excluded.is_favorite,
             custom_notes = excluded.custom_notes,
             custom_rules_override_json = excluded.custom_rules_override_json`,
          [
            state.gameId,
            state.isFavorite ? 1 : 0,
            state.customNotes ?? '',
            state.customRulesOverride ? JSON.stringify(state.customRulesOverride) : null,
          ]
        );
      }
    }

    return true;
  } catch {
    return false;
  }
}
