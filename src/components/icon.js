import React from "react";

export default function IconFct({value}) {
    return (
        <img 
            src={`https://avatars.dicebear.com/api/pixel-art/${value}.svg`}
            style={{
                height:"200px",
                width:"200px",
                marginBottom:"20px"
            }} 
        />
    );
}