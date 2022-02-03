import { debounce } from 'utils'

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
