import styled from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  gap: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 4rem;

  @media (min-width: 36em) {
    gap: 3rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`

export const FilterArea = styled.div`
  display: grid;
  gap: 2.5rem;

  @media (min-width: 48em) {
    display: flex;
    justify-content: space-between;
  }
`
