import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function() {
              ${setColorMode.toString()}
              setColorMode();
            })()
          `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

function setColorMode() {
  const storagedMode = window.localStorage.getItem(
    `${process.env.NEXT_PUBLIC_APP_KEY}_colorMode`
  )

  if (storagedMode === 'dark') {
    document.documentElement.classList.add('dark')
  } else if (!storagedMode) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      window.localStorage.setItem(
        `${process.env.NEXT_PUBLIC_APP_KEY}_colorMode`,
        'dark'
      )
      document.documentElement.classList.add('dark')
    } else {
      window.localStorage.setItem(
        `${process.env.NEXT_PUBLIC_APP_KEY}_colorMode`,
        'light'
      )
      document.documentElement.classList.remove('dark')
    }
  }
}

export default MyDocument
