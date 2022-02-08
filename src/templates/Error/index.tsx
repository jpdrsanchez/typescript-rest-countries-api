import Heading from 'components/common/Heading'
import Link from 'next/link'
import * as S from './styles'

const ErrorTemplate = () => {
  return (
    <S.Wrapper>
      <div>
        <Heading
          level={1}
          size={{ mobile: 22, desktop: 32 }}
          lineHeight={{ mobile: 30, desktop: 44 }}
          weight={800}
        >
          This pages seems to be missing
        </Heading>
        <Link href="/">Go Home</Link>
      </div>
    </S.Wrapper>
  )
}

export default ErrorTemplate
