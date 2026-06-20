import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '@/components/Themed';
import { Brand, Typography } from '@/constants/Theme';
import { useToast } from '@/hooks/useToast';
import { useColorScheme } from '@/components/useColorScheme';

export default function ToastOverlay() {
  const { toast } = useToast();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme() ?? 'light';

  if (!toast.visible) return null;

  return (
    <View
      pointerEvents="none"
      style={[styles.container, { bottom: insets.bottom + 72 }]}>
      <View
        style={[
          styles.pill,
          {
            backgroundColor: colorScheme === 'dark' ? '#1E293B' : Brand.ink,
          },
        ]}>
        <Ionicons name="checkmark-circle" size={18} color={Brand.gold} />
        <Text style={[styles.text, { fontFamily: Typography.bodyMedium }]}>{toast.message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 9999,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 999,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
