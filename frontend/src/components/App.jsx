import React from "react";
import Button from "./Button.jsx";
import DroneStatus from "./DroneStatus.jsx";
import socket from "./Socket.js";
import NAV from "./NAV.jsx";
import STATUS from "./STATUS.jsx"

//const { io } = require("socket.io-client");
//const socket = io("http://localhost:2121");

function App() {

    

    return(
        <div>

        <NAV />
        <STATUS status="none" />
        <DroneStatus />
        
        <div className="odosielanie-prikazov">
        <Button prikaz="fly"/>
        <Button prikaz="serus"/>
        </div>



        </div>
        
    );    
}

export default App;