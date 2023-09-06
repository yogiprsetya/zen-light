import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-256x256.png" />
        <link rel="shortcut icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#fff" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
