import React from "react";
import socket from "./Socket";

export default function STATUS() {

    const [status, setStatus] = React.useState('nepripojené'); 

    React.useEffect(() => {
        socket.on('status', (data) => {
            console.log(data);
            setStatus(data);
        });
        //return () => socket.removeListener('status');
      }, []);

      function connectDrone() {
          socket.emit('pripojenie-drona', "pripoj");
      }

    return(
        <div>
            <div className="status">
                <h3>STATUS:</h3>
                <p>{status}</p>
            </div>
            <button onClick={connectDrone}>PRIPOJIŤ</button>
        </div>
        

        
    );    
}