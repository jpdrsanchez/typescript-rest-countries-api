import { createGlobalStyle } from 'styled-components'
import { reset } from './reset'

const GlobalStyles = createGlobalStyle`

  ${reset}

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    min-height: 100vh;
    background: #ebf8ff;
  }
`

export default GlobalStyles
