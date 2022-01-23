import React from "react";
import Button from "./Button.jsx";
import DroneState from "./DroneStatus.jsx";
import socket from "./Socket.js";

//const { io } = require("socket.io-client");
//const socket = io("http://localhost:2121");

function App() {

    

    return(
        <div>

        <h1>samino</h1>
        
        <h3>
            Status drona:
        </h3>
        <DroneState />

        </div>
        
    );    
}

export default App;