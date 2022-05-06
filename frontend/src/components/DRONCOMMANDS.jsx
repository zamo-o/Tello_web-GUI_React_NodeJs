import React from "react";
import BUTTON from "./BUTTON.jsx";
import BUTTON_START_STOP from "./BUTTON_START_STOP.jsx";
import ORANGE_BUTTON from "./ORANGE_BUTTON.jsx";

export default  function DRONCOMMANDS() {

    return(
    <div className="dron-commands item2">
        <div className="box">

                <div className="riadok">
                    <BUTTON nazov="↺" prikaz="ccw 45" tlacitko="Q"/>
                    <BUTTON nazov="DOPREDU" prikaz="forward 40" tlacitko="W"/>
                    <BUTTON nazov="↻" prikaz="cw 45" tlacitko="E"/>
                </div>

                <div className="riadok">
                    <BUTTON nazov="DOĽAVA" prikaz="left 40" tlacitko="A"/>
                    <BUTTON_START_STOP />
                    <BUTTON nazov="DOPRAVA" prikaz="right 40" tlacitko="D"/>
                </div>
                
                <div className="riadok">
            
                    <BUTTON nazov="DOZADU" prikaz="back 40" tlacitko="S"/>
                    
                </div>

                <div className="riadok">
                    <BUTTON nazov="HORE" prikaz="up 40" tlacitko="↑"/>
                    <BUTTON nazov="DOLE" prikaz="down 40" tlacitko="↓"/>
                </div>
                
                <div className="riadok">
                    <ORANGE_BUTTON nazov="EMERGENCY" prikaz="emergency" tlacitko="SPACE"/>
                </div>
                

        </div>
        
    </div>
        );
}