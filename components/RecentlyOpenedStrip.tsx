import { useRouter } from 'expo-router';
import { Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { Text } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { spacing } from '@/constants/Layout';
import { Typography } from '@/constants/Theme';
import { getGameVisual } from '@/lib/gameVisuals';
import type { GameWithState } from '@/types/game';
import { useColorScheme } from '@/components/useColorScheme';

interface RecentlyOpenedStripProps {
  games: GameWithState[];
}

export default function RecentlyOpenedStrip({ games }: RecentlyOpenedStripProps) {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  if (games.length === 0) return null;

  return (
    <View style={styles.wrap}>
      <Text style={[styles.label, { color: colors.sectionLabel, fontFamily: Typography.bodyMedium }]}>
        RECENTLY OPENED
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {games.map((game) => {
          const visual = getGameVisual(game);
          return (
            <Pressable
              key={game.id}
              onPress={() => router.push(`/game/${game.id}` as never)}
              style={({ pressed }) => [
                styles.chip,
                {
                  backgroundColor: colors.card,
                  borderColor: colors.border,
                  opacity: pressed ? 0.85 : 1,
                },
              ]}>
              <Text style={[styles.chipCategory, { color: colors.muted, fontFamily: Typography.bodyMedium }]}>
                {visual.label.toUpperCase()}
              </Text>
              <Text style={[styles.chipName, { fontFamily: Typography.bodyBold }]} numberOfLines={1}>
                {game.name}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const webScroll = Platform.OS === 'web' ? ({ display: 'flex' } as const) : {};

const styles = StyleSheet.create({
  wrap: {
    marginBottom: spacing.md,
  },
  label: {
    fontSize: 11,
    letterSpacing: 1,
    marginBottom: spacing.sm,
  },
  scroll: {
    gap: spacing.sm,
    paddingRight: spacing.sm,
    ...webScroll,
  },
  chip: {
    width: 140,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
  },
  chipCategory: {
    fontSize: 9,
    letterSpacing: 0.6,
    marginBottom: 2,
  },
  chipName: {
    fontSize: 14,
    fontWeight: '600',
  },
});
