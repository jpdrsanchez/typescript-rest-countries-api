export type ColorModes = 'light' | 'dark'

export const getStorageItem = (key: string): ColorModes | '' => {
  if (typeof window === 'undefined') return ''

  const data = window.localStorage.getItem(
    `${process.env.NEXT_PUBLIC_APP_KEY}_${key}`
  ) as ColorModes | ''

  return data
}

export const setStorageItem = (key: string, value: ColorModes) => {
  if (typeof window !== 'undefined')
    window.localStorage.setItem(
      `${process.env.NEXT_PUBLIC_APP_KEY}_${key}`,
      value
    )
}
