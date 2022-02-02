import { ReactNode } from 'react'

import * as S from './styles'

type ContainerProps = {
  className?: string
  children: ReactNode
}

const Container = ({ className, children }: ContainerProps) => {
  return <S.Wrapper className={className}>{children}</S.Wrapper>
}

export default Container
