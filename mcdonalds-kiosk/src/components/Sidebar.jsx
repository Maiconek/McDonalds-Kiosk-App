import React from "react";

function Sidebar({handleFilter}) {
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
                    <a href="/" className="nav-link text-white" aria-current="page">
                        Home
                    </a>
                </li>
                <li>
                    <button className="nav-link text-white" onClick={() => handleFilter("burger")}>
                        Burgers
                    </button>
                </li>
                <li>
                    <button className="nav-link text-white" onClick={() => handleFilter("wrap")}>
                        Wraps
                    </button>
                </li>
                <li>
                    <button className="nav-link text-white" onClick={() => handleFilter("fries")}>
                        Fries
                    </button>
                </li>
                <li>
                    <button className="nav-link text-white" onClick={() => handleFilter("deser")}>
                        Desserts
                    </button>
                </li>
                <li>
                    <a href="/cart" className="nav-link text-white">
                        Cart
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;