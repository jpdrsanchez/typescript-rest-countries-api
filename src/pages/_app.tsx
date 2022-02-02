import { AppProps } from 'next/app'
import Head from 'next/head'
import '@fontsource/nunito-sans/300.css'
import '@fontsource/nunito-sans/400.css'
import '@fontsource/nunito-sans/600.css'
import '@fontsource/nunito-sans/800.css'

import GlobalStyles from 'styles/global'
import Header from 'components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>REST Countries API</title>
      </Head>
      <GlobalStyles />
      <Header title="Where in the world?" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
