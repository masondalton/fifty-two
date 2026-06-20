import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet, useWindowDimensions, View as RNView } from 'react-native';

import GameCard from '@/components/GameCard';
import LoadingScreen from '@/components/LoadingScreen';
import RecentlyOpenedStrip from '@/components/RecentlyOpenedStrip';
import SearchBar from '@/components/SearchBar';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { CategoryColors, Typography } from '@/constants/Theme';
import { getGridColumns, spacing } from '@/constants/Layout';
import { getRecentlyOpenedGames, searchGames } from '@/db/queries';
import { useDatabase } from '@/context/DatabaseContext';
import { getGameCategory } from '@/lib/gameVisuals';
import type { GameWithState } from '@/types/game';
import { useColorScheme } from '@/components/useColorScheme';

const FILTER_TAGS = ['all', 'trick-taking', 'rummy', 'shedding', 'solitaire', 'party', 'fishing'] as const;
type SortMode = 'alpha' | 'recent';

export default function GamesScreen() {
  const { db, ready, error, refreshKey } = useDatabase();
  const [games, setGames] = useState<GameWithState[]>([]);
  const [recentGames, setRecentGames] = useState<GameWithState[]>([]);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<(typeof FILTER_TAGS)[number]>('all');
  const [sort, setSort] = useState<SortMode>('alpha');
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];
  const { width } = useWindowDimensions();
  const numColumns = getGridColumns(width);

  const loadGames = useCallback(async () => {
    if (!db) return;
    setGames(await searchGames(db, query));
    setRecentGames(await getRecentlyOpenedGames(db));
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
    let list = filter === 'all' ? games : games.filter((g) => getGameCategory(g) === filter || g.tags.includes(filter));
    if (sort === 'alpha') {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    } else {
      list = [...list].sort((a, b) => {
        const aTime = a.userState?.lastOpenedAt ? new Date(a.userState.lastOpenedAt).getTime() : 0;
        const bTime = b.userState?.lastOpenedAt ? new Date(b.userState.lastOpenedAt).getTime() : 0;
        if (bTime !== aTime) return bTime - aTime;
        return a.name.localeCompare(b.name);
      });
    }
    return list;
  }, [games, filter, sort]);

  const showRecents = !query.trim();

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
            {showRecents && <RecentlyOpenedStrip games={recentGames} />}
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
            <RNView style={styles.countRow}>
              <Text style={[styles.count, { color: colors.muted, fontFamily: Typography.body }]}>
                {filtered.length} game{filtered.length === 1 ? '' : 's'}
              </Text>
              <RNView style={styles.sortRow}>
                {(['alpha', 'recent'] as const).map((mode) => {
                  const active = sort === mode;
                  const label = mode === 'alpha' ? 'A–Z' : 'Recent';
                  return (
                    <Pressable
                      key={mode}
                      onPress={() => setSort(mode)}
                      style={[
                        styles.sortChip,
                        active
                          ? { backgroundColor: colors.accent, borderColor: colors.accent }
                          : { backgroundColor: 'transparent', borderColor: colors.border },
                      ]}>
                      <Text
                        style={[
                          styles.sortChipText,
                          { color: active ? '#fff' : colors.text, fontFamily: Typography.bodyMedium },
                        ]}>
                        {label}
                      </Text>
                    </Pressable>
                  );
                })}
              </RNView>
            </RNView>
          </RNView>
        }
        renderItem={({ item }) => (
          <RNView style={numColumns > 1 ? styles.gridItem : undefined}>
            <GameCard game={item} />
          </RNView>
        )}
        ListEmptyComponent={
          <RNView style={styles.emptyWrap}>
            <Text style={[styles.empty, { color: colors.muted }]}>No games match your search.</Text>
            {(query.trim() || filter !== 'all') && (
              <Pressable
                onPress={() => {
                  setQuery('');
                  setFilter('all');
                }}
                style={styles.clearBtn}>
                <Text style={[styles.clearBtnText, { color: colors.accent, fontFamily: Typography.bodyMedium }]}>
                  Clear search and filters
                </Text>
              </Pressable>
            )}
          </RNView>
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
  countRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  count: { fontSize: 13 },
  sortRow: { flexDirection: 'row', gap: spacing.sm },
  sortChip: { borderRadius: 999, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 4 },
  sortChipText: { fontSize: 12 },
  emptyWrap: { alignItems: 'center', marginTop: spacing.lg },
  empty: { fontSize: 15, textAlign: 'center' },
  clearBtn: { marginTop: spacing.md, padding: spacing.sm },
  clearBtnText: { fontSize: 15, fontWeight: '600' },
});
