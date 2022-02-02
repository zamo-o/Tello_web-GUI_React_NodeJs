import React from "react";
import socket from "./Socket";


function Button(props){


    function handleClick() {

        let prikaz = props.prikaz
        socket.emit('prikaz-let', prikaz);

        console.log("odoslalt som " + prikaz);
    }
    

    return(
        <div>
            <button onClick={handleClick}>{props.nazov}</button>
        </div>
    );
}

export default Button;