import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'fiftytwo_theme_preference';

export type ThemePreference = 'light' | 'dark' | 'system';

export async function getThemePreference(): Promise<ThemePreference> {
  const value = await AsyncStorage.getItem(KEY);
  if (value === 'light' || value === 'dark' || value === 'system') {
    return value;
  }
  return 'system';
}

export async function setThemePreference(preference: ThemePreference): Promise<void> {
  await AsyncStorage.setItem(KEY, preference);
}
