import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function FinishedOrder() {
    return (
        <main>        
            <Sidebar />
            <div className="container-fluid d-flex flex-column align-items-center flex-wrap p-5 ms-5">
                <h1 className="mb-5">Twoje zamowienie zostało przyjete</h1>
                <Link to="/">
                    <button type="button" className="btn btn-primary">Powrot do strony głownej</button>
                </Link>
            </div>
        </main>

    )
}

export default FinishedOrder