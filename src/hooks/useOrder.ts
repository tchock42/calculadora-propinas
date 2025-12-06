import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([]) // inicializa como array y asigna en el generic el tipo OrderItem[]
    const [tip, setTip] = useState(0)                   // inicializa la propina 

    //funcion para agregar la orden al state de order
    const addItem = (item: MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id) // si se encuentra, retorna la posición, de lo contrario retorna -1
        if(itemExist){                                      // si existe
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem )       // retorna el objeto orderItem pero modificado en cantidad
            setOrder(updatedOrder)              // actualiza el state
        }else{                                              // si no existe, se crea un nuevo registro
            const newItem: OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    
    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}

export default useOrder

