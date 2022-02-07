import styled, { keyframes } from 'styled-components'

const loadingAnimation = keyframes`
  to {
    transform: scale(1)
  }
`

export const Wrapper = styled.div`
  min-height: calc(100vh - 80px);
  padding: 1.875rem;
  display: flex;

  & > div {
    margin: auto;

    svg {
      transform: scale(0);
      animation: ${loadingAnimation} 0.3s forwards;
    }
  }
`
