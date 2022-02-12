import React from "react";

export default function BATERKA(props) {


    const style = {
        background: 'linear-gradient(0deg, rgba(0,255,21,1)' + props.percentaBaterky +'%, rgba(255,255,255,1) '+ props.percentaBaterky +'%)',
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