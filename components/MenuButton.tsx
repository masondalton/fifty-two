import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Platform, Pressable, StyleSheet, View } from 'react-native';

import { Text } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { spacing } from '@/constants/Layout';
import { Typography } from '@/constants/Theme';
import { useColorScheme } from '@/components/useColorScheme';

interface MenuButtonProps {
  href: string;
  title: string;
  subtitle: string;
  iconName: keyof typeof Ionicons.glyphMap;
  isLast?: boolean;
}

export default function MenuButton({ href, title, subtitle, iconName, isLast }: MenuButtonProps) {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  return (
    <Pressable
      onPress={() => router.push(href as never)}
      style={({ pressed }) => [
        styles.wrapper,
        !isLast && { borderBottomWidth: 1, borderBottomColor: colors.border },
        { opacity: pressed ? 0.7 : 1 },
      ]}>
      <View style={styles.row}>
        <View style={[styles.iconTile, { backgroundColor: colors.background }]}>
          <Ionicons name={iconName} size={22} color={colors.icon} />
        </View>
        <View style={styles.textWrap}>
          <Text style={[styles.title, { fontFamily: Typography.bodyBold }]} numberOfLines={1}>
            {title}
          </Text>
          <Text style={[styles.subtitle, { color: colors.secondary, fontFamily: Typography.body }]}>{subtitle}</Text>
        </View>
        <View style={styles.chevronWrap}>
          <Ionicons name="chevron-forward" size={18} color={colors.icon} />
        </View>
      </View>
    </Pressable>
  );
}

const webRow = Platform.OS === 'web' ? ({ display: 'flex' } as const) : {};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: spacing.md,
    ...webRow,
  },
  iconTile: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  textWrap: {
    flex: 1,
    minWidth: 0,
    marginHorizontal: spacing.md,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 13,
    marginTop: 2,
    lineHeight: 18,
  },
  chevronWrap: {
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
});
