import { createContext, useState, useMemo } from "react";
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

    const sumOfItems = useMemo(() => {
        const totalSum = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);
        return totalSum
      }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, deleteItem, sumOfItems }}>
            {children}
        </CartContext.Provider>
    );
}