import { useRouter } from 'expo-router';
import { Alert, Pressable, StyleSheet, View as RNView } from 'react-native';

import ScreenContainer from '@/components/ScreenContainer';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { cardShadow, spacing } from '@/constants/Layout';
import { Typography } from '@/constants/Theme';
import { resetSeedData } from '@/db/index';
import { exportUserData, importUserData } from '@/lib/export';
import { useDatabase } from '@/context/DatabaseContext';
import { useThemeContext } from '@/context/ThemeContext';
import { useToast } from '@/hooks/useToast';
import { useColorScheme } from '@/components/useColorScheme';

export default function ProfileScreen() {
  const router = useRouter();
  const { db, refresh } = useDatabase();
  const { showToast } = useToast();
  const theme = useThemeContext();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  const handleExport = async () => {
    if (!db) return;
    await exportUserData(db);
    showToast('Exported!');
  };

  const handleImport = async () => {
    if (!db) return;
    const ok = await importUserData(db);
    if (ok) {
      refresh();
      showToast('Imported!');
    } else {
      Alert.alert('Import failed', 'Could not import backup.');
    }
  };

  const handleResetSeed = () => {
    Alert.alert(
      'Reset Built-in Games',
      'This reloads all built-in game rules. Your favorites and notes are kept.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: async () => {
            if (!db) return;
            await resetSeedData(db);
            refresh();
            showToast('Games reset');
          },
        },
      ]
    );
  };

  return (
    <ScreenContainer>
      <Text style={[styles.title, { fontFamily: Typography.display }]}>Profile</Text>
      <Text style={[styles.subtitle, { color: colors.muted, fontFamily: Typography.body }]}>
        All data stays on your device. Export a backup anytime.
      </Text>

      <Text style={[styles.sectionLabel, { color: colors.sectionLabel, fontFamily: Typography.bodyMedium }]}>
        APPEARANCE
      </Text>
      <RNView style={styles.themeRow}>
        {(['light', 'dark', 'system'] as const).map((option) => {
          const active = theme?.preference === option;
          const label = option === 'system' ? 'System' : option.charAt(0).toUpperCase() + option.slice(1);
          return (
            <Pressable
              key={option}
              onPress={() => theme?.setPreference(option)}
              style={[
                styles.themeChip,
                {
                  backgroundColor: active ? colors.accent : colors.card,
                  borderColor: active ? colors.accent : colors.border,
                },
              ]}>
              <Text
                style={[
                  styles.themeChipText,
                  { fontFamily: Typography.bodyMedium, color: active ? '#fff' : colors.text },
                ]}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </RNView>

      <ActionButton label="Export Backup" onPress={handleExport} colors={colors} />
      <ActionButton label="Import Backup" onPress={handleImport} colors={colors} />
      <ActionButton label="Reset Built-in Games" onPress={handleResetSeed} colors={colors} destructive />

      <View style={[styles.about, { backgroundColor: colors.card, borderColor: colors.border }, cardShadow]}>
        <Text style={[styles.aboutTitle, { fontFamily: Typography.displayRegular }]}>About Fifty-Two</Text>
        <Text style={[styles.aboutText, { color: colors.muted, fontFamily: Typography.body }]}>
          Fifty-Two is your offline pocket reference for card game rules. Built-in rules are
          summarized from public sources — always cite original references when sharing.
        </Text>
        <Pressable onPress={() => router.push('/intro')} style={styles.guideLink}>
          <Text style={[styles.guideLinkText, { color: colors.accent, fontFamily: Typography.bodyMedium }]}>
            Read the welcome guide
          </Text>
        </Pressable>
      </View>
    </ScreenContainer>
  );
}

function ActionButton({
  label,
  onPress,
  colors,
  destructive,
}: {
  label: string;
  onPress: () => void;
  colors: (typeof Colors)['light'];
  destructive?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { borderColor: destructive ? '#ef4444' : colors.border, opacity: pressed ? 0.85 : 1 },
      ]}>
      <Text style={[styles.buttonText, { fontFamily: Typography.bodyMedium }, destructive && { color: '#ef4444' }]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 28, fontWeight: '800', marginBottom: spacing.xs },
  subtitle: { fontSize: 14, marginBottom: spacing.lg, lineHeight: 22 },
  sectionLabel: {
    fontSize: 11,
    letterSpacing: 1,
    marginBottom: spacing.sm,
  },
  themeRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  themeChip: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  themeChipText: {
    fontSize: 14,
    fontWeight: '600',
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  about: {
    borderRadius: 12,
    borderWidth: 1,
    padding: spacing.lg,
    marginTop: spacing.lg,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: spacing.sm,
  },
  aboutText: {
    fontSize: 14,
    lineHeight: 22,
  },
  guideLink: {
    marginTop: spacing.md,
  },
  guideLinkText: {
    fontSize: 15,
    fontWeight: '600',
  },
});
