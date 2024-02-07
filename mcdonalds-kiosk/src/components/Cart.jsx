import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import CartProduct from "./CartProduct";

function Cart({props}, handleFilter) {
   useEffect(() => {
    console.log(props)
   }) 
   return (
    <main>
        <Sidebar handleFilter={handleFilter} />
        <div className="container-fluid d-flex flex-column align-items-center flex-wrap p-5 ms-5">
            <h1 className="mb-5">Twój koszyk</h1>
            {props.map((item) => (
                <CartProduct 
                    id={item.name} 
                    key={item.name} 
                    name={item.name}
                    image={item.image} 
                    description={item.description}
                    price={item.price}
                /> 
            ))}
        </div>
    </main>
   ) 
}

export default Cart;