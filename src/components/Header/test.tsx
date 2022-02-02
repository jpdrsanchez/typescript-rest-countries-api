import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import Header from '.'

jest.mock('components/common/Heading', () => ({
  __esModule: true,
  default: ({ children }: { children: ReactNode }) => <div>{children}</div>
}))

describe('<Header />', () => {
  it('Renders title correctly', () => {
    render(<Header title="title" />)
    const titleElement = screen.getByText(/title/i)

    expect(titleElement).toBeInTheDocument()
  })

  it('Renders children correctly', () => {
    render(
      <Header title="title">
        <div data-testid="child" />
      </Header>
    )
    const childElement = screen.getByTestId('child')

    expect(childElement).toBeInTheDocument()
  })
})
