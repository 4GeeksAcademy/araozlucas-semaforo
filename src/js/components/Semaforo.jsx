import React, { useState } from "react";

const Semaforo = () => {
    
    const [color, setColor] = useState ({ redlight: '',
                                          yellowlight: '',
                                          greenlight: ''});
    
    const lightRed = () => {
        setColor ({redlight: 'glow-red', yellowlight: '', greenlight: ''})
    };

    const lightYellow = () => {
        setColor ({redlight: '', yellowlight: 'glow-yellow', greenlight: ''})
    };

    const lightGreen = () => {
        setColor ({redlight: '', yellowlight: '', greenlight: 'glow-green'})
    };
    

    return (
        <div className="text-center mt-5">
            <div className="text-center">
                <div className="btn btn-dark m-1">
                    <button onClick={lightRed} type="button" className={`btn btn-danger rounded-circle btn-circle m-1 ${color.redlight}`}></button>
                    <button onClick={lightYellow} type="button" className={`btn btn-warning rounded-circle btn-circle m-1 ${color.yellowlight}`}></button>
                    <button onClick={lightGreen} type="button" className={`btn btn-success rounded-circle btn-circle m-1 ${color.greenlight}`}></button>
                </div>
            </div>
        </div>
    );
};

export default Semaforo;