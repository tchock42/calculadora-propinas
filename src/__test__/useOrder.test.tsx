import { renderHook, act } from '@testing-library/react'
import useOrder from '../hooks/useOrder'

// mocks de tipos
type MenuItem = { id: number; name: string; price: number }
type OrderItem = MenuItem & { quantity: number }

describe('useOrder hook', () => {
  it('agrega un nuevo item a la orden', () => {
    const { result } = renderHook(() => useOrder())

    const item: MenuItem = { id: 1, name: 'Taco', price: 10 }

    act(() => {
      result.current.addItem(item)
    })

    expect(result.current.order).toHaveLength(1)
    expect(result.current.order[0].quantity).toBe(1)
  })

  it('incrementa la cantidad si el item ya existe', () => {
    const { result } = renderHook(() => useOrder())

    const item: MenuItem = { id: 1, name: 'Taco', price: 10 }

    act(() => {
        result.current.addItem(item)
    })
    act(() => {
        result.current.addItem(item)
    })

    expect(result.current.order[0].quantity).toBe(2)
  })

  it('remueve un item de la orden', () => {
    const { result } = renderHook(() => useOrder())

    const item: MenuItem = { id: 1, name: 'Taco', price: 10 }

    act(() => {
      result.current.addItem(item)
      result.current.removeItem(1)
    })

    expect(result.current.order).toHaveLength(0)
  })

  it('reinicia la orden y la propina al colocar la orden', () => {
    const { result } = renderHook(() => useOrder())

    const item: MenuItem = { id: 1, name: 'Taco', price: 10 }

    act(() => {
      result.current.addItem(item)
      result.current.setTip(20)
      result.current.placeOrder()
    })

    expect(result.current.order).toHaveLength(0)
    expect(result.current.tip).toBe(0)
  })
})