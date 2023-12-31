import React from "react";
import Sidebar from "./Sidebar";
import CartProduct from "./CartProduct";

function Cart({props}) {
   return (
    <main>
        <Sidebar />
        <div className="container-fluid d-flex flex-column align-items-center flex-wrap p-5 ms-5">
            <h1 className="mb-5">Twój koszyk</h1>
            {props.map((item) => (
                <CartProduct 
                    id={item.name} 
                    key={item.name} 
                    name={item.name}
                    image={item.link} 
                    description={item.description}
                    price={item.price}
                /> 
            ))}
        </div>
    </main>
   ) 
}

export default Cart;