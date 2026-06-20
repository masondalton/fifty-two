import { Link, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { Alert, FlatList, Pressable, StyleSheet } from 'react-native';

import GameCard from '@/components/GameCard';
import LoadingScreen from '@/components/LoadingScreen';
import ScreenContainer from '@/components/ScreenContainer';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { deleteUserGame, getUserCreatedGames } from '@/db/queries';
import { useDatabase } from '@/context/DatabaseContext';
import type { GameWithState } from '@/types/game';
import { useColorScheme } from '@/components/useColorScheme';

export default function MyGamesScreen() {
  const { db, ready, refreshKey, refresh } = useDatabase();
  const [games, setGames] = useState<GameWithState[]>([]);
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  const load = useCallback(async () => {
    if (!db) return;
    setGames(await getUserCreatedGames(db));
  }, [db]);

  useFocusEffect(
    useCallback(() => {
      load();
    }, [load, refreshKey])
  );

  const handleDelete = (game: GameWithState) => {
    Alert.alert('Delete Game', `Remove "${game.name}"?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          if (!db) return;
          await deleteUserGame(db, game.id);
          refresh();
          load();
        },
      },
    ]);
  };

  if (!ready) return <LoadingScreen />;

  return (
    <ScreenContainer scroll={false} style={{ flex: 1 }}>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <>
            <Text style={[styles.hint, { color: colors.muted }]}>
              Games you create are stored locally on this device.
            </Text>
            <Link href={'/create-game' as never} asChild>
              <Pressable style={[styles.createBtn, { backgroundColor: colors.accent }]}>
                <Text style={styles.createBtnText}>+ Create New Game</Text>
              </Pressable>
            </Link>
          </>
        }
        renderItem={({ item }) => (
          <View>
            <GameCard game={item} showFavorite={false} />
            <Pressable onPress={() => handleDelete(item)} style={styles.deleteBtn}>
              <Text style={styles.deleteText}>Delete</Text>
            </Pressable>
          </View>
        )}
        ListEmptyComponent={
          <Text style={[styles.empty, { color: colors.muted }]}>
            No custom games yet. Tap Create above to write and save your own rule sets locally.
          </Text>
        }
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { padding: 16, paddingBottom: 32 },
  hint: { fontSize: 14, marginBottom: 12, lineHeight: 20 },
  createBtn: {
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    marginBottom: 20,
  },
  createBtnText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  deleteBtn: { alignItems: 'flex-end', marginTop: -8, marginBottom: 12 },
  deleteText: { color: '#ef4444', fontSize: 13, fontWeight: '600' },
  empty: { textAlign: 'center', marginTop: 32, fontSize: 15, lineHeight: 22 },
});
