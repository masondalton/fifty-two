import { useResolvedColorScheme } from '@/context/ThemeContext';

export function useColorScheme() {
  return useResolvedColorScheme();
}
