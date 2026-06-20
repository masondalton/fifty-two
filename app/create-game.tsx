import { router } from 'expo-router';
import { useState, type ReactNode } from 'react';
import {
  ActivityIndicator,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  View as RNView,
} from 'react-native';

import ScreenContainer from '@/components/ScreenContainer';
import FeedbackBanner from '@/components/FeedbackBanner';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { Typography } from '@/constants/Theme';
import { createUserGame } from '@/db/queries';
import { slugify } from '@/db/index';
import { useDatabase } from '@/context/DatabaseContext';
import { useToast } from '@/hooks/useToast';
import type { DeckType, GameSeed } from '@/types/game';
import { useColorScheme } from '@/components/useColorScheme';

const DECK_TYPES: DeckType[] = [
  'standard52',
  'standard52+jokers',
  'double52',
  'pinochle',
  'rook32',
  'skat32',
  'other',
];

export default function CreateGameScreen() {
  const { db, ready, refresh } = useDatabase();
  const { showToast } = useToast();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');
  const [setup, setSetup] = useState('');
  const [rules, setRules] = useState('');
  const [winCondition, setWinCondition] = useState('');
  const [playerMin, setPlayerMin] = useState('2');
  const [playerMax, setPlayerMax] = useState('4');
  const [deckType, setDeckType] = useState<DeckType>('standard52');
  const [tags, setTags] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [saving, setSaving] = useState(false);

  const buildGameSeed = (): GameSeed | null => {
    if (!name.trim() || !summary.trim() || !setup.trim() || !rules.trim() || !winCondition.trim()) {
      setFeedback({ type: 'error', message: 'Please fill in name, summary, setup, rules, and win condition.' });
      return null;
    }

    const min = parseInt(playerMin, 10) || 1;
    const max = parseInt(playerMax, 10) || min;

    return {
      slug: slugify(name),
      name: name.trim(),
      summary: summary.trim(),
      setup: setup.trim(),
      rules: [{ title: 'Rules', content: rules.trim() }],
      winCondition: winCondition.trim(),
      tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
      playerMin: min,
      playerMax: max,
      deckType,
      sourceUrl: '',
      sourceName: 'User created',
    };
  };

  const saveLocally = async () => {
    if (!ready || !db) {
      setFeedback({ type: 'error', message: 'Database is still loading. Please wait a moment.' });
      return;
    }

    const seed = buildGameSeed();
    if (!seed) return;

    setSaving(true);
    setFeedback(null);

    try {
      const id = await createUserGame(db, seed);
      refresh();
      showToast('Saved to My Games!');
      if (Platform.OS === 'web') {
        setTimeout(() => router.push(`/game/${id}`), 600);
      } else {
        router.push(`/game/${id}`);
      }
    } catch (err) {
      setFeedback({
        type: 'error',
        message: err instanceof Error ? err.message : 'Failed to save game. Please try again.',
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <ScreenContainer>
      <Text style={[styles.hint, { color: colors.muted, fontFamily: Typography.body }]}>
        Author a custom game with your own rules. Stored locally on this device.
      </Text>

      {feedback && <FeedbackBanner message={feedback.message} type={feedback.type} />}

      <Field label="Game Name" colors={colors}>
        <TextInput style={inputStyle(colors)} value={name} onChangeText={setName} placeholder="My House Variant" placeholderTextColor={colors.muted} />
      </Field>

      <Field label="Summary" colors={colors}>
        <TextInput style={[inputStyle(colors), styles.multiline]} multiline value={summary} onChangeText={setSummary} placeholder="One-line description" placeholderTextColor={colors.muted} />
      </Field>

      <Field label="Setup" colors={colors}>
        <TextInput style={[inputStyle(colors), styles.multiline]} multiline value={setup} onChangeText={setSetup} placeholder="Deck, deal, players..." placeholderTextColor={colors.muted} />
      </Field>

      <Field label="Rules" colors={colors}>
        <TextInput style={[inputStyle(colors), styles.multilineLarge]} multiline value={rules} onChangeText={setRules} placeholder="How to play..." placeholderTextColor={colors.muted} />
      </Field>

      <Field label="Win Condition" colors={colors}>
        <TextInput style={[inputStyle(colors), styles.multiline]} multiline value={winCondition} onChangeText={setWinCondition} placeholder="How do you win?" placeholderTextColor={colors.muted} />
      </Field>

      <RNView style={styles.row}>
        <Field label="Min Players" colors={colors} compact>
          <TextInput style={inputStyle(colors)} value={playerMin} onChangeText={setPlayerMin} keyboardType="number-pad" />
        </Field>
        <Field label="Max Players" colors={colors} compact>
          <TextInput style={inputStyle(colors)} value={playerMax} onChangeText={setPlayerMax} keyboardType="number-pad" />
        </Field>
      </RNView>

      <Field label="Tags (comma-separated)" colors={colors}>
        <TextInput style={inputStyle(colors)} value={tags} onChangeText={setTags} placeholder="party, 2-player, shedding" placeholderTextColor={colors.muted} />
      </Field>

      <Text style={styles.label}>Deck Type</Text>
      <RNView style={styles.deckRow}>
        {DECK_TYPES.map((d) => (
          <Pressable
            key={d}
            onPress={() => setDeckType(d)}
            style={[styles.deckChip, { backgroundColor: deckType === d ? colors.tint : colors.card, borderColor: colors.border }]}>
            <Text style={[styles.deckChipText, deckType === d && { color: '#fff' }]}>{d}</Text>
          </Pressable>
        ))}
      </RNView>

      <Pressable
        style={[styles.primaryBtn, { backgroundColor: colors.accent, opacity: !ready || saving ? 0.6 : 1 }]}
        onPress={saveLocally}
        disabled={!ready || saving}>
        {saving ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.primaryBtnText}>Save to My Games</Text>
        )}
      </Pressable>
    </ScreenContainer>
  );
}

function Field({ label, children, colors, compact }: { label: string; children: ReactNode; colors: (typeof Colors)['light']; compact?: boolean }) {
  return (
    <View style={[compact && styles.compactField]}>
      <Text style={[styles.label, { fontFamily: Typography.bodyMedium }]}>{label}</Text>
      {children}
    </View>
  );
}

function inputStyle(colors: (typeof Colors)['light']) {
  return {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    color: colors.text,
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    fontFamily: Typography.body,
  };
}

const styles = StyleSheet.create({
  content: { padding: 16, paddingBottom: 40 },
  hint: { fontSize: 14, lineHeight: 20, marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 6, marginTop: 12 },
  multiline: { minHeight: 80, textAlignVertical: 'top' as const },
  multilineLarge: { minHeight: 140, textAlignVertical: 'top' as const },
  row: { flexDirection: 'row', gap: 12 },
  compactField: { flex: 1 },
  deckRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 8 },
  deckChip: { borderRadius: 999, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 6 },
  deckChipText: { fontSize: 11, fontWeight: '600' },
  primaryBtn: { borderRadius: 10, padding: 16, alignItems: 'center', marginTop: 24 },
  primaryBtnText: { color: '#fff', fontWeight: '700', fontSize: 16, fontFamily: Typography.bodyBold },
});
