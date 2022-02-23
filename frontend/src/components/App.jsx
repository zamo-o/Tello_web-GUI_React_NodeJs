import React from "react";
import socket from "./Socket.js";

import './css/style.css'

import NAV from "./NAV.jsx";
//import STATUS from "./STATUS.jsx"
import DRONSTATUS from "./DRONSTATUS.jsx";
import DRONCOMMANDS from "./DRONCOMMANDS.jsx";
import TRICKS from "./TRICKS.jsx";
import INFO from "./INFO.jsx";
import ZAMO_O from "./ZAMO_O.jsx"

//const { io } = require("socket.io-client");
//const socket = io("http://localhost:2121");

function App() {

    document.addEventListener("keypress", (e) => {
        console.log(e);
       // let keyMoznosti = ["KeyW", "KeyQ", "KeyE", "KeyA", "KeyD", "KeyR", "KeyF", "KeyS", "ArrowUP", "ArrowDown", "Space", "KeyI", "KeyJ", "KeyL", "KeyK"];
        switch (e.code) {
            case "KeyQ":
                socket.emit('prikaz-let', "ccw 45");
                break;
            case "KeyW":
                socket.emit('prikaz-let', "forward 20");
                break;
            case "KeyE":
                socket.emit('prikaz-let', "cw 45");
                break;
            case "KeyA":
                socket.emit('prikaz-let', "left 20");
                break;
            case "KeyR":
                socket.emit('prikaz-let', "takeoff");
                break;
            case "KeyF":
                socket.emit('prikaz-let', "land");
                break;
            case "KeyD":
                socket.emit('prikaz-let', "right 20");
                break;
            case "KeyS":
                socket.emit('prikaz-let', "back 20");
                break;
            case "ArrowUp":
                socket.emit('prikaz-let', "up 20");
                break;
            case "ArrowDown":
                socket.emit('prikaz-let', "down 20");
                break;
            case "Space":
                socket.emit('prikaz-let', "emergency");
                break;

            case "KeyI":
            socket.emit('prikaz-let', "flip f");
            break;
            case "KeyJ":
                socket.emit('prikaz-let', "flip l");
                break;
            case "KeyL":
                socket.emit('prikaz-let', "flip r");
                break;
            case "KeyK":
                socket.emit('prikaz-let', "flip b");
                break;

            default:
                break;
        }
    })

    return(
        
        <div>

        <div className="content">

        <section className="nav-status">
            <NAV />
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


        </div>
        
    );    
}

export default App;