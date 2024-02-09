import React, { useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Sidebar({handleFilter}) {
    useEffect(() => {
        console.log(cartItems.length)
    })
    const {cartItems} = useContext(CartContext)
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-green">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-0 md-auto text-white text-decoration-none">
                <img className="bi" width="60" height="52" 
                src="https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-logo-simple-m-1.png"
                alt="McDonalds logo"/>
                <span className="fs-4">McDonald's</span>
            </a>
            <hr></hr>
            <ul className="nav nav-pills flex-column mb-auto p-10">
                <li className="nav-item">
                    <Link to={{
                        pathname: "/", 
                        state: cartItems}}  
                        className="nav-link text-white" 
                        aria-current="page" 
                        onClick={() => handleFilter("")}>
                        Strona główna
                    </Link>
                </li>
                <li>
                    <button className="nav-link text-white" onClick={() => handleFilter("burger")}>
                        Burgery
                    </button>
                </li>
                <li>
                    <button className="nav-link text-white" onClick={() => handleFilter("wrap")}>
                        Wrapy
                    </button>
                </li>
                <li>
                    <button className="nav-link text-white" onClick={() => handleFilter("fries")}>
                        Frytki
                    </button>
                </li>
                <li>
                    <button className="nav-link text-white" onClick={() => handleFilter("deser")}>
                        Desery
                    </button>
                </li>
                <li>
                    <Link to={{pathname: "/cart", state: cartItems}}  className="nav-link text-white">
                        Koszyk ({cartItems.length})
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;