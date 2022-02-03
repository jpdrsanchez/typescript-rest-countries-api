import Container from 'components/common/Container'
import Search from 'components/Search'
import * as S from './styles'

const HomeTemplate = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.FilterArea>
          <Search
            label="Search for a country"
            placeholder="Search for a country…"
            onSearch={value => value}
          />
        </S.FilterArea>
        <section></section>
      </Container>
    </S.Wrapper>
  )
}

export default HomeTemplate
