import Card from 'components/Card'
import Container from 'components/common/Container'
import Dropdown, { DropdownItem } from 'components/Dropdown'
import Search from 'components/Search'
import { useState } from 'react'
import { findByTerm } from 'utils'
import * as S from './styles'

export type Country = {
  name: string
  nativeName: string
  subregion: string
  topLevelDomain: string[]
  region: string
  population: number
  capital: string
  alpha3Code: string
  currencies: {
    name: string
  }[]
  languages: {
    name: string
  }[]
  flags: {
    svg: string
  }
}

export type HomeTemplateProps = {
  countries: Country[]
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
        country => country.region.toLocaleLowerCase() === region
      )
    )
  }

  const onSearch = (value: string) => {
    if (value.trim().length) {
      setCountries(
        dataCountries.filter(country => {
          return findByTerm(value, country, ['name'])
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
        <section>
          <S.CountriesNav>
            {countries.map(country => (
              <Card key={country.alpha3Code} {...country} />
            ))}
          </S.CountriesNav>
        </section>
      </Container>
    </S.Wrapper>
  )
}

export default HomeTemplate
