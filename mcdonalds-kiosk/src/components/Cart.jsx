import React, { useEffect, useContext } from "react";
import Sidebar from "./Sidebar";
import CartProduct from "./CartProduct";
import { CartContext } from "../context/CartContext";

function Cart({props}) {
   
    useEffect(() => {
    console.log(props)
   })

   const {sumOfItems} = useContext(CartContext)

   return (
    <main>
        <Sidebar />
        <div className="container-fluid d-flex flex-column align-items-center flex-wrap p-5 ms-5">
            <h1 className="mb-5">Twój koszyk</h1>
            {props.map((item, index) => (
                <CartProduct 
                    id={index} 
                    key={index} 
                    name={item.name}
                    image={item.image} 
                    description={item.description}
                    price={item.price}
                /> 
            ))}
            <p>Suma: {sumOfItems.toFixed(2)} zł</p>
        </div>
    </main>
   ) 
}

export default Cart;