import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import Header from '.'

jest.mock('components/common/Heading', () => ({
  __esModule: true,
  default: ({ children }: { children: ReactNode }) => <div>{children}</div>
}))

describe('<Header />', () => {
  it('Renders children correctly', () => {
    render(<Header title="title" />)
    const childElement = screen.getByText(/title/i)

    expect(childElement).toBeInTheDocument()
  })
})
