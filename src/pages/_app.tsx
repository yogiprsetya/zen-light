import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from '@/components/ui/toaster';
import { StoreProvider } from 'state/StoreProvider';
import Head from 'next/head';

interface AppTypes extends AppProps {
  pageProps: {
    initialZustandState: Record<string, string>;
  };
}

export default function App({ Component, pageProps }: AppTypes) {
  return (
    <StoreProvider {...pageProps.initialZustandState}>
      <Head>
        <title>ZenLight | Make Your Phone as Room Light</title>
      </Head>

      <Component {...pageProps} />
      <Toaster />
    </StoreProvider>
  );
}
