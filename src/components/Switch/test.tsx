import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Switch from '.'

const mockChange = jest.fn()

describe('<Switch />', () => {
  it('Renders element and props correctly', () => {
    render(
      <Switch
        label="Dark Mode"
        onInputChange={() => {
          return
        }}
        value="dark"
      />
    )

    const input = screen.getByRole('checkbox', { name: /dark mode/i })
    const img = screen.getByRole('img', { name: /switch color mode/i })

    expect(input).toBeInTheDocument()
    expect(input).toBeChecked()
    expect(img).toBeInTheDocument()
  })

  it('Runs onChange function correctly', () => {
    render(<Switch value="dark" label="Dark Mode" onInputChange={mockChange} />)

    const input = screen.getByRole('checkbox', { name: /dark mode/i })

    userEvent.click(input)
    expect(mockChange).toHaveBeenCalledTimes(1)

    userEvent.click(input)
    userEvent.click(input)
    expect(mockChange).toHaveBeenCalledTimes(3)
  })
})
