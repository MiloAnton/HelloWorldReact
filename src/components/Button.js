import React from "react";
import './button.css';

export default function Button({onClick:oCEX, value}) {
    return ( 
        <button 
            onClick={oCEX}
            className="buttoncss"
        >
            {value}
        </button>
    );
}