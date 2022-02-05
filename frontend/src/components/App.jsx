import React from "react";
import socket from "./Socket.js";

import NAV from "./NAV.jsx";
import STATUS from "./STATUS.jsx"
import DRONSTATUS from "./DRONSTATUS.jsx";
import DRONCOMMANDS from "./DRONCOMMANDS.jsx";
import TRICKS from "./TRICKS.jsx";
import INFO from "./INFO.jsx";
import ZAMO_O from "./ZAMO_O.jsx"

//const { io } = require("socket.io-client");
//const socket = io("http://localhost:2121");

function App() {

    

    return(
        <div>

        <section className="nav-status">
            <NAV />
            <STATUS/>
        </section>
        

        <section className="skuska-grid">
            <DRONSTATUS />
            <DRONCOMMANDS />
            <INFO />
            <TRICKS />
        </section>
        
        <section className="footer">
            <ZAMO_O />
        </section>



        </div>
        
    );    
}

export default App;
