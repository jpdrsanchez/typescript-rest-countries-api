import { AppProps } from 'next/app'
import '@fontsource/nunito-sans/300.css'
import '@fontsource/nunito-sans/400.css'
import '@fontsource/nunito-sans/600.css'
import '@fontsource/nunito-sans/800.css'
import NProgress from 'nprogress'
import { useRouter } from 'next/router'

import GlobalStyles from 'styles/global'
import Header from 'components/Header'
import Switch from 'components/Switch'
import { useEffect, useState } from 'react'
import { getStorageItem, setStorageItem } from 'services/localStorage'
import '../../public/nprogress.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const [colorMode, setColorMode] = useState(getStorageItem('colorMode'))
  const router = useRouter()

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
    const handleStart = () => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  useEffect(() => {
    toggleTheme(colorMode)
  }, [colorMode])

  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta
          name="description"
          content="REST Countries API with color theme switcher is a Frontendmentor Challenge to improve your frontend skills"
        />
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
