import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function FinishedOrder() {
    const [countdown, setCountdown] = useState(30 * 60)
    useEffect(() => {
        
        const timer = setInterval(() => {
          setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
    
        return () => {
          clearInterval(timer);
        };
    }, []);
    
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
    
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
    
        return `${formattedMinutes}:${formattedSeconds}`;
    };
    
    return (
        <main>        
            <Sidebar handleFilter={() => {}}/>
            <div className="container-fluid d-flex flex-column align-items-center flex-wrap p-5 ms-5">
                <h1 className="mb-4">Twoje zamówienie zostało przyjęte</h1>
                <h2 className="mb-4">Przewidywany czas oczekiwania:</h2>
                <h3 className="mb-4">{formatTime(countdown)}</h3>
                <Link to="/">
                    <button type="button" className="btn btn-primary">Powrót do strony głównej</button>
                </Link>
            </div>
        </main>

    )
}

export default FinishedOrder