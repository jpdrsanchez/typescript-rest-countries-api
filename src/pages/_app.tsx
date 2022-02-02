import { AppProps } from 'next/app'
import Head from 'next/head'
import '@fontsource/nunito-sans/300.css'
import '@fontsource/nunito-sans/400.css'
import '@fontsource/nunito-sans/600.css'
import '@fontsource/nunito-sans/800.css'

import GlobalStyles from 'styles/global'
import Header from 'components/Header'
import Switch from 'components/Switch'
import { useEffect, useState } from 'react'
import { getStorageItem, setStorageItem } from 'services/localStorage'

function MyApp({ Component, pageProps }: AppProps) {
  const [colorMode, setColorMode] = useState(getStorageItem('colorMode'))

  const toggleTheme = (colorMode: string) => {
    if (colorMode === 'light') {
      document.documentElement.classList.remove('dark')
      setStorageItem('colorMode', 'light')
    } else {
      document.documentElement.classList.add('dark')
      setStorageItem('colorMode', 'dark')
    }
  }

  const onThemeChange = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    toggleTheme(colorMode)
  }, [colorMode])

  return (
    <>
      <Head>
        <title>REST Countries API</title>
      </Head>
      <GlobalStyles />
      <Header title="Where in the world?">
        <Switch
          label="Dark Mode"
          value={colorMode}
          onInputChange={onThemeChange}
        />
      </Header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
