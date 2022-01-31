import React from "react";
import socket from "./Socket";

export default function DRONSTATUS() {

    const [droneState, setDroneState] = React.useState({
        pitch: '0',
        roll: '0',
        yaw: '0',
        vgx: '0',
        vgy: '0',
        vgz: '0',
        templ: '93',
        temph: '96',
        tof: '6553',
        h: '0',
        bat: '84',
        baro: '834.52',
        time: '0',
        agx: '5.00',
        agy: '5.00',
        agz: '-998.00',
        '': undefined
      });

    React.useEffect(() => {
        socket.on('drone-state', (data) => {
            setDroneState(data);
        });
        return () => socket.removeListener('drone-state');
      }, []);
    
      /* Nastavovanie hodnot ku parametrom 
        const pitch = droneState.find(status => {return status.parameter == "pitch"});
        const roll = droneState.find(status => {return status.parameter == "roll"});
        const yaw = droneState.find(status => {return status.parameter == "yaw"});
        const baterka = droneState.find(statusBaterky => {return statusBaterky.parameter == "bat"});
        const templ = droneState.find(status => {return status.parameter == "templ"});
        const temph = droneState.find(status => {return status.parameter == "temph"});
      */

        const {pitch, roll, yaw, vgx, vgy, vgz, templ, temph, tof, h, bat, baro, time, agx, agy, agz} = droneState;

        return(
            <>
            <div>
            Baterka:
            {bat}
            </div>
            </>
        );  
    
    
    
}

