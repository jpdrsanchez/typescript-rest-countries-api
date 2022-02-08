import { render, screen } from '@testing-library/react'
import List from '.'

describe('<List />', () => {
  it('Renders correctly', () => {
    render(
      <List nativeName="Brasil" population={212559409} region="Americas" />
    )

    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()

    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(3)

    const listItem = screen.getByText('Native Name:')
    expect(listItem).toBeInTheDocument()
  })
})
