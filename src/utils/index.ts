export const debounce = <T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number
) => {
  let timeout: number

  return (...args: T) => {
    window.clearTimeout(timeout)
    timeout = window.setTimeout(() => {
      callback(...args)
    }, delay)
  }
}

export const findByTerm = <T, K extends keyof T>(
  value: string,
  itemToFilter: T,
  filteredFields: K[]
) => {
  return filteredFields.some(field => {
    return `${itemToFilter[field]}`
      .trim()
      .toLocaleLowerCase()
      .startsWith(value.trim().toLocaleLowerCase())
  })
}
