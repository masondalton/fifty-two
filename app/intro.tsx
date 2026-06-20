import { useRouter } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { Pressable, StyleSheet, View as RNView } from 'react-native';

import ScreenContainer from '@/components/ScreenContainer';
import { Text } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { cardShadow, spacing } from '@/constants/Layout';
import { Brand, Typography } from '@/constants/Theme';
import { hasSeenIntro, markIntroSeen } from '@/lib/onboarding';
import { useColorScheme } from '@/components/useColorScheme';

const SECTIONS = [
  {
    title: 'Welcome',
    body: 'Fifty-Two is your offline pocket reference for card game rules — no account, no connection required.',
  },
  {
    title: 'Browse',
    body: 'Explore 40+ built-in games. Search by name or filter by category — trick-taking, rummy, shedding, and more.',
  },
  {
    title: 'Make it yours',
    body: 'Star favorites, jot personal notes, and add house rules that supplement — never replace — the official rules.',
  },
  {
    title: 'Contribute',
    body: 'Request games you want added, or create your own variants and keep them locally on this device.',
  },
] as const;

export default function IntroScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];
  const [returning, setReturning] = useState(false);

  useEffect(() => {
    hasSeenIntro().then(setReturning);
  }, []);

  const continueToApp = useCallback(async () => {
    if (!returning) {
      await markIntroSeen();
    }
    router.replace('/(tabs)');
  }, [returning, router]);

  return (
    <ScreenContainer contentContainerStyle={styles.scrollContent}>
      <RNView style={[styles.hero, { backgroundColor: Brand.felt }, cardShadow]}>
        <RNView style={styles.logoRow}>
          <RNView style={styles.logoMark}>
            <Text style={styles.logoText}>52</Text>
          </RNView>
          <RNView style={styles.heroText}>
            <Text style={[styles.heroTitle, { fontFamily: Typography.display }]}>Fifty-Two</Text>
            <Text style={styles.heroSubtitle}>Every card game, in your pocket.</Text>
          </RNView>
        </RNView>
      </RNView>

      {SECTIONS.map((section, index) => (
        <RNView key={section.title} style={index > 0 ? styles.sectionSpaced : undefined}>
          <Text style={[styles.sectionTitle, { fontFamily: Typography.displayRegular }]}>{section.title}</Text>
          <Text style={[styles.sectionBody, { color: colors.muted, fontFamily: Typography.body }]}>{section.body}</Text>
        </RNView>
      ))}

      <Pressable
        style={({ pressed }) => [styles.primaryBtn, { backgroundColor: colors.accent, opacity: pressed ? 0.9 : 1 }]}
        onPress={continueToApp}>
        <Text style={[styles.primaryBtnText, { fontFamily: Typography.bodyBold }]}>
          {returning ? 'Continue' : 'Get Started'}
        </Text>
      </Pressable>

      {!returning && (
        <Pressable onPress={continueToApp} style={styles.secondaryLink}>
          <Text style={[styles.secondaryLinkText, { color: colors.muted, fontFamily: Typography.bodyMedium }]}>
            Browse games
          </Text>
        </Pressable>
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: spacing.xxl,
  },
  hero: {
    borderRadius: 16,
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  logoMark: {
    width: 52,
    height: 52,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Brand.gold,
  },
  logoText: {
    fontSize: 20,
    fontWeight: '800',
    color: Brand.ink,
  },
  heroText: {
    flex: 1,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
  },
  heroSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.85)',
    marginTop: 2,
  },
  sectionSpaced: {
    marginTop: spacing.lg,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },
  sectionBody: {
    fontSize: 15,
    lineHeight: 26,
  },
  primaryBtn: {
    borderRadius: 10,
    padding: spacing.md,
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  primaryBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryLink: {
    alignItems: 'center',
    marginTop: spacing.md,
    padding: spacing.sm,
  },
  secondaryLinkText: {
    fontSize: 15,
  },
});
