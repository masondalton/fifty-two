import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

interface ToastState {
  message: string;
  visible: boolean;
}

interface ToastContextValue {
  toast: ToastState;
  showToast: (message: string) => void;
  hideToast: () => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

let hideTimer: ReturnType<typeof setTimeout> | null = null;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastState>({ message: '', visible: false });

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, visible: false }));
  }, []);

  const showToast = useCallback(
    (message: string) => {
      if (hideTimer) clearTimeout(hideTimer);
      setToast({ message, visible: true });
      hideTimer = setTimeout(() => {
        hideToast();
      }, 2500);
    },
    [hideToast]
  );

  const value = useMemo(() => ({ toast, showToast, hideToast }), [toast, showToast, hideToast]);

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return ctx;
}
