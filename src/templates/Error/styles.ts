import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: calc(100vh - 80px);
  padding: 1.875rem;
  display: flex;

  div {
    margin: auto;
    text-align: center;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: 300;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--typography);
    padding: 0.375rem;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
    border-radius: 0.125rem;
    background: var(--main);
    max-width: 6.5rem;
    margin: 1.5rem auto 0;

    @media (min-width: 36em) {
      font-size: 1rem;
      max-width: 8.5rem;
      padding: 0.625rem;
    }
  }
`
