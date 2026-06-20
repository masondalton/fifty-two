import { useRouter } from 'expo-router';
import { useEffect } from 'react';

import LoadingScreen from '@/components/LoadingScreen';
import { hasSeenIntro } from '@/lib/onboarding';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    hasSeenIntro().then((seen) => {
      router.replace(seen ? '/(tabs)' : '/intro');
    });
  }, [router]);

  return <LoadingScreen message="Loading..." />;
}
