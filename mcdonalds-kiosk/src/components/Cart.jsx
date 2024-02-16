import React, { useEffect, useContext } from "react";
import Sidebar from "./Sidebar";
import CartProduct from "./CartProduct";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart({props}) {
   
    useEffect(() => {
    console.log(props)
   })

   const {cartItems, sumOfItems, clearCart} = useContext(CartContext)

   return (
    <main>
        <Sidebar handleFilter={() => {}}/>
        <div className="container-fluid d-flex flex-column align-items-center flex-wrap p-5 ms-5">
            <h1 className="mb-5">Koszyk</h1>
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
            {cartItems.length === 0 &&
                <p>Twój koszyk jest pusty</p>
            }
            <p>Cena zamówienia: {sumOfItems.toFixed(2)} zł</p>
            <div class="row">
                <div class="col">
                    <Link to="/finished">
                        <button type="button" className="btn btn-success me-2" onClick={() => clearCart()}>Złoż zamówienie</button>
                    </Link>
                    <button type="button" className="btn btn-danger" onClick={() => clearCart()}>Wyczyść koszyk</button>
            </div>
            </div>
        </div>
    </main>
   ) 
}

export default Cart;