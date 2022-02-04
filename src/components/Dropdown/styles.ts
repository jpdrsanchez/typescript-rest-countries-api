import styled from 'styled-components'

export const Dropdown = styled.div`
  position: relative;
  width: 12.5rem;

  button {
    width: 100%;
    color: var(--typography);
    border: none;
    outline: 0px;
    cursor: pointer;
  }
`

export const Button = styled.button`
  font-size: 0.75rem;
  line-height: 1.25rem;
  padding: 0.875rem 1.375rem 0.875rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.3125rem;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  background: var(--main);

  @media (min-width: 36em) {
    font-size: 0.875rem;
    padding-bottom: 1.125rem;
    padding-top: 1.125rem;
  }
`

export const List = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: var(--main);
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  padding: 1rem 1.5rem;
  display: grid;
  gap: 0.5rem;
  opacity: 0;
  pointer-events: none;
  transform: translateY(100%);
  transition: opacity 0.6s, transform 0.4s ease-in-out;

  &.active {
    opacity: 1;
    pointer-events: initial;
    transform: translateY(calc(100% + 0.25rem));
  }

  button {
    padding: 0;
    font-size: 0.75rem;
    line-height: 1rem;
    background: none;
    display: block;
    text-align: left;

    @media (min-width: 36em) {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`
