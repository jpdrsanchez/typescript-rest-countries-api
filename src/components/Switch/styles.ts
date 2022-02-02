import styled from 'styled-components'

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;

  @media (min-width: 36em) {
    font-size: 1rem;
    line-height: 1.375rem;
    gap: 0.625rem;
  }

  input {
    border: 0;
    clip: rect(0px, 0px, 0px, 0px);
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    position: absolute;
  }
`
