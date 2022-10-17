import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>Introduction of p_toro</title>
        <meta name='description' content='ピートロの紹介ページです。' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='format-detection' content='telephone=no' />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
