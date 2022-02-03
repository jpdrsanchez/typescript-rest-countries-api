import styled from 'styled-components'

export const Form = styled.form`
  position: relative;
  width: 100%;
  max-width: 30rem;

  input {
    width: 100%;
    display: block;
    border: none;
    background: var(--main);
    color: var(--typography);
    font-size: 1rem;
    line-height: 1.25rem;
    padding: 0.875rem 0.875em 0.875rem 4.625rem;
    border-radius: 0.3125rem;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    outline: 0;
    appearance: none;

    @media (min-width: 36em) {
      padding: 1.125rem 1.125rem 1.125rem 4.625rem;
    }

    &::placeholder {
      font-size: 0.75rem;
      line-height: 1.25rem;
      color: var(--placeholder);

      @media (min-width: 36em) {
        font-size: 0.875rem;
      }
    }
  }

  svg {
    position: absolute;
    top: 50%;
    left: 2rem;
    transform: translateY(-50%);
  }

  button {
    width: 1px;
    height: 1px;
    background: none;
    text-indent: -999999px;
    overflow: hidden;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: -1px;
  }
`
