import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import { useMemo } from 'react';
import { useAtomValue } from 'jotai';
import { themeAtom } from '../src/theme/themeAtom';
import LightTheme from '../src/theme/LightTheme';
import DarkTheme from '../src/theme/DarkTheme';
import { ThemeSwitcherFab } from '../src/ThemSwitcherFab';
import { NoSsr } from '@material-ui/core';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const themeMode = useAtomValue(themeAtom);
  const theme = useMemo(() => {
    if (themeMode === 'light') {
      return LightTheme;
    }
    return DarkTheme;
  }, [themeMode])
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <NoSsr>

          <ThemeSwitcherFab />
          <Component {...pageProps} />
        </NoSsr>
      </ThemeProvider>
    </CacheProvider>
  );
}
