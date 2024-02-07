import { createContext, useState } from "react";
import React from "react";

export const CartContext = createContext()

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (item) => {
        setCartItems(prevItems => [...prevItems, item])
    }

    const deleteItem = (item) => {
        const newItems = [...cartItems]
        newItems.splice(item, 1)
        setCartItems(newItems)
    } 

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, deleteItem }}>
            {children}
        </CartContext.Provider>
    );
}