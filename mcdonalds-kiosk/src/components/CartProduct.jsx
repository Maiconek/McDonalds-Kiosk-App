import React from "react";

function CartProduct(props) {
    return (
        <div className="card mb-3 w-25">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.image} className="img-fluid rounded-start mt-4" alt="cart product"/>
                    </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text"><small className="text-body-secondary">{props.price} - zł</small></p>
                        <button type="button" className="btn btn-danger btn-sm">Usuń</button>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default CartProduct;