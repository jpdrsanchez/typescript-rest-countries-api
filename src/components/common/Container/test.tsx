import { render, screen } from '@testing-library/react'
import Container from '.'

describe('<Container />', () => {
  it('Renders children correctly', () => {
    render(
      <Container>
        <div data-testid="children" />
        <div data-testid="children" />
        <div data-testid="children" />
      </Container>
    )

    const children = screen.getAllByTestId('children')

    expect(children).toHaveLength(3)
  })

  it('Renders with correct class names', () => {
    const { container } = render(
      <Container className="testClass">
        <div />
      </Container>
    )

    expect(container.firstChild).toHaveClass('testClass')
  })

  it('Renders correctly', () => {
    const { container } = render(
      <Container>
        <div />
      </Container>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
