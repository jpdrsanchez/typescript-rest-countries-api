import { getStorageItem, setStorageItem } from '.'

beforeEach(() => {
  window.localStorage.clear()
})

describe('getStorageItem', () => {
  it('Returns item from localStorage correctly', () => {
    window.localStorage.setItem(
      `${process.env.NEXT_PUBLIC_APP_KEY}_colorMode`,
      'dark'
    )

    expect(getStorageItem('colorMode')).toBe('dark')
  })
})

describe('setStorageItem', () => {
  it('Adds item tp localStorage correctly', () => {
    setStorageItem('colorMode', 'light')

    expect(
      window.localStorage.getItem(
        `${process.env.NEXT_PUBLIC_APP_KEY}_colorMode`
      )
    ).toBe('light')
  })
})
