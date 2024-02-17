import { PropsWithChildren, createContext, useContext } from "react";

const cartContext = createContext({})

export default function CartProvider({ children }: PropsWithChildren) {
    return (
        <cartContext.Provider value={{}}>
            {children}
        </cartContext.Provider>
    )
}

export const useCart = useContext(cartContext);