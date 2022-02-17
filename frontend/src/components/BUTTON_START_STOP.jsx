import React from "react";
import BUTTON from "./BUTTON.jsx";

export default function BUTTON_START_STOP() {
    return (
        <div className="button-start-stop">
            <BUTTON nazov="ŠTART" prikaz="takeoff" tlacitko="R"/>
            <BUTTON nazov="PRISTÁŤ" prikaz="land" tlacitko="F"/>
        </div>
    );
}