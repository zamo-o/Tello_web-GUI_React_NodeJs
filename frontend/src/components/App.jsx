import React from "react";
import Button from "./Button.jsx";
import DroneStatus from "./DroneStatus.jsx";
import socket from "./Socket.js";

//const { io } = require("socket.io-client");
//const socket = io("http://localhost:2121");

function App() {

    

    return(
        <div>

        <h1>WEB-GUI</h1>
        
        <h3>
            Status drona :
        </h3>
        
        <DroneStatus />
        
        <div className="odosielanie-prikazov">
        <Button prikaz="fly"/>
        <Button prikaz="serus"/>
        </div>



        </div>
        
    );    
}

export default App;