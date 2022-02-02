import Container from 'components/common/Container'
import styled from 'styled-components'

export const Header = styled.header`
  padding-bottom: 1.875rem;
  padding-top: 1.875rem;
  background: var(--main);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);

  @media (min-width: 36em) {
    padding-bottom: 1.5rem;
    padding-top: 1.4375rem;
  }
`

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
