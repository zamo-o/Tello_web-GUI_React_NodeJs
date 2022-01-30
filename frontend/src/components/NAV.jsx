import React from 'react';
import './css/style.css'

export default function NAV() {

    return(
        <div className='nav-box'>
            <div className='nav-nadpis'>
              TELLO WEB GUI  
            </div>
            <div className='nav-links'>
                <a href='#'>CONTROLLER</a>
                <a href='#'>POČASIE</a>
            </div>
        </div>
    );
}