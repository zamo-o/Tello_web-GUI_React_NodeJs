import React from 'react';
import STATUS from './STATUS.jsx'

export default function NAV() {

    return(
        <div className='nav-box'>
            <div className='nav-nadpis'>
              TELLO WEB GUI  
            </div>
            <div className='nav-links'>
                <STATUS />
            </div>
        </div>
    );
}