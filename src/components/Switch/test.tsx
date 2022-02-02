import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Switch from '.'

const mockChange = jest.fn()

describe('<Switch />', () => {
  it('Renders element and props correctly', () => {
    render(
      <Switch
        isChecked={false}
        label="Dark Mode"
        onInputChange={e => e.preventDefault()}
      />
    )

    const input = screen.getByRole('checkbox', { name: /dark mode/i })
    const img = screen.getByRole('img', { name: /set to dark mode/i })

    expect(input).toBeInTheDocument()
    expect(input).not.toBeChecked()
    expect(img).toBeInTheDocument()
  })

  it('Runs onChange function correctly', () => {
    render(
      <Switch isChecked={false} label="Dark Mode" onInputChange={mockChange} />
    )

    const input = screen.getByRole('checkbox', { name: /dark mode/i })

    userEvent.click(input)
    expect(mockChange).toHaveBeenCalledTimes(1)

    userEvent.click(input)
    userEvent.click(input)
    expect(mockChange).toHaveBeenCalledTimes(3)
  })
})
