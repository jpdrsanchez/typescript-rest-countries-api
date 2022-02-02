import { AppProps } from 'next/app'
import Head from 'next/head'
import '@fontsource/nunito-sans/300.css'
import '@fontsource/nunito-sans/400.css'
import '@fontsource/nunito-sans/600.css'
import '@fontsource/nunito-sans/800.css'

import GlobalStyles from 'styles/global'
import Header from 'components/Header'
import Switch from 'components/Switch'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>REST Countries API</title>
      </Head>
      <GlobalStyles />
      <Header title="Where in the world?">
        <Switch
          label="Dark Mode"
          isChecked={false}
          onInputChange={e => e.preventDefault()}
        />
      </Header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
