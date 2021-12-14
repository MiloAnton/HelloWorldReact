import React from "react";

export default function Button({onClick:oCEX, value}) {
    return ( 
        <button 
            onClick={oCEX}
            style={{ 
                backgroundColor:"#B884FF",
                marginTop:"33px", 
                height:"50px",
                width:"250px",
                borderRadius:"13px",
                fontSize:"18px"
        }}>
            {value}
        </button> 
    );
}