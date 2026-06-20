import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { Appearance, Platform } from 'react-native';

import {
  getThemePreference,
  setThemePreference,
  type ThemePreference,
} from '@/lib/themePreference';

type ColorScheme = 'light' | 'dark';

interface ThemeContextValue {
  preference: ThemePreference;
  colorScheme: ColorScheme;
  setPreference: (preference: ThemePreference) => Promise<void>;
  ready: boolean;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getSystemScheme(): ColorScheme {
  if (Platform.OS === 'web' && typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  const scheme = Appearance.getColorScheme();
  return scheme === 'dark' ? 'dark' : 'light';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>('system');
  const [systemScheme, setSystemScheme] = useState<ColorScheme>(getSystemScheme);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    getThemePreference().then((stored) => {
      setPreferenceState(stored);
      setReady(true);
    });
  }, []);

  useEffect(() => {
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = (event: MediaQueryListEvent) => {
        setSystemScheme(event.matches ? 'dark' : 'light');
      };
      media.addEventListener('change', handler);
      return () => media.removeEventListener('change', handler);
    }

    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setSystemScheme(colorScheme === 'dark' ? 'dark' : 'light');
    });
    return () => subscription.remove();
  }, []);

  const setPreference = useCallback(async (next: ThemePreference) => {
    await setThemePreference(next);
    setPreferenceState(next);
  }, []);

  const colorScheme: ColorScheme = preference === 'system' ? systemScheme : preference;

  const value = useMemo(
    () => ({ preference, colorScheme, setPreference, ready }),
    [preference, colorScheme, setPreference, ready]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function useResolvedColorScheme(): ColorScheme {
  const ctx = useThemeContext();
  return ctx?.colorScheme ?? 'light';
}
