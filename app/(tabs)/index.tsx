import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { Pressable, StyleSheet, View as RNView } from 'react-native';

import GameCard from '@/components/GameCard';
import LoadingScreen from '@/components/LoadingScreen';
import MenuButton from '@/components/MenuButton';
import ScreenContainer from '@/components/ScreenContainer';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { cardShadow, spacing } from '@/constants/Layout';
import { Brand, Typography } from '@/constants/Theme';
import { getFavoriteGames } from '@/db/queries';
import { useDatabase } from '@/context/DatabaseContext';
import type { GameWithState } from '@/types/game';
import { useColorScheme } from '@/components/useColorScheme';

export default function HomeScreen() {
  const router = useRouter();
  const { db, ready, error, refreshKey } = useDatabase();
  const [favorites, setFavorites] = useState<GameWithState[]>([]);
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  const loadFavorites = useCallback(async () => {
    if (!db) return;
    setFavorites(await getFavoriteGames(db));
  }, [db]);

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [loadFavorites, refreshKey])
  );

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Failed to load: {error}</Text>
      </View>
    );
  }

  if (!ready) {
    return <LoadingScreen message="Setting up Fifty-Two..." />;
  }

  return (
    <ScreenContainer>
      <RNView style={[styles.hero, { backgroundColor: Brand.felt }, cardShadow]}>
        <RNView style={styles.logoRow}>
          <RNView style={styles.logoMark}>
            <Text style={styles.logoText}>52</Text>
          </RNView>
          <RNView>
            <Text style={[styles.heroTitle, { fontFamily: Typography.display }]}>Fifty-Two</Text>
            <Text style={styles.heroSubtitle}>Every card game, in your pocket.</Text>
          </RNView>
        </RNView>
      </RNView>

      <Pressable onPress={() => router.push('/intro')} style={styles.guideLink}>
        <Text style={[styles.guideLinkText, { color: colors.accent, fontFamily: Typography.bodyMedium }]}>
          Read the welcome guide
        </Text>
      </Pressable>

      <Text style={[styles.sectionLabel, { color: colors.sectionLabel, fontFamily: Typography.bodyMedium }]}>
        EXPLORE
      </Text>
      <View style={[styles.menuList, { backgroundColor: colors.card, borderColor: colors.border }, cardShadow]}>
        <MenuButton href="/(tabs)/games" iconName="library-outline" title="Browse All Games" subtitle="Search 40+ games by name or category" />
        <MenuButton href="/theory" iconName="book-outline" title="Game Theory" subtitle="Principles and card game families" />
        <MenuButton href="/my-games" iconName="create-outline" title="My Created Games" subtitle="Write and save your own rule sets locally" />
        <MenuButton href="/submit" iconName="add-circle-outline" title="Request a Game" subtitle="Suggest a game to add to the catalog" isLast />
      </View>

      <Text style={[styles.sectionLabel, styles.sectionSpaced, { color: colors.sectionLabel, fontFamily: Typography.bodyMedium }]}>
        FAVORITES
      </Text>
      {favorites.length === 0 ? (
        <Text style={[styles.empty, { color: colors.muted, fontFamily: Typography.body }]}>
          No favorites yet. Star a game from its detail page or{' '}
          <Text
            onPress={() => router.push('/(tabs)/games' as never)}
            style={{ color: colors.accent, fontFamily: Typography.bodyMedium }}>
            browse all games
          </Text>
          .
        </Text>
      ) : (
        favorites.map((game) => <GameCard key={game.id} game={game} />)
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: spacing.lg },
  hero: { borderRadius: 16, padding: spacing.lg, marginBottom: spacing.sm },
  guideLink: {
    alignSelf: 'flex-start',
    marginBottom: spacing.xl,
    paddingVertical: spacing.xs,
  },
  guideLinkText: {
    fontSize: 15,
    fontWeight: '600',
  },
  logoRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  logoMark: {
    width: 52,
    height: 52,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Brand.gold,
  },
  logoText: { fontSize: 20, fontWeight: '800', color: Brand.ink },
  heroTitle: { fontSize: 28, fontWeight: '800', color: '#fff' },
  heroSubtitle: { fontSize: 14, color: 'rgba(255,255,255,0.85)', marginTop: 2 },
  sectionLabel: {
    fontSize: 11,
    letterSpacing: 1,
    marginBottom: spacing.sm,
  },
  sectionSpaced: {
    marginTop: spacing.xl,
  },
  menuList: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: spacing.sm,
  },
  empty: { fontSize: 14, lineHeight: 22 },
});
