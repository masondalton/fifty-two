import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Alert,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View as RNView,
  type View,
} from 'react-native';

import LoadingScreen from '@/components/LoadingScreen';
import RulesProse from '@/components/RulesProse';
import ScreenContainer from '@/components/ScreenContainer';
import { Text } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { breakpoints, cardShadow, spacing } from '@/constants/Layout';
import { Typography } from '@/constants/Theme';
import {
  getGameById,
  setCustomNotes,
  setCustomRulesOverride,
  setFavorite,
  touchLastOpened,
} from '@/db/queries';
import { useDatabase } from '@/context/DatabaseContext';
import { useToast } from '@/hooks/useToast';
import { formatDeckType, formatPlayerCount } from '@/lib/formatGame';
import { getGameVisual } from '@/lib/gameVisuals';
import { printGame, shareGame } from '@/lib/share';
import type { GameWithState, RuleSection } from '@/types/game';
import { useColorScheme } from '@/components/useColorScheme';

const SECTION_JUMPS = [
  { id: 'setup', label: 'Setup' },
  { id: 'rules', label: 'Rules' },
  { id: 'win', label: 'Win' },
  { id: 'notes', label: 'Notes' },
  { id: 'house', label: 'House' },
] as const;

export default function GameDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { db, ready, refresh } = useDatabase();
  const { showToast } = useToast();
  const navigation = useNavigation();
  const scrollRef = useRef<ScrollView>(null);
  const contentRef = useRef<View>(null);
  const sectionOffsets = useRef<Record<string, number>>({});
  const { width } = useWindowDimensions();
  const isDesktop = width >= breakpoints.desktop;
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  const [game, setGame] = useState<GameWithState | null>(null);
  const [notes, setNotes] = useState('');
  const [editingRules, setEditingRules] = useState(false);
  const [customRulesText, setCustomRulesText] = useState('');
  const [selectedVariation, setSelectedVariation] = useState<string | null>(null);

  const savedNotes = game?.userState?.customNotes ?? '';
  const savedHouseRules = game?.userState?.customRulesOverride?.[0]?.content ?? '';
  const notesDirty = notes !== savedNotes;
  const houseRulesDirty = editingRules && customRulesText !== savedHouseRules;
  const isDirty = notesDirty || houseRulesDirty;

  const loadGame = useCallback(async () => {
    if (!db || !id) return;
    const result = await getGameById(db, id);
    if (result) {
      setGame(result);
      setNotes(result.userState?.customNotes ?? '');
      navigation.setOptions({ title: result.name });
      await touchLastOpened(db, id);
    }
  }, [db, id, navigation]);

  useEffect(() => {
    loadGame();
  }, [loadGame]);

  const registerSection = useCallback((sectionId: string, node: View | null) => {
    if (!node || !contentRef.current) return;
    node.measureLayout(
      contentRef.current,
      (_x, y) => {
        sectionOffsets.current[sectionId] = y;
      },
      () => {}
    );
  }, []);

  const jumpToSection = (sectionId: string) => {
    const y = sectionOffsets.current[sectionId];
    if (y != null) {
      scrollRef.current?.scrollTo({ y: Math.max(0, y - spacing.sm), animated: true });
    }
  };

  const persistChanges = useCallback(async () => {
    if (!db || !game) return;
    if (notesDirty) {
      await setCustomNotes(db, game.id, notes);
    }
    if (houseRulesDirty) {
      if (!customRulesText.trim()) {
        await setCustomRulesOverride(db, game.id, null);
      } else {
        const override: RuleSection[] = [{ title: 'Your House Rules', content: customRulesText.trim() }];
        await setCustomRulesOverride(db, game.id, override);
      }
      setEditingRules(false);
    }
    refresh();
    await loadGame();
  }, [db, game, notes, notesDirty, houseRulesDirty, customRulesText, refresh, loadGame]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (!isDirty) return;
      e.preventDefault();
      Alert.alert('Unsaved changes', 'Save your notes or house rules before leaving?', [
        { text: "Don't save", style: 'destructive', onPress: () => navigation.dispatch(e.data.action) },
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Save',
          onPress: async () => {
            await persistChanges();
            navigation.dispatch(e.data.action);
          },
        },
      ]);
    });
    return unsubscribe;
  }, [navigation, isDirty, persistChanges]);

  const toggleFavorite = async () => {
    if (!db || !game) return;
    const next = !game.userState?.isFavorite;
    await setFavorite(db, game.id, next);
    setGame({ ...game, userState: { ...game.userState!, isFavorite: next } });
    refresh();
    showToast(next ? 'Added to favorites' : 'Removed from favorites');
  };

  const handleShare = async () => {
    if (!game) return;
    const ok = await shareGame(game);
    if (ok) showToast('Shared!');
  };

  const saveNotes = async () => {
    if (!db || !game) return;
    await setCustomNotes(db, game.id, notes);
    refresh();
    showToast('Saved!');
    await loadGame();
  };

  const saveCustomRules = async () => {
    if (!db || !game) return;
    if (!customRulesText.trim()) {
      await setCustomRulesOverride(db, game.id, null);
      showToast('Restored default rules');
    } else {
      const override: RuleSection[] = [{ title: 'Your House Rules', content: customRulesText.trim() }];
      await setCustomRulesOverride(db, game.id, override);
      showToast('House rules saved');
    }
    setEditingRules(false);
    await loadGame();
    refresh();
  };

  const resetCustomRules = async () => {
    if (!db || !game) return;
    await setCustomRulesOverride(db, game.id, null);
    setCustomRulesText('');
    setEditingRules(false);
    await loadGame();
    showToast('Restored default rules');
  };

  if (!ready || !game) {
    return <LoadingScreen message="Loading game..." />;
  }

  const activeVariation = game.variations?.find((v) => v.id === selectedVariation);
  const visual = getGameVisual(game);
  const baseRules = activeVariation?.rules ?? game.rules;
  const displaySetup = activeVariation?.setup ?? game.setup;
  const displayWin = activeVariation?.winCondition ?? game.winCondition;
  const houseRules = game.userState?.customRulesOverride;

  const visibleJumps = SECTION_JUMPS.filter(({ id: sectionId }) => {
    if (sectionId === 'setup') return !!displaySetup;
    if (sectionId === 'rules') return baseRules.length > 0;
    if (sectionId === 'win') return !!displayWin;
    return true;
  });

  const sidebar = (
    <RNView style={[isDesktop && styles.sidebar]}>
      <RNView style={[styles.heroMeta, cardShadow, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.categoryLabel, { color: colors.muted, fontFamily: Typography.bodyMedium }]}>
          {visual.label.toUpperCase()}
        </Text>
        <Text style={[styles.heroTitle, { fontFamily: Typography.display }]}>{game.name}</Text>
        <Text style={[styles.summary, { color: colors.muted, fontFamily: Typography.body }]}>{game.summary}</Text>

        <MetaRow label="Players" value={formatPlayerCount(game)} colors={colors} />
        <MetaRow label="Deck" value={formatDeckType(game.deckType)} colors={colors} />

        {game.tags.length > 0 && (
          <RNView style={styles.tags}>
            {game.tags.slice(0, 5).map((tag) => (
              <Text key={tag} style={[styles.tag, { borderColor: colors.border, color: colors.muted }]}>
                {tag}
              </Text>
            ))}
          </RNView>
        )}

        <RNView style={styles.actions}>
          <ActionButton
            label={game.userState?.isFavorite ? 'Favorited' : 'Favorite'}
            icon={game.userState?.isFavorite ? '★' : '☆'}
            onPress={toggleFavorite}
            colors={colors}
            accent
          />
          <ActionButton label="Share" onPress={handleShare} colors={colors} />
          {Platform.OS === 'web' && <ActionButton label="Print" onPress={() => printGame(game)} colors={colors} />}
        </RNView>
      </RNView>

      {game.variations && game.variations.length > 0 && (
        <RNView style={styles.variationBlock}>
          <Text style={[styles.variationLabel, { color: colors.muted, fontFamily: Typography.bodyMedium }]}>
            VARIATION
          </Text>
          <RNView style={styles.variationRow}>
            <VariationChip label="Standard" active={!selectedVariation} onPress={() => setSelectedVariation(null)} colors={colors} />
            {game.variations.map((v) => (
              <VariationChip key={v.id} label={v.name} active={selectedVariation === v.id} onPress={() => setSelectedVariation(v.id)} colors={colors} />
            ))}
          </RNView>
          {activeVariation?.summary && (
            <Text style={[styles.variationSummary, { color: colors.muted, fontFamily: Typography.body }]}>
              {activeVariation.summary}
            </Text>
          )}
        </RNView>
      )}
    </RNView>
  );

  const mainContent = (
    <RNView style={[isDesktop && styles.mainColumn]}>
      <RNView style={styles.jumpRow}>
        {visibleJumps.map(({ id: sectionId, label }) => (
          <Pressable
            key={sectionId}
            onPress={() => jumpToSection(sectionId)}
            style={[styles.jumpChip, { borderColor: colors.border }]}>
            <Text style={[styles.jumpChipText, { color: colors.text, fontFamily: Typography.bodyMedium }]}>{label}</Text>
          </Pressable>
        ))}
      </RNView>

      <RulesProse
        setup={displaySetup}
        rules={baseRules}
        winCondition={displayWin}
        houseRules={houseRules}
        registerSection={registerSection}
      />

      <RNView
        ref={(node) => registerSection('notes', node)}
        style={[styles.notesSection, { borderTopColor: colors.border }]}>
        <Text style={[styles.notesHeading, { fontFamily: Typography.displayRegular }]}>My Notes</Text>
        <TextInput
          style={[styles.notesInput, { color: colors.text, borderColor: colors.border, backgroundColor: colors.card, fontFamily: Typography.body }]}
          multiline
          value={notes}
          onChangeText={setNotes}
          placeholder="Table agreements, teaching tips, reminders..."
          placeholderTextColor={colors.muted}
        />
        <ActionButton label="Save Notes" onPress={saveNotes} colors={colors} accent />
      </RNView>

      <RNView ref={(node) => registerSection('house', node)} style={styles.notesSection}>
        <Text style={[styles.notesHeading, { fontFamily: Typography.displayRegular }]}>House Rules</Text>
        <Text style={[styles.houseHint, { color: colors.muted, fontFamily: Typography.body }]}>
          Add rules that supplement the official rules above — they won't replace them.
        </Text>
        {!editingRules ? (
          <ActionButton
            label={houseRules?.length ? 'Edit House Rules' : 'Add House Rules'}
            onPress={() => {
              setCustomRulesText(houseRules?.[0]?.content ?? '');
              setEditingRules(true);
            }}
            colors={colors}
          />
        ) : (
          <>
            <TextInput
              style={[styles.notesInput, styles.rulesInput, { color: colors.text, borderColor: colors.border, backgroundColor: colors.card, fontFamily: Typography.body }]}
              multiline
              value={customRulesText}
              onChangeText={setCustomRulesText}
              placeholder="Add rules that supplement the official rules above..."
              placeholderTextColor={colors.muted}
            />
            <RNView style={styles.editActions}>
              <ActionButton label="Save" onPress={saveCustomRules} colors={colors} accent />
              <ActionButton label="Cancel" onPress={() => setEditingRules(false)} colors={colors} />
              {houseRules?.length ? <ActionButton label="Clear" onPress={resetCustomRules} colors={colors} /> : null}
            </RNView>
          </>
        )}
      </RNView>

      {game.sourceUrl ? (
        <RNView style={styles.notesSection}>
          <Pressable onPress={() => Linking.openURL(game.sourceUrl)}>
            <Text style={[styles.sourceLink, { color: colors.accent, fontFamily: Typography.bodyMedium }]}>
              Source: {game.sourceName} ↗
            </Text>
          </Pressable>
        </RNView>
      ) : null}
    </RNView>
  );

  return (
    <ScreenContainer ref={scrollRef} nativeID="game-detail-print">
      <RNView ref={contentRef}>
        {!isDesktop && sidebar}
        <RNView style={isDesktop ? styles.desktopRow : undefined}>
          {isDesktop && sidebar}
          {mainContent}
        </RNView>
      </RNView>
    </ScreenContainer>
  );
}

