import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartItemType } from "../types/types";


type CartType = {
    items: CartItemType[],
    addItem: (item: CartItemType, size: CartItemType['size']) => void;
}
export const cartContext = createContext<CartType>({
    items: [],
    addItem: () => { }
})

export default function CartProvider({ children }: PropsWithChildren) {
    const [items, setItems] = useState<CartItemType[]>([])
    const addItem = () => { }
    return (
        <cartContext.Provider value={{ items, addItem }}>
            {children}
        </cartContext.Provider>
    )
}

export const useCart = () => useContext(cartContext);