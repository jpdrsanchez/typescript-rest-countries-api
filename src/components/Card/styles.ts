import styled from 'styled-components'

export const Card = styled.a`
  display: block;
  width: 100%;
  max-width: 16.5rem;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  border-radius: 0.3125rem;
  background: var(--main);
  overflow: hidden;

  img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
    object-position: center;
  }

  div {
    padding: 1.5rem 1.5rem 2.875rem;
    display: grid;
    gap: 1rem;
  }

  h1 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  ul {
    display: grid;
    gap: 0.5rem;
  }

  li {
    font-size: 0.875rem;
    line-height: 1rem;
    font-weight: 300;

    span {
      font-weight: 600;
    }
  }
`
