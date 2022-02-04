import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Dropdown, { DropdownItem } from '.'

const regions: DropdownItem[] = [
  {
    id: 1,
    slug: 'africa',
    title: 'Africa'
  },
  {
    id: 2,
    slug: 'americas',
    title: 'America'
  },
  {
    id: 3,
    slug: 'asia',
    title: 'Asia'
  },
  {
    id: 4,
    slug: 'europe',
    title: 'Europe'
  },
  {
    id: 5,
    slug: 'oceania',
    title: 'Oceania'
  }
]

describe('<Dropdown />', () => {
  it('Renders component closed by default', () => {
    render(
      <Dropdown
        title="regions"
        options={regions}
        onItemSelect={() => {
          return
        }}
      />
    )

    const button = screen.getByRole('button', { name: /regions/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-expanded', 'false')

    const image = screen.getByRole('img', { name: /dropdown icon/i })
    expect(image).toBeInTheDocument()

    const menuList = screen.getByRole('menu')
    expect(menuList).toBeInTheDocument()
    expect(menuList).not.toBeVisible()

    const menuItems = screen.getAllByRole('menuitem')
    expect(menuItems.length).toBe(regions.length)
  })

  it('Menu should open and close correctly', async () => {
    render(
      <Dropdown
        title="regions"
        options={regions}
        onItemSelect={() => {
          return
        }}
      />
    )

    const button = screen.getByRole('button', { name: /regions/i })
    const menuList = screen.getByRole('menu')
    const menuItem = screen.getByRole('menuitem', { name: /africa/i })

    userEvent.click(button)
    expect(menuList).toBeVisible()
    expect(menuList).toHaveClass('active')

    userEvent.click(button)
    expect(menuList).not.toBeVisible()
    expect(menuList).not.toHaveClass('active')

    act(() => {
      userEvent.click(button)
      userEvent.click(document.documentElement)
    })
    expect(menuList).not.toBeVisible()

    userEvent.click(button)
    userEvent.click(menuItem)
    expect(menuList).not.toBeVisible()
  })

  it('Runs dropdown functions correctly', () => {
    const onSelect = jest.fn()
    render(
      <Dropdown title="regions" options={regions} onItemSelect={onSelect} />
    )

    const button = screen.getByRole('button', { name: /regions/i })
    const menuItem = screen.getByRole('menuitem', { name: /africa/i })

    userEvent.click(button)
    userEvent.click(button)
    expect(onSelect).toHaveBeenCalledTimes(0)

    userEvent.click(button)
    userEvent.click(menuItem)
    expect(onSelect).toHaveBeenCalledTimes(1)
    expect(onSelect).toHaveBeenCalledWith('africa')
  })
})
