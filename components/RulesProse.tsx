import { type ReactNode } from 'react';
import { StyleSheet, View, type View as ViewType } from 'react-native';

import { Text } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { spacing } from '@/constants/Layout';
import { Typography } from '@/constants/Theme';
import type { RuleSection } from '@/types/game';
import { useColorScheme } from '@/components/useColorScheme';

interface RulesProseProps {
  setup?: string;
  rules: RuleSection[];
  winCondition?: string;
  houseRules?: RuleSection[] | null;
  houseRulesTitle?: string;
  registerSection?: (id: string, node: ViewType | null) => void;
}

function Paragraphs({ text, muted }: { text: string; muted?: boolean }) {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];
  const parts = text.split(/\n\n+/).filter(Boolean);

  return (
    <>
      {parts.map((part, i) => (
        <Text
          key={i}
          style={[
            styles.paragraph,
            { color: muted ? colors.muted : colors.text, fontFamily: Typography.body },
          ]}>
          {part.trim()}
        </Text>
      ))}
    </>
  );
}

function SectionWrap({
  id,
  registerSection,
  children,
}: {
  id: string;
  registerSection?: RulesProseProps['registerSection'];
  children: ReactNode;
}) {
  return (
    <View
      ref={(node) => registerSection?.(id, node)}
      onLayout={() => {
        // Re-measure after layout shifts (e.g. variation change)
      }}>
      {children}
    </View>
  );
}

export default function RulesProse({
  setup,
  rules,
  winCondition,
  houseRules,
  houseRulesTitle = 'Your House Rules',
  registerSection,
}: RulesProseProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  return (
    <View style={styles.container}>
      {setup ? (
        <SectionWrap id="setup" registerSection={registerSection}>
          <View style={styles.section}>
            <Text style={[styles.sectionHeading, { fontFamily: Typography.displayRegular }]}>Setup</Text>
            <Paragraphs text={setup} />
          </View>
        </SectionWrap>
      ) : null}

      {rules.length > 0 && (
        <SectionWrap id="rules" registerSection={registerSection}>
          <View style={styles.section}>
            <Text style={[styles.sectionHeading, { fontFamily: Typography.displayRegular }]}>Rules</Text>
            {rules.map((section, index) => (
              <View key={`${section.title}-${index}`}>
                {index > 0 && <View style={[styles.divider, { backgroundColor: colors.border }]} />}
                <Text style={[styles.subHeading, { fontFamily: Typography.bodyBold }]}>{section.title}</Text>
                <Paragraphs text={section.content} muted />
              </View>
            ))}
          </View>
        </SectionWrap>
      )}

      {winCondition ? (
        <SectionWrap id="win" registerSection={registerSection}>
          <View style={styles.section}>
            <Text style={[styles.sectionHeading, { fontFamily: Typography.displayRegular }]}>Win Condition</Text>
            <View style={[styles.callout, { borderLeftColor: colors.accent }]}>
              <Paragraphs text={winCondition} />
            </View>
          </View>
        </SectionWrap>
      ) : null}

      {houseRules && houseRules.length > 0 && (
        <SectionWrap id="house-display" registerSection={registerSection}>
          <View style={styles.section}>
            <View style={[styles.divider, { backgroundColor: colors.border, marginBottom: spacing.lg }]} />
            <Text style={[styles.houseRulesLabel, { color: colors.accent, fontFamily: Typography.bodyBold }]}>
              {houseRulesTitle.toUpperCase()}
            </Text>
            {houseRules.map((section, index) => (
              <View key={`house-${section.title}-${index}`}>
                {section.title !== 'Custom House Rules' && section.title !== 'Your House Rules' && (
                  <Text style={[styles.subHeading, { fontFamily: Typography.bodyBold }]}>{section.title}</Text>
                )}
                <Paragraphs text={section.content} />
              </View>
            ))}
          </View>
        </SectionWrap>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.lg,
  },
  section: {
    marginBottom: spacing.sm,
  },
  sectionHeading: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: spacing.md,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: spacing.sm,
    marginTop: spacing.sm,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 26,
    marginBottom: spacing.md,
  },
  divider: {
    height: 1,
    marginVertical: spacing.lg,
  },
  callout: {
    borderLeftWidth: 4,
    paddingLeft: spacing.md,
    paddingVertical: spacing.xs,
  },
  houseRulesLabel: {
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: spacing.md,
  },
});
