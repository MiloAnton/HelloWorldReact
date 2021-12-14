import React from "react";
import './button.css';

export default function Button({onClick:oCEX, value}) {
    return ( 
        <button 
            onClick={oCEX}
            className="button-30"
        >
            {value}
        </button>
    );
}