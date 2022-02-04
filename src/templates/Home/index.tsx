import Container from 'components/common/Container'
import Dropdown, { DropdownItem } from 'components/Dropdown'
import Search from 'components/Search'
import { useState } from 'react'
import { findByTerm } from 'utils'
import * as S from './styles'

type Countrie = {
  name: string
  region: string
  population: number
  capital: string
}

export type HomeTemplateProps = {
  countries: Countrie[]
  regions: DropdownItem[]
}

const HomeTemplate = ({
  countries: dataCountries,
  regions
}: HomeTemplateProps) => {
  const [countries, setCountries] = useState(dataCountries)

  const onSelectRegion = (region: string) => {
    setCountries(
      dataCountries.filter(
        countrie => countrie.region.toLocaleLowerCase() === region
      )
    )
  }

  const onSearch = (value: string) => {
    if (value.trim().length) {
      setCountries(
        dataCountries.filter(countrie => {
          return findByTerm(value, countrie, ['name'])
        })
      )
    } else setCountries(dataCountries)
  }

  return (
    <S.Wrapper>
      <Container>
        <S.FilterArea>
          <Search
            label="Search for a country"
            placeholder="Search for a country…"
            onSearch={onSearch}
          />
          <Dropdown
            title="Filter by Region"
            options={regions}
            onItemSelect={onSelectRegion}
          />
        </S.FilterArea>
        <section>{countries.map(countrie => countrie.name)}</section>
      </Container>
    </S.Wrapper>
  )
}

export default HomeTemplate
