import React from "react";
import socket from "./Socket";


export default function BUTTON(props){


    function handleClick() {

        let prikaz = props.prikaz
        socket.emit('prikaz-let', prikaz);

        console.log("odoslalt som " + prikaz);
    }
    

    return(
        <div className="button-box" onClick={handleClick}>
            <div className="button-nadpis">
            <p>{props.nazov}</p>
            </div>
            <div className="button-ciarka">

            </div>
            <div className="button-tlacitko">
            <p>{props.tlacitko}</p>
            </div>
            
        </div>
    );
}

//