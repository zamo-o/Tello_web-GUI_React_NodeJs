import React from "react";

export default function BATERKA(props) {


    const style = {
        background: 'linear-gradient(0deg, rgba(255,76,41,1)' + props.percentaBaterky +'%, rgba(255,255,255,1) '+ props.percentaBaterky +'%)',
    }

    return (
    <div className="baterka-box">
        <div className="baterka" style={style}>
            <p>
                {props.percentaBaterky}%
            </p>
        </div>
    </div>
    );
}