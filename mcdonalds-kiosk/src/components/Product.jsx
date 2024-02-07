import React from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";


function Product(props) {
    const {addItemToCart} = useContext(CartContext)
    return (
        <div className="card w-20 me-3 mh-50 mb-3">
                <img src={props.image} className="card-img-top" alt="product" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    {/* <p className="card-text">{props.description}</p> */}
                    <p className="card-text">Cena - {props.price} zł</p>
                    <button className="btn btn-orange" onClick={() => addItemToCart(props)}>Dodaj do koszyka</button>
                </div>
        </div>
    )
}

export default Product;