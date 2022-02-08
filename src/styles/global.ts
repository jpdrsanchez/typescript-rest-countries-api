import { createGlobalStyle, keyframes } from 'styled-components'
import { reset } from './reset'

const fade = keyframes`
  to {
    opacity: 1;
    transform: none;
  }
`

const GlobalStyles = createGlobalStyle`

  ${reset}

  :root {
    /* colors */
    --main: #fff;
    --background: #fafafa;
    --typography: #111517;
    --placeholder: #848484;

    /* typography */
    --font: 'Nunito Sans', sans-serif;

    &.dark {
      --main: #2b3844;
      --background: #202c36;
      --typography: #fff;
      --placeholder: #fff;
    }
  }

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
    font-family: var(--font);
    color: var(--typography);
    background: var(--background);
  }

  a {
    color: var(--typography);
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  .fade {
    opacity: 0;
    transform: translateY(1.25rem);
    animation: ${fade} .5s forwards;
  }
`

export default GlobalStyles
