import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet, useWindowDimensions, View as RNView } from 'react-native';

import GameCard from '@/components/GameCard';
import LoadingScreen from '@/components/LoadingScreen';
import SearchBar from '@/components/SearchBar';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { CategoryColors, Typography } from '@/constants/Theme';
import { getGridColumns, spacing } from '@/constants/Layout';
import { searchGames } from '@/db/queries';
import { useDatabase } from '@/context/DatabaseContext';
import { getGameCategory } from '@/lib/gameVisuals';
import type { GameWithState } from '@/types/game';
import { useColorScheme } from '@/components/useColorScheme';

const FILTER_TAGS = ['all', 'trick-taking', 'rummy', 'shedding', 'solitaire', 'party', 'fishing'] as const;

export default function GamesScreen() {
  const { db, ready, error, refreshKey } = useDatabase();
  const [games, setGames] = useState<GameWithState[]>([]);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<(typeof FILTER_TAGS)[number]>('all');
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];
  const { width } = useWindowDimensions();
  const numColumns = getGridColumns(width);

  const loadGames = useCallback(async () => {
    if (!db) return;
    setGames(await searchGames(db, query));
  }, [db, query]);

  useFocusEffect(
    useCallback(() => {
      loadGames();
    }, [loadGames, refreshKey])
  );

  useEffect(() => {
    loadGames();
  }, [query, loadGames]);

  const filtered = useMemo(() => {
    if (filter === 'all') return games;
    return games.filter((g) => getGameCategory(g) === filter || g.tags.includes(filter));
  }, [games, filter]);

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Failed to load: {error}</Text>
      </View>
    );
  }

  if (!ready) return <LoadingScreen />;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={filtered}
        key={numColumns}
        numColumns={numColumns}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={numColumns > 1 ? styles.row : undefined}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <RNView style={styles.header}>
            <SearchBar value={query} onChangeText={setQuery} />
            <RNView style={styles.filters}>
              {FILTER_TAGS.map((tag) => {
                const active = filter === tag;
                const label = tag === 'all' ? 'All' : CategoryColors[tag]?.label ?? tag;
                return (
                  <Pressable
                    key={tag}
                    onPress={() => setFilter(tag)}
                    style={[
                      styles.chip,
                      active
                        ? { backgroundColor: colors.accent, borderColor: colors.accent }
                        : { backgroundColor: 'transparent', borderColor: colors.border },
                    ]}>
                    <Text
                      style={[
                        styles.chipText,
                        { color: active ? '#fff' : colors.text, fontFamily: Typography.bodyMedium },
                      ]}>
                      {label}
                    </Text>
                  </Pressable>
                );
              })}
            </RNView>
            <Text style={[styles.count, { color: colors.muted, fontFamily: Typography.body }]}>
              {filtered.length} game{filtered.length === 1 ? '' : 's'}
            </Text>
          </RNView>
        }
        renderItem={({ item }) => (
          <RNView style={numColumns > 1 ? styles.gridItem : undefined}>
            <GameCard game={item} />
          </RNView>
        )}
        ListEmptyComponent={
          <Text style={[styles.empty, { color: colors.muted }]}>No games match your search.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xxl,
    maxWidth: 960,
    width: '100%',
    alignSelf: 'center',
  },
  header: {
    paddingTop: spacing.md,
  },
  row: { gap: spacing.md },
  gridItem: { flex: 1 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  filters: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginBottom: spacing.md },
  chip: { borderRadius: 999, borderWidth: 1, paddingHorizontal: 12, paddingVertical: 6 },
  chipText: { fontSize: 12 },
  count: { fontSize: 13, marginBottom: spacing.sm },
  empty: { textAlign: 'center', marginTop: spacing.lg, fontSize: 15 },
});
