import React from "react";

function Product(props) {
    return (
        <div className="card w-20 me-3 mb-3">
                <img src={props.image} className="card-img-top" alt="product" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    {/* <p className="card-text">{props.description}</p> */}
                    <p className="card-text">Cena - {props.price} zł</p>
                    <a href="/" className="btn btn-orange">Dodaj do koszyka</a>
                </div>
        </div>
    )
}

export default Product;