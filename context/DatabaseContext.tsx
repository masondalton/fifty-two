import type { SQLiteDatabase } from 'expo-sqlite';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

import { initDatabase } from '@/db/index';
import type { AppDatabase } from '@/db/index';

interface DatabaseContextValue {
  db: AppDatabase | null;
  ready: boolean;
  error: string | null;
  refreshKey: number;
  refresh: () => void;
}

const DatabaseContext = createContext<DatabaseContextValue>({
  db: null,
  ready: false,
  error: null,
  refreshKey: 0,
  refresh: () => {},
});

export function DatabaseProvider({ children }: { children: ReactNode }) {
  const [db, setDb] = useState<AppDatabase | null>(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    let mounted = true;

    initDatabase()
      .then((database) => {
        if (mounted) {
          setDb(database);
          setReady(true);
        }
      })
      .catch((err: unknown) => {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to initialize database');
        }
      });

    return () => {
      mounted = false;
    };
  }, [refreshKey]);

  const refresh = () => setRefreshKey((k) => k + 1);

  return (
    <DatabaseContext.Provider value={{ db, ready, error, refreshKey, refresh }}>
      {children}
    </DatabaseContext.Provider>
  );
}

export function useDatabase() {
  return useContext(DatabaseContext);
}

// Re-export for components that need native SQLite type checks
export type { SQLiteDatabase };
