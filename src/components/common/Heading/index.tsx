import { ReactText } from 'react'

import * as S from './styles'

type Responsive<T> = {
  mobile: T
  desktop: T
}

export type HeadingProps = {
  size: Responsive<number>
  lineHeight: Responsive<number>
  weight: 300 | 400 | 600 | 800
  level: 1 | 2 | 3 | 4
  children: ReactText
}

const Heading = (props: HeadingProps) => {
  const { children, level, lineHeight, size, weight } = props

  return (
    <S.Heading
      level={level}
      size={size}
      lineHeight={lineHeight}
      weight={weight}
    >
      {children}
    </S.Heading>
  )
}

export default Heading
