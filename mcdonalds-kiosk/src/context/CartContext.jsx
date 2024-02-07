import { createContext, useState } from "react";
import React from "react";

export const CartContext = createContext()

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (item) => {
        setCartItems(prevItems => [...prevItems, item])
    }

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart }}>
            {children}
        </CartContext.Provider>
    );
}