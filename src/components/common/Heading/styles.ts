import styled, { css } from 'styled-components'
import { HeadingProps } from '.'

export const Heading = styled.h1.attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`
}))<HeadingProps>`
  ${({ weight, lineHeight, size }) => css`
    font-size: ${`${size.mobile / 16}rem`};
    font-weight: ${weight};
    line-height: ${`${lineHeight.mobile / 16}rem`};

    @media (min-width: 36em) {
      font-size: ${`${size.desktop / 16}rem`};
      line-height: ${`${lineHeight.desktop / 16}rem`};
    }
  `}
`
