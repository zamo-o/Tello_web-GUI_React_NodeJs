import React from "react";
import BUTTON from "./BUTTON.jsx";

export default  function DRONCOMMANDS() {
    return(
    <div className="dron-commands item2">

        <div className="riadok">
            <BUTTON nazov="<--" prikaz="ccw 45" tlacitko="H"/>
            <BUTTON nazov="DOPREDU" prikaz="forward 20" tlacitko="H"/>
            <BUTTON nazov="-->" prikaz="cw 45" tlacitko="H"/>
        </div>

        <div className="riadok">
            <BUTTON nazov="DOĽAVA" prikaz="left 20" tlacitko="H"/>
            <BUTTON nazov="VZLIETNUŤ" prikaz="takeoff" tlacitko="H"/>
            <BUTTON nazov="DOPRAVA" prikaz="right 20" tlacitko="H"/>
        </div>
        
        <div className="riadok">
       
            <BUTTON nazov="DOZADU" prikaz="back 20" tlacitko="H"/>
            
        </div>

        <div className="riadok">
            <BUTTON nazov="HORE" prikaz="up 20" tlacitko="H"/>
            <BUTTON nazov="DOLE" prikaz="DOWN 20" tlacitko="H"/>
        </div>
        
        <div className="riadok">
            <BUTTON nazov="EMERGENCY" prikaz="emergency" tlacitko="H"/>
        </div>
        
        </div>
        );
}