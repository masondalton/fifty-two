import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'fiftytwo_has_seen_intro';

export async function hasSeenIntro(): Promise<boolean> {
  const value = await AsyncStorage.getItem(KEY);
  return value === 'true';
}

export async function markIntroSeen(): Promise<void> {
  await AsyncStorage.setItem(KEY, 'true');
}
