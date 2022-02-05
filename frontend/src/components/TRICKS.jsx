import React from "react";
import BUTTON from "./BUTTON.jsx";

export default  function TRICKS() {
    return(
    <div className="dron-tricks item4">

        <div className="riadok">
            <BUTTON nazov="FLIP DOPREDU" prikaz="flip f" tlacitko="H"/>
        </div>

        <div className="riadok">
            <BUTTON nazov="FLIP DOĽAVA" prikaz="flip l" tlacitko="H"/>
            <BUTTON nazov="" prikaz="" tlacitko=""/>
            <BUTTON nazov="FLIP DOPRAVA" prikaz="flip r" tlacitko="H"/>
        </div>
        
        <div className="riadok">
            <BUTTON nazov="FLIP DOZADU" prikaz="flip b" tlacitko="H"/>
        </div>
        
        </div>
        );
}