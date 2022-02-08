import styled from 'styled-components'

export const List = styled.ul`
  li {
    color: var(--typography);
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 2rem;

    span {
      font-weight: 600;
      text-transform: capitalize;
    }

    @media (min-width: 36em) {
      font-size: 1rem;
    }
  }
`
