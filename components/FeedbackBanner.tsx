import { View, StyleSheet } from 'react-native';

import { Text } from '@/components/Themed';

interface FeedbackBannerProps {
  message: string;
  type: 'success' | 'error';
}

export default function FeedbackBanner({ message, type }: FeedbackBannerProps) {
  const isSuccess = type === 'success';
  return (
    <View
      style={[
        styles.banner,
        { backgroundColor: isSuccess ? '#DCFCE7' : '#FEE2E2', borderColor: isSuccess ? '#86EFAC' : '#FCA5A5' },
      ]}>
      <Text style={[styles.text, { color: isSuccess ? '#166534' : '#991B1B' }]}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 12,
    marginBottom: 16,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
});
