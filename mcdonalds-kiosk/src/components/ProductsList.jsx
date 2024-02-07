import React from "react";
import Product from "./Product";


function ProductsList({props}) {
    
    return (
        <div className="container-fluid d-flex justify-content-start flex-wrap p-5 ms-5">
            {props.map((item) => (
                <Product 
                    key={item.name} 
                    id={item.name}
                    name={item.name} 
                    image={item.link} 
                    description={item.description}
                    price={item.price}
                />
            ))}
        </div>
    )
}

export default ProductsList