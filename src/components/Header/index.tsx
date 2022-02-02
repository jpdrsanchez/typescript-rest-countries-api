import { ReactNode, ReactText } from 'react'

import * as S from './styles'
import Heading from 'components/common/Heading'

type HeaderProps = {
  title: ReactText
  children?: ReactNode
}

const Header = ({ title, children }: HeaderProps) => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <Heading
          level={1}
          size={{ mobile: 14, desktop: 24 }}
          weight={800}
          lineHeight={{ mobile: 20, desktop: 33 }}
        >
          {title}
        </Heading>
        {children}
      </S.HeaderContainer>
    </S.Header>
  )
}

export default Header
