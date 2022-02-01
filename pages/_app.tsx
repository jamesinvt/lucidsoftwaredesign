import { ReactElement, ReactNode, useState } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import GlobalStyle, { lightTheme, darkTheme } from "../theme/ThemeProvider";
import { useTheme, ThemeProvider } from 'styled-components'

// import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}



function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? (page => page)
  return (
    getLayout(
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
      )
    )
}

export default MyApp
