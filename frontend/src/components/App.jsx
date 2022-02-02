import React from "react";
import Button from "./Button.jsx";
import socket from "./Socket.js";
import NAV from "./NAV.jsx";
import STATUS from "./STATUS.jsx"
import DRONSTATUS from "./DRONSTATUS.jsx";

//const { io } = require("socket.io-client");
//const socket = io("http://localhost:2121");

function App() {

    

    return(
        <div>

        <NAV />
        <STATUS/>
        <DRONSTATUS />
        
        <div className="odosielanie-prikazov">
        <Button nazov="hore" prikaz="takeoff"/>
        <Button nazov="pristat" prikaz="land"/>
        <Button nazov="flip dolava" prikaz="flip l"/>
        <Button nazov="doprava" prikaz="right 20"/>
        <Button nazov="emergency" prikaz="emergency"/>
        </div>



        </div>
        
    );    
}

export default App;