import { render, screen } from '@testing-library/react'
import { Country } from 'templates/Home'
import Card from '.'

export const countryMock: Country = {
  name: 'Brazil',
  alpha3Code: 'BRA',
  capital: 'Brasília',
  region: 'Americas',
  population: 212559409,
  flags: { svg: 'https://flagcdn.com/br.svg' },
  currencies: [],
  languages: [],
  nativeName: 'Brasil',
  subregion: 'South America',
  topLevelDomain: []
}

describe('<Card />', () => {
  it('Renders correctly', () => {
    render(<Card {...countryMock} />)

    const cardImage = screen.getByRole('img', { name: /flag of brazil/i })
    expect(cardImage).toBeInTheDocument()

    const cardHeading = screen.getByRole('heading', { name: /brazil/i })
    expect(cardHeading).toBeInTheDocument()

    const cardList = screen.getByRole('list')
    expect(cardList).toBeInTheDocument()

    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(3)
  })
})
