import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Renders the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /genesis boilerplate/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Renders the paragraph', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByText(
        /nextJS boilerplate for my personal and comercial projects/i
      )
    ).toBeInTheDocument()

    expect(container.lastChild).toMatchSnapshot()
  })

  it('Renders the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ color: '#171923' })
  })
})
