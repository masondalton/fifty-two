import { Linking, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ScreenContainer from '@/components/ScreenContainer';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { spacing } from '@/constants/Layout';
import { Typography } from '@/constants/Theme';
import { theoryLessons } from '@/seed';
import { useColorScheme } from '@/components/useColorScheme';

export default function TheoryScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  const principles = theoryLessons.filter((l) => l.group === 'principles');
  const families = theoryLessons.filter((l) => l.group === 'families');

  return (
    <ScreenContainer>
      <Text style={[styles.intro, { fontFamily: Typography.body, color: colors.muted }]}>
        Learn how to think about games — from Nash equilibrium to trick-taking mechanics.
      </Text>

      <SectionHeader title="General Principles" icon="bulb-outline" colors={colors} />
      {principles.map((lesson, index) => (
        <LessonBlock key={lesson.id} lesson={lesson} colors={colors} isLast={index === principles.length - 1} />
      ))}

      <SectionHeader title="Card Game Families" icon="layers-outline" colors={colors} spaced />
      {families.map((lesson, index) => (
        <LessonBlock key={lesson.id} lesson={lesson} colors={colors} isLast={index === families.length - 1} />
      ))}
    </ScreenContainer>
  );
}

function SectionHeader({
  title,
  icon,
  colors,
  spaced,
}: {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  colors: (typeof Colors)['light'];
  spaced?: boolean;
}) {
  return (
    <View style={[styles.sectionHeader, spaced && { marginTop: spacing.xl }]}>
      <Ionicons name={icon} size={18} color={colors.accent} />
      <Text style={[styles.sectionTitle, { fontFamily: Typography.displayRegular }]}>{title}</Text>
    </View>
  );
}

function LessonBlock({
  lesson,
  colors,
  isLast,
}: {
  lesson: (typeof theoryLessons)[0];
  colors: (typeof Colors)['light'];
  isLast?: boolean;
}) {
  const paragraphs = lesson.content.split(/\n\n+/).filter(Boolean);

  return (
    <View style={[styles.lesson, !isLast && { borderBottomWidth: 1, borderBottomColor: colors.border }]}>
      <Text style={[styles.title, { fontFamily: Typography.displayRegular }]}>{lesson.title}</Text>
      <Text style={[styles.summary, { color: colors.muted, fontFamily: Typography.bodyMedium }]}>
        {lesson.summary}
      </Text>
      {paragraphs.map((part, i) => (
        <Text key={i} style={[styles.body, { fontFamily: Typography.body, color: colors.text }]}>
          {part.trim()}
        </Text>
      ))}
      {lesson.links && lesson.links.length > 0 && (
        <View style={styles.links}>
          {lesson.links.map((link) => (
            <Pressable key={link.url} onPress={() => Linking.openURL(link.url)}>
              <Text style={[styles.link, { color: colors.accent, fontFamily: Typography.bodyMedium }]}>
                {link.label} ↗
              </Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  intro: { fontSize: 15, lineHeight: 24, marginBottom: spacing.lg },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.lg },
  sectionTitle: { fontSize: 22, fontWeight: '700' },
  lesson: {
    paddingBottom: spacing.lg,
    marginBottom: spacing.lg,
  },
  title: { fontSize: 18, fontWeight: '700', marginBottom: spacing.xs },
  summary: { fontSize: 14, marginBottom: spacing.md, lineHeight: 20 },
  body: { fontSize: 15, lineHeight: 26, marginBottom: spacing.md },
  links: { marginTop: spacing.sm, gap: spacing.sm },
  link: { fontSize: 14, fontWeight: '600' },
});
