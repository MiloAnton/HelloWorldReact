import React from "react";
import "./../App.css";

export default function IconFct(props) {
    return (
        <img 
            alt="avatarResult"
            src={`https://avatars.dicebear.com/api/${Object.values(props.type).shift()}/${props.seed}.svg`}
            style={{
                height:"200px",
                width:"200px",
                marginBottom:"20px",
            }}
        />
    );
}