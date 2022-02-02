import { render, screen } from '@testing-library/react'
import Heading from '.'

describe('<Heading />', () => {
  it('Renders element and props correctly', () => {
    render(
      <Heading
        level={2}
        size={{ desktop: 24, mobile: 14 }}
        lineHeight={{ desktop: 33, mobile: 20 }}
        weight={800}
      >
        Title
      </Heading>
    )

    const title = screen.getByRole('heading', { level: 2, name: /title/i })
    expect(title).toBeInTheDocument()
  })

  it('Renders titles levels correctly', () => {
    render(
      <>
        <Heading
          level={1}
          size={{ desktop: 24, mobile: 14 }}
          lineHeight={{ desktop: 33, mobile: 20 }}
          weight={800}
        >
          Title 1
        </Heading>
        <Heading
          level={2}
          size={{ desktop: 24, mobile: 14 }}
          lineHeight={{ desktop: 33, mobile: 20 }}
          weight={800}
        >
          Title 2
        </Heading>
        <Heading
          level={3}
          size={{ desktop: 24, mobile: 14 }}
          lineHeight={{ desktop: 33, mobile: 20 }}
          weight={800}
        >
          Title 3
        </Heading>
        <Heading
          level={4}
          size={{ desktop: 24, mobile: 14 }}
          lineHeight={{ desktop: 33, mobile: 20 }}
          weight={800}
        >
          Title 4
        </Heading>
      </>
    )

    const titleOne = screen.getByRole('heading', { level: 1, name: /title 1/i })
    expect(titleOne).toBeInTheDocument()

    const titleTwo = screen.getByRole('heading', { level: 2, name: /title 2/i })
    expect(titleTwo).toBeInTheDocument()

    const titleThree = screen.getByRole('heading', {
      level: 3,
      name: /title 3/i
    })
    expect(titleThree).toBeInTheDocument()

    const titleFour = screen.getByRole('heading', {
      level: 4,
      name: /title 4/i
    })
    expect(titleFour).toBeInTheDocument()
  })

  it('Styles should be applied correclty', () => {
    render(
      <Heading
        level={2}
        size={{ desktop: 24, mobile: 14 }}
        lineHeight={{ desktop: 33, mobile: 20 }}
        weight={800}
      >
        Title
      </Heading>
    )

    const title = screen.getByRole('heading', { level: 2, name: /title/i })

    expect(title).toHaveStyleRule('font-size', '0.875rem')
    expect(title).toHaveStyleRule('font-size', '1.5rem', {
      media: '(min-width: 36em)'
    })
    expect(title).toHaveStyleRule('line-height', '1.25rem')
    expect(title).toHaveStyleRule('line-height', '2.0625rem', {
      media: '(min-width: 36em)'
    })
    expect(title).toHaveStyleRule('font-weight', '800')
  })
})
