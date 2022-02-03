import { ReactElement, ReactNode, useState } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import GlobalStyle from "../theme/global";
import { useTheme, ThemeProvider } from 'styled-components'
import { DarkTheme, DarkThemeStyle, LightTheme, LightThemeStyle } from "../theme/ThemeProvider";
// import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}



function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const getLayout = Component.getLayout ?? (page => page)
  return (
    getLayout(   
      <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
        {isDarkMode && <DarkThemeStyle />}
        {!isDarkMode && <LightThemeStyle />}
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
      )
    )
}

export default MyApp
