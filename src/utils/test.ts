import { debounce, findByTerm, formatNumber } from 'utils'

describe('debounce', () => {
  jest.useFakeTimers()
  jest.spyOn(window, 'setTimeout')
  jest.spyOn(window, 'clearTimeout')

  afterEach(() => {
    jest.clearAllTimers()
    jest.clearAllMocks()
  })

  test('Execute setTimeout and clearTimeout correctly', () => {
    const debouncedFn = debounce(() => {
      return
    }, 1000)

    debouncedFn()
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(clearTimeout).toHaveBeenCalledTimes(1)
    expect(clearTimeout).toHaveBeenCalledWith(undefined)
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)

    debouncedFn()
    expect(setTimeout).toHaveBeenCalledTimes(2)
    expect(clearTimeout).toHaveBeenCalledTimes(2)
    expect(clearTimeout).toHaveBeenLastCalledWith(expect.any(Number))
  })

  test('Runs callback once within the stipulated time', () => {
    const callbackMock = jest.fn()
    const debouncedFn = debounce(callbackMock, 1000)

    debouncedFn()
    expect(callbackMock).not.toHaveBeenCalled()
    jest.advanceTimersByTime(500)
    expect(callbackMock).not.toHaveBeenCalled()
    jest.advanceTimersByTime(500)
    expect(callbackMock).toHaveBeenCalled()

    callbackMock.mockClear()

    debouncedFn()
    expect(callbackMock).not.toHaveBeenCalled()
    jest.advanceTimersByTime(500)
    debouncedFn()
    expect(callbackMock).not.toHaveBeenCalled()
    jest.advanceTimersByTime(500)
    expect(callbackMock).not.toHaveBeenCalled()
    jest.advanceTimersByTime(500)
    expect(callbackMock).toHaveBeenCalledTimes(1)
  })
})

describe('findByTerm', () => {
  test('Returns the searched items correctly', () => {
    const mockSearchObject = {
      name: 'Brazil',
      originalName: 'Brasil',
      code: 'BR'
    }

    const searchOne = findByTerm('Br', mockSearchObject, [
      'code',
      'name',
      'originalName'
    ])

    const searchTwo = findByTerm('Bre', mockSearchObject, [
      'code',
      'name',
      'originalName'
    ])

    const searchThree = findByTerm('BraSil', mockSearchObject, [
      'code',
      'name',
      'originalName'
    ])

    const searchFour = findByTerm(' brazil ', mockSearchObject, [
      'code',
      'name',
      'originalName'
    ])

    expect(searchOne).toBe(true)
    expect(searchTwo).toBe(false)
    expect(searchThree).toBe(true)
    expect(searchFour).toBe(true)
  })
})

describe('formatNumber', () => {
  test('Format the number correctly', () => {
    expect(formatNumber(1234)).toBe('1,234')
    expect(formatNumber(1000000)).toBe('1,000,000')
    expect(formatNumber(12000)).toBe('12,000')
  })
})