function MetaRow({ label, value, colors }: { label: string; value: string; colors: (typeof Colors)['light'] }) {
  return (
    <RNView style={styles.metaRow}>
      <Text style={[styles.metaLabel, { color: colors.muted, fontFamily: Typography.bodyMedium }]}>{label}</Text>
      <Text style={[styles.metaValue, { fontFamily: Typography.body }]}>{value}</Text>
    </RNView>
  );
}

function ActionButton({
  label,
  onPress,
  colors,
  accent,
  icon,
}: {
  label: string;
  onPress: () => void;
  colors: (typeof Colors)['light'];
  accent?: boolean;
  icon?: string;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.actionBtn, accent ? { backgroundColor: colors.accent } : { borderColor: colors.border, borderWidth: 1 }]}>
      <Text style={[styles.actionBtnText, { color: accent ? '#fff' : colors.text, fontFamily: Typography.bodyMedium }]}>
        {icon ? `${icon} ` : ''}
        {label}
      </Text>
    </Pressable>
  );
}

function VariationChip({
  label,
  active,
  onPress,
  colors,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
  colors: (typeof Colors)['light'];
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.variationChip, active ? { backgroundColor: colors.accent } : { borderColor: colors.border, borderWidth: 1 }]}>
      <Text style={[styles.variationChipText, { color: active ? '#fff' : colors.text, fontFamily: Typography.bodyMedium }]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  desktopRow: {
    flexDirection: 'row',
    gap: spacing.xl,
    alignItems: 'flex-start',
  },
  sidebar: {
    width: 280,
    flexShrink: 0,
  },
  mainColumn: {
    flex: 1,
    minWidth: 0,
  },
  jumpRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  jumpChip: {
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  jumpChipText: {
    fontSize: 13,
    fontWeight: '600',
  },
  heroMeta: {
    borderRadius: 12,
    borderWidth: 1,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  categoryLabel: {
    fontSize: 10,
    letterSpacing: 0.8,
    marginBottom: spacing.xs,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: spacing.sm,
  },
  summary: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: spacing.md,
  },
  metaRow: {
    flexDirection: 'row',
    marginBottom: spacing.xs,
  },
  metaLabel: {
    width: 64,
    fontSize: 13,
  },
  metaValue: {
    flex: 1,
    fontSize: 14,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginVertical: spacing.md,
  },
  tag: {
    fontSize: 11,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    borderWidth: 1,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  actionBtn: {
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  actionBtnText: {
    fontSize: 14,
    fontWeight: '600',
  },
  variationBlock: {
    marginBottom: spacing.lg,
  },
  variationLabel: {
    fontSize: 10,
    letterSpacing: 0.8,
    marginBottom: spacing.sm,
  },
  variationRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  variationChip: {
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  variationChipText: {
    fontSize: 13,
  },
  variationSummary: {
    fontSize: 13,
    marginTop: spacing.sm,
    lineHeight: 20,
  },
  notesSection: {
    marginTop: spacing.xl,
    paddingTop: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: 'transparent',
  },
  notesHeading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: spacing.md,
  },
  houseHint: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: spacing.md,
  },
  notesInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: spacing.md,
    minHeight: 100,
    textAlignVertical: 'top',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: spacing.md,
  },
  rulesInput: {
    minHeight: 120,
  },
  editActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  sourceLink: {
    fontSize: 14,
    fontWeight: '600',
  },
});
