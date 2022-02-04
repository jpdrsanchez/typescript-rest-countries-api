import Container from 'components/common/Container'
import Dropdown, { DropdownItem } from 'components/Dropdown'
import Search from 'components/Search'
import * as S from './styles'

const regions: DropdownItem[] = [
  {
    id: 1,
    slug: 'africa',
    title: 'Africa'
  },
  {
    id: 2,
    slug: 'americas',
    title: 'America'
  },
  {
    id: 3,
    slug: 'asia',
    title: 'Asia'
  },
  {
    id: 4,
    slug: 'europe',
    title: 'Europe'
  },
  {
    id: 5,
    slug: 'oceania',
    title: 'Oceania'
  }
]

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
          <Dropdown
            title="Filter by Region"
            options={regions}
            onItemSelect={() => {
              return
            }}
          />
        </S.FilterArea>
        <section></section>
      </Container>
    </S.Wrapper>
  )
}

export default HomeTemplate
