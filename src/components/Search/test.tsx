import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Search from '.'

jest.mock('utils', () => ({
  __esModule: true,
  debounce: jest.fn(
    <T extends unknown[]>(callback: (...args: T) => void, delay: number) =>
      (...args: T) => {
        callback(...args)
        return delay
      }
  )
}))

describe('<Search />', () => {
  it('Renders elements and props correctly', () => {
    render(
      <Search
        label="Search for a country"
        placeholder="Search for a country..."
        onSearch={() => {
          return
        }}
      />
    )

    const input = screen.getByRole('textbox', {
      name: /search for a country/i
    })
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('placeholder', 'Search for a country...')
    expect(input).toHaveAttribute('aria-label', 'Search for a country')

    const button = screen.getByRole('button', {
      name: /send/i
    })
    expect(button).toBeInTheDocument()

    const image = screen.getByRole('img', { name: /loupe icon/i })
    expect(image).toBeInTheDocument()
  })

  it('Renders input with initial value correctly', () => {
    render(
      <Search
        label="Search for a country"
        placeholder="Search for a country..."
        onSearch={() => {
          return
        }}
        initialValue="Brazil"
      />
    )

    const input = screen.getByRole('textbox', {
      name: /search for a country/i
    })

    expect(input).toHaveValue('Brazil')
  })

  it('Runs input functions correctly', () => {
    const mockChange = jest.fn()

    render(
      <Search
        label="Search for a country"
        placeholder="Search for a country..."
        onSearch={mockChange}
      />
    )

    const input = screen.getByRole('textbox', {
      name: /search for a country/i
    })

    userEvent.type(input, 'brazil')
    expect(input).toHaveValue('brazil')
    expect(mockChange).toHaveBeenCalledTimes(6)
  })
})
