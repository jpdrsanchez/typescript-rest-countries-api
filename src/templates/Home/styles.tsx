import styled from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  gap: 2rem;

  @media (min-width: 36em) {
    gap: 3rem;
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
