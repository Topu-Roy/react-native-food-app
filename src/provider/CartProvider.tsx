import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartItemType, Product } from "../types/types";


type CartType = {
    items: CartItemType[],
    addItem: (item: Product, size: CartItemType['size']) => void;
}
export const cartContext = createContext<CartType>({
    items: [],
    addItem: () => { }
})

export default function CartProvider({ children }: PropsWithChildren) {
    const [items, setItems] = useState<CartItemType[]>([])
    const addItem = (item: Product, size: CartItemType['size']) => {
        const newCartItem: CartItemType = {
            id: '1',
            product: item,
            product_id: item.id,
            size,
            quantity: 1
        }

        setItems([newCartItem, ...items])
        console.log(items)
    }
    return (
        <cartContext.Provider value={{ items, addItem }}>
            {children}
        </cartContext.Provider>
    )
}

export const useCart = () => useContext(cartContext);