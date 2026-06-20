import { useRouter } from 'expo-router';
import { Platform, Pressable, StyleSheet, View } from 'react-native';

import { Text } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { cardShadow, spacing } from '@/constants/Layout';
import { Typography } from '@/constants/Theme';
import { formatPlayerCount } from '@/lib/formatGame';
import { getGameVisual } from '@/lib/gameVisuals';
import type { GameWithState } from '@/types/game';
import { useColorScheme } from '@/components/useColorScheme';

interface GameCardProps {
  game: GameWithState;
  showFavorite?: boolean;
}

const webFlex = Platform.OS === 'web' ? ({ display: 'flex' } as const) : {};

export default function GameCard({ game, showFavorite = true }: GameCardProps) {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];
  const visual = getGameVisual(game);

  return (
    <Pressable
      onPress={() => router.push(`/game/${game.id}` as never)}
      style={({ pressed }) => [
        styles.card,
        cardShadow,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
          borderLeftColor: visual.primary,
          opacity: pressed ? 0.92 : 1,
        },
      ]}>
      <View style={styles.body}>
        <View style={styles.header}>
          <View style={styles.titleBlock}>
            <Text style={[styles.category, { color: colors.muted, fontFamily: Typography.bodyMedium }]}>
              {visual.label.toUpperCase()}
            </Text>
            <Text style={[styles.name, { fontFamily: Typography.displayRegular }]} numberOfLines={1}>
              {game.name}
            </Text>
          </View>
          {showFavorite && game.userState?.isFavorite && (
            <Text style={[styles.star, { color: colors.accent }]}>★</Text>
          )}
        </View>
        <Text style={[styles.summary, { color: colors.secondary, fontFamily: Typography.body }]} numberOfLines={2}>
          {game.summary}
        </Text>
        <View style={styles.meta}>
          <OutlineBadge label={formatPlayerCount(game)} colors={colors} />
          {game.difficulty && <OutlineBadge label={game.difficulty} colors={colors} />}
          {game.estimatedMinutes && <OutlineBadge label={`~${game.estimatedMinutes}m`} colors={colors} />}
        </View>
      </View>
    </Pressable>
  );
}

function OutlineBadge({ label, colors }: { label: string; colors: (typeof Colors)['light'] }) {
  return (
    <Text style={[styles.badge, { borderColor: colors.border, color: colors.muted, fontFamily: Typography.bodyMedium }]}>
      {label}
    </Text>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 12,
    borderWidth: 1,
    borderLeftWidth: 3,
    marginBottom: spacing.md,
    overflow: 'hidden',
  },
  body: {
    padding: spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
    ...webFlex,
  },
  titleBlock: {
    flex: 1,
    minWidth: 0,
  },
  category: {
    fontSize: 10,
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  star: {
    fontSize: 18,
    marginLeft: spacing.sm,
    flexShrink: 0,
  },
  summary: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: spacing.md,
  },
  meta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    ...webFlex,
  },
  badge: {
    fontSize: 11,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
    borderWidth: 1,
    textTransform: 'capitalize',
  },
});
