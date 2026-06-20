import { type ReactNode } from 'react';
import { ScrollView, StyleSheet, useWindowDimensions, View, type ViewStyle } from 'react-native';

import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { getContentPadding, getMaxContentWidth, spacing } from '@/constants/Layout';

interface ScreenContainerProps {
  children: ReactNode;
  scroll?: boolean;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  nativeID?: string;
}

export default function ScreenContainer({
  children,
  scroll = true,
  style,
  contentContainerStyle,
  nativeID,
}: ScreenContainerProps) {
  const { width } = useWindowDimensions();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];
  const padding = getContentPadding(width);
  const maxWidth = getMaxContentWidth(width);

  const inner = (
    <View
      style={[
        styles.inner,
        {
          paddingHorizontal: padding,
          paddingBottom: spacing.xxl,
          maxWidth: maxWidth === '100%' ? undefined : maxWidth,
        },
        contentContainerStyle,
      ]}>
      {children}
    </View>
  );

  if (!scroll) {
    return (
      <View style={[styles.root, { backgroundColor: colors.background }, style]} nativeID={nativeID}>
        {inner}
      </View>
    );
  }

  return (
    <ScrollView
      style={[styles.root, { backgroundColor: colors.background }, style]}
      contentContainerStyle={styles.scrollContent}
      nativeID={nativeID}>
      {inner}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  inner: {
    width: '100%',
    alignSelf: 'center',
    paddingTop: spacing.md,
  },
});
