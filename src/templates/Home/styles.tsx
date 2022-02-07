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

export const CountriesNav = styled.nav`
  padding-top: 2rem;
  display: grid;
  justify-content: center;
  row-gap: 2.5rem;

  @media (min-width: 48em) {
    padding-top: 3rem;
    justify-content: space-evenly;
    grid-template-columns: repeat(2, 264px);
    row-gap: 4.6875rem;
  }

  @media (min-width: 62em) {
    grid-template-columns: repeat(3, 264px);
    justify-content: space-between;
  }

  @media (min-width: 75em) {
    grid-template-columns: repeat(4, 264px);
  }
`
