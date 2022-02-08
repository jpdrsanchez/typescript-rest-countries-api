import Container from 'components/common/Container'
import styled from 'styled-components'

export const Wrapper = styled.article`
  padding-top: 2.5rem;
  padding-bottom: 3.75rem;

  @media (max-width: 35.9375rem) {
    padding-right: 0.75rem;
    padding-left: 0.75rem;
  }

  @media (min-width: 36em) {
    padding-top: 5rem;
  }
`

export const WrapperContainer = styled(Container)`
  display: grid;
  gap: 4rem;

  @media (min-width: 36em) {
    gap: 5rem;
  }
`

export const Back = styled.a`
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

  @media (min-width: 36em) {
    font-size: 1rem;
    max-width: 8.5rem;
    padding: 0.625rem;
  }
`
export const Main = styled.main`
  display: grid;
  gap: 2.75rem;
  align-items: center;

  @media (min-width: 62em) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (min-width: 75em) {
    gap: 4em;
  }

  @media (min-width: 82em) {
    gap: 9rem;
  }
`

export const Flag = styled.div`
  box-shadow: 0px 0px 14px 4px rgba(0, 0, 0, 0.0294384);
  border-radius: 0.625rem;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 7 / 5;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

export const Informations = styled.div`
  h1 {
    margin-bottom: 1rem;

    @media (min-width: 36em) {
      margin-bottom: 1.4375rem;
    }
  }
`

export const Lists = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
`

export const Borders = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2.125rem;

  @media (min-width: 36em) {
    margin-top: 4.25rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
  }

  ul {
    display: flex;
    gap: 0.625rem;
    flex-wrap: wrap;
  }

  li {
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
    border-radius: 0.125rem;
    background: var(--main);
  }

  a {
    display: block;
    padding: 0.375rem 0.625rem;
    text-align: center;
    min-width: 6rem;
    font-weight: 300;
    font-size: 0.75rem;
    line-height: 1rem;

    @media (min-width: 36em) {
      font-size: 0.875rem;
      line-height: 1.1875rem;
      padding-top: 0.3125rem;
      padding-bottom: 0.25rem;
    }
  }
`
