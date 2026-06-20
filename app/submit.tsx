import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  Linking,
  Platform,
  Pressable,
  Share,
  StyleSheet,
  TextInput,
} from 'react-native';

import ScreenContainer from '@/components/ScreenContainer';
import FeedbackBanner from '@/components/FeedbackBanner';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { Typography } from '@/constants/Theme';
import { addGameRequest, getGameRequestCounts } from '@/db/queries';
import { useDatabase } from '@/context/DatabaseContext';
import { useToast } from '@/hooks/useToast';
import type { GameRequestCount } from '@/types/game';
import { useColorScheme } from '@/components/useColorScheme';

const REQUEST_EMAIL = 'requests@fiftytwo.app';

export default function SubmitScreen() {
  const { db, ready, refreshKey, refresh } = useDatabase();
  const { showToast } = useToast();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  const [name, setName] = useState('');
  const [counts, setCounts] = useState<GameRequestCount[]>([]);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const loadCounts = useCallback(async () => {
    if (!db) return;
    setCounts(await getGameRequestCounts(db));
  }, [db]);

  useFocusEffect(
    useCallback(() => {
      loadCounts();
    }, [loadCounts, refreshKey])
  );

  const handleSubmit = async () => {
    if (!ready || !db) {
      setFeedback({ type: 'error', message: 'Still loading — please wait a moment.' });
      return;
    }
    if (!name.trim()) {
      setFeedback({ type: 'error', message: 'Enter a game name to submit.' });
      return;
    }

    setSubmitting(true);
    setFeedback(null);
    try {
      await addGameRequest(db, name.trim());
      refresh();
      await loadCounts();
      showToast('Request added!');
      setName('');
    } catch {
      setFeedback({ type: 'error', message: 'Could not save request. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleSendRequest = async () => {
    const gameName = name.trim() || 'a new card game';
    const body = `Hi Fifty-Two team,\n\nI'd like to see "${gameName}" added to the app.\n\nThanks!`;
    const subject = `Game request: ${gameName}`;

    if (Platform.OS === 'web') {
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share({ title: subject, text: body });
        return;
      }
      window.location.href = `mailto:${REQUEST_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    try {
      await Share.share({ message: `${subject}\n\n${body}` });
    } catch {
      Linking.openURL(`mailto:${REQUEST_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    }
  };

  return (
    <ScreenContainer>
      <Text style={[styles.title, { fontFamily: Typography.display }]}>Request a Game</Text>
      <Text style={[styles.hint, { color: colors.muted, fontFamily: Typography.body }]}>
        Tell us what to add next. We'll prioritize the most-requested games.
      </Text>

      {feedback && <FeedbackBanner message={feedback.message} type={feedback.type} />}

      <Text style={[styles.label, { fontFamily: Typography.bodyMedium }]}>Game name</Text>
      <TextInput
        style={[styles.input, { color: colors.text, borderColor: colors.border, backgroundColor: colors.card, fontFamily: Typography.body }]}
        value={name}
        onChangeText={setName}
        placeholder="e.g. Wizard, Canasta, Skull..."
        placeholderTextColor={colors.muted}
        autoCapitalize="words"
      />

      <Pressable
        style={[styles.primaryBtn, { backgroundColor: colors.accent, opacity: !ready || submitting ? 0.6 : 1 }]}
        onPress={handleSubmit}
        disabled={!ready || submitting}>
        {submitting ? <ActivityIndicator color="#fff" /> : <Text style={styles.primaryBtnText}>Add Request</Text>}
      </Pressable>

      <Pressable style={[styles.secondaryBtn, { borderColor: colors.border }]} onPress={handleSendRequest}>
        <Text style={[styles.secondaryBtnText, { fontFamily: Typography.bodyMedium }]}>Send via Email / Share</Text>
      </Pressable>

      {counts.length > 0 && (
        <View style={styles.tallySection}>
          <Text style={[styles.tallyTitle, { fontFamily: Typography.displayRegular }]}>Your Requests</Text>
          <Text style={[styles.tallyHint, { color: colors.muted }]}>Most requested on this device</Text>
          {counts.map((item) => (
            <View key={item.name} style={[styles.tallyRow, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <Text style={[styles.tallyName, { fontFamily: Typography.bodyMedium }]}>{item.name}</Text>
              <Text style={[styles.tallyCount, { color: colors.accent, fontFamily: Typography.bodyBold }]}>
                ×{item.count}
              </Text>
            </View>
          ))}
        </View>
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, paddingBottom: 40 },
  title: { fontSize: 26, fontWeight: '700', marginBottom: 8 },
  hint: { fontSize: 14, lineHeight: 21, marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 8 },
  input: { borderWidth: 1, borderRadius: 12, padding: 14, fontSize: 16, marginBottom: 8 },
  primaryBtn: { borderRadius: 12, padding: 16, alignItems: 'center', marginTop: 12 },
  primaryBtnText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  secondaryBtn: { borderRadius: 12, borderWidth: 1, padding: 16, alignItems: 'center', marginTop: 10 },
  secondaryBtnText: { fontSize: 15 },
  tallySection: { marginTop: 32 },
  tallyTitle: { fontSize: 20, fontWeight: '600', marginBottom: 4 },
  tallyHint: { fontSize: 13, marginBottom: 12 },
  tallyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    padding: 14,
    marginBottom: 8,
  },
  tallyName: { fontSize: 15, flex: 1 },
  tallyCount: { fontSize: 15 },
});
