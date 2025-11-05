import React, { useState } from "react";

const Semaforo = () => {
    
    const [color, setColor] = useState ("red");
    
    const alternateColor = () => {
        
        if (color === "red") {
            setColor ("amarillo")
        }
        else if (color === "amarillo") {
            setColor ("verde")
        };
    };

    return (
        <div className="text-center mt-5">
            <div className="text-center background">
                <button onClick="" type="button" className="btn btn-danger rounded-circle btn-circle m-1"></button>
                <button onClick="" type="button" className="btn btn-warning rounded-circle btn-circle m-1"></button>
                <button onClick="" type="button" className="btn btn-success rounded-circle btn-circle m-1"></button>
            </div>
        </div>
    );
};

export default Semaforo;