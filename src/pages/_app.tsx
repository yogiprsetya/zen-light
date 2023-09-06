import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from '@/components/ui/toaster';
import { StoreProvider } from 'state/StoreProvider';

interface AppTypes extends AppProps {
  pageProps: {
    initialZustandState: Record<string, string>;
  };
}

export default function App({ Component, pageProps }: AppTypes) {
  return (
    <StoreProvider {...pageProps.initialZustandState}>
      <Component {...pageProps} />
      <Toaster />
    </StoreProvider>
  );
}
