import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartItemType, Product } from "../types/types";
import { randomUUID } from "expo-crypto";


type CartType = {
    items: CartItemType[],
    totalPrice: number
    addItem: (item: Product, size: CartItemType['size']) => void;
    updateQuantity: (id: string, amount: 1 | -1) => void,
}
export const cartContext = createContext<CartType>({
    items: [],
    totalPrice: 0,
    addItem: () => { },
    updateQuantity: () => { },
})

export default function CartProvider({ children }: PropsWithChildren) {
    const [items, setItems] = useState<CartItemType[]>([])
    const addItem = (item: Product, size: CartItemType['size']) => {

        //* Check if the item is already added with the same size
        const existingItem = items.find(a => a.product === item && a.size === size);

        if (existingItem) {
            updateQuantity(existingItem.id, 1);
            return
        }

        const newCartItem: CartItemType = {
            id: randomUUID(),
            product: item,
            product_id: item.id,
            size,
            quantity: 1
        }

        setItems([newCartItem, ...items])
        console.log(items)
    }

    const updateQuantity = (id: string, amount: 1 | -1) => {

        setItems(
            items
                .map((item) => {
                    //* Updating the quantity
                    if (item.id === id) return { ...item, quantity: item.quantity + amount }
                    else return item
                })
                .filter(item => item.quantity > 0) //* Delete an item if quantity is > 0
        );

    }

    //* Calculating the sum for all items in the cart
    const totalPrice = items.reduce((sum, item) => sum + item.product.price, 0)

    return (
        <cartContext.Provider value={{ items, totalPrice, addItem, updateQuantity }}>
            {children}
        </cartContext.Provider>
    )
}

export const useCart = () => useContext(cartContext);