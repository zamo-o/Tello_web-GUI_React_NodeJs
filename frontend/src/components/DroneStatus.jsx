import React from "react";
import socket from "./Socket";

export default function DroneStatus() {

    const [droneState, setDroneState] = React.useState([]);

    React.useEffect(() => {
        socket.on('drone-state', (data) => {
            setDroneState(data);
        });
        return () => socket.removeListener('drone-state');
      }, []);


    return(
        droneState.map(parameter => {
            <div>
            <h3>{parameter.parameter}</h3>
            <p>{parameter.hodnota}</p>
            </div>
        })
    );  
}

