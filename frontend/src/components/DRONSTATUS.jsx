import React from "react";
import socket from "./Socket";
import BATERKA from "./BATERKA.jsx"

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
        bat: '95',
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
        let temp = ((Number(templ) + Number(temph)) / 2);

        return(
            
            <div className="dron-status item1">

            <BATERKA percentaBaterky={bat} />
              <div className="dalsie-dron-info">

                <div className="dron-status-hlavne">
                <div className="block">
                    <h3>
                      Výška: <span>{h} cm</span>
                    </h3>
                    <h3>
                      Teplota: <span>{temp} °C</span>
                    </h3>
                </div>
                <div className="block">
                    <h3>
                      Nadmorksá výška: <span>{baro} cm</span>
                    </h3>
                    <h3>
                      Stena: <span>{tof} cm</span>
                    </h3>
                    </div>
                </div>   

                <div className="dron-status-vedlajsie">
                <div className="block">
                  <div className="block">
                      <p>
                        sklon: {pitch}
                      </p>
                      <p>
                        naklonenie: {roll}
                      </p>
                      <p>
                      zrýchlenie: x: {agx}, y: {agy}, z: {agz}
                    </p> 
                    </div>
                    <div className="block">
                      <p>
                        vychýlenie: {yaw}
                      </p>
                      <p>
                        rýchlosť: x: {vgx}, y: {vgy}, z: {vgz}
                      </p> 
                      <p>
                      čas vo vzduchu: {time}
                      </p> 
                    </div>
                </div>
                  
                  <div className="block">
                       
                  </div>
                  
                  
                  
                  
                </div>
          
              </div>
            </div>
            
        );  
    
    
    
}

