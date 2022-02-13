import React from "react";
import BUTTON from "./BUTTON.jsx";

export default  function TRICKS() {
    return(
    <div className="dron-tricks item4">

        <div className="riadok">
            <BUTTON nazov="FLIP DOPREDU" prikaz="flip f" tlacitko="I"/>
        </div>

        <div className="riadok">
            <BUTTON nazov="FLIP DOĽAVA" prikaz="flip l" tlacitko="J"/>
            <BUTTON nazov="" prikaz="" tlacitko=""/>
            <BUTTON nazov="FLIP DOPRAVA" prikaz="flip r" tlacitko="L"/>
        </div>
        
        <div className="riadok">
            <BUTTON nazov="FLIP DOZADU" prikaz="flip b" tlacitko="K"/>
        </div>
        
        </div>
        );
}