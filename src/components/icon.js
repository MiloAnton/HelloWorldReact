import React from "react";
import "./../App.css";

export default function IconFct(props) {
    let category = '';
    if(props.type) {
        category = Object.values(props.type).shift();
    } else {
        category = 'miniavs';
    }
    console.log(category)
    return (
        <img 
            alt="avatarResult"
            src={`https://avatars.dicebear.com/api/${category}/${props.seed}.svg`}
            style={{
                height:"200px",
                width:"200px",
                marginBottom:"20px",
            }}
        />
    );
}