
import { renderHook } from '@testing-library/react-hooks'
import { useCatApi } from './'

describe('useCatApi', () => {
  test('should return an object with the keys: loading, quote', () => {
    // result.current = the value returned by our hook
    const { result } = renderHook(() => useCatApi())

    expect(result.current).toHaveProperty('loading')
    expect(result.current).toHaveProperty('data')
  })

  test('should set loading to true after initial call', () => {
    const { result } = renderHook(() => useCatApi())
    expect(result.current.loading).toBe(true)
  })

  test('should return a data and set loading to false', async () => {
    // Add test here
    const { result, waitForNextUpdate } = renderHook(() => useCatApi())


    await waitForNextUpdate()
    expect(typeof result.current.data).toBe('object')
    expect(result.current.data).not.toBe(null)
    expect(result.current.data).not.toBe('')
    expect(result.current.loading).toBe(false)
  })
})
